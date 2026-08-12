import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";

const project = {
  slug: "kabul-humanitarian-clearance-project",

  name: "Kabul Humanitarian Clearance Project",

  location: "Kabul Province, Afghanistan",

  status: "Completed",

  duration: "2022 – 2024",

  description:
    "The Kabul Humanitarian Clearance Project focused on reducing the risks posed by landmines and explosive remnants of war in affected communities across Kabul Province.",

  details:
    "Through humanitarian mine-action activities, the project supported the identification of contaminated areas, safe clearance of explosive hazards, and the release of land for community use. The work was carried out with a strong focus on safety, quality, and the protection of civilians.",

  objectives: [
    "Reduce the risks posed by landmines and explosive remnants of war.",
    "Clear contaminated land and make it safe for community use.",
    "Support safer access to homes, agricultural land, roads, and public areas.",
    "Contribute to safer and more resilient communities.",
  ],

  activities: [
    {
      title: "Survey & Assessment",
      description:
        "Survey and assessment of areas suspected of being contaminated by explosive hazards.",
    },
    {
      title: "Manual Mine Clearance",
      description:
        "Controlled clearance operations carried out by trained humanitarian mine-action teams.",
    },
    {
      title: "Hazard Identification & Marking",
      description:
        "Identification and marking of hazardous areas to protect communities and guide clearance operations.",
    },
    {
      title: "Quality & Safety Monitoring",
      description:
        "Continuous safety monitoring and quality assurance throughout field operations.",
    },
    {
      title: "Community Engagement",
      description:
        "Engagement with local communities to improve communication, awareness, and project coordination.",
    },
    {
      title: "Verification & Land Release",
      description:
        "Final verification of cleared areas before land is safely released for community use.",
    },
  ],

  impact:
    "The project contributed to safer communities by reducing exposure to explosive hazards and supporting the safe return of affected land to local communities.",
};

