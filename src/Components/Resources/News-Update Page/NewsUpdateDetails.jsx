import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaHandshake,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

const newsData = {
  "dafa-mou-signing": {
    category: "Partnerships",
    title: "DAFA Strengthens Humanitarian Partnerships Through New MOU",
    date: "December 20, 2025",
    location: "Kabul, Afghanistan",
    image: "/images/news-mou.jpg",

    intro:
      "DAFA has strengthened its commitment to humanitarian mine action through the signing of a new Memorandum of Understanding with a strategic partner.",

    paragraphs: [
      "The agreement represents an important step toward strengthening cooperation and supporting humanitarian efforts aimed at reducing the impact of explosive hazards on communities across Afghanistan.",

      "During the signing ceremony, representatives from both organizations discussed opportunities for collaboration, technical cooperation, knowledge sharing, and improved support for communities affected by explosive hazards.",

      "The partnership will help create stronger coordination between humanitarian organizations and contribute to more effective mine-action activities in affected areas.",
    ],

    highlights: [
      {
        icon: FaHandshake,
        title: "Partnership",
        text: "Strengthening cooperation between humanitarian organizations.",
      },
      {
        icon: FaUsers,
        title: "Community Focus",
        text: "Supporting safer communities affected by explosive hazards.",
      },
      {
        icon: FaCalendarAlt,
        title: "New Commitment",
        text: "Creating opportunities for continued humanitarian cooperation.",
      },
    ],

    closing:
      "DAFA remains committed to building meaningful partnerships that support humanitarian mine action and contribute to safer and more resilient communities across Afghanistan.",
  },
};

export default function NewsUpdateDetails() {
  const { slug } = useParams();

  const news = newsData[slug] || newsData["dafa-mou-signing"];

  return (
    <main className="bg-[#F8FAFC]">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#0B3D2E]">
        {/* Background Decoration */}

        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#087B5A]/20 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#F97316]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          {/* Back */}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/resources/news-updates"
              className="inline-flex items-center gap-2 text-sm font-semibold text-green-100 transition hover:text-white"
            >
              <FaArrowLeft size={12} />
              Back to News & Updates
            </Link>
          </motion.div>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
            {/* Hero Content */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex rounded-full border border-[#A7F3D0]/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#A7F3D0]">
                {news.category}
              </span>

              <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                {news.title}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-green-50/80 sm:text-lg">
                {news.intro}
              </p>

              <div className="mt-8 flex flex-wrap gap-5 text-sm text-green-100/70">
                <span className="flex items-center gap-2">
                  <FaCalendarAlt className="text-[#F97316]" size={13} />
                  {news.date}
                </span>

                <span className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-[#F97316]" size={13} />
                  {news.location}
                </span>
              </div>
            </motion.div>

            {/* Hero Image */}

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
            >
              <div className="relative h-[350px] overflow-hidden rounded-3xl border border-white/10 shadow-2xl sm:h-[430px]">
                {/* Replace image later */}

                <img
                  src={news.image}
                  alt={news.title}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D2E]/70 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-[#0B3D2E]">
                  DAFA • News & Updates
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ARTICLE
      ===================================================== */}

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-10">
          <motion.article
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
              News Update
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0F172A] sm:text-4xl">
              Strengthening Cooperation for Safer Communities
            </h2>

            <div className="mt-8 space-y-6">
              {news.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base leading-8 text-slate-600 sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.article>

          {/* =================================================
              EVENT HIGHLIGHTS
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-14"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
              Event Highlights
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0F172A]">
              Key Highlights
            </h2>

            <div className="mt-7 grid gap-5 sm:grid-cols-3">
              {news.highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A]">
                      <Icon size={18} />
                    </div>

                    <h3 className="mt-5 font-bold text-[#0F172A]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* =================================================
              CLOSING
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-14 rounded-2xl border border-[#087B5A]/10 bg-[#0B3D2E] p-8 sm:p-10"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A7F3D0]">
              Looking Ahead
            </p>

            <p className="mt-4 text-lg leading-8 text-white/90">
              {news.closing}
            </p>
          </motion.div>

          {/* =================================================
              BACK BUTTON
          ================================================= */}

          <div className="mt-10">
            <Link
              to="/resources/news-updates"
              className="inline-flex items-center gap-2 rounded-xl bg-[#087B5A] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0B3D2E]"
            >
              <FaArrowLeft size={11} />
              All News & Updates
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
