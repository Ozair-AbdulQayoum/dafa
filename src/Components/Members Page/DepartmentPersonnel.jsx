import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaUsers,
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

// ============================================================
// DEPARTMENT & PERSONNEL DATA
// ============================================================

const departments = [
  {
    name: "Administration",
    icon: FaUserCog,
    description:
      "Supporting organizational administration, human resources, coordination, documentation, and internal services.",

    members: [
      {
        slug: "administration-manager",
        name: "Example Name",
        position: "HR / Admin Manager",
        experience: "10+ Years Experience",
        image: "/images/team/admin-manager.jpg",
        featured: true,
      },
      {
        slug: "administration-officer",
        name: "Example Name",
        position: "HR / Admin Officer",
        experience: "7+ Years Experience",
        image: "/images/team/admin-officer.jpg",
      },
      {
        slug: "administration-assistant",
        name: "Example Name",
        position: "Administration Assistant",
        experience: "4+ Years Experience",
        image: "/images/team/admin-assistant.jpg",
      },
    ],
  },

  {
    name: "Finance",
    icon: FaCalculator,
    description:
      "Supporting financial management, reporting, planning, compliance, and responsible use of organizational resources.",

    members: [
      {
        slug: "finance-manager",
        name: "Example Name",
        position: "Finance Manager",
        experience: "12+ Years Experience",
        image: "/images/team/finance-manager.jpg",
        featured: true,
      },
      {
        slug: "finance-officer",
        name: "Example Name",
        position: "Finance Officer",
        experience: "8+ Years Experience",
        image: "/images/team/finance-officer.jpg",
      },
      {
        slug: "finance-assistant",
        name: "Example Name",
        position: "Finance Assistant",
        experience: "5+ Years Experience",
        image: "/images/team/finance-assistant.jpg",
      },
    ],
  },

  {
    name: "Logistics",
    icon: FaTruck,
    description:
      "Supporting the movement, management, procurement, storage, and availability of resources across DAFA operations.",

    members: [
      {
        slug: "ahmad-example",
        name: "Ahmad Example",
        position: "Logistics Manager",
        experience: "12+ Years Experience",
        image: "/images/team/logistics-manager.jpg",
        featured: true,
      },
      {
        slug: "logistics-officer",
        name: "Example Name",
        position: "Logistics Officer",
        experience: "8+ Years Experience",
        image: "/images/team/logistics-officer.jpg",
      },
      {
        slug: "logistics-assistant",
        name: "Example Name",
        position: "Logistics Assistant",
        experience: "5+ Years Experience",
        image: "/images/team/logistics-assistant.jpg",
      },
      {
        slug: "storekeeper",
        name: "Example Name",
        position: "Storekeeper",
        experience: "6+ Years Experience",
        image: "/images/team/storekeeper.jpg",
      },
      {
        slug: "logistics-coordinator",
        name: "Example Name",
        position: "Logistics Coordinator",
        experience: "7+ Years Experience",
        image: "/images/team/logistics-coordinator.jpg",
      },
    ],
  },

  {
    name: "Operations",
    icon: FaTools,
    description:
      "Supporting the planning, coordination, quality assurance, and delivery of humanitarian mine action activities.",

    members: [
      {
        slug: "operations-manager",
        name: "Example Name",
        position: "Operations Manager",
        experience: "15+ Years Experience",
        image: "/images/team/operations-manager.jpg",
        featured: true,
      },
      {
        slug: "operations-officer",
        name: "Example Name",
        position: "Operations Officer",
        experience: "9+ Years Experience",
        image: "/images/team/operations-officer.jpg",
      },
      {
        slug: "operations-assistant",
        name: "Example Name",
        position: "Operations Assistant",
        experience: "5+ Years Experience",
        image: "/images/team/operations-assistant.jpg",
      },
      {
        slug: "qa-manager",
        name: "Example Name",
        position: "QA Manager",
        experience: "11+ Years Experience",
        image: "/images/team/qa-manager.jpg",
      },
      {
        slug: "qa-officer",
        name: "Example Name",
        position: "QA Officer",
        experience: "7+ Years Experience",
        image: "/images/team/qa-officer.jpg",
      },
      {
        slug: "field-operations-officer",
        name: "Example Name",
        position: "Field Operations Officer",
        experience: "7+ Years Experience",
        image: "/images/team/field-operations-officer.jpg",
      },
      {
        slug: "field-operations-assistant",
        name: "Example Name",
        position: "Field Operations Assistant",
        experience: "5+ Years Experience",
        image: "/images/team/field-operations-assistant.jpg",
      },
    ],
  },
];

// ============================================================
// MEMBER CARD
// ============================================================

