import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img1 from "../../assets/img.png";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-[#052E23]">
      {/* ================= BACKGROUND IMAGE ================= */}
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

      {/* ================= DARK OVERLAY ================= */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(90deg,rgba(3,31,24,0.97)_0%,rgba(5,46,35,0.88)_42%,rgba(5,46,35,0.48)_70%,rgba(5,46,35,0.18)_100%)]
        "
      />

      {/* Bottom readability gradient */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(0deg,rgba(3,31,24,0.78)_0%,rgba(3,31,24,0.20)_45%,transparent_75%)]
        "
      />

      {/* ================= DECORATIVE ELEMENTS ================= */}

      <div className="absolute left-0 top-1/2 hidden h-px w-24 bg-[#F97316]/60 lg:block" />

      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="
          absolute
          bottom-0
          left-8
          hidden
          h-28
          w-px
          origin-bottom
          bg-gradient-to-t
          from-[#F97316]
          to-transparent
          lg:block
        "
      />

      {/* ================= CONTENT ================= */}

      <div
        className="
          relative z-10
          mx-auto
          flex min-h-[92vh]
          w-full max-w-7xl
          items-center
          px-5
          py-20
          sm:px-8
          md:py-24
          lg:px-10
        "
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-4xl text-white"
        >
          {/* ================= EYEBROW ================= */}

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-[2px] w-10 rounded-full bg-[#F97316]" />

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#FDBA74] sm:text-sm">
              DAFA • Since 1990
            </span>
          </motion.div>

          {/* ================= HEADLINE ================= */}

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.25,
            }}
            className="
              max-w-4xl
              text-[2.75rem]
              font-extrabold
              leading-[1.02]
              tracking-[-0.035em]
              sm:text-5xl
              md:text-6xl
              lg:text-[4.75rem]
              xl:text-[5.25rem]
            "
          >
            Clearing Hazards.
            <span className="mt-2 block text-[#A7F3D0]">
              Protecting Communities.
            </span>
          </motion.h1>

          {/* ================= DESCRIPTION ================= */}

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
            DAFA works across Afghanistan to reduce the threat of landmines and
            explosive hazards, helping communities safely access their land,
            homes, roads, and essential services.
          </motion.p>

          {/* ================= IMPACT POINTS ================= */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.5,
            }}
            className="
              mt-7
              flex
              flex-wrap
              items-center
              gap-x-6
              gap-y-3
              text-sm
              font-medium
              text-white/75
            "
          >
            <div className="flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-[#F97316] shadow-[0_0_10px_rgba(249,115,22,0.6)]" />
              <span>Humanitarian Mine Action</span>
            </div>

            <div className="hidden h-4 w-px bg-white/20 sm:block" />

            <div className="flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-[#A7F3D0] shadow-[0_0_10px_rgba(167,243,208,0.5)]" />
              <span>Community Protection</span>
            </div>
          </motion.div>

          {/* ================= CTA ================= */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.65,
            }}
            className="mt-9"
          >
            <Link
              to="/about"
              aria-label="Learn more about DAFA's work"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-xl
                bg-[#F97316]
                px-7
                py-4
                text-sm
                font-bold
                text-white
                shadow-lg
                shadow-black/20
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#EA580C]
                hover:shadow-xl
                focus:outline-none
                focus:ring-2
                focus:ring-[#FDBA74]
                focus:ring-offset-2
                focus:ring-offset-[#052E23]
              "
            >
              <span>Learn About Our Work</span>

              <span
                aria-hidden="true"
                className="
                  text-lg
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.3,
          duration: 0.8,
        }}
        className="
          absolute
          bottom-7
          right-7
          hidden
          items-center
          gap-3
          text-[10px]
          font-semibold
          uppercase
          tracking-[0.2em]
          text-white/50
          lg:flex
        "
      >
        <span>Scroll to explore</span>

        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-sm text-[#F97316]"
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}
