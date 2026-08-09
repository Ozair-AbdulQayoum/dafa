import React from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaUserCheck,
  FaCheckDouble,
  FaUsers,
} from "react-icons/fa";

const approaches = [
  {
    number: "01",
    title: "Safety First",
    description:
      "Safety is central to every activity. Teams follow established safety procedures designed to protect personnel, communities, and surrounding areas.",
    icon: FaShieldAlt,
  },
  {
    number: "02",
    title: "Trained Teams",
    description:
      "Skilled and trained personnel carry out field activities with the knowledge and discipline required for professional humanitarian mine action.",
    icon: FaUserCheck,
  },
  {
    number: "03",
    title: "Quality Assurance",
    description:
      "Monitoring and quality assurance help ensure that clearance activities are conducted consistently and according to required operational standards.",
    icon: FaCheckDouble,
  },
  {
    number: "04",
    title: "Community Protection",
    description:
      "Our work focuses on reducing explosive hazards and helping affected communities access safer land and essential areas.",
    icon: FaUsers,
  },
];

export default function OurApproach() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-10 rounded-full bg-[#087B5A]" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
              Our Approach
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Professional Work.
            <span className="block text-[#087B5A]">Responsible Action.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            DAFA's manual demining operations are built around safety,
            professional expertise, quality, and the needs of communities
            affected by explosive hazards.
          </p>
        </motion.div>

        {/* =====================================================
            APPROACH CARDS
        ====================================================== */}

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {approaches.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -7 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-7 transition-all duration-300 hover:border-[#087B5A]/20 hover:bg-white hover:shadow-xl"
              >
                {/* Number */}
                <span className="absolute right-5 top-4 text-4xl font-black text-[#087B5A]/5 transition-colors duration-300 group-hover:text-[#087B5A]/10">
                  {item.number}
                </span>

                {/* Icon */}
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A] transition-all duration-300 group-hover:bg-[#087B5A] group-hover:text-white">
                  <Icon size={19} />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-lg font-bold text-[#0F172A]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {item.description}
                </p>

                {/* Bottom Line */}
                <div className="mt-6 h-1 w-10 rounded-full bg-[#087B5A]/20 transition-all duration-300 group-hover:w-16 group-hover:bg-[#087B5A]" />
              </motion.div>
            );
          })}
        </div>

        {/* =====================================================
            FEATURE STATEMENT
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 overflow-hidden rounded-3xl bg-[#0B3D2E]"
        >
          <div className="relative px-7 py-10 sm:px-10 lg:px-14 lg:py-12">
            {/* Decorative Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#A7F3D0]/10 blur-3xl" />

            <div className="relative z-10 flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A7F3D0]">
                  Our Commitment
                </p>

                <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                  Every cleared area represents a step toward a safer future.
                </h3>

                <p className="mt-3 text-sm leading-7 text-green-50/65 sm:text-base">
                  Through responsible humanitarian mine action, DAFA works to
                  reduce the risks posed by explosive hazards and support
                  communities across Afghanistan.
                </p>
              </div>

              {/* Accent */}
              <div className="hidden shrink-0 lg:block">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-[#A7F3D0]/20 bg-white/5">
                  <FaShieldAlt size={28} className="text-[#A7F3D0]" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
