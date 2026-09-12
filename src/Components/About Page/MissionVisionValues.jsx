// src/Components/About Page/MissionVisionValues.jsx

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaCheck, FaArrowRight } from "react-icons/fa";

import missionVisionData from "../../Components/Data File/About Page Data/MissionVisionValuesData";

// =====================================================
// PREMIUM PHILOSOPHY CARD
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
      initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={shouldReduceMotion ? undefined : { y: -6 }}
      className="group relative overflow-hidden rounded-[24px] border border-[#0B3D2E]/10 bg-white p-1 shadow-[0_12px_40px_rgba(11,61,46,0.07)] transition-shadow duration-500 hover:shadow-[0_22px_55px_rgba(11,61,46,0.13)]"
    >
      {/* Top Accent */}
      <div
        className="absolute left-0 right-0 top-0 h-[3px]"
        style={{ backgroundColor: accent }}
      />

      <div className="relative overflow-hidden rounded-[20px] bg-white p-7 sm:p-8 lg:p-9">
        {/* Background Number */}
        <span className="pointer-events-none absolute -right-2 -top-8 select-none text-[130px] font-black leading-none text-[#0B3D2E]/[0.035]">
          {number}
        </span>

        {/* Header */}
        <div className="relative flex items-start justify-between gap-5">
          <div className="flex items-center gap-4">
            <div
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg"
              style={{ backgroundColor: accent }}
            >
              <Icon className="text-xl" />
            </div>

            <div>
              <span className="mb-1 block text-xs font-bold uppercase tracking-[0.18em] text-[#F97316]">
                {label}
              </span>

              <h3 className="text-2xl font-bold tracking-tight text-[#0B3D2E] sm:text-[28px]">
                {data.title}
              </h3>
            </div>
          </div>

          <span className="hidden text-sm font-bold text-[#0B3D2E]/20 sm:block">
            {number}
          </span>
        </div>

        {/* Divider */}
        <div className="my-7 h-px bg-[#0B3D2E]/10" />

        {/* Statement */}
        <p className="relative text-lg font-semibold leading-relaxed text-[#0B3D2E] sm:text-xl">
          {data.statement}
        </p>

        {/* Description */}
        <p className="mt-5 text-[15px] leading-7 text-slate-600">
          {data.description}
        </p>

        {/* Bottom Meta */}
        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#0B3D2E]/10 pt-5 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
          <span>DAFA</span>

          <span className="h-1 w-1 rounded-full bg-[#F97316]" />

          <span>Humanitarian Action</span>
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
      className="relative overflow-hidden bg-[#F8FBF9] pt-0 pb-14 sm:pt-2 sm:pb-16 lg:pt-4 lg:pb-20"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#0B3D2E]/[0.025] blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#F97316]/[0.035] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* =================================================
            SECTION INTRO
        ================================================= */}

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-8 max-w-3xl text-center sm:mb-9"
        >
          {/* Label */}
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#F97316]" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F97316]">
              {missionVisionData.sectionLabel}
            </span>

            <span className="h-px w-8 bg-[#F97316]" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#0B3D2E] sm:text-4xl lg:text-5xl">
            {missionVisionData.heading}{" "}
            <span className="text-[#F97316]">
              {missionVisionData.headingHighlight}
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            {missionVisionData.description}
          </p>
        </motion.div>

        {/* =================================================
            MISSION + VISION
        ================================================= */}

        <div className="grid gap-6 lg:grid-cols-2">
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

        {/* =================================================
            VALUES
        ================================================= */}

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mt-6 overflow-hidden rounded-[24px] border border-[#0B3D2E]/10 bg-white shadow-[0_15px_45px_rgba(11,61,46,0.07)]"
        >
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            {/* Values Intro */}
            <div className="relative overflow-hidden bg-[#0B3D2E] p-8 text-white sm:p-10 lg:p-12">
              {/* Decorative Circles */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full border border-white/10" />

              <div className="pointer-events-none absolute -bottom-24 -left-20 h-56 w-56 rounded-full border border-white/10" />

              <div className="relative">
                {/* Icon */}
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                  <missionVisionData.values.icon className="text-xl text-[#F97316]" />
                </div>

                {/* Number */}
                <span className="mb-3 block text-xs font-bold tracking-[0.2em] text-white/40">
                  03
                </span>

                <h3 className="text-3xl font-bold sm:text-4xl">
                  {missionVisionData.values.title}
                </h3>

                <p className="mt-6 text-lg font-medium leading-8 text-white/90">
                  {missionVisionData.values.statement}
                </p>
              </div>
            </div>

            {/* Values Content */}
            <div className="p-8 sm:p-10 lg:p-12">
              <p className="text-[15px] leading-7 text-slate-600 sm:text-base">
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
                        delay: index * 0.08,
                      }}
                      className="group flex items-center gap-4 rounded-2xl border border-[#0B3D2E]/10 bg-[#F8FBF9] p-4 transition-all duration-300 hover:border-[#F97316]/30 hover:bg-white hover:shadow-md"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0B3D2E]/10 text-[#0B3D2E] transition-colors duration-300 group-hover:bg-[#F97316] group-hover:text-white">
                        <PrincipleIcon className="text-sm" />
                      </div>

                      <span className="font-semibold text-[#0B3D2E]">
                        {principle.title}
                      </span>

                      <FaCheck className="ml-auto text-xs text-[#F97316]" />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* =================================================
            CALL TO ACTION
        ================================================= */}

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="relative mt-6 overflow-hidden rounded-[24px] bg-[#0B3D2E] px-7 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14"
        >
          {/* Decorative Shapes */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />

          <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full border border-white/10" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-4xl">
              <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-[#F97316]">
                {missionVisionData.callToAction.eyebrow}
              </span>

              <h3 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                {missionVisionData.callToAction.title}
              </h3>

              <p className="mt-5 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
                {missionVisionData.callToAction.description}
              </p>
            </div>

            {/* Arrow */}
            <motion.div
              whileHover={
                shouldReduceMotion ? undefined : { scale: 1.08, x: 4 }
              }
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#F97316] text-white shadow-lg"
            >
              <FaArrowRight />
            </motion.div>
          </div>
        </motion.div>

        {/* =================================================
            HUMANITARIAN PRINCIPLES
        ================================================= */}

        <p className="mt-8 text-center text-xs leading-6 text-slate-400">
          Guided by internationally recognized humanitarian principles, DAFA
          remains committed to serving communities with dignity, responsibility,
          and respect.
        </p>
      </div>
    </section>
  );
};

export default MissionVisionValues;
