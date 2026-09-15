// src/Components/News/NewsHero.jsx

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaNewspaper } from "react-icons/fa";

import { newsHeroData } from "../../Data File/News Update Data/Hero";

export default function NewsHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="news-hero-heading"
      className="
        relative isolate w-full
        overflow-hidden
        bg-[#06281E]
        text-white
        min-h-[500px]
        sm:min-h-[560px]
        lg:min-h-[620px]
      "
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}

      <div className="absolute inset-0">
        <img
          src={newsHeroData.image}
          alt=""
          aria-hidden="true"
          className="
            h-full w-full
            object-cover
            object-center
            transition-transform
            duration-[1200ms]
          "
        />
      </div>

      {/* =====================================================
          IMAGE OVERLAY
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          absolute inset-0
          bg-[#06281E]/45
        "
      />

      {/* Left readability gradient */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0
          bg-gradient-to-r
          from-[#031F18]/80
          via-[#06281E]/45
          to-transparent
        "
      />

      {/* Bottom editorial gradient */}
      <div
        aria-hidden="true"
        className="
          absolute inset-x-0 bottom-0
          h-2/3
          bg-gradient-to-t
          from-[#031F18]/80
          via-[#031F18]/25
          to-transparent
        "
      />

      {/* Mobile readability */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0
          bg-gradient-to-b
          from-transparent
          via-transparent
          to-[#031F18]/40
          lg:hidden
        "
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative z-10
          mx-auto flex
          min-h-[500px]
          max-w-7xl
          items-center
          px-5 py-24
          sm:min-h-[560px]
          sm:px-8
          lg:min-h-[620px]
          lg:px-10
          lg:py-28
          xl:px-12
        "
      >
        <motion.div
          initial={
            shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            w-full
            max-w-3xl
          "
        >
          {/* =================================================
              EYEBROW
          ================================================= */}

          <div className="mb-5 flex items-center gap-3 sm:mb-6">
            <span
              aria-hidden="true"
              className="
                h-[2px] w-8
                rounded-full
                bg-[#F97316]
                sm:w-10
              "
            />

            <div
              className="
                inline-flex
                items-center
                gap-2
                text-[9px]
                font-extrabold
                uppercase
                tracking-[0.2em]
                text-[#A7F3D0]
                sm:text-[10px]
                md:text-xs
              "
            >
              <FaNewspaper aria-hidden="true" className="text-[#F97316]" />

              <span>{newsHeroData.badge}</span>
            </div>
          </div>

          {/* =================================================
              HEADING
          ================================================= */}

          <h1
            id="news-hero-heading"
            className="
              max-w-3xl
              text-4xl
              font-extrabold
              leading-[1.02]
              tracking-[-0.045em]
              text-white
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            {newsHeroData.title}

            <span className="block text-[#A7F3D0]">
              {newsHeroData.highlight}
            </span>
          </h1>

          {/* =================================================
              ORANGE ACCENT
          ================================================= */}

          <div
            aria-hidden="true"
            className="
              mt-6
              h-[3px]
              w-14
              rounded-full
              bg-[#F97316]
              sm:mt-7
            "
          />

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p
            className="
              mt-6
              max-w-2xl
              text-sm
              leading-7
              text-white/75
              sm:text-base
              sm:leading-8
              lg:text-lg
            "
          >
            {newsHeroData.description}
          </p>
        </motion.div>
      </div>

      {/* =====================================================
          BOTTOM EDGE
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-8
          bg-gradient-to-t
          from-[#06281E]/30
          to-transparent
        "
      />
    </section>
  );
}
