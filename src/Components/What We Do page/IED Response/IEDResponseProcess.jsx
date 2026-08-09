import React from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaMapMarkedAlt,
  FaClipboardCheck,
  FaShieldAlt,
  FaCheckCircle,
  FaUsers,
} from "react-icons/fa";

const processSteps = [
  {
    number: "01",
    icon: FaSearch,
    title: "Identification",
    description:
      "Information about suspected explosive hazards is gathered and reviewed to understand the nature and location of the reported threat.",
  },
  {
    number: "02",
    icon: FaMapMarkedAlt,
    title: "Assessment",
    description:
      "Affected areas are assessed to understand potential risks and determine appropriate humanitarian response requirements.",
  },
  {
    number: "03",
    icon: FaClipboardCheck,
    title: "Planning",
    description:
      "Response activities are carefully planned according to operational requirements, safety considerations, and established procedures.",
  },
  {
    number: "04",
    icon: FaShieldAlt,
    title: "Safe Response",
    description:
      "Trained personnel support appropriate humanitarian response activities while maintaining strict safety and operational controls.",
  },
  {
    number: "05",
    icon: FaCheckCircle,
    title: "Verification",
    description:
      "Completed activities are reviewed and verified through established quality assurance and quality control processes.",
  },
  {
    number: "06",
    icon: FaUsers,
    title: "Community Protection",
    description:
      "The overall objective is to reduce explosive hazard risks and support safer conditions for affected communities.",
  },
];

export default function IEDResponseProcess() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#087B5A]/5 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#F97316]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
            Our Response Process
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            From Identification to
            <span className="block text-[#087B5A]">Community Protection</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-500 sm:text-lg">
            Humanitarian explosive hazard response requires careful planning,
            coordination, safety, and quality assurance at every stage.
          </p>
        </motion.div>

        {/* ================= PROCESS ================= */}
        <div className="relative mt-16">
          {/* Desktop Connecting Line */}
          <div className="absolute left-[8.33%] right-[8.33%] top-10 hidden h-px bg-[#087B5A]/15 lg:block" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="group relative"
                >
                  {/* Card */}
                  <div className="relative h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#087B5A]/25 hover:shadow-xl">
                    {/* Number + Icon */}
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#087B5A] text-white shadow-lg shadow-[#087B5A]/20 transition-transform duration-300 group-hover:scale-105">
                        <Icon size={18} />
                      </div>

                      <span className="text-4xl font-black tracking-tight text-slate-100 transition-colors duration-300 group-hover:text-[#087B5A]/10">
                        {step.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="mt-7">
                      <h3 className="text-xl font-bold text-[#0F172A]">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-500">
                        {step.description}
                      </p>
                    </div>

                    {/* Bottom Accent */}
                    <div className="mt-6 h-1 w-10 rounded-full bg-[#F97316] transition-all duration-300 group-hover:w-16" />
                  </div>
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
          transition={{ duration: 0.7 }}
          className="mx-auto mt-14 max-w-4xl rounded-2xl border border-[#087B5A]/10 bg-[#0B3D2E] px-6 py-7 text-center shadow-lg sm:px-10"
        >
          <p className="text-sm leading-7 text-green-50/80 sm:text-base">
            Every stage of humanitarian explosive hazard response is guided by
            safety, professionalism, coordination, and the protection of
            affected communities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
