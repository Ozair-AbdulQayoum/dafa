import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion, useInView } from "framer-motion";

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
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

// ============================================================
// DURATION CALCULATOR
// ============================================================

function calculateDuration(startDate, endDate, status) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const today = new Date();

  const totalTime = end - start;

  let elapsedTime = today - start;

  if (elapsedTime < 0) {
    elapsedTime = 0;
  }

  if (elapsedTime > totalTime) {
    elapsedTime = totalTime;
  }

  const percentage =
    totalTime > 0 ? Math.round((elapsedTime / totalTime) * 100) : 0;

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
// PROJECT DETAILS
// ============================================================

export default function ProjectDetails() {
  const { slug } = useParams();

  // ==========================================================
  // FIND PROJECT USING URL SLUG
  // ==========================================================

  const project = useMemo(
    () => projectDetails.find((item) => item.slug === slug),
    [slug],
  );

  // ==========================================================
  // IF PROJECT DOES NOT EXIST
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
        {/* Project Background */}

        <div className="h-[480px] w-full bg-gradient-to-br from-[#0B3D2E] via-[#087B5A] to-[#052E23]" />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-r from-[#041F18]/95 via-[#0B3D2E]/75 to-transparent" />

        {/* Hero Content */}

        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-7xl items-end px-5 pb-16 sm:px-8 lg:px-10">
            <div className="max-w-4xl text-white">
              {/* Back */}

              <Link
                to="/projects"
                className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-green-100 transition hover:text-white"
              >
                <FaArrowLeft size={11} />
                Back to Projects
              </Link>

              {/* Status */}

              <p
                className={`text-xs font-bold uppercase tracking-[0.2em] ${
                  isOngoing ? "text-orange-300" : "text-[#A7F3D0]"
                }`}
              >
                {project.status}
              </p>

              {/* Project Name */}

              <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {project.name}
              </h1>

              {/* Location + Dates */}

              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-green-50/80">
                <span className="flex items-center gap-2">
                  <FaMapMarkerAlt size={13} />
                  {project.location}
                </span>

                <span className="flex items-center gap-2">
                  <FaCalendarAlt size={13} />
                  {formatDate(project.startDate)} –{" "}
                  {formatDate(project.endDate)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ORGANIZATION + DONOR
          Logo + Name ONLY
      ====================================================== */}

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-7 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          {/* =================================================
              DAFA
          ================================================== */}

          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 p-2">
              <img
                src={project.organization.logo}
                alt={project.organization.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <p className="font-bold text-[#0F172A]">
              {project.organization.name}
            </p>
          </div>

          {/* =================================================
              DONOR
          ================================================== */}

          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 p-2">
              <img
                src={project.donor.logo}
                alt={project.donor.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <p className="font-bold text-[#0F172A]">{project.donor.name}</p>
          </div>
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

            {/* PROJECT INFORMATION */}

            <div className="h-fit rounded-3xl border border-slate-200 bg-slate-50 p-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
                Project Information
              </p>

              <div className="mt-6 space-y-5">
                {/* Location */}

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                    Location
                  </p>

                  <p className="mt-1.5 flex items-center gap-2 text-sm font-semibold text-[#0F172A]">
                    <FaMapMarkerAlt className="text-[#087B5A]" />

                    {project.location}
                  </p>
                </div>

                {/* Start Date */}

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                    Start Date
                  </p>

                  <p className="mt-1.5 text-sm font-semibold text-[#0F172A]">
                    {formatDate(project.startDate)}
                  </p>
                </div>

                {/* End Date */}

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                    End Date
                  </p>

                  <p className="mt-1.5 text-sm font-semibold text-[#0F172A]">
                    {formatDate(project.endDate)}
                  </p>
                </div>

                {/* Status */}

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
            </div>
          </div>

          {/* =================================================
              PROJECT DURATION + TEAM
          ================================================== */}

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {/* =================================================
                DURATION
            ================================================== */}

            <ProjectTimeline
              project={project}
              duration={duration}
              isOngoing={isOngoing}
            />

            {/* =================================================
                TEAM
            ================================================== */}

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
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
            </div>
          </div>

          {/* =================================================
              FIELD IMAGE SLIDER
          ================================================== */}

          {project.gallery?.length > 0 && (
            <ProjectGallery gallery={project.gallery} />
          )}

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
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#087B5A]/10 text-sm font-bold text-[#087B5A] group-hover:bg-[#087B5A] group-hover:text-white">
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
              IMPACT
          ================================================== */}

          <div className="mt-20 rounded-3xl bg-[#0B3D2E] p-8 sm:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A7F3D0]">
              Project Impact
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Making Communities Safer
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-green-50/70">
              {project.impact}
            </p>
          </div>

          {/* =================================================
              BACK
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

// ============================================================
// PROJECT TIMELINE
// Animation starts ONLY when timeline enters viewport.
// ============================================================

function ProjectTimeline({ project, duration, isOngoing }) {
  const timelineRef = useRef(null);

  const isInView = useInView(timelineRef, {
    once: true,
    amount: 0.35,
  });

  return (
    <motion.div
      ref={timelineRef}
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
            }
          : {}
      }
      transition={{
        duration: 0.6,
      }}
      className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
    >
      {/* Header */}

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

      {/* Timeline */}

      <div className="mt-8 flex items-center gap-8">
        {/* =================================================
            ANIMATED PIE CHART
        ================================================== */}

        <motion.div
          className="relative h-36 w-36 shrink-0 rounded-full"
          initial={{
            background: "conic-gradient(#087B5A 0%, #E2E8F0 0)",
          }}
          animate={
            isInView
              ? {
                  background: `conic-gradient(#087B5A ${duration.percentage}%, #E2E8F0 0)`,
                }
              : {
                  background: "conic-gradient(#087B5A 0%, #E2E8F0 0)",
                }
          }
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
        >
          <div className="absolute inset-3 flex items-center justify-center rounded-full bg-white">
            <div className="text-center">
              <AnimatedNumber
                value={duration.percentage}
                startAnimation={isInView}
                suffix="%"
                className="text-3xl font-extrabold text-[#0F172A]"
              />

              <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                Complete
              </p>
            </div>
          </div>
        </motion.div>

        {/* =================================================
            TIMELINE INFORMATION
        ================================================== */}

        <div className="space-y-3">
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

          <p className="text-sm text-slate-500">
            {isOngoing ? (
              <>
                <AnimatedNumber
                  value={duration.remainingDays}
                  startAnimation={isInView}
                />{" "}
                days remaining
              </>
            ) : (
              "Project completed"
            )}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// ============================================================
// ANIMATED NUMBER
// ============================================================

function AnimatedNumber({
  value,
  startAnimation,
  suffix = "",
  className = "",
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!startAnimation) {
      setDisplayValue(0);
      return;
    }

    const target = Number(value) || 0;

    if (target === 0) {
      setDisplayValue(0);
      return;
    }

    const duration = 1400;

    const startTime = performance.now();

    let animationFrame;

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;

      const progress = Math.min(elapsed / duration, 1);

      // Ease-out

      const easedProgress = 1 - Math.pow(1 - progress, 3);

      const currentValue = Math.round(easedProgress * target);

      setDisplayValue(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setDisplayValue(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [startAnimation, value]);

  return (
    <span className={className}>
      {displayValue}
      {suffix}
    </span>
  );
}

// ============================================================
// PROJECT GALLERY
// ============================================================

function ProjectGallery({ gallery }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isVisible, setIsVisible] = useState(false);

  // ==========================================================
  // DETECT WHEN GALLERY ENTERS VIEWPORT
  // ==========================================================

  useEffect(() => {
    const element = document.getElementById("project-field-gallery");

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // ==========================================================
  // AUTOMATIC SLIDER
  // ==========================================================

  useEffect(() => {
    if (!isVisible) return;

    if (gallery.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((previous) =>
        previous === gallery.length - 1 ? 0 : previous + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isVisible, gallery.length]);

  // ==========================================================
  // MANUAL CONTROLS
  // ==========================================================

  const previousImage = () => {
    setCurrentIndex((previous) =>
      previous === 0 ? gallery.length - 1 : previous - 1,
    );
  };

  const nextImage = () => {
    setCurrentIndex((previous) =>
      previous === gallery.length - 1 ? 0 : previous + 1,
    );
  };

  const currentImage = gallery[currentIndex];

  return (
    <motion.div
      id="project-field-gallery"
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
        margin: "-100px",
      }}
      transition={{
        duration: 0.7,
      }}
      className="mt-16"
    >
      {/* SECTION LABEL */}

      <div className="mb-6 flex items-end justify-between gap-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#087B5A]">
            Field Documentation
          </p>

          <h3 className="mt-2 text-2xl font-bold text-[#0F172A] sm:text-3xl">
            Project in the Field
          </h3>
        </div>

        {gallery.length > 1 && (
          <div className="hidden text-sm font-semibold text-slate-400 sm:block">
            {currentIndex + 1} / {gallery.length}
          </div>
        )}
      </div>

      {/* IMAGE CARD */}

      <div className="group relative h-[300px] overflow-hidden rounded-3xl bg-[#0B3D2E] shadow-lg sm:h-[420px] lg:h-[520px]">
        {/* IMAGE */}

        <motion.img
          key={currentImage.image}
          src={currentImage.image}
          alt={currentImage.title}
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
            ease: [0.22, 1, 0.36, 1],
          }}
          className="h-full w-full object-cover"
        />

        {/* OVERLAY */}

        <div className="absolute inset-0 bg-gradient-to-t from-[#041F18]/90 via-[#041F18]/10 to-transparent" />

        {/* IMAGE TITLE */}

        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#A7F3D0]">
            Field Image
          </p>

          <h4 className="mt-2 text-xl font-bold text-white sm:text-2xl">
            {currentImage.title}
          </h4>
        </div>

        {/* =================================================
            ARROWS
        ================================================== */}

        {gallery.length > 1 && (
          <>
            <button
              type="button"
              onClick={previousImage}
              aria-label="Previous field image"
              className="
                absolute
                left-4
                top-1/2
                flex
                h-11
                w-11
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-black/30
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:bg-[#087B5A]
                sm:left-6
              "
            >
              <FaChevronLeft size={13} />
            </button>

            <button
              type="button"
              onClick={nextImage}
              aria-label="Next field image"
              className="
                absolute
                right-4
                top-1/2
                flex
                h-11
                w-11
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-black/30
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:bg-[#087B5A]
                sm:right-6
              "
            >
              <FaChevronRight size={13} />
            </button>
          </>
        )}

        {/* =================================================
            DOTS
        ================================================== */}

        {gallery.length > 1 && (
          <div className="absolute bottom-6 right-6 flex items-center gap-2">
            {gallery.map((image, index) => (
              <button
                key={image.image}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Show field image ${index + 1}`}
                className={`
                    h-2
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      index === currentIndex
                        ? "w-7 bg-white"
                        : "w-2 bg-white/40 hover:bg-white/70"
                    }
                  `}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

// ============================================================
// TEAM STAT
// ============================================================

function TeamStat({ icon, number, label }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
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

        <span className="text-2xl font-extrabold text-[#0F172A]">{number}</span>
      </div>

      <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
        {label}
      </p>
    </motion.div>
  );
}
