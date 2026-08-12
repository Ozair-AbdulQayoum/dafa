import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowDown,
  FaExclamationTriangle,
  FaShieldAlt,
} from "react-icons/fa";

export default function EOREHero() {
  return (
    <section
      id="eore-hero"
      className="relative min-h-[620px] overflow-hidden bg-[#0B3D2E] sm:min-h-[680px]"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0">
        <img
          src="/images/eore-hero.jpg"
          alt="Explosive Ordnance Risk Education"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#0B3D2E]/75" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#061F18] via-[#0B3D2E]/80 to-[#0B3D2E]/30" />
      </div>

      {/* Decorative shapes */}

      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-white/10" />

      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/10" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#F97316]/10 blur-3xl" />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-center px-5 py-20 sm:min-h-[680px] sm:px-8 lg:px-10">
        <div className="max-w-4xl">
          {/* Eyebrow */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-10 bg-[#F97316]" />

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A7F3D0]">
              What We Do
            </p>
          </motion.div>

          {/* Title */}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Explosive Ordnance
            <span className="block text-[#A7F3D0]">Risk Education</span>
          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg"
          >
            Helping communities recognize explosive hazards, understand the
            risks, and make safer decisions in areas affected by explosive
            ordnance.
          </motion.p>

          {/* Safety badges */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2.5 text-sm font-medium text-white backdrop-blur-sm">
              <FaShieldAlt className="text-[#A7F3D0]" size={14} />
              Safety Awareness
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2.5 text-sm font-medium text-white backdrop-blur-sm">
              <FaExclamationTriangle className="text-[#F97316]" size={14} />
              Hazard Recognition
            </div>
          </motion.div>

          {/* CTA */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9"
          >
            <a
              href="#what-is-eore"
              className="group inline-flex items-center gap-3 rounded-xl bg-[#F97316] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#ea580c]"
            >
              Learn About EORE
              <FaArrowDown
                size={12}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </a>
          </motion.div>
        </div>
      </div>

      {/* ================= BOTTOM LABEL ================= */}

      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-black/10 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 sm:text-xs">
            Explosive Ordnance Risk Education
          </p>

          <p className="hidden text-xs font-medium text-white/40 sm:block">
            Awareness • Prevention • Protection
          </p>
        </div>
      </div>
    </section>
  );
}
