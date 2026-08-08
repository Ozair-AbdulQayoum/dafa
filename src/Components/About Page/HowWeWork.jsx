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
    <section className="overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-[#087B5A]">
            Our Approach
          </span>

          <h2 className="text-3xl font-bold leading-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            How We <span className="text-[#087B5A]">Work</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            We combine technical expertise, community engagement, and
            responsible humanitarian action to deliver effective mine action
            across Afghanistan.
          </p>
        </motion.div>

        {/* ================= PROCESS ================= */}

        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="absolute left-[12%] right-[12%] top-8 hidden h-px bg-[#A7F3D0] lg:block" />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative text-center"
                >
                  {/* Number / Icon */}
                  <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#A7F3D0] bg-white text-[#087B5A] shadow-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:bg-[#087B5A] group-hover:text-white group-hover:shadow-lg">
                    <Icon size={22} />
                  </div>

                  {/* Number */}
                  <span className="mt-5 block text-xs font-bold tracking-[0.2em] text-[#087B5A]">
                    {step.number}
                  </span>

                  {/* Title */}
                  <h3 className="mt-2 text-xl font-bold text-[#0F172A]">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-slate-600">
                    {step.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ================= BOTTOM STATEMENT ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-16 max-w-4xl rounded-2xl border border-[#A7F3D0]/60 bg-white px-6 py-6 text-center shadow-sm sm:px-10"
        >
          <p className="text-sm leading-7 text-slate-600 sm:text-base">
            From understanding the risks to delivering field operations, every
            step is guided by safety, professionalism, and the needs of affected
            communities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
