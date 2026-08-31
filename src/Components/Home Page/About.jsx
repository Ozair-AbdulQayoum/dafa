import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCheck } from "react-icons/fa";

import { aboutData } from "../../Components/Data File/Main Page Data/AboutData";

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        py-20
        sm:py-24
        lg:py-28
      "
      aria-labelledby="about-section-title"
    >
      {/* =====================================================
          SUBTLE BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          top-24
          h-80
          w-80
          rounded-full
          bg-[#087B5A]/[0.035]
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-96
          w-96
          rounded-full
          bg-[#0284C7]/[0.025]
          blur-3xl
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
            whileInView={{ opacity: 1, x: 0 }}
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
                bg-[#0B3D2E]
                shadow-[0_20px_60px_rgba(15,23,42,0.12)]
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

              {/* IMAGE LABEL */}

              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  sm:bottom-6
                  sm:left-6
                "
              >
                <span
                  className="
                    inline-flex
                    rounded-full
                    border
                    border-white/20
                    bg-black/20
                    px-4
                    py-2
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-white
                    backdrop-blur-md
                    sm:text-xs
                  "
                >
                  {aboutData.image.label}
                </span>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              CONTENT
          ================================================== */}

          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 30 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.7,
              delay: shouldReduceMotion ? 0 : 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* =================================================
                LABEL
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
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#087B5A]
                  sm:text-xs
                  sm:tracking-[0.2em]
                "
              >
                {aboutData.label}
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
                HIGHLIGHTS
            ================================================== */}

            <ul
              className="
                mt-7
                grid
                gap-2.5
                sm:grid-cols-2
                sm:gap-3
              "
              aria-label="DAFA key areas"
            >
              {aboutData.highlights.map((item) => (
                <li
                  key={item}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-slate-100
                    bg-slate-50/60
                    px-4
                    py-3
                    transition-all
                    duration-200
                    hover:border-[#087B5A]/15
                    hover:bg-[#087B5A]/[0.035]
                  "
                >
                  <span
                    aria-hidden="true"
                    className="
                      flex
                      h-6
                      w-6
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#087B5A]/10
                      text-[#087B5A]
                    "
                  >
                    <FaCheck size={9} />
                  </span>

                  <span
                    className="
                      text-sm
                      font-semibold
                      leading-5
                      text-slate-700
                    "
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

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
