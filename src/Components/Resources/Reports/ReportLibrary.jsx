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
  FaDownload,
  FaExternalLinkAlt,
} from "react-icons/fa";

// =====================================================
// ADD OFFICIAL DAFA PDF FILES / COVER IMAGES HERE
// =====================================================

// Example:
// import annualReport2025 from "../../assets/reports/dafa-annual-report-2025.pdf";
// import annualReport2025Cover from "../../assets/reports/dafa-annual-report-2025-cover.jpg";

const reports = [
  {
    slug: "dafa-annual-report-2025",
    title: "DAFA Annual Report 2025",
    category: "Annual Reports",
    year: "2025",
    date: "December 2025",
    featured: true,

    // Add actual PDF path here
    pdf: "",

    // Add actual cover image here
    cover: "",

    description:
      "An overview of DAFA's humanitarian mine-action activities, achievements, projects, partnerships, and community impact during 2025.",
  },

  {
    slug: "humanitarian-mine-action-report-2024",
    title: "Humanitarian Mine Action Report 2024",
    category: "Program Reports",
    year: "2024",
    date: "December 2024",
    featured: false,
    pdf: "",
    cover: "",
    description:
      "A detailed summary of humanitarian mine-action activities, clearance operations, risk education, and community support.",
  },

  {
    slug: "operational-progress-report-2024",
    title: "Operational Progress Report 2024",
    category: "Operational Reports",
    year: "2024",
    date: "November 2024",
    featured: false,
    pdf: "",
    cover: "",
    description:
      "A summary of field operations, operational progress, affected areas, and mine-action activities.",
  },

  {
    slug: "dafa-impact-report-2023",
    title: "DAFA Impact Report 2023",
    category: "Impact Reports",
    year: "2023",
    date: "December 2023",
    featured: false,
    pdf: "",
    cover: "",
    description:
      "Highlights of DAFA's humanitarian impact, communities supported, land released, and people reached.",
  },

  {
    slug: "dafa-financial-report-2023",
    title: "DAFA Financial Report 2023",
    category: "Financial Reports",
    year: "2023",
    date: "December 2023",
    featured: false,
    pdf: "",
    cover: "",
    description:
      "Organizational financial information and reporting related to DAFA's humanitarian programs.",
  },

  {
    slug: "technical-clearance-report-2022",
    title: "Technical Clearance Report 2022",
    category: "Technical Reports",
    year: "2022",
    date: "November 2022",
    featured: false,
    pdf: "",
    cover: "",
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

  const latestReport = reports.find((report) => report.featured) || reports[0];

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
            FEATURED / LATEST REPORT
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
          className="mt-14 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
        >
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            {/* PDF COVER */}

            <div className="relative flex min-h-[390px] items-center justify-center overflow-hidden bg-[#0B3D2E] p-8 sm:p-12">
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#087B5A]/30 blur-3xl" />

              <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#F97316]/20 blur-3xl" />

              {latestReport.cover ? (
                <img
                  src={latestReport.cover}
                  alt={latestReport.title}
                  className="relative z-10 h-[300px] max-w-[220px] rounded-md object-cover shadow-2xl transition duration-500 hover:scale-[1.03]"
                />
              ) : (
                <div className="relative z-10 w-[220px] rotate-[-2deg] overflow-hidden rounded-md bg-white p-7 shadow-2xl transition duration-500 hover:rotate-0 hover:scale-[1.03]">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#087B5A]">
                      DAFA
                    </span>

                    <FaFilePdf className="text-[#F97316]" />
                  </div>

                  <div className="mt-5 h-1 w-12 bg-[#F97316]" />

                  <h3 className="mt-8 text-xl font-black leading-tight text-[#0F172A]">
                    {latestReport.title}
                  </h3>

                  <p className="mt-6 text-xs leading-5 text-slate-400">
                    Demining Agency for Afghanistan
                  </p>

                  <div className="mt-10 border-t border-slate-100 pt-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#087B5A]">
                      Annual Publication
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      {latestReport.year}
                    </p>
                  </div>
                </div>
              )}

              <span className="absolute left-6 top-6 z-20 rounded-full bg-[#F97316] px-4 py-2 text-[10px] font-black uppercase tracking-[0.15em] text-white shadow-lg">
                Latest Report
              </span>
            </div>

            {/* FEATURED CONTENT */}

            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#087B5A]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#087B5A]">
                  {latestReport.category}
                </span>

                <span className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                  <FaCalendarAlt className="text-[#F97316]" size={11} />
                  {latestReport.date}
                </span>
              </div>

              <h3 className="mt-6 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-[#0F172A] sm:text-4xl">
                {latestReport.title}
              </h3>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
                {latestReport.description}
              </p>

              {/* IMPACT DATA */}

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                <div className="rounded-xl bg-[#F8FAFC] p-4">
                  <p className="text-xl font-black text-[#087B5A]">2025</p>

                  <p className="mt-1 text-[11px] font-medium text-slate-500">
                    Reporting Year
                  </p>
                </div>

                <div className="rounded-xl bg-[#F8FAFC] p-4">
                  <p className="text-xl font-black text-[#087B5A]">Annual</p>

                  <p className="mt-1 text-[11px] font-medium text-slate-500">
                    Publication
                  </p>
                </div>

                <div className="col-span-2 rounded-xl bg-[#F8FAFC] p-4 sm:col-span-1">
                  <p className="text-xl font-black text-[#087B5A]">PDF</p>

                  <p className="mt-1 text-[11px] font-medium text-slate-500">
                    Document Format
                  </p>
                </div>
              </div>

              {/* ACTIONS */}

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  to={`/resources/reports/${latestReport.slug}`}
                  className="group inline-flex items-center gap-3 rounded-xl bg-[#087B5A] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#087B5A]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B3D2E] hover:shadow-xl"
                >
                  View Report
                  <FaArrowRight
                    size={11}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                {latestReport.pdf && (
                  <a
                    href={latestReport.pdf}
                    download
                    className="inline-flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-[#0F172A] transition-all duration-300 hover:-translate-y-1 hover:border-[#087B5A]/30 hover:text-[#087B5A]"
                  >
                    <FaDownload size={12} />
                    Download PDF
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            SEARCH + FILTERS
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#087B5A]">
                Publications Archive
              </p>

              <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0F172A] sm:text-3xl">
                Reports & Publications
              </h3>
            </div>

            <p className="text-sm text-slate-400">
              Official DAFA documentation
            </p>
          </div>

          {filteredReports.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredReports.map((report, index) => (
                <motion.article
                  key={report.slug}
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
                  {/* =====================================================
                      COVER
                  ===================================================== */}

                  <div className="relative flex h-56 items-center justify-center overflow-hidden bg-[#0B3D2E]">
                    {report.cover ? (
                      <img
                        src={report.cover}
                        alt={report.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="relative w-36 rotate-[-3deg] rounded-md bg-white p-5 shadow-xl transition duration-500 group-hover:rotate-0 group-hover:scale-105">
                        <div className="flex items-center justify-between">
                          <span className="text-[8px] font-black uppercase tracking-widest text-[#087B5A]">
                            DAFA
                          </span>

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

                    {/* OVERLAY */}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#052E23]/70 via-transparent to-transparent" />

                    {/* PDF */}

                    <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white backdrop-blur-md">
                      <FaFilePdf size={14} />
                    </span>

                    {report.featured && (
                      <span className="absolute left-4 top-4 rounded-full bg-[#F97316] px-3 py-1.5 text-[9px] font-black uppercase tracking-wider text-white">
                        Latest
                      </span>
                    )}
                  </div>

                  {/* =====================================================
                      CONTENT
                  ===================================================== */}

                  <div className="p-6">
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full bg-[#087B5A]/10 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-[#087B5A]">
                        {report.category}
                      </span>

                      <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                        <FaCalendarAlt size={9} className="text-[#F97316]" />

                        {report.year}
                      </span>
                    </div>

                    <h3 className="mt-5 text-lg font-extrabold leading-snug tracking-tight text-[#0F172A] transition-colors duration-300 group-hover:text-[#087B5A]">
                      {report.title}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
                      {report.description}
                    </p>

                    {/* ACTIONS */}

                    <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                      <Link
                        to={`/resources/reports/${report.slug}`}
                        className="group/link inline-flex items-center gap-2 text-sm font-bold text-[#087B5A]"
                      >
                        View Report
                        <FaArrowRight
                          size={10}
                          className="transition-transform duration-300 group-hover/link:translate-x-1"
                        />
                      </Link>

                      {report.pdf ? (
                        <a
                          href={report.pdf}
                          download
                          aria-label={`Download ${report.title}`}
                          className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition-all duration-300 hover:bg-[#087B5A]/10 hover:text-[#087B5A]"
                        >
                          <FaDownload size={12} />
                        </a>
                      ) : (
                        <span
                          title="PDF coming soon"
                          className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-300"
                        >
                          <FaFilePdf size={12} />
                        </span>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            /* EMPTY STATE */

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
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

        {/* =====================================================
            VIEW ALL REPORTS
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
            delay: 0.2,
          }}
          className="mt-14 text-center"
        >
          <Link
            to="/resources/reports"
            className="group inline-flex items-center gap-3 rounded-xl bg-[#087B5A] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#087B5A]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B3D2E] hover:shadow-xl"
          >
            <span>View All Reports</span>

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
              <FaArrowRight size={11} />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
