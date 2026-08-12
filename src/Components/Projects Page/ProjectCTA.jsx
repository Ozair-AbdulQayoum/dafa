import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaEnvelope, FaHardHat } from "react-icons/fa";

export default function ProjectCTA() {
  return (
    <section className="relative overflow-hidden bg-[#06281E] py-20 sm:py-24">
      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#087B5A]/25 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-[#F97316]/10 blur-3xl" />

      {/* Decorative Circle */}
      <div className="pointer-events-none absolute right-10 top-10 hidden h-32 w-32 rounded-full border border-[#A7F3D0]/10 lg:block" />

      <div className="relative z-10 mx-auto max-w-5xl px-5 text-center sm:px-8">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#A7F3D0]/10 text-[#A7F3D0]"
        >
          <FaHardHat size={22} />
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#A7F3D0]"
        >
          Our Commitment
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-3 text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          Together, We Can Build
          <span className="block text-[#A7F3D0]">Safer Communities</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-5 max-w-2xl text-base leading-8 text-green-50/65 sm:text-lg"
        >
          DAFA remains committed to reducing explosive hazards, releasing
          contaminated land, and helping communities across Afghanistan live
          with greater safety and opportunity.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-9 flex flex-wrap justify-center gap-4"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 rounded-xl bg-[#F97316] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#EA580C] hover:shadow-xl"
          >
            Contact DAFA
            <FaArrowRight
              size={12}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          <Link
            to="/what-we-do/manual-demining"
            className="inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white hover:text-[#0B3D2E]"
          >
            Explore Our Work
            <FaEnvelope size={13} />
          </Link>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mx-auto mt-12 h-px max-w-xs bg-gradient-to-r from-transparent via-[#A7F3D0]/20 to-transparent"
        />

        {/* Closing Statement */}
        <p className="mt-6 text-xs font-medium tracking-wide text-green-50/35">
          Removing hazards. Saving lives. Creating a safer future.
        </p>
      </div>
    </section>
  );
}
