import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import whatWeDoData from "../../Components/Data File/What We Do Data/ActivitiesData.js";

export default function Programs() {
  const shouldReduceMotion = useReducedMotion();

  // Show only the first 3 programs on the Home Page
  const featuredPrograms = Array.isArray(whatWeDoData)
    ? whatWeDoData.slice(0, 3)
    : [];

  return (
    <section
      aria-labelledby="programs-section-title"
      className="relative overflow-hidden bg-[#F7FBF8] py-5 sm:py-7 lg:py-9"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-8 max-w-3xl text-center sm:mb-10"
        >
          <span className="mb-2 inline-block text-xs font-bold uppercase tracking-[0.18em] text-[#0B3D2E]">
            Our Programs
          </span>

          <h2
            id="programs-section-title"
            className="text-2xl font-black leading-tight text-[#0F172A] sm:text-3xl lg:text-4xl"
          >
            Protecting Communities Through Humanitarian Mine Action
          </h2>
        </motion.div>

        {/* ================= PROGRAM CARDS ================= */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {featuredPrograms.map((program, index) => {
            const image = program?.images?.[0] || program?.image || "";

            const title =
              program?.title || program?.shortTitle || "DAFA Program";

            return (
              <motion.article
                key={program?.slug || index}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 35 }}
                whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: shouldReduceMotion ? 0 : index * 0.12,
                }}
                className="
                  group
                  relative
                  h-[500px]
                  overflow-hidden
                  rounded-[26px]
                  bg-[#0B3D2E]
                  shadow-[0_15px_45px_rgba(15,23,42,0.12)]
                "
              >
                {/* ================= FULL IMAGE ================= */}
                {image ? (
                  <img
                    src={image}
                    alt={title}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-110
                    "
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#0B3D2E]">
                    <span className="px-6 text-center text-sm font-semibold text-white">
                      DAFA Humanitarian Mine Action
                    </span>
                  </div>
                )}

                {/* ================= IMAGE OVERLAY ================= */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-b
                    from-black/10
                    via-transparent
                    to-black/60
                  "
                />

                {/* ================= PROGRAM NUMBER ================= */}
                <div className="absolute left-5 top-5">
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/30
                      bg-black/20
                      text-sm
                      font-bold
                      text-white
                      backdrop-blur-md
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* ================= ABBREVIATION ================= */}
                {program?.abbreviation && (
                  <div className="absolute right-5 top-5">
                    <span
                      className="
                        rounded-full
                        border
                        border-white/30
                        bg-black/20
                        px-3
                        py-1.5
                        text-xs
                        font-bold
                        tracking-wide
                        text-white
                        backdrop-blur-md
                      "
                    >
                      {program.abbreviation}
                    </span>
                  </div>
                )}

                {/* ================= GLASS CONTENT PANEL ================= */}
                <div
                  className="
                    absolute
                    bottom-4
                    left-4
                    right-4
                    rounded-[22px]
                    border
                    border-white/70
                    bg-white/80
                    p-6
                    shadow-2xl
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    ease-out
                    group-hover:bottom-5
                    group-hover:bg-white/90
                    sm:p-7
                  "
                >
                  {/* Orange Accent */}
                  <div
                    className="
                      mb-4
                      h-1
                      w-10
                      rounded-full
                      bg-[#F97316]
                      transition-all
                      duration-500
                      group-hover:w-16
                    "
                  />

                  {/* Program Title */}
                  <h3
                    className="
                      text-xl
                      font-black
                      leading-tight
                      text-[#0B3D2E]
                      sm:text-2xl
                    "
                  >
                    {title}
                  </h3>

                  {/* Explore Button */}
                  <div className="mt-5">
                    <Link
                      to={`/what-we-do/${program?.slug || ""}`}
                      className="
                        group/link
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        font-extrabold
                        text-[#0B3D2E]
                        transition-all
                        duration-300
                        hover:gap-3
                        hover:text-[#F97316]
                      "
                    >
                      Explore Program
                      <FaArrowRight
                        className="
                          text-xs
                          transition-transform
                          duration-300
                          group-hover/link:translate-x-1
                        "
                      />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* ================= VIEW ALL ================= */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-10 flex justify-center sm:mt-12"
        >
          <Link
            to="/what-we-do"
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-xl
              bg-[#0B3D2E]
              px-7
              py-3.5
              text-sm
              font-bold
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:bg-[#0A5A42]
              hover:shadow-xl
            "
          >
            View All Programs
            <FaArrowRight
              className="
                text-xs
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
