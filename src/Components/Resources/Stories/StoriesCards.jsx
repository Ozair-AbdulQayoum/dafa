// src/Components/Home-Page/StoriesCards.jsx

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import { storiesCardsData } from "../../Data File/Stories Data/StoriesCards";

export default function StoriesCards() {
  // =========================================================
  // LATEST STORY
  // =========================================================

  const latestStory = storiesCardsData[storiesCardsData.length - 1];

  // =========================================================
  // OTHER 4 STORIES
  // =========================================================

  const otherStories = storiesCardsData
    .filter((story) => story.id !== latestStory?.id)
    .slice(0, 4);

  // =========================================================
  // IMAGE SLIDER
  // =========================================================

  const [currentImage, setCurrentImage] = useState(0);

  const gallery =
    latestStory?.gallery?.length > 0
      ? latestStory.gallery
      : latestStory?.image
        ? [latestStory.image]
        : [];

  // =========================================================
  // AUTO SLIDER
  // =========================================================

  useEffect(() => {
    if (gallery.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImage((previous) => (previous + 1) % gallery.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [gallery.length]);

  // =========================================================
  // SAFETY
  // =========================================================

  if (!latestStory) {
    return null;
  }

  return (
    <section
      id="success-stories"
      className="bg-[#F7FBF8] px-5 py-20 sm:px-8 lg:px-10 lg:py-28 xl:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div className="mb-12 max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[2px] w-8 rounded-full bg-[#F97316]" />

            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#0F8A63] sm:text-xs">
              Voices of Impact
            </span>

            <span className="h-[2px] w-8 rounded-full bg-[#F97316]" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-[-0.035em] text-[#0F172A] sm:text-4xl lg:text-5xl">
            Stories That Make a Difference
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Discover the real stories of people and communities whose lives have
            been touched by DAFA's humanitarian mine action work.
          </p>
        </div>

        {/* =====================================================
            FEATURED / LATEST STORY
        ====================================================== */}

        <article
          className="
            group relative h-[500px] overflow-hidden
            rounded-2xl border border-[#0B3D2E]/10
            bg-[#0B3D2E]
            shadow-[0_14px_35px_rgba(15,23,42,0.09)]
            transition-all duration-500
            hover:-translate-y-1
            hover:shadow-[0_22px_50px_rgba(15,23,42,0.15)]
            sm:h-[560px]
            sm:rounded-3xl
          "
        >
          {/* =================================================
              IMAGE SLIDER
          ================================================= */}

          <div className="absolute inset-0 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={gallery[currentImage]}
                src={gallery[currentImage]}
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
                  opacity: {
                    duration: 0.8,
                    ease: "easeInOut",
                  },
                  scale: {
                    duration: 1,
                    ease: "easeOut",
                  },
                }}
                className="
                  absolute inset-0
                  h-full w-full
                  object-cover
                  transition-transform duration-700
                  group-hover:scale-[1.055]
                "
              />
            </AnimatePresence>
          </div>

          {/* =================================================
              IMAGE OVERLAYS
          ================================================= */}

          <div
            aria-hidden="true"
            className="
              absolute inset-0
              bg-gradient-to-t
              from-[#031F18]
              via-[#0B3D2E]/45
              to-black/5
              opacity-95
            "
          />

          <div
            aria-hidden="true"
            className="
              absolute inset-x-0 bottom-0
              h-2/3
              bg-gradient-to-t
              from-[#031F18]
              via-[#031F18]/80
              to-transparent
            "
          />

          {/* =================================================
              TOP META
          ================================================= */}

          <div className="absolute left-6 right-6 top-6 flex items-start justify-between gap-4 sm:left-8 sm:right-8 sm:top-8">
            {/* Latest */}
            <span
              className="
                rounded-full
                border border-white/20
                bg-[#031F18]/45
                px-3 py-1.5
                text-[9px]
                font-extrabold
                uppercase
                tracking-[0.16em]
                text-white
                backdrop-blur-md
              "
            >
              Latest Story
            </span>

            {/* Category */}
            <span
              className="
                rounded-full
                border border-white/20
                bg-white/10
                px-3 py-1.5
                text-[9px]
                font-extrabold
                uppercase
                tracking-[0.14em]
                text-white
                backdrop-blur-md
              "
            >
              {latestStory.category}
            </span>
          </div>

          {/* =================================================
              SLIDER CONTROLS
          ================================================= */}

          {gallery.length > 1 && (
            <>
              <button
                type="button"
                onClick={() =>
                  setCurrentImage(
                    (currentImage - 1 + gallery.length) % gallery.length,
                  )
                }
                aria-label="Previous story image"
                className="
                  absolute left-5 top-1/2 z-20
                  flex h-10 w-10
                  -translate-y-1/2
                  items-center justify-center
                  rounded-full
                  border border-white/20
                  bg-[#031F18]/40
                  text-lg text-white
                  backdrop-blur-md
                  transition-all duration-300
                  hover:border-[#F97316]
                  hover:bg-[#031F18]/70
                  hover:text-[#F97316]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#F97316]
                "
              >
                ‹
              </button>

              <button
                type="button"
                onClick={() =>
                  setCurrentImage((currentImage + 1) % gallery.length)
                }
                aria-label="Next story image"
                className="
                  absolute right-5 top-1/2 z-20
                  flex h-10 w-10
                  -translate-y-1/2
                  items-center justify-center
                  rounded-full
                  border border-white/20
                  bg-[#031F18]/40
                  text-lg text-white
                  backdrop-blur-md
                  transition-all duration-300
                  hover:border-[#F97316]
                  hover:bg-[#031F18]/70
                  hover:text-[#F97316]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#F97316]
                "
              >
                ›
              </button>
            </>
          )}

          {/* =================================================
              SLIDER INDICATORS
          ================================================= */}

          {gallery.length > 1 && (
            <div className="absolute bottom-7 right-7 z-20 flex items-center gap-2">
              {gallery.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setCurrentImage(index)}
                  aria-label={`Show image ${index + 1}`}
                  aria-current={currentImage === index ? "true" : undefined}
                  className="
                    flex h-6 items-center
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#F97316]
                  "
                >
                  <span
                    className={`
                      h-[3px] rounded-full
                      transition-all duration-500
                      ${
                        currentImage === index
                          ? "w-8 bg-[#F97316]"
                          : "w-4 bg-white/45"
                      }
                    `}
                  />
                </button>
              ))}
            </div>
          )}

          {/* =================================================
              FEATURED CONTENT
          ================================================= */}

          <div
            className="
              absolute inset-x-0 bottom-0
              z-10 p-6
              sm:p-8
              lg:p-10
            "
          >
            {/* Orange Accent */}
            <div
              className="
                mb-4 h-[3px] w-8
                rounded-full
                bg-[#F97316]
                transition-all duration-500
                group-hover:w-14
              "
            />

            {/* Metadata */}
            <div className="mb-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] font-bold uppercase tracking-[0.13em] text-white/65">
              <span className="inline-flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#F97316]" />
                {latestStory.location}
              </span>

              <span className="inline-flex items-center gap-2">
                <FaCalendarAlt className="text-[#F97316]" />
                {latestStory.date}
              </span>
            </div>

            {/* Title */}
            <h3
              className="
                max-w-3xl
                text-2xl font-extrabold
                leading-tight
                tracking-[-0.025em]
                text-white
                sm:text-3xl
                lg:text-4xl
              "
            >
              {latestStory.title}
            </h3>

            {/* Description */}
            <p
              className="
                mt-3 max-w-2xl
                line-clamp-2
                text-sm leading-6
                text-white/75
                sm:text-base
                sm:leading-7
              "
            >
              {latestStory.description}
            </p>

            {/* CTA */}
            <Link
              to={`/resources/stories/${latestStory.slug}`}
              className="
                group/link
                mt-5 inline-flex
                min-h-10 items-center gap-3
                border-b border-white/30
                pb-1
                text-xs font-bold
                text-white
                transition-all duration-300
                hover:gap-4
                hover:border-[#F97316]
                hover:text-[#F97316]
              "
            >
              Read Full Story
              <FaArrowRight
                className="
                  text-[10px]
                  transition-transform duration-300
                  group-hover/link:translate-x-1
                "
              />
            </Link>
          </div>
        </article>

        {/* =====================================================
            OTHER STORIES
        ====================================================== */}

        <div className="mt-16">
          {/* Heading */}
          <div className="mb-8">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-7 rounded-full bg-[#F97316]" />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#0F8A63] sm:text-xs">
                More Stories
              </span>
            </div>

            <h3 className="text-2xl font-extrabold tracking-[-0.025em] text-[#0F172A] sm:text-3xl">
              Voices From Our Communities
            </h3>
          </div>

          {/* =================================================
              STORY CARDS
          ================================================= */}

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {otherStories.map((story, index) => (
              <motion.article
                key={story.id}
                initial={{
                  opacity: 0,
                  y: 20,
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
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className="
                  group relative
                  h-[430px]
                  overflow-hidden
                  rounded-2xl
                  border border-[#0B3D2E]/10
                  bg-[#0B3D2E]
                  shadow-[0_14px_35px_rgba(15,23,42,0.09)]
                  transition-all duration-500
                  hover:-translate-y-1
                  hover:shadow-[0_22px_50px_rgba(15,23,42,0.15)]
                  sm:rounded-3xl
                "
              >
                {/* Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    loading="lazy"
                    className="
                      h-full w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-[1.055]
                    "
                  />
                </div>

                {/* Dark Overlay */}
                <div
                  aria-hidden="true"
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-[#031F18]
                    via-[#0B3D2E]/40
                    to-black/5
                    opacity-95
                  "
                />

                <div
                  aria-hidden="true"
                  className="
                    absolute inset-x-0 bottom-0
                    h-2/3
                    bg-gradient-to-t
                    from-[#031F18]
                    via-[#031F18]/75
                    to-transparent
                  "
                />

                {/* Number */}
                <div
                  className="
                    absolute left-5 top-5
                    text-3xl font-light
                    leading-none
                    tracking-[-0.05em]
                    text-white/90
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Category */}
                <span
                  className="
                    absolute right-5 top-5
                    rounded-full
                    border border-white/20
                    bg-[#031F18]/45
                    px-3 py-1.5
                    text-[9px]
                    font-extrabold
                    uppercase
                    tracking-[0.14em]
                    text-white
                    backdrop-blur-md
                  "
                >
                  {story.category}
                </span>

                {/* Content */}
                <div
                  className="
                    absolute inset-x-0 bottom-0
                    z-10 p-5
                    sm:p-6
                  "
                >
                  {/* Accent */}
                  <div
                    className="
                      mb-4 h-[3px] w-8
                      rounded-full
                      bg-[#F97316]
                      transition-all duration-500
                      group-hover:w-14
                    "
                  />

                  {/* Metadata */}
                  <div
                    className="
                      mb-3
                      flex flex-col gap-1.5
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.1em]
                      text-white/60
                    "
                  >
                    <span className="inline-flex items-center gap-2">
                      <FaMapMarkerAlt className="text-[#F97316]" />
                      {story.location}
                    </span>

                    <span className="inline-flex items-center gap-2">
                      <FaCalendarAlt className="text-[#F97316]" />
                      {story.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h4
                    className="
                      line-clamp-2
                      text-lg
                      font-extrabold
                      leading-snug
                      text-white
                    "
                  >
                    {story.title}
                  </h4>

                  {/* Description */}
                  <p
                    className="
                      mt-3
                      line-clamp-2
                      text-sm
                      leading-6
                      text-white/70
                    "
                  >
                    {story.description}
                  </p>

                  {/* CTA */}
                  <Link
                    to={`/resources/stories/${story.slug}`}
                    className="
                      group/link
                      mt-5 inline-flex
                      min-h-9 items-center
                      gap-3
                      border-b
                      border-white/30
                      pb-1
                      text-xs
                      font-bold
                      text-white
                      transition-all duration-300
                      hover:gap-4
                      hover:border-[#F97316]
                      hover:text-[#F97316]
                    "
                  >
                    Read Story
                    <FaArrowRight
                      className="
                        text-[10px]
                        transition-transform
                        duration-300
                        group-hover/link:translate-x-1
                      "
                    />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
