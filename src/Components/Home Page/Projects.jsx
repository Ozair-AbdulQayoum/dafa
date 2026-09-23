import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaHandshake,
} from "react-icons/fa";

import projects from "../../Components/Data File/Project Data/ProjectsData";

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();

  const featuredProjects = Array.isArray(projects)
    ? projects.filter((project) => project?.status === "Ongoing").slice(0, 3)
    : [];

  return (
    <section
      aria-labelledby="projects-section-title"
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
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.55,
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
            Turning Humanitarian Action Into
            <span className="block text-[#0B3D2E]">Measurable Impact</span>
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
            Explore DAFA projects helping reduce explosive hazards, protect
            communities, and create safer futures across Afghanistan.
          </p>
        </motion.div>

        {/* Projects */}
        {featuredProjects.length > 0 ? (
          <div
            className="
              grid
              gap-4
              md:grid-cols-2
              lg:grid-cols-3
              lg:gap-5
            "
          >
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project?.slug || `project-${index}`}
                project={project}
                index={index}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </div>
        ) : (
          <EmptyProjects />
        )}

        {/* View All */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.5,
            delay: shouldReduceMotion ? 0 : 0.15,
          }}
          className="
            mt-8
            flex
            justify-center
            sm:mt-10
          "
        >
          <Link
            to="/projects"
            className="
              group
              inline-flex
              min-h-[50px]
              items-center
              justify-center
              gap-3
              rounded-xl
              bg-[#0B3D2E]
              px-6
              text-sm
              font-bold
              text-white
              shadow-[0_8px_22px_rgba(11,61,46,0.13)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#0A5A42]
              hover:shadow-[0_12px_28px_rgba(11,61,46,0.18)]
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#F97316]
              focus-visible:ring-offset-2
            "
          >
            <span>View All Projects</span>

            <FaArrowRight
              aria-hidden="true"
              className="
                text-xs
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

function ProjectCard({ project, index, shouldReduceMotion }) {
  const image = project?.images?.[0] || project?.image || "";

  const title = project?.title || project?.shortTitle || "DAFA Project";

  const slug = project?.slug || "";

  const status = project?.status || "Ongoing";

  const location = project?.location || project?.province || "";

  const year = project?.year || "";

  const donor =
    project?.donor ||
    project?.donorName ||
    project?.partner ||
    project?.partnerName ||
    "";

  const duration = project?.duration || project?.projectDuration || "";

  return (
    <motion.article
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.55,
        delay: shouldReduceMotion ? 0 : index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        relative
        h-[470px]
        overflow-hidden
        rounded-2xl
        border
        border-[#0B3D2E]/10
        bg-[#0B3D2E]
        shadow-[0_14px_35px_rgba(15,23,42,0.09)]
        transition-all
        duration-500
        hover:-translate-y-1
        hover:shadow-[0_22px_50px_rgba(15,23,42,0.15)]
        sm:h-[500px]
        sm:rounded-3xl
      "
    >
      {/* Image */}
      {image ? (
        <img
          src={image}
          alt={title}
          loading={index === 0 ? "eager" : "lazy"}
          decoding="async"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            transition-transform
            duration-[900ms]
            ease-out
            group-hover:scale-[1.055]
          "
        />
      ) : (
        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            bg-[#0B3D2E]
          "
        >
          <span
            className="
              px-6
              text-center
              text-sm
              font-semibold
              text-white/70
            "
          >
            DAFA Humanitarian Mine Action
          </span>
        </div>
      )}

      {/* Image Overlay */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#031F18]
          via-[#0B3D2E]/35
          to-black/5
          opacity-95
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute
          inset-x-0
          bottom-0
          h-[72%]
          bg-gradient-to-t
          from-[#031F18]
          via-[#031F18]/80
          to-transparent
        "
      />

      {/* Top Information */}
      <div
        className="
          absolute
          left-5
          right-5
          top-5
          flex
          items-start
          justify-between
          gap-4
          sm:left-6
          sm:right-6
          sm:top-6
        "
      >
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

        <span
          className={`
            rounded-full
            border
            px-3
            py-1.5
            text-[9px]
            font-extrabold
            uppercase
            tracking-[0.16em]
            backdrop-blur-md
            ${
              status.toLowerCase() === "ongoing"
                ? "border-[#A7F3D0]/30 bg-[#0B3D2E]/70 text-[#D1FAE5]"
                : "border-white/20 bg-[#031F18]/55 text-white"
            }
          `}
        >
          {status}
        </span>
      </div>

      {/* Content */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          p-5
          sm:p-6
          lg:p-7
        "
      >
        {/* Accent */}
        <div
          aria-hidden="true"
          className="
            mb-4
            h-[3px]
            w-8
            rounded-full
            bg-[#F97316]
            transition-all
            duration-500
            group-hover:w-14
          "
        />

        {/* Category */}
        <p
          className="
            mb-2
            text-[9px]
            font-extrabold
            uppercase
            tracking-[0.16em]
            text-[#A7F3D0]
          "
        >
          Humanitarian Mine Action
        </p>

        {/* Title */}
        <h3
          className="
            max-w-[95%]
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

        {/* Metadata */}
        <div
          className="
            mt-4
            grid
            grid-cols-2
            gap-x-4
            gap-y-2
            border-y
            border-white/10
            py-3
          "
        >
          {location && (
            <ProjectMeta
              icon={<FaMapMarkerAlt />}
              label="Location"
              value={location}
            />
          )}

          {year && (
            <ProjectMeta icon={<FaCalendarAlt />} label="Year" value={year} />
          )}

          {donor && (
            <ProjectMeta
              icon={<FaHandshake />}
              label="Partner / Donor"
              value={donor}
            />
          )}

          {duration && (
            <ProjectMeta
              icon={<FaCalendarAlt />}
              label="Duration"
              value={duration}
            />
          )}
        </div>

        {/* Description */}
        {project?.description && (
          <p
            className="
              mt-3
              line-clamp-2
              max-w-[95%]
              text-xs
              leading-5
              text-white/65
              sm:text-sm
              sm:leading-6
            "
          >
            {project.description}
          </p>
        )}

        {/* CTA */}
        <Link
          to={`/projects/${slug}`}
          aria-label={`Explore ${title}`}
          className="
            mt-4
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
            transition-all
            duration-300
            hover:gap-4
            hover:border-[#F97316]
            hover:text-[#F97316]
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-[#F97316]
            focus-visible:ring-offset-2
            focus-visible:ring-offset-[#0B3D2E]
          "
        >
          <span>Explore Project</span>

          <FaArrowRight
            aria-hidden="true"
            className="
              text-[10px]
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </Link>
      </div>

      {/* Hover Border */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-2xl
          border
          border-white/0
          transition-colors
          duration-500
          group-hover:border-white/20
          sm:rounded-3xl
        "
      />
    </motion.article>
  );
}

function ProjectMeta({ icon, label, value }) {
  return (
    <div className="min-w-0">
      <div className="flex items-center gap-1.5">
        <span aria-hidden="true" className="text-[9px] text-[#A7F3D0]">
          {icon}
        </span>

        <span
          className="
            text-[8px]
            font-bold
            uppercase
            tracking-[0.12em]
            text-white/35
          "
        >
          {label}
        </span>
      </div>

      <p
        className="
          mt-1
          truncate
          text-[10px]
          font-semibold
          text-white/75
        "
        title={value}
      >
        {value}
      </p>
    </div>
  );
}

function EmptyProjects() {
  return (
    <div
      className="
        mx-auto
        max-w-xl
        rounded-2xl
        border
        border-slate-200
        bg-white
        px-6
        py-16
        text-center
        shadow-[0_10px_30px_rgba(15,23,42,0.04)]
        sm:rounded-3xl
      "
    >
      <h3
        className="
          text-xl
          font-bold
          tracking-tight
          text-[#0B3D2E]
        "
      >
        No Ongoing Projects
      </h3>

      <p
        className="
          mt-2
          text-sm
          leading-6
          text-slate-500
        "
      >
        There are currently no ongoing projects.
      </p>
    </div>
  );
}
