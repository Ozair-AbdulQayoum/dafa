import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaChevronDown, FaChevronUp } from "react-icons/fa";

import whatWeDoData from "../Data File/What We Do Data/ActivitiesData.js";

export default function Activities() {
  const [showAll, setShowAll] = useState(false);

  const visibleActivities = showAll ? whatWeDoData : whatWeDoData.slice(0, 4);

  return (
    <main className="bg-[#F4FAF7]">
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* =====================================================
              SECTION HEADING
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex rounded-full border border-[#087B5A]/20 bg-[#087B5A]/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
              Our Capabilities
            </span>

            <h1 className="mt-5 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
              Humanitarian Mine Action
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
              Explore the activities and technical capabilities through which
              DAFA supports communities affected by mines and explosive hazards.
            </p>
          </motion.div>

          {/* =====================================================
              ACTIVITY CARDS
          ===================================================== */}
          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {visibleActivities.map((activity, index) => (
              <motion.article
                key={activity.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.07,
                }}
                className="group"
              >
                <Link
                  to={`/what-we-do/${activity.slug}`}
                  className="
                    relative block h-[430px]
                    overflow-hidden rounded-3xl
                    bg-[#06281E]
                    shadow-lg shadow-slate-200/60
                    transition-all duration-500
                    hover:-translate-y-2
                    hover:shadow-2xl hover:shadow-[#087B5A]/20
                  "
                >
                  {/* =================================================
                      IMAGE
                  ================================================= */}
                  <img
                    src={activity.images[0]}
                    alt={activity.title}
                    loading="lazy"
                    className="
                      absolute inset-0
                      h-full w-full object-cover
                      transition-transform duration-700 ease-out
                      group-hover:scale-110
                    "
                  />

                  {/* Dark image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#031C14]/80 via-[#06281E]/10 to-transparent" />

                  {/* =================================================
                      GLASS CONTENT
                  ================================================= */}
                  <div
                    className="
                      absolute inset-x-5 bottom-5
                      rounded-2xl
                      border border-white/20
                      bg-[#06281E]/45
                      p-5
                      backdrop-blur-xl
                      shadow-2xl
                      transition-all duration-500
                      group-hover:bg-[#06281E]/60
                      group-hover:border-white/30
                    "
                  >
                    {/* Title */}
                    <h2
                      className="
                        text-xl font-bold leading-tight text-white
                        sm:text-2xl
                      "
                    >
                      {activity.title}
                    </h2>

                    {/* Explore Button */}
                    <div className="mt-4">
                      <span
                        className="
                          inline-flex items-center gap-3
                          rounded-xl
                          border border-white/20
                          bg-white/10
                          px-4 py-2.5
                          text-sm font-semibold text-white
                          backdrop-blur-md
                          transition-all duration-300
                          group-hover:bg-white
                          group-hover:text-[#06281E]
                        "
                      >
                        Explore Activity
                        <span
                          className="
                            flex h-7 w-7 items-center justify-center
                            rounded-full
                            bg-white/15
                            transition-all duration-300
                            group-hover:bg-[#087B5A]
                            group-hover:text-white
                          "
                        >
                          <FaArrowRight
                            size={11}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </span>
                      </span>
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div
                    className="
                      absolute bottom-0 left-0 right-0 h-1
                      bg-gradient-to-r
                      from-[#087B5A]
                      via-[#A7F3D0]
                      to-[#0284C7]
                      opacity-0
                      transition-opacity duration-500
                      group-hover:opacity-100
                    "
                  />
                </Link>
              </motion.article>
            ))}
          </div>

          {/* =====================================================
              SEE MORE / SHOW LESS
          ===================================================== */}
          {whatWeDoData.length > 4 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-14 flex justify-center"
            >
              <button
                type="button"
                onClick={() => setShowAll((prev) => !prev)}
                className="
                  group inline-flex items-center gap-3
                  rounded-xl
                  border border-[#087B5A]/30
                  bg-white
                  px-6 py-3.5
                  text-sm font-bold text-[#087B5A]
                  shadow-sm
                  transition-all duration-300
                  hover:border-[#087B5A]
                  hover:bg-[#087B5A]
                  hover:text-white
                  hover:shadow-lg
                "
              >
                <span>{showAll ? "Show Less" : "See More Activities"}</span>

                <span className="transition-transform duration-300 group-hover:translate-y-0.5">
                  {showAll ? (
                    <FaChevronUp size={11} />
                  ) : (
                    <FaChevronDown size={11} />
                  )}
                </span>
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}
