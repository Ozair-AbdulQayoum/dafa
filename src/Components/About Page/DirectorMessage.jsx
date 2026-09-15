// src/Components/About-Page/DirectorMessage.jsx

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaQuoteLeft, FaArrowRight } from "react-icons/fa";

import { directorMessageData } from "../Data File/About Page Data/DirectorMessageData";

export default function DirectorMessage() {
  const shouldReduceMotion = useReducedMotion();

  const revealUp = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 22,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const revealLeft = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : -24,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const revealRight = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const {
    director,
    eyebrow,
    title,
    introduction,
    paragraphs,
    closing,
    principle,
  } = directorMessageData;

  return (
    <section
      aria-labelledby="director-message-heading"
      className="
        relative
        overflow-hidden
        bg-white
        pb-16
        pt-2
        sm:pb-20
        sm:pt-4
        lg:pb-24
        lg:pt-6
      "
    >
      {/* =====================================================
          SUBTLE BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          top-20
          h-96
          w-96
          rounded-full
          bg-[#0B3D2E]/[0.025]
          blur-[100px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-32
          bottom-0
          h-80
          w-80
          rounded-full
          bg-[#F97316]/[0.02]
          blur-[100px]
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-5
          sm:px-8
          lg:px-10
          xl:px-12
        "
      >
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={revealUp}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mb-10
            max-w-3xl
            sm:mb-12
            lg:mb-14
          "
        >
          <div className="mb-4 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="
                h-px
                w-9
                bg-[#F97316]
                sm:w-14
              "
            />

            <span
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#0A5A42]
                sm:text-xs
              "
            >
              {eyebrow}
            </span>
          </div>

          <h2
            id="director-message-heading"
            className="
              max-w-3xl
              text-3xl
              font-black
              leading-[1.05]
              tracking-[-0.04em]
              text-[#0B3D2E]
              sm:text-4xl
              md:text-5xl
              lg:text-[3.35rem]
            "
          >
            {title}
          </h2>
        </motion.header>

        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}

        <div
          className="
            grid
            items-stretch
            gap-10
            lg:grid-cols-[0.72fr_1.28fr]
            lg:gap-14
            xl:gap-16
          "
        >
          {/* ===================================================
              DIRECTOR IMAGE
          ==================================================== */}

          <motion.aside
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={revealLeft}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex h-full"
          >
            <div
              className="
                relative
                flex
                h-full
                w-full
                max-w-sm
                flex-col
                lg:max-w-none
              "
            >
              {/* Editorial Orange Frame */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  -left-3
                  -top-3
                  z-10
                  h-20
                  w-20
                  border-l-2
                  border-t-2
                  border-[#F97316]
                "
              />

              {/* Portrait */}

              <div
                className="
                  relative
                  min-h-[520px]
                  flex-1
                  overflow-hidden
                  border
                  border-[#0B3D2E]/10
                  bg-[#F8FBF9]
                  shadow-[0_20px_55px_rgba(11,61,46,0.08)]
                  sm:min-h-[580px]
                  lg:min-h-0
                "
              >
                <img
                  src={director.image}
                  alt={`${director.name}, ${director.position}`}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    object-center
                    transition-transform
                    duration-700
                    hover:scale-[1.015]
                  "
                  loading="lazy"
                />

                {/* Portrait Overlay */}

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#082F24]/85
                    via-[#0B3D2E]/10
                    to-transparent
                  "
                />

                {/* Leadership Label */}

                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                    border-l-2
                    border-[#F97316]
                    pl-4
                  "
                >
                  <span
                    className="
                      block
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-white/65
                    "
                  >
                    Leadership
                  </span>

                  <span
                    className="
                      mt-1
                      block
                      text-sm
                      font-semibold
                      text-white
                    "
                  >
                    DAFA
                  </span>
                </div>
              </div>

              {/* Green Editorial Frame */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  -bottom-3
                  -right-3
                  h-16
                  w-16
                  border-b-2
                  border-r-2
                  border-[#0A5A42]
                "
              />

              {/* Director Information */}

              <div
                className="
                  mt-6
                  border-t
                  border-[#0B3D2E]/10
                  pt-5
                "
              >
                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#F97316]
                    sm:text-xs
                  "
                >
                  {director.position}
                </p>

                <h3
                  className="
                    mt-2
                    text-2xl
                    font-black
                    tracking-[-0.025em]
                    text-[#0B3D2E]
                    sm:text-3xl
                  "
                >
                  {director.name}
                </h3>
              </div>
            </div>
          </motion.aside>

          {/* ===================================================
              DIRECTOR MESSAGE
          ==================================================== */}

          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={revealRight}
            transition={{
              duration: 0.75,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              flex
              h-full
              flex-col
              lg:pt-2
            "
          >
            {/* Quote Mark */}

            <div
              aria-hidden="true"
              className="
                relative
                mb-7
                flex
                h-14
                w-14
                items-center
                justify-center
                border
                border-[#0B3D2E]/10
                bg-[#F8FBF9]
                text-[#0B3D2E]
              "
            >
              <FaQuoteLeft size={19} />

              <span
                aria-hidden="true"
                className="
                  absolute
                  -bottom-1
                  -right-1
                  h-4
                  w-4
                  bg-[#F97316]
                "
              />
            </div>

            {/* Introduction */}

            <p
              className="
                max-w-3xl
                text-xl
                font-bold
                leading-8
                tracking-[-0.02em]
                text-[#0B3D2E]
                sm:text-[25px]
                sm:leading-10
              "
            >
              {introduction}
            </p>

            {/* Editorial Divider */}

            <div className="my-7 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="
                  h-[3px]
                  w-10
                  rounded-full
                  bg-[#F97316]
                "
              />

              <span
                aria-hidden="true"
                className="
                  h-px
                  flex-1
                  bg-[#0B3D2E]/10
                "
              />
            </div>

            {/* Message Paragraphs */}

            <div className="max-w-3xl space-y-5">
              {paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  variants={revealUp}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    text-[15px]
                    leading-8
                    text-slate-600
                    sm:text-base
                    sm:leading-[1.9]
                  "
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Closing Message */}

            <div
              className="
                mt-8
                border-l-[3px]
                border-[#F97316]
                bg-[#F8FBF9]
                px-5
                py-4
                sm:px-6
                sm:py-5
              "
            >
              <p
                className="
                  text-sm
                  font-semibold
                  leading-7
                  text-[#0B3D2E]
                  sm:text-base
                  sm:leading-8
                "
              >
                {closing}
              </p>
            </div>

            <div className="flex-1" />
          </motion.article>
        </div>

        {/* =====================================================
            OUR COMMITMENT
        ===================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={revealUp}
          transition={{
            duration: 0.7,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-12
            border-t
            border-[#0B3D2E]/10
            pt-7
            sm:mt-14
            sm:pt-8
          "
        >
          <div
            className="
              flex
              flex-col
              gap-5
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div className="max-w-3xl">
              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-[#F97316]
                  sm:text-xs
                "
              >
                {principle.label}
              </p>

              <p
                className="
                  mt-2
                  text-lg
                  font-bold
                  leading-7
                  tracking-[-0.01em]
                  text-[#0B3D2E]
                  sm:text-xl
                  sm:leading-8
                "
              >
                {principle.text}
              </p>
            </div>

            {/* Direction Indicator */}

            <motion.div
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      x: 4,
                      scale: 1.05,
                    }
              }
              transition={{
                duration: 0.25,
              }}
              aria-hidden="true"
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#0B3D2E]
                text-white
              "
            >
              <FaArrowRight size={13} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
