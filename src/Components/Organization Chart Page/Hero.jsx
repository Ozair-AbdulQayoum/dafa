// =====================================================
// ORGANIZATION CHART
// =====================================================

import React from "react";
import { motion } from "framer-motion";
import {
  FaSitemap,
  FaChevronDown,
  FaUserTie,
  FaCheckCircle,
} from "react-icons/fa";

import {
  organizationPageData,
  leadershipData,
  departments,
} from "../../Components/Data File/Organization Chart Data/OrganizationChartData";

// =====================================================
// ANIMATIONS
// =====================================================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// =====================================================
// COLOR SYSTEM
// =====================================================

const accentStyles = {
  green: {
    icon: "bg-[#087B5A]/10 text-[#087B5A]",
    border: "border-[#087B5A]/20",
    line: "bg-[#087B5A]/30",
    dot: "bg-[#087B5A]",
  },

  blue: {
    icon: "bg-[#2563EB]/10 text-[#2563EB]",
    border: "border-[#2563EB]/20",
    line: "bg-[#2563EB]/25",
    dot: "bg-[#2563EB]",
  },

  orange: {
    icon: "bg-[#F97316]/10 text-[#F97316]",
    border: "border-[#F97316]/20",
    line: "bg-[#F97316]/25",
    dot: "bg-[#F97316]",
  },
};

// =====================================================
// POSITION NODE
// =====================================================

