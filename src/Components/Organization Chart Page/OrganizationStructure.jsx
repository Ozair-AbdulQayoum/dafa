import React from "react";
import { motion } from "framer-motion";
import {
  FaSitemap,
  FaUsers,
  FaClipboardList,
  FaTools,
  FaHandsHelping,
} from "react-icons/fa";

const departments = [
  {
    icon: FaUsers,
    title: "Management",
    text: "Leadership, coordination and organizational oversight.",
  },
  {
    icon: FaClipboardList,
    title: "Administration & Finance",
    text: "Administrative, financial and operational support.",
  },
  {
    icon: FaTools,
    title: "Operations",
    text: "Planning and coordination of humanitarian mine action.",
  },
  {
    icon: FaHandsHelping,
    title: "Field & Support Units",
    text: "Specialized teams supporting activities in affected communities.",
  },
];

export default function OrganizationStructure() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
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
            Organizational Structure
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            How DAFA Is <span className="text-[#087B5A]">Organized</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            DAFA operates through a coordinated structure of management,
            administrative, operational, technical, and field functions.
          </p>
        </motion.div>

        {/* ================= ORGANIZATION CHART ================= */}

        <div className="relative mx-auto mt-16 max-w-6xl">
          {/* EXECUTIVE LEVEL */}

          <motion.div
            initial={{ opacity: 0, y: -25, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-[#0B3D2E] p-7 text-center shadow-xl">
              {/* Decorative Circle */}
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#A7F3D0]/10" />

              <div className="relative">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#A7F3D0]/10 text-[#A7F3D0]">
                  <FaSitemap size={21} />
                </div>

                <span className="mt-5 block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#A7F3D0]">
                  Organizational Leadership
                </span>

                <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                  Executive Management
                </h3>

                <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-green-50/70">
                  Providing overall direction, strategic coordination, and
                  organizational oversight.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ================= CONNECTOR ================= */}

          <div className="relative mx-auto hidden h-20 w-full md:block">
            {/* Vertical */}
            <div className="absolute left-1/2 top-0 h-10 w-px -translate-x-1/2 bg-[#087B5A]/30" />

            {/* Horizontal */}
            <div className="absolute left-[12.5%] right-[12.5%] top-10 h-px bg-[#087B5A]/30" />

            {/* Vertical Branches */}
            <div className="absolute left-[12.5%] top-10 h-10 w-px bg-[#087B5A]/30" />
            <div className="absolute left-[37.5%] top-10 h-10 w-px bg-[#087B5A]/30" />
            <div className="absolute left-[62.5%] top-10 h-10 w-px bg-[#087B5A]/30" />
            <div className="absolute left-[87.5%] top-10 h-10 w-px bg-[#087B5A]/30" />
          </div>

          {/* ================= DEPARTMENTS ================= */}

          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            {departments.map((department, index) => {
              const Icon = department.icon;

              return (
                <motion.div
                  key={department.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#087B5A]/20 hover:shadow-xl"
                >
                  {/* Top Accent */}
                  <div className="absolute left-0 right-0 top-0 h-1 bg-[#087B5A] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A] transition-all duration-300 group-hover:bg-[#087B5A] group-hover:text-white">
                    <Icon size={18} />
                  </div>

                  {/* Content */}
                  <h3 className="mt-5 text-base font-bold text-[#0F172A]">
                    {department.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {department.text}
                  </p>

                  {/* Number */}
                  <span className="absolute right-5 top-5 text-xs font-bold text-slate-200 transition-colors group-hover:text-[#087B5A]/20">
                    0{index + 1}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* ================= MOBILE CONNECTOR ================= */}

          <div className="mx-auto mt-8 h-10 w-px bg-[#087B5A]/20 md:hidden" />

          {/* ================= BOTTOM MESSAGE ================= */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="mx-auto mt-10 max-w-3xl rounded-2xl border border-[#087B5A]/10 bg-white px-6 py-6 text-center shadow-sm sm:px-8"
          >
            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Each function works together as part of one coordinated
              organizational structure, supporting DAFA's humanitarian
              operations and field activities across Afghanistan.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
