import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaHandsHelping,
  FaPhoneAlt,
  FaShieldAlt,
} from "react-icons/fa";

// Add authentic DAFA disaster-management image when available.
// import disasterHero from "../../assets/images/disaster-management-hero.jpg";

export default function DisasterManagementHero() {
  return (
    <section className="relative min-h-[680px] overflow-hidden bg-[#0B3D2E] lg:min-h-[760px]">
      {/* ================= HERO IMAGE ================= */}
      <div className="absolute inset-0">
        <img
          // src={disasterHero}
          src="/images/disaster-management-hero.jpg"
          alt="DAFA humanitarian disaster management support"
          className="h-full w-full object-cover"
        />

        {/* Main dark overlay */}
        <div className="absolute inset-0 bg-[#052E23]/70" />

        {/* Left-to-right gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#052E23] via-[#0B3D2E]/90 to-[#0B3D2E]/30" />

        {/* Bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#052E23] to-transparent" />
      </div>

      {/* ================= DECORATIVE ELEMENTS ================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#087B5A]/20 blur-3xl" />

        <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#F97316]/10 blur-3xl" />

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.035]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl items-center px-5 py-28 sm:px-8 lg:min-h-[760px] lg:px-10">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-7 flex items-center gap-3"
          >
            <span className="h-[2px] w-10 rounded-full bg-[#F97316]" />

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#A7F3D0] sm:text-sm">
              Disaster Management Support
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl md:text-6xl lg:text-[4.5rem]"
          >
            Supporting Communities
            <span className="block text-[#A7F3D0]">
              When Emergencies Strike
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-7 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8"
          >
            DAFA supports vulnerable communities and humanitarian partners
            during emergencies by strengthening local response, reducing risks,
            and helping deliver timely humanitarian assistance where it is
            needed most.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              to="#response"
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#F97316] px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#EA580C] hover:shadow-2xl"
            >
              <FaHandsHelping size={14} />

              <span>Learn About Our Response</span>

              <FaArrowRight
                size={11}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-xl border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/15"
            >
              <FaPhoneAlt size={12} />

              <span>Contact DAFA</span>
            </Link>
          </motion.div>

          {/* ================= QUICK IMPACT POINTS ================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-12 flex flex-wrap gap-x-7 gap-y-4 border-t border-white/15 pt-6"
          >
            <div className="flex items-center gap-2.5 text-sm font-medium text-white/75">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-[#A7F3D0]">
                <FaShieldAlt size={13} />
              </span>
              Emergency Response
            </div>

            <div className="flex items-center gap-2.5 text-sm font-medium text-white/75">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-[#F97316]">
                <FaHandsHelping size={13} />
              </span>
              Community Support
            </div>

            <div className="flex items-center gap-2.5 text-sm font-medium text-white/75">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-[#A7F3D0]">
                <FaShieldAlt size={13} />
              </span>
              Humanitarian Assistance
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================= BOTTOM SCROLL INDICATOR ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 md:block"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50"
        >
          <span>Explore</span>

          <span className="h-8 w-px bg-gradient-to-b from-[#F97316] to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
