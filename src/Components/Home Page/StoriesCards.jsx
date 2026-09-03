import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

import { storiesCardsData } from "../../Components/Data File/Stories Data/StoriesCards";

export default function StoriesCards() {
  const latestStory = storiesCardsData[storiesCardsData.length - 1];

  const [currentImage, setCurrentImage] = useState(0);

  // =========================================================
  // Sample images
  // Replace these with your real DAFA images later
  // =========================================================
  const sampleImages = [
    "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1600&q=85",
    "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1600&q=85",
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1600&q=85",
  ];

  // Use real gallery images if available,
  // otherwise use sample images.
  const images =
    latestStory?.gallery?.length > 0
      ? latestStory.gallery
      : latestStory?.image
        ? [latestStory.image]
        : sampleImages;

  // =========================================================
  // Auto image slider
  // =========================================================
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImage((previous) => (previous + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Reset slider when story changes
  useEffect(() => {
    setCurrentImage(0);
  }, [latestStory]);

  if (!latestStory) {
    return null;
  }

  return (
    <section
      id="success-stories"
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-[#E8F5EF]
        via-[#F4FAF7]
        to-[#EAF4F8]
        px-5
        py-14
        sm:px-8
        sm:py-16
        lg:px-10
        lg:py-20
      "
    >
      {/* =====================================================
          Background Glows
      ====================================================== */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
        "
      >
        <div
          className="
            absolute
            -left-40
            -top-32
            h-[480px]
            w-[480px]
            rounded-full
            bg-[#087B5A]/10
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            -right-40
            top-1/4
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#0284C7]/10
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            bottom-[-220px]
            left-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-[#F97316]/10
            blur-[130px]
          "
        />
      </div>

      {/* =====================================================
          Main Container
      ====================================================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
        "
      >
        {/* ===================================================
            Section Header
        ==================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            mb-12
            max-w-3xl
            text-center
          "
        >
          {/* Label */}
          <div
            className="
              mb-5
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <span
              className="
                h-[2px]
                w-8
                rounded-full
                bg-[#F97316]
                sm:w-10
              "
            />

            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#087B5A]
                sm:text-sm
              "
            >
              Success Stories
            </span>

            <span
              className="
                h-[2px]
                w-8
                rounded-full
                bg-[#F97316]
                sm:w-10
              "
            />
          </div>

          {/* Heading */}
          <h2
            className="
              text-3xl
              font-extrabold
              leading-[1.1]
              tracking-tight
              text-[#0F172A]
              sm:text-4xl
              lg:text-5xl
            "
          >
            Stories of Impact
            <span className="block text-[#087B5A]">That Inspire Change</span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-slate-600
              sm:text-lg
              sm:leading-8
            "
          >
            Discover how DAFA&apos;s humanitarian work is helping communities
            build safer and more hopeful futures.
          </p>
        </motion.div>

        {/* ===================================================
            Story Glass Card
        ==================================================== */}
        <motion.article
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            group
            relative
            overflow-hidden
            rounded-[30px]
            bg-[#0B3D2E]/10
            backdrop-blur-2xl
            shadow-[0_25px_70px_rgba(11,61,46,0.16)]
            transition-all
            duration-500
            hover:bg-[#0B3D2E]/15
            hover:shadow-[0_35px_90px_rgba(11,61,46,0.20)]
          "
        >
          {/* =================================================
              Image Area
          ================================================== */}
          <div
            className="
              relative
              h-[520px]
              overflow-hidden
              sm:h-[600px]
              lg:h-[680px]
            "
          >
            {/* Image Slider */}
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                src={images[currentImage]}
                alt={latestStory.title}
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
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  object-center
                  transition-transform
                  duration-700
                  group-hover:scale-[1.02]
                "
              />
            </AnimatePresence>

            {/* Dark Cinematic Overlay */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-[#03150F]
                via-[#03150F]/65
                to-transparent
              "
            />

            {/* Green Ambient Glow */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                bottom-[-140px]
                left-1/2
                h-[320px]
                w-[75%]
                -translate-x-1/2
                rounded-full
                bg-[#087B5A]/35
                blur-[100px]
                transition-all
                duration-700
                group-hover:scale-110
                group-hover:bg-[#087B5A]/45
              "
            />

            {/* =================================================
                Story Content
            ================================================== */}
            <div
              className="
                absolute
                inset-x-0
                bottom-0
                z-20
                p-7
                sm:p-10
                lg:p-14
              "
            >
              {/* Category */}
              <motion.span
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#A7F3D0]
                  sm:text-sm
                "
              >
                {latestStory.category}
              </motion.span>

              {/* Title */}
              <motion.h3
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.1,
                }}
                className="
                  mt-3
                  max-w-4xl
                  text-3xl
                  font-extrabold
                  leading-tight
                  tracking-tight
                  text-white
                  drop-shadow-[0_4px_18px_rgba(0,0,0,0.55)]
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                {latestStory.title}
              </motion.h3>

              {/* Description */}
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
                  delay: 0.2,
                }}
                className="
                  mt-4
                  max-w-2xl
                  text-sm
                  leading-7
                  text-white/75
                  sm:text-base
                  sm:leading-8
                "
              >
                {latestStory.description}
              </motion.p>

              {/* =================================================
                  Metadata
              ================================================== */}
              <div
                className="
                  mt-5
                  flex
                  flex-wrap
                  items-center
                  gap-4
                  text-xs
                  text-white/75
                  sm:gap-5
                  sm:text-sm
                "
              >
                {/* Location */}
                <span
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >
                  <FaMapMarkerAlt className="text-[#F97316]" />

                  {latestStory.location}
                </span>

                {/* Date */}
                <span
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >
                  <FaCalendarAlt className="text-[#F97316]" />

                  {latestStory.date}
                </span>
              </div>

              {/* =================================================
                  Read Story Button
              ================================================== */}
              <Link
                to={`/resources/stories/${latestStory.slug}`}
                className="
                  group/link
                  mt-6
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#0B3D2E]/75
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  backdrop-blur-xl
                  shadow-[0_8px_25px_rgba(0,0,0,0.20)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#087B5A]
                  hover:shadow-[0_12px_30px_rgba(8,123,90,0.35)]
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#A7F3D0]/70
                  focus-visible:ring-offset-2
                "
              >
                <span>Read Full Story</span>

                <span
                  className="
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                    rounded-full
                    bg-white/10
                    transition-transform
                    duration-300
                    group-hover/link:translate-x-1
                  "
                >
                  <FaArrowRight size={9} aria-hidden="true" />
                </span>
              </Link>
            </div>

            {/* =================================================
                Slider Controls
            ================================================== */}
            {images.length > 1 && (
              <>
                {/* Previous */}
                <button
                  type="button"
                  onClick={() =>
                    setCurrentImage(
                      (currentImage - 1 + images.length) % images.length,
                    )
                  }
                  aria-label="Previous story image"
                  className="
                    absolute
                    left-5
                    top-1/2
                    z-30
                    flex
                    h-11
                    w-11
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    bg-[#0B3D2E]/55
                    text-white
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:bg-[#087B5A]
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#A7F3D0]/70
                  "
                >
                  <span className="text-xl">‹</span>
                </button>

                {/* Next */}
                <button
                  type="button"
                  onClick={() =>
                    setCurrentImage((currentImage + 1) % images.length)
                  }
                  aria-label="Next story image"
                  className="
                    absolute
                    right-5
                    top-1/2
                    z-30
                    flex
                    h-11
                    w-11
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    bg-[#0B3D2E]/55
                    text-white
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:bg-[#087B5A]
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#A7F3D0]/70
                  "
                >
                  <span className="text-xl">›</span>
                </button>

                {/* Slider Indicators */}
                <div
                  className="
                    absolute
                    bottom-7
                    right-7
                    z-30
                    flex
                    items-center
                    gap-2
                    sm:right-10
                    sm:bottom-10
                  "
                >
                  {images.map((image, index) => (
                    <button
                      key={`${image}-${index}`}
                      type="button"
                      onClick={() => setCurrentImage(index)}
                      aria-label={`Show image ${index + 1}`}
                      className={`
                        h-1.5
                        rounded-full
                        transition-all
                        duration-300
                        ${
                          currentImage === index
                            ? "w-8 bg-white"
                            : "w-2 bg-white/45"
                        }
                      `}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </motion.article>
      </div>
    </section>
  );
}
