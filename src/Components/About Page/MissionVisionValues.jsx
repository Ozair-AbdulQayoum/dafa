import React from "react";
import { motion } from "framer-motion";
import {
  FaBullseye,
  FaEye,
  FaHandshake,
  FaShieldAlt,
  FaBalanceScale,
  FaUsers,
} from "react-icons/fa";

const values = [
  {
    icon: FaShieldAlt,
    title: "Safety",
  },
  {
    icon: FaBalanceScale,
    title: "Integrity",
  },
  {
    icon: FaUsers,
    title: "Teamwork",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: index * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function MissionVisionValues() {
  return (
    <section className="overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-14 lg:mb-16"
        >
          {/* Label */}

          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#087B5A] sm:text-sm">
            What Guides Us
          </span>

          {/* Heading */}

          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Our Mission, Vision & <span className="text-[#087B5A]">Values</span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-8 lg:text-lg">
            Our work is guided by a commitment to safety, responsible
            humanitarian action, and the communities we serve.
          </p>
        </motion.div>

        {/* ================= CARDS ================= */}

        <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
          {/* ================= MISSION ================= */}

          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -6 }}
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg sm:p-7"
          >
            {/* Icon */}

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A] transition-all duration-300 group-hover:bg-[#087B5A] group-hover:text-white">
              <FaBullseye size={21} />
            </div>

            {/* Title */}

            <h3 className="mt-5 text-xl font-bold leading-snug text-[#0F172A] sm:text-2xl">
              Our Mission
            </h3>

            {/* Text */}

            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              To protect communities and reduce the risks posed by explosive
              hazards through effective humanitarian mine action.
            </p>
          </motion.div>

          {/* ================= VISION ================= */}

          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -6 }}
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg sm:p-7"
          >
            {/* Icon */}

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0284C7]/10 text-[#0284C7] transition-all duration-300 group-hover:bg-[#0284C7] group-hover:text-white">
              <FaEye size={21} />
            </div>

            {/* Title */}

            <h3 className="mt-5 text-xl font-bold leading-snug text-[#0F172A] sm:text-2xl">
              Our Vision
            </h3>

            {/* Text */}

            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              A safer Afghanistan where communities can live, work, and develop
              without the threat of explosive hazards.
            </p>
          </motion.div>

          {/* ================= VALUES ================= */}

          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -6 }}
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg sm:p-7"
          >
            {/* Icon */}

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F97316]/10 text-[#F97316] transition-all duration-300 group-hover:bg-[#F97316] group-hover:text-white">
              <FaHandshake size={21} />
            </div>

            {/* Title */}

            <h3 className="mt-5 text-xl font-bold leading-snug text-[#0F172A] sm:text-2xl">
              Our Values
            </h3>

            {/* Text */}

            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              We are guided by principles that shape how we work with
              communities, partners, and one another.
            </p>

            {/* Values */}

            <div className="mt-5 flex flex-wrap gap-2">
              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <span
                    key={value.title}
                    className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700"
                  >
                    <Icon className="text-[#087B5A]" size={12} />

                    {value.title}
                  </span>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* ================= BOTTOM STATEMENT ================= */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-12 max-w-4xl text-center sm:mt-14"
        >
          <div className="h-px w-full bg-slate-200" />

          <p className="mx-auto mt-7 max-w-3xl text-sm leading-7 text-slate-500 sm:mt-8 sm:text-base sm:leading-8">
            Every action we take is focused on reducing risk, protecting
            communities, and contributing to a safer future.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
