import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import { programs } from "../../Components/Data File/Main Page Data/ProgramsData";

export default function Programs() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28">
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-80
          w-80
          rounded-full
          bg-[#087B5A]/5
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-80
          w-80
          rounded-full
          bg-[#F97316]/5
          blur-3xl
        "
      />

      {/* =====================================================
          MAIN CONTAINER
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
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-16"
        >
          {/* LABEL */}

          <div className="mb-5 flex items-center justify-center gap-3">
            <span
              aria-hidden="true"
              className="h-[2px] w-8 rounded-full bg-[#F97316] sm:w-10"
            />

            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#087B5A]
                sm:text-sm
              "
            >
              What We Do
            </span>

            <span
              aria-hidden="true"
              className="h-[2px] w-8 rounded-full bg-[#F97316] sm:w-10"
            />
          </div>

          {/* TITLE */}

          <h2
            className="
              text-3xl
              font-extrabold
              leading-[1.1]
              tracking-[-0.025em]
              text-[#0F172A]
              sm:text-4xl
              lg:text-5xl
            "
          >
            Humanitarian Action
            <span className="block text-[#087B5A]">
              That Protects Communities
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-slate-600
              sm:text-lg
              sm:leading-8
            "
          >
            DAFA delivers specialized humanitarian mine action services to
            reduce explosive risks, protect communities, and help people safely
            access their land and livelihoods.
          </p>
        </motion.div>

        {/* =====================================================
            PROGRAM CARDS
        ====================================================== */}

        <div
          className="
            mx-auto
            grid
            max-w-6xl
            gap-6
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <motion.article
                key={program.slug}
                initial={
                  shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.6,
                  delay: shouldReduceMotion ? 0 : index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={shouldReduceMotion ? {} : { y: -6 }}
                className="
                  group
                  relative
                  flex
                  flex-col
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  shadow-sm
                  transition-all
                  duration-300
                  hover:border-[#087B5A]/20
                  hover:shadow-xl
                "
              >
                {/* =================================================
                    CARD VISUAL
                ================================================== */}

                <div
                  className="
                    relative
                    h-[230px]
                    overflow-hidden
                    bg-[#0B3D2E]
                  "
                >
                  {program.image ? (
                    <img
                      src={program.image}
                      alt={program.title}
                      loading="lazy"
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                    />
                  ) : (
                    <>
                      {/* BACKGROUND */}

                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-br
                          from-[#0B3D2E]
                          to-[#087B5A]
                        "
                      />

                      {/* DECORATIVE CIRCLES */}

                      <div
                        aria-hidden="true"
                        className="
                          absolute
                          -right-16
                          -top-16
                          h-48
                          w-48
                          rounded-full
                          border
                          border-white/10
                        "
                      />

                      <div
                        aria-hidden="true"
                        className="
                          absolute
                          -bottom-24
                          -left-16
                          h-56
                          w-56
                          rounded-full
                          border
                          border-white/10
                        "
                      />

                      {/* ICON */}

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className="
                            flex
                            h-20
                            w-20
                            items-center
                            justify-center
                            rounded-2xl
                            border
                            border-white/15
                            bg-white/10
                            text-[#A7F3D0]
                            shadow-xl
                            backdrop-blur-sm
                            transition-all
                            duration-300
                            group-hover:scale-105
                            group-hover:bg-white/15
                          "
                        >
                          <Icon size={30} aria-hidden="true" />
                        </div>
                      </div>
                    </>
                  )}

                  {/* BOTTOM OVERLAY */}

                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      h-28
                      bg-gradient-to-t
                      from-[#052E23]/80
                      to-transparent
                    "
                  />

                  {/* NUMBER */}

                  <div
                    className="
                      absolute
                      left-5
                      top-5
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-white/20
                      bg-black/20
                      text-xs
                      font-bold
                      text-white
                      backdrop-blur-md
                    "
                  >
                    {program.number}
                  </div>

                  {/* CATEGORY */}

                  <div className="absolute bottom-5 left-5">
                    <span
                      className="
                        rounded-full
                        border
                        border-white/20
                        bg-black/20
                        px-3
                        py-1.5
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.15em]
                        text-[#D1FAE5]
                        backdrop-blur-md
                      "
                    >
                      {program.category}
                    </span>
                  </div>
                </div>

                {/* =================================================
                    CARD CONTENT
                ================================================== */}

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  {/* TITLE */}

                  <h3
                    className="
                      text-xl
                      font-extrabold
                      leading-snug
                      tracking-tight
                      text-[#0F172A]
                      transition-colors
                      duration-300
                      group-hover:text-[#087B5A]
                    "
                  >
                    {program.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-7
                      text-slate-600
                    "
                  >
                    {program.description}
                  </p>

                  {/* LINK */}

                  <Link
                    to={`/what-we-do/${program.slug}`}
                    aria-label={`Learn more about ${program.title}`}
                    className="
                      group/link
                      mt-6
                      inline-flex
                      w-fit
                      items-center
                      gap-2
                      text-sm
                      font-bold
                      text-[#087B5A]
                      transition-colors
                      duration-300
                      hover:text-[#0B3D2E]
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-[#087B5A]/40
                      focus-visible:ring-offset-2
                    "
                  >
                    <span>Learn More</span>

                    <span
                      className="
                        flex
                        h-7
                        w-7
                        items-center
                        justify-center
                        rounded-full
                        bg-[#087B5A]/10
                        transition-all
                        duration-300
                        group-hover/link:translate-x-1
                        group-hover/link:bg-[#087B5A]
                        group-hover/link:text-white
                      "
                    >
                      <FaArrowRight size={10} aria-hidden="true" />
                    </span>
                  </Link>
                </div>

                {/* BOTTOM ACCENT */}

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-1
                    w-0
                    bg-[#F97316]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />
              </motion.article>
            );
          })}
        </div>

        {/* =====================================================
            VIEW ALL CTA
        ====================================================== */}

        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.6,
            delay: shouldReduceMotion ? 0 : 0.2,
          }}
          className="mt-12 flex justify-center"
        >
          <Link
            to="/what-we-do"
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-3
              rounded-xl
              border
              border-[#087B5A]
              px-6
              py-3.5
              text-sm
              font-bold
              text-[#087B5A]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#087B5A]
              hover:text-white
              hover:shadow-lg
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#087B5A]/30
              focus-visible:ring-offset-2
            "
          >
            <span>View All Our Services</span>

            <FaArrowRight
              size={11}
              aria-hidden="true"
              className="
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
