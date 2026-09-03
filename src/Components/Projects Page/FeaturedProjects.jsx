import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";

import projects from "../../Components/Data File/Project Data/ProjectsData";

// ============================================================
// PROJECT CARD
// ============================================================

function ProjectCard({ project, index }) {
  const [currentImage, setCurrentImage] = useState(0);

  // ----------------------------------------------------------
  // PROJECT IMAGES
  // ----------------------------------------------------------

  const images =
    project.images?.length > 0
      ? project.images
      : project.image
        ? [project.image]
        : [];

  // ----------------------------------------------------------
  // AUTO IMAGE SLIDER
  // ----------------------------------------------------------

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

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
        delay: index * 0.08,
      }}
      className="group"
    >
      <Link
        to={`/projects/${project.slug}`}
        className="
          relative block
          h-[430px]
          overflow-hidden
          rounded-3xl
          bg-[#06281E]
          shadow-lg shadow-slate-300/40
          transition-all duration-500
          hover:-translate-y-2
          hover:shadow-2xl
          hover:shadow-[#087B5A]/20
        "
      >
        {/* ==================================================
            IMAGE SLIDER
        ================================================== */}

        {images.length > 0 ? (
          images.map((image, imageIndex) => (
            <img
              key={image}
              src={image}
              alt={`${project.title} ${imageIndex + 1}`}
              className={`
                absolute inset-0
                h-full w-full
                object-cover
                transition-all duration-1000 ease-in-out
                ${
                  imageIndex === currentImage
                    ? "scale-100 opacity-100 group-hover:scale-110"
                    : "scale-105 opacity-0"
                }
              `}
            />
          ))
        ) : (
          <div
            className="
              absolute inset-0
              bg-gradient-to-br
              from-[#052E23]
              via-[#0B3D2E]
              to-[#087B5A]
            "
          />
        )}

        {/* ==================================================
            DARK GRADIENT
        ================================================== */}

        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-[#031C14]/90
            via-[#06281E]/25
            to-transparent
          "
        />

        {/* ==================================================
            GREEN HOVER GLOW
        ================================================== */}

        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-[#087B5A]/35
            via-transparent
            to-transparent
            opacity-0
            transition-opacity duration-500
            group-hover:opacity-100
          "
        />

        {/* ==================================================
            IMAGE SLIDER INDICATORS
        ================================================== */}

        {images.length > 1 && (
          <div
            className="
              absolute
              right-5
              top-5
              z-10
              flex
              items-center
              gap-1.5
              rounded-full
              border border-white/20
              bg-black/25
              px-2.5
              py-2
              backdrop-blur-md
            "
          >
            {images.map((_, imageIndex) => (
              <span
                key={imageIndex}
                className={`
                  h-1.5
                  rounded-full
                  transition-all duration-500
                  ${
                    imageIndex === currentImage
                      ? "w-5 bg-white"
                      : "w-1.5 bg-white/50"
                  }
                `}
              />
            ))}
          </div>
        )}

        {/* ==================================================
            BOTTOM GLASS PANEL
        ================================================== */}

        <div
          className="
            absolute
            inset-x-5
            bottom-5
            rounded-2xl
            border border-white/30
            bg-white/20
            p-5
            backdrop-blur-xl
            shadow-2xl
            transition-all duration-500
            group-hover:bg-white/30
            group-hover:border-white/50
          "
        >
          {/* Project Name */}

          <h3
            className="
              text-xl
              font-bold
              leading-tight
              text-white
              sm:text-2xl
            "
          >
            {project.title}
          </h3>

          {/* Location */}

          <div
            className="
              mt-3
              flex
              items-center
              gap-2
              text-sm
              font-medium
              text-white/90
            "
          >
            <FaMapMarkerAlt size={13} className="shrink-0" />

            <span>{project.location}</span>
          </div>

          {/* Status + Arrow */}

          <div className="mt-4 flex items-center justify-between">
            <span
              className="
                rounded-full
                border border-white/30
                bg-white/20
                px-3
                py-1.5
                text-xs
                font-bold
                uppercase
                tracking-wide
                text-white
                backdrop-blur-md
              "
            >
              {project.status}
            </span>

            <span
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-white/20
                text-white
                backdrop-blur-md
                transition-all duration-300
                group-hover:bg-white
                group-hover:text-[#06281E]
              "
            >
              <FaArrowRight
                size={12}
                className="
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              />
            </span>
          </div>
        </div>

        {/* ==================================================
            BOTTOM ACCENT
        ================================================== */}

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-1
            bg-gradient-to-r
            from-[#087B5A]
            via-[#A7F3D0]
            to-[#0284C7]
            opacity-0
            transition-opacity duration-500
            group-hover:opacity-100
          "
        />
      </Link>
    </motion.article>
  );
}

// ============================================================
// PROJECT PAGE
// ============================================================

export default function FeaturedProjects() {
  return (
    <section id="projects" className="bg-[#F4FAF7] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ==================================================
            HEADER
        ================================================== */}

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
          <span
            className="
              inline-flex
              rounded-full
              border border-[#087B5A]/20
              bg-[#087B5A]/5
              px-4
              py-2
              text-xs
              font-bold
              uppercase
              tracking-[0.2em]
              text-[#087B5A]
            "
          >
            Our Projects
          </span>

          <h2
            className="
              mt-5
              text-3xl
              font-bold
              tracking-tight
              text-[#0F172A]
              sm:text-4xl
              lg:text-5xl
            "
          >
            Projects Making a <span className="text-[#087B5A]">Difference</span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-8
              text-slate-500
              sm:text-lg
            "
          >
            Explore humanitarian mine action projects carried out by DAFA to
            support safer communities across Afghanistan.
          </p>
        </motion.div>

        {/* ==================================================
            PROJECT GRID
        ================================================== */}

        <div
          className="
            mt-14
            grid
            gap-7
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
