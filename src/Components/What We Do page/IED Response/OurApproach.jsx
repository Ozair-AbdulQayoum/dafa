import React from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaUserShield,
  FaCheckDouble,
  FaHeart,
} from "react-icons/fa";

const approaches = [
  {
    icon: FaShieldAlt,
    number: "01",
    title: "Safety First",
    description:
      "Safety remains the highest priority throughout humanitarian explosive hazard response activities, protecting personnel and affected communities.",
  },
  {
    icon: FaUserShield,
    number: "02",
    title: "Trained Personnel",
    description:
      "Qualified and trained personnel contribute their knowledge, experience, and professional judgment to humanitarian response operations.",
  },
  {
    icon: FaCheckDouble,
    number: "03",
    title: "Quality Assurance",
    description:
      "Activities are supported by established monitoring, quality assurance, and verification processes to maintain operational standards.",
  },
  {
    icon: FaHeart,
    number: "04",
    title: "Community Focus",
    description:
      "Our humanitarian approach places affected communities at the center, helping reduce risks and support safer living environments.",
  },
];

export default function OurApproach() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-48 top-20 h-96 w-96 rounded-full bg-[#087B5A]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-48 bottom-0 h-96 w-96 rounded-full bg-[#F97316]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#F97316]" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
              Our Approach
            </span>

            <span className="h-px w-10 bg-[#F97316]" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Professional Response.
            <span className="block text-[#087B5A]">Humanitarian Purpose.</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-500 sm:text-lg">
            Effective humanitarian mine action depends on professionalism,
            safety, accountability, and a strong commitment to the communities
            we serve.
          </p>
        </motion.div>

        {/* ================= APPROACH CARDS ================= */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {approaches.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 group-hover:border-[#087B5A]/25 group-hover:shadow-xl">
                  {/* Number */}
                  <span className="absolute right-5 top-4 text-5xl font-black text-slate-100 transition-colors duration-300 group-hover:text-[#087B5A]/10">
                    {item.number}
                  </span>

                  {/* Icon */}
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#087B5A]/10 text-[#087B5A] transition-all duration-300 group-hover:bg-[#087B5A] group-hover:text-white">
                    <Icon size={22} />
                  </div>

                  {/* Content */}
                  <h3 className="mt-7 text-xl font-bold text-[#0F172A]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {item.description}
                  </p>

                  {/* Accent */}
                  <div className="mt-7 h-1 w-10 rounded-full bg-[#F97316] transition-all duration-300 group-hover:w-16" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ================= FEATURE STATEMENT ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 overflow-hidden rounded-[2rem] bg-[#0B3D2E]"
        >
          <div className="relative px-6 py-10 sm:px-10 lg:px-14 lg:py-12">
            {/* Glow */}
            <div className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full bg-[#087B5A]/30 blur-3xl" />

            <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A7F3D0]">
                  A Commitment to Safer Communities
                </p>

                <h3 className="mt-3 max-w-2xl text-2xl font-bold leading-tight text-white sm:text-3xl">
                  Every response begins with safety and ends with community
                  protection.
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-green-50/65 sm:text-base">
                  DAFA's humanitarian approach combines operational discipline,
                  trained personnel, quality processes, and a commitment to
                  reducing the impact of explosive hazards.
                </p>
              </div>

              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-[#A7F3D0]/20 bg-white/5">
                <FaShieldAlt size={28} className="text-[#A7F3D0]" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
