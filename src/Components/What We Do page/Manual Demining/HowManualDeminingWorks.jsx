import React from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaMapMarkedAlt,
  FaCrosshairs,
  FaTools,
  FaShieldAlt,
  FaCheckCircle,
  FaHandshake,
} from "react-icons/fa";

const processSteps = [
  {
    number: "01",
    title: "Survey",
    description:
      "Teams assess available information and identify areas that may be affected by explosive hazards.",
    icon: FaSearch,
  },
  {
    number: "02",
    title: "Marking",
    description:
      "Suspected hazardous areas are carefully identified and marked to establish safe working boundaries.",
    icon: FaMapMarkedAlt,
  },
  {
    number: "03",
    title: "Detection",
    description:
      "Trained deminers systematically search the ground using appropriate detection methods and equipment.",
    icon: FaCrosshairs,
  },
  {
    number: "04",
    title: "Excavation",
    description:
      "Ground is carefully investigated around detected signals using controlled and approved procedures.",
    icon: FaTools,
  },
  {
    number: "05",
    title: "Clearance",
    description:
      "Confirmed explosive hazards are safely dealt with according to established humanitarian mine-action procedures.",
    icon: FaShieldAlt,
  },
  {
    number: "06",
    title: "Verification",
    description:
      "Cleared areas undergo quality checks and verification before being considered safe for release.",
    icon: FaCheckCircle,
  },
  {
    number: "07",
    title: "Handover",
    description:
      "Verified land can be released back to communities for safe and productive use.",
    icon: FaHandshake,
  },
];

export default function HowManualDeminingWorks() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28">
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#087B5A]/5 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#0284C7]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 rounded-full bg-[#087B5A]" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
              Our Process
            </span>

            <span className="h-[2px] w-10 rounded-full bg-[#087B5A]" />
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            How Manual Demining
            <span className="block text-[#087B5A]">Works</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Manual demining follows a structured process designed to identify
            explosive hazards, safely clear contaminated land, verify results,
            and support the safe return of land to communities.
          </p>
        </motion.div>

        {/* =====================================================
            PROCESS TIMELINE
        ====================================================== */}

        <div className="relative mt-16">
          {/* Desktop Connecting Line */}
          <div className="absolute left-[7.14%] right-[7.14%] top-8 hidden h-px bg-[#087B5A]/20 lg:block" />

          {/* Steps */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-7">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  className="group relative text-center"
                >
                  {/* Step Icon */}
                  <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#087B5A]/20 bg-white text-[#087B5A] shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#087B5A] group-hover:text-white group-hover:shadow-lg">
                    <Icon size={20} />
                  </div>

                  {/* Number */}
                  <p className="mt-5 text-[11px] font-bold tracking-[0.2em] text-[#087B5A]">
                    STEP {step.number}
                  </p>

                  {/* Title */}
                  <h3 className="mt-2 text-base font-bold text-[#0F172A]">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            BOTTOM NOTE
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-14 max-w-4xl rounded-2xl border border-[#087B5A]/10 bg-white p-6 text-center shadow-sm sm:p-8"
        >
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A]">
            <FaShieldAlt size={18} />
          </div>

          <h3 className="mt-4 text-lg font-bold text-[#0F172A]">
            Safety Remains at the Center
          </h3>

          <p className="mx-auto mt-2 max-w-2xl text-sm leading-7 text-slate-500">
            Every stage of the process is carried out with a strong focus on
            safety, quality, accountability, and the protection of demining
            personnel and affected communities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
