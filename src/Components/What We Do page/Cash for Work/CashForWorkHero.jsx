import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaHandsHelping, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function CashForWorkHero() {
  return (
    <section className="relative min-h-[680px] overflow-hidden bg-[#0B3D2E]">
      {/* ================= HERO IMAGE ================= */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/programs/cash-for-work-hero.jpg')",
        }}
      />

      {/* ================= OVERLAY ================= */}

      <div className="absolute inset-0 bg-[#0B3D2E]/70" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#0B3D2E] via-[#0B3D2E]/90 to-[#0B3D2E]/30" />

      {/* ================= BACKGROUND DECORATION ================= */}

      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#087B5A]/25 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#F97316]/10 blur-3xl" />

      {/* Subtle grid */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl items-center px-5 py-24 sm:px-8 lg:px-10">
        <div className="max-w-4xl">
          {/* Eyebrow */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-[2px] w-10 rounded-full bg-[#F97316]" />

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#A7F3D0] sm:text-sm">
              What We Do
            </span>
          </motion.div>

          {/* Heading */}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4.5rem]"
          >
            Cash for
            <span className="block text-[#A7F3D0]">Work</span>
          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-7 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg"
          >
            Supporting vulnerable communities through temporary employment
            opportunities while contributing to meaningful humanitarian and
            community-focused activities across Afghanistan.
          </motion.p>

          {/* ================= HIGHLIGHTS ================= */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            className="mt-9 flex flex-wrap gap-3"
          >
            {/* Community Employment */}

            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.08] px-4 py-3 backdrop-blur-sm">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#087B5A] text-white">
                <FaUsers size={14} />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#A7F3D0]">
                  Focus
                </p>

                <p className="text-sm font-semibold text-white">
                  Community Employment
                </p>
              </div>
            </div>

            {/* Humanitarian Support */}

            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.08] px-4 py-3 backdrop-blur-sm">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F97316] text-white">
                <FaHandsHelping size={14} />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-orange-200">
                  Purpose
                </p>

                <p className="text-sm font-semibold text-white">
                  Humanitarian Support
                </p>
              </div>
            </div>
          </motion.div>

          {/* ================= CTA ================= */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
            className="mt-9"
          >
            <Link
              to="/projects"
              className="group inline-flex items-center gap-3 rounded-xl bg-[#F97316] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#EA580C] hover:shadow-xl"
            >
              <span>Explore Our Projects</span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                <FaArrowRight
                  size={11}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ================= BOTTOM INFORMATION ================= */}

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.5,
        }}
        className="absolute bottom-6 left-5 right-5 z-10 sm:left-8 sm:right-8 lg:left-10 lg:right-10"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between border-t border-white/10 pt-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/50">
            DAFA • Humanitarian Mine Action
          </p>

          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#A7F3D0]">
            Supporting Safer Communities
          </p>
        </div>
      </motion.div>
    </section>
  );
}
