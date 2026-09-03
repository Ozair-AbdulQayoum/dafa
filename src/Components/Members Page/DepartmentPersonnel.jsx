import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FaUserCog,
  FaCalculator,
  FaTruck,
  FaTools,
  FaUsers,
  FaArrowRight,
  FaDatabase,
  FaCheckCircle,
} from "react-icons/fa";

import {
  departments,
  director,
} from "../../Components/Data File/Members Page Data/DepartmentsData";

// ============================================================
// ICON MAP
// ============================================================

const iconMap = {
  FaUserCog,
  FaCalculator,
  FaTruck,
  FaTools,
  FaDatabase,
  FaCheckCircle,
};

// ============================================================
// DEPARTMENT STYLES
// ============================================================

const departmentStyles = {
  Administration: {
    icon: "bg-[#087B5A]/10 text-[#087B5A]",
    gradient: "from-[#087B5A] to-[#0B3D2E]",
    line: "#087B5A",
  },

  Finance: {
    icon: "bg-[#2563EB]/10 text-[#2563EB]",
    gradient: "from-[#2563EB] to-[#1E40AF]",
    line: "#2563EB",
  },

  Logistics: {
    icon: "bg-[#F97316]/10 text-[#F97316]",
    gradient: "from-[#F97316] to-[#C2410C]",
    line: "#F97316",
  },

  Operations: {
    icon: "bg-[#087B5A]/10 text-[#087B5A]",
    gradient: "from-[#0B3D2E] to-[#087B5A]",
    line: "#087B5A",
  },

  "Quality Assurance": {
    icon: "bg-[#7C3AED]/10 text-[#7C3AED]",
    gradient: "from-[#7C3AED] to-[#5B21B6]",
    line: "#7C3AED",
  },

  MIS: {
    icon: "bg-[#0284C7]/10 text-[#0284C7]",
    gradient: "from-[#0284C7] to-[#075985]",
    line: "#0284C7",
  },
};

// ============================================================
// MEMBER CARD
// ============================================================

