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

  const filteredNews = useMemo(() => {
    const searchText = search.toLowerCase().trim();

    return newsUpdates.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchText) ||
        item.description.toLowerCase().includes(searchText) ||
        item.category.toLowerCase().includes(searchText);

      const matchesCategory =
        category === "All Updates" || item.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <section
      id="news"
      className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-24"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#087B5A]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#F97316]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
            Latest Updates
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            News &<span className="text-[#087B5A]"> Updates</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Follow the latest meetings, training activities, partnerships,
            events, and humanitarian mine-action updates from DAFA.
          </p>
        </motion.div>

        {/* ================= SEARCH + FILTER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-10 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <div className="flex flex-col gap-4 md:flex-row">
            {/* Search */}

            <div className="relative flex-1">
              <FaSearch
                size={14}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search news and updates..."
                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-[#0F172A] outline-none transition focus:border-[#087B5A] focus:bg-white focus:ring-2 focus:ring-[#087B5A]/10"
              />
            </div>

            {/* Category */}

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-[#0F172A] outline-none transition focus:border-[#087B5A] focus:bg-white"
            >
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* Result Count */}

          <div className="mt-5 border-t border-slate-100 pt-4">
            <p className="text-xs font-medium text-slate-400">
              Showing{" "}
              <span className="font-bold text-[#087B5A]">
                {filteredNews.length}
              </span>{" "}
              {filteredNews.length === 1 ? "update" : "updates"}
            </p>
          </div>
        </motion.div>

        {/* ================= ALL NEWS ================= */}

        <div className="mt-12">
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
              DAFA News Archive
            </p>

            <h3 className="mt-2 text-2xl font-bold text-[#0F172A] sm:text-3xl">
              All News & Updates
            </h3>
          </div>

          {filteredNews.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredNews.map((item, index) => (
                <motion.article
                  key={item.slug}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.07,
                  }}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#087B5A]/30 hover:shadow-xl"
                >
                  {/* ================= IMAGE ================= */}

                  <div className="relative h-60 overflow-hidden bg-[#0B3D2E]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D2E]/80 via-transparent to-transparent" />

                    {/* Category */}

                    <span className="absolute left-5 top-5 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#087B5A] shadow-sm">
                      {item.category}
                    </span>

                    {/* Location */}

                    <div className="absolute bottom-5 left-5 flex items-center gap-2 text-xs font-medium text-white">
                      <FaMapMarkerAlt size={11} className="text-[#F97316]" />

                      {item.location}
                    </div>
                  </div>

                  {/* ================= CONTENT ================= */}

                  <div className="p-6">
                    {/* Date */}

                    <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                      <FaCalendarAlt size={10} className="text-[#087B5A]" />

                      {item.date}
                    </div>

                    {/* Title */}

                    <h3 className="mt-4 text-xl font-bold leading-snug text-[#0F172A] transition-colors group-hover:text-[#087B5A]">
                      {item.title}
                    </h3>

                    {/* Description */}

                    <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-500">
                      {item.description}
                    </p>

                    {/* Read More */}

                    <Link
                      to={`/resources/news-updates/${item.slug}`}
                      className="mt-6 inline-flex items-center gap-2 border-t border-slate-100 pt-5 text-sm font-bold text-[#087B5A] transition-all group-hover:gap-3"
                    >
                      Read More
                      <FaArrowRight size={11} />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            /* ================= NO RESULTS ================= */

            <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                <FaSearch size={18} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-[#0F172A]">
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
                className="mt-5 text-sm font-bold text-[#087B5A] hover:underline"
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
