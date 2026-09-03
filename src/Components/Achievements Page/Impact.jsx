import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";

import achievementsData from "../../Components/Data File/Achievements Data/AchievementsData";

/* =========================================================
   Animated Counter
========================================================= */

function Counter({ value, suffix = "" }) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView || typeof value !== "number") return;

    const duration = 1800;
    const startTime = performance.now();

    let animationFrame;

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easedProgress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

/* =========================================================
   Impact Page
========================================================= */

export default function Impact() {
  return (
    <main className="relative overflow-hidden bg-[#F4FAF7] py-20 sm:py-24 lg:py-28">
      {/* =====================================================
          Main Background Decorations
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#0B3D2E]/10 blur-3xl" />

        <div className="absolute -right-32 top-[35%] h-80 w-80 rounded-full bg-[#0B3D2E]/8 blur-3xl" />

        <div className="absolute bottom-0 left-[40%] h-72 w-72 rounded-full bg-[#087B5A]/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            Hero Intro
        ===================================================== */}

        <section className="relative mb-20 overflow-hidden rounded-[2rem] border border-[#0B3D2E]/15 bg-gradient-to-br from-[#DDEFE7] via-[#F2FAF6] to-[#E8F5EF] px-6 py-16 shadow-sm sm:px-10 lg:px-16 lg:py-20">
          {/* DAFA Green Glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#0B3D2E]/15 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-[#087B5A]/10 blur-3xl" />

          {/* Decorative Circle */}
          <div className="pointer-events-none absolute right-10 top-10 hidden h-20 w-20 rounded-full border border-[#0B3D2E]/10 lg:block" />

          <div className="pointer-events-none absolute bottom-10 left-10 hidden h-12 w-12 rounded-full border border-[#087B5A]/10 lg:block" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0B3D2E]/15 bg-white/75 px-4 py-2 text-sm font-semibold text-[#0B3D2E] shadow-sm backdrop-blur-md"
            >
              <span className="h-2 w-2 rounded-full bg-[#087B5A]" />
              Our Impact
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-extrabold tracking-tight text-[#06281E] sm:text-5xl lg:text-6xl"
            >
              Decades of Impact,
              <br />
              <span className="text-[#0B3D2E]">Measurable Results</span>
            </motion.h1>

            {/* Green Underline */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 80, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mx-auto mt-5 h-1 rounded-full bg-[#087B5A]"
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg"
            >
              For more than three decades, DAFA has worked to reduce explosive
              hazards, support affected communities, and create safer
              environments across Afghanistan.
            </motion.p>
          </div>
        </section>

        {/* =====================================================
            Achievements
        ===================================================== */}

        <section>
          {/* Section Heading */}
          <div className="mb-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-[#0B3D2E]/10 bg-white px-4 py-2 text-sm font-semibold text-[#0B3D2E] shadow-sm"
            >
              <FaCheckCircle />
              Our Achievements
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-extrabold text-[#06281E] sm:text-4xl"
            >
              Measuring Progress Through Action
            </motion.h2>
          </div>

          {/* Achievement Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {achievementsData.map((achievement, index) => {
              const Icon = achievement.icon || FaCheckCircle;

              return (
                <motion.article
                  key={achievement.id || index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white/75 p-7 shadow-lg shadow-slate-200/50 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#0B3D2E]/15"
                >
                  {/* Decorative Number */}
                  <span className="pointer-events-none absolute right-5 top-3 z-0 text-6xl font-black text-[#0B3D2E]/5">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0B3D2E]/10 text-xl text-[#0B3D2E] transition-all duration-500 group-hover:bg-[#0B3D2E] group-hover:text-white">
                    <Icon />
                  </div>

                  {/* Counter */}
                  <div className="relative z-10 text-4xl font-extrabold text-[#06281E]">
                    <Counter
                      value={achievement.value}
                      suffix={achievement.suffix || ""}
                    />
                  </div>

                  {/* Label */}
                  <h3 className="relative z-10 mt-3 text-lg font-bold text-[#0B3D2E]">
                    {achievement.title}
                  </h3>

                  {/* Description */}
                  <p className="relative z-10 mt-3 text-sm leading-7 text-slate-600">
                    {achievement.description}
                  </p>

                  {/* Bottom Accent */}
                  <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-[#0B3D2E] transition-transform duration-500 group-hover:scale-x-100" />
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* =====================================================
            Making a Difference
        ===================================================== */}

        <section className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/65 p-7 shadow-xl shadow-slate-200/50 backdrop-blur-xl sm:p-10 lg:p-12"
          >
            {/* Background Glows */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#0B3D2E]/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#087B5A]/10 blur-3xl" />

            <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
              {/* Text */}
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#0B3D2E]/10 px-4 py-2 text-sm font-semibold text-[#0B3D2E]">
                  <FaShieldAlt />
                  Making a Difference
                </div>

                <h2 className="max-w-xl text-3xl font-extrabold leading-tight text-[#06281E] sm:text-4xl">
                  Turning humanitarian action into lasting community impact.
                </h2>

                <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
                  Through mine action, community engagement, risk education, and
                  support to affected communities, DAFA continues to contribute
                  to safer and more resilient communities across Afghanistan.
                </p>
              </div>

              {/* Impact Points */}
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {/* Safer Communities */}
                <div className="group flex items-center gap-4 rounded-2xl border border-white/80 bg-white/70 p-5 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0B3D2E]/10 text-[#0B3D2E] transition-colors duration-300 group-hover:bg-[#0B3D2E] group-hover:text-white">
                    <FaShieldAlt />
                  </div>

                  <div>
                    <h3 className="font-bold text-[#06281E]">
                      Safer Communities
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Reducing explosive hazards
                    </p>
                  </div>

                  <FaArrowRight className="ml-auto text-[#0B3D2E]" />
                </div>

                {/* Community Support */}
                <div className="group flex items-center gap-4 rounded-2xl border border-white/80 bg-white/70 p-5 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0B3D2E]/10 text-[#0B3D2E] transition-colors duration-300 group-hover:bg-[#0B3D2E] group-hover:text-white">
                    <FaUsers />
                  </div>

                  <div>
                    <h3 className="font-bold text-[#06281E]">
                      Community Support
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Supporting affected people
                    </p>
                  </div>

                  <FaArrowRight className="ml-auto text-[#0B3D2E]" />
                </div>

                {/* Sustainable Impact */}
                <div className="group flex items-center gap-4 rounded-2xl border border-white/80 bg-white/70 p-5 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0B3D2E]/10 text-[#0B3D2E] transition-colors duration-300 group-hover:bg-[#0B3D2E] group-hover:text-white">
                    <FaCheckCircle />
                  </div>

                  <div>
                    <h3 className="font-bold text-[#06281E]">
                      Sustainable Impact
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Creating lasting results
                    </p>
                  </div>

                  <FaArrowRight className="ml-auto text-[#0B3D2E]" />
                </div>
              </div>
            </div>

            {/* Bottom DAFA Green Accent */}
            <div className="absolute inset-x-0 bottom-0 h-1 bg-[#0B3D2E]" />
          </motion.div>
        </section>

        {/* =====================================================
            Data Note
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="text-xs leading-6 text-slate-400">
            Impact figures and achievements are presented based on available
            DAFA organizational information and official reporting.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
