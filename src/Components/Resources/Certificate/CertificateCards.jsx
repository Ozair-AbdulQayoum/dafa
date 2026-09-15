// src/Components/Certificates/CertificateCards.jsx

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaCalendarAlt,
  FaCertificate,
  FaDownload,
  FaFilePdf,
  FaShieldAlt,
} from "react-icons/fa";

import { certificates } from "../../Data File/Certificate Data/CertificateCards";

export default function CertificateCards() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#F6F9F7] py-20 sm:py-24 lg:py-28">
      {/* Background Decoration */}

      <div className="pointer-events-none absolute -left-48 top-20 h-[500px] w-[500px] rounded-full bg-[#0F8A63]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-48 bottom-0 h-[500px] w-[500px] rounded-full bg-[#F97316]/5 blur-3xl" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#0B3D2E 1px, transparent 1px), linear-gradient(90deg, #0B3D2E 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#F97316]" />

            <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#0F8A63]">
              DAFA Documentation
            </p>

            <span className="h-px w-10 bg-[#F97316]" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-[#0F172A] sm:text-4xl lg:text-5xl">
            Official <span className="text-[#0F8A63]">Certificates</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Explore DAFA's official certificates, recognitions, training
            documentation, and partnership records.
          </p>
        </motion.div>

        {/* Certificate Collection */}

        <div className="mt-14 space-y-7">
          {certificates.map((certificate, index) => {
            const isFeatured = index === 0;

            return (
              <motion.article
                key={certificate.id}
                initial={{
                  opacity: 0,
                  y: shouldReduceMotion ? 0 : 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-70px",
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.06,
                }}
                className={`
                  group relative overflow-hidden rounded-[24px]
                  border border-[#0B3D2E]/10
                  bg-white
                  shadow-[0_12px_40px_rgba(15,23,42,0.07)]
                  transition-all duration-500
                  hover:-translate-y-1
                  hover:border-[#0F8A63]/25
                  hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]
                  ${isFeatured ? "lg:rounded-[30px]" : ""}
                `}
              >
                {/* Top Status Bar */}

                <div className="absolute inset-x-0 top-0 z-20 h-1 bg-gradient-to-r from-[#0B3D2E] via-[#0F8A63] to-[#F97316]" />

                <div
                  className={`
                    grid
                    ${
                      isFeatured
                        ? "lg:grid-cols-[1.15fr_0.85fr]"
                        : "lg:grid-cols-[0.85fr_1.15fr]"
                    }
                  `}
                >
                  {/* Certificate Preview */}

                  <div
                    className={`
                      relative overflow-hidden bg-[#E9EFEC]
                      ${
                        isFeatured
                          ? "min-h-[300px] sm:min-h-[400px] lg:min-h-[440px]"
                          : "min-h-[280px] sm:min-h-[350px]"
                      }
                    `}
                  >
                    <img
                      src={certificate.image}
                      alt={`${certificate.title} preview`}
                      className="
                        absolute inset-0 h-full w-full object-cover
                        transition-transform duration-700
                        group-hover:scale-[1.045]
                      "
                      loading={index === 0 ? "eager" : "lazy"}
                    />

                    {/* Image Overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#031F18]/70 via-[#031F18]/10 to-transparent" />

                    <div className="absolute inset-0 bg-gradient-to-r from-[#0B3D2E]/10 to-transparent" />

                    {/* Document Label */}

                    <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                      <div className="flex items-center gap-2 rounded-full border border-white/20 bg-[#031F18]/65 px-3.5 py-2 text-[9px] font-extrabold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                        <FaFilePdf size={10} />
                        Document Preview
                      </div>
                    </div>

                    {/* Featured Badge */}

                    {isFeatured && (
                      <div className="absolute right-5 top-5 sm:right-7 sm:top-7">
                        <span className="rounded-full bg-[#F97316] px-3.5 py-2 text-[9px] font-extrabold uppercase tracking-[0.14em] text-white shadow-lg">
                          Featured
                        </span>
                      </div>
                    )}

                    {/* Bottom Image Information */}

                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white/75">
                        <FaCertificate size={11} className="text-[#F97316]" />
                        {certificate.type}
                      </div>
                    </div>
                  </div>

                  {/* Information Panel */}

                  <div className="relative flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                    {/* Decorative Number */}

                    <div className="pointer-events-none absolute right-5 top-3 select-none text-7xl font-black leading-none tracking-[-0.08em] text-[#0B3D2E]/[0.035] sm:right-8 sm:text-8xl">
                      0{certificate.id}
                    </div>

                    <div className="relative z-10">
                      {/* Meta */}

                      <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                        <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#0F8A63]">
                          <FaCertificate size={11} />
                          {certificate.type}
                        </div>

                        <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />

                        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                          <FaCalendarAlt size={11} className="text-[#F97316]" />
                          {certificate.date}
                        </div>
                      </div>

                      {/* Title */}

                      <h3
                        className={`
                          mt-5 max-w-xl font-extrabold leading-[1.08]
                          tracking-[-0.035em] text-[#0F172A]
                          transition-colors duration-300
                          group-hover:text-[#0F8A63]
                          ${
                            isFeatured
                              ? "text-2xl sm:text-3xl lg:text-4xl"
                              : "text-2xl sm:text-3xl"
                          }
                        `}
                      >
                        {certificate.title}
                      </h3>

                      {/* Accent */}

                      <div className="mt-5 h-[3px] w-10 rounded-full bg-[#F97316] transition-all duration-500 group-hover:w-16" />

                      {/* Description */}

                      <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-[15px]">
                        {certificate.description}
                      </p>

                      {/* Document Details */}

                      <div className="mt-7 grid grid-cols-2 gap-3 sm:max-w-md">
                        <div className="rounded-xl border border-slate-100 bg-[#F8FAFC] p-4">
                          <p className="text-[9px] font-extrabold uppercase tracking-[0.15em] text-slate-400">
                            Document
                          </p>

                          <p className="mt-1 text-sm font-bold text-[#0F172A]">
                            Official PDF
                          </p>
                        </div>

                        <div className="rounded-xl border border-slate-100 bg-[#F8FAFC] p-4">
                          <p className="text-[9px] font-extrabold uppercase tracking-[0.15em] text-slate-400">
                            Issued
                          </p>

                          <p className="mt-1 text-sm font-bold text-[#0F172A]">
                            {certificate.date}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Download Action */}

                    <div className="relative z-10 mt-8 border-t border-slate-100 pt-6">
                      <a
                        href={certificate.pdf}
                        download
                        className="
                          inline-flex min-h-11 items-center justify-center gap-3
                          rounded-xl bg-[#0B3D2E]
                          px-6 py-3
                          text-xs font-extrabold uppercase tracking-[0.08em]
                          text-white
                          transition-all duration-300
                          hover:bg-[#0F8A63]
                          hover:shadow-lg hover:shadow-[#0F8A63]/20
                        "
                      >
                        <FaDownload size={11} />
                        Download PDF
                      </a>
                    </div>

                    {/* Bottom Orange Line */}

                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#F97316] transition-all duration-500 group-hover:w-full" />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Trust Note */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-10 flex max-w-2xl items-center justify-center gap-3 text-center"
        >
          <FaShieldAlt className="shrink-0 text-[#0F8A63]" size={14} />

          <p className="text-xs leading-6 text-slate-400">
            Official documentation is provided in PDF format for reference and
            download.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
