import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaUsers,
  FaProjectDiagram,
  FaArrowRight,
} from "react-icons/fa";

const locations = [
  {
    province: "Kabul",
    projects: "45+",
    people: "120,000+",
  },
  {
    province: "Kandahar",
    projects: "60+",
    people: "250,000+",
  },
  {
    province: "Nangarhar",
    projects: "35+",
    people: "90,000+",
  },
  {
    province: "Helmand",
    projects: "50+",
    people: "180,000+",
  },
];

export default function WhereWeWork() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-28">
      {/* ================= BACKGROUND DECORATION ================= */}

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#087B5A]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#0284C7]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================= SECTION HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-9 rounded-full bg-[#F97316]" />

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#087B5A] sm:text-sm">
              Our Coverage
            </span>

            <span className="h-[2px] w-9 rounded-full bg-[#F97316]" />
          </div>

          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-[#0F172A] sm:text-5xl lg:text-[3.25rem]">
            Where We Work
            <span className="block text-[#087B5A]">Across Afghanistan</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            DAFA works with communities across Afghanistan to reduce explosive
            hazards, support humanitarian mine action, and create safer
            environments for people and families.
          </p>
        </motion.div>

        {/* ================= MAIN CONTENT ================= */}

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch lg:gap-14">
          {/* ================= MAP AREA ================= */}

          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="relative h-full min-h-[480px] overflow-hidden rounded-[2rem] border border-slate-200 bg-[#F8FAFC] shadow-sm">
              {/* Decorative grid */}

              <div className="absolute inset-0 opacity-[0.035]">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(#0B3D2E 1px, transparent 1px), linear-gradient(90deg, #0B3D2E 1px, transparent 1px)",
                    backgroundSize: "45px 45px",
                  }}
                />
              </div>

              {/* Green glow */}

              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#087B5A]/10 blur-3xl" />

              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#0284C7]/10 blur-3xl" />

              {/* Map content */}

              <div className="relative flex h-full min-h-[480px] items-center justify-center">
                <div className="relative text-center">
                  {/* Main marker */}

                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#087B5A]/10"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#087B5A] shadow-xl shadow-[#087B5A]/20">
                      <FaMapMarkerAlt className="text-3xl text-white" />
                    </div>

                    <span className="absolute inset-0 animate-ping rounded-full border border-[#087B5A]/30" />
                  </motion.div>

                  <h3 className="mt-7 text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl">
                    Afghanistan Operations
                  </h3>

                  <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-500 sm:text-base">
                    DAFA humanitarian mine action activities extend across
                    communities in multiple provinces.
                  </p>

                  {/* Map status */}

                  <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#087B5A]/10 bg-white px-4 py-2 text-xs font-semibold text-[#087B5A] shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-[#F97316]" />
                    Nationwide Humanitarian Operations
                  </div>
                </div>

                {/* Decorative location dots */}

                <motion.span
                  animate={{ scale: [1, 1.25, 1] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                  }}
                  className="absolute left-[18%] top-[28%] h-3 w-3 rounded-full bg-[#F97316]"
                />

                <motion.span
                  animate={{ scale: [1, 1.25, 1] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: 0.5,
                  }}
                  className="absolute right-[20%] top-[35%] h-3 w-3 rounded-full bg-[#087B5A]"
                />

                <motion.span
                  animate={{ scale: [1, 1.25, 1] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: 1,
                  }}
                  className="absolute bottom-[25%] left-[30%] h-3 w-3 rounded-full bg-[#0284C7]"
                />
              </div>

              {/* Bottom information */}

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/80 bg-white/90 p-4 shadow-lg backdrop-blur-md sm:left-7 sm:right-7">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#087B5A]">
                      Coverage
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#0F172A]">
                      Supporting safer communities
                    </p>
                  </div>

                  <FaMapMarkerAlt className="shrink-0 text-xl text-[#F97316]" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* ================= PROVINCE CARDS ================= */}

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {locations.map((item, index) => (
              <motion.div
                key={item.province}
                initial={{ opacity: 0, x: 45 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true, margin: "-80px" }}
                whileHover={{ y: -4 }}
                className="
                  group
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-5
                  shadow-sm
                  transition-all
                  duration-300
                  hover:border-[#087B5A]/20
                  hover:shadow-xl
                  sm:p-6
                "
              >
                <div className="flex items-start justify-between gap-4">
                  {/* Province */}

                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A] transition-colors duration-300 group-hover:bg-[#087B5A] group-hover:text-white">
                      <FaMapMarkerAlt />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-[#0F172A]">
                        {item.province}
                      </h3>

                      <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-slate-400">
                        Operations
                      </p>
                    </div>
                  </div>

                  <FaArrowRight className="mt-2 text-sm text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#087B5A]" />
                </div>

                {/* Statistics */}

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-slate-50 p-3">
                    <div className="flex items-center gap-2">
                      <FaProjectDiagram className="text-sm text-[#F97316]" />

                      <span className="text-xs font-semibold text-slate-500">
                        Projects
                      </span>
                    </div>

                    <p className="mt-2 text-lg font-extrabold text-[#0F172A]">
                      {item.projects}
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-3">
                    <div className="flex items-center gap-2">
                      <FaUsers className="text-sm text-[#087B5A]" />

                      <span className="text-xs font-semibold text-slate-500">
                        Supported
                      </span>
                    </div>

                    <p className="mt-2 text-lg font-extrabold text-[#0F172A]">
                      {item.people}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= FOOTNOTE ================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-slate-500">
            DAFA continues to expand humanitarian mine action support where
            communities need it most.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
