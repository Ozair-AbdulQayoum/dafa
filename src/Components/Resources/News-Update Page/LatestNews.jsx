import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaSearch,
} from "react-icons/fa";

const newsUpdates = [
  {
    slug: "dafa-community-meeting",
    category: "Meetings",
    title: "DAFA Holds Community Meeting to Strengthen Local Engagement",
    description:
      "DAFA representatives meet with community members to discuss humanitarian mine action activities, safety concerns, and local priorities.",
    date: "December 18, 2025",
    location: "Kabul, Afghanistan",
    image: "/images/news-meeting.jpg",
  },
  {
    slug: "dafa-field-team-training",
    category: "Training",
    title: "DAFA Conducts Training for Humanitarian Mine Action Teams",
    description:
      "A capacity-building training program helps field teams strengthen their technical knowledge, safety practices, and operational skills.",
    date: "December 08, 2025",
    location: "Afghanistan",
    image: "/images/news-training.jpg",
  },
  {
    slug: "dafa-mou-partnership",
    category: "MOU & Partnerships",
    title:
      "DAFA Signs New Partnership Agreement to Support Humanitarian Action",
    description:
      "DAFA strengthens cooperation with partners through a new memorandum of understanding focused on humanitarian mine-action activities.",
    date: "November 24, 2025",
    location: "Kabul, Afghanistan",
    image: "/images/news-mou.jpg",
  },
  {
    slug: "dafa-stakeholder-meeting",
    category: "Meetings",
    title: "DAFA Meets With Humanitarian Partners",
    description:
      "DAFA meets with humanitarian stakeholders to discuss ongoing programs, operational priorities, and opportunities for collaboration.",
    date: "November 12, 2025",
    location: "Kabul, Afghanistan",
    image: "/images/news-stakeholder.jpg",
  },
  {
    slug: "mine-action-awareness-training",
    category: "Training",
    title: "Community Safety Awareness Training Conducted",
    description:
      "DAFA teams conduct awareness activities to help communities better understand explosive hazards and safer behavior.",
    date: "October 30, 2025",
    location: "Afghanistan",
    image: "/images/news-awareness.jpg",
  },
  {
    slug: "dafa-humanitarian-event",
    category: "Events",
    title: "DAFA Participates in Humanitarian Mine Action Event",
    description:
      "DAFA joins humanitarian organizations and partners to highlight the importance of mine action and community safety.",
    date: "October 16, 2025",
    location: "Kabul, Afghanistan",
    image: "/images/news-event.jpg",
  },
];

const categories = [
  "All Updates",
  "Meetings",
  "Training",
  "MOU & Partnerships",
  "Events",
  "Field Activities",
  "Announcements",
];

export default function LatestNews() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Updates");

  const featuredNews = newsUpdates[0];

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

  const archiveNews = filteredNews.filter(
    (item) => item.slug !== featuredNews.slug,
  );

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
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
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
            Latest From
            <span className="text-[#087B5A]"> DAFA</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Follow DAFA's latest humanitarian activities, partnerships,
            training, community engagement, and field operations across
            Afghanistan.
          </p>
        </motion.div>

        {/* =====================================================
            FEATURED STORY
        ===================================================== */}

        {!search && category === "All Updates" && (
          <motion.article
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative mt-14 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:shadow-2xl"
          >
            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
              {/* IMAGE */}

              <div className="relative min-h-[360px] overflow-hidden bg-[#0B3D2E] sm:min-h-[430px] lg:min-h-[500px]">
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#052E23]/80 via-transparent to-transparent" />

                {/* Featured Badge */}

                <div className="absolute left-6 top-6">
                  <span className="rounded-full bg-[#F97316] px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white shadow-lg">
                    Featured Story
                  </span>
                </div>

                {/* Location */}

                <div className="absolute bottom-6 left-6 flex items-center gap-2 text-sm font-semibold text-white">
                  <FaMapMarkerAlt size={12} className="text-[#F97316]" />

                  {featuredNews.location}
                </div>
              </div>

              {/* CONTENT */}

              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[#087B5A]/10 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#087B5A]">
                    {featuredNews.category}
                  </span>

                  <span className="h-1 w-1 rounded-full bg-slate-300" />

                  <span className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                    <FaCalendarAlt size={10} />
                    {featuredNews.date}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-extrabold leading-[1.2] tracking-tight text-[#0F172A] sm:text-3xl lg:text-4xl">
                  {featuredNews.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                  {featuredNews.description}
                </p>

                <Link
                  to={`/resources/news-updates/${featuredNews.slug}`}
                  className="group/cta mt-8 inline-flex w-fit items-center gap-3 rounded-xl bg-[#087B5A] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#087B5A]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B3D2E]"
                >
                  Read Full Story
                  <span className="transition-transform duration-300 group-hover/cta:translate-x-1">
                    <FaArrowRight size={11} />
                  </span>
                </Link>
              </div>
            </div>
          </motion.article>
        )}

        {/* =====================================================
            SEARCH + FILTER
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:flex-row">
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
                className="h-11 w-full rounded-xl bg-[#F8FAFC] pl-10 pr-4 text-sm font-medium text-[#0F172A] outline-none transition focus:bg-white focus:ring-2 focus:ring-[#087B5A]/10"
              />
            </div>

            {/* FILTER */}

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="h-11 rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 text-sm font-semibold text-[#0F172A] outline-none transition focus:border-[#087B5A]"
            >
              {categories.map((item) => (
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

        <div className="mt-14">
          <div className="mb-8 flex items-end justify-between gap-5">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#087B5A]">
                DAFA News Archive
              </p>

              <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0F172A] sm:text-3xl">
                Latest Updates
              </h3>
            </div>
          </div>

          {archiveNews.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {archiveNews.map((item, index) => (
                <motion.article
                  key={item.slug}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.07,
                  }}
                  whileHover={{ y: -7 }}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-[#087B5A]/20 hover:shadow-xl"
                >
                  {/* IMAGE */}

                  <div className="relative h-52 overflow-hidden bg-[#0B3D2E]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#052E23]/80 via-transparent to-transparent" />

                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#087B5A] shadow-sm">
                      {item.category}
                    </span>

                    <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs font-semibold text-white">
                      <FaMapMarkerAlt size={10} className="text-[#F97316]" />

                      {item.location}
                    </div>
                  </div>

                  {/* CONTENT */}

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.08em] text-slate-400">
                      <FaCalendarAlt size={9} className="text-[#087B5A]" />

                      {item.date}
                    </div>

                    <h3 className="mt-4 text-lg font-extrabold leading-[1.35] tracking-tight text-[#0F172A] transition-colors duration-300 group-hover:text-[#087B5A]">
                      {item.title}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-500">
                      {item.description}
                    </p>

                    <Link
                      to={`/resources/news-updates/${item.slug}`}
                      className="mt-6 inline-flex items-center gap-2 border-t border-slate-100 pt-5 text-xs font-bold text-[#087B5A] transition-all duration-300 group-hover:gap-3"
                    >
                      Read More
                      <FaArrowRight size={9} />
                    </Link>
                  </div>

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

        {/* =====================================================
            VIEW ALL NEWS
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 text-center"
        >
          <Link
            to="/resources/news-updates"
            className="group inline-flex items-center gap-3 rounded-xl border border-[#087B5A]/20 bg-white px-7 py-3.5 text-sm font-bold text-[#087B5A] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#087B5A] hover:bg-[#087B5A] hover:text-white hover:shadow-lg"
          >
            View All News
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <FaArrowRight size={11} />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
