// src/Components/Certificates/Hero.jsx

import React from "react";
import { motion } from "framer-motion";

import { certificateHeroData } from "../../Data File/Certificate Data/Hero";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0B3D2E]">
      {/* Background Decorations */}

      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#087B5A]/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#F97316]/10 blur-3xl" />

      {/* Content */}

      <div className="relative mx-auto flex min-h-[420px] max-w-5xl items-center justify-center px-5 py-24 text-center sm:px-8 lg:min-h-[480px] lg:px-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-3xl"
        >
          {/* Label */}

          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 rounded-full bg-[#F97316]" />

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#A7F3D0] sm:text-sm">
              {certificateHeroData.label}
            </span>

            <span className="h-[2px] w-10 rounded-full bg-[#F97316]" />
          </div>

          {/* Heading */}

          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-[-0.025em] text-white sm:text-5xl lg:text-6xl">
            {certificateHeroData.title}

            <span className="block text-[#A7F3D0]">
              {certificateHeroData.highlight}
            </span>
          </h1>

          {/* Description */}

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-green-50/75 sm:text-lg">
            {certificateHeroData.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