function MemberCard({ member }) {
  return (
    <motion.div
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
        {/* Image */}
        <div className="relative h-64 overflow-hidden bg-[#E8F3EF]">
          <img
            src={member.image}
            alt={member.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

          {/* Featured Badge */}
          {member.featured && (
            <div className="absolute left-4 top-4 rounded-full bg-[#087B5A] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white shadow-lg">
              Key Personnel
            </div>
          )}
        </div>

        {/* Information */}
        <div className="p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#087B5A]">
            {member.position}
          </p>

          <h3 className="mt-2 text-lg font-bold text-[#0F172A]">
            {member.name}
          </h3>

          <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
            <FaBriefcase size={13} className="shrink-0 text-[#087B5A]" />

            <span>{member.experience}</span>
          </div>

          {/* Profile Link */}
          <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
            <span className="text-sm font-semibold text-[#087B5A]">
              View Profile
            </span>

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#087B5A]/10 text-[#087B5A] transition-all duration-300 group-hover:bg-[#087B5A] group-hover:text-white">
              <FaArrowRight size={12} />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ============================================================
// DEPARTMENT SECTION
// ============================================================

function DepartmentSection({ department, departmentIndex }) {
  const [showAll, setShowAll] = useState(false);

  const visibleMembers = showAll
    ? department.members
    : department.members.slice(0, 4);

  const hasMore = department.members.length > 4;

  return (
    <div className={departmentIndex !== 0 ? "mt-24" : ""}>
      {/* Department Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
      >
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A]">
              <department.icon size={18} />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087B5A]">
                Department
              </p>

              <h2 className="text-2xl font-bold text-[#0F172A] sm:text-3xl">
                {department.name}
              </h2>
            </div>
          </div>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-500 sm:text-base">
            {department.description}
          </p>
        </div>

        {/* Personnel Count */}
        <div className="shrink-0">
          <span className="inline-flex rounded-full bg-[#087B5A]/10 px-4 py-2 text-sm font-semibold text-[#087B5A]">
            {department.members.length} Key Personnel
          </span>
        </div>
      </motion.div>

      {/* Personnel Cards */}
      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {visibleMembers.map((member) => (
          <MemberCard key={member.slug} member={member} />
        ))}
      </motion.div>

      {/* See All */}
      {hasMore && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="group inline-flex items-center gap-3 rounded-xl border border-[#087B5A]/20 bg-white px-6 py-3 text-sm font-semibold text-[#087B5A] shadow-sm transition-all duration-300 hover:border-[#087B5A] hover:bg-[#087B5A] hover:text-white hover:shadow-md"
          >
            {showAll ? "Show Less" : `See All ${department.name} Personnel`}

            {showAll ? (
              <FaChevronUp
                size={12}
                className="transition-transform group-hover:-translate-y-0.5"
              />
            ) : (
              <FaChevronDown
                size={12}
                className="transition-transform group-hover:translate-y-0.5"
              />
            )}
          </button>
        </div>
      )}
    </div>
  );
}

// ============================================================
// MAIN PAGE
// ============================================================

export default function DepartmentPersonnel() {
  return (
    <main>
      {/* =====================================================
          PAGE INTRO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#06281E]">
        {/* Background Glow */}
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#A7F3D0]/10 blur-3xl" />

        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#0284C7]/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#A7F3D0]/10 text-[#A7F3D0]">
                <FaUsers size={16} />
              </span>

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A7F3D0]">
                Our People
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              People Who Make a
              <span className="block text-[#A7F3D0]">Difference</span>
            </h1>

            <p className="mt-6 text-base leading-8 text-green-50/70 sm:text-lg">
              Meet the professionals and key personnel who support DAFA's
              humanitarian mission through leadership, technical expertise,
              coordination, and operational support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          ORGANIZATIONAL LEADERSHIP
      ====================================================== */}
      <section className="border-b border-slate-100 bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#087B5A]">
              Organizational Leadership
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0F172A] sm:text-4xl">
              Director
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-500">
              Providing overall leadership, strategic direction, and
              coordination across DAFA's departments and humanitarian
              operations.
            </p>
          </motion.div>

          {/* =================================================
              DIRECTOR CARD

              IMPORTANT:
              Director Profile → /members/director
              Director Short Bio → /director-bio
          ================================================== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto mt-8 max-w-sm"
          >
            <Link
              to="/members/director"
              className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#087B5A]/30 hover:shadow-xl"
            >
              <div className="relative h-72 overflow-hidden bg-[#E8F3EF]">
                <img
                  src="/images/team/director.jpg"
                  alt="DAFA Director"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4">
                  <span className="rounded-full bg-[#087B5A] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                    Leadership
                  </span>
                </div>
              </div>

              <div className="p-5 text-center">
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A]">
                  <FaUserTie size={18} />
                </div>

                <h3 className="mt-3 text-xl font-bold text-[#0F172A]">
                  Director
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Demining Agency for Afghanistan
                </p>

                <div className="mt-4 text-sm font-semibold text-[#087B5A]">
                  View Profile
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          DEPARTMENTS
      ====================================================== */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          {departments.map((department, departmentIndex) => (
            <DepartmentSection
              key={department.name}
              department={department}
              departmentIndex={departmentIndex}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
