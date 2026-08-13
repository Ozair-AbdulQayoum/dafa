import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaUsers,
  FaProjectDiagram,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const locations = [
  {
    province: "Kabul",
    projects: "45+",
    people: "120K+",
    status: "Active",
  },
  {
    province: "Kandahar",
    projects: "60+",
    people: "250K+",
    status: "Active",
  },
  {
    province: "Nangarhar",
    projects: "35+",
    people: "90K+",
    status: "Active",
  },
  {
    province: "Helmand",
    projects: "50+",
    people: "180K+",
    status: "Active",
  },
];

const coverageStats = [
  {
    value: "32+",
    label: "Provinces Reached",
    icon: FaMapMarkerAlt,
  },
  {
    value: "118+",
    label: "Projects Delivered",
    icon: FaProjectDiagram,
  },
  {
    value: "12M+",
    label: "People Benefited",
    icon: FaUsers,
  },
  {
    value: "323M+",
    label: "m² Land Cleared",
    icon: FaCheckCircle,
  },
];

export default function WhereWeWork() {
  const [activeProvince, setActiveProvince] = useState("Kabul");

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-24 sm:py-28 lg:py-32">
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-48 top-0 h-[500px] w-[500px] rounded-full bg-[#087B5A]/5 blur-3xl" />

        <div className="absolute -right-48 bottom-0 h-[500px] w-[500px] rounded-full bg-[#F97316]/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-9 rounded-full bg-[#F97316]" />

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#087B5A]">
              Our Coverage
            </span>

            <span className="h-[2px] w-9 rounded-full bg-[#F97316]" />
          </div>

          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-[#0F172A] sm:text-5xl lg:text-[3.5rem]">
            Where We Work
            <span className="block text-[#087B5A]">Across Afghanistan</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            DAFA works alongside communities across Afghanistan to reduce
            explosive hazards, restore safe access to land, and support
            humanitarian mine action.
          </p>
        </motion.div>

        {/* ================= COVERAGE STATISTICS ================= */}

        <div className="mt-14 grid grid-cols-2 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-4">
          {coverageStats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className={`relative p-6 text-center sm:p-7 ${
                  index !== 0
                    ? "border-t border-slate-200 sm:border-l lg:border-t-0"
                    : "border-t border-slate-200 sm:border-t-0"
                }`}
              >
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A]">
                  <Icon size={16} />
                </div>

                <p className="mt-4 text-2xl font-extrabold tracking-tight text-[#0F172A] sm:text-3xl">
                  {stat.value}
                </p>

                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* ================= MAP + LOCATIONS ================= */}

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          {/* ================= MAP ================= */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-[#052E23] shadow-xl"
          >
            {/* Map background */}

            <div className="absolute inset-0 opacity-[0.08]">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage:
                    "linear-gradient(#A7F3D0 1px, transparent 1px), linear-gradient(90deg, #A7F3D0 1px, transparent 1px)",
                  backgroundSize: "45px 45px",
                }}
              />
            </div>

            {/* Glows */}

            <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#087B5A]/30 blur-3xl" />

            <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#F97316]/20 blur-3xl" />

            {/* Header */}

            <div className="relative z-10 flex items-center justify-between p-6 sm:p-8">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#A7F3D0]">
                  DAFA Coverage Map
                </p>

                <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                  Humanitarian Operations
                </h3>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur-md">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#F97316]" />
                Active Operations
              </div>
            </div>

            {/* Afghanistan Map Placeholder */}

            <div className="relative flex min-h-[470px] items-center justify-center px-6 pb-8">
              {/* Stylized Afghanistan silhouette */}

              <div className="relative h-[330px] w-[230px] rotate-[-4deg] sm:h-[380px] sm:w-[270px]">
                <div
                  className="
                    absolute
                    inset-0
                    rounded-[45%_55%_48%_52%/35%_40%_60%_65%]
                    border-2
                    border-[#A7F3D0]/30
                    bg-[#087B5A]/25
                    shadow-[0_0_80px_rgba(8,123,90,0.2)]
                  "
                />

                {/* Province markers */}

                <button
                  onClick={() => setActiveProvince("Kabul")}
                  className="absolute left-[57%] top-[48%] z-20"
                >
                  <span
                    className={`relative flex h-5 w-5 items-center justify-center rounded-full ${
                      activeProvince === "Kabul"
                        ? "bg-[#F97316]"
                        : "bg-[#A7F3D0]"
                    }`}
                  >
                    <span className="absolute h-8 w-8 animate-ping rounded-full bg-current opacity-20" />
                  </span>
                </button>

                <button
                  onClick={() => setActiveProvince("Kandahar")}
                  className="absolute left-[45%] top-[70%] z-20"
                >
                  <span
                    className={`flex h-5 w-5 rounded-full ${
                      activeProvince === "Kandahar"
                        ? "bg-[#F97316]"
                        : "bg-[#A7F3D0]"
                    }`}
                  />
                </button>

                <button
                  onClick={() => setActiveProvince("Nangarhar")}
                  className="absolute right-[13%] top-[44%] z-20"
                >
                  <span
                    className={`flex h-5 w-5 rounded-full ${
                      activeProvince === "Nangarhar"
                        ? "bg-[#F97316]"
                        : "bg-[#A7F3D0]"
                    }`}
                  />
                </button>

                <button
                  onClick={() => setActiveProvince("Helmand")}
                  className="absolute left-[30%] top-[63%] z-20"
                >
                  <span
                    className={`flex h-5 w-5 rounded-full ${
                      activeProvince === "Helmand"
                        ? "bg-[#F97316]"
                        : "bg-[#A7F3D0]"
                    }`}
                  />
                </button>
              </div>

              {/* Active province label */}

              <motion.div
                key={activeProvince}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-7 left-6 right-6 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md sm:left-8 sm:right-8"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A7F3D0]">
                      Selected Province
                    </p>

                    <p className="mt-1 text-lg font-bold text-white">
                      {activeProvince}
                    </p>
                  </div>

                  <FaMapMarkerAlt className="text-xl text-[#F97316]" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ================= PROVINCES ================= */}

          <div>
            <div className="mb-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
                Selected Areas
              </p>

              <h3 className="mt-2 text-2xl font-extrabold text-[#0F172A]">
                Our Work in Key Provinces
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Explore examples of provinces where DAFA's humanitarian
                activities are making a difference.
              </p>
            </div>

            <div className="space-y-3">
              {locations.map((item, index) => {
                const isActive = activeProvince === item.province;

                return (
                  <motion.button
                    key={item.province}
                    onClick={() => setActiveProvince(item.province)}
                    initial={{ opacity: 0, x: 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    whileHover={{ x: 4 }}
                    className={`group w-full rounded-2xl border p-5 text-left transition-all duration-300 ${
                      isActive
                        ? "border-[#087B5A]/30 bg-[#087B5A]/5 shadow-md"
                        : "border-slate-200 bg-white hover:border-[#087B5A]/20 hover:shadow-lg"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${
                            isActive
                              ? "bg-[#087B5A] text-white"
                              : "bg-[#087B5A]/10 text-[#087B5A] group-hover:bg-[#087B5A] group-hover:text-white"
                          }`}
                        >
                          <FaMapMarkerAlt size={15} />
                        </div>

                        <div>
                          <h4 className="font-bold text-[#0F172A]">
                            {item.province}
                          </h4>

                          <div className="mt-1 flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#F97316]" />

                            <span className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                              {item.status}
                            </span>
                          </div>
                        </div>
                      </div>

                      <FaArrowRight
                        size={12}
                        className={`transition-all ${
                          isActive
                            ? "translate-x-1 text-[#087B5A]"
                            : "text-slate-300 group-hover:translate-x-1 group-hover:text-[#087B5A]"
                        }`}
                      />
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-slate-50 px-3 py-2.5">
                        <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                          Projects
                        </p>

                        <p className="mt-1 text-lg font-extrabold text-[#0F172A]">
                          {item.projects}
                        </p>
                      </div>

                      <div className="rounded-xl bg-slate-50 px-3 py-2.5">
                        <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                          People Supported
                        </p>

                        <p className="mt-1 text-lg font-extrabold text-[#0F172A]">
                          {item.people}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ================= CTA ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 flex flex-col items-center justify-between gap-5 rounded-3xl border border-[#087B5A]/10 bg-white p-6 shadow-sm sm:flex-row sm:p-8"
        >
          <div>
            <p className="text-lg font-extrabold text-[#0F172A] sm:text-xl">
              Explore DAFA's work across Afghanistan
            </p>

            <p className="mt-1 text-sm leading-6 text-slate-500">
              Discover projects, locations, achievements, and humanitarian
              impact in more detail.
            </p>
          </div>

          <Link
            to="/projects"
            className="group inline-flex shrink-0 items-center gap-3 rounded-xl bg-[#F97316] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#F97316]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#EA580C] hover:shadow-xl"
          >
            Explore All Projects
            <FaArrowRight
              size={12}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
