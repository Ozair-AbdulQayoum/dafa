import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBookOpen,
  FaMapMarkerAlt,
  FaUsers,
  FaHeart,
  FaShieldAlt,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0B3D2E]">
      {/* ================= BACKGROUND DECORATIONS ================= */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#087B5A]/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#F97316]/10 blur-3xl" />

      {/* ================= HERO CONTAINER ================= */}

      <div className="relative mx-auto grid min-h-[620px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-20">
        {/* ================= LEFT CONTENT ================= */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          {/* Eyebrow */}

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-sm">
            <FaBookOpen size={12} className="text-[#F97316]" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-100">
              Stories From The Field
            </span>
          </div>

          {/* Heading */}

          <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Voices, Stories &
            <span className="block text-[#A7F3D0]">Impact from the Field</span>
          </h1>

          {/* Description */}

          <p className="mt-6 max-w-xl text-base leading-8 text-green-50/80 sm:text-lg">
            Discover stories from communities, field teams, and people whose
            lives are being made safer through DAFA's humanitarian mine-action
            work.
          </p>

          {/* Buttons */}

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="#stories"
              className="inline-flex items-center gap-2 rounded-xl bg-[#F97316] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#ea650d]"
            >
              Explore Stories
              <FaArrowRight size={12} />
            </Link>

            <Link
              to="/achievements"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              Our Impact
            </Link>
          </div>

          {/* ================= STORY HIGHLIGHTS ================= */}

          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-7">
            {/* Community Stories */}

            <div className="group">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-[#A7F3D0] transition group-hover:bg-[#087B5A]">
                <FaUsers size={14} />
              </div>

              <p className="text-sm font-bold text-white">Communities</p>

              <p className="mt-1 text-xs leading-5 text-green-100/60">
                Voices from affected communities
              </p>
            </div>

            {/* Field Teams */}

            <div className="group">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-[#A7F3D0] transition group-hover:bg-[#087B5A]">
                <FaShieldAlt size={14} />
              </div>

              <p className="text-sm font-bold text-white">Field Teams</p>

              <p className="mt-1 text-xs leading-5 text-green-100/60">
                People behind the mission
              </p>
            </div>

            {/* Human Stories */}

            <div className="group">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-[#A7F3D0] transition group-hover:bg-[#087B5A]">
                <FaHeart size={14} />
              </div>

              <p className="text-sm font-bold text-white">Safer Futures</p>

              <p className="mt-1 text-xs leading-5 text-green-100/60">
                Stories of hope and resilience
              </p>
            </div>
          </div>
        </motion.div>

        {/* ================= RIGHT IMAGE ================= */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
          }}
          className="relative"
        >
          <div className="relative h-[420px] overflow-hidden rounded-3xl border border-white/10 shadow-2xl sm:h-[500px]">
            <img
              src="/images/stories-hero.jpg"
              alt="DAFA humanitarian field operations"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />

            {/* Image Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D2E]/80 via-transparent to-transparent" />

            {/* Location */}

            <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#0B3D2E] shadow-lg">
              <FaMapMarkerAlt className="text-[#087B5A]" size={12} />
              Afghanistan
            </div>

            {/* Image Caption */}

            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#A7F3D0]">
                From the Field
              </p>

              <h2 className="mt-2 max-w-md text-2xl font-bold leading-tight text-white">
                Stories of courage, resilience and safer communities.
              </h2>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
