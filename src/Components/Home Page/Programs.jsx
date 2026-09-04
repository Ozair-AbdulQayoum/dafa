import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import { programs } from "../../Components/Data File/Main Page Data/ProgramsData";

export default function Programs() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="programs-section-title"
      className="
        relative
        overflow-hidden
        bg-[#F7FBF8]
        py-12
        sm:py-14
        lg:py-16
      "
    >
      <div
        className="
          mx-auto
          w-full
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
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            mb-9
            max-w-3xl
            text-center
            sm:mb-11
            lg:mb-12
          "
        >
          {/* Eyebrow */}

          <div
            className="
              mb-4
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <span
              aria-hidden="true"
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
                text-[11px]
                font-extrabold
                uppercase
                tracking-[0.18em]
                text-[#0B3D2E]
                sm:text-sm
                sm:tracking-[0.2em]
              "
            >
              Our Programs
            </span>

            <span
              aria-hidden="true"
              className="
                h-[2px]
                w-8
                rounded-full
                bg-[#F97316]
                sm:w-10
              "
            />
          </div>

          {/* Heading */}

          <h2
            id="programs-section-title"
            className="
              text-[1.9rem]
              font-extrabold
              leading-[1.08]
              tracking-[-0.035em]
              text-[#0F172A]
              sm:text-4xl
              lg:text-[2.8rem]
              xl:text-5xl
            "
          >
            Protecting Communities Through{" "}
            <span className="text-[#0B3D2E]">Humanitarian Mine Action</span>
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-6
              text-slate-600
              sm:mt-5
              sm:text-base
              sm:leading-7
            "
          >
            DAFA delivers professional mine-action services to reduce explosive
            hazards, protect communities, and help create safer environments
            across Afghanistan.
          </p>
        </motion.div>

        {/* =====================================================
            PROGRAM GRID
        ====================================================== */}

        <div
          className="
            grid
            gap-5
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
                  shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }
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
                  duration: shouldReduceMotion ? 0 : 0.5,
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  group
                  flex
                  h-full
                  flex-col
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#0B3D2E]/10
                  bg-white
                  shadow-[0_8px_25px_rgba(15,23,42,0.05)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#0B3D2E]/25
                  hover:shadow-[0_16px_35px_rgba(11,61,46,0.10)]
                  focus-within:border-[#0B3D2E]/30
                "
              >
                {/* =================================================
                    IMAGE
                ================================================== */}

                <div
                  className="
                    relative
                    h-[210px]
                    overflow-hidden
                    sm:h-[230px]
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
                        duration-500
                        ease-out
                        group-hover:scale-[1.035]
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
                        bg-[#0B3D2E]
                      "
                    >
                      <Icon
                        size={48}
                        className="text-white"
                        aria-hidden="true"
                      />
                    </div>
                  )}

                  {/* Image overlay */}

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#0B3D2E]/55
                      via-transparent
                      to-transparent
                    "
                  />

                  {/* Program number */}

                  <span
                    className="
                      absolute
                      left-4
                      top-4
                      flex
                      h-9
                      min-w-9
                      items-center
                      justify-center
                      rounded-lg
                      bg-[#0B3D2E]/90
                      px-2
                      text-[11px]
                      font-bold
                      tracking-[0.08em]
                      text-white
                      backdrop-blur-sm
                    "
                  >
                    {program.number}
                  </span>

                  {/* Category */}

                  <span
                    className="
                      absolute
                      bottom-4
                      left-4
                      rounded-md
                      border
                      border-white/20
                      bg-white/95
                      px-2.5
                      py-1.5
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.08em]
                      text-[#0B3D2E]
                    "
                  >
                    {program.category}
                  </span>
                </div>

                {/* =================================================
                    CARD CONTENT
                ================================================== */}

                <div
                  className="
                    flex
                    flex-1
                    flex-col
                    p-5
                    sm:p-6
                  "
                >
                  {/* Icon */}

                  <div
                    className="
                      mb-4
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#0B3D2E]/[0.07]
                      text-[#0B3D2E]
                      transition-all
                      duration-300
                      group-hover:translate-y-[-2px]
                      group-hover:bg-[#0B3D2E]
                      group-hover:text-white
                    "
                  >
                    <Icon size={19} aria-hidden="true" />
                  </div>

                  {/* Title */}

                  <h3
                    className="
                      text-lg
                      font-extrabold
                      leading-6
                      tracking-[-0.02em]
                      text-[#0F172A]
                      sm:text-xl
                    "
                  >
                    {program.title}
                  </h3>

                  {/* Description */}

                  <p
                    className="
                      mt-2.5
                      line-clamp-3
                      min-h-[66px]
                      text-sm
                      leading-5.5
                      text-slate-600
                    "
                  >
                    {program.description}
                  </p>

                  {/* Learn More */}

                  <Link
                    to={`/what-we-do/${program.slug}`}
                    aria-label={`Learn more about ${program.title}`}
                    className="
                      group/link
                      mt-auto
                      inline-flex
                      w-fit
                      items-center
                      gap-2
                      pt-5
                      text-sm
                      font-bold
                      text-[#0B3D2E]
                      transition-colors
                      duration-300
                      hover:text-[#0A5A42]
                      focus:outline-none
                      focus-visible:rounded-md
                      focus-visible:ring-2
                      focus-visible:ring-[#F97316]
                      focus-visible:ring-offset-2
                    "
                  >
                    <span>Learn More</span>

                    <FaArrowRight
                      size={10}
                      aria-hidden="true"
                      className="
                        transition-transform
                        duration-300
                        group-hover/link:translate-x-1
                      "
                    />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* =====================================================
            VIEW ALL PROGRAMS
        ====================================================== */}

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.45,
            delay: shouldReduceMotion ? 0 : 0.15,
          }}
          className="
            mt-9
            flex
            justify-center
            sm:mt-10
          "
        >
          <Link
            to="/what-we-do"
            className="
              group
              inline-flex
              min-h-[46px]
              items-center
              justify-center
              gap-2.5
              rounded-xl
              border
              border-[#0B3D2E]
              bg-[#0B3D2E]
              px-5
              text-sm
              font-bold
              text-white
              shadow-[0_8px_20px_rgba(11,61,46,0.12)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#0A5A42]
              hover:shadow-[0_12px_25px_rgba(11,61,46,0.16)]
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#F97316]
              focus-visible:ring-offset-2
            "
          >
            <span>View All Programs</span>

            <FaArrowRight
              size={10}
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
