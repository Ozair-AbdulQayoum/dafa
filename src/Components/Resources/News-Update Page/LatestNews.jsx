// src/Components/News/LatestNews.jsx

import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaSearch,
} from "react-icons/fa";

import {
  newsUpdates,
  newsCategories,
} from "../../Data File/News Update Data/LatestNews";

export default function LatestNews() {
  // =========================================================
  // STATE
  // =========================================================

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Updates");
  const [currentImage, setCurrentImage] = useState(0);

  // =========================================================
  // LATEST NEWS
  // =========================================================

  const latestNews = newsUpdates[0];

  // =========================================================
  // LATEST NEWS GALLERY
  // =========================================================

  const latestGallery =
    latestNews?.gallery?.length > 0 ? latestNews.gallery : [latestNews.image];

  // =========================================================
  // AUTO IMAGE SLIDER
  // =========================================================

  useEffect(() => {
    if (latestGallery.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImage((previous) => (previous + 1) % latestGallery.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [latestGallery.length]);

  // =========================================================
  // FILTER NEWS
  // =========================================================

  const filteredNews = useMemo(() => {
    const searchText = search.toLowerCase().trim();

    return newsUpdates.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchText) ||
        item.description.toLowerCase().includes(searchText) ||
        item.category.toLowerCase().includes(searchText) ||
        item.location.toLowerCase().includes(searchText);

      const matchesCategory =
        category === "All Updates" || item.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  // =========================================================
  // OTHER NEWS
  // =========================================================

  const archiveNews = filteredNews.filter(
    (item) => item.slug !== latestNews.slug,
  );

  if (!latestNews) {
    return null;
  }

  return (
    <section
      id="news"
      className="relative overflow-hidden bg-[#F8FAFC] py-24 sm:py-28 lg:py-32"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-52 -top-52 h-[500px] w-[500px] rounded-full bg-[#087B5A]/5 blur-3xl" />

        <div className="absolute -bottom-52 -right-52 h-[500px] w-[500px] rounded-full bg-[#F97316]/5 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.018]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(#0B3D2E 1px, transparent 1px), linear-gradient(90deg, #0B3D2E 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 rounded-full bg-[#F97316]" />

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#087B5A] sm:text-sm">
              News & Updates
            </span>

            <span className="h-[2px] w-10 rounded-full bg-[#F97316]" />
          </div>

          <h2 className="text-3xl font-extrabold leading-[1.08] tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Latest From <span className="text-[#087B5A]">DAFA</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Follow DAFA's latest humanitarian activities, partnerships,
            training, community engagement, and field operations across
            Afghanistan.
          </p>
        </motion.div>

        {/* =====================================================
            FEATURED LATEST NEWS
        ===================================================== */}

        {!search && category === "All Updates" && (
          <motion.article
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              margin: "-80px",
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="group relative mt-14 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:shadow-2xl"
          >
            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
              {/* =================================================
                  FEATURED IMAGE SLIDER
              ================================================= */}

              <div className="relative min-h-[360px] overflow-hidden bg-[#0B3D2E] sm:min-h-[430px] lg:min-h-[520px]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={latestGallery[currentImage]}
                    src={latestGallery[currentImage]}
                    alt={latestNews.title}
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

                <div className="absolute inset-0 bg-gradient-to-t from-[#052E23]/85 via-black/10 to-transparent" />

                {/* Location */}

                <div className="absolute bottom-6 left-6 flex items-center gap-2 text-sm font-semibold text-white">
                  <FaMapMarkerAlt size={12} className="text-[#F97316]" />

                  {latestNews.location}
                </div>

                {/* Slider */}

                {latestGallery.length > 1 && (
                  <>
                    <button
                      type="button"
                      aria-label="Previous image"
                      onClick={() =>
                        setCurrentImage(
                          (currentImage - 1 + latestGallery.length) %
                            latestGallery.length,
                        )
                      }
                      className="absolute left-5 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-2xl text-white backdrop-blur-sm transition hover:bg-black/50"
                    >
                      ‹
                    </button>

                    <button
                      type="button"
                      aria-label="Next image"
                      onClick={() =>
                        setCurrentImage(
                          (currentImage + 1) % latestGallery.length,
                        )
                      }
                      className="absolute right-5 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-2xl text-white backdrop-blur-sm transition hover:bg-black/50"
                    >
                      ›
                    </button>

                    <div className="absolute bottom-6 right-6 flex gap-2">
                      {latestGallery.map((image, index) => (
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
                  </>
                )}
              </div>

              {/* =================================================
                  FEATURED CONTENT
              ================================================= */}

              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                {/* Date Only */}

                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                  <FaCalendarAlt size={10} />

                  {latestNews.date}
                </div>

                {/* Title */}

                <h3 className="mt-6 text-2xl font-extrabold leading-[1.2] tracking-tight text-[#0F172A] sm:text-3xl lg:text-4xl">
                  {latestNews.title}
                </h3>

                {/* Description */}

                <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                  {latestNews.description}
                </p>

                {/* Read Story */}

                <Link
                  to={`/resources/news-updates/${latestNews.slug}`}
                  className="group/cta mt-8 inline-flex w-fit items-center gap-3 rounded-xl bg-[#087B5A] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#087B5A]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B3D2E]"
                >
                  Read Full Story
                  <FaArrowRight
                    size={11}
                    className="transition-transform duration-300 group-hover/cta:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </motion.article>
        )}

        {/* =====================================================
            SEARCH + FILTER
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
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-12"
        >
          <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:flex-row">
            {/* Search */}

            <div className="relative flex-1">
              <FaSearch
                size={12}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search news..."
                className="h-11 w-full rounded-xl bg-[#F8FAFC] pl-10 pr-4 text-sm font-medium text-[#0F172A] outline-none transition focus:bg-white focus:ring-2 focus:ring-[#087B5A]/10"
              />
            </div>

            {/* Category Filter */}

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="h-11 rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 text-sm font-semibold text-[#0F172A] outline-none transition focus:border-[#087B5A]"
            >
              {newsCategories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* Result Count */}

          {(search || category !== "All Updates") && (
            <p className="mt-3 text-xs font-medium text-slate-400">
              Showing{" "}
              <span className="font-bold text-[#087B5A]">
                {filteredNews.length}
              </span>{" "}
              {filteredNews.length === 1 ? "update" : "updates"}
            </p>
          )}
        </motion.div>

        {/* =====================================================
            NEWS ARCHIVE
        ===================================================== */}

        <div className="mt-14">
          <div className="mb-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#087B5A]">
              DAFA News Archive
            </p>

            <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0F172A] sm:text-3xl">
              More Updates
            </h3>
          </div>

          {archiveNews.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {archiveNews.map((item, index) => (
                <motion.article
                  key={item.slug}
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
                    duration: 0.55,
                    delay: index * 0.07,
                  }}
                  whileHover={{
                    y: -7,
                  }}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-[#087B5A]/20 hover:shadow-xl"
                >
                  {/* Card Image */}

                  <div className="relative h-52 overflow-hidden bg-[#0B3D2E]">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#052E23]/80 via-transparent to-transparent" />

                    {/* Location Only */}

                    <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs font-semibold text-white">
                      <FaMapMarkerAlt size={10} className="text-[#F97316]" />

                      {item.location}
                    </div>
                  </div>

                  {/* Card Content */}

                  <div className="p-6">
                    {/* Date */}

                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.08em] text-slate-400">
                      <FaCalendarAlt size={9} className="text-[#087B5A]" />

                      {item.date}
                    </div>

                    {/* Title */}

                    <h3 className="mt-4 text-lg font-extrabold leading-[1.35] tracking-tight text-[#0F172A] transition-colors duration-300 group-hover:text-[#087B5A]">
                      {item.title}
                    </h3>

                    {/* Description */}

                    <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-500">
                      {item.description}
                    </p>

                    {/* Read More */}

                    <Link
                      to={`/resources/news-updates/${item.slug}`}
                      className="mt-6 inline-flex items-center gap-2 border-t border-slate-100 pt-5 text-xs font-bold text-[#087B5A] transition-all duration-300 group-hover:gap-3"
                    >
                      Read More
                      <FaArrowRight size={9} />
                    </Link>
                  </div>

                  {/* Bottom Accent */}

                  <div className="h-1 w-0 bg-[#F97316] transition-all duration-500 group-hover:w-full" />
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                <FaSearch size={18} />
              </div>

              <h3 className="mt-5 text-lg font-extrabold text-[#0F172A]">
                No updates found
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Try changing your search or category filter.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCategory("All Updates");
                }}
                className="mt-5 text-xs font-bold text-[#087B5A] hover:underline"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
