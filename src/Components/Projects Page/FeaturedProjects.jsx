import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaProjectDiagram,
} from "react-icons/fa";

import projects from "../../Components/Data File/Project Data/ProjectsData";

// ============================================================
// YEAR CATEGORIES
// ============================================================

const categories = ["All", "2026", "2025", "2024", "2023"];

// ============================================================
// PROJECT CARD
// ============================================================

function ProjectCard({ project, index }) {
  const isOngoing = project.status === "Ongoing";

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.05,
      }}
      whileHover={{
        y: -6,
      }}
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:border-[#087B5A]/30
        hover:shadow-xl
      "
    >
      {/* =====================================================
          IMAGE
      ====================================================== */}

      <Link
        to={`/projects/${project.slug}`}
        className="relative block h-60 overflow-hidden bg-[#0B3D2E]"
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="
              h-full
              w-full
              object-cover
              transition
              duration-700
              group-hover:scale-105
            "
          />
        ) : (
          <>
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-[#052E23]
                via-[#0B3D2E]
                to-[#087B5A]
              "
            />

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
              <div
                className="
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/15
                  bg-white/10
                  backdrop-blur-sm
                "
              >
                <FaProjectDiagram size={30} className="text-[#A7F3D0]" />
              </div>
            </div>
          </>
        )}

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Status */}

        <div className="absolute left-4 top-4">
          <span
            className={`
              rounded-full
              px-3
              py-1.5
              text-xs
              font-semibold
              text-white
              shadow-lg
              ${isOngoing ? "bg-[#F97316]" : "bg-[#087B5A]"}
            `}
          >
            {project.status}
          </span>
        </div>

        {/* Year */}

        <div
          className="
            absolute
            bottom-4
            right-4
            flex
            items-center
            gap-2
            rounded-full
            bg-black/40
            px-3
            py-1.5
            text-xs
            font-medium
            text-white
            backdrop-blur-sm
          "
        >
          <FaCalendarAlt size={11} />

          <span>{project.year}</span>
        </div>
      </Link>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="p-5">
        <h3
          className="
            text-xl
            font-bold
            leading-tight
            text-[#0F172A]
            transition-colors
            duration-300
            group-hover:text-[#087B5A]
          "
        >
          {project.title}
        </h3>

        {/* Location */}

        <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
          <FaMapMarkerAlt size={13} className="shrink-0 text-[#087B5A]" />

          <span>{project.location}</span>
        </div>

        {/* Description */}

        <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-500">
          {project.description}
        </p>

        {/* Footer */}

        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
          <Link
            to={`/projects/${project.slug}`}
            className="
              text-sm
              font-semibold
              text-[#087B5A]
              transition-colors
              hover:text-[#0B3D2E]
            "
          >
            View Project
          </Link>

          <Link
            to={`/projects/${project.slug}`}
            aria-label={`View ${project.title}`}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-[#087B5A]/10
              text-[#087B5A]
              transition-all
              duration-300
              group-hover:bg-[#087B5A]
              group-hover:text-white
            "
          >
            <FaArrowRight size={12} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

// ============================================================
// PROJECT PAGE
// ============================================================

export default function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState("All");

  // ============================================================
  // FILTER PROJECTS
  // ============================================================

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter((project) => project.year === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
            Our Projects
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Projects Making a
            <span className="block text-[#087B5A]">Difference</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-500 sm:text-lg">
            Explore humanitarian mine action projects carried out by DAFA to
            support safer communities across Afghanistan.
          </p>
        </motion.div>

        {/* =====================================================
            YEAR CATEGORIES
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`
                  rounded-full
                  px-5
                  py-2.5
                  text-sm
                  font-semibold
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "bg-[#087B5A] text-white shadow-md"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-[#087B5A]/30 hover:text-[#087B5A]"
                  }
                `}
              >
                {category === "All" ? "All Projects" : category}
              </button>
            );
          })}
        </motion.div>

        {/* =====================================================
            PROJECT COUNT
        ====================================================== */}

        <div className="mt-8 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-slate-400">
            Showing {filteredProjects.length}{" "}
            {filteredProjects.length === 1 ? "Project" : "Projects"}
          </p>
        </div>

        {/* =====================================================
            PROJECT GRID
        ====================================================== */}

        {filteredProjects.length > 0 ? (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-2xl border border-slate-200 bg-white px-6 py-16 text-center">
            <h3 className="text-xl font-bold text-[#0F172A]">
              No Projects Found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              There are currently no projects available for this year.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