function MemberCard({
  member,
  color,
  showPositionNode = true,
  isDirector = false,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex w-full flex-col items-center"
    >
      {/* ======================================================
          POSITION NODE
      ====================================================== */}

      {showPositionNode && (
        <>
          <div className="relative z-10 flex min-h-[58px] items-center justify-center">
            {/* Glow */}

            <div
              className="absolute -inset-3 rounded-full opacity-15 blur-xl"
              style={{
                backgroundColor: color,
              }}
            />

            {/* Position */}

            <div
              className="relative flex min-h-[54px] max-w-[280px] items-center justify-center rounded-full border bg-white px-6 py-3 text-center shadow-[0_8px_25px_rgba(15,23,42,0.07)]"
              style={{
                borderColor: `${color}35`,
              }}
            >
              <span
                className="text-xs font-black leading-5 sm:text-sm"
                style={{
                  color,
                }}
              >
                {member.position}
              </span>
            </div>
          </div>

          {/* Connector */}

          <div
            className="h-9 w-px"
            style={{
              background: `linear-gradient(to bottom, ${color}70, ${color}20)`,
            }}
          />
        </>
      )}

      {/* ======================================================
          PROFILE CARD
      ====================================================== */}

      <div
        className={`w-full ${isDirector ? "max-w-[360px]" : "max-w-[340px]"}`}
      >
        <div className="group relative overflow-hidden rounded-[30px] bg-[#06281E] shadow-[0_22px_55px_rgba(11,61,46,0.14)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_32px_75px_rgba(11,61,46,0.23)]">
          {/* ==================================================
              IMAGE
          ================================================== */}

          <Link
            to={`/members/${member.slug}`}
            className={`relative block overflow-hidden ${
              isDirector ? "h-[460px]" : "h-[420px]"
            }`}
          >
            <img
              src={member.image}
              alt={`${member.name} - ${member.position}`}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
            />

            {/* Image Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-[#031C14] via-[#031C14]/15 to-transparent" />

            {/* Bottom Blur */}

            <div className="absolute bottom-0 left-0 right-0 h-48 backdrop-blur-[3px] [mask-image:linear-gradient(to_top,black,transparent)]" />

            {/* Name + Position */}

            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#A7F3D0]">
                {member.position}
              </p>

              <h3
                className={`mt-2 font-black tracking-tight text-white ${
                  isDirector ? "text-3xl sm:text-4xl" : "text-2xl"
                }`}
              >
                {member.name}
              </h3>
            </div>
          </Link>

          {/* ==================================================
              PROFILE BUTTON
          ================================================== */}

          <div className="border-t border-white/10 bg-[#06281E]/95 p-4">
            <Link
              to={`/members/${member.slug}`}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#A7F3D0]/20 bg-[#087B5A]/20 px-5 py-3.5 text-xs font-black text-[#A7F3D0] transition-all duration-300 hover:border-[#A7F3D0]/40 hover:bg-[#087B5A] hover:text-white"
            >
              View Full Profile
              <FaArrowRight
                size={10}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Bottom Accent */}

          <div
            className="h-1"
            style={{
              background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

// ============================================================
// DEPARTMENT SECTION
// ============================================================

function DepartmentSection({ department, index }) {
  const Icon = iconMap[department.icon] || FaUsers;

  const styles =
    departmentStyles[department.name] || departmentStyles.Administration;

  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.05,
      }}
      transition={{
        duration: 0.65,
        delay: index * 0.06,
      }}
      className="relative"
    >
      {/* ======================================================
          CONNECTOR FROM PREVIOUS SECTION
      ====================================================== */}

      <div className="mx-auto h-16 w-px bg-gradient-to-b from-[#087B5A]/40 to-[#087B5A]/10" />

      {/* ======================================================
          DEPARTMENT HEADER
      ====================================================== */}

      <div className="flex justify-center">
        <div className="relative w-full max-w-2xl">
          {/* Glow */}

          <div
            className="absolute -inset-5 rounded-[35px] opacity-25 blur-2xl"
            style={{
              backgroundColor: styles.line,
            }}
          />

          {/* Gradient Border */}

          <div
            className={`relative rounded-[30px] bg-gradient-to-r ${styles.gradient} p-[1px] shadow-[0_18px_45px_rgba(15,23,42,0.09)]`}
          >
            <div className="rounded-[29px] bg-white px-6 py-7 text-center sm:px-10">
              {/* Icon */}

              <div
                className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl ${styles.icon}`}
              >
                <Icon size={24} />
              </div>

              {/* Department Name */}

              <h2 className="mt-5 text-2xl font-black tracking-tight text-[#0F172A] sm:text-3xl">
                {department.name}
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================
          CONNECTOR TO PERSONNEL
      ====================================================== */}

      <div
        className="mx-auto h-14 w-px"
        style={{
          background: `linear-gradient(to bottom, ${styles.line}60, ${styles.line}20)`,
        }}
      />

      {/* ======================================================
          PERSONNEL GRID
      ====================================================== */}

      <motion.div
        layout
        className="
          mx-auto
          grid
          max-w-[1750px]
          grid-cols-1
          items-start
          justify-items-center
          gap-x-7
          gap-y-16
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          2xl:grid-cols-5
        "
      >
        {department.members.map((member) => (
          <MemberCard key={member.slug} member={member} color={styles.line} />
        ))}
      </motion.div>
    </motion.section>
  );
}

// ============================================================
// MAIN PAGE
// ============================================================

export default function DepartmentPersonnel() {
  return (
    <main className="overflow-hidden bg-[#F4FAF7]">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#E8F5EF] via-[#F7FBF9] to-[#EAF4F8] py-20 sm:py-24 lg:py-28">
        {/* ==================================================
            BACKGROUND GLOWS
        ================================================== */}

        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#087B5A]/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#2563EB]/10 blur-3xl" />

        {/* ==================================================
            MAIN CONTAINER
        ================================================== */}

        <div className="relative mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          {/* ==================================================
              DIRECTOR
          ================================================== */}

          <div className="flex flex-col items-center">
            <MemberCard
              member={director}
              color="#087B5A"
              showPositionNode={false}
              isDirector
            />

            {/* Connector */}

            <div className="mt-14 h-16 w-px bg-gradient-to-b from-[#087B5A]/50 to-transparent" />
          </div>

          {/* ==================================================
              DEPARTMENTS
          ================================================== */}

          <div className="mt-0">
            {departments.map((department, index) => (
              <DepartmentSection
                key={department.name}
                department={department}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
