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
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused, shouldReduceMotion]);

  // =====================================================
  // CLEANUP RESUME TIMER
  // =====================================================

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) {
        clearTimeout(resumeTimerRef.current);
      }
    };
  }, []);

  // =====================================================
  // PAUSE AFTER USER INTERACTION
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

    setCurrentImage((prev) => {
      return (prev - 1 + heroImages.length) % heroImages.length;
    });
  };

  // =====================================================
  // NEXT SLIDE
  // =====================================================

  const handleNext = () => {
    pauseTemporarily();

    setCurrentImage((prev) => {
      return (prev + 1) % heroImages.length;
    });
  };

  // =====================================================
  // SELECT SLIDE
  // =====================================================

  const handleSelectSlide = (index) => {
    pauseTemporarily();
    setCurrentImage(index);
  };

  // =====================================================
  // KEYBOARD CONTROL
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
      className="
        relative
        isolate
        min-h-[680px]
        overflow-hidden
        bg-[#06271E]
        font-[Poppins]

        sm:min-h-[700px]
        lg:min-h-[720px]
      "
      onKeyDown={handleKeyDown}
    >
      {/* =====================================================
          BACKGROUND IMAGE
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
              scale: shouldReduceMotion ? 1 : 1.035,
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
                duration: shouldReduceMotion ? 0 : 0.8,
                ease: "easeInOut",
              },
              scale: {
                duration: 6,
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

        {/* PRIMARY CONTENT OVERLAY */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#031F18]/95
            via-[#0B3D2E]/68
            to-[#0B3D2E]/18

            md:via-[#0B3D2E]/62
            lg:to-transparent
          "
        />

        {/* BOTTOM READABILITY */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#031F18]/95
            via-[#031F18]/20
            to-transparent
          "
        />

        {/* TOP NAVBAR READABILITY */}

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-44
            bg-gradient-to-b
            from-[#031F18]/55
            via-[#031F18]/20
            to-transparent
          "
        />

        {/* SUBTLE BRAND-TONE OVERLAY */}

        <div
          className="
            absolute
            inset-0
            bg-[#0B3D2E]/[0.04]
          "
        />
      </div>

      {/* =====================================================
          HERO CONTENT
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

          lg:min-h-[720px]
          lg:px-10
          lg:pb-36
          lg:pt-32

          xl:px-12
        "
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentImage}
            initial={{
              opacity: 0,
              x: shouldReduceMotion ? 0 : -18,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: shouldReduceMotion ? 0 : -12,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              w-full
              max-w-2xl

              lg:max-w-3xl
              xl:max-w-4xl
            "
          >
            {/* =================================================
                EYEBROW
            ================================================= */}

            <div className="mb-5 flex items-center gap-3 sm:mb-6">
              <span
                className="
                  h-[2px]
                  w-8
                  rounded-full
                  bg-[#F97316]

                  sm:w-11
                "
                aria-hidden="true"
              />

              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-white/80

                  sm:text-xs
                  md:text-sm
                "
              >
                {currentHero.eyebrow}
              </p>
            </div>

            {/* =================================================
                HEADING
            ================================================= */}

            <h1
              id="hero-heading"
              className="
                max-w-4xl
                text-[2.55rem]
                font-extrabold
                leading-[1.06]
                tracking-[-0.04em]
                text-white

                sm:text-5xl
                md:text-6xl
                lg:text-[4.2rem]
                xl:text-[4.65rem]
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
                  text-sm
                  leading-7
                  text-white/72

                  sm:mt-7
                  sm:text-base
                  sm:leading-8

                  lg:max-w-2xl
                "
              >
                {currentHero.description}
              </p>
            )}

            {/* =================================================
                ACTION BUTTONS
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
              "
            >
              {/* PRIMARY */}

              <Link
                to="/projects"
                className="
                  group
                  inline-flex
                  min-h-[54px]
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-[#F97316]
                  px-7
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_10px_30px_rgba(0,0,0,0.20)]
                  transition-all
                  duration-200

                  hover:-translate-y-0.5
                  hover:bg-[#EA580C]
                  hover:shadow-[0_14px_34px_rgba(0,0,0,0.26)]

                  active:translate-y-0

                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-white
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#0B3D2E]
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
                  "
                />
              </Link>

              {/* SECONDARY */}

              <Link
                to="/about"
                className="
                  inline-flex
                  min-h-[54px]
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/25
                  bg-white/[0.07]
                  px-7
                  text-sm
                  font-bold
                  text-white
                  backdrop-blur-sm
                  transition-all
                  duration-200

                  hover:-translate-y-0.5
                  hover:border-white/70
                  hover:bg-white
                  hover:text-[#0B3D2E]

                  active:translate-y-0

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
          SLIDE ANNOUNCEMENT
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
              COUNTER
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
              CONTROLS
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
              bg-[#031F18]/45
              p-1
              shadow-[0_8px_30px_rgba(0,0,0,0.16)]
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
                transition-all
                duration-200

                hover:bg-white/10
                hover:text-white

                active:scale-95

                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-white
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
                    key={image.id}
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
                transition-all
                duration-200

                hover:bg-white/10
                hover:text-white

                active:scale-95

                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-white
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
