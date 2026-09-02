import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import { programs } from "../../Components/Data File/Main Page Data/ProgramsData";

export default function Programs() {
  const shouldReduceMotion = useReducedMotion();

  const cardColors = [
    "#087B5A",
    "#0284C7",
    "#F97316",
    "#7C3AED",
    "#0891B2",
    "#D97706",
  ];

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-[#E8F5EF]
        via-[#F4FAF7]
        to-[#EAF4F8]
        py-14
        sm:py-16
        lg:py-20
      "
    >
      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          -top-32
          h-[480px]
          w-[480px]
          rounded-full
          bg-[#087B5A]/[0.10]
          blur-[120px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          top-1/4
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#0284C7]/[0.07]
          blur-[120px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[-220px]
          left-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-[#F97316]/[0.05]
          blur-[130px]
        "
      />

      {/* =====================================================
          CONTAINER
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
            HEADER
        ====================================================== */}

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            mb-12
            max-w-3xl
            text-center
            sm:mb-14
          "
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 rounded-full bg-[#F97316] sm:w-10" />

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

            <span className="h-[2px] w-8 rounded-full bg-[#F97316] sm:w-10" />
          </div>

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

          <p
            className="
              mx-auto
              mt-5
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
            gap-7
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {programs.map((program, index) => {
            const Icon = program.icon;
            const color = cardColors[index % cardColors.length];

            return (
              <motion.article
                key={program.slug}
                initial={
                  shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.6,
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: -8,
                      }
                }
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[1.8rem]
                  border
                  border-white/80
                  bg-[#F3F9F6]/90
                  p-2
                  shadow-[8px_8px_22px_rgba(15,23,42,0.10),-8px_-8px_22px_rgba(255,255,255,0.95)]
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:shadow-[12px_16px_32px_rgba(15,23,42,0.13),-10px_-10px_28px_rgba(255,255,255,1)]
                "
              >
                {/* =================================================
                    IMAGE
                ================================================== */}

                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[1.45rem]
                    bg-[#0B3D2E]
                  "
                >
                  {program.image ? (
                    <img
                      src={program.image}
                      alt={program.title}
                      loading="lazy"
                      decoding="async"
                      className="
                        block
                        h-[320px]
                        w-full
                        object-cover
                        object-center
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-[1.04]
                        sm:h-[350px]
                      "
                    />
                  ) : (
                    <div
                      className="
                        flex
                        h-[320px]
                        items-center
                        justify-center
                        bg-gradient-to-br
                        from-[#0B3D2E]
                        via-[#087B5A]
                        to-[#063F30]
                        sm:h-[350px]
                      "
                    >
                      <Icon
                        size={48}
                        className="text-[#A7F3D0]"
                        aria-hidden="true"
                      />
                    </div>
                  )}

                  {/* =================================================
                      SOFT COLOR BLUR
                  ================================================== */}

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      bottom-[-70px]
                      left-1/2
                      h-[230px]
                      w-[90%]
                      -translate-x-1/2
                      rounded-full
                      opacity-90
                      blur-[65px]
                      transition-all
                      duration-500
                      group-hover:scale-110
                    "
                    style={{
                      backgroundColor: color,
                    }}
                  />

                  {/* =================================================
                      TITLE + BUTTON
                      NO BACKGROUND BOX
                  ================================================== */}

                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-8
                      z-10
                      px-5
                      sm:bottom-10
                      sm:px-6
                    "
                  >
                    {/* TITLE */}
                    <h3
                      className="
                        text-xl
                        font-extrabold
                        leading-snug
                        tracking-tight
                        text-white
                        drop-shadow-[0_3px_8px_rgba(0,0,0,0.45)]
                      "
                    >
                      {program.title}
                    </h3>

                    {/* BUTTON */}
                    <Link
                      to={`/what-we-do/${program.slug}`}
                      aria-label={`Learn more about ${program.title}`}
                      className="
                        group/link
                        mt-4
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        border
                        border-white/30
                        bg-white/15
                        px-4
                        py-2.5
                        text-sm
                        font-bold
                        text-white
                        shadow-[4px_4px_10px_rgba(0,0,0,0.15),-3px_-3px_8px_rgba(255,255,255,0.12)]
                        backdrop-blur-md
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:bg-white
                        hover:text-[#087B5A]
                        hover:shadow-lg
                        focus:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-white/60
                        focus-visible:ring-offset-2
                      "
                    >
                      <span>Learn More</span>

                      <span
                        className="
                          flex
                          h-6
                          w-6
                          items-center
                          justify-center
                          rounded-full
                          bg-white/10
                          transition-all
                          duration-300
                          group-hover/link:translate-x-1
                          group-hover/link:bg-white/20
                        "
                      >
                        <FaArrowRight size={9} aria-hidden="true" />
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* =====================================================
            VIEW ALL
        ====================================================== */}

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.6,
            delay: shouldReduceMotion ? 0 : 0.2,
          }}
          className="mt-10 flex justify-center"
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
