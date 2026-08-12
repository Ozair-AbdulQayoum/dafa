import React from "react";
import { motion } from "framer-motion";
import {
  FaChild,
  FaUsers,
  FaTractor,
  FaUserTie,
  FaShieldAlt,
} from "react-icons/fa";

const targetGroups = [
  {
    icon: FaChild,
    title: "Children & Young People",
    description:
      "Safety education helps children recognize dangerous objects and understand what to do when they encounter a suspected explosive hazard.",
  },
  {
    icon: FaUsers,
    title: "Families & Communities",
    description:
      "Families receive practical safety information that can help reduce exposure to explosive hazards in everyday community life.",
  },
  {
    icon: FaTractor,
    title: "Farmers & Land Users",
    description:
      "People working on or travelling through land receive safety messages relevant to agricultural and daily activities.",
  },
  {
    icon: FaUserTie,
    title: "Community Leaders",
    description:
      "Local leaders can help communicate safety messages and strengthen awareness within their communities.",
  },
  {
    icon: FaShieldAlt,
    title: "People at Higher Risk",
    description:
      "EORE activities are adapted to reach groups whose daily activities may place them closer to explosive hazards.",
  },
];

export default function EORETargetGroups() {
  return (
    <section
      id="eore-target-groups"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* ================= BACKGROUND DECORATION ================= */}

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#087B5A]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-[#F97316]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#F97316]" />

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
              Who We Reach
            </p>

            <span className="h-px w-8 bg-[#F97316]" />
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Reaching Communities{" "}
            <span className="text-[#087B5A]">Most at Risk</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            DAFA&apos;s Explosive Ordnance Risk Education activities focus on
            people and communities who may face exposure to explosive hazards in
            their daily lives.
          </p>
        </motion.div>

        {/* ================= TARGET GROUPS ================= */}

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {targetGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#087B5A]/30 hover:bg-white hover:shadow-xl"
              >
                {/* ================= NUMBER ================= */}

                <span className="absolute right-5 top-5 text-xs font-bold tracking-widest text-slate-300 transition-colors duration-300 group-hover:text-[#F97316]/60">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* ================= ICON ================= */}

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A] transition-all duration-300 group-hover:bg-[#087B5A] group-hover:text-white group-hover:shadow-md">
                  <Icon
                    size={22}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* ================= CONTENT ================= */}

                <h3 className="mt-6 min-h-[56px] text-lg font-bold leading-snug text-[#0F172A] transition-colors duration-300 group-hover:text-[#087B5A]">
                  {group.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-500">
                  {group.description}
                </p>

                {/* ================= CATEGORY ================= */}

                <div className="mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#087B5A]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F97316]" />
                  EORE Focus Group
                </div>

                {/* ================= BOTTOM ACCENT ================= */}

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#F97316] transition-all duration-500 group-hover:w-full" />
              </motion.article>
            );
          })}
        </div>

        {/* ================= CLOSING MESSAGE ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-2xl border border-[#087B5A]/10 bg-[#F8FAFC] shadow-sm"
        >
          <div className="h-1 w-full bg-gradient-to-r from-[#087B5A] via-[#F97316] to-[#087B5A]" />

          <div className="p-6 text-center sm:p-8">
            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Effective risk education starts with understanding the needs of
              each community. DAFA works to deliver clear, practical, and
              locally appropriate safety messages.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
