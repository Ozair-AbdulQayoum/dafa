// src/Components/Home-Page/About.jsx

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FaArrowRight, FaShieldAlt } from "react-icons/fa";

import { aboutDAFAData } from "../../Components/Data File/About Page Data/AboutData";

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  const [currentImage, setCurrentImage] = useState(0);

  const images = aboutDAFAData.images || [];

  // =====================================================
  // AUTO IMAGE SLIDER
  // =====================================================

  useEffect(() => {
    if (shouldReduceMotion || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length, shouldReduceMotion]);

  // =====================================================
  // FADE UP ANIMATION
  // =====================================================

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
    },

    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      aria-labelledby="who-we-are-heading"
      className="
        relative
        overflow-hidden
        bg-[#F8FBF9]
        py-16
        sm:py-20
        lg:py-24
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          top-10
          h-80
          w-80
          rounded-full
          bg-[#0B3D2E]/[0.035]
          blur-[90px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-40
          -left-40
          h-80
          w-80
          rounded-full
          bg-[#F97316]/[0.03]
          blur-[90px]
        "
      />

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
        ===================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={fadeUp}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            mb-10
            max-w-4xl
            text-center
            sm:mb-12
            lg:mb-14
          "
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span
              aria-hidden="true"
              className="
                h-px
                w-10
                bg-[#F97316]
                sm:w-14
              "
            />

            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#0A5A42]
                sm:text-sm
              "
            >
              {aboutDAFAData.eyebrow}
            </span>

            <span
              aria-hidden="true"
              className="
                h-px
                w-10
                bg-[#F97316]
                sm:w-14
              "
            />
          </div>

          <h2
            id="who-we-are-heading"
            className="
              text-3xl
              font-black
              leading-[1.08]
              tracking-tight
              text-[#0B3D2E]
              sm:text-4xl
              md:text-5xl
              lg:text-[3.2rem]
            "
          >
            {aboutDAFAData.title}
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-3xl
              text-base
              leading-7
              text-slate-600
              sm:text-lg
              sm:leading-8
            "
          >
            {aboutDAFAData.description}
          </p>
        </motion.div>

        {/* =====================================================
            IMAGE + CONTENT
        ===================================================== */}

        <div
          className="
            grid
            items-stretch
            gap-8
            lg:grid-cols-2
            lg:gap-12
            xl:gap-16
          "
        >
          {/* =====================================================
              IMAGE
          ===================================================== */}

          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -30,
                  }
            }
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
            className="relative flex"
          >
            {/* Orange Corner */}

            <div
              aria-hidden="true"
              className="
                absolute
                -left-3
                -top-3
                z-0
                h-16
                w-16
                rounded-tl-2xl
                border-l-2
                border-t-2
                border-[#F97316]
              "
            />

            {/* Image Container */}

            <div
              className="
                relative
                z-10
                flex
                min-h-[520px]
                w-full
                overflow-hidden
                rounded-[24px]
                bg-[#0B3D2E]
                shadow-[0_20px_50px_rgba(11,61,46,0.12)]
                sm:min-h-[560px]
                lg:min-h-full
              "
            >
              {/* =====================================================
                  AUTO SLIDING IMAGES
              ===================================================== */}

              <AnimatePresence mode="sync">
                {images.length > 0 && (
                  <motion.img
                    key={currentImage}
                    src={images[currentImage].src}
                    alt={images[currentImage].alt}
                    initial={{
                      opacity: 0,
                      scale: shouldReduceMotion ? 1 : 1.05,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: shouldReduceMotion ? 1 : 1.02,
                    }}
                    transition={{
                      opacity: {
                        duration: 1,
                        ease: "easeInOut",
                      },
                      scale: {
                        duration: 1.4,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    }}
                    className="
                      absolute
                      inset-0
                      h-full
                      min-h-[520px]
                      w-full
                      object-cover
                      sm:min-h-[560px]
                    "
                  />
                )}
              </AnimatePresence>

              {/* Image Overlay */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  z-10
                  bg-gradient-to-t
                  from-[#0B3D2E]/80
                  via-[#0B3D2E]/10
                  to-transparent
                "
              />

              {/* =====================================================
                  SLIDE INDICATORS
              ===================================================== */}

              {images.length > 1 && (
                <div
                  className="
                    absolute
                    bottom-5
                    right-5
                    z-20
                    flex
                    items-center
                    gap-2
                  "
                >
                  {images.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setCurrentImage(index)}
                      aria-label={`Show image ${index + 1}`}
                      aria-current={currentImage === index ? "true" : undefined}
                      className={`
                        h-1.5
                        rounded-full
                        transition-all
                        duration-300
                        ${
                          currentImage === index
                            ? "w-8 bg-[#F97316]"
                            : "w-2 bg-white/60 hover:bg-white"
                        }
                      `}
                    />
                  ))}
                </div>
              )}

              <VisualBadge />
            </div>

            {/* Green Corner */}

            <div
              aria-hidden="true"
              className="
                absolute
                -bottom-3
                -right-3
                z-0
                h-16
                w-16
                rounded-br-2xl
                border-b-2
                border-r-2
                border-[#0A5A42]
              "
            />
          </motion.div>

          {/* =====================================================
              CONTENT
          ===================================================== */}

          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 30,
                  }
            }
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
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              flex
              min-h-[520px]
              flex-col
              justify-center
              sm:min-h-[560px]
              lg:min-h-full
            "
          >
            {/* Small Label */}

            <div className="mb-5 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="
                  h-8
                  w-1
                  rounded-full
                  bg-[#F97316]
                "
              />

              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#0A5A42]
                "
              >
                About DAFA
              </span>
            </div>

            {/* Paragraphs */}

            <div className="space-y-4">
              {aboutDAFAData.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  variants={fadeUp}
                  transition={{
                    duration: 0.6,
                    delay: shouldReduceMotion ? 0 : index * 0.08,
                  }}
                  className="
                      text-[15px]
                      leading-7
                      text-slate-600
                      sm:text-base
                      sm:leading-7
                    "
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Highlights */}

            <div
              className="
                mt-7
                border-t
                border-slate-200
                pt-6
              "
            >
              <div
                className="
                  grid
                  grid-cols-1
                  divide-y
                  divide-slate-200
                  sm:grid-cols-3
                  sm:divide-x
                  sm:divide-y-0
                "
              >
                {aboutDAFAData.highlights.map((item, index) => (
                  <motion.div
                    key={item.number}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                      amount: 0.3,
                    }}
                    variants={fadeUp}
                    transition={{
                      duration: 0.5,
                      delay: shouldReduceMotion ? 0 : index * 0.08,
                    }}
                    className="
                        py-3
                        sm:px-4
                        sm:first:pl-0
                        sm:last:pr-0
                      "
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="
                            text-xs
                            font-black
                            tracking-[0.15em]
                            text-[#F97316]
                          "
                      >
                        {item.number}
                      </span>

                      <span
                        aria-hidden="true"
                        className="
                            h-px
                            w-5
                            bg-slate-300
                          "
                      />
                    </div>

                    <h3
                      className="
                          mt-2
                          text-sm
                          font-bold
                          text-[#0B3D2E]
                        "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                          mt-1.5
                          text-xs
                          leading-5
                          text-slate-500
                        "
                    >
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            PURPOSE
        ===================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={fadeUp}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
          className="
            mt-10
            border-t
            border-slate-200
            pt-6
            sm:mt-12
            sm:pt-7
          "
        >
          <div
            className="
              flex
              items-center
              justify-between
              gap-6
            "
          >
            <div className="max-w-4xl">
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
                {aboutDAFAData.statement.label}
              </p>

              <p
                className="
                  mt-2
                  text-base
                  font-semibold
                  leading-7
                  text-[#0B3D2E]
                  sm:text-lg
                "
              >
                {aboutDAFAData.statement.text}
              </p>
            </div>

            <div
              aria-hidden="true"
              className="
                hidden
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#0B3D2E]
                text-white
                sm:flex
              "
            >
              <FaArrowRight size={13} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =====================================================
   IMAGE BADGE
===================================================== */

function VisualBadge() {
  return (
    <div
      className="
        absolute
        bottom-5
        left-5
        right-5
        z-20
        flex
        items-center
        gap-3
        rounded-xl
        border
        border-white/15
        bg-[#0B3D2E]/80
        p-3
        backdrop-blur-md
        sm:bottom-6
        sm:left-6
        sm:right-auto
        sm:max-w-xs
      "
    >
      <div
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-[#F97316]
          text-white
        "
      >
        <FaShieldAlt size={14} aria-hidden="true" />
      </div>

      <div>
        <p className="text-xs font-bold text-white">Humanitarian Mine Action</p>

        <p className="mt-0.5 text-[10px] text-white/60">
          Protecting communities
        </p>
      </div>
    </div>
  );
}
