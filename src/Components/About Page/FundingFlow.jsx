import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaChartLine } from "react-icons/fa";

import { fundingData } from "../../Components/Data File/About Page Data/FundingData";

export default function FundingFlow() {
  const [selectedYear, setSelectedYear] = useState(2026);

  const selectedData = useMemo(
    () =>
      fundingData.find((item) => item.year === selectedYear) ||
      fundingData[fundingData.length - 1],
    [selectedYear],
  );

  const chartWidth = 1400;
  const chartHeight = 440;

  const padding = {
    top: 45,
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
  // KEY YEARS ONLY
  // =====================================================

  const keyYears = [1990, 1995, 2000, 2005, 2010, 2015, 2020, 2025, 2026];

  // =====================================================
  // FORMAT MONEY
  // =====================================================

  const formatMoney = (amount) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`;
    }

    if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(0)}K`;
    }

    return `$${amount.toLocaleString()}`;
  };

  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#087B5A]/5 blur-3xl" />

        <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#F97316]/5 blur-3xl" />
      </div>

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-3">
            <span className="h-[2px] w-8 rounded-full bg-[#F97316]" />

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#087B5A] sm:text-sm">
              Funding Flow
            </span>

            <span className="h-[2px] w-8 rounded-full bg-[#F97316]" />
          </div>

          <h2 className="text-3xl font-black leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Funding Over the <span className="text-[#087B5A]">Years</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
            Explore DAFA's funding history from 1990 to 2026. Select any point
            on the chart to view the annual funding amount and its share of
            total funding.
          </p>
        </motion.div>

        {/* =====================================================
            CHART CARD
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
        >
          {/* =================================================
              CHART HEADER
          ================================================== */}

          <div className="flex flex-col gap-5 border-b border-slate-100 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A]">
                  <FaChartLine size={17} />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                    Historical Overview
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-[#0F172A] sm:text-xl">
                    Annual Funding Flow
                  </h3>
                </div>
              </div>
            </div>

            {/* Current Selection */}

            <motion.div
              key={selectedData.year}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="flex items-center gap-4 rounded-2xl bg-slate-50 px-5 py-3"
            >
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                  {selectedData.year}
                </p>

                <p className="mt-0.5 text-lg font-black text-[#0F172A]">
                  {selectedData.formattedAmount ||
                    formatMoney(selectedData.amount)}
                </p>
              </div>

              <div className="h-8 w-px bg-slate-200" />

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                  Share
                </p>

                <p className="mt-0.5 text-lg font-black text-[#087B5A]">
                  {selectedData.percentage}%
                </p>
              </div>
            </motion.div>
          </div>

          {/* =================================================
              CHART
          ================================================== */}

          <div className="overflow-x-auto px-4 pb-6 pt-8 sm:px-8">
            <div className="min-w-[850px]">
              <svg
                viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                className="h-auto w-full overflow-visible"
              >
                {/* =================================================
                    GRID
                ================================================== */}

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
                        strokeDasharray="5 7"
                      />

                      <text
                        x={padding.left - 15}
                        y={y + 4}
                        textAnchor="end"
                        fontSize="12"
                        fontWeight="600"
                        fill="#94A3B8"
                      >
                        {formatMoney(maxFunding * value)}
                      </text>
                    </g>
                  );
                })}

                {/* =================================================
                    AREA
                ================================================== */}

                <motion.polygon
                  points={areaPoints}
                  fill="rgba(8,123,90,0.07)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                />

                {/* =================================================
                    LINE
                ================================================== */}

                <motion.polyline
                  points={linePoints}
                  fill="none"
                  stroke="#087B5A"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                  initial={{
                    pathLength: 0,
                  }}
                  animate={{
                    pathLength: 1,
                  }}
                  transition={{
                    duration: 1.6,
                    ease: "easeInOut",
                  }}
                />

                {/* =================================================
                    X AXIS
                ================================================== */}

                {keyYears.map((year) => {
                  const point = points.find((item) => item.year === year);

                  if (!point) return null;

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
                        fill={selectedYear === year ? "#F97316" : "#94A3B8"}
                      >
                        {year}
                      </text>
                    </g>
                  );
                })}

                {/* =================================================
                    DATA POINTS
                ================================================== */}

                {points.map((point) => {
                  const isSelected = point.year === selectedYear;

                  return (
                    <g key={point.year}>
                      {/* Invisible large click area */}

                      <circle
                        cx={point.x}
                        cy={point.y}
                        r="15"
                        fill="transparent"
                        className="cursor-pointer"
                        onClick={() => setSelectedYear(point.year)}
                      />

                      {/* Selected Ring */}

                      {isSelected && (
                        <motion.circle
                          cx={point.x}
                          cy={point.y}
                          r="11"
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
                        />
                      )}

                      {/* Point */}

                      <circle
                        cx={point.x}
                        cy={point.y}
                        r={isSelected ? 6 : 3}
                        fill={isSelected ? "#F97316" : "#087B5A"}
                        stroke="white"
                        strokeWidth="2"
                        className="cursor-pointer transition-all"
                        onClick={() => setSelectedYear(point.year)}
                      />
                    </g>
                  );
                })}

                {/* =================================================
                    SELECTED TOOLTIP
                ================================================== */}

                {selectedPoint && (
                  <g
                    pointerEvents="none"
                    transform={`translate(${Math.min(
                      Math.max(selectedPoint.x - 95, 10),
                      chartWidth - 205,
                    )},${Math.max(selectedPoint.y - 105, 10)})`}
                  >
                    <rect width="190" height="82" rx="14" fill="#0F172A" />

                    <text
                      x="18"
                      y="24"
                      fontSize="11"
                      fontWeight="700"
                      fill="#A7F3D0"
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
                      fontSize="11"
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

          {/* =================================================
              FOOTER
          ================================================== */}

          <div className="flex flex-col gap-2 border-t border-slate-100 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p className="text-xs text-slate-400">
              Click any point to explore annual funding.
            </p>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#087B5A]" />

              <span className="text-xs font-semibold text-slate-500">
                1990 — 2026
              </span>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            DATA NOTE
        ====================================================== */}

        <p className="mx-auto mt-6 max-w-3xl text-center text-[11px] leading-6 text-slate-400">
          Funding figures are illustrative placeholders and should be replaced
          with verified DAFA financial records before publication.
        </p>
      </div>
    </section>
  );
}
