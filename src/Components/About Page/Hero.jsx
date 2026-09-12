import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import aboutHeroData from "../../Components/Data File/About Page Data/HeroData";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [currentImage, setCurrentImage] = useState(0);

  const images = aboutHeroData.images || [];

  // Auto Slider
  useEffect(() => {
    if (shouldReduceMotion || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length, shouldReduceMotion]);

  return (
    <section
      aria-labelledby="about-hero-heading"
      className="
        relative
        min-h-[720px]
        w-full
        overflow-hidden
        bg-[#0B3D2E]
        sm:min-h-[760px]
        lg:min-h-[800px]
      "
    >
      {/* BACKGROUND IMAGE SLIDER */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          {images.length > 0 && (
            <motion.img
              key={currentImage}
              src={images[currentImage].src}
              alt=""
              aria-hidden="true"
              initial={{
                opacity: 0,
                scale: shouldReduceMotion ? 1 : 1.05,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: shouldReduceMotion ? 1 : 1.02,
              }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
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

      {/* GREEN COLOR OVERLAY - 70% */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          bg-[#0B3D2E]/70
        "
      />

      {/* SOFT GRADIENT */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/10
          via-transparent
          to-[#0B3D2E]/50
        "
      />

      {/* HERO CONTENT */}
      <div
        className="
          relative
          z-10
          flex
          min-h-[720px]
          w-full
          items-start
          justify-center
          px-5
          pt-36
          pb-24
          text-center
          sm:min-h-[760px]
          sm:px-8
          sm:pt-40
          sm:pb-28
          lg:min-h-[800px]
          lg:px-10
          lg:pt-44
          lg:pb-32
        "
      >
        <div className="mx-auto w-full max-w-5xl">
          {/* EYEBROW */}
          <motion.div
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mb-6
              flex
              items-center
              justify-center
              gap-4
            "
          >
            <span className="h-px w-10 bg-[#F97316] sm:w-16" />

            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#C5E8DB]
                sm:text-sm
              "
            >
              {aboutHeroData.eyebrow}
            </span>

            <span className="h-px w-10 bg-[#F97316] sm:w-16" />
          </motion.div>

          {/* HEADING */}
          <motion.h1
            id="about-hero-heading"
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mx-auto
              max-w-5xl
              text-4xl
              font-black
              leading-[1.05]
              tracking-tight
              text-white
              sm:text-5xl
              md:text-6xl
              lg:text-[4.5rem]
            "
          >
            {aboutHeroData.title.normal}{" "}
            <span className="text-[#F97316]">
              {aboutHeroData.title.highlight}
            </span>{" "}
            {aboutHeroData.title.ending}
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-base
              leading-7
              text-white/85
              sm:mt-7
              sm:text-lg
              sm:leading-8
            "
          >
            {aboutHeroData.description}
          </motion.p>

          {/* SUPPORT TEXT */}
          <motion.p
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.35,
            }}
            className="
              mt-5
              text-sm
              font-semibold
              tracking-wide
              text-[#C5E8DB]
            "
          >
            {aboutHeroData.supportText}
          </motion.p>

          {/* ORANGE ACCENT */}
          <motion.div
            initial={{
              opacity: 0,
              scaleX: shouldReduceMotion ? 1 : 0,
            }}
            animate={{
              opacity: 1,
              scaleX: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mx-auto
              mt-7
              h-1
              w-16
              origin-center
              rounded-full
              bg-[#F97316]
            "
          />
        </div>
      </div>

      {/* SLIDER INDICATORS */}
      {images.length > 1 && (
        <div
          className="
            absolute
            bottom-8
            left-1/2
            z-20
            flex
            -translate-x-1/2
            items-center
            gap-2
          "
        >
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentImage(index)}
              aria-label={`Show slide ${index + 1}`}
              aria-current={currentImage === index ? "true" : undefined}
              className={`
                h-2
                rounded-full
                transition-all
                duration-300
                ${
                  currentImage === index
                    ? "w-9 bg-[#F97316]"
                    : "w-2 bg-white/50 hover:bg-white"
                }
              `}
            />
          ))}
        </div>
      )}
    </section>
  );
}
