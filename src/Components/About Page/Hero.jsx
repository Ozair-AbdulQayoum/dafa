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
        min-h-[680px]
        w-full
        overflow-hidden
        bg-[#0B3D2E]
        sm:min-h-[710px]
        lg:min-h-[740px]
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
                scale: shouldReduceMotion ? 1 : 1.04,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: shouldReduceMotion ? 1 : 1.015,
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

      {/* INSTITUTIONAL GREEN OVERLAY */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-[#082F24]/65
          via-[#0B3D2E]/72
          to-[#082F24]/90
        "
      />

      {/* SUBTLE IMAGE DEPTH */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_0%,rgba(8,47,36,0.22)_55%,rgba(8,47,36,0.5)_100%)]
        "
      />

      {/* HERO CONTENT */}
      <div
        className="
          relative
          z-10
          flex
          min-h-[680px]
          w-full
          items-start
          justify-center
          px-5
          pb-24
          pt-32
          text-center
          sm:min-h-[710px]
          sm:px-8
          sm:pb-28
          sm:pt-36
          lg:min-h-[740px]
          lg:px-10
          lg:pb-32
          lg:pt-40
        "
      >
        <div className="mx-auto w-full max-w-5xl">
          {/* EYEBROW */}
          <motion.div
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 16,
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
              gap-3
              sm:gap-4
            "
          >
            <span
              aria-hidden="true"
              className="
                h-px
                w-8
                bg-[#F97316]
                sm:w-14
                lg:w-16
              "
            />

            <span
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#C5E8DB]
                sm:text-xs
                sm:tracking-[0.22em]
                lg:text-sm
              "
            >
              {aboutHeroData.eyebrow}
            </span>

            <span
              aria-hidden="true"
              className="
                h-px
                w-8
                bg-[#F97316]
                sm:w-14
                lg:w-16
              "
            />
          </motion.div>

          {/* HEADING */}
          <motion.h1
            id="about-hero-heading"
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 26,
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
              max-w-4xl
              text-[2.65rem]
              font-black
              leading-[1.04]
              tracking-[-0.035em]
              text-white
              sm:text-5xl
              md:text-[3.5rem]
              lg:text-[4rem]
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
              y: shouldReduceMotion ? 0 : 18,
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
              max-w-2xl
              text-[15px]
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
              y: shouldReduceMotion ? 0 : 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-5
              text-xs
              font-semibold
              tracking-[0.08em]
              text-[#C5E8DB]
              sm:text-sm
              sm:tracking-wide
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
            aria-hidden="true"
            className="
              mx-auto
              mt-7
              h-1
              w-14
              origin-center
              rounded-full
              bg-[#F97316]
              sm:w-16
            "
          />
        </div>
      </div>

      {/* SLIDER INDICATORS */}
      {images.length > 1 && (
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
            rounded-full
            border
            border-white/10
            bg-black/15
            px-3
            py-2
            backdrop-blur-sm
            sm:bottom-8
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
                h-1.5
                rounded-full
                transition-all
                duration-300
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#F97316]
                focus-visible:ring-offset-2
                focus-visible:ring-offset-[#0B3D2E]
                ${
                  currentImage === index
                    ? "w-8 bg-[#F97316]"
                    : "w-1.5 bg-white/45 hover:bg-white/80"
                }
              `}
            />
          ))}
        </div>
      )}
    </section>
  );
}
