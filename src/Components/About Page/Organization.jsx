import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaSitemap, FaUsers, FaArrowRight } from "react-icons/fa";

export default function Organization() {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Section Label */}

          <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-[#087B5A] sm:text-sm">
            Our Organization
          </span>

          {/* Main Heading */}

          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Working Together for a{" "}
            <span className="text-[#087B5A]">Common Mission</span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:text-lg">
            DAFA is supported by an organized structure of experienced
            professionals and field teams working together toward safer
            communities.
          </p>
        </motion.div>

        {/* ================= ACTION CARDS ================= */}

        <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:mt-14 md:grid-cols-2">
          {/* ================= ORGANIZATION CHART ================= */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -5 }}
            className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:border-[#A7F3D0] hover:shadow-lg sm:p-7"
          >
            {/* Icon */}

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A] transition-all duration-300 group-hover:bg-[#087B5A] group-hover:text-white">
              <FaSitemap size={20} />
            </div>

            {/* Heading */}

            <h3 className="mt-5 text-xl font-bold leading-snug text-[#0F172A] sm:text-2xl">
              Organization Chart
            </h3>

            {/* Description */}

            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              Explore DAFA's organizational structure and how different
              functions work together to support its humanitarian mission.
            </p>

            {/* Link */}

            <Link
              to="/organization-chart"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#087B5A] transition-all duration-300 group-hover:gap-3"
            >
              View Organization Chart
              <FaArrowRight size={13} />
            </Link>
          </motion.div>

          {/* ================= MEMBERS ================= */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            whileHover={{ y: -5 }}
            className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:border-[#A7F3D0] hover:shadow-lg sm:p-7"
          >
            {/* Icon */}

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A] transition-all duration-300 group-hover:bg-[#087B5A] group-hover:text-white">
              <FaUsers size={20} />
            </div>

            {/* Heading */}

            <h3 className="mt-5 text-xl font-bold leading-snug text-[#0F172A] sm:text-2xl">
              Our Members
            </h3>

            {/* Description */}

            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              Meet the people whose experience, dedication, and teamwork
              contribute to DAFA's humanitarian work.
            </p>

            {/* Link */}

            <Link
              to="/members"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#087B5A] transition-all duration-300 group-hover:gap-3"
            >
              Meet Our Members
              <FaArrowRight size={13} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
