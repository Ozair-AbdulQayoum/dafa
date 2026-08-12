import React from "react";
import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaShieldAlt,
  FaGraduationCap,
  FaTools,
  FaQuestionCircle,
  FaArrowRight,
} from "react-icons/fa";

const categories = [
  {
    icon: FaBookOpen,
    title: "Mine Action Basics",
    description:
      "Learn about landmines, explosive remnants of war, humanitarian mine action, and clearance activities.",
  },
  {
    icon: FaShieldAlt,
    title: "Safety & Awareness",
    description:
      "Practical information about explosive hazards, risk awareness, and safer behavior in affected communities.",
  },
  {
    icon: FaGraduationCap,
    title: "Training & Education",
    description:
      "Educational materials and learning resources for communities, humanitarian workers, and mine-action professionals.",
  },
  {
    icon: FaTools,
    title: "Technical Knowledge",
    description:
      "Explore technical information about surveys, clearance operations, EOD, safety procedures, and quality management.",
  },
  {
    icon: FaQuestionCircle,
    title: "Frequently Asked Questions",
    description:
      "Find clear answers to common questions about humanitarian mine action, explosive hazards, and DAFA's work.",
  },
];

export default function KnowledgeCategories() {
  return (
    <section
      id="knowledge-categories"
      className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-24"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#087B5A]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#F97316]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
            Explore & Learn
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Explore Our
            <span className="block text-[#087B5A]">Knowledge Areas</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Discover information and educational resources that help build
            understanding of humanitarian mine action and safer communities.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-6">
          {categories.map((category, index) => {
            const Icon = category.icon;

            const isLarge = index >= 3;

            return (
              <motion.div
                key={category.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#087B5A]/30 hover:shadow-xl ${
                  isLarge ? "lg:col-span-3" : "lg:col-span-2"
                }`}
              >
                {/* Top Accent */}
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-[#F97316] transition-transform duration-300 group-hover:scale-x-100" />

                {/* Number */}
                <span className="absolute right-6 top-5 text-4xl font-black text-slate-100 transition-colors duration-300 group-hover:text-[#087B5A]/10">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A] transition-all duration-300 group-hover:bg-[#087B5A] group-hover:text-white">
                  <Icon size={19} />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="mt-6 text-xl font-bold text-[#0F172A]">
                    {category.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {category.description}
                  </p>

                  {/* Explore */}
                  <button
                    type="button"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#087B5A] transition-all duration-300 group-hover:gap-3"
                  >
                    Explore
                    <FaArrowRight size={12} />
                  </button>
                </div>

                {/* Bottom Glow */}
                <div className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-[#087B5A]/5 blur-2xl transition-all duration-300 group-hover:bg-[#F97316]/10" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-12 max-w-2xl text-center"
        >
          <p className="text-sm leading-7 text-slate-500">
            Our Knowledge Center brings together information designed to improve
            awareness, understanding, and knowledge of humanitarian mine action.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
