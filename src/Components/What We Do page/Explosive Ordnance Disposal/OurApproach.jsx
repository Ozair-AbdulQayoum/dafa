import React from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaUserShield,
  FaClipboardCheck,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

const approaches = [
  {
    number: "01",
    icon: FaShieldAlt,
    title: "Safety First",
    description:
      "Safety remains central to every EOD activity, with careful risk management and established procedures guiding operations.",
  },
  {
    number: "02",
    icon: FaUserShield,
    title: "Skilled Personnel",
    description:
      "Qualified and trained personnel apply appropriate knowledge, procedures and professional standards during EOD activities.",
  },
  {
    number: "03",
    icon: FaClipboardCheck,
    title: "Careful Assessment",
    description:
      "Information is carefully assessed to support responsible decisions and determine appropriate actions for reported hazards.",
  },
  {
    number: "04",
    icon: FaUsers,
    title: "Community Focus",
    description:
      "Our approach is focused on reducing risks and supporting safer environments for communities affected by explosive hazards.",
  },
];

export default function OurApproach() {
  return (
    <section
      id="our-approach"
      className="relative overflow-hidden bg-[#0B3D2E] py-20 sm:py-24 lg:py-28"
    >
      {/* ================= BACKGROUND DECORATION ================= */}

      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#087B5A]/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#F97316]/10 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.02] blur-3xl" />

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

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A7F3D0]">
              Our Approach
            </p>

            <span className="h-px w-10 bg-[#F97316]" />
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Professional Action,
            <span className="text-[#A7F3D0]"> Safer Communities</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
            DAFA's EOD approach combines safety, trained personnel, careful
            assessment and community-focused humanitarian action.
          </p>
        </motion.div>

        {/* ================= APPROACH CARDS ================= */}

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {approaches.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#A7F3D0]/30 hover:bg-white/[0.09]"
              >
                {/* Number */}

                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold tracking-[0.15em] text-[#F97316]">
                    {item.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#087B5A] text-white transition-all duration-300 group-hover:bg-[#F97316]">
                    <Icon size={18} />
                  </div>
                </div>

                {/* Content */}

                <h3 className="mt-8 text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.description}
                </p>

                {/* Bottom Accent */}

                <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#A7F3D0]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F97316]" />
                  EOD Operations
                </div>

                {/* Hover Accent */}

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#F97316] transition-all duration-500 group-hover:w-full" />
              </motion.article>
            );
          })}
        </div>

        {/* ================= BOTTOM STATEMENT ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/10 bg-black/10 px-6 py-6 sm:flex-row sm:px-8"
        >
          <div>
            <p className="text-sm font-bold text-white">
              Responsible humanitarian mine action
            </p>

            <p className="mt-1 text-sm text-slate-400">
              Working toward safer environments for affected communities.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm font-bold text-[#A7F3D0]">
            Safety &amp; Protection
            <FaArrowRight
              size={12}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
