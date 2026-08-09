import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkedAlt,
  FaSearch,
  FaCogs,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";

const steps = [
  {
    number: "01",
    title: "Assessment & Planning",
    description:
      "Field conditions, contamination risks, terrain, and operational requirements are assessed before mechanical activities begin.",
    icon: FaMapMarkedAlt,
  },
  {
    number: "02",
    title: "Technical Survey",
    description:
      "Technical information is gathered to understand the area and determine whether mechanical methods are suitable.",
    icon: FaSearch,
  },
  {
    number: "03",
    title: "Mechanical Clearance",
    description:
      "Specialized demining machinery is deployed to process suitable contaminated ground under controlled operational conditions.",
    icon: FaCogs,
  },
  {
    number: "04",
    title: "Safety & Quality Control",
    description:
      "Operations are monitored through established safety and quality procedures to support reliable clearance results.",
    icon: FaShieldAlt,
  },
  {
    number: "05",
    title: "Verification & Handover",
    description:
      "Cleared areas undergo appropriate verification before being released for safe use by communities.",
    icon: FaCheckCircle,
  },
];

export default function MechanicalProcess() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-24">
      {/* Background Decoration */}
      <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-[#087B5A]/5 blur-3xl" />

      <div className="absolute -left-40 bottom-10 h-80 w-80 rounded-full bg-[#0284C7]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
            Our Process
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            How Mechanical Demining Works
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Mechanical demining follows a structured process designed to support
            safe, controlled, and effective humanitarian mine action.
          </p>
        </motion.div>

        {/* Process */}
        <div className="relative mt-16">
          {/* Desktop Line */}
          <div className="absolute left-[10%] right-[10%] top-9 hidden h-px bg-[#087B5A]/20 lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="relative"
                >
                  {/* Number / Icon */}
                  <div className="relative z-10 mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-2xl border border-[#087B5A]/20 bg-white text-[#087B5A] shadow-sm">
                    <Icon size={23} />
                  </div>

                  {/* Step Number */}
                  <div className="mt-4 text-center">
                    <span className="text-xs font-bold tracking-[0.2em] text-[#F97316]">
                      STEP {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-3 text-center">
                    <h3 className="text-lg font-bold text-[#0F172A]">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-16 max-w-4xl rounded-2xl border border-[#087B5A]/10 bg-white p-6 text-center shadow-sm sm:p-8"
        >
          <p className="text-base leading-8 text-slate-600 sm:text-lg">
            <span className="font-semibold text-[#087B5A]">
              Every operation begins with careful assessment
            </span>{" "}
            and continues through controlled implementation, quality assurance,
            and verification before land is returned to safe use.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
