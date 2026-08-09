import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaHardHat, FaMapMarkerAlt } from "react-icons/fa";

// import manualDeminingImg from "../../../assets/WhatWeDo/manual-demining.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-[680px] overflow-hidden bg-[#06281E]">
      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}

      <motion.img
        // src={manualDeminingImg}
        alt="DAFA manual demining team working in the field"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2,
          ease: "easeOut",
        }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* =====================================================
          OVERLAY
      ====================================================== */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#052E23]/95 via-[#0B3D2E]/85 via-60% to-[#0B3D2E]/20" />

      {/* Bottom Fade */}

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#06281E]/70 to-transparent" />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl items-center px-5 py-20 sm:px-8 lg:px-10">
        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-3xl -translate-y-6 sm:-translate-y-8"
        >
          {/* =================================================
              LABEL
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-[2px] w-10 rounded-full bg-[#F97316]" />

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#FDBA74] sm:text-sm">
              What We Do
            </span>
          </motion.div>

          {/* =================================================
              TITLE
          ================================================== */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.75,
              delay: 0.25,
            }}
            className="
              text-5xl
              font-extrabold
              leading-[0.95]
              tracking-tight
              text-white
              sm:text-6xl
              md:text-7xl
              lg:text-[5rem]
            "
          >
            Manual
            <span className="block text-[#A7F3D0]">Demining</span>
          </motion.h1>

          {/* =================================================
              SUBTITLE
          ================================================== */}

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
            className="
              mt-5
              text-xl
              font-semibold
              text-white
              sm:text-2xl
            "
          >
            Careful. Controlled. Community-Focused.
          </motion.p>

          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.5,
            }}
            className="
              mt-6
              max-w-2xl
              text-sm
              leading-7
              text-green-50/75
              sm:text-base
              sm:leading-8
              lg:text-lg
            "
          >
            DAFA's manual demining teams work to identify and safely clear
            explosive hazards from contaminated land, helping communities across
            Afghanistan access safer land and rebuild their lives with greater
            security.
          </motion.p>

          {/* =================================================
              QUICK INFORMATION
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.6,
            }}
            className="mt-7 flex flex-wrap gap-3"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur-sm">
              <FaHardHat size={13} className="text-[#FDBA74]" />
              Trained Demining Teams
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur-sm">
              <FaMapMarkerAlt size={13} className="text-[#A7F3D0]" />
              Communities Across Afghanistan
            </div>
          </motion.div>

          {/* =================================================
              BUTTONS
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.7,
            }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/projects"
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-[#F97316]
                px-6
                py-3.5
                text-sm
                font-bold
                text-white
                shadow-lg
                shadow-orange-950/20
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#EA580C]
                hover:shadow-xl
              "
            >
              Our Projects
              <FaArrowRight
                size={12}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/contact"
              className="
                inline-flex
                items-center
                justify-center
                rounded-xl
                border
                border-white/40
                bg-white/5
                px-6
                py-3.5
                text-sm
                font-bold
                text-white
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-white
                hover:bg-white
                hover:text-[#087B5A]
              "
            >
              Contact DAFA
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* =====================================================
          BOTTOM PROGRAM INDICATOR
      ====================================================== */}

      <div className="absolute bottom-6 right-6 z-20 hidden sm:block lg:right-10">
        <div className="flex items-center gap-3 rounded-full border border-white/10 bg-black/20 px-4 py-2 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-[#F97316]" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">
            Humanitarian Mine Action
          </span>
        </div>
      </div>
    </section>
  );
}
