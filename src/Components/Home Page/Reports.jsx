// src/Components/Home-Page/Reports.jsx

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaDownload,
  FaFilePdf,
  FaCertificate,
  FaCalendarAlt,
} from "react-icons/fa";

import { reports } from "../../Components/Data File/Reprot Data/ReportData";
import { certificates } from "../../Components/Data File/Certificate Data/CertificateCards";

export default function Reports() {
  // Only show the newest item on the Home page
  const latestReport = reports[0];
  const latestCertificate = certificates[0];

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

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
        {/* =====================================================
            HEADING
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
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
            Reports & <span className="text-[#087B5A]">Certificates</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Explore DAFA's latest reports and official certificates.
          </p>
        </motion.div>

        {/* =====================================================
            TWO COLUMNS
        ===================================================== */}

        <div className="grid gap-8 lg:grid-cols-2">
          {/* =================================================
              LEFT — LATEST REPORT
          ================================================= */}

          <motion.article
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Report Preview */}

            <div className="relative flex h-72 items-center justify-center overflow-hidden bg-gradient-to-br from-[#0B3D2E] to-[#087B5A]">
              <div className="text-center text-white">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
                  <FaFilePdf className="text-4xl" />
                </div>

                <p className="mt-4 text-sm font-semibold">
                  {latestReport.year} Report
                </p>

                <p className="mt-1 text-xs text-white/60">
                  Official DAFA Report
                </p>
              </div>

              {/* Badge */}

              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#087B5A] shadow-lg">
                <FaFilePdf />
                Latest Report
              </div>

              {/* Year */}

              <div className="absolute bottom-5 right-5 rounded-full bg-[#087B5A] px-4 py-2 text-xs font-bold text-white shadow-lg">
                {latestReport.year}
              </div>
            </div>

            {/* Report Content */}

            <div className="p-7 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#087B5A]">
                {latestReport.category}
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#0F172A] transition-colors duration-300 group-hover:text-[#087B5A]">
                {latestReport.title}
              </h3>

              <div className="mt-3 flex items-center gap-2 text-xs font-medium text-slate-400">
                <FaCalendarAlt className="text-[#087B5A]" />

                {latestReport.date}
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {latestReport.description}
              </p>

              {/* Actions */}

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  to="/reports"
                  className="group/button inline-flex items-center gap-3 rounded-xl bg-[#087B5A] px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-[#0B3D2E] hover:shadow-lg"
                >
                  <span>See More Reports</span>

                  <FaArrowRight
                    size={11}
                    className="transition-transform duration-300 group-hover/button:translate-x-1"
                  />
                </Link>

                {latestReport.pdf && (
                  <a
                    href={latestReport.pdf}
                    download
                    aria-label={`Download ${latestReport.title}`}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 text-[#087B5A] transition-all duration-300 hover:border-[#087B5A] hover:bg-[#087B5A] hover:text-white"
                  >
                    <FaDownload size={14} />
                  </a>
                )}
              </div>
            </div>
          </motion.article>

          {/* =================================================
              RIGHT — LATEST CERTIFICATE
          ================================================= */}

          <motion.article
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Certificate Preview */}

            <div className="relative flex h-72 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-[#087B5A]/10">
              <div className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-[#087B5A]/10 bg-white text-[#087B5A] shadow-sm">
                  <FaCertificate className="text-4xl" />
                </div>

                <p className="mt-4 text-sm font-semibold text-slate-700">
                  Official Certificate
                </p>

                <p className="mt-1 text-xs text-slate-400">DAFA Certificate</p>
              </div>

              {/* Badge */}

              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#087B5A] shadow-lg">
                <FaCertificate />
                Latest Certificate
              </div>
            </div>

            {/* Certificate Content */}

            <div className="p-7 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#087B5A]">
                {latestCertificate.type}
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#0F172A] transition-colors duration-300 group-hover:text-[#087B5A]">
                {latestCertificate.title}
              </h3>

              <div className="mt-3 flex items-center gap-2 text-xs font-medium text-slate-400">
                <FaCalendarAlt className="text-[#087B5A]" />

                {latestCertificate.date}
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {latestCertificate.description}
              </p>

              {/* Actions */}

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  to="/certificates"
                  className="inline-flex items-center gap-3 rounded-xl border border-[#087B5A] px-6 py-3.5 text-sm font-bold text-[#087B5A] transition-all duration-300 hover:bg-[#087B5A] hover:text-white"
                >
                  <FaCertificate size={13} />

                  <span>View Certificates</span>

                  <FaArrowRight size={11} />
                </Link>

                {latestCertificate.pdf && (
                  <a
                    href={latestCertificate.pdf}
                    download
                    aria-label={`Download ${latestCertificate.title}`}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 text-[#087B5A] transition-all duration-300 hover:border-[#087B5A] hover:bg-[#087B5A] hover:text-white"
                  >
                    <FaDownload size={14} />
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
