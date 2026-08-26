import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaBriefcase,
  FaArrowRight,
  FaTruck,
  FaUserCog,
  FaCalculator,
  FaTools,
  FaUserTie,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

import { departments } from "../../Components/Data File/Members Page Data/DepartmentsData";

// ============================================================
// ICON MAP
// ============================================================

const iconMap = {
  FaUserCog,
  FaCalculator,
  FaTruck,
  FaTools,
};

// ============================================================
// PERSONNEL CARD
// ============================================================

function MemberCard({ member }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
    >
      <Link
        to={`/members/${member.slug}`}
        className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-[#087B5A]/30 hover:shadow-xl"
      >
        {/* ==================================================
            IMAGE
        ================================================== */}

        <div className="relative h-64 overflow-hidden bg-[#E8F3EF]">
          <img
            src={member.image}
            alt={`${member.name} - ${member.position}`}
            loading="lazy"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        {/* ==================================================
            DETAILS
        ================================================== */}

        <div className="p-5">
          {/* Position */}

          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#087B5A]">
            {member.position}
          </p>

          {/* Name */}

          <h3 className="mt-2 text-lg font-bold text-[#0F172A]">
            {member.name}
          </h3>

          {/* Experience */}

          <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
            <FaBriefcase size={13} className="shrink-0 text-[#087B5A]" />

            <span>{member.experience}</span>
          </div>

          {/* Profile Link */}

          <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
            <span className="text-sm font-semibold text-[#087B5A]">
              View Profile
            </span>

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#087B5A]/10 text-[#087B5A] transition-all duration-300 group-hover:bg-[#087B5A] group-hover:text-white">
              <FaArrowRight size={12} />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

// ============================================================
// DEPARTMENT SECTION
// ============================================================

function DepartmentSection({ department, index }) {
  const [expanded, setExpanded] = useState(false);

  const visibleMembers = expanded
    ? department.members
    : department.members.slice(0, 4);

  const hasMore = department.members.length > 4;

  const Icon = iconMap[department.icon];

  return (
    <section className={index > 0 ? "mt-24" : ""}>
      {/* ==================================================
          DEPARTMENT HEADER
      ================================================== */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
      >
        <div className="max-w-3xl">
          {/* Department Title */}

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#087B5B]/10 text-[#087B5B]">
              <Icon size={19} />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#087B5A]">
                Department
              </p>

              <h2 className="mt-1 text-2xl font-bold text-[#0F172A] sm:text-3xl">
                {department.name}
              </h2>
            </div>
          </div>

          {/* Description */}

          <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
            {department.description}
          </p>
        </div>

        {/* Personnel Count */}

        <span className="inline-flex w-fit rounded-full bg-[#087B5A]/10 px-4 py-2 text-sm font-semibold text-[#087B5A]">
          {department.members.length} Personnel
        </span>
      </motion.div>

      {/* ==================================================
          PERSONNEL CARDS
      ================================================== */}

      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <AnimatePresence initial={false}>
          {visibleMembers.map((member) => (
            <MemberCard key={member.slug} member={member} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* ==================================================
          SHOW MORE
      ================================================== */}

      {hasMore && (
        <div className="mt-9 flex justify-center">
          <button
            type="button"
            aria-expanded={expanded}
            onClick={() => setExpanded((value) => !value)}
            className="inline-flex items-center gap-3 rounded-xl border border-[#087B5A]/20 bg-white px-6 py-3.5 text-sm font-semibold text-[#087B5A] shadow-sm transition-all duration-300 hover:border-[#087B5A] hover:bg-[#087B5A] hover:text-white hover:shadow-md"
          >
            {expanded ? "Show Less" : `See All ${department.name} Personnel`}

            {expanded ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
          </button>
        </div>
      )}
    </section>
  );
}

// ============================================================
// MAIN PAGE
// ============================================================

export default function DepartmentPersonnel() {
  return (
    <main className="bg-white">
      {/* ======================================================
          DIRECTOR
      ====================================================== */}

      <section className="border-b border-slate-200 bg-[#F8FAFC] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* Section Heading */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
              Organizational Leadership
            </p>

            <h1 className="mt-3 text-3xl font-bold text-[#0F172A] sm:text-4xl">
              Director
            </h1>

            <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
              Providing overall leadership, strategic direction, and
              coordination across DAFA's departments and humanitarian
              operations.
            </p>
          </motion.div>

          {/* ==================================================
              DIRECTOR CARD
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto mt-10 max-w-sm"
          >
            <Link
              to="/members/director"
              className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#087B5A]/30 hover:shadow-xl"
            >
              {/* Director Image */}

              <div className="relative h-80 overflow-hidden bg-[#E8F3EF]">
                <img
                  src="/images/team/director.jpg"
                  alt="DAFA Director"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Director Details */}

              <div className="p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A]">
                  <FaUserTie size={19} />
                </div>

                <h2 className="mt-4 text-xl font-bold text-[#0F172A]">
                  Director
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Demining Agency for Afghanistan
                </p>

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#087B5A]">
                  View Profile
                  <FaArrowRight
                    size={11}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ======================================================
          DEPARTMENTS
      ====================================================== */}

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          {departments.map((department, index) => (
            <DepartmentSection
              key={department.name}
              department={department}
              index={index}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
