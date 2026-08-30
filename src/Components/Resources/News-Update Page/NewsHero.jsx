// src/Components/News/NewsHero.jsx

import React from "react";
import { motion } from "framer-motion";
import { FaNewspaper } from "react-icons/fa";

import { newsHeroData } from "../../Data File/News Update Data/Hero";

export default function NewsHero() {
  return (
    <section className="relative overflow-hidden bg-[#0B3D2E]">
      {/* =====================================================
          BACKGROUND DECORATIONS
      ===================================================== */}

      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#087B5A]/30 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#F97316]/15 blur-3xl" />

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div className="relative mx-auto max-w-5xl px-5 py-24 text-center sm:px-8 lg:px-10 lg:py-32">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mx-auto flex max-w-4xl flex-col items-center"
        >
          {/* =================================================
              BADGE
          ================================================= */}

          <div className="inline-flex items-center gap-2 rounded-full border border-[#A7F3D0]/20 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#A7F3D0] backdrop-blur-sm">
            <FaNewspaper size={11} />

            <span>{newsHeroData.badge}</span>
          </div>

          {/* =================================================
              HEADING
          ================================================= */}

          <h1 className="mt-7 max-w-4xl text-[42px] font-bold leading-[1.05] tracking-[-0.025em] text-white sm:text-5xl lg:text-[64px]">
            {newsHeroData.title}

            <span className="block text-[#A7F3D0]">
              {newsHeroData.highlight}
            </span>
          </h1>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p className="mx-auto mt-7 max-w-2xl text-[16px] font-normal leading-7 text-green-50/75 sm:text-[17px] sm:leading-8">
            {newsHeroData.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
