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
  FaChevronRight,
} from "react-icons/fa";

import { members } from "../../Components/Data File/Members Page Data/MembersData";

// ============================================================
// MEMBER PROFILE PAGE
// ============================================================

export default function MemberProfile() {
  const { slug } = useParams();

  const member = members[slug];

  // ==========================================================
  // PROFILE NOT FOUND
  // ==========================================================

  if (!member) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-[#E8F5EF] via-[#F7FBF9] to-[#EAF4F8]">
        <section className="flex min-h-screen items-center justify-center px-5 py-24">
          <div className="w-full max-w-xl text-center">
            {/* Icon */}

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[24px] bg-[#087B5A]/10 text-[#087B5A]">
              <FaUsers size={30} />
            </div>

            <p className="mt-7 text-xs font-black uppercase tracking-[0.2em] text-[#087B5A]">
              Members
            </p>

            <h1 className="mt-3 text-4xl font-black tracking-tight text-[#0F172A] sm:text-5xl">
              Profile Not Found
            </h1>

            <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-slate-500 sm:text-base">
              The requested member profile could not be found or may no longer
              be available.
            </p>

            <Link
              to="/members"
              className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-[#087B5A] px-6 py-3.5 text-sm font-black text-white shadow-lg shadow-[#087B5A]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B3D2E] hover:shadow-xl"
            >
              <FaArrowLeft
                size={12}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              Back to Members
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#F4FAF7]">
      {/* ========================================================
          HERO / PROFILE HEADER
      ======================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#E8F5EF] via-[#F7FBF9] to-[#EAF4F8]">
        {/* Background Glows */}

        <div className="pointer-events-none absolute -left-48 top-20 h-[450px] w-[450px] rounded-full bg-[#087B5A]/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-48 bottom-0 h-[450px] w-[450px] rounded-full bg-[#2563EB]/10 blur-3xl" />

        {/* Decorative Circle */}

        <div className="pointer-events-none absolute right-[10%] top-20 hidden h-32 w-32 rounded-full border border-[#087B5A]/10 lg:block" />

        <div className="pointer-events-none absolute right-[13%] top-28 hidden h-16 w-16 rounded-full bg-[#087B5A]/5 lg:block" />

        <div className="relative mx-auto max-w-[1500px] px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
          {/* ====================================================
              BACK LINK
          ==================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -15,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <Link
              to="/members"
              className="group inline-flex items-center gap-2 rounded-full border border-[#087B5A]/10 bg-white/70 px-4 py-2.5 text-xs font-black text-slate-500 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-[#087B5A]/20 hover:bg-white hover:text-[#087B5A]"
            >
              <FaArrowLeft
                size={10}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              Back to Our People
            </Link>
          </motion.div>

          {/* ====================================================
              PROFILE CONTENT
          ==================================================== */}

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[390px_1fr] xl:gap-16">
            {/* ==================================================
                PROFILE IMAGE
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: -35,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mx-auto w-full max-w-[390px] lg:mx-0"
            >
              <div className="relative">
                {/* Image Glow */}

                <div className="absolute -inset-4 rounded-[40px] bg-[#087B5A]/10 blur-2xl" />

                {/* Image Frame */}

                <div className="relative rounded-[34px] bg-gradient-to-br from-[#087B5A] via-[#0B3D2E] to-[#2563EB] p-[2px] shadow-[0_30px_80px_rgba(11,61,46,0.18)]">
                  <div className="overflow-hidden rounded-[32px] bg-[#06281E] p-2">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[26px]">
                      <img
                        src={member.image}
                        alt={`${member.name} - ${member.position}`}
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                      />

                      {/* Image Gradient */}

                      <div className="absolute inset-0 bg-gradient-to-t from-[#031C14]/80 via-transparent to-transparent" />

                      {/* Bottom Badge */}

                      <div className="absolute bottom-5 left-5 right-5">
                        <div className="rounded-2xl border border-white/10 bg-[#06281E]/70 p-4 backdrop-blur-xl">
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#A7F3D0]">
                            {member.department}
                          </p>

                          <p className="mt-1 text-sm font-bold text-white">
                            {member.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ==================================================
                PROFILE INFORMATION
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: 35,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.75,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Department */}

              <div className="inline-flex items-center gap-2 rounded-full border border-[#087B5A]/10 bg-white/70 px-4 py-2 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-[#087B5A] shadow-[0_0_12px_rgba(8,123,90,0.6)]" />

                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#087B5A]">
                  {member.department}
                </span>
              </div>

              {/* Name */}

              <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl xl:text-7xl">
                {member.name}
              </h1>

              {/* Position */}

              <div className="mt-5 flex items-center gap-3">
                <div className="h-8 w-1 rounded-full bg-gradient-to-b from-[#087B5A] to-[#2563EB]" />

                <p className="text-lg font-black text-[#087B5A] sm:text-xl">
                  {member.position}
                </p>
              </div>

              {/* Meta */}

              <div className="mt-8 flex flex-wrap gap-3">
                <MetaBadge icon={FaBriefcase} value={member.experience} />

                <MetaBadge icon={FaMapMarkerAlt} value={member.location} />
              </div>

              {/* Divider */}

              <div className="my-8 h-px w-full max-w-3xl bg-gradient-to-r from-[#087B5A]/20 via-slate-200 to-transparent" />

              {/* Introduction */}

              <p className="max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                {member.introduction}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================
          PROFESSIONAL PROFILE
      ======================================================== */}

      <section className="relative bg-[#F4FAF7] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-20">
            {/* Biography */}

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
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
              }}
            >
              <SectionLabel>Professional Profile</SectionLabel>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
                About {member.name}
              </h2>

              <div className="mt-8 max-w-4xl">
                <p className="text-base leading-8 text-slate-600 sm:text-lg">
                  {member.biography}
                </p>
              </div>

              {/* Small Accent */}

              <div className="mt-10 flex items-center gap-3">
                <div className="h-1 w-12 rounded-full bg-[#087B5A]" />
                <div className="h-1 w-4 rounded-full bg-[#2563EB]" />
                <div className="h-1 w-2 rounded-full bg-[#F97316]" />
              </div>
            </motion.div>

            {/* Professional Information */}

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
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="relative"
            >
              <div className="absolute -inset-3 rounded-[30px] bg-[#087B5A]/5 blur-xl" />

              <div className="relative overflow-hidden rounded-[28px] border border-white bg-white/80 p-7 shadow-[0_20px_60px_rgba(15,23,42,0.07)] backdrop-blur-xl sm:p-8">
                {/* Header */}

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#087B5A]/10 text-[#087B5A]">
                    <FaBriefcase size={18} />
                  </div>

                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#087B5A]">
                      Overview
                    </p>

                    <h3 className="mt-1 text-lg font-black text-[#0F172A]">
                      Professional Information
                    </h3>
                  </div>
                </div>

                {/* Information */}

                <div className="mt-8 space-y-6">
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

                {/* Bottom Accent */}

                <div className="mt-8 h-1 rounded-full bg-gradient-to-r from-[#087B5A] via-[#2563EB] to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================
          RESPONSIBILITIES
      ======================================================== */}

      <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#087B5A]/5 blur-3xl" />

        <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
          <SectionLabel>Role & Responsibilities</SectionLabel>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Areas of Responsibility
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Key responsibilities and areas of professional contribution within
            the organization.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {member.responsibilities.map((item, index) => (
              <motion.div
                key={index}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className="group relative overflow-hidden rounded-[22px] border border-slate-200 bg-[#F8FBF9] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#087B5A]/20 hover:bg-white hover:shadow-[0_18px_45px_rgba(11,61,46,0.08)]"
              >
                {/* Number */}

                <span className="absolute right-5 top-4 text-4xl font-black text-[#087B5A]/5">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}

                <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A] transition-all duration-300 group-hover:bg-[#087B5A] group-hover:text-white">
                  <FaCheckCircle size={17} />
                </div>

                {/* Text */}

                <p className="relative mt-5 text-sm font-medium leading-7 text-slate-600">
                  {item}
                </p>

                {/* Accent */}

                <div className="mt-5 h-0.5 w-8 rounded-full bg-[#087B5A]/30 transition-all duration-300 group-hover:w-14 group-hover:bg-[#087B5A]" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          EDUCATION & TRAINING
      ======================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#E8F5EF] via-[#F7FBF9] to-[#EAF4F8] py-20 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#087B5A]/8 blur-3xl" />

        <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
          <SectionLabel>Education & Training</SectionLabel>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Education & Professional Development
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {member.education.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: -25,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className="group flex items-center gap-5 rounded-[22px] border border-white bg-white/70 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_45px_rgba(11,61,46,0.08)]"
              >
                {/* Icon */}

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#087B5A]/10 text-[#087B5A] transition-all duration-300 group-hover:bg-[#087B5A] group-hover:text-white">
                  <FaGraduationCap size={19} />
                </div>

                {/* Education */}

                <p className="text-sm font-bold leading-6 text-slate-700">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          CAREER TIMELINE
      ======================================================== */}

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
          <SectionLabel>Career</SectionLabel>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Professional Experience
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            A summary of the professional journey and previous roles.
          </p>

          {/* Timeline */}

          <div className="relative mt-14 max-w-5xl">
            {/* Timeline Line */}

            <div className="absolute bottom-5 left-[8px] top-5 w-px bg-gradient-to-b from-[#087B5A] via-[#087B5A]/30 to-transparent" />

            <div className="space-y-10">
              {member.career.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: -25,
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
                    duration: 0.55,
                    delay: index * 0.1,
                  }}
                  className="relative pl-10"
                >
                  {/* Timeline Dot */}

                  <div className="absolute left-0 top-1 flex h-[17px] w-[17px] items-center justify-center rounded-full border-4 border-white bg-[#087B5A] shadow-[0_0_0_3px_rgba(8,123,90,0.12)]" />

                  {/* Career Card */}

                  <div className="group rounded-[22px] border border-slate-200 bg-[#F8FBF9] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#087B5A]/20 hover:bg-white hover:shadow-[0_18px_45px_rgba(11,61,46,0.08)] sm:p-7">
                    {/* Period */}

                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-[#087B5A]">
                        {item.period}
                      </p>

                      <div className="flex items-center gap-1 text-[#087B5A]/50">
                        <span className="h-1 w-1 rounded-full bg-current" />
                        <span className="h-1 w-1 rounded-full bg-current" />
                        <span className="h-1 w-1 rounded-full bg-current" />
                      </div>
                    </div>

                    {/* Position */}

                    <h3 className="mt-3 text-xl font-black text-[#0F172A]">
                      {item.position}
                    </h3>

                    {/* Organization */}

                    <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                      <FaBriefcase size={12} className="text-[#087B5A]" />

                      <span>{item.organization}</span>

                      <FaChevronRight
                        size={8}
                        className="ml-auto text-slate-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#087B5A]"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          BACK TO MEMBERS
      ======================================================== */}

      <section className="bg-[#06281E] py-12">
        <div className="mx-auto flex max-w-[1500px] flex-col items-center justify-between gap-5 px-5 sm:flex-row sm:px-8 lg:px-10">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#A7F3D0]">
              DAFA People
            </p>

            <p className="mt-1 text-sm font-medium text-white/70">
              Explore our leadership and professional team.
            </p>
          </div>

          <Link
            to="/members"
            className="group inline-flex items-center gap-3 rounded-xl border border-[#A7F3D0]/20 bg-[#087B5A]/20 px-5 py-3 text-xs font-black text-[#A7F3D0] transition-all duration-300 hover:border-[#A7F3D0]/40 hover:bg-[#087B5A] hover:text-white"
          >
            <FaArrowLeft
              size={10}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            View All Members
          </Link>
        </div>
      </section>
    </main>
  );
}

// ============================================================
// SECTION LABEL
// ============================================================

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-2 w-2 rounded-full bg-[#087B5A] shadow-[0_0_12px_rgba(8,123,90,0.5)]" />

      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#087B5A] sm:text-xs">
        {children}
      </p>
    </div>
  );
}

// ============================================================
// META BADGE
// ============================================================

function MetaBadge({ icon: Icon, value }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white bg-white/75 px-4 py-2.5 text-xs font-bold text-slate-600 shadow-sm backdrop-blur-md">
      <Icon size={12} className="text-[#087B5A]" />

      {value}
    </span>
  );
}

// ============================================================
// INFORMATION ITEM
// ============================================================

function InfoItem({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-4">
      {/* Icon */}

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A]">
        <Icon size={15} />
      </div>

      {/* Content */}

      <div className="min-w-0">
        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">
          {label}
        </p>

        <p className="mt-1 text-sm font-bold leading-6 text-slate-700">
          {value}
        </p>
      </div>
    </div>
  );
}
