import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaFileAlt,
  FaFilePdf,
  FaChartBar,
  FaCalendarAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0B3D2E]">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#087B5A]/30 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#F97316]/10 blur-3xl" />

      <div className="pointer-events-none absolute right-1/3 top-0 h-40 w-40 rounded-full bg-[#A7F3D0]/5 blur-3xl" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#F97316]" />

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#A7F3D0]">
                DAFA Publications
              </p>
            </div>

            {/* Heading */}
            <h1 className="max-w-2xl text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Reports &
              <span className="block text-[#A7F3D0]">Publications</span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-8 text-green-50/75 sm:text-lg">
              Explore DAFA's official reports, project documentation, annual
              publications, and humanitarian mine-action materials documenting
              our work across Afghanistan.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#reports"
                className="group inline-flex items-center gap-3 rounded-xl bg-[#F97316] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#ea6410] hover:shadow-xl"
              >
                Explore Reports
                <FaArrowRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <Link
                to="/knowledge-center"
                className="inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10"
              >
                Knowledge Center
              </Link>
            </div>
          </motion.div>

          {/* ================= RIGHT VISUAL ================= */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative mx-auto w-full max-w-xl"
          >
            {/* Decorative Circle */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/10" />

            {/* Back Document */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-4 top-0 h-[360px] w-[270px] rotate-6 rounded-2xl border border-white/10 bg-white/10 shadow-2xl backdrop-blur-sm"
            >
              <div className="p-6">
                <div className="h-3 w-24 rounded bg-white/20" />
                <div className="mt-5 space-y-2">
                  <div className="h-2 w-full rounded bg-white/10" />
                  <div className="h-2 w-5/6 rounded bg-white/10" />
                  <div className="h-2 w-4/6 rounded bg-white/10" />
                </div>
              </div>
            </motion.div>

            {/* Main Report */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4,
              }}
              className="relative mx-auto w-[290px] rounded-2xl bg-white p-7 shadow-2xl sm:w-[330px]"
            >
              {/* Report Header */}
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#087B5A]">
                    DAFA
                  </p>

                  <h3 className="mt-2 text-xl font-black text-[#0F172A]">
                    Annual Report
                  </h3>

                  <p className="mt-1 text-xs text-slate-400">
                    Humanitarian Mine Action
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-500">
                  <FaFilePdf size={19} />
                </div>
              </div>

              {/* Cover Graphic */}
              <div className="mt-7 overflow-hidden rounded-xl bg-[#0B3D2E] p-5">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-widest text-[#A7F3D0]">
                      Annual Report
                    </p>

                    <p className="mt-1 text-4xl font-black text-white">2025</p>
                  </div>

                  <FaFileAlt size={46} className="text-white/20" />
                </div>

                <div className="mt-5 h-1 w-16 rounded-full bg-[#F97316]" />
              </div>

              {/* Document Information */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <FaCalendarAlt className="text-[#087B5A]" />
                  <span>Published 2025</span>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <FaChartBar className="text-[#087B5A]" />
                  <span>Humanitarian Impact & Operations</span>
                </div>
              </div>

              {/* Bottom */}
              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Official Publication
                </span>

                <span className="rounded-full bg-[#087B5A]/10 px-3 py-1 text-[10px] font-bold text-[#087B5A]">
                  PDF
                </span>
              </div>
            </motion.div>

            {/* Floating PDF Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-2 top-20 flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 px-4 py-3 shadow-xl backdrop-blur-md sm:-left-8"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F97316] text-white">
                <FaFilePdf size={14} />
              </div>

              <div>
                <p className="text-xs font-bold text-white">Official Reports</p>
                <p className="text-[10px] text-green-100/60">
                  DAFA Publications
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ================= BOTTOM STATS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 border-t border-white/10 pt-8 lg:mt-20"
        >
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div>
              <p className="text-2xl font-black text-white sm:text-3xl">36+</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-green-100/50">
                Years of Experience
              </p>
            </div>

            <div>
              <p className="text-2xl font-black text-white sm:text-3xl">
                Annual
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-green-100/50">
                Reports
              </p>
            </div>

            <div>
              <p className="text-2xl font-black text-white sm:text-3xl">
                Project
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-green-100/50">
                Documentation
              </p>
            </div>

            <div>
              <p className="text-2xl font-black text-white sm:text-3xl">
                Impact
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-green-100/50">
                Publications
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
