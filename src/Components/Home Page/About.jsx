import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCheck } from "react-icons/fa";

import { aboutData } from "../../Components/Data File/Main Page Data/AboutData";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div
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
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-96
          w-96
          rounded-full
          bg-[#0284C7]/5
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
            MAIN GRID
        ====================================================== */}

        <div
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-[0.95fr_1.05fr]
            lg:gap-20
            xl:gap-24
          "
        >
          {/* =================================================
              IMAGE SIDE
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            {/* IMAGE */}

            <div
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                bg-[#0B3D2E]
                shadow-[0_25px_70px_rgba(15,23,42,0.14)]
              "
            >
              <img
                src={aboutData.image.src}
                alt={aboutData.image.alt}
                loading="lazy"
                className="
                  h-[380px]
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                  sm:h-[450px]
                  md:h-[500px]
                  lg:h-[540px]
                "
              />

              {/* IMAGE GRADIENT */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#06281E]/75
                  via-[#06281E]/10
                  to-transparent
                "
              />

              {/* IMAGE LABEL */}

              <div className="absolute bottom-6 left-6">
                <span
                  className="
                    rounded-full
                    border
                    border-white/20
                    bg-black/20
                    px-4
                    py-2
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-white
                    backdrop-blur-md
                    sm:text-xs
                  "
                >
                  {aboutData.image.label}
                </span>
              </div>
            </div>

            {/* DECORATIVE CIRCLE */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                pointer-events-none
                absolute
                -left-5
                -top-5
                hidden
                h-24
                w-24
                rounded-full
                border
                border-dashed
                border-[#087B5A]/20
                lg:block
              "
            />
          </motion.div>

          {/* =================================================
              CONTENT SIDE
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* SECTION LABEL */}

            <div className="mb-5 flex items-center gap-3">
              <span
                className="
                  h-[2px]
                  w-10
                  rounded-full
                  bg-[#F97316]
                "
              />

              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-[#087B5A]
                  sm:text-sm
                "
              >
                {aboutData.label}
              </span>
            </div>

            {/* HEADING */}

            <h2
              className="
                max-w-2xl
                text-3xl
                font-extrabold
                leading-[1.08]
                tracking-[-0.025em]
                text-[#0F172A]
                sm:text-4xl
                lg:text-[3.2rem]
                xl:text-[3.5rem]
              "
            >
              {aboutData.title}
            </h2>

            {/* ACCENT LINE */}

            <div className="mt-6 flex items-center gap-2">
              <span className="h-1 w-12 rounded-full bg-[#087B5A]" />
              <span className="h-1 w-3 rounded-full bg-[#F97316]" />
            </div>

            {/* MAIN DESCRIPTION */}

            <p
              className="
                mt-7
                max-w-2xl
                text-base
                leading-8
                text-slate-600
                sm:text-lg
                sm:leading-8
              "
            >
              {aboutData.description}
            </p>

            {/* KEY POINTS */}

            <div
              className="
                mt-7
                grid
                gap-3
                sm:grid-cols-2
              "
            >
              {aboutData.highlights.map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-slate-100
                    bg-slate-50/70
                    px-4
                    py-3
                  "
                >
                  <span
                    className="
                      flex
                      h-6
                      w-6
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#087B5A]/10
                      text-[#087B5A]
                    "
                  >
                    <FaCheck size={9} />
                  </span>

                  <span
                    className="
                      text-sm
                      font-semibold
                      text-slate-700
                    "
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}

            <div className="mt-8">
              <Link
                to={aboutData.button.path}
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-[#087B5A]
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  shadow-lg
                  shadow-[#087B5A]/15
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#0B3D2E]
                  hover:shadow-xl
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#087B5A]/40
                  focus:ring-offset-2
                "
              >
                <span>{aboutData.button.text}</span>

                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-white/10
                    transition-all
                    duration-300
                    group-hover:bg-white/20
                  "
                >
                  <FaArrowRight
                    size={10}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
