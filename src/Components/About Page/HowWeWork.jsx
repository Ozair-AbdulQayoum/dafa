import React from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaClipboardCheck,
  FaHardHat,
  FaHandsHelping,
} from "react-icons/fa";

const steps = [
  {
    number: "01",
    icon: FaSearch,
    title: "Assess",
    text: "Identify explosive hazards and understand the risks and needs affecting communities.",
  },
  {
    number: "02",
    icon: FaClipboardCheck,
    title: "Plan",
    text: "Develop safe, practical, and community-focused plans based on field information.",
  },
  {
    number: "03",
    icon: FaHardHat,
    title: "Act",
    text: "Deploy trained teams and appropriate capabilities to carry out humanitarian operations safely.",
  },
  {
    number: "04",
    icon: FaHandsHelping,
    title: "Support Communities",
    text: "Work with communities to reduce risks, improve safety, and support a safer future.",
  },
];

export default function HowWeWork() {
  return (
    <section className="overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-14 lg:mb-16"
        >
          {/* Section Label */}

          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#087B5A] sm:text-sm">
            Our Approach
          </span>

          {/* Heading */}

          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            How We <span className="text-[#087B5A]">Work</span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-8 lg:text-lg">
            We combine technical expertise, community engagement, and
            responsible humanitarian action to deliver effective mine action
            across Afghanistan.
          </p>
        </motion.div>

        {/* ================= PROCESS ================= */}

        <div className="relative">
          {/* Desktop Connecting Line */}

          <div className="absolute left-[12%] right-[12%] top-8 hidden h-px bg-[#A7F3D0] lg:block" />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative text-center"
                >
                  {/* ================= ICON ================= */}

                  <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-xl border border-[#A7F3D0] bg-white text-[#087B5A] shadow-sm transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-[#087B5A] group-hover:bg-[#087B5A] group-hover:text-white group-hover:shadow-lg sm:h-16 sm:w-16 sm:rounded-2xl">
                    <Icon size={20} />
                  </div>

                  {/* ================= NUMBER ================= */}

                  <span className="mt-4 block text-[11px] font-bold uppercase tracking-[0.18em] text-[#087B5A] sm:mt-5 sm:text-xs">
                    Step {step.number}
                  </span>

                  {/* ================= TITLE ================= */}

                  <h3 className="mt-2 text-lg font-bold leading-snug text-[#0F172A] sm:text-xl">
                    {step.title}
                  </h3>

                  {/* ================= DESCRIPTION ================= */}

                  <p className="mx-auto mt-2.5 max-w-xs text-sm leading-7 text-slate-600 sm:mt-3">
                    {step.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ================= BOTTOM STATEMENT ================= */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="mx-auto mt-12 max-w-4xl rounded-2xl border border-[#A7F3D0]/60 bg-white px-5 py-5 text-center shadow-sm sm:mt-14 sm:px-8 sm:py-6"
        >
          <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            From understanding the risks to delivering field operations, every
            step is guided by safety, professionalism, and the needs of affected
            communities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
