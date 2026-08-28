import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

import { storiesCardsData } from "../../Components/Data File/Stories Data/StoriesCards";

export default function StoriesCards() {
  const latestStory = storiesCardsData[storiesCardsData.length - 1];

  const [currentImage, setCurrentImage] = useState(0);

  // Use the latest story images
  const images = latestStory?.gallery || [latestStory?.image];

  // Auto slider
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImage((previous) => (previous + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  if (!latestStory) {
    return null;
  }

  return (
    <section
      id="success-stories"
      className="bg-white px-6 py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="mb-10 text-center">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#0F8A63]">
            Success Stories
          </span>

          <h2 className="mt-3 text-3xl font-extrabold text-[#0F172A] sm:text-4xl">
            Stories of Impact
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Discover how DAFA's humanitarian work is helping communities build
            safer and more hopeful futures.
          </p>
        </div>

        {/* =====================================================
            ONE BIG LATEST STORY CARD
        ===================================================== */}

        <article className="relative overflow-hidden rounded-3xl bg-[#0B3D2E] shadow-xl">
          {/* IMAGE */}

          <div className="relative h-[500px] overflow-hidden sm:h-[600px] lg:h-[680px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                src={images[currentImage]}
                alt={latestStory.title}
                initial={{
                  opacity: 0,
                  scale: 1.05,
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
                }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>

            {/* DARK GRADIENT */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/5" />

            {/* =================================================
                STORY CONTENT ON IMAGE
            ================================================= */}

            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10 lg:p-14">
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
                className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-[#A7F3D0] sm:text-sm"
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
                className="mt-3 max-w-4xl text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl"
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
                className="mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base"
              >
                {latestStory.description}
              </motion.p>

              {/* META */}

              <div className="mt-5 flex flex-wrap gap-5 text-xs text-white/70 sm:text-sm">
                <span className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-[#F97316]" />
                  {latestStory.location}
                </span>

                <span className="flex items-center gap-2">
                  <FaCalendarAlt className="text-[#F97316]" />
                  {latestStory.date}
                </span>
              </div>

              {/* READ STORY */}

              <Link
                to={`/resources/stories/${latestStory.slug}`}
                className="group mt-7 inline-flex items-center gap-3 rounded-xl bg-white px-5 py-3 font-bold text-[#0B3D2E] transition-all duration-300 hover:bg-[#F97316] hover:text-white"
              >
                Read Full Story
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* =================================================
                SLIDER CONTROLS
            ================================================= */}

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
                  className="absolute left-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-md transition hover:bg-black/50"
                >
                  <span className="text-lg">‹</span>
                </button>

                {/* Next */}

                <button
                  type="button"
                  onClick={() =>
                    setCurrentImage((currentImage + 1) % images.length)
                  }
                  aria-label="Next story image"
                  className="absolute right-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-md transition hover:bg-black/50"
                >
                  <span className="text-lg">›</span>
                </button>

                {/* Indicators */}

                <div className="absolute bottom-7 right-7 flex gap-2 sm:right-10">
                  {images.map((image, index) => (
                    <button
                      key={image}
                      type="button"
                      onClick={() => setCurrentImage(index)}
                      aria-label={`Show image ${index + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentImage === index
                          ? "w-8 bg-white"
                          : "w-2 bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </article>
      </div>
    </section>
  );
}
