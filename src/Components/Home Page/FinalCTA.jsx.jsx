// src/Components/Home-Page/FinalCTA.jsx

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function FinalCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="final-cta-heading"
      className="
        relative
        overflow-hidden
        bg-[#F6FAF8]
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* =====================================================
          SUBTLE BACKGROUND DETAILS
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Green ambient glow */}
        <div
          className="
            absolute
            -left-40
            -top-40
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#0B3D2E]/10
            blur-[110px]
          "
        />

        {/* Orange ambient glow */}
        <div
          className="
            absolute
            -bottom-40
            -right-40
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#F97316]/10
            blur-[110px]
          "
        />

        {/* Soft center glow */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[280px]
            w-[280px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#0B3D2E]/5
            blur-[100px]
          "
        />

        {/* Decorative glass shapes */}
        <div
          className="
            absolute
            -right-20
            top-10
            h-72
            w-72
            rotate-45
            rounded-[70px]
            border
            border-[#0B3D2E]/5
          "
        />

        <div
          className="
            absolute
            -left-24
            bottom-0
            h-64
            w-64
            rotate-45
            rounded-[60px]
            border
            border-[#F97316]/5
          "
        />
      </div>

      {/* =====================================================
          GLASS CONTAINER
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 24,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-white/80
            bg-white/55
            px-6
            py-14
            shadow-[0_25px_80px_rgba(11,61,46,0.10)]
            backdrop-blur-2xl
            sm:px-10
            sm:py-16
            lg:px-16
            lg:py-20
          "
        >
          {/* Glass highlight */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-x-0
              top-0
              h-px
              bg-white
            "
          />

          {/* Green glass accent */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              h-56
              w-56
              rounded-full
              bg-[#0B3D2E]/10
              blur-3xl
            "
          />

          {/* Orange glass accent */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-24
              -left-24
              h-48
              w-48
              rounded-full
              bg-[#F97316]/10
              blur-3xl
            "
          />

          {/* =================================================
              CONTENT
          ================================================= */}

          <div className="relative z-10 text-center">
            {/* EYEBROW */}

            <div className="mb-5 flex items-center justify-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-[#F97316]" />

              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-[#F97316]
                  sm:text-sm
                "
              >
                Make a Difference
              </span>

              <span aria-hidden="true" className="h-px w-8 bg-[#F97316]" />
            </div>

            {/* HEADING */}

            <h2
              id="final-cta-heading"
              className="
                mx-auto
                max-w-4xl
                text-3xl
                font-black
                leading-[1.08]
                tracking-tight
                text-[#0B3D2E]
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
              "
            >
              Together, We Can Build{" "}
              <span className="text-[#087B5A]">Safer Communities</span>
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
              Working together helps support humanitarian mine action and safer
              environments for communities across Afghanistan.
            </p>

            {/* CTA BUTTONS */}

            <div
              className="
                mt-9
                flex
                flex-col
                items-stretch
                justify-center
                gap-3
                sm:flex-row
                sm:items-center
                sm:gap-4
              "
            >
              {/* PRIMARY CTA */}

              <Link
                to="/contact"
                className="
                  group
                  inline-flex
                  min-h-[52px]
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  border
                  border-[#F97316]/30
                  bg-[#F97316]
                  px-7
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_12px_30px_rgba(249,115,22,0.18)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#EA580C]
                  hover:shadow-[0_16px_35px_rgba(249,115,22,0.25)]
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#F97316]
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#F6FAF8]
                  sm:min-w-[170px]
                "
              >
                <span>Contact DAFA</span>

                <FaArrowRight
                  size={12}
                  aria-hidden="true"
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>

              {/* SECONDARY GLASS CTA */}

              <Link
                to="/what-we-do"
                className="
                  inline-flex
                  min-h-[52px]
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[#0B3D2E]/15
                  bg-white/45
                  px-7
                  py-3.5
                  text-sm
                  font-bold
                  text-[#0B3D2E]
                  shadow-[0_8px_25px_rgba(11,61,46,0.05)]
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-[#0B3D2E]/30
                  hover:bg-white/70
                  hover:shadow-[0_12px_30px_rgba(11,61,46,0.08)]
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#0B3D2E]
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#F6FAF8]
                  sm:min-w-[180px]
                "
              >
                Explore Our Work
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
