import React from "react";
import { motion } from "framer-motion";

import { heroData } from "../../Data File/Stories Data/Hero";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0B3D2E] text-white">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[#0F8A63]/20 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#F97316]/10 blur-3xl" />

        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#2563EB]/10 blur-3xl" />
      </div>

      {/* Subtle Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative mx-auto flex min-h-[500px] max-w-5xl items-center justify-center px-6 py-24 text-center lg:min-h-[560px]">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex max-w-4xl flex-col items-center"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-[2px] w-8 bg-[#F97316]" />

            <span className="text-sm font-bold tracking-[0.2em] text-[#A7F3D0]">
              {heroData.eyebrow}
            </span>

            <span className="h-[2px] w-8 bg-[#F97316]" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {heroData.title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg"
          >
            {heroData.description}
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0B3D2E] to-transparent" />
    </section>
  );
}