function PositionNode({ title, accent = "green", primary = false }) {
  const styles = accentStyles[accent];

  return (
    <motion.div
      whileHover={{
        y: -3,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`
        relative z-10 rounded-2xl border
        px-4 py-4 text-center
        backdrop-blur-xl
        transition-all duration-300
        ${styles.border}
        ${
          primary
            ? "bg-[#0B3D2E] text-white shadow-[0_12px_30px_rgba(11,61,46,0.15)]"
            : "bg-white/80 text-[#0F172A] shadow-sm"
        }
      `}
    >
      {primary && (
        <div className="mx-auto mb-2 h-1.5 w-8 rounded-full bg-[#A7F3D0]" />
      )}

      <p
        className={`text-[11px] font-black uppercase leading-5 tracking-[0.05em] ${
          primary ? "text-white" : "text-[#0F172A]"
        }`}
      >
        {title}
      </p>
    </motion.div>
  );
}

// =====================================================
// RECURSIVE POSITION TREE
// =====================================================

function PositionTree({ node, accent, level = 0 }) {
  if (!node) return null;

  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="relative flex flex-col items-center">
      {/* Connector from parent */}

      {level > 0 && (
        <div className="absolute -top-6 left-1/2 h-6 w-px bg-slate-300" />
      )}

      <PositionNode title={node.title} accent={accent} primary={level === 0} />

      {hasChildren && (
        <>
          {/* Vertical connector */}

          <div className="h-7 w-px bg-slate-300" />

          {/* Children */}

          <div className="relative w-full">
            {/* Horizontal connector */}

            {node.children.length > 1 && (
              <div className="absolute left-[15%] right-[15%] top-0 hidden h-px bg-slate-300 md:block" />
            )}

            <div
              className={`
                grid gap-4 pt-6
                ${
                  node.children.length === 1
                    ? "grid-cols-1"
                    : node.children.length === 2
                      ? "grid-cols-1 sm:grid-cols-2"
                      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                }
              `}
            >
              {node.children.map((child, index) => (
                <div
                  key={`${child.title}-${index}`}
                  className="relative flex justify-center"
                >
                  {/* Child vertical connector */}

                  <div className="absolute -top-6 left-1/2 hidden h-6 w-px bg-slate-300 md:block" />

                  <div className="w-full">
                    <PositionTree
                      node={child}
                      accent={accent}
                      level={level + 1}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// =====================================================
// DEPARTMENT TREE
// =====================================================

function DepartmentTree({ department, index }) {
  const Icon = department.icon;
  const styles = accentStyles[department.accent] || accentStyles.green;

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.08,
      }}
      transition={{
        delay: index * 0.08,
      }}
      className="relative"
    >
      {/* =================================================
          DEPARTMENT HEADER
      ================================================= */}

      <div className="relative mx-auto w-full max-w-[330px]">
        <div className="absolute -inset-1 rounded-[24px] bg-gradient-to-r from-[#087B5A]/10 via-[#2563EB]/10 to-[#F97316]/10 blur-lg" />

        <div className="relative rounded-[22px] bg-gradient-to-br from-[#0B3D2E] to-[#087B5A] p-[1px] shadow-[0_18px_40px_rgba(11,61,46,0.15)]">
          <div className="rounded-[21px] bg-[#0B3D2E] px-5 py-5 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#A7F3D0]">
              <Icon size={20} />
            </div>

            <p className="mt-3 text-[9px] font-black uppercase tracking-[0.18em] text-[#A7F3D0]/65">
              Department
            </p>

            <h3 className="mt-1 text-xl font-black text-white">
              {department.name}
            </h3>

            <p className="mt-2 text-[11px] leading-5 text-green-50/55">
              {department.label}
            </p>
          </div>
        </div>
      </div>

      {/* =================================================
          DEPARTMENT → MANAGEMENT
      ================================================= */}

      <div className="mt-7">
        <div className="mx-auto h-7 w-px bg-slate-300" />

        <PositionTree node={department.hierarchy} accent={department.accent} />
      </div>
    </motion.article>
  );
}

// =====================================================
// DEPARTMENT DETAIL CARD
// =====================================================

function DepartmentDetail({ department, index }) {
  const Icon = department.icon;
  const styles = accentStyles[department.accent] || accentStyles.green;

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        delay: index * 0.06,
      }}
      whileHover={{
        y: -5,
      }}
      className="relative overflow-hidden rounded-[26px] bg-[#F7FBF9] p-[1px] shadow-sm"
    >
      <div className="relative h-full rounded-[25px] bg-white/80 p-6 backdrop-blur-xl sm:p-7">
        {/* Top line */}

        <div className="absolute inset-x-7 top-0 h-[3px] rounded-full bg-gradient-to-r from-[#087B5A] via-[#2563EB] to-[#F97316]" />

        {/* Header */}

        <div className="flex items-center gap-4">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${styles.icon}`}
          >
            <Icon size={20} />
          </div>

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#087B5A]">
              Department
            </p>

            <h3 className="text-xl font-black text-[#0F172A]">
              {department.name}
            </h3>
          </div>
        </div>

        {/* Description */}

        <p className="mt-5 text-sm leading-7 text-slate-600">
          {department.description}
        </p>

        {/* Responsibilities */}

        <div className="mt-6">
          <p className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">
            Key Responsibilities
          </p>

          <div className="mt-3 space-y-2.5">
            {department.responsibilities.map((responsibility) => (
              <div key={responsibility} className="flex items-start gap-2.5">
                <FaCheckCircle
                  className="mt-1 shrink-0 text-[#087B5A]"
                  size={12}
                />

                <span className="text-xs leading-5 text-slate-600">
                  {responsibility}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

// =====================================================
// MAIN COMPONENT
// =====================================================

export default function OrganizationChart() {
  return (
    <main className="overflow-hidden bg-[#F4FAF7]">
      {/* =================================================
          HERO
      ================================================= */}

      <section className="relative overflow-hidden bg-[#06281E]">
        {/* Green glow */}

        <motion.div
          className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#087B5A]/20 blur-3xl"
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.3, 0.55, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Blue glow */}

        <motion.div
          className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#2563EB]/15 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Orange glow */}

        <div className="absolute left-1/2 top-1/3 h-48 w-48 -translate-x-1/2 rounded-full bg-[#F97316]/10 blur-3xl" />

        {/* Grid */}

        <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Hero content */}

        <div className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#F97316] sm:w-10" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#A7F3D0] sm:text-sm">
                {organizationPageData.eyebrow}
              </span>

              <span className="h-px w-8 bg-[#F97316] sm:w-10" />
            </div>

            <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {organizationPageData.title}
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-sm leading-7 text-green-50/75 sm:text-base sm:leading-8 lg:text-lg">
              {organizationPageData.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#A7F3D0]/70 sm:text-sm">
              {organizationPageData.supportingText
                .split("•")
                .map((item, index) => (
                  <React.Fragment key={item}>
                    {index > 0 && <span className="text-[#F97316]">•</span>}

                    <span>{item.trim()}</span>
                  </React.Fragment>
                ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =================================================
          ORGANIZATION CHART
      ================================================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#E8F5EF] via-[#F7FBF9] to-[#EAF4F8] py-20 sm:py-24 lg:py-28">
        {/* Background glows */}

        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#087B5A]/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#2563EB]/10 blur-3xl" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#F97316]/5 blur-3xl" />

        <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-10">
          {/* =================================================
              HEADER
          ================================================= */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#087B5A]/10 text-[#087B5A]">
              <FaSitemap size={22} />
            </div>

            <p className="mt-5 text-xs font-black uppercase tracking-[0.2em] text-[#087B5A]">
              Organizational Chart
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
              DAFA Organizational Structure
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              A structured view of DAFA's leadership, departments, management
              roles, and supporting positions.
            </p>
          </motion.div>

          {/* =================================================
              DIRECTOR
          ================================================= */}

          <div className="mt-16 flex flex-col items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              className="relative"
            >
              <div className="absolute -inset-5 rounded-full bg-[#087B5A]/15 blur-xl" />

              <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#06281E] to-[#087B5A] text-[#A7F3D0] shadow-[0_20px_50px_rgba(8,123,90,0.25)] ring-8 ring-white/70">
                <FaUserTie size={30} />
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              className="mt-6 w-full max-w-sm"
            >
              <div className="rounded-[23px] bg-gradient-to-r from-[#087B5A] via-[#2563EB] to-[#F97316] p-[1px] shadow-[0_18px_40px_rgba(11,61,46,0.16)]">
                <div className="rounded-[22px] bg-[#0B3D2E] px-7 py-6 text-center">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#A7F3D0]/70">
                    Leadership
                  </p>

                  <h3 className="mt-2 text-2xl font-black text-white">
                    {leadershipData.position}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-green-50/60">
                    {leadershipData.description}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Director connector */}

            <div className="relative mt-8 h-16 w-px bg-[#087B5A]/35">
              <div className="absolute bottom-0 left-1/2 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full bg-white text-[#087B5A] shadow-md">
                <FaChevronDown size={9} />
              </div>
            </div>
          </div>

          {/* =================================================
              DEPARTMENT CONNECTION LINE
          ================================================= */}

          <div className="relative hidden lg:block">
            <div className="absolute left-[8%] right-[8%] top-0 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#087B5A]/35 to-transparent" />

            {departments.map((department, index) => {
              const left =
                departments.length === 1
                  ? 50
                  : 8 + (index * 84) / (departments.length - 1);

              return (
                <div
                  key={department.id}
                  className="absolute top-0 h-8 w-px bg-[#087B5A]/30"
                  style={{
                    left: `${left}%`,
                  }}
                />
              );
            })}
          </div>

          {/* =================================================
              DEPARTMENT TREES
          ================================================= */}

          <div className="mt-8 grid gap-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-20">
            {departments.map((department, index) => (
              <DepartmentTree
                key={department.id}
                department={department}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          DEPARTMENT DETAILS
      ================================================= */}

      <section className="relative bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#087B5A]">
              Department Overview
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0F172A] sm:text-4xl">
              Roles & Responsibilities
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              Each department contributes specialized expertise and support to
              DAFA's humanitarian mine-action mission.
            </p>
          </motion.div>

          {/* Detail cards */}

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {departments.map((department, index) => (
              <DepartmentDetail
                key={department.id}
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
