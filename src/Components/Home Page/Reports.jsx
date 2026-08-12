import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaDownload, FaFilePdf } from "react-icons/fa";

const reports = [
  {
    title: "Annual Report",
    year: "2025",
    category: "Organization Report",
    file: "",
  },
  {
    title: "Humanitarian Demining Report",
    year: "2026",
    category: "Project Report",
    file: "",
  },
  {
    title: "Monthly Activity Update",
    year: "2026",
    category: "Update Report",
    file: "",
  },
  {
    title: "Donor Progress Report",
    year: "2026",
    category: "Donor Report",
    file: "",
  },
];

export default function Reports() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28">
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-52 -top-52 h-[500px] w-[500px] rounded-full bg-[#087B5A]/5 blur-3xl" />

        <div className="absolute -bottom-52 -left-52 h-[500px] w-[500px] rounded-full bg-[#0284C7]/5 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.025]">
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
        {/* ================= HEADING ================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#087B5A]/40" />

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#087B5A] sm:text-sm">
              Transparency
            </p>

            <span className="h-px w-10 bg-[#087B5A]/40" />
          </div>

          <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Reports & Publications
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Access DAFA reports, publications, and updates to learn more about
            our humanitarian activities, achievements, and impact across
            Afghanistan.
          </p>
        </motion.div>

        {/* ================= REPORT CARDS ================= */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reports.map((report, index) => (
            <motion.article
              key={`${report.title}-${report.year}`}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{
                once: true,
                margin: "-60px",
              }}
              whileHover={{
                y: -8,
              }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              {/* Top Accent */}
              <div className="absolute left-0 right-0 top-0 h-1 bg-[#087B5A] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* PDF Icon */}
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotate: -3,
                }}
                className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-3xl text-red-600"
              >
                <FaFilePdf />
              </motion.div>

              {/* Category */}
              <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.16em] text-[#087B5A]">
                {report.category}
              </p>

              {/* Title */}
              <h3 className="mt-3 min-h-[56px] text-xl font-bold leading-snug tracking-tight text-[#0F172A] transition-colors duration-300 group-hover:text-[#087B5A]">
                {report.title}
              </h3>

              {/* Divider */}
              <div className="my-5 h-px bg-slate-100" />

              {/* Bottom */}
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#087B5A]/10 px-4 py-1.5 text-xs font-bold text-[#087B5A]">
                  {report.year}
                </span>

                {report.file ? (
                  <a
                    href={report.file}
                    download
                    aria-label={`Download ${report.title}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-[#087B5A] transition-all duration-300 hover:bg-[#087B5A] hover:text-white"
                  >
                    <FaDownload size={13} />
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled
                    aria-label={`${report.title} download unavailable`}
                    title="Report file will be added soon"
                    className="flex h-10 w-10 cursor-not-allowed items-center justify-center rounded-full bg-slate-50 text-slate-300"
                  >
                    <FaDownload size={13} />
                  </button>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* ================= INFORMATION ================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto mt-10 max-w-2xl text-center"
        >
          <p className="text-sm leading-6 text-slate-500">
            Official publications and downloadable documents will be added to
            the DAFA resource center as they become available.
          </p>
        </motion.div>

        {/* ================= CTA ================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="mt-12 text-center"
        >
          <Link
            to="/reports"
            className="group inline-flex items-center gap-3 rounded-xl bg-[#087B5A] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#087B5A]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B3D2E] hover:shadow-xl"
          >
            <span>View All Reports</span>

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <FaArrowRight size={12} />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
