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
    .filter((story) => story.id !== latestStory.id)
    .slice(0, 4);

  // =========================================================
  // IMAGE SLIDER
  // =========================================================

  const [currentImage, setCurrentImage] = useState(0);

  // Latest story gallery
  const gallery =
    latestStory?.gallery?.length > 0
      ? latestStory.gallery
      : [latestStory.image];

  // =========================================================
  // AUTO SLIDER
  // =========================================================

  useEffect(() => {
    if (gallery.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImage((previous) => (previous + 1) % gallery.length);
    }, 4000);

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
      className="bg-white px-6 py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="mb-12 max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#0F8A63]">
            Voices of Impact
          </span>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl">
            Stories That Make a Difference
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Discover the real stories of people and communities whose lives have
            been touched by DAFA's humanitarian mine action work.
          </p>
        </div>

        {/* =====================================================
            LATEST / FEATURED STORY
        ===================================================== */}

        <article className="grid overflow-hidden rounded-3xl bg-[#F8FAFC] shadow-sm lg:grid-cols-2">
          {/* =================================================
              IMAGE SLIDER
          ================================================= */}

          <div className="relative h-[350px] overflow-hidden sm:h-[450px] lg:h-[520px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={gallery[currentImage]}
                src={gallery[currentImage]}
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

            {/* Image Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* =================================================
                PREVIOUS BUTTON
            ================================================= */}

            {gallery.length > 1 && (
              <button
                type="button"
                onClick={() =>
                  setCurrentImage(
                    (currentImage - 1 + gallery.length) % gallery.length,
                  )
                }
                aria-label="Previous image"
                className="absolute left-5 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-xl text-white backdrop-blur-sm transition hover:bg-black/50"
              >
                ‹
              </button>
            )}

            {/* =================================================
                NEXT BUTTON
            ================================================= */}

            {gallery.length > 1 && (
              <button
                type="button"
                onClick={() =>
                  setCurrentImage((currentImage + 1) % gallery.length)
                }
                aria-label="Next image"
                className="absolute right-5 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-xl text-white backdrop-blur-sm transition hover:bg-black/50"
              >
                ›
              </button>
            )}

            {/* =================================================
                SLIDER INDICATORS
            ================================================= */}

            {gallery.length > 1 && (
              <div className="absolute bottom-6 left-6 flex gap-2">
                {gallery.map((image, index) => (
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
            )}
          </div>

          {/* =================================================
              LATEST STORY CONTENT
          ================================================= */}

          <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-16">
            {/* Category */}

            <span className="text-sm font-bold uppercase tracking-[0.15em] text-[#0F8A63]">
              {latestStory.category}
            </span>

            {/* Title */}

            <h3 className="mt-4 text-3xl font-extrabold leading-tight text-[#0F172A] sm:text-4xl">
              {latestStory.title}
            </h3>

            {/* Description */}

            <p className="mt-5 text-base leading-8 text-slate-600">
              {latestStory.description}
            </p>

            {/* Location */}

            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-500">
              <FaMapMarkerAlt className="text-[#F97316]" />

              {latestStory.location}
            </div>

            {/* Date */}

            <div className="mt-3 flex items-center gap-2 text-sm text-slate-400">
              <FaCalendarAlt className="text-[#F97316]" />

              {latestStory.date}
            </div>

            {/* Read Story */}

            <div className="mt-8">
              <Link
                to={`/resources/stories/${latestStory.slug}`}
                className="group inline-flex items-center gap-3 rounded-xl bg-[#0B3D2E] px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-[#0F8A63]"
              >
                Read Full Story
                <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </article>

        {/* =====================================================
            OTHER 4 STORIES
        ===================================================== */}

        <div className="mt-16">
          {/* Heading */}

          <div className="mb-8">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#0F8A63]">
              More Stories
            </span>

            <h3 className="mt-2 text-2xl font-extrabold text-[#0F172A] sm:text-3xl">
              Voices From Our Communities
            </h3>
          </div>

          {/* =================================================
              FOUR STORY CARDS
          ================================================= */}

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {otherStories.map((story) => (
              <motion.article
                key={story.id}
                whileHover={{
                  y: -6,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                {/* Image */}

                <div className="relative h-56 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}

                <div className="p-5">
                  {/* Category */}

                  <span className="text-xs font-bold uppercase tracking-wide text-[#0F8A63]">
                    {story.category}
                  </span>

                  {/* Title */}

                  <h4 className="mt-2 line-clamp-2 text-lg font-bold leading-snug text-[#0F172A]">
                    {story.title}
                  </h4>

                  {/* Description */}

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
                    {story.description}
                  </p>

                  {/* Location */}

                  <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
                    <FaMapMarkerAlt className="text-[#F97316]" />

                    {story.location}
                  </div>

                  {/* Date */}

                  <div className="mt-2 flex items-center gap-2 text-xs text-slate-400">
                    <FaCalendarAlt className="text-[#F97316]" />

                    {story.date}
                  </div>

                  {/* Read Story */}

                  <Link
                    to={`/resources/stories/${story.slug}`}
                    className="group/link mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#0B3D2E]"
                  >
                    Read Story
                    <FaArrowRight className="text-xs transition-transform duration-300 group-hover/link:translate-x-1" />
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
