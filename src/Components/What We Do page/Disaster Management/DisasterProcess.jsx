import React from "react";
import { motion } from "framer-motion";
import {
  FaClipboardCheck,
  FaHandshake,
  FaHandsHelping,
  FaHome,
  FaArrowRight,
} from "react-icons/fa";

const responseSteps = [
  {
    number: "01",
    title: "Assess",
    icon: FaClipboardCheck,
    description:
      "DAFA teams assess the situation, identify urgent needs, and understand the risks affecting communities and humanitarian operations.",
  },
  {
    number: "02",
    title: "Coordinate",
    icon: FaHandshake,
    description:
      "We coordinate with communities, authorities, humanitarian partners, and relevant organizations to organize an effective response.",
  },
  {
    number: "03",
    title: "Respond",
    icon: FaHandsHelping,
    description:
      "DAFA supports coordinated emergency activities and helps deliver practical assistance where communities need it most.",
  },
  {
    number: "04",
    title: "Recover",
    icon: FaHome,
    description:
      "Our support contributes to safer communities, restored access, and stronger local capacity to recover from emergencies.",
  },
];

export default function DisasterProcess() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#087B5A]/5 blur-3xl" />

        <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#F97316]/5 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(#0B3D2E 1px, transparent 1px), linear-gradient(90deg, #0B3D2E 1px, transparent 1px)",
              backgroundSize: "55px 55px",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-9 rounded-full bg-[#F97316]" />

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#087B5A] sm:text-sm">
              Our Response Approach
            </p>

            <span className="h-[2px] w-9 rounded-full bg-[#F97316]" />
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Supporting Communities
            <span className="block text-[#087B5A]">Through Every Stage</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            DAFA works with humanitarian partners and communities to support
            practical, coordinated responses during emergencies and help
            communities move toward recovery.
          </p>
        </motion.div>

        {/* ================= PROCESS ================= */}
        <div className="relative mt-16 lg:mt-20">
          {/* Connecting line */}
          <div className="pointer-events-none absolute left-[12%] right-[12%] top-12 hidden h-px bg-gradient-to-r from-[#087B5A]/10 via-[#087B5A]/30 to-[#F97316]/20 lg:block" />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {responseSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -7 }}
                  className="group relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#087B5A]/25 hover:shadow-xl sm:p-7"
                >
                  {/* Number + Icon */}
                  <div className="relative flex items-center justify-between">
                    <span className="text-sm font-black tracking-[0.15em] text-[#F97316]">
                      {step.number}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#087B5A]/10 text-[#087B5A] transition-all duration-300 group-hover:bg-[#087B5A] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#087B5A]/20">
                      <Icon size={20} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mt-7 text-xl font-extrabold tracking-tight text-[#0F172A] transition-colors duration-300 group-hover:text-[#087B5A]">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>

                  {/* Bottom indicator */}
                  <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-400 transition-colors duration-300 group-hover:text-[#087B5A]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#F97316]" />
                    DAFA Response
                  </div>

                  {/* Hover accent */}
                  <div className="absolute bottom-0 left-6 right-6 h-1 scale-x-0 rounded-full bg-[#087B5A] transition-transform duration-300 group-hover:scale-x-100" />
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* ================= BOTTOM MESSAGE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-12 rounded-3xl border border-[#087B5A]/10 bg-[#0B3D2E] p-7 text-white shadow-xl sm:p-9"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A7F3D0]">
                Community-Centered Response
              </p>

              <h3 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
                Working together when communities need support most.
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/70 sm:text-base">
                DAFA works alongside communities and humanitarian partners to
                strengthen coordinated emergency support and safer recovery.
              </p>
            </div>

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F97316] text-white shadow-lg shadow-black/10">
              <FaArrowRight size={15} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
