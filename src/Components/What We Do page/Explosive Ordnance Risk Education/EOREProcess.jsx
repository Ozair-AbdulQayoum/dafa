import React from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaUsers,
  FaChalkboardTeacher,
  FaComments,
  FaCheckCircle,
} from "react-icons/fa";

const processSteps = [
  {
    number: "01",
    icon: FaSearch,
    title: "Community Assessment",
    description:
      "Understand local conditions, explosive hazards, and the safety concerns affecting communities.",
  },
  {
    number: "02",
    icon: FaUsers,
    title: "Identify At-Risk Groups",
    description:
      "Identify people and groups who may face greater exposure to explosive hazards in their daily activities.",
  },
  {
    number: "03",
    icon: FaChalkboardTeacher,
    title: "Awareness & Safety Sessions",
    description:
      "Deliver clear and practical safety messages through appropriate community-based awareness activities.",
  },
  {
    number: "04",
    icon: FaComments,
    title: "Community Engagement",
    description:
      "Encourage communities to discuss risks, ask questions, share concerns, and strengthen local safety awareness.",
  },
  {
    number: "05",
    icon: FaCheckCircle,
    title: "Follow-Up & Feedback",
    description:
      "Review community feedback and continue improving awareness activities according to local needs.",
  },
];

export default function EOREProcess() {
  return (
    <section
      id="eore-process"
      className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-28"
    >
      {/* ================= BACKGROUND DECORATION ================= */}

      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-[#087B5A]/5 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-10 h-80 w-80 rounded-full bg-[#F97316]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          margin="-100px"
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#F97316]" />

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
              Our Process
            </p>

            <span className="h-px w-8 bg-[#F97316]" />
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            How We Deliver <span className="text-[#087B5A]">EORE</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            DAFA&apos;s EORE activities are designed around community needs,
            practical safety information, and meaningful engagement.
          </p>
        </motion.div>

        {/* ================= PROCESS ================= */}

        <div className="relative mt-16">
          {/* Desktop Connecting Line */}

          <div className="pointer-events-none absolute left-[10%] right-[10%] top-9 hidden h-px bg-gradient-to-r from-transparent via-[#087B5A]/25 to-transparent lg:block" />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                  }}
                  className="group relative text-center"
                >
                  {/* ================= ICON ================= */}

                  <div className="relative z-10 mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:border-[#087B5A]/30 group-hover:shadow-lg">
                    <Icon
                      size={22}
                      className="text-[#087B5A] transition-colors duration-300 group-hover:text-[#F97316]"
                    />

                    {/* Step Number */}

                    <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#F97316] text-[10px] font-bold text-white shadow-sm">
                      {step.number}
                    </span>
                  </div>

                  {/* ================= CONTENT ================= */}

                  <div className="mt-6">
                    <h3 className="text-lg font-bold leading-snug text-[#0F172A] transition-colors duration-300 group-hover:text-[#087B5A]">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {step.description}
                    </p>
                  </div>

                  {/* ================= MOBILE CONNECTOR ================= */}

                  {index < processSteps.length - 1 && (
                    <div className="absolute left-1/2 top-[86px] h-10 w-px -translate-x-1/2 bg-[#087B5A]/15 sm:hidden" />
                  )}
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* ================= BOTTOM STATEMENT ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-16 max-w-4xl overflow-hidden rounded-2xl border border-[#087B5A]/10 bg-white shadow-sm"
        >
          <div className="h-1 w-full bg-gradient-to-r from-[#087B5A] via-[#F97316] to-[#087B5A]" />

          <div className="p-6 text-center sm:p-8">
            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              By combining community knowledge, professional awareness
              activities, and local engagement, DAFA works to make safety
              information accessible to people living in explosive-hazard
              affected areas.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
