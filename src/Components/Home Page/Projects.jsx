import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";

import projects from "../../Components/Data File/Project Data/ProjectsData";

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();

  // Show only 3 ongoing projects on homepage
  const homeProjects = projects
    .filter((project) => project.status === "Ongoing")
    .slice(0, 3);

  // Different glow color for each card
  const glowColors = ["#087B5A", "#0284C7", "#F97316"];

  return (
    <section
      className="
        relative overflow-hidden
        bg-gradient-to-br
        from-[#E8F5EF]
        via-[#F4FAF7]
        to-[#EAF4F8]
        py-14 sm:py-16 lg:py-20
      "
    >
      {/* =====================================================
          BACKGROUND GLOWS
      ====================================================== */}

      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* Green */}
        <div
          className="
            absolute -left-40 -top-32
            h-[480px] w-[480px]
            rounded-full
            bg-[#087B5A]/[0.10]
            blur-[120px]
          "
        />

        {/* Blue */}
        <div
          className="
            absolute -right-40 top-1/4
            h-[450px] w-[450px]
            rounded-full
            bg-[#0284C7]/[0.07]
            blur-[120px]
          "
        />

        {/* Orange */}
        <div
          className="
            absolute bottom-[-220px] left-1/2
            h-[500px] w-[500px]
            -translate-x-1/2
            rounded-full
            bg-[#F97316]/[0.05]
            blur-[130px]
          "
        />
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
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 rounded-full bg-[#F97316]" />

            <span
              className="
                text-xs font-bold uppercase
                tracking-[0.22em]
                text-[#087B5A]
                sm:text-sm
              "
            >
              Featured Projects
            </span>

            <span className="h-[2px] w-10 rounded-full bg-[#F97316]" />
          </div>

          <h2
            className="
              text-3xl font-extrabold
              leading-[1.1]
              tracking-tight
              text-[#0F172A]
              sm:text-4xl
              lg:text-5xl
            "
          >
            Turning Humanitarian Action
            <span className="block text-[#087B5A]">Into Lasting Impact</span>
          </h2>

          <p
            className="
              mx-auto mt-5 max-w-2xl
              text-base leading-8
              text-slate-600
              sm:text-lg
            "
          >
            Explore DAFA&apos;s ongoing humanitarian projects helping
            communities across Afghanistan reduce explosive hazards and create
            safer environments.
          </p>
        </motion.div>

        {/* =====================================================
            PROJECT CARDS
        ====================================================== */}

        {homeProjects.length > 0 ? (
          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {homeProjects.map((project, index) => {
              const glowColor = glowColors[index % glowColors.length];

              return (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  glowColor={glowColor}
                  index={index}
                  shouldReduceMotion={shouldReduceMotion}
                />
              );
            })}
          </div>
        ) : (
          /* =====================================================
             EMPTY STATE
          ====================================================== */

          <div
            className="
              mt-12
              rounded-[1.8rem]
              border border-white/80
              bg-white/70
              px-6 py-16
              text-center
              shadow-lg
              backdrop-blur-md
            "
          >
            <h3 className="text-xl font-bold text-[#0F172A]">
              No Ongoing Projects
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              There are currently no ongoing projects.
            </p>
          </div>
        )}

        {/* =====================================================
            VIEW ALL PROJECTS
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-12 flex justify-center"
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

            <span
              className="
                flex h-7 w-7
                items-center justify-center
                rounded-full
                bg-white/10
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              <FaArrowRight size={11} />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   PROJECT CARD
============================================================ */

function ProjectCard({ project, glowColor, index, shouldReduceMotion }) {
  const images =
    project.images?.length > 0
      ? project.images
      : project.image
        ? [project.image]
        : [];

  const [currentImage, setCurrentImage] = useState(0);

  /* ==========================================================
     AUTOMATIC IMAGE SLIDER
  ========================================================== */

  useEffect(() => {
    if (images.length <= 1 || shouldReduceMotion) return;

    const interval = setInterval(() => {
      setCurrentImage((previous) => (previous + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length, shouldReduceMotion]);

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : 35,
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
        delay: shouldReduceMotion ? 0 : index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={shouldReduceMotion ? {} : { y: -8 }}
      className="
        group
        relative
        overflow-hidden
        rounded-[1.8rem]
        border border-white/80
        bg-[#F3F9F6]/90
        p-2
        shadow-[8px_8px_22px_rgba(15,23,42,0.10),-8px_-8px_22px_rgba(255,255,255,0.95)]
        backdrop-blur-xl
        transition-all duration-300
        hover:shadow-[12px_16px_32px_rgba(15,23,42,0.13),-10px_-10px_28px_rgba(255,255,255,1)]
      "
    >
      {/* =====================================================
          IMAGE SLIDER
      ====================================================== */}

      <div
        className="
          relative
          overflow-hidden
          rounded-[1.45rem]
          bg-[#0B3D2E]
        "
      >
        {/* Images */}

        {images.length > 0 ? (
          images.map((image, imageIndex) => (
            <motion.img
              key={`${image}-${imageIndex}`}
              src={image}
              alt={project.title}
              loading={imageIndex === 0 ? "eager" : "lazy"}
              decoding="async"
              initial={false}
              animate={{
                opacity: currentImage === imageIndex ? 1 : 0,
                scale: currentImage === imageIndex ? 1 : 1.04,
              }}
              transition={{
                opacity: {
                  duration: 0.8,
                  ease: "easeInOut",
                },
                scale: {
                  duration: 1.2,
                  ease: "easeOut",
                },
              }}
              className="
                block
                h-[320px]
                w-full
                object-cover
                object-center
                sm:h-[350px]
              "
              style={{
                position: imageIndex === 0 ? "relative" : "absolute",
                inset: imageIndex === 0 ? undefined : 0,
              }}
            />
          ))
        ) : (
          <div
            className="
              flex h-[320px]
              items-center
              justify-center
              bg-gradient-to-br
              from-[#052E23]
              via-[#0B3D2E]
              to-[#087B5A]
              sm:h-[350px]
            "
          >
            <div
              className="
                rounded-2xl
                border border-white/20
                bg-white/10
                px-6 py-4
                text-sm font-bold
                text-white
                backdrop-blur-md
              "
            >
              DAFA Project
            </div>
          </div>
        )}

        {/* =================================================
            SOFT COLORED BLUR
        ================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            bottom-[-70px]
            left-1/2
            z-[2]
            h-[230px]
            w-[90%]
            -translate-x-1/2
            rounded-full
            opacity-90
            blur-[65px]
            transition-all
            duration-500
            group-hover:scale-110
          "
          style={{
            backgroundColor: glowColor,
          }}
        />

        {/* =================================================
            SLIDER DOTS
        ================================================== */}

        {images.length > 1 && (
          <div
            className="
              absolute
              right-5
              top-5
              z-20
              flex
              items-center
              gap-1.5
            "
          >
            {images.map((_, imageIndex) => (
              <span
                key={imageIndex}
                className={`
                  h-1.5
                  rounded-full
                  transition-all
                  duration-500
                  ${
                    currentImage === imageIndex
                      ? "w-5 bg-white"
                      : "w-1.5 bg-white/50"
                  }
                `}
              />
            ))}
          </div>
        )}

        {/* =================================================
            BOTTOM CONTENT
        ================================================== */}

        <div
          className="
            absolute
            inset-x-0
            bottom-7
            z-10
            px-5
            sm:px-6
          "
        >
          {/* Project Name */}

          <h3
            className="
              max-w-[90%]
              text-xl
              font-extrabold
              leading-snug
              tracking-tight
              text-white
              drop-shadow-[0_3px_8px_rgba(0,0,0,0.45)]
            "
          >
            {project.title}
          </h3>

          {/* Location + Status */}

          <div
            className="
              mt-3
              flex
              flex-wrap
              items-center
              gap-3
            "
          >
            {/* Location */}

            <div
              className="
                flex
                items-center
                gap-2
                text-sm
                font-medium
                text-white
                drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]
              "
            >
              <FaMapMarkerAlt size={12} className="text-[#FDBA74]" />

              <span>{project.location}</span>
            </div>

            {/* Status */}

            <span
              className="
                rounded-full
                border border-white/25
                bg-white/15
                px-3
                py-1
                text-[11px]
                font-bold
                text-white
                backdrop-blur-md
              "
            >
              {project.status}
            </span>
          </div>

          {/* View Project */}

          <Link
            to={`/projects/${project.slug}`}
            className="
              group/link
              mt-4
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-white/30
              bg-white/15
              px-4
              py-2.5
              text-sm
              font-bold
              text-white
              shadow-[4px_4px_10px_rgba(0,0,0,0.15),-3px_-3px_8px_rgba(255,255,255,0.12)]
              backdrop-blur-md
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-white
              hover:text-[#087B5A]
              hover:shadow-lg
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-white/60
            "
          >
            <span>View Project</span>

            <span
              className="
                flex h-6 w-6
                items-center justify-center
                rounded-full
                bg-white/10
                transition-all
                duration-300
                group-hover/link:translate-x-1
                group-hover/link:bg-white/20
              "
            >
              <FaArrowRight size={9} aria-hidden="true" />
            </span>
          </Link>
        </div>
      </div>

      {/* =====================================================
          BOTTOM ACCENT
      ====================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          h-1
          w-0
          bg-[#F97316]
          transition-all
          duration-500
          group-hover:w-full
        "
      />
    </motion.article>
  );
}
