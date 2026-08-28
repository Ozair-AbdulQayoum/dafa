// src/Components/Stories/StoriesDetails.jsx

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { storiesCardsData } from "../../Data File/Stories Data/StoriesCards";

export default function StoriesDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // =========================================================
  // FIND STORY BY SLUG
  // =========================================================

  const story = storiesCardsData.find((item) => item.slug === slug);

  // =========================================================
  // IMAGE SLIDER
  // =========================================================

  const [currentImage, setCurrentImage] = useState(0);

  // =========================================================
  // REDIRECT IF STORY DOES NOT EXIST
  // =========================================================

  useEffect(() => {
    if (!story) {
      navigate("/resources/stories", {
        replace: true,
      });
    }
  }, [story, navigate]);

  // =========================================================
  // RESET SLIDER WHEN STORY CHANGES
  // =========================================================

  useEffect(() => {
    setCurrentImage(0);
  }, [slug]);

  // =========================================================
  // STORY GALLERY
  // =========================================================

  const gallery =
    story?.gallery?.length > 0
      ? story.gallery
      : story?.image
        ? [story.image]
        : [];

  // =========================================================
  // AUTO IMAGE SLIDER
  // =========================================================

  useEffect(() => {
    if (gallery.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImage((previous) => (previous + 1) % gallery.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [gallery.length]);

  // =========================================================
  // DON'T SHOW "STORY NOT FOUND"
  // =========================================================

  if (!story) {
    return null;
  }

  return (
    <main className="bg-white">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#0B3D2E] text-white">
        {/* Background Image */}

        <div className="absolute inset-0">
          <img
            src={story.image}
            alt=""
            className="h-full w-full object-cover opacity-20"
          />

          <div className="absolute inset-0 bg-[#0B3D2E]/85" />
        </div>

        {/* Hero Content */}

        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center lg:py-32">
          {/* Category */}

          <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#A7F3D0]">
            {story.category}
          </span>

          {/* Title */}

          <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            {story.title}
          </h1>

          {/* Description */}

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
            {story.description}
          </p>

          {/* Meta */}

          <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-sm text-white/70">
            <span className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#F97316]" />

              {story.location}
            </span>

            <span className="hidden h-4 w-px bg-white/20 sm:block" />

            <span className="flex items-center gap-2">
              <FaCalendarAlt className="text-[#F97316]" />

              {story.date}
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          STORY CONTENT
      ===================================================== */}

      <section className="px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          {/* Back Button */}

          <button
            type="button"
            onClick={() => navigate("/resources/stories")}
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#0B3D2E] transition hover:text-[#F97316]"
          >
            <FaArrowLeft />
            Back to Stories
          </button>

          {/* =================================================
              BIG IMAGE SLIDER
          ================================================= */}

          <div className="relative overflow-hidden rounded-3xl bg-[#0B3D2E] shadow-xl">
            <div className="relative h-[480px] sm:h-[580px] lg:h-[680px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={gallery[currentImage]}
                  src={gallery[currentImage]}
                  alt={story.title}
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

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* =================================================
                  TEXT ON IMAGE
              ================================================= */}

              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-10 lg:p-14">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#A7F3D0] sm:text-sm">
                  {story.category}
                </span>

                <h2 className="mt-3 max-w-4xl text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                  {story.title}
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
                  {story.description}
                </p>
              </div>

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
                  className="absolute left-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-md transition hover:bg-black/50"
                >
                  <FaArrowLeft />
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
                  className="absolute right-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-md transition hover:bg-black/50"
                >
                  <FaArrowRight />
                </button>
              )}

              {/* =================================================
                  SLIDER INDICATORS
              ================================================= */}

              {gallery.length > 1 && (
                <div className="absolute bottom-7 right-7 flex gap-2 sm:right-10">
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
          </div>

          {/* =================================================
              STORY INFORMATION
          ================================================= */}

          <div className="mx-auto mt-16 max-w-4xl">
            {/* Introduction */}

            <p className="text-xl font-medium leading-9 text-[#334155] sm:text-2xl">
              {story.description}
            </p>

            {/* Location & Date */}

            <div className="mt-8 flex flex-wrap gap-6 border-y border-slate-200 py-6">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#F97316]" />

                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    Location
                  </p>

                  <p className="mt-1 font-semibold text-[#0F172A]">
                    {story.location}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaCalendarAlt className="text-[#F97316]" />

                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    Published
                  </p>

                  <p className="mt-1 font-semibold text-[#0F172A]">
                    {story.date}
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                STORY BODY
            ================================================= */}

            <div className="mt-14 space-y-8">
              <p className="text-base leading-8 text-slate-600">
                DAFA works with communities across Afghanistan to reduce the
                threat of landmines and explosive remnants of war. Through
                humanitarian mine action, communities can access land more
                safely and begin rebuilding their futures.
              </p>

              <p className="text-base leading-8 text-slate-600">
                The work involves careful planning, community engagement, mine
                risk education, survey, clearance, and ongoing support. Every
                cleared area represents another step toward safer communities.
              </p>

              <p className="text-base leading-8 text-slate-600">
                Stories like this demonstrate the human impact of mine action
                and the importance of continuing to support communities affected
                by explosive hazards.
              </p>
            </div>

            {/* =================================================
                BACK TO STORIES
            ================================================= */}

            <div className="mt-16 border-t border-slate-200 pt-8">
              <button
                type="button"
                onClick={() => navigate("/resources/stories")}
                className="group inline-flex items-center gap-3 rounded-xl bg-[#0B3D2E] px-6 py-3.5 font-semibold text-white transition hover:bg-[#0F8A63]"
              >
                <FaArrowLeft />
                Back to All Stories
                <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
