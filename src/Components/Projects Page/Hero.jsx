import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaMapMarkedAlt, FaProjectDiagram } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-[620px] overflow-hidden bg-[#06281E]">
      {/* ================= BACKGROUND ================= */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#087B5A]/30 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-48 -left-40 h-[500px] w-[500px] rounded-full bg-[#2563EB]/20 blur-3xl"
      />

      {/* Subtle Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(#A7F3D0 1px, transparent 1px), linear-gradient(90deg, #A7F3D0 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Decorative Circle */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -right-20 top-1/2 hidden h-72 w-72 rounded-full border border-dashed border-[#A7F3D0]/10 lg:block"
      />

      {/* ================= HERO CONTENT ================= */}

      <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-center px-5 py-20 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#A7F3D0]/10 text-[#A7F3D0]">
              <FaProjectDiagram size={16} />
            </span>

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A7F3D0] sm:text-sm">
              Our Projects
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.15,
            }}
            className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Creating Safer
            <span className="block text-[#A7F3D0]">Communities</span>
          </motion.h1>

          {/* Supporting Heading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
            className="mt-6 text-lg font-semibold leading-7 text-white sm:text-xl"
          >
            Humanitarian Mine Action Across Afghanistan
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.35,
            }}
            className="mt-5 max-w-2xl text-base leading-8 text-green-50/70 sm:text-lg"
          >
            From mine clearance and explosive hazard response to risk education
            and community support, DAFA delivers humanitarian mine action that
            helps people live, move, and build safer futures across Afghanistan.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.45,
            }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              to="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#F97316] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#EA580C] hover:shadow-xl"
            >
              Explore Projects
              <FaArrowRight
                size={12}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/what-we-do/manual-demining"
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#0B3D2E]"
            >
              Our Programs
              <FaMapMarkedAlt size={13} />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#F8FAFC] to-transparent" />
    </section>
  );
}
