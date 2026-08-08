import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0B3D2E]">
      {/* ================= DECORATIVE BACKGROUND ================= */}

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

      {/* Subtle Vertical Accent */}
      <motion.div
        className="absolute left-0 top-0 h-full w-px origin-top bg-gradient-to-b from-transparent via-[#A7F3D0]/20 to-transparent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 md:py-24 lg:px-10 lg:py-28">
        <div className="max-w-3xl">
          {/* Label */}
          <motion.span
            className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-[#A7F3D0]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            About DAFA
          </motion.span>

          {/* Heading */}
          <motion.h1
            className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            About the Demining Agency for Afghanistan
          </motion.h1>

          {/* Description */}
          <motion.p
            className="mt-5 max-w-2xl text-sm leading-7 text-green-50/90 sm:text-base md:text-lg md:leading-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            The Demining Agency for Afghanistan works to protect communities
            from explosive hazards and contribute to a safer future across
            Afghanistan.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
