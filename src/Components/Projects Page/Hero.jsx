import React from "react";
import { motion } from "framer-motion";

import heroData from "../../Components/Data File/Project Data/HeroData";

export default function Hero() {
  const EyebrowIcon = heroData.eyebrowIcon;

  return (
    <section className="relative min-h-[620px] overflow-hidden bg-[#06281E]">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      {/* Green Glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#087B5A]/30 blur-3xl"
      />

      {/* Blue Glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -bottom-48 -left-40 h-[500px] w-[500px] rounded-full bg-[#2563EB]/20 blur-3xl"
      />

      {/* =====================================================
          SUBTLE GRID
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(#A7F3D0 1px, transparent 1px), linear-gradient(90deg, #A7F3D0 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* =====================================================
          DECORATIVE CIRCLE
      ===================================================== */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute -right-20 top-1/2 hidden h-72 w-72 rounded-full border border-dashed border-[#A7F3D0]/10 lg:block"
      />

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-center justify-center px-5 py-20 text-center sm:px-8 lg:px-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto flex max-w-4xl flex-col items-center"
        >
          {/* =================================================
              EYEBROW
          ================================================= */}

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
            className="mb-7 flex items-center justify-center gap-3"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#A7F3D0]/10 text-[#A7F3D0]">
              <EyebrowIcon size={16} />
            </span>

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A7F3D0] sm:text-sm">
              {heroData.eyebrow}
            </span>
          </motion.div>

          {/* =================================================
              MAIN HEADING
          ================================================= */}

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
            className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {heroData.title}

            <span className="block text-[#A7F3D0]">
              {heroData.highlightedTitle}
            </span>
          </motion.h1>

          {/* =================================================
              SUBTITLE
          ================================================= */}

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
            className="mt-6 text-lg font-semibold leading-7 text-white sm:text-xl"
          >
            {heroData.subtitle}
          </motion.p>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

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
            className="mx-auto mt-5 max-w-3xl text-base leading-8 text-green-50/70 sm:text-lg"
          >
            {heroData.description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
