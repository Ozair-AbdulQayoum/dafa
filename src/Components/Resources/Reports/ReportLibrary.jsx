import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaFilter,
  FaFilePdf,
  FaCalendarAlt,
  FaTimes,
  FaDownload,
} from "react-icons/fa";

import {
  reports,
  categories,
  years,
} from "../../Data File/Reprot Data/ReportData";

export default function ReportLibrary() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [year, setYear] = useState("All Years");

  // =====================================================
  // FILTER REPORTS
  // =====================================================

  const filteredReports = useMemo(() => {
    const query = search.trim().toLowerCase();

    return reports.filter((report) => {
      const matchesSearch =
        !query ||
        report.title.toLowerCase().includes(query) ||
        report.description.toLowerCase().includes(query) ||
        report.category.toLowerCase().includes(query);

      const matchesCategory =
        category === "All Categories" || report.category === category;

      const matchesYear = year === "All Years" || report.year === year;

      return matchesSearch && matchesCategory && matchesYear;
    });
  }, [search, category, year]);

  // =====================================================
  // CLEAR FILTERS
  // =====================================================

  const clearFilters = () => {
    setSearch("");
    setCategory("All Categories");
    setYear("All Years");
  };

  return (
    <section
      id="reports"
      className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-28"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-48 top-20 h-96 w-96 rounded-full bg-[#087B5A]/5 blur-3xl" />

        <div className="absolute -right-48 bottom-20 h-96 w-96 rounded-full bg-[#F97316]/5 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.018]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(#0B3D2E 1px, transparent 1px), linear-gradient(90deg, #0B3D2E 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-9 rounded-full bg-[#F97316]" />

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#087B5A]">
              Publications & Reports
            </p>

            <span className="h-[2px] w-9 rounded-full bg-[#F97316]" />
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-[#0F172A] sm:text-5xl lg:text-[3.5rem]">
            Report
            <span className="text-[#087B5A]"> Library</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Explore DAFA's reports, publications, operational documentation, and
            impact reports covering humanitarian mine action across Afghanistan.
          </p>
        </motion.div>

        {/* =====================================================
            SEARCH + FILTERS
        ===================================================== */}

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
            delay: 0.15,
          }}
          className="mt-12 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
        >
          <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr_0.7fr_auto]">
            {/* SEARCH */}

            <div className="relative">
              <FaSearch
                size={13}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search reports..."
                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm font-medium text-[#0F172A] outline-none transition placeholder:text-slate-400 focus:border-[#087B5A] focus:bg-white focus:ring-2 focus:ring-[#087B5A]/10"
              />
            </div>

            {/* CATEGORY */}

            <div className="relative">
              <FaFilter
                size={12}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="h-12 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm font-medium text-[#0F172A] outline-none transition focus:border-[#087B5A] focus:bg-white"
              >
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* YEAR */}

            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-[#0F172A] outline-none transition focus:border-[#087B5A] focus:bg-white"
            >
              {years.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            {/* CLEAR */}

            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 text-sm font-semibold text-slate-600 transition hover:border-[#087B5A]/30 hover:text-[#087B5A]"
            >
              <FaTimes size={11} />
              Clear
            </button>
          </div>

          {/* FILTER COUNT */}

          <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
            <p className="text-xs font-medium text-slate-400">
              Showing{" "}
              <span className="font-bold text-[#087B5A]">
                {filteredReports.length}
              </span>{" "}
              {filteredReports.length === 1 ? "report" : "reports"}
            </p>

            {(search ||
              category !== "All Categories" ||
              year !== "All Years") && (
              <button
                type="button"
                onClick={clearFilters}
                className="text-xs font-bold text-[#087B5A] hover:underline"
              >
                Reset filters
              </button>
            )}
          </div>
        </motion.div>

        {/* =====================================================
            REPORT ARCHIVE
        ===================================================== */}

        <div className="mt-14">
          {/* ARCHIVE HEADER */}

          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#087B5A]">
                Publications Archive
              </p>

              <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0F172A] sm:text-3xl">
                Reports & Publications
              </h3>
            </div>

            <p className="text-sm text-slate-400">Official documentation</p>
          </div>

          {/* =================================================
              REPORT GRID
          ================================================= */}

          {filteredReports.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredReports.map((report, index) => (
                <motion.article
                  key={report.title}
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
                    margin: "-50px",
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.07,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:border-[#087B5A]/25 hover:shadow-xl"
                >
                  {/* =================================================
                        COVER
                    ================================================= */}

                  <div className="relative flex h-56 items-center justify-center overflow-hidden bg-[#0B3D2E]">
                    {report.cover ? (
                      <img
                        src={report.cover}
                        alt={report.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="relative w-36 rotate-[-3deg] rounded-md bg-white p-5 shadow-xl transition duration-500 group-hover:rotate-0 group-hover:scale-105">
                        <div className="flex justify-end">
                          <FaFilePdf size={12} className="text-[#F97316]" />
                        </div>

                        <div className="mt-3 h-1 w-8 bg-[#F97316]" />

                        <p className="mt-5 text-sm font-black leading-tight text-[#0F172A]">
                          {report.title}
                        </p>

                        <p className="mt-5 text-[9px] text-slate-400">
                          {report.year}
                        </p>
                      </div>
                    )}

                    {/* COVER OVERLAY */}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#052E23]/70 via-transparent to-transparent" />

                    {/* PDF ICON */}

                    <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white backdrop-blur-md">
                      <FaFilePdf size={14} />
                    </span>

                    {/* LATEST */}

                    {report.featured && (
                      <span className="absolute left-4 top-4 rounded-full bg-[#F97316] px-3 py-1.5 text-[9px] font-black uppercase tracking-wider text-white">
                        Latest
                      </span>
                    )}
                  </div>

                  {/* =================================================
                        CONTENT
                    ================================================= */}

                  <div className="p-6">
                    {/* CATEGORY + YEAR */}

                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full bg-[#087B5A]/10 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-[#087B5A]">
                        {report.category}
                      </span>

                      <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                        <FaCalendarAlt size={9} className="text-[#F97316]" />

                        {report.year}
                      </span>
                    </div>

                    {/* TITLE */}

                    <h3 className="mt-5 text-lg font-extrabold leading-snug tracking-tight text-[#0F172A] transition-colors duration-300 group-hover:text-[#087B5A]">
                      {report.title}
                    </h3>

                    {/* DESCRIPTION */}

                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
                      {report.description}
                    </p>

                    {/* =================================================
                          DOWNLOAD BUTTON
                      ================================================= */}

                    <div className="mt-6 border-t border-slate-100 pt-5">
                      <a
                        href={report.pdf || "#"}
                        download
                        onClick={(e) => {
                          if (!report.pdf) {
                            e.preventDefault();
                          }
                        }}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#087B5A] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3D2E] hover:shadow-lg"
                      >
                        <FaDownload size={12} />
                        Download PDF
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            /* =================================================
                EMPTY STATE
            ================================================= */

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center"
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
      </div>
    </section>
  );
}
