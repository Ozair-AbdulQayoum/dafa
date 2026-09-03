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

  // Different ambient glow color for each card
  const glowColors = ["#087B5A", "#0284C7", "#F97316"];

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-[#E8F5EF]
        via-[#F4FAF7]
        to-[#EAF4F8]
        py-14
        sm:py-16
        lg:py-20
      "
    >
      {/* =====================================================
          BACKGROUND GLOWS
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
        "
      >
        {/* Green */}

        <div
          className="
            absolute
            -left-40
            -top-32
            h-[480px]
            w-[480px]
            rounded-full
            bg-[#087B5A]/10
            blur-[120px]
          "
        />

        {/* Blue */}

        <div
          className="
            absolute
            -right-40
            top-1/4
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#0284C7]/10
            blur-[120px]
          "
        />

        {/* Orange */}

        <div
          className="
            absolute
            bottom-[-220px]
            left-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-[#F97316]/10
            blur-[130px]
          "
        />
      </div>

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

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            max-w-3xl
            text-center
          "
        >
          {/* LABEL */}

          <div
            className="
              mb-5
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <span
              className="
                h-[2px]
                w-10
                rounded-full
                bg-[#F97316]
              "
            />

            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#087B5A]
                sm:text-sm
              "
            >
              Featured Projects
            </span>

            <span
              className="
                h-[2px]
                w-10
                rounded-full
                bg-[#F97316]
              "
            />
          </div>

          {/* TITLE */}

          <h2
            className="
              text-3xl
              font-extrabold
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

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-8
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
          <div
            className="
              mx-auto
              mt-12
              grid
              max-w-6xl
              gap-7
              md:grid-cols-2
              lg:grid-cols-3
            "
          >
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
              mx-auto
              mt-12
              max-w-6xl
              rounded-[30px]

              bg-[#0B3D2E]/10

              px-6
              py-16

              text-center

              backdrop-blur-2xl

              shadow-[0_20px_50px_rgba(11,61,46,0.12)]
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
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.7,
            delay: shouldReduceMotion ? 0 : 0.2,
          }}
          className="
            mt-12
            flex
            justify-center
          "
        >
          <Link
            to="/projects"
            className="
              group

              inline-flex
              items-center
              gap-3

              rounded-full

              bg-[#087B5A]

              px-7
              py-3.5

              text-sm
              font-bold
              text-white

              shadow-[0_10px_30px_rgba(8,123,90,0.18)]

              transition-all
              duration-300

              hover:-translate-y-1
              hover:bg-[#0B3D2E]
              hover:shadow-[0_15px_35px_rgba(11,61,46,0.25)]

              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#087B5A]/40
              focus-visible:ring-offset-2
            "
          >
            <span>View All Projects</span>

            <span
              className="
                flex
                h-7
                w-7
                items-center
                justify-center

                rounded-full

                bg-white/10

                transition-transform
                duration-300

                group-hover:translate-x-1
              "
            >
              <FaArrowRight size={11} aria-hidden="true" />
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
      initial={
        shouldReduceMotion
          ? { opacity: 1 }
          : {
              opacity: 0,
              y: 35,
            }
      }
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
        delay: shouldReduceMotion ? 0 : index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        shouldReduceMotion
          ? {}
          : {
              y: -10,
            }
      }
      className="
        group

        relative
        overflow-hidden

        rounded-[30px]

        bg-[#0B3D2E]/10

        backdrop-blur-2xl

        shadow-[0_20px_50px_rgba(11,61,46,0.14)]

        transition-all
        duration-500

        hover:bg-[#0B3D2E]/15
        hover:shadow-[0_30px_70px_rgba(11,61,46,0.20)]
      "
    >
      {/* =====================================================
          SUBTLE GLASS LIGHT
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          -right-20
          -top-20

          z-20

          h-40
          w-40

          rounded-full

          bg-[#A7F3D0]/10

          blur-[60px]
        "
      />

      {/* =====================================================
          IMAGE AREA
      ====================================================== */}

      <div
        className="
          relative
          h-[390px]
          overflow-hidden
        "
      >
        {/* =================================================
            IMAGES
        ================================================== */}

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
                h-full
                w-full

                object-cover
                object-center
              "
              style={{
                position: imageIndex === 0 ? "relative" : "absolute",

                inset: imageIndex === 0 ? undefined : 0,
              }}
            />
          ))
        ) : (
          /* =================================================
             FALLBACK
          ================================================== */

          <div
            className="
              flex
              h-full
              w-full
              items-center
              justify-center

              bg-gradient-to-br
              from-[#052E23]
              via-[#0B3D2E]
              to-[#087B5A]
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
        )}

        {/* =================================================
            CINEMATIC OVERLAY
        ================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none

            absolute
            inset-0

            bg-gradient-to-t
            from-[#03150F]
            via-[#03150F]/45
            to-transparent
          "
        />

        {/* =================================================
            COLORED AMBIENT GLOW
        ================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none

            absolute
            bottom-[-100px]
            left-1/2

            h-[250px]
            w-[90%]

            -translate-x-1/2

            rounded-full

            opacity-40

            blur-[85px]

            transition-all
            duration-700

            group-hover:scale-125
            group-hover:opacity-60
          "
          style={{
            backgroundColor: glowColor,
          }}
        />

        {/* =================================================
            IMAGE SLIDER DOTS
        ================================================== */}

        {images.length > 1 && (
          <div
            className="
              absolute
              right-5
              top-5
              z-30

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
                      : "w-1.5 bg-white/45"
                  }
                `}
              />
            ))}
          </div>
        )}

        {/* =================================================
            CONTENT
        ================================================== */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0

            z-30

            p-6
            sm:p-7
          "
        >
          {/* PROJECT TITLE */}

          <h3
            className="
              max-w-[95%]

              text-2xl
              font-extrabold
              leading-[1.15]
              tracking-[-0.025em]

              text-white

              drop-shadow-[0_4px_18px_rgba(0,0,0,0.55)]
            "
          >
            {project.title}
          </h3>

          {/* LOCATION + STATUS */}

          <div
            className="
              mt-3

              flex
              flex-wrap
              items-center
              gap-3
            "
          >
            {/* LOCATION */}

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

            {/* STATUS */}

            <span
              className="
                rounded-full

                bg-[#0B3D2E]/65

                px-3
                py-1

                text-[11px]
                font-bold

                text-[#D1FAE5]

                backdrop-blur-xl
              "
            >
              {project.status}
            </span>
          </div>

          {/* VIEW PROJECT */}

          <Link
            to={`/projects/${project.slug}`}
            aria-label={`View ${project.title}`}
            className="
              group/link

              mt-5

              inline-flex
              items-center
              gap-3

              rounded-full

              bg-[#0B3D2E]/70

              px-4
              py-2.5

              text-sm
              font-semibold

              text-white

              backdrop-blur-xl

              shadow-[0_8px_25px_rgba(0,0,0,0.20)]

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:bg-[#087B5A]

              hover:shadow-[0_12px_30px_rgba(8,123,90,0.30)]

              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#A7F3D0]/70
              focus-visible:ring-offset-2
            "
          >
            <span>View Project</span>

            <span
              className="
                flex
                h-6
                w-6
                items-center
                justify-center

                rounded-full

                bg-white/10

                transition-transform
                duration-300

                group-hover/link:translate-x-1
              "
            >
              <FaArrowRight size={9} aria-hidden="true" />
            </span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
