// src/Components/About-Page/FundingFlow.jsx

import React, { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaChartLine, FaArrowRight } from "react-icons/fa";

import { fundingData } from "../../Components/Data File/About Page Data/FundingData";

export default function FundingFlow() {
  const shouldReduceMotion = useReducedMotion();

  const [selectedYear, setSelectedYear] = useState(2026);

  // =====================================================
  // SELECTED DATA
  // =====================================================

  const selectedData = useMemo(
    () =>
      fundingData.find((item) => item.year === selectedYear) ||
      fundingData[fundingData.length - 1],
    [selectedYear],
  );

  // =====================================================
  // CHART SETTINGS
  // =====================================================

  const chartWidth = 1400;
  const chartHeight = 430;

  const padding = {
    top: 55,
    right: 45,
    bottom: 65,
    left: 85,
  };

  const innerWidth = chartWidth - padding.left - padding.right;

  const innerHeight = chartHeight - padding.top - padding.bottom;

  const maxFunding = Math.max(...fundingData.map((item) => item.amount)) || 1;

  // =====================================================
  // CHART POINTS
  // =====================================================

  const points = fundingData.map((item, index) => {
    const x =
      padding.left + (index / Math.max(fundingData.length - 1, 1)) * innerWidth;

    const y =
      padding.top + innerHeight - (item.amount / maxFunding) * innerHeight;

    return {
      ...item,
      x,
      y,
    };
  });

  // =====================================================
  // LINE
  // =====================================================

  const linePoints = points.map((point) => `${point.x},${point.y}`).join(" ");

  // =====================================================
  // AREA
  // =====================================================

  const areaPoints = [
    `${padding.left},${padding.top + innerHeight}`,
    ...points.map((point) => `${point.x},${point.y}`),
    `${padding.left + innerWidth},${padding.top + innerHeight}`,
  ].join(" ");

  // =====================================================
  // SELECTED POINT
  // =====================================================

  const selectedPoint =
    points.find((point) => point.year === selectedYear) ||
    points[points.length - 1];

  // =====================================================
  // KEY YEARS
  // =====================================================

  const keyYears = [1990, 1995, 2000, 2005, 2010, 2015, 2020, 2025, 2026];

  // =====================================================
  // MONEY FORMAT
  // =====================================================

  const formatMoney = (amount) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`;
    }

    if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(0)}K`;
    }

    return `$${amount.toLocaleString("en-US")}`;
  };

  // =====================================================
  // ANIMATION
  // =====================================================

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      aria-labelledby="funding-flow-heading"
      className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-14 lg:mb-16"
        >
          <div className="mb-5 inline-flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-9 bg-[#F97316] sm:w-11"
            />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0A5A42] sm:text-sm">
              Funding Flow
            </span>

            <span
              aria-hidden="true"
              className="h-px w-9 bg-[#F97316] sm:w-11"
            />
          </div>

          <h2
            id="funding-flow-heading"
            className="text-3xl font-black leading-[1.08] tracking-tight text-[#0B3D2E] sm:text-4xl md:text-5xl"
          >
            Funding Over the <span className="text-[#087B5A]">Years</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
            Explore DAFA's funding history from 1990 to 2026. Select a year to
            view its annual funding amount and share of total funding.
          </p>
        </motion.header>

        {/* =====================================================
            MAIN CHART
        ====================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          transition={{
            duration: 0.8,
            delay: 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_12px_45px_rgba(15,23,42,0.06)]"
        >
          {/* ===================================================
              CHART TOP BAR
          ==================================================== */}

          <div className="border-b border-slate-100 p-6 sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              {/* Chart Title */}

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0B3D2E] text-white">
                  <FaChartLine size={16} aria-hidden="true" />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                    Historical Overview
                  </p>

                  <h3 className="mt-1 text-lg font-black tracking-tight text-[#0B3D2E] sm:text-xl">
                    Annual Funding Flow
                  </h3>

                  <p className="mt-1 text-xs text-slate-400">1990 — 2026</p>
                </div>
              </div>

              {/* =================================================
                  SELECTED YEAR
              ================================================== */}

              <motion.div
                key={selectedData.year}
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
                transition={{ duration: 0.25 }}
                className="grid grid-cols-2 overflow-hidden rounded-2xl border border-slate-200 bg-[#F8FAFC] sm:min-w-[350px]"
              >
                <div className="border-r border-slate-200 px-5 py-4">
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">
                    Selected Year
                  </p>

                  <p className="mt-1 text-2xl font-black text-[#0B3D2E]">
                    {selectedData.year}
                  </p>
                </div>

                <div className="px-5 py-4">
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">
                    Annual Funding
                  </p>

                  <p className="mt-1 text-xl font-black text-[#087B5A]">
                    {selectedData.formattedAmount ||
                      formatMoney(selectedData.amount)}
                  </p>

                  <p className="mt-0.5 text-[10px] font-semibold text-slate-400">
                    {selectedData.percentage}% of total
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* ===================================================
              CHART AREA
          ==================================================== */}

          <div className="px-4 pb-4 pt-8 sm:px-8 sm:pb-6 sm:pt-10">
            <div
              className="overflow-x-auto pb-2"
              role="region"
              aria-label="DAFA annual funding chart"
              tabIndex={0}
            >
              <div className="min-w-[800px]">
                <svg
                  viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                  className="h-auto w-full overflow-visible"
                  role="img"
                  aria-labelledby="funding-chart-title funding-chart-description"
                >
                  <title id="funding-chart-title">
                    DAFA Annual Funding from 1990 to 2026
                  </title>

                  <desc id="funding-chart-description">
                    Interactive line chart showing annual funding amounts.
                    Select a data point to view the funding for that year.
                  </desc>

                  {/* =========================================
                      GRID
                  ========================================== */}

                  {[0, 0.25, 0.5, 0.75, 1].map((value) => {
                    const y = padding.top + innerHeight - value * innerHeight;

                    return (
                      <g key={value}>
                        <line
                          x1={padding.left}
                          x2={chartWidth - padding.right}
                          y1={y}
                          y2={y}
                          stroke="#E2E8F0"
                          strokeWidth="1"
                          strokeDasharray="4 7"
                        />

                        <text
                          x={padding.left - 14}
                          y={y + 4}
                          textAnchor="end"
                          fontSize="11"
                          fontWeight="600"
                          fill="#94A3B8"
                        >
                          {formatMoney(maxFunding * value)}
                        </text>
                      </g>
                    );
                  })}

                  {/* =========================================
                      AREA
                  ========================================== */}

                  <motion.polygon
                    points={areaPoints}
                    fill="rgba(8,123,90,0.055)"
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.9,
                    }}
                  />

                  {/* =========================================
                      MAIN LINE
                  ========================================== */}

                  <motion.polyline
                    points={linePoints}
                    fill="none"
                    stroke="#087B5A"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                    initial={
                      shouldReduceMotion
                        ? false
                        : {
                            pathLength: 0,
                          }
                    }
                    animate={{
                      pathLength: 1,
                    }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 1.4,
                      ease: "easeInOut",
                    }}
                  />

                  {/* =========================================
                      X AXIS YEARS
                  ========================================== */}

                  {keyYears.map((year) => {
                    const point = points.find((item) => item.year === year);

                    if (!point) return null;

                    const isSelected = selectedYear === year;

                    return (
                      <g key={year}>
                        <line
                          x1={point.x}
                          x2={point.x}
                          y1={padding.top + innerHeight}
                          y2={padding.top + innerHeight + 7}
                          stroke="#CBD5E1"
                        />

                        <text
                          x={point.x}
                          y={chartHeight - 20}
                          textAnchor="middle"
                          fontSize="12"
                          fontWeight="700"
                          fill={isSelected ? "#F97316" : "#94A3B8"}
                        >
                          {year}
                        </text>
                      </g>
                    );
                  })}

                  {/* =========================================
                      DATA POINTS
                  ========================================== */}

                  {points.map((point) => {
                    const isSelected = point.year === selectedYear;

                    return (
                      <g key={point.year}>
                        {/* Accessible interaction area */}

                        <circle
                          cx={point.x}
                          cy={point.y}
                          r="14"
                          fill="transparent"
                          className="cursor-pointer"
                          tabIndex={0}
                          role="button"
                          aria-label={`${point.year}: ${
                            point.formattedAmount || formatMoney(point.amount)
                          }`}
                          onClick={() => setSelectedYear(point.year)}
                          onKeyDown={(event) => {
                            if (event.key === "Enter" || event.key === " ") {
                              event.preventDefault();
                              setSelectedYear(point.year);
                            }
                          }}
                        />

                        {/* Selected Ring */}

                        {isSelected && (
                          <motion.circle
                            cx={point.x}
                            cy={point.y}
                            r="10"
                            fill="none"
                            stroke="#F97316"
                            strokeWidth="3"
                            initial={{
                              opacity: 0,
                              scale: 0.7,
                            }}
                            animate={{
                              opacity: 1,
                              scale: 1,
                            }}
                            transition={{
                              duration: 0.25,
                            }}
                          />
                        )}

                        {/* Point */}

                        <circle
                          cx={point.x}
                          cy={point.y}
                          r={isSelected ? 5.5 : 3}
                          fill={isSelected ? "#F97316" : "#087B5A"}
                          stroke="white"
                          strokeWidth="2"
                          className="pointer-events-none"
                        />
                      </g>
                    );
                  })}

                  {/* =========================================
                      SELECTED TOOLTIP
                  ========================================== */}

                  {selectedPoint && (
                    <g
                      pointerEvents="none"
                      transform={`translate(${Math.min(
                        Math.max(selectedPoint.x - 95, 10),
                        chartWidth - 205,
                      )},${Math.max(selectedPoint.y - 105, 10)})`}
                    >
                      <rect width="190" height="82" rx="14" fill="#0B3D2E" />

                      <text
                        x="18"
                        y="24"
                        fontSize="10"
                        fontWeight="700"
                        fill="#A7DCC9"
                      >
                        {selectedData.year}
                      </text>

                      <text
                        x="18"
                        y="47"
                        fontSize="17"
                        fontWeight="800"
                        fill="white"
                      >
                        {selectedData.formattedAmount ||
                          formatMoney(selectedData.amount)}
                      </text>

                      <text
                        x="18"
                        y="67"
                        fontSize="10"
                        fontWeight="600"
                        fill="#CBD5E1"
                      >
                        {selectedData.percentage}% of total funding
                      </text>
                    </g>
                  )}
                </svg>
              </div>
            </div>
          </div>

          {/* ===================================================
              CHART FOOTER
          ==================================================== */}

          <div className="border-t border-slate-100 px-6 py-5 sm:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 rounded-full bg-[#087B5A]"
                />

                <p className="text-xs text-slate-500">
                  Select any point to explore annual funding.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                <span>{selectedData.year}</span>

                <FaArrowRight
                  size={9}
                  className="text-[#F97316]"
                  aria-hidden="true"
                />

                <span>
                  {selectedData.formattedAmount ||
                    formatMoney(selectedData.amount)}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            MOBILE / ACCESSIBILITY NOTE
        ====================================================== */}

        <p className="mt-5 text-center text-[11px] leading-5 text-slate-400">
          The chart can be horizontally scrolled on smaller screens.
        </p>
      </div>
    </section>
  );
}
