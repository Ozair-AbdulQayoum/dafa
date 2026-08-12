import React from "react";
import { motion } from "framer-motion";
import {
  FaExclamationTriangle,
  FaEye,
  FaHandPaper,
  FaBullhorn,
} from "react-icons/fa";

const awarenessPoints = [
  {
    icon: FaEye,
    title: "Recognize Hazards",
    description:
      "Learn how to recognize signs and situations that may indicate the presence of explosive hazards.",
  },
  {
    icon: FaHandPaper,
    title: "Avoid Danger",
    description:
      "Understand safe behavior and the importance of staying away from suspicious objects and contaminated areas.",
  },
  {
    icon: FaBullhorn,
    title: "Report Safely",
    description:
      "Know how to communicate information about suspected hazards to the appropriate authorities or responsible teams.",
  },
  {
    icon: FaExclamationTriangle,
    title: "Protect Others",
    description:
      "Share safety messages with family members and communities to help reduce the risk of accidents.",
  },
];

export default function WhatIsEORE() {
  return (
    <section
      id="what-is-eore"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#087B5A]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#F97316]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#F97316]" />

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
              Understanding EORE
            </p>

            <span className="h-px w-8 bg-[#F97316]" />
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            What Is{" "}
            <span className="text-[#087B5A]">
              Explosive Ordnance Risk Education?
            </span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            EORE helps people understand the dangers associated with explosive
            ordnance and make informed decisions that can protect themselves,
            their families, and their communities.
          </p>
        </motion.div>

        {/* Main content */}
        <div className="mt-14 grid items-stretch gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Visual / Purpose panel */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative min-h-[460px] overflow-hidden rounded-3xl bg-[#0B3D2E] shadow-xl"
          >
            {/* Decorative elements */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/10" />

            <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full border border-white/10" />

            <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#F97316]/10 blur-3xl" />

            <div className="relative flex min-h-[460px] flex-col justify-between p-8 sm:p-10">
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F97316] text-white shadow-lg">
                <FaExclamationTriangle size={23} />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A7F3D0]">
                  Safety Through Awareness
                </p>

                <h3 className="mt-4 max-w-md text-2xl font-bold leading-tight text-white sm:text-3xl">
                  Knowledge can help communities make safer choices.
                </h3>

                <p className="mt-5 max-w-lg text-sm leading-7 text-green-50/70 sm:text-base">
                  EORE provides practical safety information that helps people
                  recognize explosive hazards, avoid dangerous situations, and
                  encourage safer behavior within their communities.
                </p>

                <div className="mt-7 h-1 w-16 rounded-full bg-[#F97316]" />
              </div>

              {/* Bottom label */}
              <div className="relative z-10 mt-8 flex items-center gap-3 border-t border-white/10 pt-5">
                <span className="h-2 w-2 rounded-full bg-[#F97316]" />

                <span className="text-xs font-bold uppercase tracking-wider text-[#A7F3D0]">
                  Humanitarian Mine Action
                </span>
              </div>
            </div>
          </motion.div>

          {/* Information */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                Explosive Ordnance Risk Education is an important part of
                humanitarian mine action. It provides communities with practical
                information about explosive hazards and encourages behavior that
                reduces exposure to danger.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                DAFA works with communities to deliver safety messages that are
                relevant to local conditions and understandable for different
                groups, including children, families, farmers, and other people
                living or working in affected areas.
              </p>
            </motion.div>

            {/* Awareness cards */}
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {awarenessPoints.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#087B5A]/30 hover:bg-white hover:shadow-lg"
                  >
                    {/* Icon */}
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A] transition-all duration-300 group-hover:bg-[#087B5A] group-hover:text-white">
                      <Icon size={18} />
                    </div>

                    {/* Text */}
                    <h3 className="mt-4 text-base font-bold text-[#0F172A] transition-colors group-hover:text-[#087B5A]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>

                    {/* Accent */}
                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#F97316] transition-all duration-300 group-hover:w-full" />
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-14 rounded-2xl border border-[#087B5A]/10 bg-[#087B5A]/5 p-6 text-center sm:p-8"
        >
          <p className="mx-auto max-w-4xl text-sm font-medium leading-7 text-[#0B3D2E] sm:text-base">
            EORE is not only about sharing information. It is about helping
            people understand risk, adopt safer behavior, and contribute to
            safer communities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
