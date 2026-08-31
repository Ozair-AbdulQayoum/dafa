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
  const shouldReduceMotion = useReducedMotion();

  // =====================================================
  // AUTO SLIDER
  // =====================================================

  useEffect(() => {
    if (heroImages.length <= 1 || shouldReduceMotion) return;

    const interval = setInterval(() => {
      setCurrentImage((previous) => (previous + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  const currentHero = heroImages[currentImage];

  return (
    <section
      className="
        relative
        isolate
        min-h-[92vh]
        overflow-hidden
        bg-[#052E23]
        sm:min-h-[94vh]
      "
      aria-label="DAFA introduction"
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}

      <div className="absolute inset-0 -z-20">
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={currentHero.id}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0 }}
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
              initial={shouldReduceMotion ? { scale: 1 } : { scale: 1.06 }}
              animate={{ scale: 1 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 6,
                ease: "linear",
              }}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* =====================================================
          PRIMARY OVERLAY
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          -z-10
          bg-gradient-to-r
          from-[#021812]
          via-[#052E23]/90
          to-[#052E23]/20
        "
      />

      {/* =====================================================
          MOBILE OVERLAY
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          -z-10
          bg-gradient-to-t
          from-[#021812]
          via-transparent
          to-[#021812]/30
          lg:hidden
        "
      />

      {/* =====================================================
          BOTTOM FADE
      ====================================================== */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          -z-10
          h-48
          bg-gradient-to-t
          from-[#021812]
          to-transparent
        "
      />

      {/* =====================================================
          SUBTLE DECORATION
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          hidden
          h-[28rem]
          w-[28rem]
          rounded-full
          border
          border-white/10
          lg:block
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          hidden
          h-56
          w-56
          rounded-full
          border
          border-white/10
          lg:block
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-20
          left-0
          hidden
          h-64
          w-64
          rounded-full
          bg-[#087B5A]/20
          blur-3xl
          lg:block
        "
      />

      {/* =====================================================
          LEFT ACCENT LINE
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          absolute
          left-0
          top-1/2
          hidden
          h-px
          w-16
          -translate-y-1/2
          bg-[#F97316]
          lg:block
          xl:w-24
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
          min-h-[92vh]
          max-w-7xl
          items-center
          px-5
          pb-28
          pt-32
          sm:min-h-[94vh]
          sm:px-8
          sm:pb-32
          lg:px-10
          lg:pb-36
        "
      >
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full max-w-4xl"
        >
          {/* =================================================
              EYEBROW
          ================================================== */}

          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
            className="mb-6 flex items-center gap-3"
          >
            <span
              aria-hidden="true"
              className="h-[2px] w-8 rounded-full bg-[#F97316] sm:w-10"
            />

            <span
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#FDBA74]
                sm:text-xs
                sm:tracking-[0.22em]
              "
            >
              {heroData.eyebrow}
            </span>
          </motion.div>

          {/* =================================================
              MAIN HEADING
          ================================================== */}

          <motion.h1
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              delay: shouldReduceMotion ? 0 : 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              max-w-4xl
              text-[3.25rem]
              font-extrabold
              leading-[0.94]
              tracking-[-0.045em]
              text-white
              sm:text-6xl
              md:text-7xl
              lg:text-[5.5rem]
              xl:text-[6.2rem]
            "
          >
            <span className="block">
              <span className="text-[#FBBF24]">{heroData.years}</span>{" "}
              <span className="text-white">{heroData.yearsLabel}</span>
            </span>

            <span className="mt-3 block">{heroData.title}</span>

            <span className="mt-1 block text-[#A7F3D0]">
              {heroData.highlight}
            </span>
          </motion.h1>

          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <motion.p
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.7,
              delay: shouldReduceMotion ? 0 : 0.25,
            }}
            className="
              mt-7
              max-w-2xl
              text-base
              leading-7
              text-white/80
              sm:mt-8
              sm:text-lg
              sm:leading-8
              lg:text-xl
              lg:leading-9
            "
          >
            {heroData.description}
          </motion.p>

          {/* =================================================
              CTA BUTTONS
          ================================================== */}

          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.7,
              delay: shouldReduceMotion ? 0 : 0.4,
            }}
            className="
              mt-8
              flex
              flex-col
              gap-3
              sm:flex-row
              sm:items-center
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
                focus:ring-2
                focus:ring-[#FDBA74]
                focus:ring-offset-2
                focus:ring-offset-[#052E23]
                sm:px-7
              "
            >
              {heroData.buttons.primary}

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
                border-white/25
                bg-white/10
                px-6
                text-sm
                font-bold
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-white/40
                hover:bg-white/15
                focus:outline-none
                focus:ring-2
                focus:ring-white/60
                focus:ring-offset-2
                focus:ring-offset-[#052E23]
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
            bottom-20
            right-5
            z-20
            flex
            items-center
            gap-2
            sm:bottom-20
            sm:right-8
            lg:right-10
          "
          aria-label="Hero image navigation"
        >
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
                  group
                  flex
                  min-h-8
                  min-w-8
                  items-center
                  justify-center
                  rounded-full
                  focus:outline-none
                  focus:ring-2
                  focus:ring-white/70
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
                        : "w-2 bg-white/40 group-hover:bg-white/70"
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
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.7,
          delay: shouldReduceMotion ? 0 : 0.7,
        }}
        className="
          absolute
          bottom-0
          left-0
          right-0
          z-20
          border-t
          border-white/10
          bg-[#021812]/40
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
            py-3.5
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
                rounded-full
                bg-[#F97316]
                shadow-[0_0_8px_rgba(249,115,22,0.8)]
              "
            />

            <p
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.15em]
                text-white/65
                sm:text-[10px]
                sm:tracking-[0.18em]
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

          <div aria-hidden="true" className="text-[#F97316]">
            <FaChevronDown size={10} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
