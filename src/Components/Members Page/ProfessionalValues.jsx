import React from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaHandshake,
  FaBalanceScale,
  FaUsers,
  FaHeart,
  FaCheckCircle,
} from "react-icons/fa";

const values = [
  {
    icon: FaShieldAlt,
    title: "Safety First",
    text: "We place the safety of people and communities at the heart of our work.",
  },
  {
    icon: FaHandshake,
    title: "Teamwork",
    text: "We work together, share knowledge, and support one another to achieve common goals.",
  },
  {
    icon: FaBalanceScale,
    title: "Integrity",
    text: "We value honesty, professionalism, responsibility, and ethical conduct.",
  },
  {
    icon: FaUsers,
    title: "Respect",
    text: "We respect colleagues, communities, partners, and the people we serve.",
  },
  {
    icon: FaHeart,
    title: "Humanitarian Commitment",
    text: "We remain committed to helping communities affected by explosive hazards.",
  },
  {
    icon: FaCheckCircle,
    title: "Accountability",
    text: "We take responsibility for our work and strive to maintain high professional standards.",
  },
];

export default function ProfessionalValues() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28">
      {/* ================= BACKGROUND ================= */}

      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#087B5A]/5 blur-3xl" />

      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#0284C7]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#087B5A]">
            Our Values
          </span>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            What Guides
            <span className="text-[#087B5A]"> Our People</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            The way we work is shaped by professional values that help us remain
            responsible, respectful, and focused on the people and communities
            we serve.
          </p>
        </motion.div>

        {/* ================= VALUES ================= */}

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-[#087B5A]/20 hover:shadow-xl"
              >
                {/* Icon */}

                <motion.div
                  whileHover={{ scale: 1.08, rotate: 3 }}
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A] transition-colors duration-300 group-hover:bg-[#087B5A] group-hover:text-white"
                >
                  <Icon size={19} />
                </motion.div>

                {/* Title */}

                <h3 className="mt-6 text-lg font-bold text-[#0F172A]">
                  {value.title}
                </h3>

                {/* Description */}

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {value.text}
                </p>

                {/* Accent */}

                <div className="mt-6 h-1 w-8 rounded-full bg-[#087B5A]/20 transition-all duration-300 group-hover:w-14 group-hover:bg-[#087B5A]" />
              </motion.div>
            );
          })}
        </div>

        {/* ================= FINAL STATEMENT ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-14 max-w-4xl text-center"
        >
          <p className="text-base font-medium leading-8 text-[#0F172A] sm:text-lg">
            Together, these values shape a professional culture built on
            <span className="text-[#087B5A]">
              {" "}
              trust, responsibility, and service.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
