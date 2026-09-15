import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { heroData, heroImages } from "../../Data File/Stories Data/Hero";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // =========================================================
  // AUTO SLIDER — changes every 6 seconds
  // =========================================================
  useEffect(() => {
    if (shouldReduceMotion || isPaused || heroImages.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [shouldReduceMotion, isPaused]);

  // =========================================================
  // MANUAL CONTROLS
  // =========================================================
  const goToPrevious = () => {
    setActiveIndex(
      (current) => (current - 1 + heroImages.length) % heroImages.length,
    );
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % heroImages.length);
  };

  return (
    <section
      aria-labelledby="stories-hero-heading"
      className="
        relative isolate w-full overflow-hidden
        bg-[#06281E] text-white
        min-h-[520px]
        sm:min-h-[590px]
        lg:min-h-[650px]
      "
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* =====================================================
          BACKGROUND IMAGE SLIDER
      ====================================================== */}

      <div className="absolute inset-0">
        {heroImages.map((image, index) => {
          const isActive = activeIndex === index;

          return (
            <motion.img
              key={image.src}
              src={image.src}
              alt=""
              aria-hidden="true"
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0,
                scale: isActive && !shouldReduceMotion ? 1.08 : 1,
              }}
              transition={{
                opacity: {
                  duration: 1.2,
                  ease: "easeInOut",
                },
                scale: {
                  duration: 6,
                  ease: "linear",
                },
              }}
              className="
                absolute inset-0
                h-full w-full
                object-cover object-center
              "
            />
          );
        })}
      </div>

      {/* =====================================================
          DARK GREEN OVERLAY
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          absolute inset-0
          bg-[#06281E]/35
        "
      />

      {/* Left readability gradient */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0
          bg-gradient-to-r
          from-[#031F18]/70
          via-[#06281E]/30
          to-transparent
        "
      />

      {/* Bottom gradient */}
      <div
        aria-hidden="true"
        className="
          absolute inset-x-0 bottom-0
          h-[55%]
          bg-gradient-to-t
          from-[#031F18]/80
          via-[#031F18]/25
          to-transparent
        "
      />

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div
        className="
          relative z-10
          flex min-h-[520px]
          items-center justify-center
          px-5 py-24
          text-center
          sm:min-h-[590px]
          sm:px-8
          lg:min-h-[650px]
          lg:px-10
          xl:px-12
        "
      >
        <motion.div
          initial={
            shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            w-full max-w-4xl
          "
        >
          {/* Eyebrow */}
          <div className="mb-5 flex items-center justify-center gap-3 sm:mb-6">
            <span
              aria-hidden="true"
              className="
                h-[2px] w-8
                rounded-full
                bg-[#F97316]
                sm:w-10
              "
            />

            <span
              className="
                text-[9px]
                font-extrabold
                uppercase
                tracking-[0.22em]
                text-[#A7F3D0]
                sm:text-[10px]
                md:text-xs
              "
            >
              {heroData.eyebrow}
            </span>

            <span
              aria-hidden="true"
              className="
                h-[2px] w-8
                rounded-full
                bg-[#F97316]
                sm:w-10
              "
            />
          </div>

          {/* Heading */}
          <h1
            id="stories-hero-heading"
            className="
              text-4xl
              font-extrabold
              leading-[1.02]
              tracking-[-0.045em]
              text-white
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            {heroData.title}
          </h1>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-white/80
              sm:mt-6
              sm:text-base
              sm:leading-8
              lg:text-lg
            "
          >
            {heroData.description}
          </p>

          {/* Orange Accent */}
          <motion.div
            initial={
              shouldReduceMotion
                ? { width: 64, opacity: 1 }
                : { width: 0, opacity: 0 }
            }
            animate={{
              width: 64,
              opacity: 1,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              delay: shouldReduceMotion ? 0 : 0.35,
            }}
            className="
              mx-auto
              mt-6
              h-[3px]
              rounded-full
              bg-[#F97316]
            "
          />
        </motion.div>
      </div>

      {/* =====================================================
          PREVIOUS BUTTON
      ====================================================== */}

      {!shouldReduceMotion && heroImages.length > 1 && (
        <button
          type="button"
          onClick={goToPrevious}
          aria-label="Previous story image"
          className="
            absolute
            left-4
            top-1/2
            z-20
            hidden
            h-11
            w-11
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            bg-[#031F18]/35
            text-xl
            text-white
            backdrop-blur-md
            transition-all
            duration-300
            hover:border-[#F97316]/60
            hover:bg-[#031F18]/70
            hover:text-[#F97316]
            focus:outline-none
            focus:ring-2
            focus:ring-[#F97316]
            sm:flex
            lg:left-7
          "
        >
          ←
        </button>
      )}

      {/* =====================================================
          NEXT BUTTON
      ====================================================== */}

      {!shouldReduceMotion && heroImages.length > 1 && (
        <button
          type="button"
          onClick={goToNext}
          aria-label="Next story image"
          className="
            absolute
            right-4
            top-1/2
            z-20
            hidden
            h-11
            w-11
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            bg-[#031F18]/35
            text-xl
            text-white
            backdrop-blur-md
            transition-all
            duration-300
            hover:border-[#F97316]/60
            hover:bg-[#031F18]/70
            hover:text-[#F97316]
            focus:outline-none
            focus:ring-2
            focus:ring-[#F97316]
            sm:flex
            lg:right-7
          "
        >
          →
        </button>
      )}

      {/* =====================================================
          SLIDER INDICATORS
      ====================================================== */}

      {heroImages.length > 1 && (
        <div
          className="
            absolute
            bottom-7
            left-1/2
            z-20
            flex
            -translate-x-1/2
            items-center
            gap-2
          "
        >
          {heroImages.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show story image ${index + 1}`}
              aria-current={activeIndex === index ? "true" : undefined}
              className="
                group
                flex
                h-8
                items-center
                justify-center
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#F97316]
              "
            >
              <span
                className={`
                  block
                  h-[3px]
                  rounded-full
                  transition-all
                  duration-500
                  ${
                    activeIndex === index
                      ? "w-9 bg-[#F97316]"
                      : "w-5 bg-white/45 group-hover:bg-white/80"
                  }
                `}
              />
            </button>
          ))}
        </div>
      )}

      {/* =====================================================
          BOTTOM EDGE
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-10
          bg-gradient-to-t
          from-[#06281E]/30
          to-transparent
        "
      />
    </section>
  );
}
