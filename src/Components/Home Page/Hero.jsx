import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import {
  heroData,
  heroImages,
} from "../../Components/Data File/Main Page Data/Herodata";

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const shouldReduceMotion = useReducedMotion();
  const currentHero = heroImages[currentImage];

  /* =========================================================
     AUTO SLIDER
  ========================================================= */

  useEffect(() => {
    if (heroImages.length <= 1 || shouldReduceMotion || isPaused) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentImage((previous) => (previous + 1) % heroImages.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [shouldReduceMotion, isPaused]);

  /* =========================================================
     SLIDER CONTROLS
  ========================================================= */

  const handlePrevious = () => {
    setCurrentImage(
      (previous) => (previous - 1 + heroImages.length) % heroImages.length,
    );
  };

  const handleNext = () => {
    setCurrentImage((previous) => (previous + 1) % heroImages.length);
  };

  const handleKeyDown = (event) => {
    if (heroImages.length <= 1) return;

    if (event.key === "ArrowRight") {
      handleNext();
    }

    if (event.key === "ArrowLeft") {
      handlePrevious();
    }
  };

  return (
    <section
      aria-label="DAFA introduction"
      onKeyDown={handleKeyDown}
      tabIndex={-1}
      className="
        relative
        isolate
        overflow-hidden
        bg-[#F7FBF8]
        font-[Poppins]
        text-[#0F172A]
      "
    >
      {/* =====================================================
          SUBTLE BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          -top-40
          -z-10
          h-96
          w-96
          rounded-full
          bg-[#0B3D2E]/[0.035]
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-40
          -left-40
          -z-10
          h-96
          w-96
          rounded-full
          bg-[#F97316]/[0.025]
          blur-3xl
        "
      />

      {/* =====================================================
          HERO CONTAINER
      ====================================================== */}

      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-5
          pb-14
          pt-24
          sm:px-8
          sm:pb-16
          sm:pt-28
          lg:px-10
          lg:pb-20
          lg:pt-32
          xl:pt-36
        "
      >
        <div
          className="
            grid
            w-full
            items-start
            gap-10
            lg:grid-cols-[0.92fr_1.08fr]
            lg:gap-14
            xl:gap-20
          "
        >
          {/* =================================================
              LEFT — TEXT CONTENT
          ================================================== */}

          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              order-1
              pt-1
              lg:-mt-10
              xl:-mt-12
            "
          >
            {/* EYEBROW */}

            <motion.div
              initial={
                shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.5,
              }}
              className="
                mb-5
                flex
                items-center
                gap-3
                sm:mb-6
              "
            >
              <span
                aria-hidden="true"
                className="
                  h-px
                  w-9
                  bg-[#F97316]
                  sm:w-11
                "
              />

              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.17em]
                  text-[#0A5A42]
                  sm:text-xs
                  sm:tracking-[0.19em]
                "
              >
                {heroData.eyebrow}
              </p>
            </motion.div>

            {/* HEADLINE */}

            <motion.h1
              initial={
                shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.65,
                delay: shouldReduceMotion ? 0 : 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                max-w-xl
                text-[2.35rem]
                font-extrabold
                leading-[1.06]
                tracking-[-0.04em]
                text-[#0F172A]
                sm:text-5xl
                md:text-[3.35rem]
                lg:text-[3.45rem]
                xl:text-[3.85rem]
              "
            >
              {heroData.title}

              <span className="mt-1 block text-[#0B3D2E]">
                {heroData.highlight}
              </span>
            </motion.h1>

            {/* DESCRIPTION */}

            <motion.p
              initial={
                shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.55,
                delay: shouldReduceMotion ? 0 : 0.16,
              }}
              className="
                mt-5
                max-w-lg
                text-[14px]
                leading-6
                text-slate-600
                sm:mt-6
                sm:text-base
                sm:leading-7
              "
            >
              {heroData.description}
            </motion.p>

            {/* =================================================
                CTA BUTTONS
            ================================================== */}

            <motion.div
              initial={
                shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.55,
                delay: shouldReduceMotion ? 0 : 0.23,
              }}
              className="
                mt-7
                flex
                flex-col
                gap-3
                sm:flex-row
              "
            >
              {/* PRIMARY CTA */}

              <Link
                to="/projects"
                className="
                  group
                  inline-flex
                  min-h-[50px]
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-[#0B3D2E]
                  px-6
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_10px_25px_rgba(11,61,46,0.15)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#0A5A42]
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#F97316]
                  focus-visible:ring-offset-2
                "
              >
                {heroData.buttons.primary}

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

              {/* SECONDARY CTA */}

              <Link
                to="/about"
                className="
                  inline-flex
                  min-h-[50px]
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[#0B3D2E]/20
                  bg-white
                  px-6
                  text-sm
                  font-bold
                  text-[#0B3D2E]
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-[#0B3D2E]/35
                  hover:bg-[#F0F7F3]
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#F97316]
                  focus-visible:ring-offset-2
                "
              >
                {heroData.buttons.secondary}
              </Link>
            </motion.div>
          </motion.div>

          {/* =================================================
              RIGHT — HERO IMAGE
          ================================================== */}

          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -18 }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              delay: shouldReduceMotion ? 0 : 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              order-2
              relative
              w-full
              lg:-mt-8
              xl:-mt-10
            "
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocusCapture={() => setIsPaused(true)}
            onBlurCapture={() => setIsPaused(false)}
          >
            {/* IMAGE FRAME */}

            <div
              className="
                relative
                overflow-hidden
                rounded-2xl
                bg-[#0B3D2E]
                shadow-[0_25px_55px_rgba(15,23,42,0.13)]
                sm:rounded-3xl
              "
            >
              <div
                className="
                  relative
                  aspect-[4/3]
                  w-full
                  overflow-hidden
                  sm:aspect-[5/4]
                  lg:aspect-[4/3]
                "
              >
                <AnimatePresence initial={false} mode="sync">
                  <motion.img
                    key={currentHero.id}
                    src={currentHero.image}
                    alt={currentHero.alt}
                    initial={{
                      opacity: 0,
                      scale: shouldReduceMotion ? 1 : 1.025,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    transition={{
                      opacity: {
                        duration: shouldReduceMotion ? 0 : 0.7,
                        ease: "easeInOut",
                      },
                      scale: {
                        duration: shouldReduceMotion ? 0 : 7,
                        ease: "linear",
                      },
                    }}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                      object-center
                    "
                  />
                </AnimatePresence>

                {/* IMAGE FADE */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#052E23]/40
                    via-transparent
                    to-transparent
                  "
                />
              </div>

              {/* =================================================
                  IMAGE CONTROLS
              ================================================== */}

              <div
                className="
                  absolute
                  bottom-4
                  left-4
                  right-4
                  flex
                  items-center
                  justify-between
                  gap-3
                  sm:bottom-5
                  sm:left-5
                  sm:right-5
                "
              >
                {/* LABEL */}

                <div
                  className="
                    rounded-lg
                    border
                    border-white/20
                    bg-[#0B3D2E]/85
                    px-3
                    py-2
                    backdrop-blur-sm
                  "
                >
                  <p
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      text-white
                      sm:text-[10px]
                    "
                  >
                    {heroData.bottomBar.label}
                  </p>
                </div>

                {/* SLIDER CONTROLS */}

                {heroImages.length > 1 && (
                  <div
                    className="
                      flex
                      items-center
                      gap-1
                      rounded-lg
                      border
                      border-white/20
                      bg-black/20
                      p-1
                      backdrop-blur-sm
                    "
                    role="group"
                    aria-label="Hero image navigation"
                  >
                    {/* PREVIOUS */}

                    <button
                      type="button"
                      onClick={handlePrevious}
                      aria-label="Previous hero image"
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-md
                        text-white
                        transition-colors
                        hover:bg-white/15
                        focus:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-white
                      "
                    >
                      <FaChevronLeft size={9} />
                    </button>

                    {/* INDICATORS */}

                    <div className="flex items-center gap-1 px-1">
                      {heroImages.map((image, index) => {
                        const isActive = currentImage === index;

                        return (
                          <button
                            key={image.id}
                            type="button"
                            onClick={() => setCurrentImage(index)}
                            aria-label={`Show slide ${index + 1}`}
                            aria-current={isActive ? "true" : undefined}
                            className="
                              flex
                              h-6
                              min-w-3
                              items-center
                              justify-center
                              focus:outline-none
                              focus-visible:ring-2
                              focus-visible:ring-white
                            "
                          >
                            <span
                              className={`
                                block
                                h-1
                                rounded-full
                                transition-all
                                duration-300
                                ${
                                  isActive
                                    ? "w-6 bg-[#F97316]"
                                    : "w-2 bg-white/50 hover:bg-white/80"
                                }
                              `}
                            />
                          </button>
                        );
                      })}
                    </div>

                    {/* NEXT */}

                    <button
                      type="button"
                      onClick={handleNext}
                      aria-label="Next hero image"
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-md
                        text-white
                        transition-colors
                        hover:bg-white/15
                        focus:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-white
                      "
                    >
                      <FaChevronRight size={9} />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* DECORATIVE ACCENT */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -bottom-3
                -right-3
                -z-10
                h-20
                w-20
                rounded-2xl
                border
                border-[#F97316]/20
                bg-[#F97316]/5
                sm:-bottom-5
                sm:-right-5
                sm:h-24
                sm:w-24
              "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
