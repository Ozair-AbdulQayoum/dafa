import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCheckCircle,
  FaUsers,
  FaProjectDiagram,
} from "react-icons/fa";

// Add official DAFA project images when available.
// import project1 from "../../assets/projects/project1.jpg";
// import project2 from "../../assets/projects/project2.jpg";
// import project3 from "../../assets/projects/project3.jpg";

const projects = [
  {
    slug: "kabul-humanitarian-clearance-project",
    image: "",
    location: "Kabul Province",
    year: "2025",
    title: "Kabul Humanitarian Clearance Project",
    description:
      "Clearing contaminated land and removing explosive hazards to restore safe access for communities.",
    status: "Completed",
    impact: "42,000+ people",
    impactLabel: "Benefited",
  },
  {
    slug: "kandahar-humanitarian-demining-operations",
    image: "",
    location: "Kandahar Province",
    year: "2026",
    title: "Kandahar Humanitarian Demining Operations",
    description:
      "Professional demining operations supporting communities affected by landmines and explosive hazards.",
    status: "Ongoing",
    impact: "85,000+ m²",
    impactLabel: "Land addressed",
  },
  {
    slug: "nangarhar-explosive-risk-education",
    image: "",
    location: "Nangarhar Province",
    year: "2026",
    title: "Nangarhar Explosive Risk Education",
    description:
      "Community-based awareness activities helping people recognize hazards and adopt safer behaviors.",
    status: "Active",
    impact: "18,500+ people",
    impactLabel: "Reached",
  },
];

const statusStyles = {
  Completed: "border-emerald-200 bg-emerald-50 text-emerald-700",
  Ongoing: "border-orange-200 bg-orange-50 text-orange-700",
  Active: "border-blue-200 bg-blue-50 text-blue-700",
};

export default function Projects() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28">
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-60 top-0 h-[500px] w-[500px] rounded-full bg-[#087B5A]/5 blur-3xl" />

        <div className="absolute -right-60 bottom-0 h-[500px] w-[500px] rounded-full bg-[#F97316]/5 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.018]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(#0B3D2E 1px, transparent 1px), linear-gradient(90deg, #0B3D2E 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================= SECTION HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#F97316]" />

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#087B5A]">
              Featured Projects
            </span>

            <span className="h-px w-10 bg-[#F97316]" />
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Turning Humanitarian Action
            <span className="block text-[#087B5A]">Into Lasting Impact</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Explore selected DAFA projects helping communities across
            Afghanistan reduce explosive hazards, reclaim land, and build safer
            futures.
          </p>
        </motion.div>

        {/* ================= PROJECT GRID ================= */}

        <div className="mt-14 grid gap-7 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* ================= IMAGE ================= */}

              <div className="relative h-[270px] overflow-hidden bg-[#0B3D2E]">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#052E23] via-[#0B3D2E] to-[#087B5A]" />

                    <div className="absolute inset-0 opacity-20">
                      <div
                        className="h-full w-full"
                        style={{
                          backgroundImage:
                            "linear-gradient(45deg, transparent 48%, rgba(255,255,255,.12) 49%, rgba(255,255,255,.12) 51%, transparent 52%)",
                          backgroundSize: "28px 28px",
                        }}
                      />
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm">
                        <FaProjectDiagram
                          size={30}
                          className="text-[#A7F3D0]"
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* Image overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#052E23]/90 via-[#052E23]/10 to-transparent" />

                {/* Location */}

                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-[#052E23]/75 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
                  <FaMapMarkerAlt size={11} className="text-[#FDBA74]" />
                  {project.location}
                </div>

                {/* Status */}

                <div
                  className={`absolute right-5 top-5 rounded-full border px-3.5 py-2 text-[11px] font-bold ${statusStyles[project.status]}`}
                >
                  {project.status}
                </div>

                {/* Bottom image information */}

                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A7F3D0]">
                      DAFA Project
                    </p>

                    <div className="mt-2 flex items-center gap-2 text-xs font-medium text-white/80">
                      <FaCalendarAlt size={10} />
                      {project.year}
                    </div>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#087B5A] opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
                    <FaArrowRight size={13} />
                  </div>
                </div>
              </div>

              {/* ================= CONTENT ================= */}

              <div className="p-7">
                <h3 className="text-xl font-extrabold leading-snug tracking-tight text-[#0F172A] transition-colors duration-300 group-hover:text-[#087B5A]">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {project.description}
                </p>

                {/* Impact */}

                <div className="mt-6 flex items-center gap-4 rounded-2xl bg-[#F8FAFC] p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A]">
                    {project.impactLabel === "Benefited" ||
                    project.impactLabel === "Reached" ? (
                      <FaUsers size={16} />
                    ) : (
                      <FaCheckCircle size={16} />
                    )}
                  </div>

                  <div>
                    <p className="text-lg font-extrabold text-[#0F172A]">
                      {project.impact}
                    </p>

                    <p className="text-xs font-medium text-slate-500">
                      {project.impactLabel}
                    </p>
                  </div>
                </div>

                {/* CTA */}

                <Link
                  to={`/projects/${project.slug}`}
                  className="mt-6 inline-flex w-full items-center justify-between rounded-xl border border-[#087B5A]/20 bg-[#087B5A]/5 px-5 py-3.5 text-sm font-bold text-[#087B5A] transition-all duration-300 hover:bg-[#087B5A] hover:text-white"
                >
                  <span>View Project</span>

                  <FaArrowRight
                    size={12}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ================= BOTTOM CTA ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 flex flex-col items-center justify-between gap-5 rounded-2xl border border-[#087B5A]/10 bg-[#F8FAFC] px-6 py-7 sm:flex-row sm:px-8"
        >
          <div>
            <p className="text-lg font-bold text-[#0F172A]">
              Explore DAFA's work across Afghanistan
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Discover more projects, locations, achievements, and humanitarian
              impact.
            </p>
          </div>

          <Link
            to="/projects"
            className="group inline-flex shrink-0 items-center gap-3 rounded-xl bg-[#087B5A] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#087B5A]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B3D2E]"
          >
            View All Projects
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
