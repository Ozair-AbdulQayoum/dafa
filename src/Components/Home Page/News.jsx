import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaCalendarAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import { latestNews } from "../../Components/Data File/News Update Data/LatestNews";

export default function News() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = latestNews.gallery || [latestNews.image];

  /* =====================================================
     AUTO IMAGE SLIDER
  ===================================================== */

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImage((previous) => (previous + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images]);

  /* =====================================================
     NEXT IMAGE
  ===================================================== */

  const nextImage = () => {
    setCurrentImage((previous) => (previous + 1) % images.length);
  };

  /* =====================================================
     PREVIOUS IMAGE
  ===================================================== */

  const previousImage = () => {
    setCurrentImage(
      (previous) => (previous - 1 + images.length) % images.length,
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-24 sm:py-28">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#087B5A]/5 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#0284C7]/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            SECTION HEADING
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 rounded-full bg-[#087B5A]" />

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#087B5A] sm:text-sm">
              Latest Updates
            </p>

            <span className="h-[2px] w-10 rounded-full bg-[#087B5A]" />
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            News & <span className="text-[#087B5A]">Updates</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Stay connected with DAFA activities, achievements, meetings, and
            humanitarian efforts across Afghanistan.
          </p>
        </motion.div>

        {/* =====================================================
            ONLY LAST / LATEST NEWS CARD
        ===================================================== */}

        <motion.article
          initial={{
            opacity: 0,
            y: 45,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:shadow-xl"
        >
          <div className="grid lg:grid-cols-2">
            {/* =================================================
                IMAGE SLIDER
            ================================================= */}

            <div className="relative h-[320px] overflow-hidden bg-[#0B3D2E] sm:h-[380px] lg:h-[440px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={images[currentImage]}
                  src={images[currentImage]}
                  alt={latestNews.title}
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
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.9,
                  }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>

              {/* Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-[#031F18]/75 via-transparent to-transparent" />

              {/* Previous */}

              {images.length > 1 && (
                <button
                  type="button"
                  onClick={previousImage}
                  aria-label="Previous image"
                  className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/25 text-white backdrop-blur-md transition hover:bg-white hover:text-[#087B5A]"
                >
                  <FaChevronLeft size={13} />
                </button>
              )}

              {/* Next */}

              {images.length > 1 && (
                <button
                  type="button"
                  onClick={nextImage}
                  aria-label="Next image"
                  className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/25 text-white backdrop-blur-md transition hover:bg-white hover:text-[#087B5A]"
                >
                  <FaChevronRight size={13} />
                </button>
              )}

              {/* Slider Dots */}

              {images.length > 1 && (
                <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/25 px-3 py-2 backdrop-blur-md">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setCurrentImage(index)}
                      aria-label={`Show image ${index + 1}`}
                      className={`h-2 rounded-full transition-all duration-500 ${
                        currentImage === index
                          ? "w-7 bg-white"
                          : "w-2 bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* =================================================
                LATEST NEWS CONTENT
            ================================================= */}

            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              {/* Latest */}

              <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-[#087B5A]/10 px-4 py-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#087B5A]" />

                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#087B5A]">
                  Latest News
                </span>
              </div>

              {/* Category */}

              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#087B5A]">
                {latestNews.category}
              </p>

              {/* Date */}

              <div className="mt-3 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-400">
                <FaCalendarAlt className="text-[#087B5A]" />

                <span>{latestNews.date}</span>
              </div>

              {/* Title */}

              <h3 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-3xl">
                {latestNews.title}
              </h3>

              {/* Description */}

              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                {latestNews.description}
              </p>

              <div className="my-7 h-px bg-slate-100" />

              {/* Read More */}

              <Link
                to={`/resources/news-updates/${latestNews.slug}`}
                className="group inline-flex w-fit items-center gap-3 rounded-xl bg-[#087B5A] px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B3D2E]"
              >
                <span>Read More</span>

                <FaArrowRight
                  size={12}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </motion.article>

        {/* =====================================================
            VIEW ALL NEWS
        ===================================================== */}

        <div className="mt-10 text-center">
          <Link
            to="/resources/news-updates"
            className="group inline-flex items-center gap-3 rounded-xl border border-[#087B5A]/20 bg-white px-7 py-3.5 text-sm font-bold text-[#087B5A] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#087B5A] hover:bg-[#087B5A] hover:text-white"
          >
            <span>See More News & Meetings</span>

            <FaArrowRight
              size={11}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
