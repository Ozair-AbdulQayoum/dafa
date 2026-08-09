import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCogs, FaShieldAlt } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-[680px] overflow-hidden bg-[#06281E]">
      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}

      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1.8,
          ease: "easeOut",
        }}
        className="absolute inset-0"
      >
        <img
          src="/images/what-we-do/mechanical-demining.jpg"
          alt="Mechanical demining operation"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* =====================================================
          OVERLAY
      ====================================================== */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#052E23]/95 via-[#06281E]/80 to-[#06281E]/20" />

      {/* Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#06281E] to-transparent" />

      {/* =====================================================
          DECORATIVE ELEMENTS
      ====================================================== */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -right-20 top-24 hidden h-72 w-72 rounded-full border border-white/10 lg:block"
      />

      <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#087B5A]/20 blur-3xl" />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl items-center px-5 py-20 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-3xl"
        >
          {/* Label */}

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#A7F3D0]/10 text-[#A7F3D0]">
              <FaCogs size={15} />
            </span>

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#A7F3D0] sm:text-sm">
              What We Do
            </span>
          </motion.div>

          {/* Heading */}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.25,
            }}
            className="text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Mechanical
            <span className="block text-[#A7F3D0]">Demining</span>
          </motion.h1>

          {/* Subtitle */}

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.35,
            }}
            className="mt-5 text-xl font-semibold text-white sm:text-2xl"
          >
            Powerful Technology. Safer Ground.
          </motion.p>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.45,
            }}
            className="mt-5 max-w-2xl text-base leading-8 text-green-50/75 sm:text-lg"
          >
            DAFA uses mechanical demining capabilities to support the clearance
            of contaminated land, combining specialized machinery, trained
            personnel, and careful operational planning to help reduce explosive
            hazards.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.6,
            }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              to="/projects"
              className="group inline-flex items-center gap-3 rounded-xl bg-[#F97316] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ea580c] hover:shadow-xl"
            >
              Explore Our Projects
              <FaArrowRight
                size={12}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-xl border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-[#087B5A]"
            >
              Contact DAFA
            </Link>
          </motion.div>

          {/* Trust Point */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.75,
            }}
            className="mt-8 flex items-center gap-3 text-sm text-green-50/60"
          >
            <FaShieldAlt size={15} className="text-[#A7F3D0]" />

            <span>
              Supporting safer and more efficient humanitarian mine action
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
