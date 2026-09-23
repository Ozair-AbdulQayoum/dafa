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
          py-10
          sm:py-12
          lg:py-14
        "
      >
        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            sm:px-8
            lg:px-10
            xl:px-12
          "
        >
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
              shadow-[0_10px_30px_rgba(15,23,42,0.05)]
              sm:rounded-3xl
            "
          >
            <div className="text-center">
              <div
                className="
                  mx-auto
                  h-9
                  w-9
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
          py-10
          sm:py-12
          lg:py-14
        "
      >
        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            sm:px-8
            lg:px-10
            xl:px-12
          "
        >
          <div
            className="
              rounded-2xl
              border
              border-red-200
              bg-white
              p-8
              text-center
              sm:rounded-3xl
            "
          >
            <div
              className="
                mx-auto
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-red-50
                text-red-600
              "
            >
              <FaTimes size={14} />
            </div>

            <p className="mt-4 font-bold text-red-700">
              Afghanistan map could not be loaded.
            </p>

            <p className="mt-2 text-sm text-red-500">{error}</p>
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
        py-10
        sm:py-12
        lg:py-14
      "
    >
      <div
        className="
          mx-auto
          w-full
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
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
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
            sm:mb-9
            lg:mb-10
          "
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <span
              aria-hidden="true"
              className="
                h-[2px]
                w-8
                rounded-full
                bg-[#F97316]
                sm:w-10
              "
            />

            <span
              className="
                text-[10px]
                font-extrabold
                uppercase
                tracking-[0.2em]
                text-[#0B3D2E]
                sm:text-xs
                sm:tracking-[0.22em]
              "
            >
              Where We Work
            </span>

            <span
              aria-hidden="true"
              className="
                h-[2px]
                w-8
                rounded-full
                bg-[#F97316]
                sm:w-10
              "
            />
          </div>

          <h2
            id="where-we-work-title"
            className="
              text-center
              text-2xl
              font-extrabold
              leading-[1.1]
              tracking-[-0.035em]
              text-[#0F172A]

              sm:text-3xl
              lg:text-[2.7rem]
            "
          >
            Creating Safer Communities Across Afghanistan
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-center
              text-sm
              leading-6
              text-slate-600

              sm:text-base
              sm:leading-7
            "
          >
            Explore where DAFA works and discover the geographic impact of our
            humanitarian mine-action activities.
          </p>
        </motion.div>

        {/* ==================================================
            IMPACT SUMMARY
        ================================================== */}

        <div
          className="
            mb-5
            grid
            grid-cols-2
            gap-3

            sm:gap-4

            lg:grid-cols-3
          "
        >
          <div
            className="
              rounded-xl
              border
              border-[#0B3D2E]/10
              bg-white
              p-4
              shadow-[0_5px_18px_rgba(15,23,42,0.04)]

              sm:rounded-2xl
              sm:p-5
            "
          >
            <p
              className="
                text-2xl
                font-extrabold
                tracking-[-0.04em]
                text-[#0B3D2E]

                sm:text-3xl
              "
            >
              {coveredProvinces}
            </p>

            <p
              className="
                mt-1.5
                text-[9px]
                font-extrabold
                uppercase
                tracking-[0.14em]
                text-slate-500

                sm:text-[10px]
              "
            >
              Provinces covered
            </p>
          </div>

          <div
            className="
              rounded-xl
              border
              border-[#0B3D2E]/10
              bg-white
              p-4
              shadow-[0_5px_18px_rgba(15,23,42,0.04)]

              sm:rounded-2xl
              sm:p-5
            "
          >
            <p
              className="
                text-2xl
                font-extrabold
                tracking-[-0.04em]
                text-[#0B3D2E]

                sm:text-3xl
              "
            >
              Afghanistan
            </p>

            <p
              className="
                mt-1.5
                text-[9px]
                font-extrabold
                uppercase
                tracking-[0.14em]
                text-slate-500

                sm:text-[10px]
              "
            >
              Countrywide focus
            </p>
          </div>

          <div
            className="
              col-span-2
              rounded-xl
              border
              border-[#F97316]/20
              bg-[#FFF8F3]
              p-4

              sm:rounded-2xl
              sm:p-5

              lg:col-span-1
            "
          >
            <p
              className="
                text-sm
                font-extrabold
                text-[#0B3D2E]

                sm:text-base
              "
            >
              Interactive Coverage
            </p>

            <p
              className="
                mt-1.5
                text-xs
                leading-5
                text-slate-500
              "
            >
              Hover or select a province to explore its information.
            </p>
          </div>
        </div>

        {/* ==================================================
            MAP + DETAILS
        ================================================== */}

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            overflow-hidden
            rounded-2xl
            border
            border-[#0B3D2E]/10
            bg-[#0B3D2E]
            shadow-[0_16px_45px_rgba(15,23,42,0.10)]

            sm:rounded-3xl
          "
        >
          <div
            className="
              grid
              lg:grid-cols-[minmax(0,1fr)_280px]
            "
          >
            {/* ==================================================
                MAP
            ================================================== */}

            <div
              className="
                relative
                min-h-[420px]
                overflow-hidden
                bg-[#0B3D2E]

                sm:min-h-[500px]

                lg:min-h-[580px]
              "
            >
              <div
                className="
                  absolute
                  left-5
                  top-5
                  z-10

                  sm:left-6
                  sm:top-6
                "
              >
                <span
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-lg
                    border
                    border-white/10
                    bg-[#062F23]/80
                    px-3
                    py-2
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-white/75
                    backdrop-blur-sm
                  "
                >
                  <span
                    aria-hidden="true"
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#F97316]
                    "
                  />
                  Afghanistan Coverage
                </span>
              </div>

              {mapData && (
                <svg
                  viewBox={`0 0 ${mapData.width} ${mapData.height}`}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    p-5

                    sm:p-8

                    lg:p-10
                  "
                  role="img"
                  aria-label="Interactive map showing DAFA geographic coverage across Afghanistan"
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

                    /*
                     * IMPORTANT:
                     * Selected province keeps its normal color.
                     * It does NOT turn orange.
                     *
                     * Covered:
                     *   Normal  = #5A9B83
                     *   Hover   = #78B39D
                     *
                     * Not covered:
                     *   Normal  = #315E50
                     *   Hover   = #466F61
                     *
                     * Selection only affects the border slightly.
                     */

                    return (
                      <motion.path
                        key={`${provinceId}-${index}`}
                        d={mapData.pathGenerator(feature)}
                        initial={false}
                        animate={{
                          fill: isHovered
                            ? isCovered
                              ? "#78B39D"
                              : "#466F61"
                            : isCovered
                              ? "#5A9B83"
                              : "#315E50",

                          opacity: isHovered ? 1 : isCovered ? 0.95 : 0.6,

                          stroke: isHovered
                            ? "#F97316"
                            : isSelected
                              ? "#FFFFFF"
                              : "#0B3D2E",
                        }}
                        transition={{
                          duration: shouldReduceMotion ? 0 : 0.16,
                        }}
                        strokeWidth={isHovered ? 2 : isSelected ? 1.5 : 0.8}
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
                    );
                  })}
                </svg>
              )}

              {/* Legend */}

              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  z-10
                  flex
                  flex-wrap
                  items-center
                  gap-x-4
                  gap-y-2
                  rounded-lg
                  border
                  border-white/10
                  bg-[#062F23]/85
                  px-3
                  py-2.5
                  backdrop-blur-sm

                  sm:bottom-6
                  sm:left-6
                  sm:px-4
                "
              >
                <div className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
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
                    aria-hidden="true"
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

                <div className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="
                      h-2
                      w-2
                      rounded-full
                      bg-[#F97316]
                    "
                  />

                  <span className="text-[10px] font-semibold text-white/65">
                    Hover
                  </span>
                </div>
              </div>
            </div>

            {/* ==================================================
                PROVINCE INFORMATION
            ================================================== */}

            <aside
              aria-live="polite"
              className="
                border-t
                border-white/10
                bg-[#082F24]
                p-5

                sm:p-7

                lg:border-l
                lg:border-t-0
                lg:p-7
              "
            >
              <div>
                <div className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#F97316]
                    "
                  />

                  <span
                    className="
                      text-[9px]
                      font-extrabold
                      uppercase
                      tracking-[0.18em]
                      text-white/40
                    "
                  >
                    Province Details
                  </span>
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
                              text-white/45
                              transition-colors
                              duration-300
                              hover:border-white/20
                              hover:text-white
                              focus:outline-none
                              focus-visible:ring-2
                              focus-visible:ring-[#F97316]
                              focus-visible:ring-offset-2
                              focus-visible:ring-offset-[#082F24]
                            "
                          >
                            <FaTimes size={10} />
                          </button>
                        )}
                      </div>

                      {activeProvince.province?.dafaWork ? (
                        <div className="mt-7">
                          <div className="flex items-center gap-2">
                            <div
                              className="
                                flex
                                h-6
                                w-6
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
                                text-[9px]
                                font-extrabold
                                uppercase
                                tracking-[0.15em]
                                text-[#A7F3D0]
                              "
                            >
                              DAFA Coverage
                            </span>
                          </div>

                          <p
                            className="
                              mt-5
                              text-3xl
                              font-extrabold
                              tracking-[-0.04em]
                              text-white
                            "
                          >
                            {activeProvince.province?.areasCleared || "—"}
                          </p>

                          <p className="mt-1 text-xs text-white/35">
                            Area cleared in this province
                          </p>
                        </div>
                      ) : (
                        <div className="mt-7">
                          <div
                            aria-hidden="true"
                            className="
                              h-[2px]
                              w-7
                              rounded-full
                              bg-[#F97316]
                            "
                          />

                          <p
                            className="
                              mt-4
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
                    <div className="mt-6">
                      <div
                        className="
                          flex
                          h-11
                          w-11
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/10
                          text-white/25
                        "
                      >
                        <FaMapMarkerAlt size={13} />
                      </div>

                      <p
                        className="
                          mt-4
                          max-w-[210px]
                          text-sm
                          leading-6
                          text-white/40
                        "
                      >
                        Hover over or select a province to explore its coverage.
                      </p>
                    </div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom Summary */}

              <div
                className="
                  mt-8
                  border-t
                  border-white/10
                  pt-5
                "
              >
                <div className="flex items-center justify-between">
                  <span
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.13em]
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
            mt-3
            text-center
            text-[10px]
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
