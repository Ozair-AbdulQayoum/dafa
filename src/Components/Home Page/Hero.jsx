import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";

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
     SLIDER NAVIGATION
  ========================================================= */

  const handleSlideChange = (index) => {
    setCurrentImage(index);
  };

  const handleKeyDown = (event) => {
    if (heroImages.length <= 1) return;

    if (event.key === "ArrowRight") {
      setCurrentImage((previous) => (previous + 1) % heroImages.length);
    }

    if (event.key === "ArrowLeft") {
      setCurrentImage(
        (previous) => (previous - 1 + heroImages.length) % heroImages.length,
      );
    }
  };

  return (
    <section
      className="
        relative
        isolate
        min-h-[calc(100svh-76px)]
        overflow-hidden
        bg-[#052E23]
        font-[Poppins]
      "
      aria-label="DAFA introduction"
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}

      <div
        className="absolute inset-0 -z-20"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={currentHero.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 1,
              ease: "easeInOut",
            }}
            className="absolute inset-0"
          >
            <motion.img
              src={currentHero.image}
              alt={currentHero.alt}
              initial={{
                scale: shouldReduceMotion ? 1 : 1.035,
              }}
              animate={{
                scale: 1,
              }}
              transition={{
                duration: shouldReduceMotion ? 0 : 7,
                ease: "linear",
              }}
              className="
                h-full
                w-full
                object-cover
                object-center
              "
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* =====================================================
          MAIN OVERLAY
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          -z-10
          bg-gradient-to-r
          from-[#021812]/95
          via-[#052E23]/80
          to-[#052E23]/30
        "
      />

      {/* =====================================================
          MOBILE OVERLAY
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          -z-10
          bg-gradient-to-t
          from-[#021812]/95
          via-[#021812]/20
          to-[#021812]/35
          lg:hidden
        "
      />

      {/* =====================================================
          BOTTOM FADE
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          absolute
          inset-x-0
          bottom-0
          -z-10
          h-40
          bg-gradient-to-t
          from-[#021812]
          to-transparent
        "
      />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[calc(100svh-76px)]
          w-full
          max-w-7xl
          items-center
          px-5
          pb-20
          pt-32
          sm:px-8
          sm:pb-24
          sm:pt-36
          lg:px-10
          lg:pb-28
          lg:pt-40
        "
      >
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            w-full
            max-w-3xl
            lg:max-w-4xl
          "
        >
          {/* =================================================
              MAIN HEADING
          ================================================== */}

          <motion.h1
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.75,
              delay: shouldReduceMotion ? 0 : 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              max-w-4xl
              text-[2.9rem]
              font-extrabold
              leading-[0.98]
              tracking-[-0.04em]
              text-white
              sm:text-6xl
              md:text-7xl
              lg:text-[5rem]
              xl:text-[5.5rem]
            "
          >
            <span className="block">
              <span className="text-[#FBBF24]">{heroData.years}</span>{" "}
              <span className="text-white">{heroData.yearsLabel}</span>
            </span>

            <span className="mt-2 block sm:mt-3">{heroData.title}</span>

            <span className="mt-1 block text-[#A7F3D0]">
              {heroData.highlight}
            </span>
          </motion.h1>

          {/* =================================================
              CTA BUTTONS
          ================================================== */}

          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.65,
              delay: shouldReduceMotion ? 0 : 0.2,
            }}
            className="
              mt-8
              flex
              flex-col
              gap-3
              sm:mt-9
              sm:flex-row
            "
          >
            {/* PRIMARY CTA */}

            <Link
              to="/projects"
              className="
                group
                inline-flex
                min-h-[52px]
                items-center
                justify-center
                gap-3
                rounded-xl
                bg-[#F97316]
                px-6
                text-sm
                font-bold
                text-white
                shadow-lg
                shadow-black/20
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#EA580C]
                hover:shadow-xl
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#FDBA74]
                focus-visible:ring-offset-2
                focus-visible:ring-offset-[#052E23]
                sm:px-7
              "
            >
              {heroData.buttons.primary}

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

            {/* SECONDARY CTA */}

            <Link
              to="/about"
              className="
                inline-flex
                min-h-[52px]
                items-center
                justify-center
                rounded-xl
                border
                border-white/30
                bg-white/10
                px-6
                text-sm
                font-bold
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-white/50
                hover:bg-white/15
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-white/70
                focus-visible:ring-offset-2
                focus-visible:ring-offset-[#052E23]
                sm:px-7
              "
            >
              {heroData.buttons.secondary}
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* =====================================================
          SLIDER CONTROLS
      ====================================================== */}

      {heroImages.length > 1 && (
        <div
          className="
            absolute
            bottom-[68px]
            right-5
            z-30
            flex
            items-center
            gap-1
            sm:right-8
            lg:right-10
          "
          role="group"
          aria-label="Hero image navigation"
        >
          {heroImages.map((image, index) => {
            const isActive = currentImage === index;

            return (
              <button
                key={image.id}
                type="button"
                onClick={() => handleSlideChange(index)}
                onFocus={() => setIsPaused(true)}
                onBlur={() => setIsPaused(false)}
                aria-label={`Show slide ${index + 1}`}
                aria-current={isActive ? "true" : undefined}
                className="
                  flex
                  min-h-9
                  min-w-9
                  items-center
                  justify-center
                  rounded-full
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-white/80
                  focus-visible:ring-offset-1
                  focus-visible:ring-offset-[#052E23]
                "
              >
                <span
                  className={`
                    block
                    h-1.5
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "w-8 bg-[#F97316]"
                        : "w-2 bg-white/40 hover:bg-white/75"
                    }
                  `}
                />
              </button>
            );
          })}
        </div>
      )}

      {/* =====================================================
          BOTTOM INFORMATION BAR
      ====================================================== */}

      <motion.div
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.6,
          delay: shouldReduceMotion ? 0 : 0.45,
        }}
        className="
          absolute
          bottom-0
          left-0
          right-0
          z-20
          border-t
          border-white/10
          bg-[#021812]/45
          backdrop-blur-md
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            items-center
            justify-between
            px-5
            py-3
            sm:px-8
            lg:px-10
          "
        >
          <div className="flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="
                h-1.5
                w-1.5
                shrink-0
                rounded-full
                bg-[#F97316]
              "
            />

            <p
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.14em]
                text-white/65
                sm:text-[10px]
                sm:tracking-[0.17em]
                md:text-xs
              "
            >
              {heroData.bottomBar.label}
            </p>
          </div>

          <p
            className="
              hidden
              text-xs
              text-white/40
              md:block
            "
          >
            {heroData.bottomBar.tagline}
          </p>

          <span
            aria-hidden="true"
            className="
              text-[#F97316]
              opacity-80
            "
          >
            <FaChevronDown size={9} />
          </span>
        </div>
      </motion.div>
    </section>
  );
}
