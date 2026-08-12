import React from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaSitemap,
  FaUserTie,
  FaTools,
  FaTruck,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#06281E]">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0">
        {/* Green Glow */}
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.3, 0.55, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#A7F3D0]/10 blur-3xl"
        />

        {/* Blue Glow */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-48 -left-40 h-[520px] w-[520px] rounded-full bg-[#0284C7]/10 blur-3xl"
        />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.025]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto flex min-h-[520px] w-full max-w-7xl items-center px-5 py-20 sm:px-8 md:min-h-[600px] md:py-24 lg:px-10">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#A7F3D0]/15 bg-[#A7F3D0]/10 text-[#A7F3D0]">
                <FaUsers size={16} />
              </span>

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#A7F3D0] sm:text-sm">
                Our Team
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
              className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              The People Behind
              <span className="block text-[#A7F3D0]">DAFA</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
              className="mt-7 max-w-2xl text-base leading-8 text-green-50/70 sm:text-lg"
            >
              Meet the dedicated professionals, specialists, and support
              personnel who contribute their experience and expertise to
              DAFA&apos;s humanitarian mission.
            </motion.p>

            {/* Team Areas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.4,
              }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {[
                {
                  icon: FaUserTie,
                  label: "Leadership",
                },
                {
                  icon: FaTools,
                  label: "Technical Expertise",
                },
                {
                  icon: FaTruck,
                  label: "Operations",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2.5 text-xs font-semibold text-white/80 backdrop-blur-sm"
                  >
                    <Icon className="text-[#A7F3D0]" size={12} />
                    {item.label}
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* =================================================
              RIGHT — ORGANIZATION VISUAL
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 45,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative h-[350px] w-[350px]">
              {/* Outer Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[15px] rounded-full border border-dashed border-[#A7F3D0]/15"
              />

              {/* Inner Ring */}
              <motion.div
                animate={{
                  scale: [1, 1.04, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-[55px] rounded-full border border-[#A7F3D0]/10 bg-[#A7F3D0]/[0.02]"
              />

              {/* Glow */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A7F3D0]/10 blur-3xl"
              />

              {/* Connection Lines */}
              <div className="absolute left-1/2 top-[70px] h-[75px] w-px -translate-x-1/2 bg-gradient-to-b from-[#A7F3D0]/30 to-transparent" />

              <div className="absolute bottom-[72px] left-1/2 h-[65px] w-px -translate-x-1/2 rotate-180 bg-gradient-to-b from-[#0284C7]/30 to-transparent" />

              {/* Center */}
              <motion.div
                animate={{
                  y: [0, -7, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 z-10 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#A7F3D0]/25 bg-[#0B3D2E] text-[#A7F3D0] shadow-2xl"
              >
                <FaSitemap size={40} />

                <span className="mt-3 text-[10px] font-bold uppercase tracking-[0.18em]">
                  Our Structure
                </span>
              </motion.div>

              {/* Leadership Node */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-0 z-20 -translate-x-1/2 rounded-xl border border-white/10 bg-white/[0.07] px-4 py-3 text-center backdrop-blur-md"
              >
                <FaUserTie className="mx-auto text-[#A7F3D0]" size={15} />

                <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  Leadership
                </p>
              </motion.div>

              {/* Operations Node */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-0 left-1/2 z-20 -translate-x-1/2 rounded-xl border border-white/10 bg-white/[0.07] px-4 py-3 text-center backdrop-blur-md"
              >
                <FaTools className="mx-auto text-[#0284C7]" size={15} />

                <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  Operations
                </p>
              </motion.div>

              {/* Left Node */}
              <motion.div
                animate={{ x: [0, -5, 0] }}
                transition={{
                  duration: 4.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-0 top-1/2 z-20 -translate-y-1/2 rounded-xl border border-white/10 bg-white/[0.07] px-4 py-3 text-center backdrop-blur-md"
              >
                <FaUsers className="mx-auto text-[#A7F3D0]" size={15} />

                <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  Personnel
                </p>
              </motion.div>

              {/* Right Node */}
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 4.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-0 top-1/2 z-20 -translate-y-1/2 rounded-xl border border-white/10 bg-white/[0.07] px-4 py-3 text-center backdrop-blur-md"
              >
                <FaTruck className="mx-auto text-[#0284C7]" size={15} />

                <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  Support
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-50 to-transparent" />
    </section>
  );
}
