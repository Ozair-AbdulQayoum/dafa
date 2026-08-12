import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const news = [
  {
    title: "DAFA Internal Meeting with HALO Technical Team",
    date: "August 2026",
    category: "Project Update",
    description:
      "DAFA conducted an internal coordination meeting with the HALO technical team to discuss current projects, technical progress, field operations, and future humanitarian activities across Afghanistan.",
  },
  {
    title: "Community Awareness Program",
    date: "May 2026",
    category: "Education",
    description:
      "Risk education sessions help communities understand explosive hazards and learn practical ways to stay safe.",
  },
  {
    title: "New Humanitarian Partnership Support",
    date: "April 2026",
    category: "Partnership",
    description:
      "DAFA continues strengthening cooperation with humanitarian organizations to support safer communities across Afghanistan.",
  },
];

export default function News() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-24">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#087B5A]/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#0284C7]/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* ================= HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 rounded-full bg-[#087B5A]" />

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#087B5A] sm:text-sm">
              Latest Updates
            </p>

            <span className="h-[2px] w-10 rounded-full bg-[#087B5A]" />
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            News & <span className="text-[#087B5A]">Updates</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Stay connected with DAFA activities, achievements, meetings, and
            humanitarian efforts across Afghanistan.
          </p>
        </motion.div>

        {/* ================= NEWS GRID ================= */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -8 }}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]"
            >
              {/* ================= IMAGE ================= */}

              <div className="relative h-56 overflow-hidden bg-[#0B3D2E]">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="flex h-full w-full items-center justify-center"
                >
                  <div className="text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#A7F3D0]/20 bg-white/5">
                      <span className="text-xl font-bold text-[#A7F3D0]">
                        DAFA
                      </span>
                    </div>

                    <span className="mt-3 block text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                      News Image
                    </span>
                  </div>
                </motion.div>

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#052E23]/60 via-transparent to-transparent" />

                {/* Category */}
                <div className="absolute left-5 top-5">
                  <span className="rounded-full bg-white/95 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wide text-[#087B5A] shadow-sm">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* ================= CONTENT ================= */}

              <div className="flex flex-1 flex-col p-7">
                {/* Date */}

                <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-400">
                  <FaCalendarAlt className="text-[#087B5A]" />

                  <span>{item.date}</span>
                </div>

                {/* Title */}

                <h3 className="mt-4 text-xl font-bold leading-snug tracking-tight text-[#0F172A] transition-colors duration-300 group-hover:text-[#087B5A]">
                  {item.title}
                </h3>

                {/* Description */}

                <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>

                {/* Read More */}

                <Link
                  to="/news-updates"
                  aria-label={`Read more about ${item.title}`}
                  className="mt-auto flex items-center gap-2 pt-7 text-sm font-bold text-[#087B5A] transition-all duration-300 hover:gap-3"
                >
                  <span>Read More</span>

                  <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ================= VIEW ALL ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <Link
            to="/news-updates"
            className="group inline-flex items-center gap-3 rounded-xl bg-[#087B5A] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#087B5A]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B3D2E] hover:shadow-xl"
          >
            <span>View All News</span>

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-white/20">
              <FaArrowRight className="text-[11px] transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
