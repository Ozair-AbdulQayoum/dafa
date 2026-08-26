import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaBriefcase,
  FaCalendarAlt,
  FaCheckCircle,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaUsers,
} from "react-icons/fa";

import { members } from "../../Components/Data File/Members Page Data/MembersData";

// =========================================================
// MEMBER PROFILE PAGE
// =========================================================

export default function MemberProfile() {
  const { slug } = useParams();

  const member = members[slug];

  // =======================================================
  // PROFILE NOT FOUND
  // =======================================================

  if (!member) {
    return (
      <main className="min-h-screen bg-slate-50">
        <section className="mx-auto max-w-7xl px-5 py-24 text-center sm:px-8 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#087B5A]">
            Members
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
            Profile Not Found
          </h1>

          <p className="mx-auto mt-3 max-w-lg text-slate-500">
            The requested member profile could not be found.
          </p>

          <Link
            to="/members"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#087B5A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0B3D2E]"
          >
            <FaArrowLeft size={12} />
            Back to Members
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* ===================================================
          PROFILE HEADER
      =================================================== */}

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 md:py-16 lg:px-10">
          {/* Back Link */}

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/members"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-[#087B5A]"
            >
              <FaArrowLeft size={12} />
              Back to Our People
            </Link>
          </motion.div>

          {/* Profile */}

          <div className="mt-10 grid items-center gap-10 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]">
            {/* Profile Image */}

            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mx-auto w-full max-w-[320px] md:mx-0"
            >
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 p-2 shadow-sm">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-slate-100">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.position}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Profile Information */}

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Department */}

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
                {member.department}
              </p>

              {/* Name */}

              <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl">
                {member.name}
              </h1>

              {/* Position */}

              <p className="mt-4 text-lg font-semibold text-[#087B5A] sm:text-xl">
                {member.position}
              </p>

              {/* Meta */}

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600">
                  <FaBriefcase size={13} className="text-[#087B5A]" />

                  {member.experience}
                </span>

                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600">
                  <FaMapMarkerAlt size={13} className="text-[#087B5A]" />

                  {member.location}
                </span>
              </div>

              {/* Introduction */}

              <p className="mt-8 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                {member.introduction}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================================================
          PROFESSIONAL PROFILE
      =================================================== */}

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.35fr_0.65fr] lg:px-10">
          {/* Biography */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#087B5A]">
              Professional Profile
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              About {member.name}
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600">
              {member.biography}
            </p>
          </motion.div>

          {/* Professional Information */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-bold text-[#0F172A]">
              Professional Information
            </h3>

            <div className="mt-6 space-y-5">
              <InfoItem
                icon={FaBriefcase}
                label="Position"
                value={member.position}
              />

              <InfoItem
                icon={FaUsers}
                label="Department"
                value={member.department}
              />

              <InfoItem
                icon={FaCalendarAlt}
                label="Experience"
                value={member.experience}
              />

              <InfoItem
                icon={FaMapMarkerAlt}
                label="Location"
                value={member.location}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================================================
          RESPONSIBILITIES
      =================================================== */}

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#087B5A]">
            Role & Responsibilities
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
            Areas of Responsibility
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {member.responsibilities.map((item, index) => (
              <motion.div
                key={index}
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
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <FaCheckCircle
                  className="mt-1 shrink-0 text-[#087B5A]"
                  size={16}
                />

                <p className="text-sm leading-6 text-slate-600">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================
          EDUCATION & TRAINING
      =================================================== */}

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#087B5A]">
            Education & Training
          </p>

          <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
            Education & Professional Development
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {member.education.map((item, index) => (
              <motion.div
                key={index}
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
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#087B5A]/10 text-[#087B5A]">
                  <FaGraduationCap size={17} />
                </div>

                <p className="text-sm font-medium text-slate-700">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================
          CAREER
      =================================================== */}

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#087B5A]">
            Career
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
            Professional Experience
          </h2>

          <div className="relative mt-12 max-w-4xl">
            {/* Timeline Line */}

            <div className="absolute bottom-0 left-[7px] top-0 w-px bg-[#087B5A]/20" />

            <div className="space-y-10">
              {member.career.map((item, index) => (
                <motion.div
                  key={index}
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
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="relative pl-10"
                >
                  {/* Timeline Dot */}

                  <div className="absolute left-0 top-1 h-4 w-4 rounded-full border-4 border-white bg-[#087B5A]" />

                  {/* Period */}

                  <p className="text-xs font-semibold uppercase tracking-wider text-[#087B5A]">
                    {item.period}
                  </p>

                  {/* Position */}

                  <h3 className="mt-2 text-lg font-bold text-[#0F172A]">
                    {item.position}
                  </h3>

                  {/* Organization */}

                  <p className="mt-1 text-sm text-slate-500">
                    {item.organization}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// =========================================================
// INFORMATION ITEM
// =========================================================

function InfoItem({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#087B5A]/10 text-[#087B5A]">
        <Icon size={15} />
      </div>

      <div>
        <p className="text-xs uppercase tracking-wider text-slate-400">
          {label}
        </p>

        <p className="mt-1 text-sm font-semibold text-slate-700">{value}</p>
      </div>
    </div>
  );
}
