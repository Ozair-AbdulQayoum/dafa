// src/Components/Home-Page/Hero.jsx

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaChevronRight, FaShieldAlt } from "react-icons/fa";

import { aboutHeroData } from "../../Components/Data File/About Page Data/HeroData";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      aria-labelledby="about-hero-heading"
      className="relative overflow-hidden bg-[#F7FAF8]"
    >
      {/* =====================================================
          BACKGROUND DETAILS
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="
            absolute
            -right-40
            -top-40
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#0B3D2E]/[0.045]
            blur-[100px]
          "
        />

        <div
          className="
            absolute
            -bottom-32
            left-[40%]
            h-64
            w-64
            rounded-full
            bg-[#F97316]/[0.05]
            blur-[90px]
          "
        />

        <div
          className="
            absolute
            bottom-0
            left-0
            top-0
            hidden
            w-px
            bg-[#0B3D2E]/10
            lg:block
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-5
          pb-16
          pt-6
          sm:px-8
          sm:pb-20
          sm:pt-8
          lg:px-10
          lg:pb-24
        "
      >
        {/* ===================================================
            BREADCRUMB
        ==================================================== */}

        <motion.nav
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          aria-label="Breadcrumb"
          className="mb-12 sm:mb-14 lg:mb-16"
        >
          <ol className="flex items-center gap-2 text-xs sm:text-sm">
            <li>
              <Link
                to="/"
                className="
                  font-medium
                  text-slate-500
                  transition-colors
                  duration-200
                  hover:text-[#0B3D2E]
                  focus:outline-none
                  focus-visible:rounded
                  focus-visible:ring-2
                  focus-visible:ring-[#F97316]
                "
              >
                {aboutHeroData.breadcrumb?.[0]?.label || "Home"}
              </Link>
            </li>

            <li aria-hidden="true">
              <FaChevronRight size={8} className="text-slate-400" />
            </li>

            <li aria-current="page" className="font-semibold text-[#0B3D2E]">
              {aboutHeroData.breadcrumb?.[1]?.label || "About DAFA"}
            </li>
          </ol>
        </motion.nav>

        {/* ===================================================
            HERO GRID
        ==================================================== */}

        <div
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-[1fr_0.9fr]
            lg:gap-16
            xl:gap-20
          "
        >
          {/* =================================================
              LEFT — CONTENT
          ================================================== */}

          <div>
            {/* EYEBROW */}

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{
                duration: 0.55,
                delay: 0.05,
              }}
              className="mb-5 flex items-center gap-3"
            >
              <span
                aria-hidden="true"
                className="h-px w-9 bg-[#F97316] sm:w-11"
              />

              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#F97316]
                  sm:text-sm
                "
              >
                {aboutHeroData.eyebrow}
              </span>
            </motion.div>

            {/* HEADING */}

            <motion.h1
              id="about-hero-heading"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{
                duration: 0.7,
                delay: 0.12,
              }}
              className="
                max-w-3xl
                text-4xl
                font-black
                leading-[1.05]
                tracking-[-0.035em]
                text-[#0B3D2E]
                sm:text-5xl
                md:text-6xl
                lg:text-[4rem]
                xl:text-[4.5rem]
              "
            >
              {aboutHeroData.title.normal}{" "}
              <span className="text-[#087B5A]">
                {aboutHeroData.title.highlight}
              </span>{" "}
              {aboutHeroData.title.ending}
            </motion.h1>

            {/* DESCRIPTION */}

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{
                duration: 0.7,
                delay: 0.24,
              }}
              className="
                mt-7
                max-w-2xl
                text-base
                leading-7
                text-slate-600
                sm:text-lg
                sm:leading-8
              "
            >
              {aboutHeroData.description}
            </motion.p>

            {/* SUPPORTING LINE */}

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{
                duration: 0.65,
                delay: 0.36,
              }}
              className="
                mt-8
                flex
                items-center
                gap-3
                border-l-2
                border-[#F97316]
                pl-4
              "
            >
              <FaShieldAlt
                aria-hidden="true"
                className="shrink-0 text-[#0B3D2E]"
                size={15}
              />

              <span
                className="
                  text-xs
                  font-semibold
                  tracking-wide
                  text-[#0B3D2E]
                  sm:text-sm
                "
              >
                {aboutHeroData.supportText}
              </span>
            </motion.div>

            {/* CONTEXT */}

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{
                duration: 0.6,
                delay: 0.45,
              }}
              className="
                mt-8
                flex
                items-center
                gap-3
                text-xs
                font-medium
                text-slate-500
                sm:text-sm
              "
            >
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-[#F97316]"
              />

              <span>Who we are • What we stand for • How we operate</span>
            </motion.div>
          </div>

          {/* =================================================
              RIGHT — IMAGE
          ================================================== */}

          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 35,
                  }
            }
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            {/* Orange decorative corner */}

            <div
              aria-hidden="true"
              className="
                absolute
                -bottom-4
                -left-4
                z-0
                h-24
                w-24
                rounded-2xl
                bg-[#F97316]/10
              "
            />

            {/* Main image card */}

            <div
              className="
                relative
                z-10
                overflow-hidden
                rounded-[28px]
                border
                border-white
                bg-white
                shadow-[0_25px_70px_rgba(11,61,46,0.15)]
              "
            >
              {/* Image */}

              <div className="relative aspect-[4/4.5] overflow-hidden sm:aspect-[4/4.2] lg:aspect-[4/4.5]">
                <img
                  src={aboutHeroData.image}
                  alt={aboutHeroData.imageAlt}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-[1.03]
                  "
                  loading="eager"
                />

                {/* Image overlay */}

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#0B3D2E]/80
                    via-[#0B3D2E]/10
                    to-transparent
                  "
                />

                {/* Image label */}

                <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                  <span
                    className="
                      inline-flex
                      rounded-full
                      border
                      border-white/20
                      bg-[#0B3D2E]/70
                      px-3.5
                      py-1.5
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-white
                      backdrop-blur-md
                    "
                  >
                    {aboutHeroData.visualLabel}
                  </span>
                </div>

                {/* Bottom content over image */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    p-6
                    sm:p-7
                    lg:p-8
                  "
                >
                  <p
                    className="
                      max-w-md
                      text-xl
                      font-bold
                      leading-tight
                      text-white
                      sm:text-2xl
                    "
                  >
                    {aboutHeroData.visualTitle}
                  </p>

                  <div className="mt-5 flex items-end justify-between gap-5">
                    <div>
                      <p
                        className="
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.18em]
                          text-white/55
                        "
                      >
                        {aboutHeroData.organizationLabel}
                      </p>

                      <p className="mt-1 text-sm font-semibold text-white/90">
                        {aboutHeroData.organizationName}
                      </p>
                    </div>

                    <Link
                      to={aboutHeroData.visualLink.path}
                      aria-label={aboutHeroData.visualLink.label}
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#F97316]
                        text-white
                        transition-all
                        duration-300
                        hover:scale-105
                        hover:bg-[#EA580C]
                        focus:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-white
                        focus-visible:ring-offset-2
                        focus-visible:ring-offset-[#0B3D2E]
                      "
                    >
                      <FaArrowRight size={12} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Top-right accent */}

            <div
              aria-hidden="true"
              className="
                absolute
                -right-3
                -top-3
                z-20
                h-16
                w-16
                rounded-2xl
                border
                border-[#0B3D2E]/10
                bg-white/80
                backdrop-blur-md
                sm:-right-4
                sm:-top-4
                sm:h-20
                sm:w-20
              "
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom divider */}

      <div
        aria-hidden="true"
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-px
          bg-[#0B3D2E]/10
        "
      />
    </section>
  );
}
