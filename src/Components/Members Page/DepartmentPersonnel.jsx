import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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

/* ============================================================
   DEPARTMENT DATA
============================================================ */

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
      "Supporting procurement, transportation, storage, inventory, and the availability of resources across DAFA operations.",
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
      "Supporting the planning, coordination, quality assurance, and delivery of humanitarian mine-action activities.",
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

/* ============================================================
   PERSONNEL CARD
============================================================ */

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
        {/* Image */}
        <div className="relative h-64 overflow-hidden bg-[#E8F3EF]">
          <img
            src={member.image}
            alt={member.name}
            loading="lazy"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {member.featured && (
            <span className="absolute left-4 top-4 rounded-full bg-[#087B5A] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
              Key Personnel
            </span>
          )}
        </div>

        {/* Details */}
        <div className="p-5">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#087B5A]">
            {member.position}
          </p>

          <h3 className="mt-2 text-lg font-bold text-[#0F172A]">
            {member.name}
          </h3>

          <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
            <FaBriefcase size={13} className="shrink-0 text-[#087B5A]" />
            <span>{member.experience}</span>
          </div>

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

/* ============================================================
   DEPARTMENT SECTION
============================================================ */

function DepartmentSection({ department, index }) {
  const [expanded, setExpanded] = useState(false);

  const visibleMembers = expanded
    ? department.members
    : department.members.slice(0, 4);

  const hasMore = department.members.length > 4;

  const Icon = department.icon;

  return (
    <section className={index > 0 ? "mt-24" : ""}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
      >
        <div className="max-w-3xl">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A]">
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

          <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
            {department.description}
          </p>
        </div>

        <div>
          <span className="inline-flex rounded-full bg-[#087B5A]/10 px-4 py-2 text-sm font-semibold text-[#087B5A]">
            {department.members.length} Personnel
          </span>
        </div>
      </motion.div>

      {/* Cards */}
      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <AnimatePresence initial={false}>
          {visibleMembers.map((member) => (
            <MemberCard key={member.slug} member={member} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Expand */}
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

/* ============================================================
   MAIN PAGE
============================================================ */

export default function DepartmentPersonnel() {
  return (
    <main className="bg-white">
      {/* ========================================================
          HERO
      ======================================================== */}

      <section className="relative overflow-hidden bg-[#06281E]">
        {/* Decorative Background */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#A7F3D0]/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-[#0284C7]/10 blur-3xl" />

        <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:60px_60px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24 lg:px-10 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#A7F3D0]/10 text-[#A7F3D0]">
                <FaUsers size={17} />
              </span>

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#A7F3D0]">
                Our People
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
              People Who Make a
              <span className="block text-[#A7F3D0]">Difference</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-green-50/70 sm:text-lg">
              Meet the professionals and key personnel supporting DAFA's
              humanitarian mission through leadership, technical expertise,
              coordination, and field operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========================================================
          DIRECTOR
      ======================================================== */}

      <section className="border-b border-slate-200 bg-[#F8FAFC] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
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

            <h2 className="mt-3 text-3xl font-bold text-[#0F172A] sm:text-4xl">
              Director
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
              Providing overall leadership, strategic direction, and
              coordination across DAFA's departments and humanitarian
              operations.
            </p>
          </motion.div>

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
              <div className="relative h-80 overflow-hidden bg-[#E8F3EF]">
                <img
                  src="/images/team/director.jpg"
                  alt="DAFA Director"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <span className="absolute bottom-5 left-5 rounded-full bg-[#087B5A] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white">
                  Leadership
                </span>
              </div>

              <div className="p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A]">
                  <FaUserTie size={19} />
                </div>

                <h3 className="mt-4 text-xl font-bold text-[#0F172A]">
                  Director
                </h3>

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

      {/* ========================================================
          DEPARTMENTS
      ======================================================== */}

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

      {/* ========================================================
          BOTTOM CTA
      ======================================================== */}

      <section className="border-t border-slate-100 bg-[#F8FAFC] py-16">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
              Our Commitment
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0F172A] sm:text-4xl">
              Working Together for Safer Communities
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              DAFA's people bring together leadership, technical expertise,
              operational experience, and dedication to humanitarian mine action
              across Afghanistan.
            </p>

            <Link
              to="/about-dafa"
              className="mt-7 inline-flex items-center gap-3 rounded-xl bg-[#087B5A] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0B3D2E]"
            >
              Learn About DAFA
              <FaArrowRight size={12} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
