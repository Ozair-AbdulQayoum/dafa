import React from "react";
import { motion } from "framer-motion";
import {
  FaClipboardCheck,
  FaSearchLocation,
  FaShieldAlt,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const processSteps = [
  {
    number: "01",
    icon: FaClipboardCheck,
    title: "Assessment",
    description:
      "Reported explosive hazards are carefully assessed to understand the situation, identify potential risks, and determine an appropriate humanitarian response.",
  },
  {
    number: "02",
    icon: FaSearchLocation,
    title: "Survey",
    description:
      "Relevant information about the affected location is gathered and verified to support responsible planning, prioritisation, and risk management.",
  },
  {
    number: "03",
    icon: FaShieldAlt,
    title: "Safe Response",
    description:
      "Trained and authorised personnel respond in accordance with established safety procedures and recognised humanitarian mine-action standards.",
  },
  {
    number: "04",
    icon: FaCheckCircle,
    title: "Safe Outcome",
    description:
      "The response is documented and contributes to reducing explosive hazards, improving safety, and supporting affected communities.",
  },
];

export default function EODProcess() {
  return (
    <section
      id="eod-process"
      className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-28"
    >
      {/* ================= BACKGROUND DECORATION ================= */}

      <div className="pointer-events-none absolute -right-40 top-10 h-80 w-80 rounded-full bg-[#087B5A]/5 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-10 h-80 w-80 rounded-full bg-[#F97316]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================= SECTION HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#F97316]" />

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
              EOD Process
            </p>

            <span className="h-px w-10 bg-[#F97316]" />
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            From Assessment
            <span className="text-[#087B5A]"> to Safe Response</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            DAFA follows a structured humanitarian approach to explosive
            ordnance response, with safety, careful assessment, and trained
            personnel at the centre of every operation.
          </p>
        </motion.div>

        {/* ================= PROCESS STEPS ================= */}

        <div className="relative mt-16">
          {/* Desktop Connecting Line */}

          <div className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-[#087B5A]/20 lg:block" />

          <div className="grid gap-6 lg:grid-cols-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.12,
                  }}
                  className="group relative"
                >
                  {/* ================= ICON ================= */}

                  <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border-4 border-[#F8FAFC] bg-[#087B5A] text-white shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#0B3D2E]">
                    <Icon size={21} />
                  </div>

                  {/* ================= CARD ================= */}

                  <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#087B5A]/30 group-hover:shadow-lg">
                    <div className="text-xs font-bold tracking-[0.2em] text-[#F97316]">
                      STEP {step.number}
                    </div>

                    <h3 className="mt-3 text-xl font-bold text-[#0F172A] transition-colors group-hover:text-[#087B5A]">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {step.description}
                    </p>

                    {/* Accent */}

                    <div className="mx-auto mt-5 h-1 w-8 rounded-full bg-[#087B5A]/20 transition-all duration-300 group-hover:w-14 group-hover:bg-[#F97316]" />
                  </div>

                  {/* ================= MOBILE ARROW ================= */}

                  {index < processSteps.length - 1 && (
                    <div className="flex justify-center py-3 lg:hidden">
                      <FaArrowRight
                        className="rotate-90 text-[#087B5A]/40"
                        size={16}
                      />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ================= SAFETY NOTICE ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mx-auto mt-12 max-w-4xl rounded-2xl border border-[#087B5A]/10 bg-white p-6 text-center shadow-sm sm:p-8"
        >
          <p className="text-sm leading-7 text-slate-600 sm:text-base">
            <span className="font-bold text-[#087B5A]">
              Safety comes first.
            </span>{" "}
            Suspected explosive items should never be approached, touched, or
            disturbed. EOD responses are carried out by trained and authorised
            personnel using appropriate safety procedures.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
