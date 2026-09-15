// src/Components/About Page/MissionVisionValues.jsx

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaCheck, FaArrowRight } from "react-icons/fa";

import missionVisionData from "../../Components/Data File/About Page Data/MissionVisionValuesData";

// =====================================================
// MISSION / VISION EDITORIAL PANEL
// =====================================================

function PremiumPhilosophyCard({
  data,
  number,
  label,
  accent,
  shouldReduceMotion,
}) {
  const Icon = data.icon;

  return (
    <motion.article
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              y: 28,
            }
      }
      whileInView={
        shouldReduceMotion
          ? undefined
          : {
              opacity: 1,
              y: 0,
            }
      }
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              y: -5,
            }
      }
      className="
        group
        relative
        overflow-hidden
        border
        border-[#0B3D2E]/10
        bg-white
        transition-all
        duration-500
        hover:border-[#0B3D2E]/20
        hover:shadow-[0_24px_60px_rgba(11,61,46,0.09)]
      "
    >
      {/* Top Accent */}

      <div
        aria-hidden="true"
        className="absolute left-0 right-0 top-0 h-1"
        style={{
          backgroundColor: accent,
        }}
      />

      <div
        className="
          relative
          p-7
          sm:p-9
          lg:p-10
        "
      >
        {/* Background Number */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-2
            -top-7
            select-none
            text-[150px]
            font-black
            leading-none
            tracking-[-0.08em]
            text-[#0B3D2E]/[0.035]
            sm:text-[175px]
          "
        >
          {number}
        </div>

        {/* Header */}

        <div
          className="
            relative
            flex
            items-start
            justify-between
            gap-5
          "
        >
          <div className="flex items-start gap-4">
            <div
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-xl
                border
                border-[#0B3D2E]/10
                bg-[#F8FBF9]
                text-[#0B3D2E]
                transition-all
                duration-300
                group-hover:border-[#F97316]/30
                group-hover:bg-[#F97316]
                group-hover:text-white
              "
            >
              <Icon aria-hidden="true" className="text-lg" />
            </div>

            <div>
              <span
                className="
                  block
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-[#F97316]
                  sm:text-xs
                "
              >
                {label}
              </span>

              <h3
                className="
                  mt-1
                  text-2xl
                  font-black
                  leading-tight
                  tracking-[-0.03em]
                  text-[#0B3D2E]
                  sm:text-3xl
                "
              >
                {data.title}
              </h3>
            </div>
          </div>

          <span
            className="
              hidden
              text-[11px]
              font-black
              tracking-[0.15em]
              text-[#0B3D2E]/25
              sm:block
            "
          >
            {number}
          </span>
        </div>

        {/* Editorial Divider */}

        <div className="relative my-8 flex items-center gap-3">
          <span
            aria-hidden="true"
            className="
              h-[3px]
              w-9
              rounded-full
              bg-[#F97316]
              transition-all
              duration-500
              group-hover:w-14
            "
          />

          <span
            aria-hidden="true"
            className="
              h-px
              flex-1
              bg-[#0B3D2E]/10
            "
          />
        </div>

        {/* Statement */}

        <p
          className="
            relative
            max-w-xl
            text-xl
            font-bold
            leading-8
            tracking-[-0.02em]
            text-[#0B3D2E]
            sm:text-[22px]
            sm:leading-9
          "
        >
          {data.statement}
        </p>

        {/* Description */}

        <p
          className="
            mt-5
            max-w-xl
            text-[15px]
            leading-7
            text-slate-600
            sm:text-base
          "
        >
          {data.description}
        </p>

        {/* Bottom Meta */}

        <div
          className="
            mt-8
            flex
            flex-wrap
            items-center
            gap-x-4
            gap-y-2
            border-t
            border-[#0B3D2E]/10
            pt-5
          "
        >
          <span
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#0B3D2E]/50
            "
          >
            DAFA
          </span>

          <span
            aria-hidden="true"
            className="
              h-1
              w-1
              rounded-full
              bg-[#F97316]
            "
          />

          <span
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#0B3D2E]/50
            "
          >
            Humanitarian Action
          </span>
        </div>
      </div>
    </motion.article>
  );
}

// =====================================================
// MISSION • VISION • VALUES
// =====================================================

const MissionVisionValues = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="mission-vision-values"
      className="
        relative
        overflow-hidden
        bg-[#F8FBF9]
        pb-16
        pt-2
        sm:pb-20
        sm:pt-4
        lg:pb-24
        lg:pt-6
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          top-0
          h-96
          w-96
          rounded-full
          bg-[#0B3D2E]/[0.025]
          blur-[100px]
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
          bg-[#F97316]/[0.025]
          blur-[100px]
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-5
          sm:px-8
          lg:px-10
          xl:px-12
        "
      >
        {/* =====================================================
            SECTION INTRO
        ===================================================== */}

        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 20,
                }
          }
          whileInView={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            mb-10
            max-w-3xl
            text-center
            sm:mb-12
          "
        >
          {/* Label */}

          <div className="mb-4 flex items-center justify-center gap-3">
            <span
              aria-hidden="true"
              className="
                h-px
                w-9
                bg-[#F97316]
                sm:w-14
              "
            />

            <span
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#0A5A42]
                sm:text-xs
              "
            >
              {missionVisionData.sectionLabel}
            </span>

            <span
              aria-hidden="true"
              className="
                h-px
                w-9
                bg-[#F97316]
                sm:w-14
              "
            />
          </div>

          {/* Heading */}

          <h2
            className="
              text-3xl
              font-black
              leading-[1.05]
              tracking-[-0.04em]
              text-[#0B3D2E]
              sm:text-4xl
              lg:text-[3.25rem]
            "
          >
            {missionVisionData.heading}{" "}
            <span className="text-[#F97316]">
              {missionVisionData.headingHighlight}
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-[15px]
              leading-7
              text-slate-600
              sm:text-lg
              sm:leading-8
            "
          >
            {missionVisionData.description}
          </p>
        </motion.div>

        {/* =====================================================
            MISSION + VISION
        ===================================================== */}

        <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
          <PremiumPhilosophyCard
            data={missionVisionData.mission}
            number="01"
            label="Our Purpose"
            accent="#0B3D2E"
            shouldReduceMotion={shouldReduceMotion}
          />

          <PremiumPhilosophyCard
            data={missionVisionData.vision}
            number="02"
            label="Our Future"
            accent="#0A5A42"
            shouldReduceMotion={shouldReduceMotion}
          />
        </div>

        {/* =====================================================
            VALUES
        ===================================================== */}

        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 25,
                }
          }
          whileInView={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-6
            overflow-hidden
            border
            border-[#0B3D2E]/10
            bg-white
            shadow-[0_18px_50px_rgba(11,61,46,0.06)]
          "
        >
          <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
            {/* Values Intro */}

            <div
              className="
                relative
                overflow-hidden
                bg-[#0B3D2E]
                p-8
                text-white
                sm:p-10
                lg:p-12
              "
            >
              {/* Decorative Rings */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-24
                  h-56
                  w-56
                  rounded-full
                  border
                  border-white/10
                "
              />

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -bottom-28
                  -left-24
                  h-64
                  w-64
                  rounded-full
                  border
                  border-white/10
                "
              />

              <div className="relative">
                {/* Icon */}

                <div
                  className="
                    mb-9
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.07]
                  "
                >
                  <missionVisionData.values.icon className="text-lg text-[#F97316]" />
                </div>

                {/* Number */}

                <span
                  className="
                    mb-3
                    block
                    text-[10px]
                    font-bold
                    tracking-[0.22em]
                    text-white/40
                  "
                >
                  03
                </span>

                <h3
                  className="
                    text-3xl
                    font-black
                    tracking-[-0.035em]
                    sm:text-4xl
                  "
                >
                  {missionVisionData.values.title}
                </h3>

                <div
                  aria-hidden="true"
                  className="
                    mt-6
                    h-[3px]
                    w-12
                    rounded-full
                    bg-[#F97316]
                  "
                />

                <p
                  className="
                    mt-6
                    max-w-lg
                    text-lg
                    font-medium
                    leading-8
                    text-white/85
                  "
                >
                  {missionVisionData.values.statement}
                </p>
              </div>
            </div>

            {/* Values Content */}

            <div
              className="
                p-8
                sm:p-10
                lg:p-12
              "
            >
              <p
                className="
                  max-w-2xl
                  text-[15px]
                  leading-7
                  text-slate-600
                  sm:text-base
                "
              >
                {missionVisionData.values.description}
              </p>

              {/* Principles */}

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {missionVisionData.values.principles.map((principle, index) => {
                  const PrincipleIcon = principle.icon;

                  return (
                    <motion.div
                      key={principle.title}
                      initial={
                        shouldReduceMotion
                          ? false
                          : {
                              opacity: 0,
                              x: 15,
                            }
                      }
                      whileInView={
                        shouldReduceMotion
                          ? undefined
                          : {
                              opacity: 1,
                              x: 0,
                            }
                      }
                      viewport={{
                        once: true,
                        amount: 0.5,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: shouldReduceMotion ? 0 : index * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="
                          group
                          flex
                          items-center
                          gap-4
                          border
                          border-[#0B3D2E]/10
                          bg-[#F8FBF9]
                          p-4
                          transition-all
                          duration-300
                          hover:border-[#F97316]/30
                          hover:bg-white
                          hover:shadow-[0_8px_24px_rgba(11,61,46,0.06)]
                        "
                    >
                      <div
                        className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-lg
                            bg-[#0B3D2E]/[0.07]
                            text-[#0B3D2E]
                            transition-all
                            duration-300
                            group-hover:bg-[#F97316]
                            group-hover:text-white
                          "
                      >
                        <PrincipleIcon aria-hidden="true" className="text-sm" />
                      </div>

                      <span
                        className="
                            text-sm
                            font-bold
                            text-[#0B3D2E]
                          "
                      >
                        {principle.title}
                      </span>

                      <FaCheck
                        aria-hidden="true"
                        className="
                            ml-auto
                            text-xs
                            text-[#F97316]
                          "
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            CALL TO ACTION
        ===================================================== */}

        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 25,
                }
          }
          whileInView={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mt-6
            overflow-hidden
            bg-[#0B3D2E]
            px-7
            py-9
            sm:px-10
            sm:py-11
            lg:px-14
            lg:py-12
          "
        >
          {/* Decorative Rings */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
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
              pointer-events-none
              absolute
              -bottom-32
              -left-20
              h-72
              w-72
              rounded-full
              border
              border-white/10
            "
          />

          <div
            className="
              relative
              flex
              flex-col
              gap-8
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            <div className="max-w-4xl">
              <span
                className="
                  mb-3
                  block
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-[#F97316]
                  sm:text-xs
                "
              >
                {missionVisionData.callToAction.eyebrow}
              </span>

              <h3
                className="
                  text-3xl
                  font-black
                  leading-[1.06]
                  tracking-[-0.035em]
                  text-white
                  sm:text-4xl
                  lg:text-[2.75rem]
                "
              >
                {missionVisionData.callToAction.title}
              </h3>

              <p
                className="
                  mt-5
                  max-w-3xl
                  text-[15px]
                  leading-7
                  text-white/70
                  sm:text-lg
                  sm:leading-8
                "
              >
                {missionVisionData.callToAction.description}
              </p>
            </div>

            {/* Arrow */}

            <motion.div
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: 1.07,
                      x: 5,
                    }
              }
              transition={{
                duration: 0.25,
              }}
              className="
                flex
                h-14
                w-14
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#F97316]
                text-white
                shadow-lg
                sm:h-16
                sm:w-16
              "
            >
              <FaArrowRight aria-hidden="true" className="text-sm" />
            </motion.div>
          </div>
        </motion.div>

        {/* =====================================================
            HUMANITARIAN PRINCIPLES
        ===================================================== */}

        <p
          className="
            mx-auto
            mt-8
            max-w-3xl
            text-center
            text-xs
            leading-6
            text-slate-400
          "
        >
          Guided by internationally recognized humanitarian principles, DAFA
          remains committed to serving communities with dignity, responsibility,
          and respect.
        </p>
      </div>
    </section>
  );
};

export default MissionVisionValues;
