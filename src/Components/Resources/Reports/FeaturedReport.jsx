import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaFilePdf,
  FaBookOpen,
} from "react-icons/fa";

export default function FeaturedReport() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#087B5A]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#F97316]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 max-w-3xl"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
            Featured Publication
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Latest
            <span className="text-[#087B5A]"> Report</span>
          </h2>

          <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
            Explore DAFA's latest publications, reports, and operational
            documentation covering humanitarian mine action in Afghanistan.
          </p>
        </motion.div>

        {/* Featured Report */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-3xl border border-slate-200 bg-[#F8FAFC] shadow-sm"
        >
          <div className="grid lg:grid-cols-2">
            {/* Report Cover */}
            <div className="relative min-h-[380px] overflow-hidden bg-[#0B3D2E]">
              {/* Replace this with the real report cover */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="relative w-full max-w-sm rotate-[-2deg] overflow-hidden rounded-lg bg-white p-8 shadow-2xl">
                  {/* Fake Report Cover */}
                  <div className="border-l-4 border-[#F97316] pl-5">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
                      DAFA Publication
                    </p>

                    <h3 className="mt-5 text-2xl font-black leading-tight text-[#0F172A] sm:text-3xl">
                      Annual Report
                    </h3>

                    <p className="mt-2 text-lg font-semibold text-slate-500">
                      Humanitarian Mine Action
                    </p>

                    <div className="mt-12 h-1 w-16 bg-[#F97316]" />

                    <p className="mt-4 text-sm font-medium text-slate-400">
                      Demining Agency for Afghanistan
                    </p>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-4">
                    <span className="text-xs font-semibold text-slate-400">
                      ANNUAL REPORT
                    </span>

                    <FaFilePdf className="text-[#F97316]" size={20} />
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-[#087B5A]/30 blur-2xl" />
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#F97316]/20 blur-2xl" />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                <span className="inline-flex items-center gap-2">
                  <FaBookOpen className="text-[#087B5A]" />
                  Annual Report
                </span>

                <span className="h-1 w-1 rounded-full bg-slate-300" />

                <span className="inline-flex items-center gap-2">
                  <FaCalendarAlt className="text-[#087B5A]" />
                  2026
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-6 text-3xl font-bold leading-tight text-[#0F172A] sm:text-4xl">
                DAFA Annual Report
                <span className="block text-[#087B5A]">
                  Humanitarian Mine Action
                </span>
              </h3>

              {/* Description */}
              <p className="mt-5 text-base leading-8 text-slate-600">
                Discover DAFA's humanitarian mine-action activities, operational
                achievements, community impact, field operations, and progress
                across Afghanistan.
              </p>

              {/* Highlights */}
              <div className="mt-7 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-xs uppercase tracking-wider text-slate-400">
                    Publication
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#0F172A]">
                    Annual Report
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-xs uppercase tracking-wider text-slate-400">
                    Format
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#0F172A]">
                    PDF Document
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/resources/reports/annual-report-2026"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#087B5A] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#065c43] hover:shadow-lg"
                >
                  Read Report
                  <FaArrowRight size={12} />
                </Link>

                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-[#0F172A] transition hover:border-[#087B5A] hover:text-[#087B5A]"
                >
                  <FaFilePdf size={14} />
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
