import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0B3D2E]">
      {/* ================= DECORATIVE BACKGROUND ================= */}

      <motion.div
        className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#A7F3D0]/10 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.35, 0.65, 0.35],
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
          opacity: [0.25, 0.55, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.035]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto flex min-h-[430px] w-full max-w-7xl items-center px-5 py-20 sm:px-8 md:min-h-[480px] md:py-24 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-3xl"
        >
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
            className="mb-5 flex items-center gap-3"
          >
            <motion.span
              className="h-2 w-2 rounded-full bg-[#A7F3D0]"
              animate={{
                scale: [1, 1.35, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A7F3D0]">
              Our Structure
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
            className="text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl"
          >
            Organization
            <span className="block text-[#A7F3D0]">Chart</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
            className="mt-6 max-w-2xl text-base leading-8 text-green-50/75 sm:text-lg"
          >
            Explore DAFA's organizational structure and the departments and
            teams working together to deliver humanitarian mine action across
            Afghanistan.
          </motion.p>

          {/* Small Structure Indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.6,
            }}
            className="mt-8 flex items-center gap-2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#A7F3D0]" />
            <span className="h-1.5 w-8 rounded-full bg-[#A7F3D0]/50" />
            <span className="h-1.5 w-4 rounded-full bg-[#A7F3D0]/25" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
