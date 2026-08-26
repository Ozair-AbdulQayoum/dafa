import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaArrowRight } from "react-icons/fa";

import { aboutDAFAData } from "../../Components/Data File/About Page Data/AboutData";

export default function About() {
  const {
    eyebrow,
    title,
    description,
    image,
    paragraphs,
    highlights,
    statement,
  } = aboutDAFAData;

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-48 top-20 h-96 w-96 rounded-full bg-[#087B5A]/5 blur-3xl" />

        <div className="absolute -right-48 bottom-10 h-96 w-96 rounded-full bg-[#F97316]/5 blur-3xl" />
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
          className="mb-14 max-w-3xl lg:mb-16"
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

          {/* Description */}

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8 lg:text-lg">
            {description}
          </p>
        </motion.div>

        {/* =================================================
            MAIN GRID
        ================================================== */}

        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* =================================================
              IMAGE SIDE
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            {/* Decorative Corner */}

            <div className="absolute -left-3 -top-3 z-10 h-20 w-20 rounded-tl-2xl border-l-2 border-t-2 border-[#F97316]" />

            {/* Image Container */}

            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl">
              {image.src ? (
                <img
                  src={image.src}
                  alt={image.alt}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              ) : (
                /*
                  =================================================
                  IMAGE PLACEHOLDER

                  Add your image in AboutDAFAData.js:

                  src: "/src/assets/about/dafa-field-team.jpg",

                  =================================================
                */

                <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-[#0B3D2E] via-[#087B5A] to-[#065A43]">
                  <div className="text-center">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white">
                      <FaShieldAlt size={30} />
                    </div>

                    <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-[#A7F3D0]">
                      DAFA Humanitarian Action
                    </p>

                    <p className="mt-2 text-xs text-white/50">
                      Official field image coming soon
                    </p>
                  </div>
                </div>
              )}

              {/* Image Overlay */}

              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />

              {/* Small Badge */}

              <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-md">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F97316] text-white">
                  <FaShieldAlt size={14} />
                </div>

                <div>
                  <p className="text-xs font-bold text-white">
                    Humanitarian Mine Action
                  </p>

                  <p className="mt-0.5 text-[10px] text-white/60">
                    Protecting communities
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Decorative Corner */}

            <div className="absolute -bottom-3 -right-3 h-16 w-16 rounded-br-2xl border-b-2 border-r-2 border-[#087B5A]" />
          </motion.div>

          {/* =================================================
              CONTENT SIDE
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Intro Line */}

            <div className="mb-7 flex items-center gap-3">
              <div className="h-10 w-1 rounded-full bg-[#087B5A]" />

              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#087B5A]">
                About DAFA
              </p>
            </div>

            {/* Paragraphs */}

            <div className="space-y-5">
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
                HIGHLIGHTS
            ================================================== */}

            <div className="mt-9 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="group rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#087B5A]/20 hover:bg-white hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black tracking-widest text-[#F97316]">
                      {item.number}
                    </span>

                    <FaArrowRight
                      size={10}
                      className="text-slate-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#087B5A]"
                    />
                  </div>

                  <h3 className="mt-4 text-sm font-bold text-[#0F172A]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-slate-500">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* =================================================
            PURPOSE STATEMENT
        ================================================== */}

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
          <div className="flex flex-col gap-5 px-6 py-7 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10 lg:py-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#A7F3D0]">
                {statement.label}
              </p>

              <p className="mt-2 max-w-3xl text-base font-semibold leading-7 text-white sm:text-lg">
                {statement.text}
              </p>
            </div>

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F97316] text-white">
              <FaArrowRight size={14} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
