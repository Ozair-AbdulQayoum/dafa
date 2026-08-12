import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown, FaShieldAlt } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-[620px] overflow-hidden bg-[#0B3D2E]">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#087B5A]/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#F97316]/10 blur-3xl" />

      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-center px-5 py-20 sm:px-8 lg:px-10">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Label */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#A7F3D0]/20 bg-white/10 px-4 py-2">
              <FaShieldAlt className="text-[#F97316]" size={13} />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#A7F3D0]">
                What We Do
              </span>
            </div>

            {/* Title */}
            <h1 className="mt-7 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Explosive Ordnance
              <span className="block text-[#A7F3D0]">Disposal</span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-8 text-green-50/80 sm:text-lg">
              DAFA works to identify, manage, and safely dispose of explosive
              ordnance to help protect communities and create safer environments
              across Afghanistan.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#what-is-eod"
                className="inline-flex items-center gap-2 rounded-xl bg-[#F97316] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#ea650d]"
              >
                Learn About EOD
                <FaArrowDown size={11} />
              </a>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative hidden lg:block"
          >
            <div className="relative mx-auto flex h-[420px] max-w-[500px] items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl">
              {/* Outer circle */}
              <div className="absolute h-72 w-72 rounded-full border border-[#A7F3D0]/10" />

              <div className="absolute h-56 w-56 rounded-full border border-[#A7F3D0]/10" />

              {/* Center */}
              <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-[#A7F3D0]/20 bg-[#087B5A]/30 shadow-xl backdrop-blur-sm">
                <FaShieldAlt className="text-[#A7F3D0]" size={48} />
              </div>

              {/* Decorative dots */}
              <span className="absolute left-20 top-20 h-2 w-2 rounded-full bg-[#F97316]" />
              <span className="absolute right-20 top-28 h-2 w-2 rounded-full bg-[#A7F3D0]" />
              <span className="absolute bottom-24 left-28 h-2 w-2 rounded-full bg-[#F97316]" />
              <span className="absolute bottom-20 right-24 h-2 w-2 rounded-full bg-[#A7F3D0]" />

              {/* Bottom label */}
              <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/10 bg-black/10 px-5 py-4 backdrop-blur-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-[#A7F3D0]">
                  Safety • Expertise • Protection
                </p>

                <p className="mt-1 text-sm text-white/70">
                  Supporting safer communities through humanitarian action.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
