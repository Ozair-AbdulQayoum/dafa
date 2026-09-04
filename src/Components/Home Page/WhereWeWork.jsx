import React, { useEffect, useMemo, useState } from "react";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaInfoCircle,
  FaProjectDiagram,
  FaHandshake,
  FaBullseye,
} from "react-icons/fa";

import { geoMercator, geoPath } from "d3-geo";

import {
  provinces,
  coveredProvinces,
  getProvinceFromGeoJSON,
} from "../../Components/Data File/Main Page Data/CoverageData";

export default function WhereWeWork() {
  const shouldReduceMotion = useReducedMotion();

  const [geoData, setGeoData] = useState(null);
  const [error, setError] = useState(null);

  const [hoveredProvince, setHoveredProvince] = useState(null);

  const [selectedProvince, setSelectedProvince] = useState(null);

  // =====================================================
  // LOAD GEOJSON
  // =====================================================

  useEffect(() => {
    fetch("/maps/afghanistan-provinces.geojson")
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
        console.error("GeoJSON error:", err);
        setError(err.message);
      });
  }, []);

  // =====================================================
  // GET FEATURES
  // =====================================================

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

  // =====================================================
  // MAP SETTINGS
  // =====================================================

  const mapData = useMemo(() => {
    if (!features.length) return null;

    const width = 900;
    const height = 620;

    const collection = {
      type: "FeatureCollection",
      features,
    };

    const projection = geoMercator();

    projection.fitSize([width - 40, height - 40], collection);

    const pathGenerator = geoPath(projection);

    return {
      width,
      height,
      projection,
      pathGenerator,
    };
  }, [features]);

  // =====================================================
  // GEOJSON NAME
  // =====================================================

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

  // =====================================================
  // MATCH GEOJSON TO PROVINCE DATA
  // =====================================================

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

  // =====================================================
  // SELECT PROVINCE
  // =====================================================

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

  // =====================================================
  // CURRENT DISPLAYED PROVINCE
  // =====================================================

  const activeProvince = selectedProvince || hoveredProvince;

  // =====================================================
  // LOADING
  // =====================================================

  if (!geoData && !error) {
    return (
      <section
        aria-label="Where We Work"
        className="
          bg-[#F7FBF8]
          py-16
          sm:py-20
          lg:py-24
        "
      >
        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            text-center
            sm:px-8
            lg:px-10
          "
        >
          <div
            className="
              mx-auto
              h-9
              w-9
              animate-spin
              rounded-full
              border-[3px]
              border-[#0B3D2E]/15
              border-t-[#0B3D2E]
            "
          />

          <p
            className="
              mt-4
              text-sm
              font-semibold
              text-slate-500
            "
          >
            Loading Afghanistan map...
          </p>
        </div>
      </section>
    );
  }

  // =====================================================
  // ERROR
  // =====================================================

  if (error) {
    return (
      <section
        aria-label="Where We Work"
        className="
          bg-[#F7FBF8]
          py-16
          sm:py-20
          lg:py-24
        "
      >
        <div
          className="
            mx-auto
            max-w-3xl
            px-5
            text-center
          "
        >
          <div
            className="
              rounded-2xl
              border
              border-red-200
              bg-red-50
              p-6
            "
          >
            <p
              className="
                font-bold
                text-red-700
              "
            >
              Afghanistan map could not be loaded.
            </p>

            <p
              className="
                mt-2
                text-sm
                text-red-600
              "
            >
              {error}
            </p>

            <code
              className="
                mt-4
                block
                text-xs
                font-semibold
                text-slate-600
              "
            >
              public/maps/afghanistan-provinces.geojson
            </code>
          </div>
        </div>
      </section>
    );
  }

  // =====================================================
  // MAIN
  // =====================================================

  return (
    <section
      aria-labelledby="where-we-work-title"
      className="
        relative
        overflow-hidden
        bg-[#F7FBF8]
        py-12
        sm:py-14
        lg:py-16
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
        "
      >
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            max-w-3xl
            text-center
          "
        >
          <div
            className="
              mb-4
              flex
              items-center
              justify-center
              gap-3
            "
          >
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
                text-[11px]
                font-extrabold
                uppercase
                tracking-[0.18em]
                text-[#0B3D2E]
                sm:text-sm
                sm:tracking-[0.2em]
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
              text-[1.9rem]
              font-extrabold
              leading-[1.08]
              tracking-[-0.035em]
              text-[#0F172A]
              sm:text-4xl
              lg:text-[2.8rem]
              xl:text-5xl
            "
          >
            Creating Safer Communities{" "}
            <span className="text-[#0B3D2E]">Across Afghanistan</span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-6
              text-slate-600
              sm:mt-5
              sm:text-base
              sm:leading-7
            "
          >
            DAFA operates across Afghanistan to reduce explosive hazards, clear
            contaminated land, and support communities affected by mines and
            explosive remnants of war.
          </p>
        </motion.div>

        {/* =====================================================
            MAP + INFORMATION
        ====================================================== */}

        <div
          className="
            mt-9
            grid
            items-stretch
            gap-5
            lg:grid-cols-[1.55fr_0.75fr]
            lg:gap-6
            xl:mt-11
          "
        >
          {/* ===================================================
              MAP
          ==================================================== */}

          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -20 }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              overflow-hidden
              rounded-2xl
              border
              border-[#0B3D2E]/10
              bg-white
              shadow-[0_10px_30px_rgba(15,23,42,0.05)]
              sm:rounded-3xl
            "
          >
            <div
              className="
                border-b
                border-slate-100
                px-5
                py-4
                sm:px-6
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-4
                "
              >
                <div>
                  <p
                    className="
                      text-sm
                      font-extrabold
                      text-[#0F172A]
                    "
                  >
                    DAFA Geographic Coverage
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      text-slate-500
                    "
                  >
                    Select a province to view coverage.
                  </p>
                </div>

                <div
                  className="
                    hidden
                    shrink-0
                    items-center
                    gap-2
                    rounded-lg
                    bg-[#0B3D2E]/[0.06]
                    px-3
                    py-2
                    sm:flex
                  "
                >
                  <span
                    className="
                      h-2.5
                      w-2.5
                      rounded-full
                      bg-[#0B3D2E]
                    "
                  />

                  <span
                    className="
                      text-xs
                      font-bold
                      text-[#0B3D2E]
                    "
                  >
                    {coveredProvinces} covered
                  </span>
                </div>
              </div>
            </div>

            {/* SVG MAP */}

            <div
              className="
                relative
                px-2
                py-3
                sm:px-5
                sm:py-5
              "
            >
              <svg
                viewBox={`0 0 ${mapData.width} ${mapData.height}`}
                role="img"
                aria-label="Interactive map of Afghanistan provinces"
                className="
                  h-auto
                  w-full
                  overflow-visible
                "
                preserveAspectRatio="xMidYMid meet"
              >
                {features.map((feature, index) => {
                  const province = getProvinceData(feature);

                  const provinceName =
                    province?.name ||
                    getGeoJSONProvinceName(feature) ||
                    `Province ${index + 1}`;

                  const provinceId =
                    province?.id || `geo-${index}-${provinceName}`;

                  const isCovered = province ? province.dafaWork : false;

                  const isHovered = hoveredProvince?.id === provinceId;

                  const isSelected = selectedProvince?.id === provinceId;

                  let fill = "#E7ECE9";

                  if (isCovered) {
                    fill = "#6BA58F";
                  }

                  if (isHovered) {
                    fill = "#0A5A42";
                  }

                  if (isSelected) {
                    fill = "#0B3D2E";
                  }

                  return (
                    <path
                      key={provinceId}
                      d={mapData.pathGenerator(feature)}
                      fill={fill}
                      stroke={isSelected ? "#F97316" : "#FFFFFF"}
                      strokeWidth={isSelected ? 2.2 : 1.2}
                      vectorEffect="non-scaling-stroke"
                      tabIndex={0}
                      role="button"
                      aria-label={`${provinceName}${
                        isCovered
                          ? ", DAFA works here"
                          : ", no current DAFA coverage"
                      }`}
                      className="
                        cursor-pointer
                        outline-none
                        transition-all
                        duration-200
                        focus-visible:stroke-[#F97316]
                        focus-visible:stroke-[2]
                      "
                      style={{
                        filter:
                          isHovered || isSelected
                            ? "drop-shadow(0 3px 5px rgba(15,23,42,0.18))"
                            : "none",
                      }}
                      onMouseEnter={() => {
                        setHoveredProvince({
                          id: provinceId,
                          feature,
                          province,
                          name: provinceName,
                        });
                      }}
                      onMouseLeave={() => {
                        setHoveredProvince(null);
                      }}
                      onFocus={() => {
                        setHoveredProvince({
                          id: provinceId,
                          feature,
                          province,
                          name: provinceName,
                        });
                      }}
                      onBlur={() => {
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
            </div>

            {/* Legend */}

            <div
              className="
                flex
                flex-wrap
                items-center
                gap-x-5
                gap-y-3
                border-t
                border-slate-100
                px-5
                py-4
                sm:px-6
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-2
                "
              >
                <span
                  className="
                    h-3
                    w-3
                    rounded-sm
                    bg-[#6BA58F]
                  "
                />

                <span
                  className="
                    text-xs
                    font-semibold
                    text-slate-600
                  "
                >
                  DAFA coverage
                </span>
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-2
                "
              >
                <span
                  className="
                    h-3
                    w-3
                    rounded-sm
                    bg-[#E7ECE9]
                    ring-1
                    ring-slate-300
                  "
                />

                <span
                  className="
                    text-xs
                    font-semibold
                    text-slate-600
                  "
                >
                  No current coverage
                </span>
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-2
                "
              >
                <span
                  className="
                    h-3
                    w-3
                    rounded-sm
                    bg-[#0B3D2E]
                    ring-2
                    ring-[#F97316]/60
                  "
                />

                <span
                  className="
                    text-xs
                    font-semibold
                    text-slate-600
                  "
                >
                  Selected
                </span>
              </div>
            </div>
          </motion.div>

          {/* ===================================================
              INFORMATION PANEL
          ==================================================== */}

          <motion.aside
            initial={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 20 }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.65,
              delay: shouldReduceMotion ? 0 : 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              flex
              min-h-[360px]
              flex-col
              rounded-2xl
              border
              border-[#0B3D2E]/10
              bg-[#0B3D2E]
              p-5
              shadow-[0_10px_30px_rgba(11,61,46,0.10)]
              sm:p-6
              lg:min-h-0
              lg:rounded-3xl
            "
          >
            <div
              className="
                flex
                items-center
                gap-2
                text-[#A7F3D0]
              "
            >
              <FaMapMarkerAlt size={13} aria-hidden="true" />

              <span
                className="
                  text-[10px]
                  font-extrabold
                  uppercase
                  tracking-[0.16em]
                "
              >
                Selected Province
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeProvince?.id || "default-province"}
                initial={
                  shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={shouldReduceMotion ? undefined : { opacity: 0, y: -6 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.25,
                }}
                className="mt-7"
              >
                <h3
                  className="
                    text-2xl
                    font-extrabold
                    tracking-[-0.025em]
                    text-white
                    sm:text-3xl
                  "
                >
                  {activeProvince?.province?.name ||
                    activeProvince?.name ||
                    "Select a Province"}
                </h3>

                {activeProvince?.province ? (
                  <>
                    {/* Coverage Status */}

                    <div
                      className="
                        mt-5
                        flex
                        items-center
                        gap-2
                      "
                    >
                      {activeProvince.province.dafaWork ? (
                        <>
                          <FaCheckCircle
                            size={13}
                            className="text-[#A7F3D0]"
                            aria-hidden="true"
                          />

                          <span
                            className="
                              text-sm
                              font-bold
                              text-[#A7F3D0]
                            "
                          >
                            DAFA works in this province
                          </span>
                        </>
                      ) : (
                        <>
                          <FaInfoCircle
                            size={13}
                            className="text-white/60"
                            aria-hidden="true"
                          />

                          <span
                            className="
                              text-sm
                              font-semibold
                              text-white/70
                            "
                          >
                            No current DAFA coverage
                          </span>
                        </>
                      )}
                    </div>

                    {/* =================================================
                        TOTAL AREA CLEARED
                    ================================================== */}

                    <div
                      className="
                        mt-7
                        rounded-xl
                        border
                        border-white/10
                        bg-white/[0.05]
                        p-4
                      "
                    >
                      <p
                        className="
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.14em]
                          text-white/50
                        "
                      >
                        Total Area Cleared
                      </p>

                      <p
                        className="
                          mt-1.5
                          text-2xl
                          font-extrabold
                          text-white
                        "
                      >
                        {activeProvince.province.areasCleared || "—"}
                      </p>
                    </div>

                    {/* =================================================
                        PROJECT DETAILS
                    ================================================== */}

                    {activeProvince.province.dafaWork && (
                      <div
                        className="
                          mt-4
                          space-y-4
                          border-t
                          border-white/10
                          pt-5
                        "
                      >
                        {/* Current Project */}

                        <div
                          className="
                            flex
                            items-start
                            gap-3
                          "
                        >
                          <div
                            className="
                              mt-0.5
                              flex
                              h-8
                              w-8
                              shrink-0
                              items-center
                              justify-center
                              rounded-lg
                              bg-white/10
                              text-[#A7F3D0]
                            "
                          >
                            <FaProjectDiagram size={12} />
                          </div>

                          <div className="min-w-0">
                            <p
                              className="
                                text-[9px]
                                font-bold
                                uppercase
                                tracking-[0.12em]
                                text-white/45
                              "
                            >
                              Current Project
                            </p>

                            <p
                              className="
                                mt-1
                                text-sm
                                font-bold
                                leading-5
                                text-white
                              "
                            >
                              {activeProvince.province.currentProject || "—"}
                            </p>
                          </div>
                        </div>

                        {/* Current Donor */}

                        <div
                          className="
                            flex
                            items-start
                            gap-3
                          "
                        >
                          <div
                            className="
                              mt-0.5
                              flex
                              h-8
                              w-8
                              shrink-0
                              items-center
                              justify-center
                              rounded-lg
                              bg-white/10
                              text-[#A7F3D0]
                            "
                          >
                            <FaHandshake size={12} />
                          </div>

                          <div className="min-w-0">
                            <p
                              className="
                                text-[9px]
                                font-bold
                                uppercase
                                tracking-[0.12em]
                                text-white/45
                              "
                            >
                              Current Donor / Partner
                            </p>

                            <p
                              className="
                                mt-1
                                text-sm
                                font-bold
                                leading-5
                                text-white
                              "
                            >
                              {activeProvince.province.currentDonor || "—"}
                            </p>
                          </div>
                        </div>

                        {/* Project Focus */}

                        <div
                          className="
                            flex
                            items-start
                            gap-3
                          "
                        >
                          <div
                            className="
                              mt-0.5
                              flex
                              h-8
                              w-8
                              shrink-0
                              items-center
                              justify-center
                              rounded-lg
                              bg-white/10
                              text-[#A7F3D0]
                            "
                          >
                            <FaBullseye size={12} />
                          </div>

                          <div className="min-w-0">
                            <p
                              className="
                                text-[9px]
                                font-bold
                                uppercase
                                tracking-[0.12em]
                                text-white/45
                              "
                            >
                              Project Focus
                            </p>

                            <p
                              className="
                                mt-1
                                text-sm
                                font-bold
                                leading-5
                                text-white
                              "
                            >
                              {activeProvince.province.projectFocus || "—"}
                            </p>
                          </div>
                        </div>

                        {/* Project Status */}

                        <div
                          className="
                            flex
                            items-center
                            justify-between
                            gap-3
                            border-t
                            border-white/10
                            pt-4
                          "
                        >
                          <span
                            className="
                              text-[9px]
                              font-bold
                              uppercase
                              tracking-[0.12em]
                              text-white/45
                            "
                          >
                            Project Status
                          </span>

                          <span
                            className="
                              rounded-full
                              bg-[#A7F3D0]/10
                              px-3
                              py-1
                              text-[10px]
                              font-extrabold
                              text-[#A7F3D0]
                            "
                          >
                            {activeProvince.province.projectStatus || "—"}
                          </span>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <p
                    className="
                      mt-4
                      max-w-xs
                      text-sm
                      leading-6
                      text-white/65
                    "
                  >
                    Hover over a province or tap one on the map to view
                    available coverage information.
                  </p>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Panel bottom */}

            <div
              className="
                mt-auto
                border-t
                border-white/10
                pt-5
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-4
                "
              >
                <div>
                  <p
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-white/45
                    "
                  >
                    Geographic presence
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      font-bold
                      text-white
                    "
                  >
                    {coveredProvinces} provinces
                  </p>
                </div>

                <div
                  className="
                    h-9
                    w-9
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                  "
                />
              </div>
            </div>
          </motion.aside>
        </div>

        {/* =====================================================
            CTA
        ====================================================== */}

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.45,
            delay: shouldReduceMotion ? 0 : 0.15,
          }}
          className="
            mt-8
            flex
            justify-center
            sm:mt-9
          "
        >
          <Link
            to="/coverage"
            className="
              group
              inline-flex
              min-h-[46px]
              items-center
              justify-center
              gap-2.5
              rounded-xl
              border
              border-[#0B3D2E]
              bg-white
              px-5
              text-sm
              font-bold
              text-[#0B3D2E]
              shadow-[0_6px_18px_rgba(15,23,42,0.05)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#0B3D2E]
              hover:text-white
              hover:shadow-[0_10px_25px_rgba(11,61,46,0.12)]
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#F97316]
              focus-visible:ring-offset-2
            "
          >
            <span>Explore Our Coverage</span>

            <FaArrowRight
              size={10}
              aria-hidden="true"
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
