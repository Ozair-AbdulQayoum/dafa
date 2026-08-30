// src/Components/Certificates/CertificateCards.jsx

import React from "react";
import { motion } from "framer-motion";
import {
  FaCertificate,
  FaCalendarAlt,
  FaDownload,
  FaFilePdf,
} from "react-icons/fa";

import { certificates } from "../../Data File/Certificate Data/CertificateCards";

export default function CertificateCards() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-28">
      {/* Background Decoration */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#087B5A]/5 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#F97316]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Heading */}

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
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 rounded-full bg-[#F97316]" />

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#087B5A] sm:text-sm">
              DAFA Documentation
            </p>

            <span className="h-[2px] w-10 rounded-full bg-[#F97316]" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Official
            <span className="text-[#087B5A]"> Certificates</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            View and download official DAFA certificates, recognitions, and
            professional documentation.
          </p>
        </motion.div>

        {/* Certificate Cards */}

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate, index) => (
            <motion.article
              key={certificate.id}
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
                margin: "-60px",
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -6,
              }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-[#087B5A]/20 hover:shadow-xl"
            >
              {/* New Badge */}

              {index === 0 && (
                <div className="absolute right-5 top-5 z-10">
                  <span className="rounded-full bg-[#F97316] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white shadow-sm">
                    New
                  </span>
                </div>
              )}

              {/* Certificate Icon */}

              <div className="p-6 sm:p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#087B5A]/10 text-[#087B5A] transition-all duration-300 group-hover:bg-[#087B5A] group-hover:text-white">
                  <FaCertificate size={24} />
                </div>

                {/* Type */}

                <p className="mt-6 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#087B5A]">
                  {certificate.type}
                </p>

                {/* Title */}

                <h3 className="mt-3 pr-10 text-xl font-extrabold leading-tight tracking-tight text-[#0F172A] transition-colors duration-300 group-hover:text-[#087B5A]">
                  {certificate.title}
                </h3>

                {/* Description */}

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  {certificate.description}
                </p>

                {/* Date */}

                <div className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-5 text-xs font-semibold text-slate-400">
                  <FaCalendarAlt size={11} className="text-[#087B5A]" />

                  <span>{certificate.date}</span>
                </div>

                {/* Download */}

                <a
                  href={certificate.pdf}
                  download
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#087B5A] px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#0B3D2E]"
                >
                  <FaDownload size={12} />
                  Download PDF
                </a>
              </div>

              {/* Bottom Accent */}

              <div className="h-1 w-0 bg-[#F97316] transition-all duration-500 group-hover:w-full" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
