// src/Components/About-Page/MissionVisionValues.jsx

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaCheck, FaArrowRight } from "react-icons/fa";

import { missionVisionData } from "../../Components/Data File/About Page Data/MissionVisionValuesData";

export default function MissionVisionValues() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const {
    sectionLabel,
    heading,
    headingHighlight,
    description,
    vision,
    mission,
    values,
    callToAction,
  } = missionVisionData;

  return (
    <section
      aria-labelledby="mission-vision-values-heading"
      className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            SECTION INTRO
        ====================================================== */}

        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-10 bg-[#F97316]" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0A5A42] sm:text-sm">
              {sectionLabel}
            </span>
          </div>

          <h2
            id="mission-vision-values-heading"
            className="text-3xl font-black leading-[1.08] tracking-tight text-[#0B3D2E] sm:text-4xl md:text-5xl lg:text-[3.5rem]"
          >
            {heading} <span className="text-[#087B5A]">{headingHighlight}</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            {description}
          </p>
        </motion.header>

        {/* =====================================================
            MISSION + VISION
        ====================================================== */}

        <div className="mt-14 grid gap-0 border-y border-slate-200 lg:grid-cols-2 lg:mt-16">
          {/* ===================================================
              MISSION
          ==================================================== */}

          <PhilosophyBlock
            data={mission}
            number="01"
            label="Mission"
            accent="bg-[#0B3D2E]"
            shouldReduceMotion={shouldReduceMotion}
            reveal={reveal}
            borderClass="lg:border-r border-slate-200"
          />

          {/* ===================================================
              VISION
          ==================================================== */}

          <PhilosophyBlock
            data={vision}
            number="02"
            label="Vision"
            accent="bg-[#0A5A42]"
            shouldReduceMotion={shouldReduceMotion}
            reveal={reveal}
          />
        </div>

        {/* =====================================================
            VALUES
        ====================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={reveal}
          transition={{
            duration: 0.7,
            delay: 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-14 border-b border-slate-200 pb-14 sm:mt-16 sm:pb-16"
        >
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            {/* Values Introduction */}

            <div>
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-8 w-1 rounded-full bg-[#F97316]"
                />

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0A5A42]">
                    03
                  </p>

                  <h3 className="mt-1 text-2xl font-black tracking-tight text-[#0B3D2E] sm:text-3xl">
                    {values.title}
                  </h3>
                </div>
              </div>

              <p className="mt-7 max-w-md text-base font-semibold leading-7 text-[#087B5A] sm:text-lg sm:leading-8">
                {values.statement}
              </p>
            </div>

            {/* Values Content */}

            <div>
              <p className="max-w-3xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                {values.description}
              </p>

              {/* Principles */}

              <div className="mt-8 grid border-t border-slate-200 sm:grid-cols-2 lg:grid-cols-4">
                {values.principles?.map((principle, index) => {
                  const PrincipleIcon = principle.icon;

                  return (
                    <div
                      key={principle.title}
                      className={`
                        group
                        flex
                        items-center
                        gap-3
                        border-b
                        border-slate-200
                        py-5
                        sm:px-5
                        lg:border-b-0
                        lg:border-r
                        lg:first:pl-0
                        lg:last:border-r-0
                        lg:last:pr-0
                      `}
                    >
                      <span
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          bg-[#0B3D2E]/5
                          text-[#0A5A42]
                          transition-colors
                          duration-200
                          group-hover:bg-[#0B3D2E]
                          group-hover:text-white
                        "
                      >
                        <PrincipleIcon size={14} aria-hidden="true" />
                      </span>

                      <div>
                        <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                          0{index + 1}
                        </span>

                        <span className="mt-0.5 block text-sm font-bold text-[#0B3D2E]">
                          {principle.title}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            SUPPORTING CTA
        ====================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          transition={{
            duration: 0.7,
            delay: 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-12 sm:mt-14"
        >
          <div className="grid overflow-hidden rounded-2xl border border-[#0B3D2E]/10 bg-white lg:grid-cols-[1fr_auto]">
            <div className="px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-8 bg-[#F97316]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0A5A42]">
                  {callToAction.eyebrow}
                </span>
              </div>

              <h3 className="mt-4 max-w-2xl text-2xl font-black tracking-tight text-[#0B3D2E] sm:text-3xl">
                {callToAction.title}
              </h3>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                {callToAction.description}
              </p>
            </div>

            {/* Visual CTA marker */}

            <div className="flex min-h-[100px] items-center justify-center bg-[#0B3D2E] px-8 lg:min-w-[150px]">
              <div
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white"
              >
                <FaArrowRight size={14} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            HUMANITARIAN PRINCIPLES FOOTNOTE
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400"
          aria-label="Humanitarian principles"
        >
          {values.principles?.map((principle, index) => (
            <React.Fragment key={principle.title}>
              <span className="inline-flex items-center gap-2">
                <FaCheck
                  size={9}
                  className="text-[#087B5A]"
                  aria-hidden="true"
                />

                {principle.title}
              </span>

              {index < values.principles.length - 1 && (
                <span
                  aria-hidden="true"
                  className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block"
                />
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   PHILOSOPHY BLOCK
============================================================ */

function PhilosophyBlock({
  data,
  number,
  label,
  accent,
  shouldReduceMotion,
  reveal,
  borderClass = "",
}) {
  const Icon = data.icon;

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={reveal}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
        relative
        px-0
        py-10
        sm:py-12
        lg:px-10
        lg:py-14
        ${borderClass}
      `}
    >
      <div className="grid gap-7 sm:grid-cols-[auto_1fr] sm:gap-8">
        {/* Number + Icon */}

        <div className="flex items-start gap-4 sm:block">
          <div
            className={`
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-xl
              ${accent}
              text-white
            `}
          >
            <Icon size={19} aria-hidden="true" />
          </div>

          <span className="mt-1 text-4xl font-black tracking-tight text-slate-200 sm:mt-5 sm:block sm:text-5xl">
            {number}
          </span>
        </div>

        {/* Content */}

        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F97316]">
            {label}
          </p>

          <h3 className="mt-2 text-2xl font-black tracking-tight text-[#0B3D2E] sm:text-3xl">
            {data.title}
          </h3>

          <p className="mt-5 max-w-xl text-base font-bold leading-7 text-[#087B5A] sm:text-lg sm:leading-8">
            {data.statement}
          </p>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            {data.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
