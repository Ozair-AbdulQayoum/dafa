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
          BACKGROUND GLOWS
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
          bg-[#087B5A]/10
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
          bg-[#0284C7]/10
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
          bg-[#F97316]/10
          blur-[130px]
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
          {/* SECTION LABEL */}

          <div className="mb-4 flex items-center justify-center gap-3">
            <span
              className="
                h-[2px]
                w-8
                rounded-full
                bg-[#F97316]
                sm:w-10
              "
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
              className="
                h-[2px]
                w-8
                rounded-full
                bg-[#F97316]
                sm:w-10
              "
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
            PROGRAM GRID
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
                  shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }
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
                  duration: shouldReduceMotion ? 0 : 0.65,
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: -10,
                      }
                }
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[30px]

                  bg-[#0B3D2E]/10

                  backdrop-blur-2xl

                  shadow-[0_20px_50px_rgba(11,61,46,0.14)]

                  transition-all
                  duration-500

                  hover:bg-[#0B3D2E]/15
                  hover:shadow-[0_30px_70px_rgba(11,61,46,0.20)]
                "
              >
                {/* =================================================
                    SUBTLE GLASS LIGHT
                ================================================== */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    z-10
                    h-40
                    w-40
                    rounded-full
                    bg-[#A7F3D0]/10
                    blur-[60px]
                  "
                />

                {/* =================================================
                    IMAGE
                ================================================== */}

                <div
                  className="
                    relative
                    h-[390px]
                    overflow-hidden
                  "
                >
                  {program.image ? (
                    <img
                      src={program.image}
                      alt={program.title}
                      loading="lazy"
                      decoding="async"
                      className="
                        h-full
                        w-full
                        object-cover
                        object-center

                        transition-transform
                        duration-700
                        ease-out

                        group-hover:scale-[1.07]
                      "
                    />
                  ) : (
                    <div
                      className="
                        flex
                        h-full
                        w-full
                        items-center
                        justify-center

                        bg-gradient-to-br
                        from-[#0B3D2E]
                        via-[#087B5A]
                        to-[#063F30]
                      "
                    >
                      <Icon
                        size={54}
                        className="text-[#A7F3D0]"
                        aria-hidden="true"
                      />
                    </div>
                  )}

                  {/* =================================================
                      CINEMATIC IMAGE OVERLAY
                  ================================================== */}

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-0

                      bg-gradient-to-t
                      from-[#03150F]
                      via-[#03150F]/45
                      to-transparent
                    "
                  />

                  {/* =================================================
                      COLORED AMBIENT GLOW
                  ================================================== */}

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      bottom-[-100px]
                      left-1/2

                      h-[250px]
                      w-[90%]

                      -translate-x-1/2

                      rounded-full

                      opacity-40
                      blur-[85px]

                      transition-all
                      duration-700

                      group-hover:scale-125
                      group-hover:opacity-60
                    "
                    style={{
                      backgroundColor: color,
                    }}
                  />

                  {/* =================================================
                      CONTENT
                  ================================================== */}

                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      z-20

                      p-6
                      sm:p-7
                    "
                  >
                    {/* TITLE */}

                    <h3
                      className="
                        max-w-[95%]

                        text-2xl
                        font-extrabold
                        leading-[1.15]
                        tracking-[-0.025em]

                        text-white

                        drop-shadow-[0_4px_18px_rgba(0,0,0,0.55)]
                      "
                    >
                      {program.title}
                    </h3>

                    {/* LEARN MORE BUTTON */}

                    <Link
                      to={`/what-we-do/${program.slug}`}
                      aria-label={`Learn more about ${program.title}`}
                      className="
                        group/link

                        mt-5

                        inline-flex
                        items-center
                        gap-3

                        rounded-full

                        bg-[#0B3D2E]/70

                        px-4
                        py-2.5

                        text-sm
                        font-semibold
                        text-white

                        backdrop-blur-xl

                        shadow-[0_8px_25px_rgba(0,0,0,0.20)]

                        transition-all
                        duration-300

                        hover:-translate-y-0.5
                        hover:bg-[#087B5A]
                        hover:shadow-[0_12px_30px_rgba(8,123,90,0.30)]

                        focus:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-[#A7F3D0]/70
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

                          transition-transform
                          duration-300

                          group-hover/link:translate-x-1
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

              rounded-full

              bg-[#087B5A]

              px-6
              py-3.5

              text-sm
              font-bold
              text-white

              shadow-[0_10px_30px_rgba(8,123,90,0.18)]

              transition-all
              duration-300

              hover:-translate-y-1
              hover:bg-[#0B3D2E]
              hover:shadow-[0_15px_35px_rgba(11,61,46,0.25)]

              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#087B5A]/40
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
