import React, { useEffect, useMemo, useState } from "react";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

import {
  FaMapMarkerAlt,
  FaCheckCircle,
  FaInfoCircle,
  FaProjectDiagram,
  FaHandshake,
  FaBullseye,
} from "react-icons/fa";

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
  // ACTIVE PROVINCE
  // =====================================================

  const activeProvince = selectedProvince || hoveredProvince;

  // =====================================================
  // LOADING
  // =====================================================

  if (!geoData && !error) {
    return (
      <section
        aria-label="Where We Work"
        className="bg-[#F7FBF8] py-10 sm:py-12 lg:py-14"
      >
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-8 lg:px-10">
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

          <p className="mt-4 text-sm font-semibold text-slate-500">
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
        className="bg-[#F7FBF8] py-10 sm:py-12 lg:py-14"
      >
        <div className="mx-auto max-w-3xl px-5 text-center">
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
            <p className="font-bold text-red-700">
              Afghanistan map could not be loaded.
            </p>

            <p className="mt-2 text-sm text-red-600">{error}</p>

            <code className="mt-4 block text-xs font-semibold text-slate-600">
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
        py-8
        sm:py-10
        lg:py-12
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
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
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
            FULL WIDTH MAP CARD
        ====================================================== */}

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
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
            mt-8
            overflow-hidden
            rounded-2xl
            border
            border-[#0B3D2E]/10
            bg-white
            shadow-[0_10px_30px_rgba(15,23,42,0.05)]
            sm:mt-10
            sm:rounded-3xl
          "
        >
          {/* ===================================================
              MAP HEADER
          ==================================================== */}

          <div
            className="
              flex
              items-center
              justify-between
              gap-4
              border-b
              border-slate-100
              px-5
              py-4
              sm:px-6
            "
          >
            <div>
              <p className="text-sm font-extrabold text-[#0F172A]">
                DAFA Geographic Coverage
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Hover or select a province to view project information.
              </p>
            </div>

            <div
              className="
                flex
                shrink-0
                items-center
                gap-2
                rounded-lg
                bg-[#0B3D2E]/[0.06]
                px-3
                py-2
              "
            >
              <span className="h-2.5 w-2.5 rounded-full bg-[#0B3D2E]" />

              <span className="text-xs font-bold text-[#0B3D2E]">
                {coveredProvinces} covered
              </span>
            </div>
          </div>

          {/* ===================================================
              MAP AREA
          ==================================================== */}

          <div
            className="
              relative
              px-2
              py-2
              sm:px-5
              sm:py-4
              lg:px-8
            "
          >
            <svg
              viewBox={`0 0 ${mapData.width} ${mapData.height}`}
              role="img"
              aria-label="Interactive map of Afghanistan provinces"
              className="
                block
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

            {/* =================================================
                FLOATING PROJECT DETAILS CARD
            ================================================== */}

            <AnimatePresence mode="wait">
              {activeProvince?.province && (
                <motion.div
                  key={activeProvince.id}
                  initial={
                    shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }
                  }
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.25,
                  }}
                  className="
                    absolute
                    bottom-5
                    right-5
                    z-10
                    w-[290px]
                    overflow-hidden
                    rounded-2xl
                    border
                    border-[#0B3D2E]/10
                    bg-white/95
                    shadow-[0_12px_35px_rgba(15,23,42,0.16)]
                    backdrop-blur-md
                    sm:bottom-7
                    sm:right-7
                    lg:w-[320px]
                  "
                >
                  {/* CARD HEADER */}

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-3
                      bg-[#0B3D2E]
                      px-4
                      py-3
                    "
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className="
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-lg
                          bg-white/10
                          text-[#A7F3D0]
                        "
                      >
                        <FaMapMarkerAlt size={12} />
                      </div>

                      <div>
                        <p
                          className="
                            text-[8px]
                            font-extrabold
                            uppercase
                            tracking-[0.13em]
                            text-[#A7F3D0]
                          "
                        >
                          Province Details
                        </p>

                        <h3 className="mt-0.5 text-sm font-extrabold text-white">
                          {activeProvince.province.name || activeProvince.name}
                        </h3>
                      </div>
                    </div>

                    {activeProvince.province.dafaWork ? (
                      <FaCheckCircle
                        size={13}
                        className="shrink-0 text-[#A7F3D0]"
                      />
                    ) : (
                      <FaInfoCircle
                        size={13}
                        className="shrink-0 text-white/50"
                      />
                    )}
                  </div>

                  {/* CARD BODY */}

                  <div className="p-4">
                    {/* STATUS */}

                    <div className="mb-3">
                      {activeProvince.province.dafaWork ? (
                        <span
                          className="
                            inline-flex
                            items-center
                            gap-1.5
                            rounded-full
                            bg-[#0B3D2E]/[0.07]
                            px-2.5
                            py-1
                            text-[9px]
                            font-bold
                            text-[#0B3D2E]
                          "
                        >
                          <FaCheckCircle size={9} />
                          DAFA works here
                        </span>
                      ) : (
                        <span
                          className="
                            inline-flex
                            items-center
                            gap-1.5
                            rounded-full
                            bg-slate-100
                            px-2.5
                            py-1
                            text-[9px]
                            font-semibold
                            text-slate-500
                          "
                        >
                          <FaInfoCircle size={9} />
                          No current coverage
                        </span>
                      )}
                    </div>

                    {activeProvince.province.dafaWork ? (
                      <div className="space-y-3">
                        {/* AREA */}

                        <div
                          className="
                            rounded-xl
                            border
                            border-slate-100
                            bg-[#F7FBF8]
                            px-3
                            py-2.5
                          "
                        >
                          <p
                            className="
                              text-[8px]
                              font-bold
                              uppercase
                              tracking-[0.1em]
                              text-slate-400
                            "
                          >
                            Total Area Cleared
                          </p>

                          <p className="mt-0.5 text-base font-extrabold text-[#0B3D2E]">
                            {activeProvince.province.areasCleared || "—"}
                          </p>
                        </div>

                        {/* PROJECT */}

                        <div className="flex items-start gap-2.5">
                          <div
                            className="
                              flex
                              h-7
                              w-7
                              shrink-0
                              items-center
                              justify-center
                              rounded-lg
                              bg-[#0B3D2E]/[0.07]
                              text-[#0B3D2E]
                            "
                          >
                            <FaProjectDiagram size={10} />
                          </div>

                          <div className="min-w-0">
                            <p
                              className="
                                text-[8px]
                                font-bold
                                uppercase
                                tracking-[0.1em]
                                text-slate-400
                              "
                            >
                              Current Project
                            </p>

                            <p className="mt-0.5 text-[11px] font-bold leading-4 text-[#0F172A]">
                              {activeProvince.province.currentProject || "—"}
                            </p>
                          </div>
                        </div>

                        {/* DONOR */}

                        <div className="flex items-start gap-2.5">
                          <div
                            className="
                              flex
                              h-7
                              w-7
                              shrink-0
                              items-center
                              justify-center
                              rounded-lg
                              bg-[#0B3D2E]/[0.07]
                              text-[#0B3D2E]
                            "
                          >
                            <FaHandshake size={10} />
                          </div>

                          <div className="min-w-0">
                            <p
                              className="
                                text-[8px]
                                font-bold
                                uppercase
                                tracking-[0.1em]
                                text-slate-400
                              "
                            >
                              Donor / Partner
                            </p>

                            <p className="mt-0.5 text-[11px] font-bold leading-4 text-[#0F172A]">
                              {activeProvince.province.currentDonor || "—"}
                            </p>
                          </div>
                        </div>

                        {/* FOCUS */}

                        <div className="flex items-start gap-2.5">
                          <div
                            className="
                              flex
                              h-7
                              w-7
                              shrink-0
                              items-center
                              justify-center
                              rounded-lg
                              bg-[#0B3D2E]/[0.07]
                              text-[#0B3D2E]
                            "
                          >
                            <FaBullseye size={10} />
                          </div>

                          <div className="min-w-0">
                            <p
                              className="
                                text-[8px]
                                font-bold
                                uppercase
                                tracking-[0.1em]
                                text-slate-400
                              "
                            >
                              Project Focus
                            </p>

                            <p className="mt-0.5 text-[11px] font-bold leading-4 text-[#0F172A]">
                              {activeProvince.province.projectFocus || "—"}
                            </p>
                          </div>
                        </div>

                        {/* STATUS */}

                        <div
                          className="
                            flex
                            items-center
                            justify-between
                            gap-3
                            border-t
                            border-slate-100
                            pt-3
                          "
                        >
                          <span
                            className="
                              text-[8px]
                              font-bold
                              uppercase
                              tracking-[0.1em]
                              text-slate-400
                            "
                          >
                            Project Status
                          </span>

                          <span
                            className="
                              rounded-full
                              bg-[#0B3D2E]/[0.07]
                              px-2.5
                              py-1
                              text-[8px]
                              font-extrabold
                              text-[#0B3D2E]
                            "
                          >
                            {activeProvince.province.projectStatus || "—"}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <p className="text-[11px] leading-5 text-slate-500">
                        DAFA currently has no active coverage in this province.
                      </p>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* =================================================
                DEFAULT MAP MESSAGE
            ================================================== */}

            {!activeProvince && (
              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-5
                  left-1/2
                  z-10
                  hidden
                  -translate-x-1/2
                  rounded-xl
                  border
                  border-[#0B3D2E]/10
                  bg-white/90
                  px-4
                  py-2.5
                  text-center
                  shadow-[0_8px_25px_rgba(15,23,42,0.08)]
                  backdrop-blur-sm
                  sm:block
                "
              >
                <p className="text-[10px] font-bold text-[#0B3D2E]">
                  Hover or select a province
                </p>

                <p className="mt-0.5 text-[9px] text-slate-400">
                  View DAFA project information
                </p>
              </div>
            )}
          </div>

          {/* ===================================================
              LEGEND
          ==================================================== */}

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
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-sm bg-[#6BA58F]" />

              <span className="text-xs font-semibold text-slate-600">
                DAFA coverage
              </span>
            </div>

            <div className="flex items-center gap-2">
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

              <span className="text-xs font-semibold text-slate-600">
                No current coverage
              </span>
            </div>

            <div className="flex items-center gap-2">
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

              <span className="text-xs font-semibold text-slate-600">
                Selected
              </span>
            </div>

            <div className="ml-auto hidden text-xs font-semibold text-slate-400 sm:block">
              {coveredProvinces} provinces with DAFA presence
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
