import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import heroData from "../../Components/Data File/Project Data/HeroData";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const EyebrowIcon = heroData.eyebrowIcon;

  const images = heroData.images || [];

  const [currentImage, setCurrentImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  /* =====================================================
     AUTO SLIDER — EVERY 6 SECONDS
  ===================================================== */

  useEffect(() => {
    if (shouldReduceMotion || isPaused || images.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [shouldReduceMotion, isPaused, images.length]);

  /* =====================================================
     PREVIOUS IMAGE
  ===================================================== */

  const goToPrevious = () => {
    if (!images.length) return;

    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  /* =====================================================
     NEXT IMAGE
  ===================================================== */

  const goToNext = () => {
    if (!images.length) return;

    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return (
    <section
      aria-labelledby="projects-hero-title"
      className="
        relative
        min-h-[620px]
        overflow-hidden
        bg-[#06281E]
        sm:min-h-[660px]
        lg:min-h-[700px]
      "
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* =====================================================
          BACKGROUND IMAGE SLIDER
      ===================================================== */}

      <div className="absolute inset-0">
        <AnimatePresence initial={false} mode="sync">
          {images.length > 0 && (
            <motion.img
              key={currentImage}
              src={images[currentImage]}
              alt=""
              aria-hidden="true"
              initial={
                shouldReduceMotion
                  ? {
                      opacity: 1,
                      scale: 1,
                    }
                  : {
                      opacity: 0,
                      scale: 1.06,
                    }
              }
              animate={{
                opacity: 1,
                scale: shouldReduceMotion ? 1 : 1,
              }}
              exit={
                shouldReduceMotion
                  ? {
                      opacity: 0,
                    }
                  : {
                      opacity: 0,
                      scale: 1.02,
                    }
              }
              transition={{
                opacity: {
                  duration: shouldReduceMotion ? 0 : 1.1,
                  ease: "easeInOut",
                },
                scale: {
                  duration: shouldReduceMotion ? 0 : 6,
                  ease: "easeOut",
                },
              }}
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
              "
            />
          )}
        </AnimatePresence>
      </div>

      {/* =====================================================
          LIGHT DARK GREEN OVERLAY
          Around 30%
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          bg-[#06281E]/30
        "
      />

      {/* =====================================================
          LEFT TEXT READABILITY
          Kept stronger only where text sits
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#031F18]/65
          via-[#06281E]/35
          to-transparent
        "
      />

      {/* =====================================================
          BOTTOM DEPTH
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          absolute
          inset-x-0
          bottom-0
          h-1/2
          bg-gradient-to-t
          from-[#031F18]/65
          via-[#031F18]/20
          to-transparent
        "
      />

      {/* =====================================================
          MOBILE READABILITY
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-transparent
          via-transparent
          to-[#031F18]/55
          lg:hidden
        "
      />

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[620px]
          max-w-7xl
          items-center
          px-5
          py-24
          sm:min-h-[660px]
          sm:px-8
          sm:py-28
          lg:min-h-[700px]
          lg:px-10
          lg:py-32
          xl:px-12
        "
      >
        <motion.div
          initial={
            shouldReduceMotion
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: 25,
                }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            max-w-4xl
            pt-8
            text-left
            sm:pt-10
          "
        >
          {/* =================================================
              EYEBROW
          ================================================= */}

          <motion.div
            initial={
              shouldReduceMotion
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {
                    opacity: 0,
                    x: -15,
                  }
            }
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.55,
              delay: shouldReduceMotion ? 0 : 0.1,
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
                h-[2px]
                w-8
                rounded-full
                bg-[#F97316]
                sm:w-10
              "
            />

            <span
              className="
                text-[10px]
                font-extrabold
                uppercase
                tracking-[0.2em]
                text-white/90
                sm:text-xs
              "
            >
              {heroData.eyebrow}
            </span>
          </motion.div>

          {/* =================================================
              MAIN HEADING
          ================================================= */}

          <motion.h1
            id="projects-hero-title"
            initial={
              shouldReduceMotion
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: 20,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.7,
              delay: shouldReduceMotion ? 0 : 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              max-w-4xl
              text-4xl
              font-extrabold
              leading-[1.03]
              tracking-[-0.045em]
              text-white
              sm:text-5xl
              md:text-6xl
              lg:text-[4.5rem]
            "
          >
            {heroData.title}

            <span className="block text-[#A7F3D0]">
              {heroData.highlightedTitle}
            </span>
          </motion.h1>

          {/* =================================================
              SUBTITLE
          ================================================= */}

          <motion.p
            initial={
              shouldReduceMotion
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: 15,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              delay: shouldReduceMotion ? 0 : 0.25,
            }}
            className="
              mt-5
              max-w-2xl
              text-base
              font-semibold
              leading-7
              text-white
              sm:mt-6
              sm:text-lg
              sm:leading-8
            "
          >
            {heroData.subtitle}
          </motion.p>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <motion.p
            initial={
              shouldReduceMotion
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: 15,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              delay: shouldReduceMotion ? 0 : 0.35,
            }}
            className="
              mt-4
              max-w-2xl
              text-sm
              leading-7
              text-white/80
              sm:text-base
              sm:leading-7
            "
          >
            {heroData.description}
          </motion.p>
        </motion.div>
      </div>

      {/* =====================================================
          SLIDER NAVIGATION
      ===================================================== */}

      {images.length > 1 && (
        <div
          className="
            absolute
            bottom-7
            left-5
            right-5
            z-20
            flex
            items-center
            justify-between
            sm:bottom-9
            sm:left-8
            sm:right-8
            lg:left-10
            lg:right-10
            xl:left-12
            xl:right-12
          "
        >
          {/* Counter */}

          <div className="flex items-center gap-3">
            <span
              className="
                text-xs
                font-bold
                tracking-[0.12em]
                text-white
              "
            >
              {String(currentImage + 1).padStart(2, "0")}
            </span>

            <span
              aria-hidden="true"
              className="
                h-px
                w-8
                bg-white/40
              "
            />

            <span
              className="
                text-[10px]
                font-semibold
                tracking-[0.12em]
                text-white/60
              "
            >
              {String(images.length).padStart(2, "0")}
            </span>
          </div>

          {/* Previous / Next */}

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Previous project image"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/25
                bg-[#06281E]/30
                text-white
                backdrop-blur-sm
                transition-all
                duration-300
                hover:border-[#F97316]
                hover:bg-[#F97316]
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#F97316]
                focus-visible:ring-offset-2
                focus-visible:ring-offset-[#06281E]
              "
            >
              <FaChevronLeft aria-hidden="true" className="text-[10px]" />
            </button>

            <button
              type="button"
              onClick={goToNext}
              aria-label="Next project image"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/25
                bg-[#06281E]/30
                text-white
                backdrop-blur-sm
                transition-all
                duration-300
                hover:border-[#F97316]
                hover:bg-[#F97316]
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#F97316]
                focus-visible:ring-offset-2
                focus-visible:ring-offset-[#06281E]
              "
            >
              <FaChevronRight aria-hidden="true" className="text-[10px]" />
            </button>
          </div>
        </div>
      )}

      {/* =====================================================
          SLIDE INDICATORS
      ===================================================== */}

      {images.length > 1 && (
        <div
          className="
            absolute
            bottom-10
            left-1/2
            z-20
            hidden
            -translate-x-1/2
            items-center
            gap-2
            md:flex
          "
          role="tablist"
          aria-label="Project hero slides"
        >
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentImage(index)}
              role="tab"
              aria-label={`Show project image ${index + 1}`}
              aria-selected={currentImage === index}
              className="
                group
                flex
                h-6
                items-center
                justify-center
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#F97316]
              "
            >
              <span
                className={`
                  h-[2px]
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    currentImage === index
                      ? "w-8 bg-[#F97316]"
                      : "w-4 bg-white/40 group-hover:bg-white/80"
                  }
                `}
              />
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
