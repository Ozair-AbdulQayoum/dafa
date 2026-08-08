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
    y: 35,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: index * 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function MissionVisionValues() {
  return (
    <section className="overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================= SECTION HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-[#087B5A]">
            What Guides Us
          </span>

          <h2 className="text-3xl font-bold leading-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Our Mission, Vision & <span className="text-[#087B5A]">Values</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Our work is guided by a commitment to safety, responsible
            humanitarian action, and the communities we serve.
          </p>
        </motion.div>

        {/* ================= MAIN CARDS ================= */}

        <div className="grid gap-6 lg:grid-cols-3">
          {/* ================= MISSION ================= */}

          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -8 }}
            className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl sm:p-8"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#087B5A]/10 text-[#087B5A] transition duration-300 group-hover:bg-[#087B5A] group-hover:text-white">
              <FaBullseye size={24} />
            </div>

            <h3 className="text-2xl font-bold text-[#0F172A]">Our Mission</h3>

            <p className="mt-4 text-base leading-7 text-slate-600">
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
            whileHover={{ y: -8 }}
            className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl sm:p-8"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0284C7]/10 text-[#0284C7] transition duration-300 group-hover:bg-[#0284C7] group-hover:text-white">
              <FaEye size={24} />
            </div>

            <h3 className="text-2xl font-bold text-[#0F172A]">Our Vision</h3>

            <p className="mt-4 text-base leading-7 text-slate-600">
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
            whileHover={{ y: -8 }}
            className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl sm:p-8"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F97316]/10 text-[#F97316] transition duration-300 group-hover:bg-[#F97316] group-hover:text-white">
              <FaHandshake size={24} />
            </div>

            <h3 className="text-2xl font-bold text-[#0F172A]">Our Values</h3>

            <p className="mt-4 text-base leading-7 text-slate-600">
              We are guided by principles that shape how we work with
              communities, partners, and one another.
            </p>

            {/* Values */}
            <div className="mt-6 flex flex-wrap gap-2">
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
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-12 max-w-4xl text-center"
        >
          <div className="h-px w-full bg-slate-200" />

          <p className="mt-8 text-sm font-medium leading-7 text-slate-500 sm:text-base">
            Every action we take is focused on reducing risk, protecting
            communities, and contributing to a safer future.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
