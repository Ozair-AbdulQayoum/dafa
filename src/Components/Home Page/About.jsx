import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import { aboutData } from "../../Components/Data File/Main Page Data/AboutData";

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-[#F4FAF7]
        via-[#EAF5EF]
        to-[#F7FAF8]
        py-20
        sm:py-24
        lg:py-28
      "
      aria-labelledby="about-section-title"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      {/* Green glow - top left */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          -top-40
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#087B5A]/[0.07]
          blur-[110px]
        "
      />

      {/* Blue glow - right */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          top-1/3
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#0284C7]/[0.045]
          blur-[110px]
        "
      />

      {/* Orange glow - bottom */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[-220px]
          left-1/2
          h-[450px]
          w-[450px]
          -translate-x-1/2
          rounded-full
          bg-[#F97316]/[0.035]
          blur-[120px]
        "
      />

      {/* Subtle vertical gradient */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-32
          bg-gradient-to-b
          from-white/50
          to-transparent
        "
      />

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          px-5
          sm:px-8
          lg:px-10
        "
      >
        <div
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-[0.95fr_1.05fr]
            lg:gap-16
            xl:gap-20
          "
        >
          {/* =================================================
              IMAGE
          ================================================== */}

          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -30 }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <div
              className="
                group
                relative
                overflow-hidden
                rounded-[1.75rem]
                border
                border-[#087B5A]/15
                bg-[#0B3D2E]
                shadow-[0_20px_60px_rgba(15,23,42,0.14)]
              "
            >
              <img
                src={aboutData.image.src}
                alt={aboutData.image.alt}
                loading="lazy"
                decoding="async"
                className="
                  h-[360px]
                  w-full
                  object-cover
                  object-center
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-[1.025]
                  sm:h-[430px]
                  md:h-[480px]
                  lg:h-[520px]
                "
              />

              {/* IMAGE GRADIENT */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#06281E]/75
                  via-[#06281E]/10
                  to-transparent
                "
              />
            </div>
          </motion.div>

          {/* =================================================
              CONTENT
          ================================================== */}

          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 30 }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.7,
              delay: shouldReduceMotion ? 0 : 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              flex
              flex-col
              justify-center
              lg:min-h-[520px]
            "
          >
            {/* =================================================
                SMALL HEADING
            ================================================== */}

            <div className="mb-5 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="
                  h-[2px]
                  w-9
                  rounded-full
                  bg-[#F97316]
                  sm:w-10
                "
              />

              <span
                className="
                  whitespace-nowrap
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-[#087B5A]
                  sm:text-xs
                  sm:tracking-[0.15em]
                "
              >
                WE PROVIDE HUMANITARIAN DEMINING SERVICES
              </span>
            </div>

            {/* =================================================
                TITLE
            ================================================== */}

            <h2
              id="about-section-title"
              className="
                max-w-2xl
                text-[2rem]
                font-extrabold
                leading-[1.08]
                tracking-[-0.025em]
                text-[#0F172A]
                sm:text-4xl
                lg:text-[2.9rem]
                xl:text-[3.2rem]
              "
            >
              {aboutData.title}
            </h2>

            {/* =================================================
                DESCRIPTION
            ================================================== */}

            <p
              className="
                mt-6
                max-w-2xl
                text-[15px]
                leading-7
                text-slate-600
                sm:mt-7
                sm:text-base
                sm:leading-8
                lg:text-lg
              "
            >
              {aboutData.description}
            </p>

            {/* =================================================
                CTA
            ================================================== */}

            <div className="mt-8">
              <Link
                to={aboutData.button.path}
                className="
                  group
                  inline-flex
                  min-h-[50px]
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-[#087B5A]
                  px-5
                  text-sm
                  font-bold
                  text-white
                  shadow-md
                  shadow-[#087B5A]/15
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#0B3D2E]
                  hover:shadow-lg
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#087B5A]/40
                  focus-visible:ring-offset-2
                "
              >
                <span>{aboutData.button.text}</span>

                <span
                  aria-hidden="true"
                  className="
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                    rounded-full
                    bg-white/10
                    transition-colors
                    duration-300
                    group-hover:bg-white/20
                  "
                >
                  <FaArrowRight
                    size={9}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
