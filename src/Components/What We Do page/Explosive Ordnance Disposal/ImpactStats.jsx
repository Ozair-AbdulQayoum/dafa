import React from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaMapMarkedAlt,
  FaUserCheck,
  FaHandsHelping,
} from "react-icons/fa";

const impactStats = [
  {
    value: "24+",
    label: "Years of Experience",
    description: "Supporting humanitarian mine-action efforts.",
    icon: FaShieldAlt,
  },
  {
    value: "32+",
    label: "Provinces Reached",
    description: "Working to support affected communities.",
    icon: FaMapMarkedAlt,
  },
  {
    value: "100+",
    label: "Trained Personnel",
    description: "People contributing to safer operations.",
    icon: FaUserCheck,
  },
  {
    value: "6",
    label: "Core EOD Areas",
    description: "Supporting different aspects of EOD response.",
    icon: FaHandsHelping,
  },
];

function AnimatedNumber({ value }) {
  const numericValue = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/\d/g, "");

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="block"
    >
      {numericValue}
      {suffix}
    </motion.span>
  );
}

export default function ImpactStats() {
  return (
    <section
      id="eod-impact"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#087B5A]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#F97316]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#F97316]" />

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
              Our Impact
            </p>

            <span className="h-px w-10 bg-[#F97316]" />
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Supporting Safer
            <span className="text-[#087B5A]"> Communities</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Through humanitarian mine action, DAFA works to reduce explosive
            hazards and contribute to safer environments for communities across
            Afghanistan.
          </p>
        </motion.div>

        {/* ================= STATS ================= */}

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-[#F8FAFC] p-7 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#087B5A]/30 hover:bg-white hover:shadow-xl"
              >
                {/* Icon */}

                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A] transition-all duration-300 group-hover:bg-[#087B5A] group-hover:text-white">
                  <Icon size={20} />
                </div>

                {/* Number */}

                <div className="mt-6 text-4xl font-extrabold tracking-tight text-[#0B3D2E] sm:text-5xl">
                  <AnimatedNumber value={stat.value} />
                </div>

                {/* Label */}

                <h3 className="mt-3 text-base font-bold text-[#0F172A]">
                  {stat.label}
                </h3>

                {/* Description */}

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {stat.description}
                </p>

                {/* Bottom accent */}

                <div className="mx-auto mt-6 h-1 w-8 rounded-full bg-[#087B5A]/20 transition-all duration-300 group-hover:w-14 group-hover:bg-[#F97316]" />
              </motion.div>
            );
          })}
        </div>

        {/* ================= BOTTOM MESSAGE ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-10 rounded-2xl border border-[#087B5A]/10 bg-[#0B3D2E] px-6 py-7 text-center sm:px-10"
        >
          <p className="text-sm leading-7 text-green-50/80 sm:text-base">
            <span className="font-bold text-white">
              Every operation contributes to a safer future.
            </span>{" "}
            DAFA remains committed to responsible humanitarian action and
            continued support for communities affected by explosive hazards.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
