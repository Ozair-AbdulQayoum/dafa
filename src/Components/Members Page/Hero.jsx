import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaSitemap } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#06281E]">
      {/* Background */}

      <div className="absolute inset-0">
        <motion.div
          className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#A7F3D0]/10 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#0284C7]/10 blur-3xl"
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

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

      {/* Content */}

      <div className="relative z-10 mx-auto flex min-h-[500px] w-full max-w-7xl items-center px-5 py-20 sm:px-8 md:min-h-[560px] md:py-24 lg:px-10">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#A7F3D0]/10 text-[#A7F3D0]">
                <FaUsers size={15} />
              </span>

              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A7F3D0] sm:text-sm">
                Our Team
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              The People Behind
              <span className="block text-[#A7F3D0]">DAFA</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-7 max-w-2xl text-base leading-8 text-green-50/70 sm:text-lg"
            >
              Meet the dedicated professionals, specialists, and support
              personnel who contribute their experience and expertise to DAFA's
              humanitarian work.
            </motion.p>
          </motion.div>

          {/* RIGHT — ORGANIZATION ICON */}

          <motion.div
            initial={{ opacity: 0, x: 35, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative flex h-[320px] w-[320px] items-center justify-center">
              {/* Outer Ring */}

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-[280px] w-[280px] rounded-full border border-dashed border-[#A7F3D0]/15"
              />

              {/* Middle Ring */}

              <motion.div
                animate={{
                  scale: [1, 1.04, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute h-[220px] w-[220px] rounded-full border border-[#A7F3D0]/10 bg-[#A7F3D0]/[0.02]"
              />

              {/* Glow */}

              <div className="absolute h-40 w-40 rounded-full bg-[#A7F3D0]/10 blur-3xl" />

              {/* Center */}

              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 flex h-32 w-32 flex-col items-center justify-center rounded-full border border-[#A7F3D0]/25 bg-[#0B3D2E] text-[#A7F3D0] shadow-2xl"
              >
                <FaSitemap size={38} />

                <span className="mt-3 text-[10px] font-bold uppercase tracking-[0.18em]">
                  Our Structure
                </span>
              </motion.div>

              {/* Small Nodes */}

              <div className="absolute left-5 top-16 h-4 w-4 rounded-full border border-[#A7F3D0]/30 bg-[#A7F3D0]/20" />

              <div className="absolute right-5 top-16 h-4 w-4 rounded-full border border-[#A7F3D0]/30 bg-[#A7F3D0]/20" />

              <div className="absolute bottom-16 left-8 h-3 w-3 rounded-full bg-[#0284C7]/40" />

              <div className="absolute bottom-16 right-8 h-3 w-3 rounded-full bg-[#0284C7]/40" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
