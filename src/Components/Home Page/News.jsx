// src/Components/Home-Page/News.jsx

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaCalendarAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import { newsData } from "../../Components/Main Page Data/NewsData";

export default function News() {
  const recentMeeting = newsData[0];

  const [currentImage, setCurrentImage] = useState(0);

  const images = recentMeeting.images;

  /* =========================================================
     AUTO IMAGE SLIDER
  ========================================================= */

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const slider = setInterval(() => {
      setCurrentImage((previous) => {
        return (previous + 1) % images.length;
      });
    }, 4000);

    return () => {
      clearInterval(slider);
    };
  }, [images]);

  /* =========================================================
     NEXT IMAGE
  ========================================================= */

  const nextImage = () => {
    setCurrentImage((previous) => {
      return (previous + 1) % images.length;
    });
  };

  /* =========================================================
     PREVIOUS IMAGE
  ========================================================= */

  const previousImage = () => {
    setCurrentImage((previous) => {
      return (previous - 1 + images.length) % images.length;
    });
  };

  /* =========================================================
     SELECT IMAGE
  ========================================================= */

  const selectImage = (index) => {
    setCurrentImage(index);
  };

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-24 sm:py-28">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#087B5A]/5 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#0284C7]/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            HEADING
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
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{
            once: true,
            margin: "-80px",
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
            RECENT MEETING CARD
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
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{
            once: true,
            margin: "-70px",
          }}
          className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:shadow-xl"
        >
          <div className="grid lg:grid-cols-2">
            {/* =================================================
                IMAGE SLIDER
            ================================================= */}

            <div className="relative h-[320px] overflow-hidden bg-[#0B3D2E] sm:h-[380px] lg:h-[440px]">
              {/* IMAGE */}

              <AnimatePresence mode="sync">
                <motion.img
                  key={images[currentImage]}
                  src={images[currentImage]}
                  alt={`${recentMeeting.title} - ${currentImage + 1}`}
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
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>

              {/* IMAGE OVERLAY */}

              <div className="absolute inset-0 bg-gradient-to-t from-[#031F18]/75 via-transparent to-transparent" />

              {/* CATEGORY */}

              <div className="absolute left-5 top-5">
                <span className="rounded-full bg-white/95 px-4 py-2 text-[11px] font-bold uppercase tracking-wide text-[#087B5A] shadow-lg">
                  {recentMeeting.category}
                </span>
              </div>

              {/* =================================================
                  PREVIOUS
              ================================================= */}

              {images.length > 1 && (
                <button
                  type="button"
                  onClick={previousImage}
                  aria-label="Previous meeting image"
                  className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/25 text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#087B5A]"
                >
                  <FaChevronLeft size={13} />
                </button>
              )}

              {/* =================================================
                  NEXT
              ================================================= */}

              {images.length > 1 && (
                <button
                  type="button"
                  onClick={nextImage}
                  aria-label="Next meeting image"
                  className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/25 text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#087B5A]"
                >
                  <FaChevronRight size={13} />
                </button>
              )}

              {/* =================================================
                  SLIDER DOTS
              ================================================= */}

              {images.length > 1 && (
                <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/25 px-3 py-2 backdrop-blur-md">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => selectImage(index)}
                      aria-label={`Show meeting image ${index + 1}`}
                      className={`h-2 rounded-full transition-all duration-500 ${
                        currentImage === index
                          ? "w-7 bg-white"
                          : "w-2 bg-white/50 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* =================================================
                CONTENT
            ================================================= */}

            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              {/* RECENT MEETING */}

              <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-[#087B5A]/10 px-4 py-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#087B5A]" />

                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#087B5A]">
                  Recent Meeting
                </span>
              </div>

              {/* DATE */}

              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-400">
                <FaCalendarAlt className="text-[#087B5A]" />

                <span>{recentMeeting.date}</span>
              </div>

              {/* TITLE */}

              <h3 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-3xl">
                {recentMeeting.title}
              </h3>

              {/* DESCRIPTION */}

              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                {recentMeeting.description}
              </p>

              {/* DIVIDER */}

              <div className="my-7 h-px bg-slate-100" />

              {/* READ MORE */}

              <Link
                to={recentMeeting.link}
                className="group inline-flex w-fit items-center gap-3 rounded-xl bg-[#087B5A] px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-[#087B5A]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B3D2E] hover:shadow-lg"
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
            SEE MORE
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="mt-10 text-center"
        >
          <Link
            to="/news-updates"
            className="group inline-flex items-center gap-3 rounded-xl border border-[#087B5A]/20 bg-white px-7 py-3.5 text-sm font-bold text-[#087B5A] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#087B5A] hover:bg-[#087B5A] hover:text-white hover:shadow-lg"
          >
            <span>See More News & Meetings</span>

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#087B5A]/10 transition-colors group-hover:bg-white/10">
              <FaArrowRight
                size={11}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
