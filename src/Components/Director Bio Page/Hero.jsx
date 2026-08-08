import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

// Add the official image when available:
// import directorImg from "../../assets/Director/director.jpg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0">
        {/* Green Glow */}
        <motion.div
          className="absolute -right-48 -top-48 h-[550px] w-[550px] rounded-full bg-[#087B5A]/10 blur-3xl"
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.45, 0.7, 0.45],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Blue Glow */}
        <motion.div
          className="absolute -bottom-52 -left-48 h-[520px] w-[520px] rounded-full bg-[#0284C7]/10 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.55, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-[0.025]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(#0B3D2E 1px, transparent 1px), linear-gradient(90deg, #0B3D2E 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 mx-auto grid min-h-[600px] w-full max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-[1fr_430px] lg:gap-20 lg:px-10 lg:py-24">
        {/* ================= LEFT ================= */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-2xl"
        >
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-[2px] w-10 rounded-full bg-[#087B5A]" />

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#087B5A] sm:text-sm">
              Leadership
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.25,
            }}
            className="text-4xl font-bold leading-[1.08] tracking-tight text-[#0F172A] sm:text-5xl md:text-6xl lg:text-[4.25rem]"
          >
            Meet the
            <span className="mt-1 block text-[#087B5A]">Director of DAFA</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
            className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg"
          >
            Discover the leadership, experience, and vision guiding the Demining
            Agency for Afghanistan in its commitment to humanitarian mine action
            and safer communities.
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.55,
            }}
            className="mt-9 origin-left"
          >
            <div className="h-px w-28 bg-[#087B5A]/30" />
          </motion.div>

          {/* Small Statement */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.65,
            }}
            className="mt-5 max-w-md text-sm font-medium leading-6 text-slate-500"
          >
            Leadership grounded in responsibility, professionalism, and service
            to communities across Afghanistan.
          </motion.p>

          {/* ================= DIRECTOR PROFILE CTA ================= */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.75,
            }}
            className="mt-8"
          >
            <Link
              to="/members/director"
              className="group inline-flex items-center gap-3 rounded-xl bg-[#087B5A] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#087B5A]/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3D2E] hover:shadow-xl"
            >
              <span>View Director Profile</span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:bg-white/20">
                <FaArrowRight
                  size={11}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT ================= */}
        <motion.div
          initial={{
            opacity: 0,
            x: 40,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto w-full max-w-[390px]"
        >
          {/* Decorative Circle */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -right-6 -top-6 h-28 w-28 rounded-full border border-dashed border-[#087B5A]/20"
          />

          {/* Main Card */}
          <motion.div
            whileHover={{
              y: -6,
            }}
            transition={{
              duration: 0.35,
            }}
            className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-[0_25px_80px_rgba(15,23,42,0.12)]"
          >
            {/* Director Photo */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#0B3D2E]">
              {/* 
                When official image is available:

                <img
                  src={directorImg}
                  alt="Director of DAFA"
                  className="h-full w-full object-cover"
                />
              */}

              {/* Temporary Placeholder */}
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.04, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-[#A7F3D0]/30 bg-white/5"
                  >
                    <span className="text-3xl font-bold text-[#A7F3D0]">
                      DAFA
                    </span>
                  </motion.div>

                  <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.16em] text-white/40">
                    Official Photo
                  </p>
                </div>
              </div>

              {/* Image Bottom Gradient */}
              <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#06281E] via-[#06281E]/50 to-transparent" />

              {/* Organization Name */}
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#A7F3D0]">
                  Demining Agency for Afghanistan
                </p>
              </div>
            </div>

            {/* Director Details */}
            <div className="px-5 pb-5 pt-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#087B5A]">
                Director
              </p>

              <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-[#0F172A]">
                Director's Name
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Demining Agency for Afghanistan
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
