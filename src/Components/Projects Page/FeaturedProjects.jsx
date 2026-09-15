import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import projects from "../../Components/Data File/Project Data/ProjectsData";

// ============================================================
// PROJECT CARD
// ============================================================

function ProjectCard({ project, index }) {
  const shouldReduceMotion = useReducedMotion();
  const [currentImage, setCurrentImage] = useState(0);

  // ----------------------------------------------------------
  // PROJECT IMAGES
  // ----------------------------------------------------------

  const images =
    project?.images?.length > 0
      ? project.images
      : project?.image
        ? [project.image]
        : [];

  // ----------------------------------------------------------
  // AUTO IMAGE SLIDER
  // ----------------------------------------------------------

  useEffect(() => {
    if (shouldReduceMotion || images.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [shouldReduceMotion, images.length]);

  const title = project?.title || project?.shortTitle || "DAFA Project";

  return (
    <motion.article
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.55,
        delay: shouldReduceMotion ? 0 : index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group"
    >
      <Link
        to={`/projects/${project?.slug || ""}`}
        aria-label={`Explore ${title}`}
        className="
          group relative block
          h-[450px]
          overflow-hidden
          rounded-2xl
          border border-[#0B3D2E]/10
          bg-[#0B3D2E]
          shadow-[0_14px_35px_rgba(15,23,42,0.09)]
          transition-all duration-500
          hover:-translate-y-1
          hover:shadow-[0_22px_50px_rgba(15,23,42,0.15)]
          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-[#F97316]
          focus-visible:ring-offset-2
          focus-visible:ring-offset-[#F7FBF8]
          sm:h-[480px]
          sm:rounded-3xl
          lg:h-[500px]
        "
      >
        {/* ==================================================
            IMAGE SLIDER
        ================================================== */}

        {images.length > 0 ? (
          images.map((image, imageIndex) => (
            <img
              key={`${image}-${imageIndex}`}
              src={image}
              alt=""
              aria-hidden="true"
              loading={index === 0 && imageIndex === 0 ? "eager" : "lazy"}
              decoding="async"
              className={`
                absolute inset-0
                h-full w-full
                object-cover
                transition-all
                duration-[1000ms]
                ease-out
                ${
                  imageIndex === currentImage
                    ? "scale-100 opacity-100 group-hover:scale-[1.055]"
                    : "scale-[1.03] opacity-0"
                }
              `}
            />
          ))
        ) : (
          <div
            className="
              absolute inset-0
              flex items-center justify-center
              bg-[#0B3D2E]
            "
          >
            <span className="px-6 text-center text-sm font-semibold text-white/80">
              DAFA Humanitarian Mine Action
            </span>
          </div>
        )}

        {/* ==================================================
            DARK GREEN OVERLAY
        ================================================== */}

        <div
          aria-hidden="true"
          className="
            absolute inset-0
            bg-gradient-to-t
            from-[#031F18]
            via-[#0B3D2E]/30
            to-black/5
            opacity-95
          "
        />

        {/* ==================================================
            BOTTOM DEPTH GRADIENT
        ================================================== */}

        <div
          aria-hidden="true"
          className="
            absolute
            inset-x-0
            bottom-0
            h-2/3
            bg-gradient-to-t
            from-[#031F18]
            via-[#031F18]/80
            to-transparent
          "
        />

        {/* ==================================================
            IMAGE SLIDER INDICATORS
        ================================================== */}

        {images.length > 1 && (
          <div
            aria-hidden="true"
            className="
              absolute
              bottom-6
              right-6
              z-10
              flex
              items-center
              gap-1.5
            "
          >
            {images.map((_, imageIndex) => (
              <span
                key={imageIndex}
                className={`
                  h-[2px]
                  rounded-full
                  transition-all duration-500
                  ${
                    imageIndex === currentImage
                      ? "w-7 bg-[#F97316]"
                      : "w-3 bg-white/40"
                  }
                `}
              />
            ))}
          </div>
        )}

        {/* ==================================================
            TOP INFORMATION
        ================================================== */}

        <div
          className="
            absolute
            left-5
            right-5
            top-5
            z-10
            flex
            items-start
            justify-between
            sm:left-6
            sm:right-6
            sm:top-6
          "
        >
          {/* Project Number */}

          <div
            className="
              text-3xl
              font-light
              leading-none
              tracking-[-0.05em]
              text-white/90
              sm:text-4xl
            "
          >
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* Status */}

          <span
            className="
              rounded-full
              border border-white/20
              bg-[#031F18]/45
              px-3
              py-1.5
              text-[9px]
              font-extrabold
              uppercase
              tracking-[0.16em]
              text-white
              backdrop-blur-md
            "
          >
            {project?.status || "Ongoing"}
          </span>
        </div>

        {/* ==================================================
            PROJECT CONTENT
        ================================================== */}

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            z-10
            p-5
            sm:p-6
            lg:p-7
          "
        >
          {/* Orange Accent */}

          <div
            aria-hidden="true"
            className="
              mb-4
              h-[3px]
              w-8
              rounded-full
              bg-[#F97316]
              transition-all duration-500
              group-hover:w-14
            "
          />

          {/* Metadata */}

          <div
            className="
              mb-3
              flex
              flex-wrap
              items-center
              gap-x-4
              gap-y-1
              text-[10px]
              font-bold
              uppercase
              tracking-[0.12em]
              text-white/60
            "
          >
            {project?.location && <span>{project.location}</span>}

            {project?.year && (
              <>
                {project?.location && (
                  <span aria-hidden="true" className="text-white/25">
                    /
                  </span>
                )}

                <span>{project.year}</span>
              </>
            )}
          </div>

          {/* Project Title */}

          <h3
            className="
              max-w-[92%]
              text-xl
              font-extrabold
              leading-[1.15]
              tracking-[-0.025em]
              text-white
              sm:text-2xl
            "
          >
            {title}
          </h3>

          {/* Description */}

          {project?.description && (
            <p
              className="
                mt-3
                line-clamp-3
                max-w-[95%]
                text-xs
                leading-5
                text-white/70
                sm:text-sm
                sm:leading-6
              "
            >
              {project.description}
            </p>
          )}

          {/* Explore Project */}

          <span
            className="
              mt-5
              inline-flex
              min-h-10
              items-center
              gap-3
              border-b
              border-white/30
              pb-1
              text-xs
              font-bold
              text-white
              transition-all duration-300
              group-hover:gap-4
              group-hover:border-[#F97316]
              group-hover:text-[#F97316]
            "
          >
            <span>Explore Project</span>

            <FaArrowRight
              aria-hidden="true"
              className="
                text-[10px]
                transition-transform duration-300
                group-hover:translate-x-1
              "
            />
          </span>
        </div>

        {/* ==================================================
            HOVER BORDER
        ================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-2xl
            border
            border-white/0
            transition-colors duration-500
            group-hover:border-white/20
            sm:rounded-3xl
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
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        bg-[#F7FBF8]
        py-10
        sm:py-12
        lg:py-14
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-5
          sm:px-8
          lg:px-10
          xl:px-12
        "
      >
        {/* ==================================================
            HEADER
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            mb-8
            max-w-3xl
            text-center
            sm:mb-9
            lg:mb-10
          "
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <span
              aria-hidden="true"
              className="
                h-[2px]
                w-8
                rounded-full
                bg-[#F97316]
                sm:w-10
              "
            />

            <span
              className="
                text-[10px]
                font-extrabold
                uppercase
                tracking-[0.2em]
                text-[#0B3D2E]
                sm:text-xs
              "
            >
              Our Projects
            </span>

            <span
              aria-hidden="true"
              className="
                h-[2px]
                w-8
                rounded-full
                bg-[#F97316]
                sm:w-10
              "
            />
          </div>

          <h2
            id="projects-section-title"
            className="
              text-2xl
              font-extrabold
              leading-[1.08]
              tracking-[-0.04em]
              text-[#0F172A]
              sm:text-3xl
              lg:text-[2.7rem]
            "
          >
            Projects Making a
            <span className="block text-[#0B3D2E]">Measurable Difference</span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-6
              text-slate-500
              sm:text-base
              sm:leading-7
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
            grid
            gap-4
            md:grid-cols-2
            lg:grid-cols-3
            lg:gap-5
          "
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project?.slug || `project-${index}`}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
