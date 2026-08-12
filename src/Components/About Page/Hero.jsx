import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0B3D2E]">
      {/* =====================================================
          DECORATIVE BACKGROUND
      ====================================================== */}

      <motion.div
        className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#A7F3D0]/10 blur-3xl"
        animate={{
          x: [0, 20, 0],
          y: [0, 15, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#0284C7]/10 blur-3xl"
        animate={{
          x: [0, -20, 0],
          y: [0, -15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Vertical Accent */}
      <motion.div
        className="absolute left-0 top-0 h-full w-px origin-top bg-gradient-to-b from-transparent via-[#A7F3D0]/20 to-transparent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto flex min-h-[520px] w-full max-w-7xl items-center px-5 py-20 sm:px-8 sm:py-24 lg:min-h-[580px] lg:px-10 lg:py-28">
        <div className="max-w-3xl">
          {/* =================================================
              EYEBROW
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-[#A7F3D0] sm:w-10" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#A7F3D0] sm:text-sm sm:tracking-[0.2em]">
              About DAFA
            </span>
          </motion.div>

          {/* =================================================
              MAIN HEADING
          ================================================== */}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              text-3xl
              font-extrabold
              leading-[1.08]
              tracking-tight
              text-white
              sm:text-4xl
              md:text-5xl
              lg:text-[3.5rem]
              xl:text-[4rem]
            "
          >
            About the <span className="text-[#A7F3D0]">Demining Agency</span>{" "}
            for Afghanistan
          </motion.h1>

          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-6
              max-w-2xl
              text-sm
              leading-7
              text-green-50/85
              sm:text-base
              sm:leading-7
              md:text-lg
              md:leading-8
            "
          >
            The Demining Agency for Afghanistan works to protect communities
            from explosive hazards and contribute to a safer, more secure future
            across Afghanistan.
          </motion.p>

          {/* =================================================
              SMALL SUPPORTING LINE
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
            className="mt-7 flex items-center gap-3"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#F97316]" />

            <span className="text-xs font-medium tracking-wide text-white/60 sm:text-sm">
              Humanitarian Mine Action • Afghanistan
            </span>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM FADE
      ====================================================== */}

      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0B3D2E]/40 to-transparent" />
    </section>
  );
}
