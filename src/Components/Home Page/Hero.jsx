import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import {
  heroImages,
  heroButtons,
} from "../../Components/Data File/Main Page Data/Herodata";

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  const currentHero = heroImages[currentImage];

  // =====================================================
  // AUTO SLIDER
  // =====================================================

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentImage((previous) => (previous + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(autoSlide);
  }, []);

  // =====================================================
  // PREVIOUS SLIDE
  // =====================================================

  const handlePrevious = () => {
    setCurrentImage(
      (previous) => (previous - 1 + heroImages.length) % heroImages.length,
    );
  };

  // =====================================================
  // NEXT SLIDE
  // =====================================================

  const handleNext = () => {
    setCurrentImage((previous) => (previous + 1) % heroImages.length);
  };

  // =====================================================
  // KEYBOARD NAVIGATION
  // =====================================================

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      handlePrevious();
    }

    if (event.key === "ArrowRight") {
      handleNext();
    }
  };

  return (
    <section
      aria-label="DAFA introduction"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="
        relative
        isolate
        min-h-[680px]
        overflow-hidden
        bg-[#0B3D2E]
        font-[Poppins]
        focus:outline-none
      "
    >
      {/* =====================================================
          BACKGROUND IMAGE SLIDER
      ===================================================== */}

      <div className="absolute inset-0 -z-10">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentHero.id}
            src={currentHero.image}
            alt={currentHero.alt}
            initial={{
              opacity: 0,
              scale: 1.06,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 1.02,
            }}
            transition={{
              opacity: {
                duration: 1,
                ease: "easeInOut",
              },
              scale: {
                duration: 5,
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

        {/* =====================================================
            GREEN OVERLAY
        ===================================================== */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#031F18]/95
            via-[#0B3D2E]/75
            to-[#0B3D2E]/20
          "
        />

        {/* =====================================================
            BOTTOM DARK OVERLAY
        ===================================================== */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#031F18]/80
            via-transparent
            to-transparent
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        className="
          mx-auto
          flex
          min-h-[680px]
          w-full
          max-w-7xl
          items-center
          px-5
          py-24
          sm:px-8
          lg:px-10
          xl:px-12
        "
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentHero.id}
            initial={{
              opacity: 0,
              x: -35,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -25,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              w-full
              max-w-4xl
            "
          >
            {/* =================================================
                EYEBROW
            ================================================= */}

            <div
              className="
                mb-6
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  h-[2px]
                  w-10
                  bg-[#F97316]
                "
              />

              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-white/90
                  sm:text-sm
                "
              >
                {currentHero.eyebrow}
              </p>
            </div>

            {/* =================================================
                HERO TITLE
            ================================================= */}

            <h1
              className="
                text-5xl
                font-extrabold
                leading-[1.05]
                tracking-[-0.04em]
                text-white
                sm:text-6xl
                md:text-7xl
                lg:text-[5rem]
                xl:text-[5.5rem]
              "
            >
              {/* GREEN NUMBER */}
              {currentHero.number && (
                <span
                  className="
                    font-black
                    text-[#A7F3D0]
                  "
                >
                  {currentHero.number}{" "}
                </span>
              )}

              {/* MAIN TITLE */}
              {currentHero.title}

              {/* GREEN HIGHLIGHT */}
              {currentHero.highlight && (
                <span
                  className="
                    mt-2
                    block
                    text-[#A7F3D0]
                  "
                >
                  {currentHero.highlight}
                </span>
              )}
            </h1>

            {/* =================================================
                CTA BUTTONS
            ================================================= */}

            <div
              className="
                mt-8
                flex
                flex-col
                gap-3
                sm:flex-row
              "
            >
              {/* =================================================
                  PRIMARY BUTTON
              ================================================= */}

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
                  px-7
                  text-sm
                  font-bold
                  text-white
                  shadow-lg
                  shadow-black/20
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#EA580C]
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-white
                "
              >
                {heroButtons.primary}

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

              {/* =================================================
                  SECONDARY BUTTON
              ================================================= */}

              <Link
                to="/about"
                className="
                  inline-flex
                  min-h-[52px]
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/40
                  bg-white/10
                  px-7
                  text-sm
                  font-bold
                  text-white
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white
                  hover:text-[#0B3D2E]
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-white
                "
              >
                {heroButtons.secondary}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* =====================================================
          SLIDER CONTROLS
      ===================================================== */}

      <div
        className="
          absolute
          bottom-6
          left-0
          right-0
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-7xl
            items-center
            justify-end
            px-5
            sm:px-8
            lg:px-10
            xl:px-12
          "
        >
          <div
            className="
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-white/20
              bg-black/20
              p-1.5
              backdrop-blur-md
            "
            role="group"
            aria-label="Hero slider navigation"
          >
            {/* =================================================
                PREVIOUS BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={handlePrevious}
              aria-label="Previous slide"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                text-white
                transition
                hover:bg-white/15
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-white
              "
            >
              <FaChevronLeft size={10} />
            </button>

            {/* =================================================
                SLIDE INDICATORS
            ================================================= */}

            <div
              className="
                flex
                items-center
                gap-1.5
                px-1
              "
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
                      flex
                      h-7
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
                        duration-500
                        ${
                          isActive
                            ? "w-8 bg-[#F97316]"
                            : "w-2 bg-white/50 hover:bg-white"
                        }
                      `}
                    />
                  </button>
                );
              })}
            </div>

            {/* =================================================
                NEXT BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next slide"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                text-white
                transition
                hover:bg-white/15
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-white
              "
            >
              <FaChevronRight size={10} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
