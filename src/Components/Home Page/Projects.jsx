import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

import projects from "../../Components/Data File/Project Data/ProjectsData";

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();

  // Show only 3 ongoing projects on homepage
  const homeProjects = projects
    .filter((project) => project.status === "Ongoing")
    .slice(0, 3);

  return (
    <section
      aria-labelledby="featured-projects-heading"
      className="
        relative
        overflow-hidden
        bg-[#F6FAF8]
        py-16
        sm:py-20
        lg:py-24
      "
    >
      {/* =====================================================
          SUBTLE BACKGROUND DETAIL
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          h-72
          w-72
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#0B3D2E]/[0.035]
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-0
          right-0
          h-80
          w-80
          translate-x-1/3
          translate-y-1/3
          rounded-full
          bg-[#F97316]/[0.025]
          blur-3xl
        "
      />

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-5
          sm:px-8
          lg:px-10
        "
      >
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.header
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            max-w-3xl
          "
        >
          {/* EYEBROW */}

          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="
                h-px
                w-9
                bg-[#F97316]
              "
            />

            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#0A5A42]
                sm:text-sm
              "
            >
              Featured Projects
            </span>
          </div>

          {/* HEADING */}

          <h2
            id="featured-projects-heading"
            className="
              mt-5
              max-w-2xl
              text-3xl
              font-extrabold
              leading-[1.08]
              tracking-[-0.035em]
              text-[#0F172A]
              sm:text-4xl
              lg:text-5xl
            "
          >
            Turning Humanitarian Action Into{" "}
            <span className="text-[#0B3D2E]">Real Impact</span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-slate-600
              sm:text-lg
              sm:leading-8
            "
          >
            DAFA projects help reduce explosive hazards and support safer
            communities across Afghanistan.
          </p>
        </motion.header>

        {/* =====================================================
            PROJECT AREA
        ====================================================== */}

        {homeProjects.length > 0 ? (
          <div
            className="
              mt-10
              grid
              gap-6
              lg:mt-12
              lg:grid-cols-[1.35fr_0.85fr]
            "
          >
            {/* =================================================
                FEATURED PROJECT
            ================================================== */}

            {homeProjects[0] && (
              <FeaturedProjectCard
                project={homeProjects[0]}
                shouldReduceMotion={shouldReduceMotion}
              />
            )}

            {/* =================================================
                SECONDARY PROJECTS
            ================================================== */}

            <div className="grid gap-6">
              {homeProjects.slice(1, 3).map((project, index) => (
                <SecondaryProjectCard
                  key={project.slug}
                  project={project}
                  index={index}
                  shouldReduceMotion={shouldReduceMotion}
                />
              ))}
            </div>
          </div>
        ) : (
          /* =====================================================
             EMPTY STATE
          ====================================================== */

          <div
            className="
              mt-10
              rounded-2xl
              border
              border-[#0B3D2E]/10
              bg-white
              px-6
              py-16
              text-center
              shadow-[0_10px_35px_rgba(11,61,46,0.06)]
            "
          >
            <h3
              className="
                text-xl
                font-bold
                text-[#0B3D2E]
              "
            >
              No Ongoing Projects
            </h3>

            <p
              className="
                mt-2
                text-sm
                text-slate-500
              "
            >
              There are currently no ongoing projects.
            </p>
          </div>
        )}

        {/* =====================================================
            VIEW ALL PROJECTS
        ====================================================== */}

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.6,
            delay: shouldReduceMotion ? 0 : 0.15,
          }}
          className="
            mt-10
            flex
            justify-center
            lg:mt-12
          "
        >
          <Link
            to="/projects"
            className="
              group
              inline-flex
              min-h-12
              items-center
              gap-3
              rounded-xl
              bg-[#0B3D2E]
              px-6
              py-3
              text-sm
              font-bold
              text-white
              shadow-[0_10px_25px_rgba(11,61,46,0.16)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#0A5A42]
              hover:shadow-[0_14px_30px_rgba(11,61,46,0.20)]
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#F97316]
              focus-visible:ring-offset-2
            "
          >
            <span>View All Projects</span>

            <FaArrowRight
              size={12}
              aria-hidden="true"
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   FEATURED PROJECT CARD
============================================================ */

function FeaturedProjectCard({ project, shouldReduceMotion }) {
  const images =
    project.images?.length > 0
      ? project.images
      : project.image
        ? [project.image]
        : [];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (images.length <= 1 || shouldReduceMotion) return;

    const interval = setInterval(() => {
      setCurrentImage((previous) => (previous + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length, shouldReduceMotion]);

  return (
    <motion.article
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 28 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        shouldReduceMotion
          ? {}
          : {
              y: -5,
            }
      }
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-slate-200/90
        bg-white
        shadow-[0_12px_35px_rgba(15,23,42,0.07)]
        transition-shadow
        duration-300
        hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]
      "
    >
      {/* IMAGE */}

      <div
        className="
          relative
          h-[300px]
          overflow-hidden
          sm:h-[380px]
          lg:h-[500px]
        "
      >
        {images.length > 0 ? (
          images.map((image, imageIndex) => (
            <motion.img
              key={`${image}-${imageIndex}`}
              src={image}
              alt={`${project.title} project`}
              loading={imageIndex === 0 ? "eager" : "lazy"}
              decoding="async"
              initial={false}
              animate={{
                opacity: currentImage === imageIndex ? 1 : 0,
                scale: currentImage === imageIndex ? 1 : 1.025,
              }}
              transition={{
                opacity: {
                  duration: 0.8,
                },
                scale: {
                  duration: 1,
                },
              }}
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-center
                transition-transform
                duration-700
                group-hover:scale-[1.025]
              "
            />
          ))
        ) : (
          <ProjectImageFallback />
        )}

        {/* SUBTLE IMAGE OVERLAY */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-black/65
            via-black/10
            to-transparent
          "
        />

        {/* FEATURED LABEL */}

        <div
          className="
            absolute
            left-5
            top-5
            rounded-full
            bg-[#0B3D2E]
            px-3.5
            py-1.5
            text-[11px]
            font-bold
            uppercase
            tracking-[0.12em]
            text-white
            shadow-lg
            sm:left-6
            sm:top-6
          "
        >
          Featured Project
        </div>

        {/* IMAGE INDICATORS */}

        {images.length > 1 && (
          <div
            className="
              absolute
              right-5
              top-6
              flex
              items-center
              gap-1.5
            "
            aria-hidden="true"
          >
            {images.map((_, imageIndex) => (
              <span
                key={imageIndex}
                className={`
                  h-1.5
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    currentImage === imageIndex
                      ? "w-5 bg-white"
                      : "w-1.5 bg-white/60"
                  }
                `}
              />
            ))}
          </div>
        )}

        {/* CONTENT */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            p-5
            sm:p-7
            lg:p-8
          "
        >
          <div
            className="
              flex
              flex-wrap
              items-center
              gap-x-4
              gap-y-2
              text-sm
              text-white/90
            "
          >
            <ProjectLocation location={project.location} />

            {project.year && <ProjectYear year={project.year} />}
          </div>

          <h3
            className="
              mt-3
              max-w-2xl
              text-2xl
              font-extrabold
              leading-tight
              tracking-[-0.02em]
              text-white
              sm:text-3xl
            "
          >
            {project.title}
          </h3>

          <p
            className="
              mt-3
              max-w-2xl
              text-sm
              leading-6
              text-white/85
              sm:text-base
              sm:leading-7
            "
          >
            {project.description}
          </p>

          <ProjectLink project={project} light />
        </div>
      </div>
    </motion.article>
  );
}

/* ============================================================
   SECONDARY PROJECT CARD
============================================================ */

function SecondaryProjectCard({ project, index, shouldReduceMotion }) {
  const images =
    project.images?.length > 0
      ? project.images
      : project.image
        ? [project.image]
        : [];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (images.length <= 1 || shouldReduceMotion) return;

    const interval = setInterval(() => {
      setCurrentImage((previous) => (previous + 1) % images.length);
    }, 5500);

    return () => clearInterval(interval);
  }, [images.length, shouldReduceMotion]);

  return (
    <motion.article
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 28 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.6,
        delay: shouldReduceMotion ? 0 : index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        shouldReduceMotion
          ? {}
          : {
              y: -5,
            }
      }
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-slate-200/90
        bg-white
        shadow-[0_10px_30px_rgba(15,23,42,0.055)]
        transition-shadow
        duration-300
        hover:shadow-[0_16px_38px_rgba(15,23,42,0.09)]
      "
    >
      <div
        className="
          grid
          min-h-[250px]
          sm:grid-cols-[0.9fr_1.1fr]
          lg:min-h-[240px]
        "
      >
        {/* IMAGE */}

        <div
          className="
            relative
            h-[220px]
            overflow-hidden
            sm:h-full
            sm:min-h-[250px]
          "
        >
          {images.length > 0 ? (
            images.map((image, imageIndex) => (
              <motion.img
                key={`${image}-${imageIndex}`}
                src={image}
                alt={`${project.title} project`}
                loading="lazy"
                decoding="async"
                initial={false}
                animate={{
                  opacity: currentImage === imageIndex ? 1 : 0,
                  scale: currentImage === imageIndex ? 1 : 1.025,
                }}
                transition={{
                  opacity: {
                    duration: 0.8,
                  },
                  scale: {
                    duration: 1,
                  },
                }}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  object-center
                  transition-transform
                  duration-700
                  group-hover:scale-[1.035]
                "
              />
            ))
          ) : (
            <ProjectImageFallback />
          )}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-black/35
              to-transparent
              sm:bg-gradient-to-r
              sm:from-black/10
              sm:to-transparent
            "
          />

          {images.length > 1 && (
            <div
              className="
                absolute
                bottom-4
                left-4
                flex
                gap-1.5
              "
              aria-hidden="true"
            >
              {images.map((_, imageIndex) => (
                <span
                  key={imageIndex}
                  className={`
                    h-1.5
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      currentImage === imageIndex
                        ? "w-5 bg-white"
                        : "w-1.5 bg-white/60"
                    }
                  `}
                />
              ))}
            </div>
          )}
        </div>

        {/* CONTENT */}

        <div
          className="
            flex
            flex-col
            justify-center
            p-5
            sm:p-6
          "
        >
          <div
            className="
              flex
              flex-wrap
              items-center
              gap-x-4
              gap-y-2
            "
          >
            <ProjectLocation location={project.location} dark />

            {project.year && <ProjectYear year={project.year} dark />}
          </div>

          <h3
            className="
              mt-3
              text-xl
              font-extrabold
              leading-tight
              tracking-[-0.02em]
              text-[#0F172A]
            "
          >
            {project.title}
          </h3>

          <p
            className="
              mt-2.5
              line-clamp-3
              text-sm
              leading-6
              text-slate-600
            "
          >
            {project.description}
          </p>

          <ProjectLink project={project} />
        </div>
      </div>
    </motion.article>
  );
}

/* ============================================================
   LOCATION
============================================================ */

function ProjectLocation({ location, dark = false }) {
  if (!location) return null;

  return (
    <span
      className={`
        inline-flex
        items-center
        gap-2
        text-xs
        font-semibold
        ${dark ? "text-[#0A5A42]" : "text-white/90"}
      `}
    >
      <FaMapMarkerAlt
        size={11}
        className={dark ? "text-[#F97316]" : "text-[#FDBA74]"}
        aria-hidden="true"
      />

      <span>{location}</span>
    </span>
  );
}

/* ============================================================
   YEAR
============================================================ */

function ProjectYear({ year, dark = false }) {
  return (
    <span
      className={`
        inline-flex
        items-center
        gap-2
        text-xs
        font-semibold
        ${dark ? "text-slate-500" : "text-white/80"}
      `}
    >
      <FaCalendarAlt size={10} aria-hidden="true" />

      <span>{year}</span>
    </span>
  );
}

/* ============================================================
   PROJECT LINK
============================================================ */

function ProjectLink({ project, light = false }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      aria-label={`View ${project.title}`}
      className={`
        group/link
        mt-4
        inline-flex
        min-h-10
        w-fit
        items-center
        gap-2
        rounded-lg
        px-3.5
        py-2
        text-sm
        font-bold
        transition-all
        duration-300
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#F97316]
        focus-visible:ring-offset-2
        ${
          light
            ? `
              bg-white/10
              text-white
              hover:bg-white/20
              focus-visible:ring-offset-[#0B3D2E]
            `
            : `
              bg-[#0B3D2E]/[0.06]
              text-[#0B3D2E]
              hover:bg-[#0B3D2E]
              hover:text-white
            `
        }
      `}
    >
      <span>View Project</span>

      <FaArrowRight
        size={10}
        aria-hidden="true"
        className="
          transition-transform
          duration-300
          group-hover/link:translate-x-1
        "
      />
    </Link>
  );
}

/* ============================================================
   IMAGE FALLBACK
============================================================ */

function ProjectImageFallback() {
  return (
    <div
      className="
        flex
        h-full
        w-full
        items-center
        justify-center
        bg-[#0B3D2E]
      "
    >
      <span
        className="
          text-sm
          font-semibold
          text-[#A7F3D0]
        "
      >
        DAFA Project
      </span>
    </div>
  );
}
