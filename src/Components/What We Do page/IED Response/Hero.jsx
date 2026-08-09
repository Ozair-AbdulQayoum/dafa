import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaExclamationTriangle,
  FaShieldAlt,
} from "react-icons/fa";

// Official image — uncomment when received from DAFA
// import iedImg from "../../../assets/ied-response.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-[650px] overflow-hidden bg-[#06281E]">
      {/* ================= BACKGROUND IMAGE ================= */}

      {/*
        Official DAFA IED Response image:

        <motion.img
          src={iedImg}
          alt="IED Response humanitarian operations"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1.8,
            ease: "easeOut",
          }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      */}

      {/* Temporary Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#041F18] via-[#06281E] to-[#0B3D2E]" />

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.035]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(#A7F3D0 1px, transparent 1px), linear-gradient(90deg, #A7F3D0 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ================= DECORATIVE GLOW ================= */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#F97316]/20 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-48 -left-40 h-[420px] w-[420px] rounded-full bg-[#0284C7]/20 blur-3xl"
      />

      {/* ================= MAIN CONTENT ================= */}

      <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl items-center px-5 py-20 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-3xl"
        >
          {/* Section Label */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F97316]/15 text-[#FDBA74]">
              <FaExclamationTriangle size={16} />
            </span>

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#A7F3D0]">
              What We Do
            </span>
          </motion.div>

          {/* Heading */}

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.1,
            }}
            className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            IED
            <span className="block text-[#A7F3D0]">Response</span>
          </motion.h1>

          {/* Subtitle */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="mt-6 text-xl font-semibold text-white sm:text-2xl"
          >
            Responding to Explosive Hazards.
            <span className="block text-[#A7F3D0]">
              Protecting Communities.
            </span>
          </motion.p>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            className="mt-5 max-w-2xl text-base leading-8 text-green-50/75 sm:text-lg"
          >
            DAFA supports humanitarian efforts to address areas affected by
            improvised explosive devices, helping reduce explosive hazards and
            protect communities across Afghanistan.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-xl bg-[#F97316] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#EA580C] hover:shadow-xl"
            >
              Our Projects
              <FaArrowRight size={12} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#0B3D2E]"
            >
              Contact DAFA
              <FaShieldAlt size={13} />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Fade */}

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#F8FAFC] to-transparent" />
    </section>
  );
}
