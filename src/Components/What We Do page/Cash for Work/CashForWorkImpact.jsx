import React from "react";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaHandsHelping,
  FaArrowRight,
} from "react-icons/fa";

const projectStats = [
  {
    icon: FaUsers,
    value: "120+",
    label: "Community Workers",
  },
  {
    icon: FaHandsHelping,
    value: "4",
    label: "Community Areas",
  },
  {
    icon: FaCalendarAlt,
    value: "3",
    label: "Months of Support",
  },
];

export default function CashForWorkImpact() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#087B5A]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#F97316]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================= SECTION HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-14 max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-10 rounded-full bg-[#F97316]" />

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#087B5A] sm:text-sm">
              Our First Cash for Work Project
            </p>
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Creating Opportunity.
            <span className="block text-[#087B5A]">
              Supporting Communities.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            DAFA's Cash for Work initiative provides temporary employment
            opportunities while supporting practical community activities and
            humanitarian recovery.
          </p>
        </motion.div>

        {/* ================= FEATURED PROJECT ================= */}

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          {/* ================= PROJECT IMAGE ================= */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-[#0B3D2E]"
          >
            {/* Replace this URL with authentic DAFA project photography */}

            <img
              src="/images/cash-for-work/project-1.jpg"
              alt="DAFA Cash for Work community project"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Image overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-[#052E23]/90 via-[#0B3D2E]/20 to-transparent" />

            {/* Project label */}

            <div className="absolute left-6 top-6">
              <span className="inline-flex items-center rounded-full border border-white/20 bg-[#0B3D2E]/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                Featured Project
              </span>
            </div>

            {/* Bottom image information */}

            <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#A7F3D0]">
                <FaMapMarkerAlt className="text-[#F97316]" />
                Afghanistan
              </div>

              <h3 className="mt-3 max-w-xl text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                Community Work & Livelihood Support
              </h3>

              <p className="mt-3 max-w-lg text-sm leading-6 text-white/75">
                Temporary employment opportunities combined with practical
                community-based activities.
              </p>
            </div>
          </motion.div>

          {/* ================= PROJECT INFORMATION ================= */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col rounded-[2rem] border border-slate-200 bg-[#F8FAFC] p-7 sm:p-8 lg:p-10"
          >
            {/* Project eyebrow */}

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#087B5A]">
                Project Overview
              </p>

              <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-[#0F172A] sm:text-3xl">
                Work that strengthens communities
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                The project connects vulnerable community members with temporary
                employment while helping deliver useful activities that
                contribute to safer, stronger, and more resilient communities.
              </p>
            </div>

            {/* Project Details */}

            <div className="mt-8 space-y-4">
              {/* Location */}

              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A]">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#0F172A]">
                    Afghanistan
                  </p>
                </div>
              </div>

              {/* Employment */}

              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F97316]/10 text-[#F97316]">
                  <FaUsers />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                    Employment
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#0F172A]">
                    Temporary community employment
                  </p>
                </div>
              </div>

              {/* Duration */}

              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A]">
                  <FaCalendarAlt />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                    Project Duration
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#0F172A]">
                    Three-month community support
                  </p>
                </div>
              </div>
            </div>

            {/* Project Link */}

            <div className="mt-auto pt-8">
              <button
                type="button"
                className="group inline-flex items-center gap-3 text-sm font-bold text-[#087B5A] transition-colors duration-300 hover:text-[#0B3D2E]"
              >
                <span>Explore Project Details</span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#087B5A]/10 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#087B5A] group-hover:text-white">
                  <FaArrowRight size={11} />
                </span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* ================= IMPACT STATISTICS ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="mt-8 grid gap-4 sm:grid-cols-3"
        >
          {projectStats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#087B5A]/20 hover:shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A] transition-colors duration-300 group-hover:bg-[#087B5A] group-hover:text-white">
                    <Icon />
                  </div>

                  <div>
                    <p className="text-2xl font-extrabold tracking-tight text-[#0F172A]">
                      {stat.value}
                    </p>

                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.08em] text-slate-400">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ================= DISCLAIMER / DATA NOTE ================= */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 text-center text-[11px] leading-5 text-slate-400"
        >
          Project figures shown here are presentation placeholders and should be
          replaced with verified DAFA project data before publication.
        </motion.p>
      </div>
    </section>
  );
}
