// src/Components/About-Page/DirectorMessage.jsx

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaQuoteLeft, FaArrowRight } from "react-icons/fa";

import { directorMessageData } from "../Data File/About Page Data/DirectorMessageData";

export default function DirectorMessage() {
  const shouldReduceMotion = useReducedMotion();

  const revealUp = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 22,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const revealLeft = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : -24,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const revealRight = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const {
    director,
    eyebrow,
    title,
    introduction,
    paragraphs,
    closing,
    principle,
  } = directorMessageData;

  return (
    <section
      aria-labelledby="director-message-heading"
      className="relative overflow-hidden bg-white pt-0 pb-14 sm:pt-2 sm:pb-16 lg:pt-4 lg:pb-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={revealUp}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-10 max-w-3xl sm:mb-12 lg:mb-14"
        >
          <div className="mb-5 flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-10 bg-[#F97316]" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0A5A42] sm:text-sm">
              {eyebrow}
            </span>
          </div>

          <h2
            id="director-message-heading"
            className="max-w-3xl text-3xl font-black leading-[1.08] tracking-tight text-[#0B3D2E] sm:text-4xl md:text-5xl lg:text-[3.4rem]"
          >
            {title}
          </h2>
        </motion.header>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <div className="grid items-stretch gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14 xl:gap-16">
          {/* ===================================================
              DIRECTOR IMAGE
          ==================================================== */}

          <motion.aside
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={revealLeft}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex h-full"
          >
            <div className="relative flex h-full w-full max-w-sm flex-col lg:max-w-none">
              {/* Orange Corner */}

              <div
                aria-hidden="true"
                className="absolute -left-3 -top-3 z-10 h-20 w-20 rounded-tl-2xl border-l-2 border-t-2 border-[#F97316]"
              />

              {/* Image */}

              <div className="relative min-h-[520px] flex-1 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 sm:min-h-[580px] lg:min-h-0">
                <img
                  src={director.image}
                  alt={`${director.name}, ${director.position}`}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  loading="lazy"
                />

                {/* Image Overlay */}

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#0B3D2E]/75 via-transparent to-transparent"
                />
              </div>

              {/* Green Corner */}

              <div
                aria-hidden="true"
                className="absolute -bottom-3 -right-3 h-16 w-16 rounded-br-2xl border-b-2 border-r-2 border-[#0A5A42]"
              />

              {/* Director Information */}

              <div className="mt-6 border-t border-slate-200 pt-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F97316]">
                  {director.position}
                </p>

                <h3 className="mt-2 text-2xl font-black tracking-tight text-[#0B3D2E] sm:text-3xl">
                  {director.name}
                </h3>
              </div>
            </div>
          </motion.aside>

          {/* ===================================================
              DIRECTOR MESSAGE
          ==================================================== */}

          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={revealRight}
            transition={{
              duration: 0.75,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex h-full flex-col"
          >
            {/* Quote Icon */}

            <div
              aria-hidden="true"
              className="mb-6 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0B3D2E] text-white"
            >
              <FaQuoteLeft size={18} />
            </div>

            {/* Introduction */}

            <p className="max-w-3xl text-xl font-bold leading-8 tracking-tight text-[#0B3D2E] sm:text-2xl sm:leading-9">
              {introduction}
            </p>

            {/* Message Paragraphs */}

            <div className="mt-7 max-w-3xl space-y-5">
              {paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={revealUp}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-[15px] leading-8 text-slate-600 sm:text-base sm:leading-[1.85]"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Closing Message */}

            <div className="mt-7 border-l-2 border-[#F97316] pl-5 sm:pl-6">
              <p className="text-sm font-semibold leading-7 text-[#0B3D2E] sm:text-base">
                {closing}
              </p>
            </div>

            <div className="flex-1" />
          </motion.article>
        </div>

        {/* =====================================================
            OUR COMMITMENT
        ====================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={revealUp}
          transition={{
            duration: 0.7,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-12 border-t border-slate-200 pt-7 sm:mt-14 sm:pt-8"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-3xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F97316] sm:text-xs">
                {principle.label}
              </p>

              <p className="mt-2 text-lg font-bold leading-7 text-[#0B3D2E] sm:text-xl">
                {principle.text}
              </p>
            </div>

            <div
              aria-hidden="true"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0B3D2E] text-white"
            >
              <FaArrowRight size={13} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
