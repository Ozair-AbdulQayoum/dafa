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
    latestNews?.gallery?.length > 0
      ? latestNews.gallery
      : latestNews?.image
        ? [latestNews.image]
        : [];

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
        item.title?.toLowerCase().includes(searchText) ||
        item.description?.toLowerCase().includes(searchText) ||
        item.category?.toLowerCase().includes(searchText) ||
        item.location?.toLowerCase().includes(searchText);

      const matchesCategory =
        category === "All Updates" || item.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  // =========================================================
  // ARCHIVE NEWS
  // =========================================================

  const archiveNews = latestNews
    ? filteredNews.filter((item) => item.slug !== latestNews.slug)
    : filteredNews;

  // =========================================================
  // EMPTY STATE
  // =========================================================

  if (!latestNews) {
    return (
      <section className="bg-[#F7FBF8] px-5 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-extrabold text-[#0F172A]">
            No news updates available
          </h2>

          <p className="mt-3 text-sm text-slate-500">
            Please check back later for the latest DAFA updates.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="news"
      className="relative overflow-hidden bg-[#F7FBF8] py-24 sm:py-28 lg:py-32"
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
            className="group relative mt-14 overflow-hidden rounded-[2rem] border border-[#0B3D2E]/10 bg-[#0B3D2E] shadow-[0_18px_45px_rgba(15,23,42,0.10)]"
          >
            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
              {/* FEATURED IMAGE */}

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

                <div className="absolute inset-0 bg-gradient-to-t from-[#031F18]/90 via-[#0B3D2E]/20 to-transparent" />

                {/* FEATURED LOCATION */}

                <div className="absolute bottom-6 left-6 flex items-center gap-2 text-sm font-semibold text-white">
                  <FaMapMarkerAlt size={12} className="text-[#F97316]" />

                  {latestNews.location}
                </div>

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
                      className="absolute left-5 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-2xl text-white backdrop-blur-md transition-all duration-300 hover:bg-[#0B3D2E]/80"
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
                      className="absolute right-5 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-2xl text-white backdrop-blur-md transition-all duration-300 hover:bg-[#0B3D2E]/80"
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

              {/* FEATURED CONTENT */}

              <div className="flex flex-col justify-center bg-[#0B3D2E] p-7 sm:p-10 lg:p-12">
                <div className="mb-4 h-[3px] w-10 rounded-full bg-[#F97316]" />

                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/50">
                  <FaCalendarAlt size={10} />
                  {latestNews.date}
                </div>

                <h3 className="mt-6 text-2xl font-extrabold leading-[1.2] tracking-tight text-white sm:text-3xl lg:text-4xl">
                  {latestNews.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                  {latestNews.description}
                </p>

                <Link
                  to={`/resources/news-updates/${latestNews.slug}`}
                  className="group/cta mt-8 inline-flex w-fit items-center gap-3 border-b border-white/30 pb-1 text-xs font-bold text-white transition-all duration-300 hover:gap-4 hover:border-[#F97316] hover:text-[#F97316]"
                >
                  Read Full Story
                  <FaArrowRight
                    size={10}
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
          <div className="flex flex-col gap-3 rounded-2xl border border-[#0B3D2E]/10 bg-white p-3 shadow-sm sm:flex-row">
            {/* SEARCH */}

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
                className="h-11 w-full rounded-xl bg-[#F7FBF8] pl-10 pr-4 text-sm font-medium text-[#0F172A] outline-none transition-all duration-300 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-[#087B5A]/10"
              />
            </div>

            {/* CATEGORY */}

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="h-11 rounded-xl border border-slate-200 bg-[#F7FBF8] px-4 text-sm font-semibold text-[#0F172A] outline-none transition-all duration-300 focus:border-[#087B5A]"
            >
              {newsCategories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

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

        <div className="mt-16">
          <div className="mb-8">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-8 rounded-full bg-[#F97316]" />

              <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#087B5A]">
                DAFA News Archive
              </p>
            </div>

            <h3 className="text-2xl font-extrabold tracking-tight text-[#0F172A] sm:text-3xl">
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
                    margin: "-60px",
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.07,
                  }}
                  className="
                    group relative h-[450px] overflow-hidden
                    rounded-2xl border border-[#0B3D2E]/10
                    bg-[#0B3D2E]
                    shadow-[0_14px_35px_rgba(15,23,42,0.09)]
                    transition-all duration-500
                    hover:-translate-y-1
                    hover:shadow-[0_22px_50px_rgba(15,23,42,0.15)]
                    sm:h-[480px] sm:rounded-3xl
                  "
                >
                  {/* =================================================
                      IMAGE
                  ================================================= */}

                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="
                      absolute inset-0 h-full w-full object-cover
                      transition-transform duration-700 ease-out
                      group-hover:scale-[1.055]
                    "
                  />

                  {/* =================================================
                      OVERLAY
                  ================================================= */}

                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-t
                      from-[#031F18]
                      via-[#0B3D2E]/35
                      to-black/5
                      opacity-95
                    "
                  />

                  <div
                    className="
                      absolute inset-x-0 bottom-0 h-3/4
                      bg-gradient-to-t
                      from-[#031F18]
                      via-[#031F18]/80
                      to-transparent
                    "
                  />

                  {/* =================================================
                      TOP META
                  ================================================= */}

                  <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5 sm:p-6">
                    <span
                      className="
                        text-3xl font-light leading-none
                        tracking-[-0.05em]
                        text-white/90
                        sm:text-4xl
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className="
                        max-w-[55%]
                        rounded-full
                        border border-white/20
                        bg-[#031F18]/45
                        px-3 py-1.5
                        text-[9px] font-extrabold
                        uppercase tracking-[0.16em]
                        text-white
                        backdrop-blur-md
                      "
                    >
                      {item.category}
                    </span>
                  </div>

                  {/* =================================================
                      BOTTOM CONTENT
                  ================================================= */}

                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    {/* ORANGE ACCENT */}

                    <div
                      className="
                        mb-4 h-[3px] w-8 rounded-full
                        bg-[#F97316]
                        transition-all duration-500
                        group-hover:w-14
                      "
                    />

                    {/* LOCATION */}

                    <div
                      className="
                        mb-2 flex items-center gap-2
                        text-[11px] font-semibold
                        text-white/80
                      "
                    >
                      <FaMapMarkerAlt
                        size={10}
                        className="shrink-0 text-[#F97316]"
                      />

                      <span className="truncate">{item.location}</span>
                    </div>

                    {/* DATE */}

                    <div
                      className="
                        mb-3 flex items-center gap-2
                        text-[10px] font-bold uppercase
                        tracking-[0.1em]
                        text-white/50
                      "
                    >
                      <FaCalendarAlt size={9} className="text-[#F97316]" />

                      {item.date}
                    </div>

                    {/* TITLE */}

                    <h3
                      className="
                        text-xl font-extrabold
                        leading-[1.25]
                        tracking-tight
                        text-white
                        sm:text-[1.35rem]
                      "
                    >
                      {item.title}
                    </h3>

                    {/* DESCRIPTION */}

                    <p
                      className="
                        mt-3 line-clamp-2
                        text-sm leading-6
                        text-white/70
                      "
                    >
                      {item.description}
                    </p>

                    {/* CTA */}

                    <Link
                      to={`/resources/news-updates/${item.slug}`}
                      className="
                        mt-5 inline-flex min-h-10
                        items-center gap-3
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
                      Read More
                      <FaArrowRight
                        size={9}
                        className="
                          transition-transform duration-300
                          group-hover:translate-x-1
                        "
                      />
                    </Link>
                  </div>
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
                className="
                  mt-5 text-xs font-bold
                  text-[#087B5A]
                  transition-colors
                  hover:text-[#0B3D2E]
                  hover:underline
                "
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
