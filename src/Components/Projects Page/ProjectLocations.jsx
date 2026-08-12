import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaArrowRight, FaMapMarkedAlt } from "react-icons/fa";

const locations = [
  {
    province: "Kabul",
    projects: "Multiple Projects",
    description:
      "Humanitarian mine action activities supporting safer communities and the responsible release of contaminated land.",
  },
  {
    province: "Nangarhar",
    projects: "Clearance Operations",
    description:
      "Explosive hazard reduction and clearance activities helping communities access land more safely.",
  },
  {
    province: "Kandahar",
    projects: "Clearance Operations",
    description:
      "Humanitarian operations focused on reducing explosive risks and improving safe access to affected areas.",
  },
  {
    province: "Herat",
    projects: "Community Safety",
    description:
      "Mine action activities supporting safer movement, access, and community resilience.",
  },
  {
    province: "Balkh",
    projects: "Mine Action",
    description:
      "Supporting the safe release of contaminated land for communities, livelihoods, and local development.",
  },
  {
    province: "Helmand",
    projects: "Field Operations",
    description:
      "Field-based humanitarian operations addressing explosive hazards and supporting safer communities.",
  },
];

export default function ProjectLocations() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Section Label */}
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A]">
              <FaMapMarkedAlt size={17} />
            </span>

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
              Project Locations
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Working Across
            <span className="block text-[#087B5A]">Afghanistan</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
            DAFA delivers humanitarian mine action across communities affected
            by explosive hazards, helping make land safer for people,
            livelihoods, and future development.
          </p>
        </motion.div>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* =================================================
              MAP VISUAL
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl border border-slate-200 bg-[#F1F7F4] p-8 sm:p-10"
          >
            {/* Background Decoration */}

            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#087B5A]/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-[#F97316]/10 blur-3xl" />

            {/* Map */}

            <div className="relative flex min-h-[430px] flex-col items-center justify-center">
              <div className="relative flex h-80 w-72 items-center justify-center">
                {/* Map Shape */}

                <motion.div
                  animate={{
                    rotate: [-8, -6, -8],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 rounded-[45%_55%_50%_50%] border-2 border-[#087B5A]/20 bg-[#087B5A]/5"
                />

                {/* Inner Shape */}

                <div className="absolute inset-6 rounded-[48%_52%_45%_55%] border border-dashed border-[#087B5A]/15" />

                {/* Center */}

                <div className="relative z-10 text-center">
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#087B5A] text-white shadow-xl shadow-[#087B5A]/20"
                  >
                    <FaMapMarkedAlt size={28} />
                  </motion.div>

                  <h3 className="mt-5 text-lg font-bold text-[#0F172A]">
                    Afghanistan
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Humanitarian Project Areas
                  </p>
                </div>

                {/* Location Points */}

                <motion.span
                  animate={{ scale: [1, 1.25, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute left-12 top-16 h-3 w-3 rounded-full bg-[#F97316] shadow-lg shadow-[#F97316]/30"
                />

                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    delay: 0.3,
                  }}
                  className="absolute right-10 top-24 h-3 w-3 rounded-full bg-[#087B5A] shadow-lg shadow-[#087B5A]/30"
                />

                <motion.span
                  animate={{ scale: [1, 1.25, 1] }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    delay: 0.6,
                  }}
                  className="absolute left-20 bottom-20 h-3 w-3 rounded-full bg-[#087B5A] shadow-lg shadow-[#087B5A]/30"
                />

                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: 0.9,
                  }}
                  className="absolute right-16 bottom-12 h-3 w-3 rounded-full bg-[#F97316] shadow-lg shadow-[#F97316]/30"
                />
              </div>

              {/* Map Caption */}

              <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#087B5A]">
                <FaMapMarkerAlt size={13} />
                Supporting Communities Across Afghanistan
              </div>
            </div>
          </motion.div>

          {/* =================================================
              LOCATIONS
          ================================================== */}

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
                Selected Project Areas
              </p>

              <h3 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-3xl">
                Reaching Communities
                <span className="text-[#087B5A]"> Where It Matters Most</span>
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
                Our projects extend across different regions of Afghanistan,
                responding to the needs of communities affected by explosive
                hazards.
              </p>
            </motion.div>

            {/* Location Cards */}

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {locations.map((location, index) => (
                <motion.div
                  key={location.province}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -4,
                  }}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#087B5A]/30 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      {/* Icon */}

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A] transition-all duration-300 group-hover:bg-[#087B5A] group-hover:text-white">
                        <FaMapMarkerAlt size={14} />
                      </div>

                      {/* Province */}

                      <div>
                        <h4 className="text-base font-bold text-[#0F172A]">
                          {location.province}
                        </h4>

                        <p className="mt-1 text-xs font-semibold text-[#087B5A]">
                          {location.projects}
                        </p>
                      </div>
                    </div>

                    {/* Arrow */}

                    <FaArrowRight
                      size={12}
                      className="mt-2 shrink-0 text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#087B5A]"
                    />
                  </div>

                  {/* Description */}

                  <p className="mt-4 text-xs leading-6 text-slate-500">
                    {location.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="mt-14 overflow-hidden rounded-2xl border border-[#087B5A]/10 bg-[#F1F7F4] px-6 py-7 text-center sm:px-10"
        >
          <p className="mx-auto max-w-4xl text-sm leading-7 text-slate-600 sm:text-base">
            DAFA continues to support humanitarian mine action in areas where
            explosive hazards affect the safety, mobility, and livelihoods of
            local communities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
