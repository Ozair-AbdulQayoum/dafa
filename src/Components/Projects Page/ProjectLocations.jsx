import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaArrowRight, FaMapMarkedAlt } from "react-icons/fa";

const locations = [
  {
    province: "Kabul",
    projects: "Multiple Projects",
    description:
      "Humanitarian mine action activities supporting safer communities.",
  },
  {
    province: "Nangarhar",
    projects: "Clearance Operations",
    description: "Explosive hazard reduction and land clearance activities.",
  },
  {
    province: "Kandahar",
    projects: "Clearance Operations",
    description: "Supporting communities affected by explosive hazards.",
  },
  {
    province: "Herat",
    projects: "Community Safety",
    description:
      "Activities focused on reducing risks and improving safe access.",
  },
  {
    province: "Balkh",
    projects: "Mine Action",
    description: "Supporting the safe release of contaminated land.",
  },
  {
    province: "Helmand",
    projects: "Field Operations",
    description: "Humanitarian operations addressing explosive hazards.",
  },
];

export default function ProjectLocations() {
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
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A]">
              <FaMapMarkedAlt size={17} />
            </span>

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
              Project Locations
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Working Across
            <span className="block text-[#087B5A]">Afghanistan</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-500 sm:text-lg">
            DAFA's humanitarian mine action projects support communities
            affected by explosive hazards across different regions of
            Afghanistan.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Map Area */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl bg-[#F1F7F4] p-8 sm:p-10"
          >
            {/* Decorative Background */}
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#087B5A]/10 blur-3xl" />

            <div className="relative flex min-h-[430px] flex-col items-center justify-center">
              {/* Map Placeholder */}
              <div className="relative flex h-72 w-64 items-center justify-center sm:h-80 sm:w-72">
                <div className="absolute inset-0 rounded-[45%_55%_50%_50%] border-2 border-[#087B5A]/20 bg-[#087B5A]/5 rotate-[-8deg]" />

                <div className="relative z-10 text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#087B5A] text-white shadow-xl">
                    <FaMapMarkedAlt size={28} />
                  </div>

                  <p className="mt-5 text-lg font-bold text-[#0F172A]">
                    Afghanistan
                  </p>

                  <p className="mt-1 text-sm text-slate-500">Project Areas</p>
                </div>

                {/* Location Dots */}
                <span className="absolute left-12 top-16 h-3 w-3 rounded-full bg-[#F97316] shadow-lg" />
                <span className="absolute right-10 top-24 h-3 w-3 rounded-full bg-[#087B5A] shadow-lg" />
                <span className="absolute left-20 bottom-20 h-3 w-3 rounded-full bg-[#087B5A] shadow-lg" />
                <span className="absolute right-16 bottom-12 h-3 w-3 rounded-full bg-[#F97316] shadow-lg" />
              </div>

              <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#087B5A]">
                <FaMapMarkerAlt size={13} />
                Humanitarian Mine Action
              </div>
            </div>
          </motion.div>

          {/* Locations List */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-[#087B5A]">
                Selected Project Areas
              </p>

              <h3 className="mt-2 text-2xl font-bold text-[#0F172A] sm:text-3xl">
                Supporting Communities Where It Matters Most
              </h3>
            </motion.div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {locations.map((location, index) => (
                <motion.div
                  key={location.province}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#087B5A]/30 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#087B5A]/10 text-[#087B5A]">
                        <FaMapMarkerAlt size={14} />
                      </span>

                      <div>
                        <h4 className="font-bold text-[#0F172A]">
                          {location.province}
                        </h4>

                        <p className="mt-1 text-xs font-semibold text-[#087B5A]">
                          {location.projects}
                        </p>
                      </div>
                    </div>

                    <FaArrowRight
                      size={12}
                      className="mt-2 text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#087B5A]"
                    />
                  </div>

                  <p className="mt-4 text-xs leading-6 text-slate-500">
                    {location.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 rounded-2xl border border-[#087B5A]/10 bg-[#F1F7F4] px-6 py-7 text-center"
        >
          <p className="text-sm leading-7 text-slate-600 sm:text-base">
            DAFA continues to support humanitarian mine action efforts in areas
            where explosive hazards affect the safety, mobility, and livelihoods
            of local communities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
