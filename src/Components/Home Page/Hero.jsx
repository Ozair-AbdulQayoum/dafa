import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaChevronDown,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaUsers,
} from "react-icons/fa";

import img1 from "../../assets/img.png";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[#052E23] sm:min-h-[94vh]">
      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}

      <motion.img
        src={img1}
        alt="DAFA humanitarian mine action team working in Afghanistan"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2,
          ease: "easeOut",
        }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* =====================================================
          PREMIUM IMAGE OVERLAY
      ====================================================== */}

      <div className="absolute inset-0 bg-[#052E23]/35" />

      <div
        className="
          absolute inset-0
          bg-[linear-gradient(90deg,
          rgba(3,31,24,0.98)_0%,
          rgba(5,46,35,0.94)_30%,
          rgba(5,46,35,0.72)_52%,
          rgba(5,46,35,0.30)_76%,
          rgba(5,46,35,0.08)_100%)]
        "
      />

      <div
        className="
          absolute inset-0
          bg-[linear-gradient(0deg,
          rgba(3,31,24,0.90)_0%,
          rgba(3,31,24,0.28)_38%,
          transparent_70%)]
        "
      />

      {/* =====================================================
          DECORATIVE ELEMENTS
      ====================================================== */}

      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-white/10" />

      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/10" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#087B5A]/20 blur-3xl" />

      <div className="pointer-events-none absolute right-[15%] top-[25%] h-48 w-48 rounded-full bg-[#F97316]/5 blur-3xl" />

      {/* Left accent */}

      <div className="absolute left-0 top-[42%] hidden h-px w-24 bg-[#F97316]/70 lg:block" />

      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
        className="
          absolute
          bottom-0
          left-8
          hidden
          h-32
          w-px
          origin-bottom
          bg-gradient-to-t
          from-[#F97316]
          to-transparent
          lg:block
        "
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[90vh]
          max-w-7xl
          items-center
          px-5
          py-24
          sm:min-h-[94vh]
          sm:px-8
          lg:px-10
        "
      >
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-4xl text-white"
          >
            {/* Eyebrow */}

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.15,
              }}
              className="flex items-center gap-3"
            >
              <span className="h-[2px] w-10 rounded-full bg-[#F97316]" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#FDBA74] sm:text-sm">
                Demining Agency for Afghanistan
              </span>
            </motion.div>

            {/* Main Heading */}

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.25,
              }}
              className="
                mt-6
                max-w-4xl
                text-[2.8rem]
                font-extrabold
                leading-[0.98]
                tracking-[-0.04em]
                sm:text-5xl
                md:text-6xl
                lg:text-[4.7rem]
                xl:text-[5.25rem]
              "
            >
              Clearing Hazards.
              <span className="mt-3 block text-[#A7F3D0]">
                Protecting Lives.
              </span>
            </motion.h1>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.4,
              }}
              className="
                mt-7
                max-w-2xl
                text-base
                leading-7
                text-white/80
                sm:text-lg
                sm:leading-8
                lg:text-xl
                lg:leading-9
              "
            >
              DAFA works across Afghanistan to reduce the threat of landmines
              and explosive hazards, helping communities safely access their
              homes, land, roads, schools, and essential services.
            </motion.p>

            {/* =================================================
                IMPACT STATISTIC
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.5,
              }}
              className="
                mt-8
                flex
                flex-wrap
                items-center
                gap-5
              "
            >
              {/* 36 Years */}

              <div className="flex items-center gap-4">
                <div>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                      36
                    </span>

                    <span className="ml-2 text-sm font-bold uppercase tracking-wider text-[#A7F3D0]">
                      Years
                    </span>
                  </div>

                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-white/50">
                    Of humanitarian mine action
                  </p>
                </div>
              </div>

              <div className="hidden h-12 w-px bg-white/15 sm:block" />

              {/* Since */}

              <div>
                <p className="text-sm font-semibold text-white">
                  Serving Afghanistan
                </p>

                <p className="mt-1 text-xs text-white/50">Since 1990</p>
              </div>
            </motion.div>

            {/* =================================================
                CTA BUTTONS
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.65,
              }}
              className="mt-9 flex flex-wrap gap-3"
            >
              {/* Primary */}

              <Link
                to="/what-we-do"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-[#F97316]
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  shadow-xl
                  shadow-black/20
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#EA580C]
                  hover:shadow-2xl
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#FDBA74]
                  focus:ring-offset-2
                  focus:ring-offset-[#052E23]
                "
              >
                Explore Our Work
                <FaArrowRight
                  size={12}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              {/* Secondary */}

              <Link
                to="/about"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-white/20
                  bg-white/10
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-white/30
                  hover:bg-white/15
                "
              >
                About DAFA
              </Link>
            </motion.div>
          </motion.div>

          {/* =================================================
              RIGHT IMPACT PANEL
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.5,
            }}
            className="hidden justify-end lg:flex"
          >
            <div className="w-full max-w-sm">
              {/* Floating Impact Card */}

              <div
                className="
                  rounded-3xl
                  border
                  border-white/15
                  bg-black/20
                  p-6
                  shadow-2xl
                  backdrop-blur-md
                "
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#A7F3D0]">
                      Our Mission
                    </p>

                    <p className="mt-2 text-lg font-bold text-white">
                      Safer Communities
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#087B5A] text-[#A7F3D0]">
                    <FaShieldAlt size={18} />
                  </div>
                </div>

                <div className="my-6 h-px bg-white/10" />

                {/* Impact items */}

                <div className="space-y-5">
                  <ImpactItem
                    icon={FaMapMarkerAlt}
                    value="32+"
                    label="Provinces reached"
                  />

                  <ImpactItem
                    icon={FaUsers}
                    value="Millions"
                    label="People supported"
                  />

                  <ImpactItem
                    icon={FaShieldAlt}
                    value="36 Years"
                    label="Humanitarian service"
                  />
                </div>

                <div className="mt-6 rounded-xl bg-[#087B5A]/30 px-4 py-3">
                  <p className="text-xs leading-5 text-green-50/80">
                    Working together to reduce explosive hazards and create
                    safer environments for communities across Afghanistan.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM INFORMATION BAR
      ====================================================== */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          delay: 1,
        }}
        className="
          absolute
          bottom-0
          left-0
          right-0
          z-20
          border-t
          border-white/10
          bg-black/15
          backdrop-blur-md
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            items-center
            justify-between
            px-5
            py-3.5
            sm:px-8
            lg:px-10
          "
        >
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F97316]" />

            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60 sm:text-xs">
              Humanitarian Mine Action
            </p>
          </div>

          <p className="hidden text-xs text-white/40 sm:block">
            Safety • Protection • Community
          </p>

          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-[#F97316]"
          >
            <FaChevronDown size={11} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

/* =========================================================
   IMPACT ITEM
========================================================= */

function ImpactItem({ icon: Icon, value, label }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#A7F3D0]">
        <Icon size={15} />
      </div>

      <div>
        <p className="text-sm font-bold text-white">{value}</p>

        <p className="mt-0.5 text-xs text-white/45">{label}</p>
      </div>
    </div>
  );
}
