import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaMapMarkerAlt, FaProjectDiagram } from "react-icons/fa";

// Add official DAFA project images when available.
// import project1 from "../../assets/projects/project1.jpg";
// import project2 from "../../assets/projects/project2.jpg";
// import project3 from "../../assets/projects/project3.jpg";

const projects = [
  {
    slug: "kabul-humanitarian-clearance-project",
    image: "",
    location: "Kabul Province",
    title: "Kabul Humanitarian Clearance Project",
    description:
      "Clearing contaminated land and removing explosive hazards to create safer communities and restore access to land.",
    status: "Completed",
  },
  {
    slug: "kandahar-humanitarian-demining-operations",
    image: "",
    location: "Kandahar Province",
    title: "Humanitarian Demining Operations",
    description:
      "Professional humanitarian demining activities supporting communities affected by landmines and explosive hazards.",
    status: "Ongoing",
  },
  {
    slug: "nangarhar-explosive-risk-education",
    image: "",
    location: "Nangarhar Province",
    title: "Explosive Risk Education",
    description:
      "Community awareness programs helping people understand explosive hazards and adopt safer behaviors.",
    status: "Active",
  },
];

const statusStyles = {
  Completed: "bg-emerald-50 text-emerald-700 border-emerald-100",
  Ongoing: "bg-orange-50 text-orange-700 border-orange-100",
  Active: "bg-blue-50 text-blue-700 border-blue-100",
};

export default function Projects() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-24 sm:py-28">
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-52 -top-52 h-[500px] w-[500px] rounded-full bg-[#087B5A]/5 blur-3xl" />

        <div className="absolute -bottom-52 -right-52 h-[500px] w-[500px] rounded-full bg-[#0284C7]/5 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.025]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(#0B3D2E 1px, transparent 1px), linear-gradient(90deg, #0B3D2E 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#087B5A]/40" />

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#087B5A] sm:text-sm">
              Featured Projects
            </p>

            <span className="h-px w-10 bg-[#087B5A]/40" />
          </div>

          <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Making Afghanistan Safer
            <span className="block text-[#087B5A]">
              Through Humanitarian Action
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            DAFA implements humanitarian mine action projects across Afghanistan
            to reduce explosive hazards, protect communities, and support safer
            access to land and essential services.
          </p>
        </motion.div>

        {/* ================= PROJECT CARDS ================= */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{
                once: true,
                margin: "-60px",
              }}
              whileHover={{
                y: -8,
              }}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              {/* ================= PROJECT IMAGE ================= */}
              <div className="relative h-60 overflow-hidden bg-[#0B3D2E]">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <>
                    {/* Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-[#A7F3D0]/20 bg-white/5">
                        <FaProjectDiagram className="text-3xl text-[#A7F3D0]" />
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B3D2E] via-[#0B3D2E]/90 to-[#087B5A]/70" />

                    <div className="absolute bottom-5 left-5">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A7F3D0]">
                        DAFA Project
                      </span>
                    </div>
                  </>
                )}

                {project.image && (
                  <div className="absolute inset-0 bg-gradient-to-t from-[#052E23]/70 via-transparent to-transparent" />
                )}

                {/* ================= LOCATION ================= */}
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/40 bg-white/95 px-4 py-2 text-xs font-bold text-[#087B5A] shadow-lg backdrop-blur-sm">
                  <FaMapMarkerAlt size={11} />
                  <span>{project.location}</span>
                </div>

                {/* ================= STATUS ================= */}
                <div
                  className={`absolute right-4 top-4 rounded-full border px-4 py-2 text-xs font-bold shadow-sm ${
                    statusStyles[project.status] ||
                    "border-slate-200 bg-white text-slate-700"
                  }`}
                >
                  {project.status}
                </div>
              </div>

              {/* ================= CONTENT ================= */}
              <div className="p-7">
                <h3 className="text-xl font-bold leading-snug tracking-tight text-[#0F172A] transition-colors duration-300 group-hover:text-[#087B5A]">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {project.description}
                </p>

                {/* Project Link */}
                <Link
                  to={`/projects/${project.slug}`}
                  className="group/link mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#087B5A]"
                >
                  <span>View Project</span>

                  <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                    <FaArrowRight size={12} />
                  </span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ================= VIEW ALL ================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="mt-14 text-center"
        >
          <Link
            to="/projects"
            className="group inline-flex items-center gap-3 rounded-xl bg-[#087B5A] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#087B5A]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B3D2E] hover:shadow-xl"
          >
            <span>View All Projects</span>

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <FaArrowRight size={12} />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