export default function ProjectDetails() {
  const { slug } = useParams();

  return (
    <main className="bg-white">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#0B3D2E]">
        {/* Project Image Placeholder */}

        <div className="h-[480px] w-full bg-gradient-to-br from-[#0B3D2E] via-[#087B5A] to-[#052E23]">
          <div className="flex h-full items-center justify-center">
            <div className="text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-white/20 bg-white/5">
                <span className="text-2xl font-bold tracking-tight text-[#A7F3D0]">
                  DAFA
                </span>
              </div>

              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                Project Image
              </p>
            </div>
          </div>
        </div>

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-r from-[#041F18]/95 via-[#0B3D2E]/80 to-transparent" />

        {/* Hero Content */}

        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-7xl items-end px-5 pb-16 sm:px-8 lg:px-10">
            <div className="max-w-4xl text-white">
              {/* Back */}

              <Link
                to="/projects"
                className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-green-100 transition-colors duration-300 hover:text-white"
              >
                <FaArrowLeft size={11} />
                Back to Projects
              </Link>

              {/* Status */}

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A7F3D0]">
                {project.status}
              </p>

              {/* Project Name */}

              <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {project.name}
              </h1>

              {/* Location & Duration */}

              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-green-50/80">
                <span className="flex items-center gap-2">
                  <FaMapMarkerAlt size={13} />
                  {project.location}
                </span>

                <span className="flex items-center gap-2">
                  <FaCalendarAlt size={13} />
                  {project.duration}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECT CONTENT
      ====================================================== */}

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          {/* =================================================
              PROJECT OVERVIEW
          ================================================== */}

          <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr]">
            {/* Description */}

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
                Project Overview
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-4xl">
                About the Project
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600">
                {project.description}
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600">
                {project.details}
              </p>
            </div>

            {/* Project Information */}

            <div className="h-fit rounded-2xl border border-slate-200 bg-slate-50 p-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
                Project Information
              </p>

              <div className="mt-6 space-y-5">
                {/* Location */}

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                    Location
                  </p>

                  <p className="mt-1.5 text-sm font-semibold leading-6 text-[#0F172A]">
                    {project.location}
                  </p>
                </div>

                {/* Duration */}

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                    Duration
                  </p>

                  <p className="mt-1.5 text-sm font-semibold leading-6 text-[#0F172A]">
                    {project.duration}
                  </p>
                </div>

                {/* Status */}

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                    Status
                  </p>

                  <p className="mt-1.5 flex items-center gap-2 text-sm font-semibold text-[#087B5A]">
                    <FaCheckCircle size={14} />
                    {project.status}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              PROJECT OBJECTIVES
          ================================================== */}

          <div className="mt-20 border-t border-slate-200 pt-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
              Project Objectives
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-4xl">
              What We Aim to Achieve
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {project.objectives.map((objective, index) => (
                <motion.div
                  key={index}
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
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-[#087B5A]/20 hover:shadow-sm"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#087B5A]/10 text-xs font-bold text-[#087B5A]">
                    {index + 1}
                  </span>

                  <p className="text-sm leading-7 text-slate-600">
                    {objective}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* =================================================
              ACTIVITIES + FIELD OPERATIONS
          ================================================== */}

          <div className="mt-20 border-t border-slate-200 pt-16">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
              {/* PROJECT ACTIVITIES */}

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
                  Project Activities
                </p>

                <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-4xl">
                  What the Project Includes
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-600">
                  The project follows a structured humanitarian mine-action
                  process focused on safety, quality, and the protection of
                  affected communities.
                </p>

                {/* Activity List */}

                <div className="mt-8 space-y-4">
                  {project.activities.map((activity, index) => (
                    <motion.div
                      key={index}
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08,
                      }}
                      className="group flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-[#087B5A]/30 hover:bg-slate-50 hover:shadow-sm"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#087B5A]/10 text-xs font-bold text-[#087B5A] transition-colors duration-300 group-hover:bg-[#087B5A] group-hover:text-white">
                        {index + 1}
                      </span>

                      <div>
                        <p className="text-sm font-bold leading-6 text-[#0F172A]">
                          {activity.title}
                        </p>

                        <p className="mt-1 text-sm leading-6 text-slate-500">
                          {activity.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* FIELD OPERATIONS */}

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
                  Field Operations
                </p>

                <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-4xl">
                  Project Activities in the Field
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-600">
                  A visual overview of the project's field activities, from
                  initial assessment and clearance to community engagement and
                  final land release.
                </p>

                {/* Gallery */}

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {project.activities.map((activity, index) => (
                    <motion.div
                      key={activity.title}
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
                      }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08,
                      }}
                      className="group relative h-48 overflow-hidden rounded-2xl bg-gradient-to-br from-[#0B3D2E] via-[#087B5A] to-[#052E23] shadow-sm"
                    >
                      {/* Placeholder */}

                      <div className="flex h-full items-center justify-center">
                        <div className="text-center">
                          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/5">
                            <span className="text-sm font-bold tracking-tight text-[#A7F3D0]">
                              DAFA
                            </span>
                          </div>

                          <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-white/40">
                            Field Image
                          </p>
                        </div>
                      </div>

                      {/* Overlay */}

                      <div className="absolute inset-0 bg-gradient-to-t from-[#041F18]/90 via-transparent to-transparent" />

                      {/* Number */}

                      <div className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg bg-black/20 text-xs font-bold text-white backdrop-blur-md">
                        0{index + 1}
                      </div>

                      {/* Image Title */}

                      <div className="absolute inset-x-0 bottom-0 p-4">
                        <p className="text-sm font-bold leading-5 text-white">
                          {activity.title}
                        </p>
                      </div>

                      {/* Hover */}

                      <div className="absolute inset-0 bg-[#087B5A]/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              PROJECT IMPACT
          ================================================== */}

          <div className="mt-20 rounded-3xl bg-[#0B3D2E] p-8 sm:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A7F3D0]">
              Project Impact
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
              Making Communities Safer
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-green-50/70">
              {project.impact}
            </p>
          </div>

          {/* =================================================
              BACK TO PROJECTS
          ================================================== */}

          <div className="mt-12 border-t border-slate-200 pt-8">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-xl bg-[#087B5A] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0B3D2E]"
            >
              View All Projects
              <FaArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
