import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
  FaArrowLeft,
} from "react-icons/fa";

import { stories } from "../../Data File/Store Data/StoriesDetailsData";

export default function StoriesDetails() {
  const { slug } = useParams();

  // ======================================================
  // FIND STORY BY SLUG
  // ======================================================

  const story = stories.find((item) => item.slug === slug);

  // ======================================================
  // STORY IMAGES
  // ======================================================

  const images =
    story?.images && story.images.length > 0
      ? story.images
      : ["/images/story-placeholder.jpg"];

  // ======================================================
  // IMAGE SLIDER STATE
  // ======================================================

  const [currentImage, setCurrentImage] = useState(0);

  // ======================================================
  // RESET IMAGE WHEN STORY CHANGES
  // ======================================================

  useEffect(() => {
    setCurrentImage(0);
  }, [slug]);

  // ======================================================
  // AUTO IMAGE SLIDER
  // ======================================================

  useEffect(() => {
    if (!story || images.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [story, images.length]);

  // ======================================================
  // NEXT IMAGE
  // ======================================================

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  // ======================================================
  // PREVIOUS IMAGE
  // ======================================================

  const previousImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  // ======================================================
  // STORY NOT FOUND
  // ======================================================

  if (!story) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-[#F8FAFC] px-5">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#087B5A]">
            Story Not Found
          </p>

          <h1 className="mt-3 text-3xl font-bold text-[#0F172A]">
            We couldn't find this story
          </h1>

          <p className="mx-auto mt-4 max-w-md text-slate-500">
            The story you're looking for may have been removed or the link may
            be incorrect.
          </p>

          <Link
            to="/stories"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#087B5A] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0B3D2E]"
          >
            <FaArrowLeft size={11} />
            Back to Stories
          </Link>
        </div>
      </main>
    );
  }

  // ======================================================
  // RENDER
  // ======================================================

  return (
    <main className="bg-[#F8FAFC]">
      {/* ==================================================
          STORY HERO
      ================================================== */}

      <section className="relative overflow-hidden bg-[#0B3D2E]">
        {/* Background Decorations */}

        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#087B5A]/20 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#F97316]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* ==================================================
                HERO CONTENT
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: -35,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
            >
              {/* CATEGORY */}

              <span className="inline-flex rounded-full border border-[#A7F3D0]/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#A7F3D0]">
                {story.category}
              </span>

              {/* TITLE */}

              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                {story.title}
              </h1>

              {/* DESCRIPTION */}

              <p className="mt-6 max-w-xl text-base leading-8 text-green-50/80 sm:text-lg">
                {story.description}
              </p>

              {/* META */}

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-green-100/70">
                <span className="flex items-center gap-2">
                  <FaCalendarAlt size={13} className="text-[#F97316]" />

                  {story.date}
                </span>

                <span className="flex items-center gap-2">
                  <FaMapMarkerAlt size={13} className="text-[#F97316]" />

                  {story.location}
                </span>
              </div>
            </motion.div>

            {/* ==================================================
                IMAGE SLIDER
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: 35,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.15,
              }}
              className="relative"
            >
              <div className="relative h-[380px] overflow-hidden rounded-3xl border border-white/10 bg-[#174E3D] shadow-2xl sm:h-[480px]">
                {/* IMAGE */}

                <AnimatePresence mode="wait">
                  <motion.img
                    key={images[currentImage]}
                    src={images[currentImage]}
                    alt={`${story.title} - image ${currentImage + 1}`}
                    initial={{
                      opacity: 0,
                      scale: 1.04,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 1.02,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </AnimatePresence>

                {/* IMAGE OVERLAY */}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B3D2E]/80 via-transparent to-transparent" />

                {/* ==================================================
                    PREVIOUS BUTTON
                ================================================== */}

                {images.length > 1 && (
                  <button
                    type="button"
                    onClick={previousImage}
                    aria-label="Previous image"
                    className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition hover:bg-white hover:text-[#0B3D2E]"
                  >
                    <FaChevronLeft size={12} />
                  </button>
                )}

                {/* ==================================================
                    NEXT BUTTON
                ================================================== */}

                {images.length > 1 && (
                  <button
                    type="button"
                    onClick={nextImage}
                    aria-label="Next image"
                    className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition hover:bg-white hover:text-[#0B3D2E]"
                  >
                    <FaChevronRight size={12} />
                  </button>
                )}

                {/* ==================================================
                    IMAGE INDICATORS
                ================================================== */}

                {images.length > 1 && (
                  <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/20 px-3 py-2 backdrop-blur-md">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setCurrentImage(index)}
                        aria-label={`Go to image ${index + 1}`}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          currentImage === index
                            ? "w-6 bg-[#F97316]"
                            : "w-2 bg-white/60 hover:bg-white"
                        }`}
                      />
                    ))}
                  </div>
                )}

                {/* IMAGE COUNTER */}

                {images.length > 1 && (
                  <div className="absolute right-5 top-5 z-20 rounded-full bg-black/25 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                    {currentImage + 1} / {images.length}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================================================
          STORY CONTENT
      ================================================== */}

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_320px] lg:px-10">
          {/* ==================================================
              ARTICLE
          ================================================== */}

          <motion.article
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
            }}
            transition={{
              duration: 0.7,
            }}
            className="max-w-3xl"
          >
            {/* LABEL */}

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
              The Story
            </p>

            {/* TITLE */}

            <h2 className="mt-3 text-3xl font-bold text-[#0F172A] sm:text-4xl">
              {story.title}
            </h2>

            {/* CONTENT */}

            <div className="mt-8 space-y-6">
              {story.content?.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base leading-8 text-slate-600 sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.article>

          {/* ==================================================
              STORY INFORMATION
          ================================================== */}

          <motion.aside
            initial={{
              opacity: 0,
              x: 25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#0F172A]">
                Story Information
              </h3>

              <div className="mt-6 space-y-5">
                {/* CATEGORY */}

                <div>
                  <p className="text-xs text-slate-400">Category</p>

                  <p className="mt-1 text-sm font-semibold text-[#087B5A]">
                    {story.category}
                  </p>
                </div>

                {/* DATE */}

                <div>
                  <p className="text-xs text-slate-400">Published</p>

                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    {story.date}
                  </p>
                </div>

                {/* LOCATION */}

                <div>
                  <p className="text-xs text-slate-400">Location</p>

                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    {story.location}
                  </p>
                </div>

                {/* IMPACT */}

                {story.impact && (
                  <div>
                    <p className="text-xs text-slate-400">Impact</p>

                    <p className="mt-1 text-sm font-semibold text-[#087B5A]">
                      {story.impact}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      {/* ==================================================
          HIGHLIGHT QUOTE
      ================================================== */}

      {story.quote && (
        <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10">
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
            }}
            transition={{
              duration: 0.7,
            }}
            className="mx-auto max-w-5xl rounded-3xl bg-[#0B3D2E] p-8 sm:p-12 lg:p-14"
          >
            <FaQuoteLeft size={28} className="text-[#F97316]" />

            <blockquote className="mt-6 text-2xl font-semibold leading-9 text-white sm:text-3xl sm:leading-10">
              {story.quote}
            </blockquote>
          </motion.div>
        </section>
      )}

      {/* ==================================================
          BACK TO STORIES
      ================================================== */}

      <section className="px-5 pb-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <Link
            to="/stories"
            className="group inline-flex items-center gap-2 text-sm font-bold text-[#087B5A]"
          >
            <FaArrowLeft
              size={11}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to All Stories
          </Link>
        </div>
      </section>
    </main>
  );
}
