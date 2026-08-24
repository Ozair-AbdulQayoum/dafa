import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

import {
  provinces,
  getProvinceById,
  normalizeProvinceName,
} from "../../Components/Main Page Data/CoverageData";

/* =========================================================
   Convert GeoJSON coordinates → SVG path
========================================================= */

function coordinatesToPath(coordinates, project) {
  return coordinates
    .map((ring) => {
      return (
        ring
          .map(([lng, lat], index) => {
            const [x, y] = project(lng, lat);

            return `${index === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
          })
          .join(" ") + " Z"
      );
    })
    .join(" ");
}

/* =========================================================
   Get all coordinates
========================================================= */

function getAllCoordinates(features) {
  const coordinates = [];

  features.forEach((feature) => {
    const geometry = feature.geometry;

    if (!geometry) return;

    if (geometry.type === "Polygon") {
      geometry.coordinates.forEach((ring) => {
        ring.forEach((point) => coordinates.push(point));
      });
    }

    if (geometry.type === "MultiPolygon") {
      geometry.coordinates.forEach((polygon) => {
        polygon.forEach((ring) => {
          ring.forEach((point) => coordinates.push(point));
        });
      });
    }
  });

  return coordinates;
}

/* =========================================================
   Get province name from GeoJSON
========================================================= */

function getGeoJSONProvinceName(feature) {
  const properties = feature?.properties || {};

  return (
    properties.name ||
    properties.NAME ||
    properties.NAME_1 ||
    properties.NAME_2 ||
    properties.province ||
    properties.PROVINCE ||
    properties.shapeName ||
    properties.ShapeName ||
    properties.admin1Name ||
    properties.PROV_NAME ||
    ""
  );
}

/* =========================================================
   Match GeoJSON province with CoverageData
========================================================= */

function getProvinceData(feature) {
  const geoName = getGeoJSONProvinceName(feature);
  const normalized = normalizeProvinceName(geoName);

  return (
    getProvinceById(normalized) ||
    provinces.find(
      (province) => normalizeProvinceName(province.name) === normalized,
    )
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function WhereWeWork() {
  const [geoData, setGeoData] = useState(null);
  const [hoveredProvince, setHoveredProvince] = useState(null);
  const [mapError, setMapError] = useState(false);

  /* =======================================================
     LOAD GEOJSON
  ======================================================= */

  useEffect(() => {
    fetch("/maps/afghanistan-provinces.geojson")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`GeoJSON failed: ${response.status}`);
        }

        return response.json();
      })
      .then((data) => {
        if (
          data?.type !== "FeatureCollection" ||
          !Array.isArray(data.features)
        ) {
          throw new Error("Invalid GeoJSON file");
        }

        setGeoData(data);
      })
      .catch((error) => {
        console.error("GeoJSON error:", error);
        setMapError(true);
      });
  }, []);

  /* =======================================================
     CREATE MAP PROJECTION
  ======================================================= */

  const mapData = useMemo(() => {
    if (!geoData?.features?.length) return null;

    const allCoordinates = getAllCoordinates(geoData.features);

    if (!allCoordinates.length) return null;

    let minLng = Infinity;
    let maxLng = -Infinity;
    let minLat = Infinity;
    let maxLat = -Infinity;

    allCoordinates.forEach(([lng, lat]) => {
      minLng = Math.min(minLng, lng);
      maxLng = Math.max(maxLng, lng);
      minLat = Math.min(minLat, lat);
      maxLat = Math.max(maxLat, lat);
    });

    const width = 1000;
    const height = 700;
    const padding = 35;

    const scaleX = (width - padding * 2) / (maxLng - minLng);

    const scaleY = (height - padding * 2) / (maxLat - minLat);

    const scale = Math.min(scaleX, scaleY);

    const mapWidth = (maxLng - minLng) * scale;
    const mapHeight = (maxLat - minLat) * scale;

    const offsetX = (width - mapWidth) / 2;
    const offsetY = (height - mapHeight) / 2;

    const project = (lng, lat) => {
      const x = offsetX + (lng - minLng) * scale;

      const y = offsetY + (maxLat - lat) * scale;

      return [x, y];
    };

    return {
      width,
      height,
      project,
    };
  }, [geoData]);

  /* =======================================================
     LOADING
  ======================================================= */

  if (!geoData && !mapError) {
    return (
      <section className="bg-[#F8FAFC] py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex min-h-[600px] items-center justify-center rounded-[2rem] border border-slate-200 bg-white">
            <div className="text-center">
              <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#087B5A]" />

              <p className="text-sm font-semibold text-slate-500">
                Loading Afghanistan map...
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* =======================================================
     ERROR
  ======================================================= */

  if (mapError || !mapData) {
    return (
      <section className="bg-[#F8FAFC] py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="rounded-[2rem] border border-red-200 bg-white p-10 text-center">
            <h3 className="text-xl font-extrabold text-slate-900">
              Afghanistan map could not be loaded
            </h3>

            <p className="mt-3 text-sm text-slate-500">
              Make sure this file exists:
            </p>

            <code className="mt-3 inline-block rounded-lg bg-slate-100 px-4 py-2 text-sm text-slate-700">
              public/maps/afghanistan-provinces.geojson
            </code>
          </div>
        </div>
      </section>
    );
  }

  /* =======================================================
     MAIN
  ======================================================= */

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-24 sm:py-28 lg:py-32">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-60 -top-40 h-[500px] w-[500px] rounded-full bg-[#087B5A]/5 blur-3xl" />

        <div className="absolute -bottom-40 -right-60 h-[500px] w-[500px] rounded-full bg-[#F97316]/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
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

        {/* =================================================
            MAP
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mt-14 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl"
        >
          {/* Map Header */}

          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 px-5 py-5 sm:px-8">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#087B5A]">
                DAFA Coverage Map
              </p>

              <h3 className="mt-1 text-xl font-extrabold text-[#0F172A] sm:text-2xl">
                Afghanistan
              </h3>
            </div>

            {/* Legend */}

            <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-sm bg-[#087B5A]" />

                <span>DAFA Work</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-sm bg-white ring-1 ring-slate-300" />

                <span>No DAFA Work</span>
              </div>
            </div>
          </div>

          {/* =================================================
              MAP AREA
          ================================================= */}

          <div className="relative w-full bg-[#F8FAFC] px-3 py-5 sm:px-8 sm:py-8">
            <svg
              viewBox={`0 0 ${mapData.width} ${mapData.height}`}
              className="mx-auto block h-auto w-full max-w-[1100px]"
              role="img"
              aria-label="DAFA geographical coverage across Afghanistan"
            >
              {geoData.features.map((feature, index) => {
                const geometry = feature.geometry;

                if (!geometry) return null;

                const province = getProvinceData(feature);

                const provinceName =
                  province?.name ||
                  getGeoJSONProvinceName(feature) ||
                  "Province";

                /*
                 * Only these two provinces stay white.
                 */

                const normalizedName = normalizeProvinceName(provinceName);

                const isWhiteProvince =
                  normalizedName === "ghor" ||
                  normalizedName === "daykundi" ||
                  normalizedName === "daikundi";

                const isHovered = hoveredProvince?.name === provinceName;

                let path = "";

                if (geometry.type === "Polygon") {
                  path = coordinatesToPath(
                    geometry.coordinates,
                    mapData.project,
                  );
                }

                if (geometry.type === "MultiPolygon") {
                  path = geometry.coordinates
                    .map((polygon) =>
                      coordinatesToPath(polygon, mapData.project),
                    )
                    .join(" ");
                }

                return (
                  <g key={`${provinceName}-${index}`}>
                    {/* Province */}

                    <path
                      d={path}
                      fill={isWhiteProvince ? "#FFFFFF" : "#087B5A"}
                      stroke="#FFFFFF"
                      strokeWidth={1.5}
                      vectorEffect="non-scaling-stroke"
                      className="cursor-default transition-all duration-200"
                      style={{
                        filter: isHovered ? "brightness(0.85)" : "none",
                      }}
                      onMouseEnter={() => {
                        setHoveredProvince({
                          name: provinceName,
                          areasCleared: province?.areasCleared || "—",
                        });
                      }}
                      onMouseLeave={() => {
                        setHoveredProvince(null);
                      }}
                    />

                    {/* =================================================
                        HOVER BADGE
                    ================================================= */}

                    {isHovered && (
                      <foreignObject
                        x="360"
                        y="45"
                        width="280"
                        height="100"
                        pointerEvents="none"
                      >
                        <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-center shadow-xl">
                          <p className="text-sm font-extrabold text-[#0F172A]">
                            {provinceName}
                          </p>

                          <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                            Areas Cleared
                          </p>

                          <p className="mt-0.5 text-lg font-extrabold text-[#087B5A]">
                            {province?.areasCleared || "—"}
                          </p>
                        </div>
                      </foreignObject>
                    )}
                  </g>
                );
              })}
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
