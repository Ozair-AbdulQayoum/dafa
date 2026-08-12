import React from "react";
import { motion } from "framer-motion";
import { FaBookOpen, FaArrowDown, FaShieldAlt } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-[620px] overflow-hidden bg-[#0B3D2E]">
      {/* Background Placeholder */}
      <div className="absolute inset-0">
        <div className="h-full w-full bg-gradient-to-br from-[#041F18] via-[#0B3D2E] to-[#087B5A]" />

        {/* Decorative Glow */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.12, 0.22, 0.12],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#F97316]/20 blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.08, 0.16, 0.08],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 -left-32 h-[500px] w-[500px] rounded-full bg-[#A7F3D0]/10 blur-3xl"
        />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-center px-5 py-20 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          animate={{ opacity: 1, x: 0 }}
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
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#A7F3D0]/20 bg-[#A7F3D0]/10 text-[#A7F3D0]">
              <FaBookOpen size={17} />
            </span>

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#A7F3D0]">
              Knowledge Center
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
            Knowledge for
            <span className="block text-[#A7F3D0]">Safer Communities</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="mt-6 max-w-2xl text-xl font-semibold leading-relaxed text-white sm:text-2xl"
          >
            Learn, understand, and stay informed about humanitarian mine action.
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            className="mt-5 max-w-2xl text-base leading-8 text-green-50/70 sm:text-lg"
          >
            Explore educational materials, mine-action information, safety
            guidance, technical knowledge, publications, and useful resources
            from DAFA.
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
            <a
              href="#knowledge-categories"
              className="inline-flex items-center gap-2 rounded-xl bg-[#F97316] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#EA580C] hover:shadow-xl"
            >
              Explore Knowledge
              <FaArrowDown size={12} />
            </a>

            <a
              href="#publications"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#0B3D2E]"
            >
              Publications
              <FaShieldAlt size={13} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
          className="absolute right-8 hidden lg:block xl:right-16"
        >
          <div className="relative h-[380px] w-[380px]">
            {/* Outer Ring */}
            <div className="absolute inset-0 rounded-full border border-[#A7F3D0]/10" />

            <div className="absolute inset-8 rounded-full border border-[#A7F3D0]/10" />

            {/* Main Card */}
            <div className="absolute left-1/2 top-1/2 flex h-52 w-64 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/[0.07] p-8 text-center shadow-2xl backdrop-blur-md">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F97316]/15 text-[#FDBA74]">
                <FaBookOpen size={28} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-white">
                Knowledge Center
              </h3>

              <p className="mt-2 text-xs leading-5 text-green-50/50">
                Information for safer communities
              </p>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-2 top-16 rounded-xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md"
            >
              <p className="text-[10px] uppercase tracking-wider text-[#A7F3D0]">
                Safety
              </p>
              <p className="mt-1 text-sm font-bold text-white">Awareness</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-16 left-0 rounded-xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md"
            >
              <p className="text-[10px] uppercase tracking-wider text-[#A7F3D0]">
                Learn
              </p>
              <p className="mt-1 text-sm font-bold text-white">Mine Action</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#F8FAFC] to-transparent" />
    </section>
  );
}
