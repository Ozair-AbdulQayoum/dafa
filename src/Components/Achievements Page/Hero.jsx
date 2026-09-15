import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import impactHeroData from "../../Components/Data File/Achievements Data/HeroData";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="impact-hero-heading"
      className="
        relative
        isolate
        min-h-[420px]
        w-full
        overflow-hidden
        sm:min-h-[500px]
        lg:min-h-[560px]
      "
    >
      {/* =====================================================
          FULL-WIDTH BACKGROUND IMAGE
      ====================================================== */}

      <motion.img
        src={impactHeroData.image}
        alt=""
        aria-hidden="true"
        initial={shouldReduceMotion ? { scale: 1 } : { scale: 1.04 }}
        animate={{ scale: 1 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 1.2,
          ease: [0.22, 1, 0.36, 1],
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

      {/* =====================================================
          OVERLAY
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          bg-[#06281E]/40
        "
      />

      {/* Left-to-Right Gradient */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#031F18]/60
          via-[#06281E]/25
          to-transparent
        "
      />

      {/* Bottom Gradient */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-x-0
          bottom-0
          h-1/2
          bg-gradient-to-t
          from-[#06281E]/65
          via-[#06281E]/15
          to-transparent
        "
      />

      {/* Mobile Bottom Protection */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-x-0
          bottom-0
          h-32
          bg-gradient-to-t
          from-[#06281E]/45
          to-transparent
          sm:hidden
        "
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          flex
          min-h-[420px]
          w-full
          items-center
          justify-center
          px-5
          py-20
          text-center
          sm:min-h-[500px]
          sm:px-8
          sm:py-24
          lg:min-h-[560px]
          lg:px-10
        "
      >
        <motion.div
          initial={
            shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full max-w-4xl"
        >
          {/* Eyebrow */}
          <div className="mb-5 flex items-center justify-center gap-3 sm:mb-6">
            <span
              aria-hidden="true"
              className="
                h-[2px]
                w-8
                shrink-0
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
                tracking-[0.22em]
                text-[#A7F3D0]
                sm:text-xs
              "
            >
              {impactHeroData.eyebrow}
            </span>

            <span
              aria-hidden="true"
              className="
                h-[2px]
                w-8
                shrink-0
                rounded-full
                bg-[#F97316]
                sm:w-10
              "
            />
          </div>

          {/* Main Heading */}
          <h1
            id="impact-hero-heading"
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
            {impactHeroData.title}
          </h1>

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
              delay: shouldReduceMotion ? 0 : 0.25,
            }}
            className="
              mx-auto
              mt-6
              h-[3px]
              rounded-full
              bg-[#F97316]
              sm:mt-7
            "
          />
        </motion.div>
      </div>
    </section>
  );
}
