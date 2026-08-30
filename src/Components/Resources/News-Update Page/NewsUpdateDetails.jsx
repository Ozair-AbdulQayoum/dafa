import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import {
  FaArrowLeft,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

import { newsDetailsData } from "../../Data File/News Update Data/NewsDetails";

export default function NewsUpdateDetails() {
  const { slug } = useParams();

  // =========================================================
  // FIND NEWS
  // =========================================================

  const news = newsDetailsData[slug];

  // =========================================================
  // SLIDER STATE
  // =========================================================

  const [currentImage, setCurrentImage] = useState(0);

  // =========================================================
  // GALLERY
  // =========================================================

  const gallery =
    news?.gallery?.length > 0 ? news.gallery : news ? [news.image] : [];

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
  // RESET SLIDER WHEN STORY CHANGES
  // =========================================================

  useEffect(() => {
    setCurrentImage(0);
  }, [slug]);

  // =========================================================
  // STORY NOT FOUND
  // =========================================================

  if (!news) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center bg-[#F8FAFC] px-5">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-[#0F172A]">
            News Update Not Found
          </h1>

          <p className="mt-3 text-slate-500">
            The news update you are looking for does not exist.
          </p>

          <Link
            to="/resources/news-updates"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#087B5A] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0B3D2E]"
          >
            <FaArrowLeft size={11} />
            Back to News & Updates
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#F8FAFC]">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#0B3D2E]">
        {/* Background Decoration */}

        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#087B5A]/20 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#F97316]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          {/* =================================================
              BACK
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <Link
              to="/resources/news-updates"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-green-100/80 transition-colors duration-300 hover:text-white"
            >
              <FaArrowLeft
                size={11}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              Back to News & Updates
            </Link>
          </motion.div>

          {/* =================================================
              HERO GRID
          ================================================= */}

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
            >
              {/* Category */}

              <span className="inline-flex rounded-full border border-[#A7F3D0]/20 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#A7F3D0]">
                {news.category}
              </span>

              {/* Title */}

              <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-[-0.025em] text-white sm:text-5xl lg:text-[3.5rem]">
                {news.title}
              </h1>

              {/* Intro */}

              <p className="mt-6 max-w-2xl text-[15px] leading-7 text-green-50/75 sm:text-base sm:leading-8">
                {news.intro}
              </p>

              {/* Metadata */}

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-green-100/65 sm:text-sm">
                <span className="flex items-center gap-2">
                  <FaCalendarAlt className="text-[#F97316]" size={12} />

                  {news.date}
                </span>

                <span className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-[#F97316]" size={12} />

                  {news.location}
                </span>
              </div>
            </motion.div>

            {/* =================================================
                RIGHT IMAGE AUTO SLIDER
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.9,
              }}
            >
              <div className="relative h-[350px] overflow-hidden rounded-3xl border border-white/10 shadow-2xl sm:h-[430px]">
                {/* Images */}

                <AnimatePresence mode="wait">
                  <motion.img
                    key={gallery[currentImage]}
                    src={gallery[currentImage]}
                    alt={news.title}
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
                    }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </AnimatePresence>

                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D2E]/80 via-transparent to-transparent" />

                {/* Location */}

                <div className="absolute bottom-6 left-6 flex items-center gap-2 text-sm font-semibold text-white">
                  <FaMapMarkerAlt size={12} className="text-[#F97316]" />

                  {news.location}
                </div>

                {/* Slider Indicators */}

                {gallery.length > 1 && (
                  <div className="absolute bottom-6 right-6 flex gap-2">
                    {gallery.map((image, index) => (
                      <button
                        key={image}
                        type="button"
                        aria-label={`Show image ${index + 1}`}
                        onClick={() => setCurrentImage(index)}
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ARTICLE
      ===================================================== */}

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-10">
          {/* =================================================
              ARTICLE
          ================================================= */}

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
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#087B5A]">
              News Update
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.02em] text-[#0F172A] sm:text-4xl">
              {news.articleTitle}
            </h2>

            <div className="mt-8 space-y-6">
              {news.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[15px] leading-8 text-slate-600 sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.article>

          {/* =================================================
              EVENT HIGHLIGHTS
          ================================================= */}

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
            className="mt-16"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#087B5A]">
              Event Highlights
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.02em] text-[#0F172A]">
              Key Highlights
            </h2>

            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {news.highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -5,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A]">
                      <Icon size={18} />
                    </div>

                    <h3 className="mt-5 text-base font-bold leading-snug text-[#0F172A]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[13px] leading-6 text-slate-500">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* =================================================
              CLOSING
          ================================================= */}

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
            className="mt-16 rounded-2xl border border-[#087B5A]/10 bg-[#0B3D2E] p-8 sm:p-10"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A7F3D0]">
              Looking Ahead
            </p>

            <p className="mt-4 max-w-3xl text-lg font-medium leading-8 tracking-[-0.01em] text-white/90 sm:text-xl sm:leading-9">
              {news.closing}
            </p>
          </motion.div>

          {/* =================================================
              BACK BUTTON
          ================================================= */}

          <div className="mt-10">
            <Link
              to="/resources/news-updates"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#087B5A] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#0B3D2E]"
            >
              <FaArrowLeft
                size={11}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              All News & Updates
              <FaArrowRight size={10} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
