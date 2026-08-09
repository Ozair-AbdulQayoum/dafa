import React from "react";
import { motion } from "framer-motion";
import {
  FaExclamationTriangle,
  FaShieldAlt,
  FaUsers,
  FaSearch,
} from "react-icons/fa";

export default function WhatIsIEDResponse() {
  const keyPoints = [
    {
      icon: FaSearch,
      title: "Hazard Identification",
      description:
        "Supporting the identification and assessment of areas affected by suspected improvised explosive devices.",
    },
    {
      icon: FaShieldAlt,
      title: "Safe Response",
      description:
        "Applying appropriate humanitarian procedures to help reduce risks associated with explosive hazards.",
    },
    {
      icon: FaUsers,
      title: "Community Protection",
      description:
        "Helping protect communities by reducing the threat posed by explosive hazards and supporting safer environments.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#087B5A]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#F97316]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#F97316]" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
              Understanding IED Response
            </span>

            <span className="h-px w-10 bg-[#F97316]" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Responding to
            <span className="block text-[#087B5A]">
              Improvised Explosive Devices
            </span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-500 sm:text-lg">
            IED response is an important part of humanitarian mine action,
            helping address explosive hazards and reduce risks to people,
            communities, and infrastructure.
          </p>
        </motion.div>

        {/* ================= CONTENT ================= */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* LEFT — VISUAL PLACEHOLDER */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative Shape */}
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-2xl border border-[#087B5A]/20" />

            <div className="relative overflow-hidden rounded-[2rem] bg-[#06281E] p-2 shadow-[0_25px_70px_rgba(15,23,42,0.12)]">
              <div className="relative flex min-h-[430px] items-center justify-center overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#0B3D2E] via-[#06281E] to-[#041F18]">
                {/* Background Glow */}
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#F97316]/10 blur-3xl" />

                <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#087B5A]/20 blur-3xl" />

                {/* Icon */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10 text-center"
                >
                  <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-[#F97316]/30 bg-[#F97316]/10">
                    <FaExclamationTriangle
                      size={42}
                      className="text-[#FDBA74]"
                    />
                  </div>

                  <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#A7F3D0]">
                    Explosive Hazard Response
                  </p>

                  <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-white/50">
                    Humanitarian action focused on reducing risks and supporting
                    safer communities.
                  </p>
                </motion.div>

                {/* Bottom Label */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-4 py-3 backdrop-blur-md">
                  <span className="text-xs font-semibold text-white/70">
                    Humanitarian Mine Action
                  </span>

                  <span className="h-2 w-2 rounded-full bg-[#F97316]" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#087B5A]">
              Our Role
            </p>

            <h3 className="mt-3 text-2xl font-bold leading-tight text-[#0F172A] sm:text-3xl">
              Reducing the threat of explosive hazards
            </h3>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Improvised explosive devices can create serious risks for
              communities, humanitarian personnel, and public infrastructure.
              Humanitarian response activities help identify affected areas and
              support efforts to reduce these risks.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              Through trained personnel, established procedures, and
              coordination with relevant stakeholders, DAFA contributes to
              humanitarian efforts aimed at making affected areas safer for
              communities across Afghanistan.
            </p>

            {/* Key Points */}
            <div className="mt-8 space-y-4">
              {keyPoints.map((point, index) => {
                const Icon = point.icon;

                return (
                  <motion.div
                    key={point.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="group flex gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#087B5A]/20 hover:bg-white hover:shadow-md"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A] transition-colors duration-300 group-hover:bg-[#087B5A] group-hover:text-white">
                      <Icon size={17} />
                    </div>

                    <div>
                      <h4 className="font-bold text-[#0F172A]">
                        {point.title}
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {point.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
