import React from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaSearch,
  FaExclamationTriangle,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

const features = [
  {
    number: "01",
    icon: FaSearch,
    title: "Identification & Assessment",
    description:
      "Specialized personnel identify reported explosive hazards and assess available information to understand the situation and potential risks.",
  },
  {
    number: "02",
    icon: FaShieldAlt,
    title: "Safe Management",
    description:
      "Explosive hazards are managed through established procedures, appropriate safety measures, and qualified humanitarian personnel.",
  },
  {
    number: "03",
    icon: FaExclamationTriangle,
    title: "Risk Reduction",
    description:
      "EOD activities help reduce the risks posed by explosive ordnance to people, property, infrastructure, and surrounding communities.",
  },
  {
    number: "04",
    icon: FaUsers,
    title: "Community Protection",
    description:
      "Reducing explosive hazards contributes to safer environments where communities can access homes, services, roads, and livelihoods with greater confidence.",
  },
];

export default function WhatIsEOD() {
  return (
    <section
      id="what-is-eod"
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
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#F97316]" />

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
              Understanding EOD
            </p>
          </div>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Protecting Communities Through
            <span className="block text-[#087B5A]">
              Explosive Ordnance Disposal
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Explosive Ordnance Disposal (EOD) is a specialized area of
            humanitarian mine action focused on identifying, assessing, and
            safely managing explosive ordnance and other explosive hazards.
          </p>
        </motion.div>

        {/* ================= MAIN CONTENT ================= */}

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10 lg:items-stretch">
          {/* ================= INFORMATION PANEL ================= */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl bg-[#0B3D2E] p-7 shadow-xl sm:p-9 lg:p-10"
          >
            {/* Decorative circles */}

            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/10" />

            <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-white/10" />

            <div className="pointer-events-none absolute bottom-[-80px] left-[-80px] h-48 w-48 rounded-full bg-[#087B5A]/20 blur-3xl" />

            <div className="relative z-10">
              {/* Icon */}

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#087B5A] text-[#A7F3D0] shadow-lg">
                <FaShieldAlt size={24} />
              </div>

              {/* Label */}

              <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#A7F3D0]">
                Our Purpose
              </p>

              {/* Heading */}

              <h3 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
                Reducing explosive hazards and protecting communities.
              </h3>

              {/* Description */}

              <p className="mt-5 text-sm leading-7 text-green-50/70 sm:text-base">
                EOD activities require specialized knowledge, careful
                assessment, trained personnel, and strict safety procedures.
                DAFA's humanitarian work contributes to reducing explosive
                hazards and creating safer environments for people across
                Afghanistan.
              </p>

              {/* Divider */}

              <div className="my-7 h-px bg-white/10" />

              {/* Key statement */}

              <div className="flex gap-4">
                <div className="mt-1 h-10 w-1 shrink-0 rounded-full bg-[#F97316]" />

                <p className="text-sm font-medium leading-7 text-white/80">
                  Every responsible response helps reduce risk and supports
                  safer conditions for people, families, and communities.
                </p>
              </div>

              {/* Bottom label */}

              <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#A7F3D0]">
                Humanitarian Mine Action
                <FaArrowRight size={10} className="text-[#F97316]" />
              </div>
            </div>
          </motion.div>

          {/* ================= FEATURE GRID ================= */}

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#087B5A]/30 hover:bg-white hover:shadow-xl sm:p-7"
                >
                  {/* Number */}

                  <span className="absolute right-5 top-5 text-xs font-bold tracking-widest text-slate-200 transition-colors duration-300 group-hover:text-[#087B5A]/20">
                    {item.number}
                  </span>

                  {/* Icon */}

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A] transition-all duration-300 group-hover:bg-[#087B5A] group-hover:text-white">
                    <Icon size={20} />
                  </div>

                  {/* Content */}

                  <h3 className="mt-6 text-lg font-bold text-[#0F172A] transition-colors duration-300 group-hover:text-[#087B5A]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {item.description}
                  </p>

                  {/* Bottom Accent */}

                  <div className="mt-6 h-1 w-8 rounded-full bg-[#087B5A]/20 transition-all duration-300 group-hover:w-14 group-hover:bg-[#F97316]" />

                  {/* Hover line */}

                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#F97316] transition-all duration-500 group-hover:w-full" />
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* ================= BOTTOM MESSAGE ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-10 rounded-2xl border border-[#087B5A]/10 bg-[#F8FAFC] px-6 py-6 sm:px-8"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A]">
              <FaShieldAlt size={17} />
            </div>

            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              <span className="font-bold text-[#087B5A]">
                Safety is at the centre of every response.
              </span>{" "}
              DAFA's EOD activities are carried out with careful planning, risk
              assessment, trained personnel, and appropriate humanitarian safety
              procedures.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
