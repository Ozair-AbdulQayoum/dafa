import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaShieldAlt, FaArrowRight } from "react-icons/fa";

import { directorMessageData } from "../Data File/About Page Data/DirectorMessageData";

export default function DirectorMessage() {
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
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#087B5A]/5 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#F97316]/5 blur-3xl" />
      </div>

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =================================================
            HEADER
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-14 max-w-3xl"
        >
          {/* Eyebrow */}

          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-9 rounded-full bg-[#F97316]" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A] sm:text-sm">
              {eyebrow}
            </span>
          </div>

          {/* Heading */}

          <h2 className="text-3xl font-black leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            {title}
          </h2>

          {/* Accent */}

          <div className="mt-5 h-1 w-16 rounded-full bg-[#F97316]" />
        </motion.div>

        {/* =================================================
            MAIN CONTENT
        ================================================== */}

        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.4fr] lg:gap-16">
          {/* =================================================
              DIRECTOR PROFILE
          ================================================== */}

          <motion.aside
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:sticky lg:top-28"
          >
            {/* =================================================
                DIRECTOR IMAGE
            ================================================== */}

            <div className="relative mx-auto max-w-sm lg:mx-0">
              {/* Top Corner */}

              <div className="absolute -left-3 -top-3 h-20 w-20 rounded-tl-2xl border-l-2 border-t-2 border-[#F97316]" />

              {/* Image Container */}

              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl">
                {director.image ? (
                  <img
                    src={director.image}
                    alt={`${director.name} - ${director.position}`}
                    className="aspect-[4/5] w-full object-cover"
                  />
                ) : (
                  /*
                    =================================================
                    IMAGE PLACEHOLDER

                    Add the director image later in:

                    DirectorMessageData.js

                    image:
                    "/src/assets/director/abdul-wahid-noori.jpg"

                    =================================================
                  */

                  <div className="flex aspect-[4/5] items-center justify-center bg-gradient-to-br from-[#0B3D2E] to-[#087B5A]">
                    <div className="px-8 text-center">
                      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white">
                        <FaShieldAlt size={30} />
                      </div>

                      <p className="mt-5 text-sm font-semibold uppercase tracking-[0.15em] text-[#A7F3D0]">
                        Director's Portrait
                      </p>

                      <p className="mt-2 text-xs text-white/50">
                        Official photograph coming soon
                      </p>
                    </div>
                  </div>
                )}

                {/* Image Overlay */}

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-6 pb-6 pt-16">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#A7F3D0]">
                    {director.organization}
                  </p>
                </div>
              </div>

              {/* Bottom Corner */}

              <div className="absolute -bottom-3 -right-3 h-16 w-16 rounded-br-2xl border-b-2 border-r-2 border-[#087B5A]" />
            </div>

            {/* =================================================
                DIRECTOR INFORMATION
            ================================================== */}

            <div className="mt-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#087B5A]">
                {director.position}
              </p>

              <h3 className="mt-2 text-2xl font-black tracking-tight text-[#0F172A] sm:text-3xl">
                {director.name}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {director.organization}
              </p>
            </div>
          </motion.aside>

          {/* =================================================
              DIRECTOR MESSAGE
          ================================================== */}

          <motion.article
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.75,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            {/* Decorative Quote */}

            <FaQuoteLeft className="pointer-events-none absolute -right-2 -top-8 text-7xl text-[#087B5A]/5 sm:text-8xl" />

            {/* =================================================
                INTRODUCTION
            ================================================== */}

            <p className="relative max-w-3xl text-lg font-semibold leading-8 text-[#0F172A] sm:text-xl sm:leading-9">
              {introduction}
            </p>

            {/* =================================================
                MESSAGE PARAGRAPHS
            ================================================== */}

            <div className="mt-8 space-y-6">
              {paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="text-[15px] leading-8 text-slate-600 sm:text-base"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* =================================================
                CLOSING
            ================================================== */}

            <div className="mt-9 border-l-4 border-[#F97316] bg-slate-50 px-5 py-4 sm:px-6">
              <p className="text-sm font-medium leading-7 text-slate-600 sm:text-base">
                {closing}
              </p>
            </div>
          </motion.article>
        </div>

        {/* =====================================================
            COMMITMENT PANEL
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="mt-16 overflow-hidden rounded-2xl bg-[#0B3D2E] shadow-lg sm:mt-20"
        >
          <div className="flex flex-col gap-6 px-6 py-7 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10 lg:py-8">
            {/* Text */}

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#A7F3D0]">
                {principle.label}
              </p>

              <p className="mt-2 text-lg font-bold text-white sm:text-xl">
                {principle.text}
              </p>
            </div>

            {/* Icon */}

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F97316] text-white">
              <FaArrowRight size={14} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
