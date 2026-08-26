import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown, FaCheckCircle, FaSitemap } from "react-icons/fa";

import {
  organizationPageData,
  leadershipData,
  departments,
  organizationWorkflow,
} from "../../Components/Data File/Organization Chart Data/OrganizationChartData";

// =====================================================
// ANIMATION VARIANTS
// =====================================================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  visible: (index) => ({
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.65,
      delay: index * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

// =====================================================
// COMPONENT
// =====================================================

export default function OrganizationChart() {
  const DirectorIcon = leadershipData.icon;

  return (
    <main className="overflow-hidden bg-white">
      {/* =================================================
          HERO
      ================================================== */}

      <section className="relative overflow-hidden bg-[#06281E]">
        {/* Background Glow */}

        <motion.div
          className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#A7F3D0]/10 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.55, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#0284C7]/10 blur-3xl"
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.2, 0.45, 0.2],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

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

        {/* Hero Content */}

        <div className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-4xl text-center"
          >
            {/* Eyebrow */}

            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#F97316] sm:w-10" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#A7F3D0] sm:text-sm">
                {organizationPageData.eyebrow}
              </span>

              <span className="h-px w-8 bg-[#F97316] sm:w-10" />
            </div>

            {/* Heading */}

            <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {organizationPageData.title}
            </h1>

            {/* Description */}

            <p className="mx-auto mt-7 max-w-3xl text-sm leading-7 text-green-50/75 sm:text-base sm:leading-8 lg:text-lg">
              {organizationPageData.description}
            </p>

            {/* Supporting Line */}

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#A7F3D0]/70 sm:text-sm">
              <span>{organizationPageData.supportingText}</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Fade */}

        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#06281E] to-transparent" />
      </section>

      {/* =================================================
          ORGANIZATION CHART
      ================================================== */}

      <section className="relative bg-slate-50 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* Section Header */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#087B5A]/10 text-[#087B5A]">
              <FaSitemap size={20} />
            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
              DAFA Structure
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
              Leadership & Departments
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              DAFA's teams work together across leadership, administrative,
              financial, logistical, and operational functions to support
              humanitarian mine-action activities.
            </p>
          </motion.div>

          {/* =================================================
              DIRECTOR
          ================================================== */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-14 flex flex-col items-center"
          >
            {/* Icon */}

            <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-[#0B3D2E] text-[#A7F3D0] shadow-xl ring-1 ring-[#087B5A]/20">
              <DirectorIcon size={27} />
            </div>

            {/* Card */}

            <div className="mt-5 w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-lg sm:p-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#087B5A]">
                Leadership
              </p>

              <h3 className="mt-2 text-2xl font-black text-[#0F172A]">
                {leadershipData.name}
              </h3>

              <p className="mt-1 text-sm font-bold text-[#F97316]">
                {leadershipData.position}
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {leadershipData.description}
              </p>
            </div>

            {/* Connector */}

            <div className="relative mt-7 flex h-14 flex-col items-center">
              <div className="h-full w-px bg-[#087B5A]/25" />

              <div className="absolute bottom-0 flex h-7 w-7 items-center justify-center rounded-full border border-[#087B5A]/20 bg-white text-[#087B5A]">
                <FaArrowDown size={10} />
              </div>
            </div>
          </motion.div>

          {/* =================================================
              DEPARTMENT CONNECTOR
          ================================================== */}

          <div className="relative mx-auto max-w-6xl">
            {/* Desktop Horizontal Line */}

            <div className="absolute left-[12.5%] right-[12.5%] top-0 hidden h-px bg-[#087B5A]/20 lg:block" />

            {/* Desktop Vertical Lines */}

            {departments.map((_, index) => (
              <div
                key={index}
                className="absolute top-0 hidden h-7 w-px bg-[#087B5A]/20 lg:block"
                style={{
                  left: `${12.5 + index * 25}%`,
                }}
              />
            ))}
          </div>

          {/* =================================================
              DEPARTMENT CARDS
          ================================================== */}

          <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {departments.map((department, index) => {
              const Icon = department.icon;

              return (
                <motion.article
                  key={department.id}
                  custom={index}
                  variants={cardAnimation}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  whileHover={{
                    y: -7,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl"
                >
                  {/* Top Accent */}

                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#087B5A] to-[#F97316]" />

                  {/* Department Icon */}

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A] transition-all duration-300 group-hover:bg-[#087B5A] group-hover:text-white">
                    <Icon size={20} />
                  </div>

                  {/* Title */}

                  <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#087B5A]">
                    {department.label}
                  </p>

                  <h3 className="mt-1 text-xl font-black text-[#0F172A]">
                    {department.name}
                  </h3>

                  {/* Description */}

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {department.description}
                  </p>

                  {/* Divider */}

                  <div className="my-5 h-px bg-slate-100" />

                  {/* Responsibilities */}

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                      Key Responsibilities
                    </p>

                    <div className="mt-3 space-y-2.5">
                      {department.responsibilities.map((responsibility) => (
                        <div
                          key={responsibility}
                          className="flex items-start gap-2"
                        >
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

                  {/* Personnel */}

                  <div className="mt-6 rounded-xl bg-slate-50 p-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                      Key Positions
                    </p>

                    <div className="mt-3 space-y-2">
                      {department.positions.map((position) => (
                        <div key={position} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F97316]" />

                          <span className="text-xs font-semibold leading-5 text-slate-700">
                            {position}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================
          HOW WE WORK TOGETHER
      ================================================== */}

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* Header */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
              Working Together
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0F172A] sm:text-4xl">
              From Leadership to Community Impact
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Every part of DAFA's organizational structure contributes to the
              shared goal of delivering effective humanitarian mine action and
              helping communities live safer lives.
            </p>
          </motion.div>

          {/* Workflow */}

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {organizationWorkflow.map((step, index) => (
              <motion.div
                key={step.number}
                custom={index}
                variants={cardAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                className="relative rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <span className="text-3xl font-black text-[#087B5A]/15">
                  {step.number}
                </span>

                <h3 className="mt-3 text-lg font-bold text-[#0F172A]">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>

                {index !== organizationWorkflow.length - 1 && (
                  <div className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-[#087B5A] lg:flex">
                    <FaArrowDown className="-rotate-90" size={9} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Bottom Statement */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto mt-12 max-w-3xl text-center"
          >
            <div className="mx-auto mb-6 h-px max-w-xs bg-slate-200" />

            <p className="text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
              Through coordinated leadership, dedicated staff, and specialized
              teams, DAFA works toward safer communities and a safer future for
              Afghanistan.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
