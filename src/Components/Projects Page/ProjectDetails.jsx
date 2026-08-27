import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FaArrowLeft,
  FaArrowRight,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCheckCircle,
  FaUsers,
  FaUserTie,
  FaClock,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import { projectDetails } from "../../Components/Data File/Project Data/ProjectsDetailsData";

// ============================================================
// DATE FORMATTER
// ============================================================

function formatDate(date) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

// ============================================================
// DURATION CALCULATOR
// ============================================================

function calculateDuration(startDate, endDate, status) {
  const start = new Date(`${startDate}T00:00:00`);
  const end = new Date(`${endDate}T23:59:59`);
  const today = new Date();

  const totalTime = end - start;

  if (totalTime <= 0) {
    return {
      percentage: status === "Completed" ? 100 : 0,
      totalDays: 0,
      completedDays: 0,
      remainingDays: 0,
    };
  }

  let elapsedTime = today - start;

  if (elapsedTime < 0) {
    elapsedTime = 0;
  }

  if (elapsedTime > totalTime) {
    elapsedTime = totalTime;
  }

  const percentage = Math.round((elapsedTime / totalTime) * 100);

  const totalDays = Math.ceil(totalTime / (1000 * 60 * 60 * 24));

  const completedDays = Math.ceil(elapsedTime / (1000 * 60 * 60 * 24));

  const remainingDays = Math.max(totalDays - completedDays, 0);

  return {
    percentage: status === "Completed" ? 100 : percentage,
    totalDays,
    completedDays,
    remainingDays,
  };
}

// ============================================================
// PROJECT NOT FOUND
// ============================================================

function ProjectNotFound() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center bg-slate-50 px-5">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-[#0F172A]">Project Not Found</h1>

        <p className="mt-3 text-slate-500">
          The project you are looking for does not exist.
        </p>

        <Link
          to="/projects"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#087B5A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0B3D2E]"
        >
          <FaArrowLeft size={11} />
          Back to Projects
        </Link>
      </div>
    </main>
  );
}

// ============================================================
// ANIMATED NUMBER
// ============================================================

function AnimatedNumber({ value, duration = 1.2 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) {
        startTime = currentTime;
      }

      const progress = Math.min(
        (currentTime - startTime) / (duration * 1000),
        1,
      );

      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easedProgress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [value, duration]);

  return <>{count}</>;
}

// ============================================================
// TEAM STAT
// ============================================================

function TeamStat({ icon, number, label }) {
  return (
    <motion.div
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
      }}
      className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
    >
      <div className="flex items-center gap-3">
        {icon && <span className="text-[#087B5A]">{icon}</span>}

        <span className="text-2xl font-extrabold text-[#0F172A]">
          <AnimatedNumber value={number} />
        </span>
      </div>

      <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
        {label}
      </p>
    </motion.div>
  );
}

// ============================================================
// PROJECT IMAGE SLIDER
// ============================================================

