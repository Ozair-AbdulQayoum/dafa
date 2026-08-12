import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaFilter,
  FaFilePdf,
  FaCalendarAlt,
  FaArrowRight,
  FaTimes,
} from "react-icons/fa";

const reports = [
  {
    slug: "dafa-annual-report-2025",
    title: "DAFA Annual Report 2025",
    category: "Annual Reports",
    year: "2025",
    description:
      "An overview of DAFA's humanitarian mine-action activities, achievements, projects, and community impact during 2025.",
  },
  {
    slug: "humanitarian-mine-action-report-2024",
    title: "Humanitarian Mine Action Report 2024",
    category: "Program Reports",
    year: "2024",
    description:
      "A detailed summary of humanitarian mine-action activities, clearance operations, risk education, and community support.",
  },
  {
    slug: "operational-progress-report-2024",
    title: "Operational Progress Report 2024",
    category: "Operational Reports",
    year: "2024",
    description:
      "A summary of field operations, operational progress, affected areas, and mine-action activities.",
  },
  {
    slug: "dafa-impact-report-2023",
    title: "DAFA Impact Report 2023",
    category: "Impact Reports",
    year: "2023",
    description:
      "Highlights of DAFA's humanitarian impact, communities supported, land released, and people reached.",
  },
  {
    slug: "dafa-financial-report-2023",
    title: "DAFA Financial Report 2023",
    category: "Financial Reports",
    year: "2023",
    description:
      "Organizational financial information and reporting related to DAFA's humanitarian programs.",
  },
  {
    slug: "technical-clearance-report-2022",
    title: "Technical Clearance Report 2022",
    category: "Technical Reports",
    year: "2022",
    description:
      "Technical documentation covering survey, clearance activities, safety procedures, and operational practices.",
  },
];

const categories = [
  "All Categories",
  "Annual Reports",
  "Program Reports",
  "Operational Reports",
  "Impact Reports",
  "Financial Reports",
  "Technical Reports",
];

const years = ["All Years", "2025", "2024", "2023", "2022"];

export default function ReportLibrary() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [year, setYear] = useState("All Years");

  const filteredReports = useMemo(() => {
    return reports.filter((report) => {
      const matchesSearch =
        report.title.toLowerCase().includes(search.toLowerCase()) ||
        report.description.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All Categories" || report.category === category;

      const matchesYear = year === "All Years" || report.year === year;

      return matchesSearch && matchesCategory && matchesYear;
    });
  }, [search, category, year]);

  const clearFilters = () => {
    setSearch("");
    setCategory("All Categories");
    setYear("All Years");
  };

  return (
    <section
      id="reports"
      className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-24"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-32 h-80 w-80 rounded-full bg-[#087B5A]/5 blur-3xl" />

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
            Publications Archive
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Report
            <span className="text-[#087B5A]"> Library</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Browse DAFA reports and publications by category, year, or keyword.
          </p>
        </motion.div>

        {/* Search & Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-12 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
        >
          <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr_0.7fr_auto]">
            {/* Search */}
            <div className="relative">
              <FaSearch
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                size={14}
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search reports..."
                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-[#0F172A] outline-none transition focus:border-[#087B5A] focus:bg-white focus:ring-2 focus:ring-[#087B5A]/10"
              />
            </div>

            {/* Category */}
            <div className="relative">
              <FaFilter
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                size={13}
              />

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="h-12 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm text-[#0F172A] outline-none transition focus:border-[#087B5A] focus:bg-white focus:ring-2 focus:ring-[#087B5A]/10"
              >
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* Year */}
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-[#0F172A] outline-none transition focus:border-[#087B5A] focus:bg-white focus:ring-2 focus:ring-[#087B5A]/10"
            >
              {years.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            {/* Clear */}
            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 text-sm font-semibold text-slate-600 transition hover:border-[#087B5A]/30 hover:text-[#087B5A]"
            >
              <FaTimes size={12} />
              Clear
            </button>
          </div>

          {/* Result Count */}
          <div className="mt-5 border-t border-slate-100 pt-4">
            <p className="text-xs font-medium text-slate-400">
              Showing{" "}
              <span className="font-bold text-[#087B5A]">
                {filteredReports.length}
              </span>{" "}
              {filteredReports.length === 1 ? "report" : "reports"}
            </p>
          </div>
        </motion.div>

        {/* Reports */}
        {filteredReports.length > 0 ? (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredReports.map((report, index) => (
              <motion.article
                key={report.slug}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#087B5A]/30 hover:shadow-xl"
              >
                {/* Report Cover */}
                <div className="relative flex h-48 items-center justify-center overflow-hidden bg-[#0B3D2E]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#087B5A]/40 to-[#0B3D2E]" />

                  <div className="relative w-36 rotate-[-3deg] rounded-md bg-white p-5 shadow-xl transition duration-500 group-hover:rotate-0 group-hover:scale-105">
                    <p className="text-[8px] font-bold uppercase tracking-widest text-[#087B5A]">
                      DAFA
                    </p>

                    <div className="mt-3 h-1 w-8 bg-[#F97316]" />

                    <p className="mt-4 text-sm font-black leading-tight text-[#0F172A]">
                      {report.title}
                    </p>

                    <p className="mt-5 text-[9px] text-slate-400">
                      {report.year}
                    </p>
                  </div>

                  {/* PDF Badge */}
                  <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white backdrop-blur-sm">
                    <FaFilePdf size={15} />
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-[#087B5A]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#087B5A]">
                      {report.category}
                    </span>

                    <span className="flex items-center gap-1.5 text-xs font-medium text-slate-400">
                      <FaCalendarAlt size={10} />
                      {report.year}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold leading-snug text-[#0F172A]">
                    {report.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
                    {report.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                    <Link
                      to={`/resources/reports/${report.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#087B5A] transition hover:gap-3"
                    >
                      View Report
                      <FaArrowRight size={11} />
                    </Link>

                    <button
                      type="button"
                      aria-label={`Download ${report.title}`}
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition hover:bg-[#087B5A]/10 hover:text-[#087B5A]"
                    >
                      <FaFilePdf size={14} />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          /* Empty State */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-400">
              <FaSearch size={18} />
            </div>

            <h3 className="mt-5 text-lg font-bold text-[#0F172A]">
              No reports found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try changing your search or filter options.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-5 text-sm font-bold text-[#087B5A] hover:underline"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
