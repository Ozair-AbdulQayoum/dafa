import React from "react";
import { motion } from "framer-motion";
import {
  FaClipboardCheck,
  FaUsers,
  FaTools,
  FaHandsHelping,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const approachSteps = [
  {
    number: "01",
    icon: FaClipboardCheck,
    title: "Community Assessment",
    description:
      "DAFA identifies community needs, priority areas, and suitable activities through consultation and field assessment.",
  },
  {
    number: "02",
    icon: FaUsers,
    title: "Participant Selection",
    description:
      "Eligible community members are selected through a transparent and community-focused process, with attention to vulnerable households.",
  },
  {
    number: "03",
    icon: FaTools,
    title: "Work & Skills",
    description:
      "Participants take part in practical community activities such as rehabilitation, cleaning, maintenance, and other locally identified work.",
  },
  {
    number: "04",
    icon: FaHandsHelping,
    title: "Payment & Support",
    description:
      "Participants receive timely support for completed work while DAFA monitors implementation, safety, and community outcomes.",
  },
];

const principles = [
  "Transparent participant selection",
  "Community-led activities",
  "Safe and dignified work",
  "Support for vulnerable households",
];

export default function CashForWorkApproach() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28">
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#087B5A]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#F97316]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-9 rounded-full bg-[#F97316]" />

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#087B5A] sm:text-sm">
              Our Approach
            </p>

            <span className="h-[2px] w-9 rounded-full bg-[#F97316]" />
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Turning Community Needs Into
            <span className="block text-[#087B5A]">
              Meaningful Opportunities
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            DAFA's Cash for Work approach connects humanitarian assistance with
            practical community activities, helping vulnerable people earn
            income while contributing to improvements in their communities.
          </p>
        </motion.div>

        {/* ================= PROCESS ================= */}

        <div className="relative mt-16">
          {/* Desktop connecting line */}

          <div className="pointer-events-none absolute left-[12%] right-[12%] top-12 hidden h-px bg-gradient-to-r from-[#087B5A]/10 via-[#087B5A]/40 to-[#F97316]/20 lg:block" />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {approachSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true, margin: "-70px" }}
                  whileHover={{ y: -7 }}
                  className="group relative rounded-3xl border border-slate-200 bg-[#F8FAFC] p-6 transition-all duration-300 hover:border-[#087B5A]/25 hover:bg-white hover:shadow-xl sm:p-7"
                >
                  {/* Number */}

                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#087B5A] text-white shadow-lg shadow-[#087B5A]/15 transition-transform duration-300 group-hover:scale-105">
                      <Icon size={19} />
                    </div>

                    <span className="text-3xl font-black text-slate-200 transition-colors duration-300 group-hover:text-[#F97316]/20">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}

                  <h3 className="mt-7 text-xl font-bold tracking-tight text-[#0F172A] transition-colors duration-300 group-hover:text-[#087B5A]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>

                  {/* Bottom accent */}

                  <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#087B5A]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#F97316]" />
                    Community focused
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* ================= PRINCIPLES PANEL ================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 overflow-hidden rounded-[2rem] bg-[#0B3D2E]"
        >
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            {/* Left */}

            <div className="relative overflow-hidden p-8 sm:p-10 lg:p-12">
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#087B5A]/30 blur-3xl" />

              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A7F3D0]">
                  Our Principles
                </p>

                <h3 className="mt-4 max-w-md text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                  Assistance that supports both people and communities.
                </h3>

                <p className="mt-5 max-w-lg text-sm leading-7 text-slate-300 sm:text-base">
                  Each Cash for Work activity is designed to combine immediate
                  economic support with practical community benefits.
                </p>
              </div>
            </div>

            {/* Right */}

            <div className="bg-white p-8 sm:p-10 lg:p-12">
              <div className="grid gap-4 sm:grid-cols-2">
                {principles.map((principle, index) => (
                  <motion.div
                    key={principle}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    viewport={{ once: true }}
                    className="group flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4 transition-all duration-300 hover:border-[#087B5A]/20 hover:bg-white hover:shadow-md"
                  >
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#087B5A]/10 text-[#087B5A] transition-colors duration-300 group-hover:bg-[#087B5A] group-hover:text-white">
                      <FaCheckCircle size={14} />
                    </div>

                    <p className="text-sm font-semibold leading-6 text-[#0F172A]">
                      {principle}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Small footer */}

              <div className="mt-7 flex items-center gap-2 border-t border-slate-100 pt-5 text-xs font-semibold text-slate-500">
                <span className="h-2 w-2 rounded-full bg-[#F97316]" />
                Designed around local priorities and humanitarian principles
                <FaArrowRight className="ml-auto text-[#087B5A]" size={11} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
