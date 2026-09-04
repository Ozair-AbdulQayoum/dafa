// src/Components/Home-Page/About.jsx

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaArrowRight, FaShieldAlt } from "react-icons/fa";

import { aboutDAFAData } from "../../Components/Data File/About Page Data/AboutData";

export default function About() {
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
      aria-labelledby="who-we-are-heading"
      className="
        relative
        overflow-hidden
        bg-white
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* =====================================================
          SUBTLE BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-180px]
          top-20
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#0B3D2E]/[0.035]
          blur-[100px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[-180px]
          left-[-160px]
          h-[380px]
          w-[380px]
          rounded-full
          bg-[#F97316]/[0.035]
          blur-[100px]
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
          max-w-7xl
          px-5
          sm:px-8
          lg:px-10
        "
      >
        {/* ===================================================
            SECTION HEADER
        ==================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={fadeUp}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mb-12
            max-w-3xl
            sm:mb-14
            lg:mb-16
          "
        >
          {/* Eyebrow */}

          <div className="mb-5 flex items-center gap-3">
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
                text-[#0A5A42]
                sm:text-sm
              "
            >
              {aboutDAFAData.eyebrow}
            </span>
          </div>

          {/* Heading */}

          <h2
            id="who-we-are-heading"
            className="
              max-w-3xl
              text-3xl
              font-black
              leading-[1.08]
              tracking-tight
              text-[#0B3D2E]
              sm:text-4xl
              md:text-5xl
              lg:text-[3.4rem]
            "
          >
            {aboutDAFAData.title}
          </h2>

          {/* Description */}

          <p
            className="
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-slate-600
              sm:text-lg
              sm:leading-8
            "
          >
            {aboutDAFAData.description}
          </p>
        </motion.div>

        {/* ===================================================
            EDITORIAL CONTENT
        ==================================================== */}

        <div
          className="
            grid
            items-start
            gap-12
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-16
            xl:gap-20
          "
        >
          {/* =================================================
              IMAGE / VISUAL
          ================================================== */}

          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -30,
                  }
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
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            {/* Decorative orange corner */}

            <div
              aria-hidden="true"
              className="
                absolute
                -left-3
                -top-3
                h-20
                w-20
                rounded-tl-2xl
                border-l-2
                border-t-2
                border-[#F97316]
              "
            />

            {/* Visual */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[24px]
                border
                border-slate-200
                bg-[#0B3D2E]
                shadow-[0_18px_50px_rgba(11,61,46,0.10)]
              "
            >
              {aboutDAFAData.image?.src ? (
                <div className="relative aspect-[4/3]">
                  <img
                    src={aboutDAFAData.image.src}
                    alt={aboutDAFAData.image.alt}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      hover:scale-[1.03]
                    "
                    loading="lazy"
                  />

                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#0B3D2E]/70
                      via-transparent
                      to-transparent
                    "
                  />

                  <VisualBadge />
                </div>
              ) : (
                <div
                  className="
                    relative
                    flex
                    aspect-[4/3]
                    items-end
                    overflow-hidden
                    bg-[#0B3D2E]
                    p-6
                    sm:p-8
                  "
                >
                  {/* Minimal visual pattern */}

                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      right-[-80px]
                      top-[-80px]
                      h-64
                      w-64
                      rounded-full
                      border
                      border-white/10
                    "
                  />

                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      right-[-40px]
                      top-[-40px]
                      h-44
                      w-44
                      rounded-full
                      border
                      border-white/10
                    "
                  />

                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      bottom-8
                      right-8
                      h-20
                      w-20
                      rounded-2xl
                      border
                      border-[#F97316]/30
                      rotate-12
                    "
                  />

                  <div className="relative z-10">
                    <div
                      className="
                        mb-5
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-xl
                        bg-[#F97316]
                        text-white
                      "
                    >
                      <FaShieldAlt size={18} aria-hidden="true" />
                    </div>

                    <p
                      className="
                        text-xs
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-[#A7DCC9]
                      "
                    >
                      Humanitarian Mine Action
                    </p>

                    <p
                      className="
                        mt-3
                        max-w-sm
                        text-2xl
                        font-bold
                        leading-tight
                        text-white
                        sm:text-3xl
                      "
                    >
                      {aboutDAFAData.statement.text}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom accent */}

            <div
              aria-hidden="true"
              className="
                absolute
                -bottom-3
                -right-3
                h-16
                w-16
                rounded-br-2xl
                border-b-2
                border-r-2
                border-[#0A5A42]
              "
            />
          </motion.div>

          {/* =================================================
              ORGANIZATION STORY
          ================================================== */}

          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 30,
                  }
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
              duration: 0.75,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Story label */}

            <div className="mb-7 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-8 w-1 rounded-full bg-[#F97316]"
              />

              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#0A5A42]
                "
              >
                About DAFA
              </span>
            </div>

            {/* Paragraphs */}

            <div className="space-y-5">
              {aboutDAFAData.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  variants={fadeUp}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="
                      text-[15px]
                      leading-8
                      text-slate-600
                      sm:text-base
                    "
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* =================================================
                KEY INFORMATION
            ================================================== */}

            <div className="mt-9 border-t border-slate-200 pt-7">
              <div
                className="
                  grid
                  gap-0
                  divide-y
                  divide-slate-200
                  sm:grid-cols-3
                  sm:divide-x
                  sm:divide-y-0
                "
              >
                {aboutDAFAData.highlights.map((item, index) => (
                  <motion.div
                    key={item.number}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                      amount: 0.3,
                    }}
                    variants={fadeUp}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="
                        py-5
                        sm:px-5
                        sm:first:pl-0
                        sm:last:pr-0
                      "
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="
                            text-xs
                            font-black
                            tracking-[0.15em]
                            text-[#F97316]
                          "
                      >
                        {item.number}
                      </span>

                      <div
                        aria-hidden="true"
                        className="h-px w-5 bg-slate-300"
                      />
                    </div>

                    <h3
                      className="
                          mt-3
                          text-sm
                          font-bold
                          text-[#0B3D2E]
                        "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                          mt-2
                          text-xs
                          leading-6
                          text-slate-500
                        "
                    >
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ===================================================
            PURPOSE STATEMENT
        ==================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={fadeUp}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
          className="
            mt-14
            border-t
            border-slate-200
            pt-8
            sm:mt-16
            sm:pt-9
          "
        >
          <div
            className="
              flex
              flex-col
              gap-5
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div className="max-w-4xl">
              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#F97316]
                  sm:text-xs
                "
              >
                {aboutDAFAData.statement.label}
              </p>

              <p
                className="
                  mt-2
                  text-base
                  font-semibold
                  leading-7
                  text-[#0B3D2E]
                  sm:text-lg
                "
              >
                {aboutDAFAData.statement.text}
              </p>
            </div>

            <div
              aria-hidden="true"
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#0B3D2E]/10
                bg-[#0B3D2E]
                text-white
              "
            >
              <FaArrowRight size={13} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   IMAGE BADGE
========================================================= */

function VisualBadge() {
  return (
    <div
      className="
        absolute
        bottom-5
        left-5
        right-5
        flex
        items-center
        gap-3
        rounded-xl
        border
        border-white/15
        bg-[#0B3D2E]/70
        p-3
        backdrop-blur-md
        sm:bottom-7
        sm:left-7
        sm:right-auto
        sm:max-w-xs
      "
    >
      <div
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-[#F97316]
          text-white
        "
      >
        <FaShieldAlt size={14} aria-hidden="true" />
      </div>

      <div>
        <p className="text-xs font-bold text-white">Humanitarian Mine Action</p>

        <p className="mt-0.5 text-[10px] text-white/60">
          Protecting communities
        </p>
      </div>
    </div>
  );
}
