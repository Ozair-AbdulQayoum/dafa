// src/Components/Home-Page/SuccessStories.jsx

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCheck, FaMapMarkerAlt } from "react-icons/fa";

// ======================================================
// STORIES DATA
// ======================================================

import { stories } from "../../Components/Data File/Store Data/StoriesData";

export default function SuccessStories() {
  // ======================================================
  // GET LATEST STORY AUTOMATICALLY
  // Newest story based on date
  // ======================================================

  const recentStory = React.useMemo(() => {
    if (!stories?.length) {
      return null;
    }

    return [...stories].sort((a, b) => new Date(b.date) - new Date(a.date))[0];
  }, []);

  // ======================================================
  // IMAGE SLIDER STATE
  // ======================================================

  const [currentImage, setCurrentImage] = useState(0);

  // ======================================================
  // RESET IMAGE WHEN STORY CHANGES
  // ======================================================

  useEffect(() => {
    setCurrentImage(0);
  }, [recentStory?.slug]);

  // ======================================================
  // AUTO IMAGE SLIDER
  // ======================================================

  useEffect(() => {
    if (!recentStory?.images || recentStory.images.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % recentStory.images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [recentStory?.slug, recentStory?.images?.length]);

  // ======================================================
  // SAFETY CHECK
  // ======================================================

  if (!recentStory) {
    return null;
  }

  // ======================================================
  // RENDER
  // ======================================================

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-24 sm:py-28">
      {/* ==================================================
          BACKGROUND DECORATIONS
      ================================================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#087B5A]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#0284C7]/5 blur-3xl" />

      {/* ==================================================
          MAIN CONTAINER
      ================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ==================================================
            SECTION HEADER
        ================================================== */}

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
            margin: "-100px",
          }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#087B5A]/40" />

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#087B5A] sm:text-sm">
              Success Stories
            </p>

            <span className="h-px w-10 bg-[#087B5A]/40" />
          </div>

          <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Stories of Hope
            <span className="block text-[#087B5A]">From Communities</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Real stories showing how humanitarian mine action helps create safer
            communities and restores opportunities across Afghanistan.
          </p>
        </motion.div>

        {/* ==================================================
            LATEST STORY
            ONLY ONE STORY ON HOME PAGE
        ================================================== */}

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
            margin: "-80px",
          }}
          whileHover={{
            y: -6,
          }}
          className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
        >
          <div className="grid md:grid-cols-2">
            {/* =================================================
                LEFT — IMAGE SLIDER
            ================================================= */}

            <div className="relative min-h-[320px] overflow-hidden bg-[#0B3D2E] md:min-h-[430px]">
              {recentStory.images?.length > 0 ? (
                <AnimatePresence mode="wait">
                  <motion.img
                    key={recentStory.images[currentImage]}
                    src={recentStory.images[currentImage]}
                    alt={recentStory.title}
                    initial={{
                      opacity: 0,
                      scale: 1.08,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 1.03,
                    }}
                    transition={{
                      duration: 1.2,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </AnimatePresence>
              ) : (
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A7F3D0]">
                      DAFA
                    </p>

                    <p className="mt-2 text-xs text-green-100/50">
                      Story Image
                    </p>
                  </div>
                </div>
              )}

              {/* IMAGE OVERLAY */}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#031F18]/75 via-transparent to-[#031F18]/10" />

              {/* =================================================
                  LOCATION
              ================================================= */}

              {recentStory.location && (
                <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-bold text-[#087B5A] shadow-lg">
                  <FaMapMarkerAlt />

                  {recentStory.location}
                </div>
              )}

              {/* =================================================
                  SLIDER INDICATORS
              ================================================= */}

              {recentStory.images?.length > 1 && (
                <div className="absolute bottom-5 right-5 flex items-center gap-2 rounded-full bg-black/25 px-3 py-2 backdrop-blur-md">
                  {recentStory.images.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setCurrentImage(index)}
                      aria-label={`Show image ${index + 1}`}
                      className={`h-2 rounded-full transition-all duration-500 ${
                        currentImage === index
                          ? "w-6 bg-white"
                          : "w-2 bg-white/50 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* =================================================
                RIGHT — STORY CONTENT
            ================================================= */}

            <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-11">
              {/* CATEGORY */}

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
                {recentStory.category}
              </p>

              {/* TITLE */}

              <h3 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-3xl">
                {recentStory.title}
              </h3>

              {/* DATE */}

              <p className="mt-3 text-xs font-medium text-slate-400">
                {recentStory.date}
              </p>

              {/* DESCRIPTION */}

              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                {recentStory.description}
              </p>

              {/* IMPACT */}

              {recentStory.impact && (
                <div className="mt-7 flex items-center gap-3 rounded-xl border border-[#087B5A]/10 bg-[#087B5A]/5 px-4 py-3.5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#087B5A] text-xs text-white">
                    <FaCheck />
                  </span>

                  <span className="text-sm font-bold text-[#087B5A]">
                    {recentStory.impact}
                  </span>
                </div>
              )}

              {/* READ STORY */}

              <Link
                to={`/resources/stories/${recentStory.slug}`}
                className="group/link mt-7 inline-flex w-fit items-center gap-2 text-sm font-bold text-[#087B5A]"
              >
                Read Full Story
                <FaArrowRight
                  size={12}
                  className="transition-transform duration-300 group-hover/link:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </motion.article>

        {/* ==================================================
            VIEW ALL STORIES
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
          className="mt-12 text-center"
        >
          <Link
            to="/resources/stories"
            className="group inline-flex items-center gap-3 rounded-xl bg-[#087B5A] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#087B5A]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B3D2E] hover:shadow-xl"
          >
            <span>View All Stories</span>

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-white/20">
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
