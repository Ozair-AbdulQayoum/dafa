// src/Components/Home-Page/WhereWeWork.jsx

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { geoMercator, geoPath, geoCentroid } from "d3-geo";

import {
  provinces,
  getProvinceFromGeoJSON,
} from "../../Components/Data File/Main Page Data/CoverageData";

export default function WhereWeWork() {
  const [geoData, setGeoData] = useState(null);
  const [error, setError] = useState(null);
  const [hoveredProvince, setHoveredProvince] = useState(null);

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

    projection.fitSize([width - 30, height - 30], collection);

    const pathGenerator = geoPath(projection);

    return {
      width,
      height,
      projection,
      pathGenerator,
    };
  }, [features]);

  // =====================================================
  // GET GEOJSON PROVINCE NAME
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
  // MATCH GEOJSON WITH PROVINCE DATA
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

    // Normal matching
    for (const name of possibleNames) {
      const matched = getProvinceFromGeoJSON(name);

      if (matched) {
        return matched;
      }
    }

    // Search every GeoJSON property
    for (const value of Object.values(properties)) {
      if (typeof value !== "string") continue;

      const matched = getProvinceFromGeoJSON(value);

      if (matched) {
        return matched;
      }
    }

    // Extra matching
    for (const value of Object.values(properties)) {
      if (typeof value !== "string") continue;

      const clean = value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]/g, "");

      if (clean.includes("herat") || clean.includes("hirat")) {
        return provinces.find((province) => province.id === "herat");
      }

      if (
        clean.includes("sarepol") ||
        clean.includes("sarepul") ||
        clean.includes("saripol") ||
        clean.includes("saripul")
      ) {
        return provinces.find((province) => province.id === "sar-e-pol");
      }

      if (clean.includes("wardak")) {
        return provinces.find((province) => province.id === "wardak");
      }

      if (
        clean.includes("daykundi") ||
        clean.includes("daikundi") ||
        clean.includes("daykandi") ||
        clean.includes("daikondi")
      ) {
        return provinces.find((province) => province.id === "daykundi");
      }

      if (
        clean === "ghor" ||
        clean === "gour" ||
        clean.includes("ghor") ||
        clean.includes("gour")
      ) {
        return provinces.find((province) => province.id === "ghor");
      }
    }

    return null;
  };

  // =====================================================
  // LOADING
  // =====================================================

  if (!geoData && !error) {
    return (
      <section className="bg-[#F8FAFC] py-24">
        <div className="mx-auto max-w-7xl px-5 text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-[#087B5A]/20 border-t-[#087B5A]" />

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
      <section className="bg-[#F8FAFC] py-24">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
            <p className="font-bold text-red-700">
              Afghanistan map could not be loaded.
            </p>

            <p className="mt-2 text-sm text-red-600">{error}</p>

            <code className="mt-4 block text-xs font-bold text-slate-700">
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
    <section className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-28">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-60 -top-40 h-[500px] w-[500px] rounded-full bg-[#087B5A]/5 blur-3xl" />

        <div className="absolute -bottom-40 -right-60 h-[500px] w-[500px] rounded-full bg-[#F97316]/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 rounded-full bg-[#F97316]" />

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#087B5A]">
              Geographical Coverage
            </span>

            <span className="h-[2px] w-10 rounded-full bg-[#F97316]" />
          </div>

          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-[#0F172A] sm:text-5xl lg:text-[3.5rem]">
            Where We Work
            <span className="block text-[#087B5A]">Across Afghanistan</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            DAFA works across Afghanistan to reduce explosive hazards, clear
            contaminated land, and help communities live safer.
          </p>
        </motion.div>

        {/* =====================================================
            MAP
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative mt-12 overflow-visible"
        >
          <div className="relative w-full overflow-visible rounded-[2rem] border border-slate-200 bg-white p-3 shadow-xl sm:p-6 lg:p-8">
            <div className="relative w-full overflow-visible">
              <svg
                viewBox={`0 0 ${mapData.width} ${mapData.height}`}
                className="
                  h-auto
                  w-[115%]
                  -translate-x-[7.5%]
                  overflow-visible
                  sm:w-full
                  sm:translate-x-0
                "
                preserveAspectRatio="xMidYMid meet"
              >
                {/* =================================================
                    PROVINCES
                ================================================== */}

                {features.map((feature, index) => {
                  const province = getProvinceData(feature);

                  const provinceName =
                    province?.name ||
                    getGeoJSONProvinceName(feature) ||
                    `Province ${index + 1}`;

                  const provinceId =
                    province?.id || `geo-${index}-${provinceName}`;

                  const isDafaWork = province ? province.dafaWork : true;

                  const isHovered = hoveredProvince?.id === provinceId;

                  return (
                    <path
                      key={provinceId}
                      d={mapData.pathGenerator(feature)}
                      fill={isDafaWork ? "#087B5A" : "#FFFFFF"}
                      /*
                       * Border removed.
                       * Provinces now have no visible lines.
                       */

                      stroke="none"
                      strokeWidth="0"
                      vectorEffect="non-scaling-stroke"
                      className="cursor-pointer transition-all duration-200"
                      style={{
                        filter: isHovered
                          ? "drop-shadow(0 3px 5px rgba(15,23,42,0.25))"
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
                    />
                  );
                })}

                {/* =================================================
                    HOVER BADGE
                ================================================== */}

                {hoveredProvince &&
                  (() => {
                    const feature = hoveredProvince.feature;

                    const province = hoveredProvince.province;

                    const centroid = geoCentroid(feature);

                    const projected = mapData.projection(centroid);

                    if (!projected) return null;

                    const [x, y] = projected;

                    return (
                      <g
                        pointerEvents="none"
                        transform={`translate(${x}, ${y})`}
                      >
                        <foreignObject
                          x="-105"
                          y="-82"
                          width="210"
                          height="75"
                          overflow="visible"
                        >
                          <div className="flex justify-center">
                            <div className="min-w-[150px] rounded-xl bg-[#0F172A] px-4 py-3 text-center shadow-2xl">
                              <p className="text-xs font-extrabold text-white">
                                {province?.name || hoveredProvince.name}
                              </p>

                              <p className="mt-1 text-[11px] font-semibold text-white/75">
                                {province?.dafaWork === false
                                  ? "No DAFA coverage"
                                  : `${province?.areasCleared || "—"} cleared`}
                              </p>
                            </div>
                          </div>
                        </foreignObject>

                        <path d="M -7 -14 L 0 -5 L 7 -14 Z" fill="#0F172A" />
                      </g>
                    );
                  })()}
              </svg>
            </div>

            {/* =====================================================
                LEGEND
            ===================================================== */}

            <div className="mt-4 flex flex-wrap items-center justify-center gap-5 border-t border-slate-100 pt-5">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-sm bg-[#087B5A]" />

                <span className="text-xs font-semibold text-slate-600">
                  DAFA Work
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-sm bg-white ring-1 ring-slate-300" />

                <span className="text-xs font-semibold text-slate-600">
                  No DAFA Coverage
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
