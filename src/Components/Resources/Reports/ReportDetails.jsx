import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCalendarAlt,
  FaDownload,
  FaFilePdf,
  FaFolderOpen,
  FaMapMarkerAlt,
} from "react-icons/fa";

const reports = [
  {
    slug: "dafa-annual-report-2025",
    title: "DAFA Annual Report 2025",
    category: "Annual Reports",
    year: "2025",
    description:
      "An overview of DAFA's humanitarian mine-action activities, achievements, projects, and community impact during 2025.",
    pages: "Coming Soon",
    language: "English",
    fileSize: "Coming Soon",
    pdf: null,
  },
  {
    slug: "humanitarian-mine-action-report-2024",
    title: "Humanitarian Mine Action Report 2024",
    category: "Program Reports",
    year: "2024",
    description:
      "A detailed summary of humanitarian mine-action activities, clearance operations, risk education, and community support.",
    pages: "Coming Soon",
    language: "English",
    fileSize: "Coming Soon",
    pdf: null,
  },
  {
    slug: "operational-progress-report-2024",
    title: "Operational Progress Report 2024",
    category: "Operational Reports",
    year: "2024",
    description:
      "A summary of field operations, operational progress, affected areas, and mine-action activities.",
    pages: "Coming Soon",
    language: "English",
    fileSize: "Coming Soon",
    pdf: null,
  },
  {
    slug: "dafa-impact-report-2023",
    title: "DAFA Impact Report 2023",
    category: "Impact Reports",
    year: "2023",
    description:
      "Highlights of DAFA's humanitarian impact, communities supported, land released, and people reached.",
    pages: "Coming Soon",
    language: "English",
    fileSize: "Coming Soon",
    pdf: null,
  },
  {
    slug: "dafa-financial-report-2023",
    title: "DAFA Financial Report 2023",
    category: "Financial Reports",
    year: "2023",
    description:
      "Organizational financial information and reporting related to DAFA's humanitarian programs.",
    pages: "Coming Soon",
    language: "English",
    fileSize: "Coming Soon",
    pdf: null,
  },
  {
    slug: "technical-clearance-report-2022",
    title: "Technical Clearance Report 2022",
    category: "Technical Reports",
    year: "2022",
    description:
      "Technical documentation covering survey, clearance activities, safety procedures, and operational practices.",
    pages: "Coming Soon",
    language: "English",
    fileSize: "Coming Soon",
    pdf: null,
  },
];

export default function ReportDetails() {
  const { slug } = useParams();

  const report = reports.find((item) => item.slug === slug);

  // ================= NOT FOUND =================

  if (!report) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center bg-[#F8FAFC] px-5">
        <div className="text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-50 text-red-500">
            <FaFilePdf size={28} />
          </div>

          <h1 className="mt-6 text-3xl font-bold leading-tight text-[#0F172A]">
            Report Not Found
          </h1>

          <p className="mt-3 text-base leading-7 text-slate-500">
            The report you are looking for does not exist.
          </p>

          <Link
            to="/resources/reports"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#087B5A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#065c43]"
          >
            <FaArrowLeft size={12} />
            Back to Reports
          </Link>
        </div>
      </section>
    );
  }

  return (
    <main className="bg-[#F8FAFC]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0B3D2E]">
        {/* Background Decoration */}
        <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#087B5A]/30 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#F97316]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          {/* Back */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/resources/reports"
              className="inline-flex items-center gap-2 text-sm font-semibold text-green-100 transition hover:text-white"
            >
              <FaArrowLeft size={12} />
              Back to Reports
            </Link>
          </motion.div>

          {/* Content */}
          <div className="mt-10 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-green-100 backdrop-blur-sm">
                <FaFolderOpen size={11} />
                {report.category}
              </span>

              <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {report.title}
              </h1>

              <p className="mt-6 max-w-3xl text-base font-normal leading-8 text-green-50/80 sm:text-lg">
                {report.description}
              </p>

              {/* Meta */}
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2.5 text-sm font-medium text-white backdrop-blur-sm">
                  <FaCalendarAlt size={12} />
                  {report.year}
                </div>

                <div className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2.5 text-sm font-medium text-white backdrop-blur-sm">
                  <FaMapMarkerAlt size={12} />
                  Afghanistan
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* REPORT CONTENT */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            {/* REPORT COVER */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="sticky top-28">
                <div className="relative overflow-hidden rounded-2xl bg-[#0B3D2E] p-8 shadow-xl">
                  {/* Glow */}
                  <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#087B5A]/30 blur-3xl" />

                  {/* Cover */}
                  <div className="relative mx-auto max-w-xs rotate-[-2deg] rounded-lg bg-white p-8 shadow-2xl transition duration-500 hover:rotate-0">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
                      DAFA
                    </p>

                    <div className="mt-4 h-1 w-12 bg-[#F97316]" />

                    <h2 className="mt-8 text-2xl font-extrabold leading-tight text-[#0F172A]">
                      {report.title}
                    </h2>

                    <p className="mt-6 text-sm font-medium leading-6 text-slate-400">
                      Demining Agency for Afghanistan
                    </p>

                    <div className="mt-16 flex items-center justify-between border-t border-slate-100 pt-4">
                      <span className="text-xs font-bold text-[#087B5A]">
                        {report.year}
                      </span>

                      <FaFilePdf className="text-red-500" size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* INFORMATION */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#087B5A]">
                Publication Details
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-4xl">
                About This Report
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                {report.description}
              </p>

              {/* Information Grid */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-400">
                    Publication Year
                  </p>

                  <p className="mt-2 text-lg font-bold text-[#0F172A]">
                    {report.year}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-400">
                    Category
                  </p>

                  <p className="mt-2 text-lg font-bold text-[#0F172A]">
                    {report.category}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-400">
                    Language
                  </p>

                  <p className="mt-2 text-lg font-bold text-[#0F172A]">
                    {report.language}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-400">
                    Pages
                  </p>

                  <p className="mt-2 text-lg font-bold text-[#0F172A]">
                    {report.pages}
                  </p>
                </div>
              </div>

              {/* Download Area */}
              <div className="mt-8 overflow-hidden rounded-2xl border border-[#087B5A]/20 bg-[#087B5A]/5 p-6">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-red-500 shadow-sm">
                      <FaFilePdf size={18} />
                    </div>

                    <div>
                      <h3 className="font-bold text-[#0F172A]">PDF Report</h3>

                      <p className="text-xs leading-5 text-slate-500">
                        {report.fileSize}
                      </p>
                    </div>
                  </div>

                  {report.pdf ? (
                    <a
                      href={report.pdf}
                      download
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#087B5A] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#065c43] hover:shadow-lg"
                    >
                      <FaDownload size={12} />
                      Download PDF
                    </a>
                  ) : (
                    <span className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-200 px-6 py-3 text-sm font-bold text-slate-400">
                      <FaFilePdf size={12} />
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>

              {/* Notice */}
              {!report.pdf && (
                <div className="mt-5 rounded-xl border border-orange-100 bg-orange-50 p-4">
                  <p className="text-sm leading-6 text-orange-700">
                    The digital PDF version of this report will be available
                    here once it has been published by DAFA.
                  </p>
                </div>
              )}

              {/* Back */}
              <div className="mt-8">
                <Link
                  to="/resources/reports"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#087B5A] transition hover:gap-3"
                >
                  Browse All Reports
                  <FaArrowRight size={11} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
