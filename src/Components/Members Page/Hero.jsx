import React from "react";
import { motion } from "framer-motion";

import membersHeroData from "../../Components/Data File/Members Page Data/HeroData";

export default function Hero() {
  const { eyebrow, title, highlight, description } = membersHeroData;

  return (
    <section className="relative overflow-hidden bg-[#06281E]">
      {/* =====================================================
          DECORATIVE BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#A7F3D0]/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-[#0284C7]/10 blur-3xl" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:60px_60px]" />

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24 lg:px-10 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Eyebrow */}

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#A7F3D0]">
            {eyebrow}
          </p>

          {/* Heading */}

          <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {title}

            <span className="block text-[#A7F3D0]">{highlight}</span>
          </h1>

          {/* Description */}

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-green-50/70 sm:text-lg">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
