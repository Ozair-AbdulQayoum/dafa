import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaProjectDiagram,
} from "react-icons/fa";

import projects from "../../Components/Data File/Project Data/ProjectsData";

export default function Projects() {
  // Show only 3 ongoing projects on homepage
  const homeProjects = projects
    .filter((project) => project.status === "Ongoing")
    .slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
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

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Label */}

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 rounded-full bg-[#F97316]" />

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#087B5A] sm:text-sm">
              Featured Projects
            </span>

            <span className="h-[2px] w-10 rounded-full bg-[#F97316]" />
          </div>

          {/* Heading */}

          <h2 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Turning Humanitarian Action
            <span className="block text-[#087B5A]">Into Lasting Impact</span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Explore DAFA&apos;s ongoing humanitarian projects helping
            communities across Afghanistan reduce explosive hazards and create
            safer environments.
          </p>
        </motion.div>

        {/* =====================================================
            PROJECT CARDS
        ====================================================== */}

        {homeProjects.length > 0 ? (
          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {homeProjects.map((project, index) => (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -8 }}
                className="
                  group
                  relative
                  flex
                  flex-col
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  shadow-sm
                  transition-all
                  duration-500
                  hover:border-[#087B5A]/20
                  hover:shadow-2xl
                "
              >
                {/* =================================================
                    IMAGE
                ================================================== */}

                <div className="relative h-[270px] overflow-hidden bg-[#0B3D2E]">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                    />
                  ) : (
                    <>
                      {/* Background */}

                      <div className="absolute inset-0 bg-gradient-to-br from-[#052E23] via-[#0B3D2E] to-[#087B5A]" />

                      {/* Pattern */}

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

                      {/* Icon */}

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-[#A7F3D0] backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
                          <FaProjectDiagram size={30} />
                        </div>
                      </div>
                    </>
                  )}

                  {/* Overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#052E23]/90 via-[#052E23]/10 to-transparent" />

                  {/* Location */}

                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-[#052E23]/75 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
                    <FaMapMarkerAlt size={11} className="text-[#FDBA74]" />

                    {project.location}
                  </div>

                  {/* Status */}

                  <div className="absolute right-5 top-5 rounded-full border border-orange-200 bg-orange-50 px-3.5 py-2 text-[11px] font-bold text-orange-700">
                    {project.status}
                  </div>

                  {/* Project Info */}

                  <div className="absolute bottom-5 left-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A7F3D0]">
                      DAFA Project
                    </p>

                    <div className="mt-2 flex items-center gap-2 text-xs font-medium text-white/80">
                      <FaCalendarAlt size={10} />
                      {project.year}
                    </div>
                  </div>
                </div>

                {/* =================================================
                    CONTENT
                ================================================== */}

                <div className="flex flex-1 flex-col p-7">
                  {/* Title */}

                  <h3 className="text-xl font-extrabold leading-snug tracking-tight text-[#0F172A] transition-colors duration-300 group-hover:text-[#087B5A]">
                    {project.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {project.description}
                  </p>

                  {/* CTA */}

                  <Link
                    to={`/projects/${project.slug}`}
                    className="
                      group/link
                      mt-7
                      inline-flex
                      w-full
                      items-center
                      justify-between
                      rounded-xl
                      border
                      border-[#087B5A]/20
                      bg-[#087B5A]/5
                      px-5
                      py-3.5
                      text-sm
                      font-bold
                      text-[#087B5A]
                      transition-all
                      duration-300
                      hover:bg-[#087B5A]
                      hover:text-white
                      focus:outline-none
                      focus:ring-2
                      focus:ring-[#087B5A]/30
                      focus:ring-offset-2
                    "
                  >
                    <span>View Project</span>

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#087B5A]/10 transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:bg-white/10">
                      <FaArrowRight size={11} />
                    </span>
                  </Link>
                </div>

                {/* Bottom Accent */}

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#F97316] transition-all duration-500 group-hover:w-full" />
              </motion.article>
            ))}
          </div>
        ) : (
          /* Empty State */

          <div className="mt-14 rounded-3xl border border-slate-200 bg-slate-50 px-6 py-16 text-center">
            <h3 className="text-xl font-bold text-[#0F172A]">
              No Ongoing Projects
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              There are currently no ongoing projects.
            </p>
          </div>
        )}

        {/* =====================================================
            VIEW ALL
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-14 flex justify-center"
        >
          <Link
            to="/projects"
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-xl
              bg-[#087B5A]
              px-7
              py-3.5
              text-sm
              font-bold
              text-white
              shadow-lg
              shadow-[#087B5A]/15
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#0B3D2E]
              hover:shadow-xl
              focus:outline-none
              focus:ring-2
              focus:ring-[#087B5A]/40
              focus:ring-offset-2
            "
          >
            <span>View All Projects</span>

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
              <FaArrowRight size={11} />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
