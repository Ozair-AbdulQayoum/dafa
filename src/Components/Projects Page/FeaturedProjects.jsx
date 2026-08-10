import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

// ============================================================
// PROJECT DATA
// ============================================================

const projects = [
  {
    slug: "kabul-community-clearance",
    title: "Kabul Community Clearance Project",
    location: "Kabul, Afghanistan",
    year: "2025",
    status: "Completed",
    image: "/images/projects/kabul-clearance.jpg",
    description:
      "Humanitarian mine action activities supporting safer communities through the clearance of contaminated land.",
  },
  {
    slug: "nangarhar-mine-clearance",
    title: "Nangarhar Mine Clearance Project",
    location: "Nangarhar, Afghanistan",
    year: "2025",
    status: "Completed",
    image: "/images/projects/nangarhar.jpg",
    description:
      "Mine clearance operations focused on reducing explosive hazards and improving safe access to land.",
  },
  {
    slug: "kandahar-land-clearance",
    title: "Kandahar Land Clearance Project",
    location: "Kandahar, Afghanistan",
    year: "2024",
    status: "Completed",
    image: "/images/projects/kandahar.jpg",
    description:
      "Humanitarian clearance activities helping communities safely access agricultural and residential areas.",
  },
  {
    slug: "herat-community-safety",
    title: "Herat Community Safety Project",
    location: "Herat, Afghanistan",
    year: "2024",
    status: "Ongoing",
    image: "/images/projects/herat.jpg",
    description:
      "Explosive hazard reduction activities supporting communities affected by land contamination.",
  },
  {
    slug: "helmand-clearance-operation",
    title: "Helmand Clearance Operation",
    location: "Helmand, Afghanistan",
    year: "2023",
    status: "Completed",
    image: "/images/projects/helmand.jpg",
    description:
      "Field-based humanitarian mine action operations designed to reduce risks to local communities.",
  },
  {
    slug: "balkh-safe-land-project",
    title: "Balkh Safe Land Project",
    location: "Balkh, Afghanistan",
    year: "2023",
    status: "Completed",
    image: "/images/projects/balkh.jpg",
    description:
      "Supporting the safe release of contaminated land for communities and local development.",
  },
  {
    slug: "logar-humanitarian-clearance",
    title: "Logar Humanitarian Clearance",
    location: "Logar, Afghanistan",
    year: "2022",
    status: "Completed",
    image: "/images/projects/logar.jpg",
    description:
      "Humanitarian mine clearance activities focused on reducing explosive risks in affected communities.",
  },
  {
    slug: "parwan-mine-action-project",
    title: "Parwan Mine Action Project",
    location: "Parwan, Afghanistan",
    year: "2022",
    status: "Completed",
    image: "/images/projects/parwan.jpg",
    description:
      "Mine action operations supporting safer movement, access, and livelihoods for local communities.",
  },
  {
    slug: "wardak-community-clearance",
    title: "Wardak Community Clearance Project",
    location: "Wardak, Afghanistan",
    year: "2021",
    status: "Completed",
    image: "/images/projects/wardak.jpg",
    description:
      "Clearance operations helping reduce explosive hazards and improve safety for affected communities.",
  },
  {
    slug: "paktiya-explosive-hazard-reduction",
    title: "Paktiya Explosive Hazard Reduction",
    location: "Paktiya, Afghanistan",
    year: "2021",
    status: "Completed",
    image: "/images/projects/paktiya.jpg",
    description:
      "Humanitarian activities addressing explosive hazards and supporting safer access to contaminated areas.",
  },
];

// ============================================================
// PROJECT CARD
// ============================================================

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: index * 0.05,
      }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-[#087B5A]/30 hover:shadow-xl"
    >
      {/* Image */}
      <Link
        to={`/projects/${project.slug}`}
        className="relative block h-60 overflow-hidden bg-[#E8F3EF]"
      >
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Status */}
        <div className="absolute left-4 top-4">
          <span
            className={`rounded-full px-3 py-1.5 text-xs font-semibold text-white shadow-lg ${
              project.status === "Ongoing" ? "bg-[#F97316]" : "bg-[#087B5A]"
            }`}
          >
            {project.status}
          </span>
        </div>

        {/* Year */}
        <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-black/40 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
          <FaCalendarAlt size={11} />
          {project.year}
        </div>
      </Link>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold leading-tight text-[#0F172A] transition-colors duration-300 group-hover:text-[#087B5A]">
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

        {/* Link */}
        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
          <Link
            to={`/projects/${project.slug}`}
            className="text-sm font-semibold text-[#087B5A]"
          >
            View Project
          </Link>

          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#087B5A]/10 text-[#087B5A] transition-all duration-300 group-hover:bg-[#087B5A] group-hover:text-white">
            <FaArrowRight size={12} />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

// ============================================================
// FEATURED PROJECTS
// ============================================================

export default function FeaturedProjects() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
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
            Explore selected humanitarian mine action projects carried out by
            DAFA to support safer communities across Afghanistan.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
