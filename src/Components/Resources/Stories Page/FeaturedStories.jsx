import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaSearch,
} from "react-icons/fa";

const stories = [
  {
    slug: "safer-communities-afghanistan",
    category: "Community Impact",
    title: "Building Safer Communities Across Afghanistan",
    description:
      "Discover how humanitarian mine action is helping communities affected by explosive hazards move toward a safer future.",
    date: "December 15, 2025",
    location: "Afghanistan",
    image: "/images/story-community.jpg",
  },
  {
    slug: "field-team-making-difference",
    category: "From the Field",
    title: "Our Field Teams Making a Difference",
    description:
      "Meet the dedicated people working in challenging environments to reduce explosive hazards and protect communities.",
    date: "November 28, 2025",
    location: "Afghanistan",
    image: "/images/story-field-team.jpg",
  },
  {
    slug: "community-awareness-program",
    category: "Risk Education",
    title: "Creating Awareness, Protecting Lives",
    description:
      "Learn how community awareness and safety education help people recognize explosive hazards and make safer decisions.",
    date: "October 10, 2025",
    location: "Afghanistan",
    image: "/images/story-awareness.jpg",
  },
  {
    slug: "returning-safe-access",
    category: "Community Impact",
    title: "Restoring Safe Access for Communities",
    description:
      "Clearing contaminated land can help communities safely access homes, roads, farmland, and essential services.",
    date: "September 18, 2025",
    location: "Afghanistan",
    image: "/images/story-access.jpg",
  },
  {
    slug: "life-after-clearance",
    category: "Human Stories",
    title: "Life After Land Clearance",
    description:
      "A look at how communities can rebuild daily activities and create new opportunities after hazardous land is released.",
    date: "August 22, 2025",
    location: "Afghanistan",
    image: "/images/story-clearance.jpg",
  },
  {
    slug: "mine-action-teamwork",
    category: "From the Field",
    title: "Teamwork Behind Humanitarian Mine Action",
    description:
      "From field teams to community partners, discover the people working together to make affected areas safer.",
    date: "July 12, 2025",
    location: "Afghanistan",
    image: "/images/story-teamwork.jpg",
  },
];

const categories = [
  "All Stories",
  "Community Impact",
  "From the Field",
  "Risk Education",
  "Human Stories",
];

export default function FeaturedStories() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Stories");

  const filteredStories = useMemo(() => {
    const searchText = search.toLowerCase().trim();

    return stories.filter((story) => {
      const matchesSearch =
        !searchText ||
        story.title.toLowerCase().includes(searchText) ||
        story.description.toLowerCase().includes(searchText) ||
        story.category.toLowerCase().includes(searchText);

      const matchesCategory =
        category === "All Stories" || story.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const clearFilters = () => {
    setSearch("");
    setCategory("All Stories");
  };

  return (
    <section
      id="stories"
      className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-24"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#087B5A]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#F97316]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
            Stories Archive
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Stories From The <span className="text-[#087B5A]">Field</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Explore stories from DAFA's teams, communities, and humanitarian
            mine-action programs across Afghanistan.
          </p>
        </motion.div>

        {/* Search & Category */}
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
                placeholder="Search stories..."
                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-[#0F172A] outline-none transition focus:border-[#087B5A] focus:bg-white focus:ring-2 focus:ring-[#087B5A]/10"
              />
            </div>

            {/* Category */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-[#0F172A] outline-none transition focus:border-[#087B5A] focus:bg-white focus:ring-2 focus:ring-[#087B5A]/10"
            >
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            {/* Clear */}
            {(search || category !== "All Stories") && (
              <button
                type="button"
                onClick={clearFilters}
                className="h-12 rounded-xl border border-slate-200 px-5 text-sm font-semibold text-slate-600 transition hover:border-[#087B5A]/30 hover:text-[#087B5A]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Result Count */}
          <div className="mt-5 border-t border-slate-100 pt-4">
            <p className="text-xs font-medium text-slate-400">
              Showing{" "}
              <span className="font-bold text-[#087B5A]">
                {filteredStories.length}
              </span>{" "}
              {filteredStories.length === 1 ? "story" : "stories"}
            </p>
          </div>
        </motion.div>

        {/* Stories */}
        <div className="mt-12">
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
              Latest Stories
            </p>

            <h3 className="mt-2 text-2xl font-bold text-[#0F172A] sm:text-3xl">
              All Stories
            </h3>
          </div>

          {filteredStories.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredStories.map((story, index) => (
                <motion.article
                  key={story.slug}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.07,
                  }}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#087B5A]/30 hover:shadow-xl"
                >
                  {/* Image */}
                  <div className="relative h-60 overflow-hidden bg-[#0B3D2E]">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D2E]/80 via-transparent to-transparent" />

                    <span className="absolute left-5 top-5 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#087B5A] shadow-sm">
                      {story.category}
                    </span>

                    <div className="absolute bottom-5 left-5 flex items-center gap-2 text-xs font-medium text-white">
                      <FaMapMarkerAlt size={11} className="text-[#F97316]" />
                      {story.location}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                      <FaCalendarAlt size={10} className="text-[#087B5A]" />
                      {story.date}
                    </div>

                    <h3 className="mt-4 text-xl font-bold leading-snug text-[#0F172A] transition-colors group-hover:text-[#087B5A]">
                      {story.title}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-500">
                      {story.description}
                    </p>

                    <Link
                      to={`/resources/stories/${story.slug}`}
                      className="mt-6 inline-flex items-center gap-2 border-t border-slate-100 pt-5 text-sm font-bold text-[#087B5A] transition-all group-hover:gap-3"
                    >
                      Read Story
                      <FaArrowRight size={11} />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            /* Empty State */
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                <FaSearch size={18} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-[#0F172A]">
                No stories found
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Try changing your search or category filter.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="mt-5 text-sm font-bold text-[#087B5A] hover:underline"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
