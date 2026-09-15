import { useEffect, useMemo, useState } from "react";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

import { FaCheck, FaMapMarkerAlt, FaTimes } from "react-icons/fa";

import { geoMercator, geoPath } from "d3-geo";

import {
  coveredProvinces,
  getProvinceFromGeoJSON,
} from "../../Components/Data File/Main Page Data/CoverageData";

export default function WhereWeWork() {
  const shouldReduceMotion = useReducedMotion();

  const [geoData, setGeoData] = useState(null);
  const [error, setError] = useState(null);

  const [hoveredProvince, setHoveredProvince] = useState(null);
  const [selectedProvince, setSelectedProvince] = useState(null);

  // ==================================================
  // LOAD GEOJSON
  // ==================================================

  useEffect(() => {
    const controller = new AbortController();

    fetch("/maps/afghanistan-provinces.geojson", {
      signal: controller.signal,
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`Could not load map: ${response.status}`);
        }

        const text = await response.text();

        try {
          return JSON.parse(text);
        } catch {
          throw new Error("The GeoJSON file is not valid JSON.");
        }
      })
      .then(setGeoData)
      .catch((err) => {
        if (err.name === "AbortError") return;

        console.error("GeoJSON error:", err);
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  // ==================================================
  // GET FEATURES
  // ==================================================

  const features = useMemo(() => {
    if (!geoData) return [];

    if (
      geoData.type === "FeatureCollection" &&
      Array.isArray(geoData.features)
    ) {
      return geoData.features;
    }

    if (geoData.type === "Feature") {
      return [geoData];
    }

    return [];
  }, [geoData]);

  // ==================================================
  // MAP DATA
  // ==================================================

  const mapData = useMemo(() => {
    if (!features.length) return null;

    const width = 1100;
    const height = 650;

    const collection = {
      type: "FeatureCollection",
      features,
    };

    const projection = geoMercator();

    projection.fitSize([width - 50, height - 50], collection);

    const pathGenerator = geoPath(projection);

    return {
      width,
      height,
      projection,
      pathGenerator,
    };
  }, [features]);

  // ==================================================
  // GET PROVINCE NAME
  // ==================================================

  const getGeoJSONProvinceName = (feature) => {
    const properties = feature?.properties || {};

    const possibleNames = [
      properties.name,
      properties.NAME,
      properties.Name,
      properties.NAME_1,
      properties.Name_1,
      properties.name_1,
      properties.name_en,
      properties.NAME_EN,
      properties.Name_EN,
      properties.province,
      properties.PROVINCE,
      properties.Province,
      properties.province_name,
      properties.PROVINCE_NAME,
      properties.shapeName,
      properties.ShapeName,
      properties.shapeName_en,
      properties.ShapeName_EN,
      properties.admin1Name,
      properties.admin1,
      properties.region,
      properties.Region,
      properties.label,
      properties.LABEL,
      properties.nl_name,
      properties.NL_NAME,
      properties.varname_1,
      properties.VARNAME_1,
    ];

    return possibleNames.find(
      (value) => typeof value === "string" && value.trim().length > 0,
    );
  };

  // ==================================================
  // MATCH PROVINCE DATA
  // ==================================================

  const getProvinceData = (feature) => {
    const properties = feature?.properties || {};

    const possibleNames = [
      properties.name,
      properties.NAME,
      properties.Name,
      properties.NAME_1,
      properties.Name_1,
      properties.name_1,
      properties.name_en,
      properties.NAME_EN,
      properties.Name_EN,
      properties.province,
      properties.PROVINCE,
      properties.Province,
      properties.province_name,
      properties.PROVINCE_NAME,
      properties.shapeName,
      properties.ShapeName,
      properties.shapeName_en,
      properties.ShapeName_EN,
      properties.admin1Name,
      properties.admin1,
      properties.region,
      properties.Region,
      properties.label,
      properties.LABEL,
      properties.nl_name,
      properties.NL_NAME,
      properties.varname_1,
      properties.VARNAME_1,
    ].filter((value) => typeof value === "string" && value.trim().length > 0);

    for (const name of possibleNames) {
      const matched = getProvinceFromGeoJSON(name);

      if (matched) {
        return matched;
      }
    }

    for (const value of Object.values(properties)) {
      if (typeof value !== "string") continue;

      const matched = getProvinceFromGeoJSON(value);

      if (matched) {
        return matched;
      }
    }

    return null;
  };

  // ==================================================
  // SELECT PROVINCE
  // ==================================================

  const handleProvinceSelect = (
    province,
    provinceId,
    provinceName,
    feature,
  ) => {
    setSelectedProvince({
      id: provinceId,
      province,
      name: provinceName,
      feature,
    });
  };

  const activeProvince = selectedProvince || hoveredProvince;

  // ==================================================
  // LOADING
  // ==================================================

  if (!geoData && !error) {
    return (
      <section
        aria-label="Where We Work"
        className="
          bg-[#F7FBF8]
          pb-16
          pt-10
          sm:pb-20
          sm:pt-12
        "
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div
            className="
              flex
              min-h-[300px]
              items-center
              justify-center
              rounded-2xl
              border
              border-[#0B3D2E]/10
              bg-white
              shadow-[0_12px_35px_rgba(15,23,42,0.06)]
              sm:rounded-3xl
            "
          >
            <div className="text-center">
              <div
                className="
                  mx-auto
                  h-10
                  w-10
                  animate-spin
                  rounded-full
                  border-[3px]
                  border-[#0B3D2E]/10
                  border-t-[#0B3D2E]
                "
                aria-hidden="true"
              />

              <p className="mt-4 text-sm font-medium text-slate-500">
                Loading coverage map...
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ==================================================
  // ERROR
  // ==================================================

  if (error) {
    return (
      <section
        aria-label="Where We Work"
        className="
          bg-[#F7FBF8]
          pb-16
          pt-10
          sm:pb-20
          sm:pt-12
        "
      >
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div
            className="
              rounded-2xl
              border
              border-red-200
              bg-white
              p-8
              text-center
              shadow-[0_12px_35px_rgba(15,23,42,0.05)]
              sm:rounded-3xl
              sm:p-10
            "
          >
            <div
              className="
                mx-auto
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-red-50
                text-red-600
              "
            >
              <FaTimes size={15} />
            </div>

            <p className="mt-4 font-bold text-red-700">
              Afghanistan map could not be loaded.
            </p>

            <p className="mt-2 text-sm leading-6 text-red-500">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  // ==================================================
  // MAIN
  // ==================================================

  return (
    <section
      aria-labelledby="where-we-work-title"
      className="
        relative
        overflow-hidden
        bg-[#F7FBF8]
        pb-16
        pt-10
        sm:pb-20
        sm:pt-12
        lg:pb-24
        lg:pt-14
      "
    >
      {/* Background decoration */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-0
          h-80
          w-80
          rounded-full
          bg-[#A7F3D0]/20
          blur-3xl
        "
        aria-hidden="true"
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -right-40
          h-96
          w-96
          rounded-full
          bg-[#0284C7]/5
          blur-3xl
        "
        aria-hidden="true"
      />

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-5
          sm:px-8
          lg:px-10
          xl:px-12
        "
      >
        {/* ==================================================
            HEADER
        ================================================== */}

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mb-8
            grid
            gap-7
            lg:mb-10
            lg:grid-cols-[1fr_auto]
            lg:items-end
          "
        >
          <div className="max-w-3xl">
            {/* Section Label */}

            <div className="mb-3 flex items-center gap-3">
              <span
                className="
                  h-[2px]
                  w-8
                  rounded-full
                  bg-[#F97316]
                  sm:w-10
                "
                aria-hidden="true"
              />

              <span
                className="
                  text-[10px]
                  font-extrabold
                  uppercase
                  tracking-[0.2em]
                  text-[#0B3D2E]
                  sm:text-xs
                "
              >
                Where We Work
              </span>

              <span
                className="
                  h-[2px]
                  w-8
                  rounded-full
                  bg-[#F97316]
                  sm:w-10
                "
                aria-hidden="true"
              />
            </div>

            <h2
              id="where-we-work-title"
              className="
                max-w-3xl
                text-3xl
                font-extrabold
                leading-[1.08]
                tracking-[-0.04em]
                text-[#0F172A]
                sm:text-4xl
                lg:text-[2.8rem]
              "
            >
              Creating safer communities
              <span className="block text-[#0B3D2E]">across Afghanistan.</span>
            </h2>

            <p
              className="
                mt-4
                max-w-2xl
                text-sm
                leading-6
                text-slate-600
                sm:text-base
                sm:leading-7
              "
            >
              DAFA operates across Afghanistan to reduce the impact of explosive
              hazards and support safer communities.
            </p>
          </div>

          {/* Coverage */}

          <div
            className="
              flex
              items-center
              gap-4
              border-l-[3px]
              border-[#F97316]
              pl-4
              lg:min-w-[200px]
              lg:pb-1
            "
          >
            <div>
              <div
                className="
                  text-4xl
                  font-extrabold
                  leading-none
                  tracking-[-0.04em]
                  text-[#0B3D2E]
                  sm:text-5xl
                "
              >
                {coveredProvinces}
              </div>

              <div
                className="
                  mt-2
                  text-[10px]
                  font-extrabold
                  uppercase
                  tracking-[0.15em]
                  text-slate-500
                "
              >
                Provinces covered
              </div>
            </div>
          </div>
        </motion.div>

        {/* ==================================================
            MAP CONTAINER
        ================================================== */}

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.65,
            delay: shouldReduceMotion ? 0 : 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            overflow-hidden
            rounded-2xl
            border
            border-[#0B3D2E]/10
            bg-[#0B3D2E]
            shadow-[0_18px_55px_rgba(11,61,46,0.12)]
            sm:rounded-3xl
            lg:shadow-[0_24px_70px_rgba(11,61,46,0.14)]
          "
        >
          <div
            className="
              grid
              lg:grid-cols-[minmax(0,1fr)_300px]
            "
          >
            {/* ==================================================
                MAP
            ================================================== */}

            <div
              className="
                relative
                min-h-[470px]
                overflow-hidden
                bg-[#0B3D2E]
                sm:min-h-[570px]
                lg:min-h-[620px]
              "
            >
              {/* Map texture */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-[0.055]
                  [background-image:radial-gradient(#ffffff_1px,transparent_1px)]
                  [background-size:18px_18px]
                "
                aria-hidden="true"
              />

              {/* Soft map glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-[420px]
                  w-[420px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#0F8A63]/10
                  blur-3xl
                "
                aria-hidden="true"
              />

              {/* Map label */}

              <div
                className="
                  absolute
                  left-5
                  top-5
                  z-10
                  sm:left-7
                  sm:top-7
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-2.5
                    rounded-full
                    border
                    border-white/10
                    bg-[#062F23]/75
                    px-3.5
                    py-2
                    shadow-[0_8px_25px_rgba(0,0,0,0.12)]
                    backdrop-blur-md
                  "
                >
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#F97316]
                      shadow-[0_0_0_3px_rgba(249,115,22,0.12)]
                    "
                  />

                  <span
                    className="
                      text-[9px]
                      font-extrabold
                      uppercase
                      tracking-[0.18em]
                      text-white/70
                    "
                  >
                    Geographic Coverage
                  </span>
                </div>
              </div>

              {/* ==================================================
                  SVG MAP
              ================================================== */}

              {mapData && (
                <svg
                  viewBox={`0 0 ${mapData.width} ${mapData.height}`}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    p-7
                    sm:p-10
                    lg:p-12
                  "
                  role="img"
                  aria-label="Interactive map showing DAFA coverage across Afghanistan"
                >
                  {features.map((feature, index) => {
                    const province = getProvinceData(feature);

                    const provinceName =
                      getGeoJSONProvinceName(feature) ||
                      province?.name ||
                      `Province ${index + 1}`;

                    const provinceId = province?.id ?? provinceName;

                    const isCovered = Boolean(province?.dafaWork);

                    const isHovered = hoveredProvince?.id === provinceId;

                    const isSelected = selectedProvince?.id === provinceId;

                    const centroid = mapData.pathGenerator.centroid(feature);

                    return (
                      <g key={`${provinceId}-${index}`}>
                        {/* ==================================================
                            ORANGE HOVER MARKER ONLY
                        ================================================== */}

                        <AnimatePresence>
                          {isHovered && (
                            <motion.g
                              initial={
                                shouldReduceMotion
                                  ? false
                                  : {
                                      opacity: 0,
                                      scale: 0.65,
                                    }
                              }
                              animate={{
                                opacity: 1,
                                scale: 1,
                              }}
                              exit={
                                shouldReduceMotion
                                  ? undefined
                                  : {
                                      opacity: 0,
                                      scale: 0.65,
                                    }
                              }
                              transition={{
                                duration: shouldReduceMotion ? 0 : 0.18,
                              }}
                              style={{
                                transformOrigin: `${centroid[0]}px ${
                                  centroid[1] - 25
                                }px`,
                              }}
                            >
                              {/* Connector */}

                              <line
                                x1={centroid[0]}
                                y1={centroid[1] - 5}
                                x2={centroid[0]}
                                y2={centroid[1] - 18}
                                stroke="#F97316"
                                strokeWidth="2"
                                vectorEffect="non-scaling-stroke"
                              />

                              {/* Orange marker */}

                              <circle
                                cx={centroid[0]}
                                cy={centroid[1] - 25}
                                r="10"
                                fill="#F97316"
                                stroke="#FFFFFF"
                                strokeWidth="2.5"
                                vectorEffect="non-scaling-stroke"
                              />

                              <circle
                                cx={centroid[0]}
                                cy={centroid[1] - 25}
                                r="3"
                                fill="#FFFFFF"
                              />
                            </motion.g>
                          )}
                        </AnimatePresence>

                        {/* ==================================================
                            PROVINCE
                        ================================================== */}

                        <motion.path
                          d={mapData.pathGenerator(feature)}
                          initial={false}
                          animate={{
                            fill: isSelected
                              ? "#F97316"
                              : isCovered
                                ? "#5A9B83"
                                : "#315E50",

                            opacity: isSelected ? 1 : isCovered ? 0.94 : 0.58,

                            stroke: isSelected ? "#FFFFFF" : "#0B3D2E",
                          }}
                          transition={{
                            duration: shouldReduceMotion ? 0 : 0.18,
                          }}
                          strokeWidth={isSelected ? 2.5 : 0.8}
                          vectorEffect="non-scaling-stroke"
                          role="button"
                          tabIndex={0}
                          aria-label={`${provinceName}${
                            isCovered
                              ? ", covered province"
                              : ", no current coverage"
                          }`}
                          aria-pressed={isSelected}
                          className="
                            cursor-pointer
                            outline-none
                            focus-visible:stroke-[#F97316]
                            focus-visible:stroke-[2.5px]
                          "
                          onMouseEnter={() => {
                            setHoveredProvince({
                              id: provinceId,
                              province,
                              name: provinceName,
                              feature,
                            });
                          }}
                          onMouseLeave={() => {
                            setHoveredProvince(null);
                          }}
                          onClick={() => {
                            handleProvinceSelect(
                              province,
                              provinceId,
                              provinceName,
                              feature,
                            );
                          }}
                          onKeyDown={(event) => {
                            if (event.key === "Enter" || event.key === " ") {
                              event.preventDefault();

                              handleProvinceSelect(
                                province,
                                provinceId,
                                provinceName,
                                feature,
                              );
                            }
                          }}
                        />
                      </g>
                    );
                  })}
                </svg>
              )}

              {/* ==================================================
                  LEGEND
              ================================================== */}

              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  z-10
                  flex
                  flex-wrap
                  items-center
                  gap-x-5
                  gap-y-2
                  rounded-xl
                  border
                  border-white/10
                  bg-[#062F23]/80
                  px-3.5
                  py-2.5
                  shadow-[0_8px_25px_rgba(0,0,0,0.12)]
                  backdrop-blur-md
                  sm:bottom-7
                  sm:left-7
                  sm:px-4
                  sm:py-3
                "
              >
                <div className="flex items-center gap-2">
                  <span
                    className="
                      h-2
                      w-2
                      rounded-full
                      bg-[#5A9B83]
                    "
                  />

                  <span className="text-[10px] font-semibold text-white/65">
                    Covered
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className="
                      h-2
                      w-2
                      rounded-full
                      bg-[#315E50]
                    "
                  />

                  <span className="text-[10px] font-semibold text-white/65">
                    No current coverage
                  </span>
                </div>
              </div>
            </div>

            {/* ==================================================
                INFORMATION PANEL
            ================================================== */}

            <aside
              className="
                flex
                min-h-[220px]
                flex-col
                justify-between
                border-t
                border-white/10
                bg-[#082F24]
                p-6
                sm:p-8
                lg:min-h-full
                lg:border-l
                lg:border-t-0
                lg:p-8
              "
              aria-live="polite"
            >
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#F97316]
                    "
                    aria-hidden="true"
                  />

                  <p
                    className="
                      text-[9px]
                      font-extrabold
                      uppercase
                      tracking-[0.2em]
                      text-white/40
                    "
                  >
                    Province Details
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  {activeProvince ? (
                    <motion.div
                      key={activeProvince.id}
                      initial={
                        shouldReduceMotion
                          ? false
                          : {
                              opacity: 0,
                              y: 8,
                            }
                      }
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={
                        shouldReduceMotion
                          ? undefined
                          : {
                              opacity: 0,
                              y: -8,
                            }
                      }
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.2,
                      }}
                      className="mt-5"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <h3
                          className="
                            text-2xl
                            font-extrabold
                            leading-tight
                            tracking-[-0.03em]
                            text-white
                            sm:text-3xl
                          "
                        >
                          {activeProvince.name}
                        </h3>

                        {selectedProvince && (
                          <button
                            type="button"
                            onClick={() => setSelectedProvince(null)}
                            aria-label="Clear selected province"
                            className="
                              flex
                              h-8
                              w-8
                              shrink-0
                              items-center
                              justify-center
                              rounded-full
                              border
                              border-white/10
                              bg-white/[0.02]
                              text-white/40
                              transition-all
                              duration-300
                              hover:border-white/20
                              hover:bg-white/5
                              hover:text-white
                              focus:outline-none
                              focus-visible:ring-2
                              focus-visible:ring-[#F97316]
                              focus-visible:ring-offset-2
                              focus-visible:ring-offset-[#082F24]
                            "
                          >
                            <FaTimes size={11} />
                          </button>
                        )}
                      </div>

                      {activeProvince.province?.dafaWork ? (
                        <div className="mt-8">
                          <div className="mb-2 flex items-center gap-2">
                            <div
                              className="
                                flex
                                h-5
                                w-5
                                items-center
                                justify-center
                                rounded-full
                                bg-[#A7F3D0]/10
                              "
                            >
                              <FaCheck className="text-[#A7F3D0]" size={9} />
                            </div>

                            <span
                              className="
                                text-[10px]
                                font-extrabold
                                uppercase
                                tracking-[0.15em]
                                text-[#A7F3D0]
                              "
                            >
                              Area cleared
                            </span>
                          </div>

                          <div
                            className="
                              text-4xl
                              font-extrabold
                              leading-none
                              tracking-[-0.04em]
                              text-white
                              sm:text-5xl
                            "
                          >
                            {activeProvince.province?.areasCleared || "—"}
                          </div>

                          <p className="mt-2 text-xs text-white/35">
                            across this province
                          </p>
                        </div>
                      ) : (
                        <div className="mt-8">
                          <div
                            className="
                              mb-4
                              h-[2px]
                              w-8
                              rounded-full
                              bg-[#F97316]
                            "
                            aria-hidden="true"
                          />

                          <p
                            className="
                              max-w-[220px]
                              text-sm
                              leading-6
                              text-white/45
                            "
                          >
                            No current DAFA coverage is recorded for this
                            province.
                          </p>
                        </div>
                      )}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="empty"
                      initial={shouldReduceMotion ? false : { opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-6"
                    >
                      <div
                        className="
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/10
                          bg-white/[0.02]
                          text-white/25
                        "
                      >
                        <FaMapMarkerAlt size={14} />
                      </div>

                      <p
                        className="
                          mt-5
                          max-w-[210px]
                          text-sm
                          leading-6
                          text-white/40
                        "
                      >
                        Hover over a province to explore coverage.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom statistic */}

              <div className="mt-8 border-t border-white/10 pt-5">
                <div className="flex items-center justify-between">
                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.12em]
                      text-white/30
                    "
                  >
                    Provinces covered
                  </span>

                  <span
                    className="
                      text-sm
                      font-extrabold
                      text-white
                    "
                  >
                    {coveredProvinces}
                  </span>
                </div>
              </div>
            </aside>
          </div>
        </motion.div>

        {/* Mobile instruction */}

        <p
          className="
            mt-4
            text-center
            text-[11px]
            font-medium
            text-slate-400
            lg:hidden
          "
        >
          Tap a province to view its coverage.
        </p>
      </div>
    </section>
  );
}
