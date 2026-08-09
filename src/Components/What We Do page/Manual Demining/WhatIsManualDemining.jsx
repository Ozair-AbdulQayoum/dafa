import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaSearch, FaUsers } from "react-icons/fa";

export default function WhatIsManualDemining() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10">
        {/* =====================================================
            IMAGE
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Decorative Shape */}
          <div className="absolute -left-5 -top-5 h-24 w-24 rounded-2xl bg-[#A7F3D0]/40" />

          {/* Image Card */}
          <div className="relative overflow-hidden rounded-[2rem] shadow-xl">
            <img
              src="/images/what-we-do/manual-demining.jpg"
              alt="DAFA manual demining team working in the field"
              className="h-[480px] w-full object-cover transition duration-700 hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#06281E]/70 via-transparent to-transparent" />

            {/* Image Caption */}
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A7F3D0]">
                Humanitarian Mine Action
              </p>

              <p className="mt-2 text-xl font-bold text-white">
                Working toward safer communities
              </p>
            </div>
          </div>

          {/* Small Experience Badge */}
          <div className="absolute -bottom-6 -right-4 rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-xl sm:-right-6">
            <p className="text-2xl font-bold text-[#087B5A]">36+</p>

            <p className="text-xs font-medium text-slate-500">
              Years of Experience
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            CONTENT
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {/* Label */}
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-10 rounded-full bg-[#087B5A]" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
              Understanding Manual Demining
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-5 text-3xl font-bold leading-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            What Is
            <span className="block text-[#087B5A]">Manual Demining?</span>
          </h2>

          {/* Description */}
          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            Manual demining is a careful and systematic process used to locate,
            identify, remove, and safely dispose of landmines and other
            explosive hazards from contaminated areas.
          </p>

          <p className="mt-4 text-base leading-8 text-slate-600">
            DAFA's trained demining teams work in affected communities using
            established procedures and specialized equipment to reduce the risks
            posed by explosive hazards and help return land to safe and
            productive use.
          </p>

          {/* Key Points */}
          <div className="mt-8 space-y-5">
            {/* Point 1 */}
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A]">
                <FaSearch size={17} />
              </div>

              <div>
                <h3 className="font-bold text-[#0F172A]">Careful Detection</h3>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Trained teams carefully search contaminated areas to identify
                  potential explosive hazards.
                </p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A]">
                <FaShieldAlt size={17} />
              </div>

              <div>
                <h3 className="font-bold text-[#0F172A]">
                  Safety-Focused Operations
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Operations follow strict safety procedures designed to protect
                  deminers and surrounding communities.
                </p>
              </div>
            </div>

            {/* Point 3 */}
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A]">
                <FaUsers size={17} />
              </div>

              <div>
                <h3 className="font-bold text-[#0F172A]">
                  Community Protection
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Clearance helps communities safely access land,
                  infrastructure, roads, and essential services.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
