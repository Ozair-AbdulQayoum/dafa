import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import whatWeDoHeroData from "../../Components/Data File/What We Do Data/Hero";

export default function Hero() {
  const {
    eyebrow,
    title,
    highlight,
    description,
    images = [],
  } = whatWeDoHeroData;

  const shouldReduceMotion = useReducedMotion();

  const [currentImage, setCurrentImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalImages = images.length;
  const activeImage = images[currentImage];

  /* =========================================
     AUTOMATIC SLIDER
     Changes every 6 seconds
  ========================================= */

  useEffect(() => {
    if (shouldReduceMotion || isPaused || totalImages <= 1) {
      return;
    }

    const autoSlide = setInterval(() => {
      setCurrentImage((prev) => {
        const next = prev + 1;

        return next >= totalImages ? 0 : next;
      });
    }, 6000);

    return () => clearInterval(autoSlide);
  }, [shouldReduceMotion, isPaused, totalImages]);

  /* =========================================
     NEXT / PREVIOUS
  ========================================= */

  const goToNext = () => {
    if (totalImages <= 1) return;

    setCurrentImage((prev) => (prev + 1 >= totalImages ? 0 : prev + 1));
  };

  const goToPrevious = () => {
    if (totalImages <= 1) return;

    setCurrentImage((prev) => (prev - 1 < 0 ? totalImages - 1 : prev - 1));
  };

  return (
    <section
      aria-labelledby="what-we-do-hero-title"
      className="
        relative
        min-h-[650px]
        overflow-hidden
        bg-[#06281E]
        sm:min-h-[680px]
        lg:min-h-[720px]
      "
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* =========================================
          BACKGROUND IMAGE
      ========================================= */}

      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence initial={false} mode="sync">
          {activeImage?.src && (
            <motion.img
              key={activeImage.id || currentImage}
              src={activeImage.src}
              alt=""
              aria-hidden="true"
              initial={{
                opacity: 0,
                scale: shouldReduceMotion ? 1 : 1.08,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: shouldReduceMotion ? 1 : 1.03,
              }}
              transition={{
                opacity: {
                  duration: shouldReduceMotion ? 0 : 1.4,
                  ease: "easeInOut",
                },
                scale: {
                  duration: shouldReduceMotion ? 0 : 6,
                  ease: [0.22, 1, 0.36, 1],
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

      {/* =========================================
          DARK GREEN OVERLAY
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[#06281E]/60
        "
      />

      {/* =========================================
          GREEN GRADIENT
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-r
          from-[#06281E]/90
          via-[#06281E]/55
          to-[#06281E]/25
        "
      />

      {/* =========================================
          BOTTOM DEPTH
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-52
          bg-gradient-to-t
          from-[#06281E]/90
          via-[#06281E]/40
          to-transparent
        "
      />

      {/* =========================================
          MOBILE READABILITY
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-b
          from-[#06281E]/45
          via-transparent
          to-[#06281E]/80
          lg:hidden
        "
      />

      {/* =========================================
          HERO CONTENT
      ========================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[650px]
          max-w-7xl
          items-center
          px-5
          py-20
          sm:min-h-[680px]
          sm:px-8
          sm:py-24
          lg:min-h-[720px]
          lg:px-10
          lg:py-28
          xl:px-12
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : 28,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full max-w-3xl"
        >
          {/* EYEBROW */}

          <div className="flex items-center gap-3">
            <span className="h-px w-9 bg-[#F97316] sm:w-11" />

            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#A7F3D0]
                sm:text-sm
              "
            >
              {eyebrow}
            </p>
          </div>

          {/* HEADING */}

          <h1
            id="what-we-do-hero-title"
            className="
              mt-5
              max-w-3xl
              text-[2.65rem]
              font-bold
              leading-[1.03]
              tracking-[-0.045em]
              text-white
              sm:text-5xl
              md:text-6xl
              lg:text-[4rem]
              xl:text-[4.4rem]
            "
          >
            {title}

            <span className="mt-1 block text-[#A7F3D0]">{highlight}</span>
          </h1>

          {/* ACCENT */}

          <div className="mt-7 flex items-center gap-3">
            <span className="h-1 w-14 rounded-full bg-[#F97316]" />

            <span className="h-px w-20 bg-white/30" />
          </div>

          {/* DESCRIPTION */}

          <p
            className="
              mt-6
              max-w-2xl
              text-base
              leading-8
              text-white/85
              sm:text-lg
              sm:leading-8
            "
          >
            {description}
          </p>

          {/* SUPPORTING STATEMENT */}

          <div
            className="
              mt-8
              max-w-xl
              border-l-2
              border-[#F97316]
              pl-4
            "
          >
            <p
              className="
                text-sm
                font-medium
                leading-6
                text-white/90
                sm:text-base
              "
            >
              Humanitarian mine action
              <span className="mx-2 text-[#F97316]">•</span>
              Safer communities
              <span className="mx-2 text-[#F97316]">•</span>
              Afghanistan
            </p>
          </div>
        </motion.div>
      </div>

      {/* =========================================
          SLIDER INFORMATION
      ========================================= */}

      {totalImages > 1 && (
        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            z-20
          "
        >
          <div
            className="
              mx-auto
              flex
              max-w-7xl
              items-end
              justify-between
              gap-5
              px-5
              pb-5
              sm:px-8
              sm:pb-7
              lg:px-10
              xl:px-12
            "
          >
            {/* CURRENT IMAGE */}

            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{
                  opacity: 0,
                  y: shouldReduceMotion ? 0 : 8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -5,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="min-w-0"
              >
                {activeImage?.category && (
                  <p
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-[#A7F3D0]
                    "
                  >
                    {activeImage.category}
                  </p>
                )}

                {activeImage?.title && (
                  <p
                    className="
                      mt-1
                      max-w-xs
                      truncate
                      text-sm
                      font-semibold
                      text-white
                      sm:max-w-md
                    "
                  >
                    {activeImage.title}
                  </p>
                )}
              </motion.div>
            </AnimatePresence>

            {/* CONTROLS */}

            <div className="flex shrink-0 items-center gap-2">
              <span
                className="
                  mr-2
                  hidden
                  text-xs
                  font-semibold
                  tracking-[0.12em]
                  text-white/75
                  sm:block
                "
              >
                {String(currentImage + 1).padStart(2, "0")}

                <span className="mx-1 text-[#F97316]">/</span>

                {String(totalImages).padStart(2, "0")}
              </span>

              <button
                type="button"
                onClick={goToPrevious}
                aria-label="Previous image"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  border
                  border-white/30
                  bg-[#06281E]/55
                  text-white
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:border-[#F97316]
                  hover:bg-[#F97316]
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#F97316]
                "
              >
                <FaChevronLeft className="text-xs" />
              </button>

              <button
                type="button"
                onClick={goToNext}
                aria-label="Next image"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  border
                  border-white/30
                  bg-[#06281E]/55
                  text-white
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:border-[#F97316]
                  hover:bg-[#F97316]
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#F97316]
                "
              >
                <FaChevronRight className="text-xs" />
              </button>
            </div>
          </div>

          {/* PROGRESS */}

          <div
            className="
              mx-auto
              flex
              max-w-7xl
              gap-1
              px-5
              pb-3
              sm:px-8
              lg:px-10
              xl:px-12
            "
          >
            {images.map((image, index) => (
              <button
                key={image?.id || image?.src || index}
                type="button"
                onClick={() => setCurrentImage(index)}
                aria-label={`Show ${image?.title || `slide ${index + 1}`}`}
                aria-current={currentImage === index ? "true" : undefined}
                className="
                  h-5
                  flex-1
                  max-w-24
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#F97316]
                "
              >
                <span
                  className={`
                    block
                    h-0.5
                    w-full
                    transition-all
                    duration-500
                    ${currentImage === index ? "bg-[#F97316]" : "bg-white/35"}
                  `}
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
