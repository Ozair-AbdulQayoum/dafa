import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowDown,
  FaArrowRight,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section id="eod-hero" className="relative overflow-hidden bg-[#0B3D2E]">
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#087B5A]/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[#F97316]/10 blur-3xl" />

      {/* Subtle grid */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      {/* =====================================================
          HERO CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            {/* Eyebrow */}

            <div className="inline-flex items-center gap-2 rounded-full border border-[#A7F3D0]/20 bg-white/[0.07] px-4 py-2 backdrop-blur-sm">
              <FaShieldAlt
                size={12}
                className="text-[#F97316]"
                aria-hidden="true"
              />

              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A7F3D0]">
                What We Do
              </span>
            </div>

            {/* Heading */}

            <h1 className="mt-7 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Explosive Ordnance
              <span className="block text-[#A7F3D0]">Disposal</span>
            </h1>

            {/* Description */}

            <p className="mt-7 max-w-2xl text-base leading-8 text-green-50/75 sm:text-lg">
              DAFA works to identify, assess, and safely manage explosive
              ordnance while supporting safer environments for communities
              across Afghanistan.
            </p>

            {/* CTA */}

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#what-is-eod"
                className="group inline-flex items-center gap-2 rounded-xl bg-[#F97316] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#ea650d] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:ring-offset-2 focus:ring-offset-[#0B3D2E]"
              >
                Learn About EOD
                <FaArrowDown
                  size={11}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                  aria-hidden="true"
                />
              </a>

              <a
                href="#eod-process"
                className="group inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.05] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-[#A7F3D0]/30 hover:bg-white/10"
              >
                Our Process
                <FaArrowRight
                  size={11}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </div>

            {/* =================================================
                KEY POINTS
            ================================================== */}

            <div className="mt-12 grid max-w-xl grid-cols-1 gap-4 border-t border-white/10 pt-7 sm:grid-cols-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#A7F3D0]">
                  <FaCheckCircle size={14} />
                </div>

                <div>
                  <p className="text-xs font-bold text-white">Safety First</p>

                  <p className="mt-0.5 text-[11px] text-green-100/50">
                    Risk-focused approach
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#A7F3D0]">
                  <FaShieldAlt size={14} />
                </div>

                <div>
                  <p className="text-xs font-bold text-white">Trained Teams</p>

                  <p className="mt-0.5 text-[11px] text-green-100/50">
                    Professional response
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#A7F3D0]">
                  <FaArrowRight size={13} />
                </div>

                <div>
                  <p className="text-xs font-bold text-white">Humanitarian</p>

                  <p className="mt-0.5 text-[11px] text-green-100/50">
                    Protecting communities
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT VISUAL
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 35, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="relative h-[390px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] shadow-2xl sm:h-[470px]">
              {/* Outer technical rings */}

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute left-1/2 top-[42%] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#A7F3D0]/10"
              />

              <div className="absolute left-1/2 top-[42%] h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#A7F3D0]/10" />

              <div className="absolute left-1/2 top-[42%] h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#087B5A]/40" />

              {/* Center shield */}

              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-[42%] flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#A7F3D0]/20 bg-[#087B5A]/30 shadow-2xl backdrop-blur-md sm:h-32 sm:w-32"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#0B3D2E]/60">
                  <FaShieldAlt
                    className="text-[#A7F3D0]"
                    size={42}
                    aria-hidden="true"
                  />
                </div>
              </motion.div>

              {/* Technical markers */}

              <span className="absolute left-[18%] top-[25%] h-2 w-2 rounded-full bg-[#F97316]" />

              <span className="absolute right-[19%] top-[30%] h-2 w-2 rounded-full bg-[#A7F3D0]" />

              <span className="absolute bottom-[32%] left-[25%] h-1.5 w-1.5 rounded-full bg-[#A7F3D0]" />

              <span className="absolute bottom-[29%] right-[24%] h-2 w-2 rounded-full bg-[#F97316]" />

              {/* Small technical labels */}

              <div className="absolute left-6 top-6 rounded-xl border border-white/10 bg-black/10 px-4 py-3 backdrop-blur-md">
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#A7F3D0]">
                  Humanitarian
                </p>

                <p className="mt-1 text-xs text-white/60">Mine Action</p>
              </div>

              <div className="absolute right-6 top-6 rounded-xl border border-white/10 bg-black/10 px-4 py-3 text-right backdrop-blur-md">
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#F97316]">
                  EOD
                </p>

                <p className="mt-1 text-xs text-white/60">Safe Response</p>
              </div>

              {/* Bottom information panel */}

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-[#071F17]/70 p-5 backdrop-blur-md">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#087B5A]/30 text-[#A7F3D0]">
                    <FaShieldAlt size={16} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#A7F3D0]">
                      Safety • Expertise • Protection
                    </p>

                    <p className="mt-1.5 text-sm leading-6 text-white/65">
                      Supporting safer communities through humanitarian
                      mine-action activities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
