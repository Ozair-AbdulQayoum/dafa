import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";

import {
  heroData,
  heroImages,
} from "../../Components/Data File/Main Page Data/Herodata";
export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  // =====================================================
  // AUTO SLIDER
  // CHANGE EVERY 5 SECONDS
  // =====================================================

  useEffect(() => {
    if (heroImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImage((previous) => {
        return (previous + 1) % heroImages.length;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[#052E23] sm:min-h-[94vh]">
      {/* =====================================================
          BACKGROUND IMAGE SLIDER
      ====================================================== */}

      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={heroImages[currentImage].id}
            initial={{
              x: "100%",
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "-100%",
            }}
            transition={{
              duration: 1.2,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="absolute inset-0"
          >
            <motion.img
              src={heroImages[currentImage].image}
              alt={heroImages[currentImage].alt}
              initial={{
                scale: 1.08,
              }}
              animate={{
                scale: 1,
              }}
              transition={{
                duration: 5,
                ease: "linear",
              }}
              className="
                h-full
                w-full
                object-cover
              "
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* =====================================================
          DARK LEFT OVERLAY
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#021812]
          via-[#052E23]/80
          via-45%
          to-transparent
        "
      />

      {/* =====================================================
          EXTRA GRADIENT
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(
            90deg,
            rgba(2,24,18,0.95)_0%,
            rgba(3,31,24,0.78)_30%,
            rgba(5,46,35,0.40)_55%,
            rgba(5,46,35,0.10)_78%,
            transparent_100%
          )]
        "
      />

      {/* =====================================================
          BOTTOM FADE
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#021812]/80
          via-transparent
          to-transparent
        "
      />

      {/* =====================================================
          DECORATIVE CIRCLES
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          h-96
          w-96
          rounded-full
          border
          border-white/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-56
          w-56
          rounded-full
          border
          border-white/10
        "
      />

      {/* =====================================================
          GREEN GLOW
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-72
          w-72
          rounded-full
          bg-[#087B5A]/20
          blur-3xl
        "
      />

      {/* =====================================================
          ORANGE GLOW
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[15%]
          top-[25%]
          h-48
          w-48
          rounded-full
          bg-[#F97316]/5
          blur-3xl
        "
      />

      {/* =====================================================
          LEFT ORANGE LINE
      ====================================================== */}

      <div
        className="
          absolute
          left-0
          top-[42%]
          hidden
          h-px
          w-24
          bg-[#F97316]/70
          lg:block
        "
      />

      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
        className="
          absolute
          bottom-0
          left-8
          hidden
          h-32
          w-px
          origin-bottom
          bg-gradient-to-t
          from-[#F97316]
          to-transparent
          lg:block
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
          min-h-[90vh]
          max-w-7xl
          items-center
          px-5
          py-24
          sm:min-h-[94vh]
          sm:px-8
          lg:px-10
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-4xl text-white"
        >
          {/* =================================================
              EYEBROW
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
            className="flex items-center gap-3"
          >
            <span className="h-[2px] w-10 rounded-full bg-[#F97316]" />

            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#FDBA74]
                sm:text-sm
              "
            >
              {heroData.eyebrow}
            </span>
          </motion.div>

          {/* =================================================
              SINCE
          ================================================== */}

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
            className="
              mt-8
              text-sm
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#FDBA74]
              sm:text-base
            "
          >
            {heroData.since}
          </motion.p>

          {/* =================================================
              HEADING
          ================================================== */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.35,
            }}
            className="
              mt-4
              max-w-4xl
              font-extrabold
              leading-[0.88]
              tracking-[-0.05em]
            "
          >
            {/* YEARS */}

            <span
              className="
                block
                text-[4rem]
                sm:text-6xl
                md:text-7xl
                lg:text-[5.8rem]
                xl:text-[6.3rem]
              "
            >
              <span className="text-[#FBBF24]">{heroData.years}</span>

              <span
                className="
                  ml-3
                  text-[2rem]
                  font-bold
                  tracking-[-0.02em]
                  text-white
                  sm:text-3xl
                  md:text-4xl
                "
              >
                {heroData.yearsLabel}
              </span>
            </span>

            {/* HUMANITARIAN */}

            <span
              className="
                mt-4
                block
                text-[3.1rem]
                text-white
                sm:text-5xl
                md:text-6xl
                lg:text-[4.8rem]
                xl:text-[5.2rem]
              "
            >
              Humanitarian
            </span>

            {/* MINE ACTION */}

            <span
              className="
                mt-1
                block
                text-[3.1rem]
                text-[#A7F3D0]
                sm:text-5xl
                md:text-6xl
                lg:text-[4.8rem]
                xl:text-[5.2rem]
              "
            >
              Mine Action
            </span>
          </motion.h1>

          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.5,
            }}
            className="
              mt-8
              max-w-2xl
              text-base
              leading-7
              text-white/80
              sm:text-lg
              sm:leading-8
              lg:text-xl
              lg:leading-9
            "
          >
            {heroData.description}
          </motion.p>

          {/* =================================================
              BUTTONS
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.65,
            }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Link
              to="/projects"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-xl
                bg-[#F97316]
                px-6
                py-3.5
                text-sm
                font-bold
                text-white
                shadow-xl
                shadow-black/20
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#EA580C]
                hover:shadow-2xl
              "
            >
              {heroData.buttons.primary}

              <FaArrowRight
                size={12}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>

            <Link
              to="/about"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-white/20
                bg-white/10
                px-6
                py-3.5
                text-sm
                font-bold
                text-white
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white/15
              "
            >
              {heroData.buttons.secondary}
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* =====================================================
          SLIDER INDICATORS
      ====================================================== */}

      {heroImages.length > 1 && (
        <div
          className="
            absolute
            bottom-16
            right-5
            z-20
            flex
            items-center
            gap-2
            sm:right-8
            lg:right-10
          "
        >
          {heroImages.map((image, index) => (
            <button
              key={image.id}
              type="button"
              onClick={() => setCurrentImage(index)}
              aria-label={`Show hero image ${index + 1}`}
              className={`
                h-1.5
                rounded-full
                transition-all
                duration-300
                ${
                  currentImage === index
                    ? "w-8 bg-[#F97316]"
                    : "w-2 bg-white/40 hover:bg-white/70"
                }
              `}
            />
          ))}
        </div>
      )}

      {/* =====================================================
          BOTTOM INFORMATION BAR
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          delay: 1,
        }}
        className="
          absolute
          bottom-0
          left-0
          right-0
          z-20
          border-t
          border-white/10
          bg-black/15
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
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F97316]" />

            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-white/60
                sm:text-xs
              "
            >
              {heroData.bottomBar.label}
            </p>
          </div>

          <p className="hidden text-xs text-white/40 sm:block">
            {heroData.bottomBar.tagline}
          </p>

          <motion.div
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-[#F97316]"
          >
            <FaChevronDown size={11} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
