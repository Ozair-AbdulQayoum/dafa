import React from "react";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaClipboardCheck,
  FaUsersCog,
  FaChartLine,
  FaTruck,
  FaHandsHelping,
} from "react-icons/fa";

const units = [
  {
    icon: FaBuilding,
    title: "Administration & Finance",
    text: "Supporting organizational administration, financial management, and internal coordination.",
  },
  {
    icon: FaClipboardCheck,
    title: "Operations",
    text: "Coordinating humanitarian mine action activities and supporting effective field operations.",
  },
  {
    icon: FaUsersCog,
    title: "Human Resources",
    text: "Supporting staff management, workforce coordination, and professional development.",
  },
  {
    icon: FaChartLine,
    title: "Monitoring & Evaluation",
    text: "Supporting program monitoring, reporting, quality assurance, and organizational learning.",
  },
  {
    icon: FaTruck,
    title: "Logistics & Support",
    text: "Providing the logistical resources and operational support required for field activities.",
  },
  {
    icon: FaHandsHelping,
    title: "Field & Technical Teams",
    text: "Specialized teams supporting humanitarian mine action activities in affected communities.",
  },
];

export default function DepartmentsUnits() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#087B5A]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#087B5A]" />
            Departments & Units
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Teams Working
            <span className="text-[#087B5A]"> Together</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            DAFA's different functions work together to support effective
            humanitarian mine action and organizational operations.
          </p>
        </motion.div>

        {/* ================= UNITS ================= */}

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {units.map((unit, index) => {
            const Icon = unit.icon;

            return (
              <motion.div
                key={unit.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#087B5A]/20 hover:shadow-xl sm:p-7"
              >
                {/* Hover Accent */}
                <div className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-[#087B5A] transition-transform duration-300 group-hover:scale-y-100" />

                {/* Number */}
                <span className="absolute right-6 top-6 text-xs font-bold tracking-wider text-slate-200 transition-colors duration-300 group-hover:text-[#087B5A]/20">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A] transition-all duration-300 group-hover:bg-[#087B5A] group-hover:text-white">
                  <Icon size={18} />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-lg font-bold text-[#0F172A]">
                  {unit.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {unit.text}
                </p>

                {/* Bottom Detail */}
                <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#087B5A]">
                  <span className="h-px w-6 bg-[#087B5A]/40 transition-all duration-300 group-hover:w-10" />
                  Supporting DAFA
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ================= NOTE ================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-12 max-w-3xl text-center"
        >
          <p className="text-sm leading-7 text-slate-500">
            These departments and teams contribute to a coordinated approach,
            helping DAFA deliver its work effectively and responsibly.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
