import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import { aboutData } from "../Main Page Data/AboutData";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* =====================================================
          DECORATIVE BACKGROUND
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
            IMAGE + CONTENT
        ====================================================== */}

        <div
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-2
            lg:gap-20
          "
        >
          {/* =================================================
              IMAGE
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
            {/* IMAGE WRAPPER */}

            <div
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                bg-[#0B3D2E]
                shadow-[0_25px_70px_rgba(15,23,42,0.12)]
              "
            >
              <img
                src={aboutData.image.src}
                alt={aboutData.image.alt}
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

              {/* IMAGE OVERLAY */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#06281E]/70
                  via-transparent
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
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-white
                    backdrop-blur-md
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
              TEXT CONTENT
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

            <motion.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-[2px] w-10 rounded-full bg-[#087B5A]" />

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
            </motion.div>

            {/* HEADING */}

            <h2
              className="
                max-w-2xl
                text-3xl
                font-bold
                leading-[1.12]
                tracking-tight
                text-[#0F172A]
                sm:text-4xl
                lg:text-5xl
              "
            >
              {aboutData.title}
            </h2>

            {/* GREEN LINE */}

            <div className="mt-6 h-1 w-16 rounded-full bg-[#087B5A]" />

            {/* MAIN DESCRIPTION */}

            <p
              className="
                mt-7
                max-w-2xl
                text-base
                leading-8
                text-slate-600
                sm:text-lg
              "
            >
              {aboutData.description}
            </p>

            {/* SECONDARY DESCRIPTION */}

            <p
              className="
                mt-5
                max-w-2xl
                text-sm
                leading-7
                text-slate-500
                sm:text-base
              "
            >
              {aboutData.secondaryDescription}
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            CENTERED BUTTON
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="
            mt-12
            flex
            justify-center
            sm:mt-14
          "
        >
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
              px-7
              py-3.5
              text-sm
              font-semibold
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
                size={11}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
