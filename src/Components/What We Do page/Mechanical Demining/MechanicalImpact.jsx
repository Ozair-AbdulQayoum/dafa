import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkedAlt,
  FaUsers,
  FaRulerCombined,
  FaCalendarAlt,
} from "react-icons/fa";

const statistics = [
  {
    value: "36+",
    label: "Years of Experience",
    description: "Supporting humanitarian mine action in Afghanistan.",
    icon: FaCalendarAlt,
  },
  {
    value: "32+",
    label: "Provinces Reached",
    description: "Supporting communities across different regions.",
    icon: FaMapMarkedAlt,
  },
  {
    value: "323M+",
    label: "m² Land Cleared",
    description: "Contributing to safer land and communities.",
    icon: FaRulerCombined,
  },
  {
    value: "12M+",
    label: "People Benefited",
    description: "People supported through safer communities.",
    icon: FaUsers,
  },
];

export default function MechanicalImpact() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
            Our Impact
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Mechanical Demining by the Numbers
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            DAFA's humanitarian mine action work contributes to reducing
            explosive hazards and supporting safer communities across
            Afghanistan.
          </p>
        </motion.div>

        {/* Statistics */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -5 }}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:border-[#087B5A]/20 hover:bg-white hover:shadow-xl"
              >
                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A] transition-all duration-300 group-hover:bg-[#087B5A] group-hover:text-white">
                  <Icon size={18} />
                </div>

                {/* Number */}
                <div className="mt-7">
                  <p className="text-4xl font-black tracking-tight text-[#0B3D2E] sm:text-5xl">
                    {stat.value}
                  </p>

                  <h3 className="mt-3 text-lg font-bold text-[#0F172A]">
                    {stat.label}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {stat.description}
                  </p>
                </div>

                {/* Accent */}
                <div className="mt-6 h-1 w-10 rounded-full bg-[#F97316] transition-all duration-300 group-hover:w-20" />
              </motion.div>
            );
          })}
        </div>

        {/* Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 overflow-hidden rounded-2xl bg-[#0B3D2E] p-7 sm:p-9"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#A7F3D0]">
                Making an Impact
              </p>

              <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                Helping communities move toward a safer future.
              </h3>

              <p className="mt-3 text-sm leading-7 text-green-50/60 sm:text-base">
                Through humanitarian mine action, DAFA works to reduce the risks
                posed by explosive hazards and support the safe use of land by
                affected communities.
              </p>
            </div>

            <div className="shrink-0">
              <div className="rounded-xl border border-[#A7F3D0]/20 bg-white/5 px-5 py-4">
                <p className="text-xs uppercase tracking-wider text-green-50/50">
                  Our Commitment
                </p>

                <p className="mt-1 text-sm font-bold text-[#A7F3D0]">
                  Safety • Service • Impact
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
