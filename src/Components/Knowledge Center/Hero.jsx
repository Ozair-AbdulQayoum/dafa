import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown, FaBookOpen, FaShieldAlt } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-[620px] overflow-hidden bg-[#0B3D2E]">
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 bg-gradient-to-br from-[#031F18] via-[#0B3D2E] to-[#087B5A]" />

      {/* Decorative Glow */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.1, 0.18, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 -top-40 h-[460px] w-[460px] rounded-full bg-[#F97316]/20 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.06, 1],
          opacity: [0.06, 0.12, 0.06],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -bottom-48 -left-40 h-[520px] w-[520px] rounded-full bg-[#A7F3D0]/10 blur-3xl"
      />

      {/* ================= GRID PATTERN ================= */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-center px-5 py-20 sm:px-8 lg:px-10">
        <div className="grid w-full lg:grid-cols-[1fr_420px] lg:items-center lg:gap-12">
          {/* ================= LEFT CONTENT ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -45,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-3xl"
          >
            {/* Eyebrow */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#A7F3D0]/20 bg-[#A7F3D0]/10 text-[#A7F3D0]">
                <FaBookOpen size={17} />
              </span>

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#A7F3D0] sm:text-sm">
                Knowledge Center
              </span>
            </motion.div>

            {/* Heading */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.75,
                delay: 0.15,
              }}
              className="
                text-4xl
                font-black
                leading-[1.05]
                tracking-[-0.03em]
                text-white
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              Knowledge for
              <span className="block text-[#A7F3D0]">Safer Communities</span>
            </motion.h1>

            {/* Subtitle */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
              className="
                mt-6
                max-w-2xl
                text-lg
                font-semibold
                leading-8
                text-white
                sm:text-xl
              "
            >
              Learn, understand, and stay informed about humanitarian mine
              action.
            </motion.p>

            {/* Description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.35,
              }}
              className="
                mt-4
                max-w-2xl
                text-base
                leading-8
                text-white/70
                sm:text-lg
              "
            >
              Explore educational materials, safety guidance, technical
              knowledge, publications, and useful resources from DAFA.
            </motion.p>

            {/* Buttons */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.45,
              }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#knowledge-categories"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-[#F97316]
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  shadow-lg
                  shadow-black/10
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#EA580C]
                  hover:shadow-xl
                "
              >
                Explore Knowledge
                <FaArrowDown
                  size={11}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </a>

              <a
                href="#publications"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-white/20
                  bg-white/5
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white
                  hover:text-[#0B3D2E]
                "
              >
                Publications
                <FaShieldAlt size={13} />
              </a>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT VISUAL ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 45,
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto mt-16 hidden h-[390px] w-[390px] lg:mt-0 lg:block"
          >
            {/* Outer Rings */}

            <div className="absolute inset-0 rounded-full border border-white/10" />

            <div className="absolute inset-8 rounded-full border border-[#A7F3D0]/10" />

            <div className="absolute inset-16 rounded-full border border-white/5" />

            {/* Decorative Center */}

            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A7F3D0]/5 blur-2xl" />

            {/* Main Card */}

            <div
              className="
              absolute
              left-1/2
              top-1/2
              flex
              h-56
              w-72
              -translate-x-1/2
              -translate-y-1/2
              flex-col
              items-center
              justify-center
              rounded-3xl
              border
              border-white/10
              bg-white/[0.07]
              p-8
              text-center
              shadow-2xl
              backdrop-blur-xl
            "
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F97316]/15 text-[#FDBA74]">
                <FaBookOpen size={27} />
              </div>

              <h2 className="mt-5 text-lg font-bold text-white">
                DAFA Knowledge Center
              </h2>

              <p className="mt-2 max-w-[190px] text-xs leading-5 text-white/50">
                Information, education, and resources for safer communities.
              </p>
            </div>

            {/* Floating Safety Card */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                right-0
                top-14
                rounded-xl
                border
                border-white/10
                bg-white/10
                px-4
                py-3
                shadow-xl
                backdrop-blur-md
              "
            >
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#A7F3D0]">
                Safety
              </p>

              <p className="mt-1 text-sm font-bold text-white">Awareness</p>
            </motion.div>

            {/* Floating Learning Card */}

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                bottom-14
                left-0
                rounded-xl
                border
                border-white/10
                bg-white/10
                px-4
                py-3
                shadow-xl
                backdrop-blur-md
              "
            >
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#A7F3D0]">
                Learn
              </p>

              <p className="mt-1 text-sm font-bold text-white">Mine Action</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ================= BOTTOM FADE ================= */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#F8FAFC] to-transparent" />
    </section>
  );
}
