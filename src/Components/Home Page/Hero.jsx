import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import {
  heroImages,
  heroButtons,
} from "../../Components/Data File/Main Page Data/Herodata";

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const shouldReduceMotion = useReducedMotion();
  const resumeTimerRef = useRef(null);

  const currentHero = heroImages[currentImage];

  // =====================================================
  // AUTO SLIDER
  // =====================================================

  useEffect(() => {
    if (isPaused || shouldReduceMotion || heroImages.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6500);

    return () => clearInterval(interval);
  }, [isPaused, shouldReduceMotion]);

  // =====================================================
  // CLEANUP
  // =====================================================

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) {
        clearTimeout(resumeTimerRef.current);
      }
    };
  }, []);

  // =====================================================
  // TEMPORARY PAUSE AFTER INTERACTION
  // =====================================================

  const pauseTemporarily = () => {
    setIsPaused(true);

    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }

    resumeTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 8000);
  };

  // =====================================================
  // PREVIOUS SLIDE
  // =====================================================

  const handlePrevious = () => {
    pauseTemporarily();

    setCurrentImage((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  // =====================================================
  // NEXT SLIDE
  // =====================================================

  const handleNext = () => {
    pauseTemporarily();

    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  };

  // =====================================================
  // SELECT SLIDE
  // =====================================================

  const handleSelectSlide = (index) => {
    pauseTemporarily();
    setCurrentImage(index);
  };

  // =====================================================
  // KEYBOARD CONTROLS
  // =====================================================

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      handlePrevious();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      handleNext();
    }
  };

  return (
    <section
      aria-labelledby="hero-heading"
      onKeyDown={handleKeyDown}
      tabIndex={-1}
      className="
        relative
        isolate
        min-h-[680px]
        overflow-hidden
        bg-[#06271E]
        font-[Poppins]

        sm:min-h-[700px]

        lg:min-h-[730px]
      "
    >
      {/* =====================================================
          DOCUMENTARY BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 -z-10">
        <AnimatePresence initial={false} mode="sync">
          <motion.img
            key={currentImage}
            src={currentHero.image}
            alt=""
            aria-hidden="true"
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
                duration: shouldReduceMotion ? 0 : 0.75,
                ease: "easeInOut",
              },
              scale: {
                duration: shouldReduceMotion ? 0 : 6.5,
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

        {/* =================================================
            LEFT CONTENT GRADIENT
        ================================================= */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#031F18]/[0.96]
            via-[#0B3D2E]/[0.72]
            to-[#0B3D2E]/[0.12]

            sm:via-[#0B3D2E]/[0.68]

            lg:from-[#031F18]/[0.94]
            lg:via-[#0B3D2E]/[0.62]
            lg:to-transparent
          "
        />

        {/* =================================================
            BOTTOM CINEMATIC GRADIENT
        ================================================= */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[55%]
            bg-gradient-to-t
            from-[#031F18]/[0.94]
            via-[#031F18]/[0.32]
            to-transparent
          "
        />

        {/* =================================================
            TOP NAVBAR READABILITY
        ================================================= */}

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-48
            bg-gradient-to-b
            from-[#031F18]/[0.62]
            via-[#031F18]/[0.22]
            to-transparent
          "
        />

        {/* =================================================
            SUBTLE BRAND COLOR
        ================================================= */}

        <div className="absolute inset-0 bg-[#0B3D2E]/[0.035]" />
      </div>

      {/* =====================================================
          MAIN HERO CONTENT
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
          pb-32
          pt-32

          sm:min-h-[700px]
          sm:px-8
          sm:pb-36

          lg:min-h-[730px]
          lg:px-10
          lg:pb-32
          lg:pt-32

          xl:px-12
        "
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentImage}
            initial={{
              opacity: 0,
              x: shouldReduceMotion ? 0 : -16,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: shouldReduceMotion ? 0 : -10,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              w-full
              max-w-xl

              sm:max-w-2xl

              lg:max-w-3xl

              xl:max-w-[760px]
            "
          >
            {/* =================================================
                EYEBROW
            ================================================= */}

            <div
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
                  shrink-0
                  rounded-full
                  bg-[#F97316]

                  sm:w-10
                "
              />

              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-white/85

                  sm:text-xs

                  md:text-sm
                "
              >
                {currentHero.eyebrow}
              </p>
            </div>

            {/* =================================================
                MAIN HEADING
            ================================================= */}

            <h1
              id="hero-heading"
              className="
                max-w-4xl
                text-[2.65rem]
                font-extrabold
                leading-[1.04]
                tracking-[-0.045em]
                text-white
                drop-shadow-[0_3px_14px_rgba(0,0,0,0.22)]

                sm:text-5xl
                sm:leading-[1.04]

                md:text-6xl

                lg:text-[4.2rem]

                xl:text-[4.6rem]
              "
            >
              {currentHero.number && (
                <span className="text-[#A7F3D0]">{currentHero.number} </span>
              )}

              {currentHero.title}

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
                DESCRIPTION
            ================================================= */}

            {currentHero.description && (
              <p
                className="
                  mt-6
                  max-w-xl
                  text-[15px]
                  font-normal
                  leading-7
                  text-white/[0.86]
                  drop-shadow-[0_2px_7px_rgba(0,0,0,0.35)]

                  sm:mt-7
                  sm:text-[17px]
                  sm:leading-8

                  lg:max-w-2xl
                  lg:text-[18px]
                "
              >
                {currentHero.description}
              </p>
            )}

            {/* =================================================
                CTA GROUP
            ================================================= */}

            <div
              className="
                mt-8
                flex
                flex-col
                gap-3

                sm:mt-9
                sm:flex-row
                sm:items-center
                sm:gap-3
              "
            >
              {/* =================================================
                  PRIMARY CTA
              ================================================= */}

              <Link
                to="/projects"
                className="
                  group
                  inline-flex
                  min-h-[54px]
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-[#F97316]
                  px-7
                  text-sm
                  font-bold
                  tracking-[0.01em]
                  text-white
                  shadow-[0_10px_28px_rgba(0,0,0,0.20)]
                  transition-[background-color,transform,box-shadow]
                  duration-200

                  hover:-translate-y-0.5
                  hover:bg-[#EA580C]
                  hover:shadow-[0_14px_32px_rgba(0,0,0,0.26)]

                  active:translate-y-0

                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-white
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#0B3D2E]

                  motion-reduce:transition-none
                  motion-reduce:hover:transform-none

                  sm:w-auto
                "
              >
                {heroButtons.primary}

                <FaArrowRight
                  size={11}
                  aria-hidden="true"
                  className="
                    transition-transform
                    duration-200
                    group-hover:translate-x-1

                    motion-reduce:transition-none
                  "
                />
              </Link>

              {/* =================================================
                  SECONDARY CTA
              ================================================= */}

              <Link
                to="/about"
                className="
                  inline-flex
                  min-h-[54px]
                  w-full
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/35
                  bg-[#031F18]/[0.22]
                  px-7
                  text-sm
                  font-semibold
                  tracking-[0.01em]
                  text-white
                  backdrop-blur-[3px]
                  transition-[background-color,border-color,transform]
                  duration-200

                  hover:-translate-y-0.5
                  hover:border-white/60
                  hover:bg-white/[0.10]

                  active:translate-y-0

                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-white
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#0B3D2E]

                  motion-reduce:transition-none
                  motion-reduce:hover:transform-none

                  sm:w-auto
                "
              >
                {heroButtons.secondary}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* =====================================================
          ACCESSIBLE SLIDE ANNOUNCEMENT
      ===================================================== */}

      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Slide {currentImage + 1} of {heroImages.length}: {currentHero.title}
      </div>

      {/* =====================================================
          SLIDER CONTROLS
      ===================================================== */}

      <div
        className="
          absolute
          bottom-5
          left-0
          right-0

          sm:bottom-7
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-7xl
            items-center
            justify-between
            px-5

            sm:px-8

            lg:px-10

            xl:px-12
          "
        >
          {/* =================================================
              SLIDE COUNTER
          ================================================= */}

          <div
            className="
              hidden
              items-center
              gap-2
              text-[11px]
              font-semibold
              tracking-[0.18em]
              text-white/45

              sm:flex
            "
            aria-hidden="true"
          >
            <span className="text-white/90">
              {String(currentImage + 1).padStart(2, "0")}
            </span>

            <span>/</span>

            <span>{String(heroImages.length).padStart(2, "0")}</span>
          </div>

          {/* =================================================
              SLIDER CONTROL BAR
          ================================================= */}

          <div
            className="
              ml-auto
              flex
              items-center
              gap-1
              rounded-xl
              border
              border-white/15
              bg-[#031F18]/[0.52]
              p-1
              shadow-[0_8px_28px_rgba(0,0,0,0.16)]
              backdrop-blur-md
            "
            role="group"
            aria-label="Hero slider controls"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setIsPaused(false);
              }
            }}
          >
            {/* PREVIOUS */}

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
                text-white/65
                transition-colors
                duration-200

                hover:bg-white/[0.10]
                hover:text-white

                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-white

                motion-reduce:transition-none
              "
            >
              <FaChevronLeft size={10} aria-hidden="true" />
            </button>

            {/* INDICATORS */}

            <div
              className="flex items-center gap-1 px-1"
              role="tablist"
              aria-label="Select hero slide"
            >
              {heroImages.map((image, index) => {
                const isActive = currentImage === index;

                return (
                  <button
                    key={image.id ?? index}
                    type="button"
                    role="tab"
                    onClick={() => handleSelectSlide(index)}
                    aria-label={`Show slide ${index + 1}`}
                    aria-selected={isActive}
                    className="
                      flex
                      h-7
                      items-center
                      justify-center
                      px-0.5

                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-white
                      focus-visible:ring-offset-1
                      focus-visible:ring-offset-[#031F18]
                    "
                  >
                    <span
                      className={`
                        block
                        h-1
                        rounded-full
                        transition-[width,background-color]
                        duration-300
                        motion-reduce:transition-none

                        ${
                          isActive
                            ? "w-8 bg-[#F97316]"
                            : "w-2 bg-white/30 hover:bg-white/60"
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
              aria-label="Next slide"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                text-white/65
                transition-colors
                duration-200

                hover:bg-white/[0.10]
                hover:text-white

                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-white

                motion-reduce:transition-none
              "
            >
              <FaChevronRight size={10} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