function ProjectImageSlider({ project }) {
  const images = project.gallery || [];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    setCurrentImage(0);
  }, [project.slug]);

  useEffect(() => {
    if (images.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentImage((previous) => {
        return (previous + 1) % images.length;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  if (!images.length) {
    return null;
  }

  const nextImage = () => {
    setCurrentImage((previous) => (previous + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage(
      (previous) => (previous - 1 + images.length) % images.length,
    );
  };

  const activeImage = images[currentImage];

  return (
    <motion.div
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
      }}
      transition={{
        duration: 0.7,
      }}
      className="mt-14"
    >
      <div className="relative overflow-hidden rounded-3xl bg-[#0B3D2E] shadow-xl">
        {/* IMAGE */}

        <motion.img
          key={activeImage.image}
          src={activeImage.image}
          alt={activeImage.title}
          initial={{
            opacity: 0,
            scale: 1.05,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="h-[300px] w-full object-cover sm:h-[430px] lg:h-[540px]"
        />

        {/* OVERLAY */}

        <div className="absolute inset-0 bg-gradient-to-t from-[#041F18]/90 via-[#041F18]/10 to-transparent" />

        {/* TOP LABEL */}

        <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md sm:left-7 sm:top-7">
          Field Operations
        </div>

        {/* IMAGE INFORMATION */}

        <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#A7F3D0]">
            Project Field Image
          </p>

          <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
            {activeImage.title}
          </h3>
        </div>

        {/* PREVIOUS BUTTON */}

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={previousImage}
              aria-label="Previous project image"
              className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-md transition hover:bg-black/50 sm:left-6"
            >
              <FaChevronLeft size={14} />
            </button>

            {/* NEXT BUTTON */}

            <button
              type="button"
              onClick={nextImage}
              aria-label="Next project image"
              className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-md transition hover:bg-black/50 sm:right-6"
            >
              <FaChevronRight size={14} />
            </button>

            {/* DOTS */}

            <div className="absolute bottom-6 right-6 flex items-center gap-2 sm:bottom-8 sm:right-8">
              {images.map((image, index) => (
                <button
                  key={image.image}
                  type="button"
                  onClick={() => setCurrentImage(index)}
                  aria-label={`Show image ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentImage === index
                      ? "w-8 bg-white"
                      : "w-2 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}

// ============================================================
// PROJECT DETAILS
// ============================================================

export default function ProjectDetails() {
  const { slug } = useParams();

  // ==========================================================
  // FIND PROJECT
  // ==========================================================

  const project = useMemo(
    () => projectDetails.find((item) => item.slug === slug),
    [slug],
  );

  // ==========================================================
  // PROJECT NOT FOUND
  // ==========================================================

  if (!project) {
    return <ProjectNotFound />;
  }

  // ==========================================================
  // DURATION
  // ==========================================================

  const duration = calculateDuration(
    project.startDate,
    project.endDate,
    project.status,
  );

  const isOngoing = project.status === "Ongoing";

  return (
    <main className="bg-white">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#0B3D2E]">
        {/* HERO IMAGE */}

        <div className="relative h-[500px] w-full overflow-hidden">
          {project.heroImage ? (
            <img
              src={project.heroImage}
              alt={project.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-[#0B3D2E] via-[#087B5A] to-[#052E23]" />
          )}
        </div>

        {/* OVERLAY */}

        <div className="absolute inset-0 bg-gradient-to-r from-[#041F18]/95 via-[#0B3D2E]/75 to-transparent" />

        {/* HERO CONTENT */}

        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-7xl items-end px-5 pb-16 sm:px-8 lg:px-10">
            <div className="max-w-4xl text-white">
              {/* BACK */}

              <Link
                to="/projects"
                className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-green-100 transition hover:text-white"
              >
                <FaArrowLeft size={11} />
                Back to Projects
              </Link>

              {/* STATUS */}

              <p
                className={`text-xs font-bold uppercase tracking-[0.2em] ${
                  isOngoing ? "text-orange-300" : "text-[#A7F3D0]"
                }`}
              >
                {project.status}
              </p>

              {/* NAME */}

              <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {project.name}
              </h1>

              {/* LOCATION + DATE */}

              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-green-50/80">
                <span className="flex items-center gap-2">
                  <FaMapMarkerAlt size={13} />

                  {project.location}
                </span>

                <span className="flex items-center gap-2">
                  <FaCalendarAlt size={13} />

                  {formatDate(project.startDate)}

                  {" – "}

                  {formatDate(project.endDate)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ORGANIZATION + DONOR
      ====================================================== */}

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:px-8 lg:grid-cols-2 lg:px-10">
          {/* IMPLEMENTED BY */}

          <motion.div
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
              duration: 0.6,
            }}
            className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5"
          >
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-white p-2 shadow-sm">
              <img
                src={project.organization.logo}
                alt={project.organization.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                Implemented By
              </p>

              <p className="mt-1 font-bold text-[#0F172A]">
                {project.organization.name}
              </p>

              <p className="mt-1 text-xs font-medium text-slate-500">
                {project.organization.shortName}
              </p>
            </div>
          </motion.div>

          {/* DONOR */}

          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5"
          >
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-white p-2 shadow-sm">
              <img
                src={project.donor.logo}
                alt={project.donor.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                Supported By
              </p>

              <p className="mt-1 font-bold text-[#0F172A]">
                {project.donor.name}
              </p>

              <p className="mt-1 text-xs font-medium text-slate-500">
                Project Donor
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* =================================================
              OVERVIEW + INFORMATION
          ================================================== */}

          <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr]">
            {/* OVERVIEW */}

            <motion.div
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
                duration: 0.6,
              }}
            >
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
            </motion.div>

            {/* PROJECT INFORMATION */}

            <motion.div
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
                duration: 0.6,
                delay: 0.1,
              }}
              className="h-fit rounded-3xl border border-slate-200 bg-slate-50 p-7"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
                Project Information
              </p>

              <div className="mt-6 space-y-5">
                {/* LOCATION */}

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                    Location
                  </p>

                  <p className="mt-1.5 flex items-center gap-2 text-sm font-semibold text-[#0F172A]">
                    <FaMapMarkerAlt className="text-[#087B5A]" />

                    {project.location}
                  </p>
                </div>

                {/* START */}

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                    Start Date
                  </p>

                  <p className="mt-1.5 text-sm font-semibold text-[#0F172A]">
                    {formatDate(project.startDate)}
                  </p>
                </div>

                {/* END */}

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                    End Date
                  </p>

                  <p className="mt-1.5 text-sm font-semibold text-[#0F172A]">
                    {formatDate(project.endDate)}
                  </p>
                </div>

                {/* STATUS */}

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                    Status
                  </p>

                  <p
                    className={`mt-1.5 flex items-center gap-2 text-sm font-semibold ${
                      isOngoing ? "text-[#F97316]" : "text-[#087B5A]"
                    }`}
                  >
                    <FaCheckCircle size={14} />

                    {project.status}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* =================================================
              PROJECT TIMELINE + TEAM
          ================================================== */}

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {/* TIMELINE */}

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
                duration: 0.6,
              }}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#087B5A]">
                    Project Timeline
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-[#0F172A]">
                    Project Duration
                  </h3>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A]">
                  <FaClock />
                </div>
              </div>

              <div className="mt-8 flex flex-col items-center gap-8 sm:flex-row">
                {/* PIE */}

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                  className="relative h-36 w-36 shrink-0 rounded-full"
                  style={{
                    background: `conic-gradient(
                      #087B5A ${duration.percentage}%,
                      #E2E8F0 0
                    )`,
                  }}
                >
                  <div className="absolute inset-3 flex items-center justify-center rounded-full bg-white">
                    <div className="text-center">
                      <motion.p
                        initial={{
                          opacity: 0,
                          scale: 0.7,
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.8,
                        }}
                        className="text-3xl font-extrabold text-[#0F172A]"
                      >
                        {duration.percentage}%
                      </motion.p>

                      <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                        Complete
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* TIMELINE INFO */}

                <div className="space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-400">
                      Timeline
                    </p>

                    <p className="mt-1 text-sm font-bold text-[#0F172A]">
                      {formatDate(project.startDate)}
                    </p>

                    <p className="text-sm font-bold text-[#0F172A]">
                      {formatDate(project.endDate)}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-400">
                      Total Duration
                    </p>

                    <p className="mt-1 text-sm font-bold text-[#0F172A]">
                      {duration.totalDays} days
                    </p>
                  </div>

                  <p className="text-sm text-slate-500">
                    {isOngoing
                      ? `${duration.remainingDays} days remaining`
                      : "Project completed"}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* TEAM */}

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
                duration: 0.6,
                delay: 0.1,
              }}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#087B5A]">
                Project Team
              </p>

              <h3 className="mt-2 text-2xl font-bold text-[#0F172A]">
                People Behind the Project
              </h3>

              <div className="mt-7 grid grid-cols-2 gap-4">
                <TeamStat
                  icon={<FaUsers />}
                  number={project.team.total}
                  label="Total Team"
                />

                <TeamStat
                  icon={<FaUserTie />}
                  number={project.team.staff}
                  label="Field Staff"
                />

                <TeamStat
                  number={project.team.supervisors}
                  label="Supervisors"
                />

                <TeamStat
                  number={project.team.technicalStaff}
                  label="Technical Staff"
                />
              </div>
            </motion.div>
          </div>

          {/* =================================================
              FULL WIDTH PROJECT IMAGE SLIDER
              AFTER TIMELINE + TEAM
          ================================================== */}

          <ProjectImageSlider project={project} />

          {/* =================================================
              OBJECTIVES
          ================================================== */}

          <div className="mt-20 border-t border-slate-200 pt-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
              Project Objectives
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0F172A] sm:text-4xl">
              What We Aim to Achieve
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {project.objectives.map((objective, index) => (
                <motion.div
                  key={objective}
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
                  className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 transition hover:border-[#087B5A]/20 hover:shadow-sm"
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
              ACTIVITIES
          ================================================== */}

          <div className="mt-20 border-t border-slate-200 pt-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
              Project Activities
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0F172A] sm:text-4xl">
              What the Project Includes
            </h2>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600">
              The project follows a structured humanitarian mine-action process
              focused on safety, quality, and protection of affected
              communities.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
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
                    delay: index * 0.06,
                  }}
                  className="group flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-[#087B5A]/30 hover:shadow-sm"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#087B5A]/10 text-sm font-bold text-[#087B5A] transition group-hover:bg-[#087B5A] group-hover:text-white">
                    {index + 1}
                  </span>

                  <div>
                    <h3 className="font-bold text-[#0F172A]">
                      {activity.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-500">
                      {activity.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* =================================================
              FIELD GALLERY
          ================================================== */}

          {project.gallery?.length > 0 && (
            <div className="mt-20 border-t border-slate-200 pt-16">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
                Field Operations
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0F172A] sm:text-4xl">
                Project Activities in the Field
              </h2>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600">
                A visual overview of the project's field activities and
                humanitarian operations.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {project.gallery.map((item, index) => (
                  <motion.div
                    key={item.image}
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
                    className="group relative h-64 overflow-hidden rounded-2xl bg-[#0B3D2E]"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#041F18]/90 via-transparent to-transparent" />

                    <div className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg bg-black/30 text-xs font-bold text-white backdrop-blur-md">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="text-sm font-bold text-white">
                        {item.title}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* =================================================
              IMPACT
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
            className="mt-20 rounded-3xl bg-[#0B3D2E] p-8 sm:p-12"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A7F3D0]">
              Project Impact
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Making Communities Safer
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-green-50/70">
              {project.impact}
            </p>
          </motion.div>

          {/* =================================================
              BACK TO PROJECTS
          ================================================== */}

          <div className="mt-12 border-t border-slate-200 pt-8">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-xl bg-[#087B5A] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0B3D2E]"
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
