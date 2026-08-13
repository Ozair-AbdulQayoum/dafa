import React from "react";
import { motion } from "framer-motion";
import {
  FaHandsHelping,
  FaUsers,
  FaHandshake,
  FaHome,
  FaArrowRight,
} from "react-icons/fa";

const responseAreas = [
  {
    icon: FaHandsHelping,
    number: "01",
    title: "Emergency Response",
    description:
      "Supporting communities and humanitarian partners during emergencies through coordinated and timely assistance.",
    accent: "#F97316",
  },
  {
    icon: FaUsers,
    number: "02",
    title: "Community Support",
    description:
      "Working closely with affected communities to identify urgent needs and strengthen local response capacity.",
    accent: "#087B5A",
  },
  {
    icon: FaHandshake,
    number: "03",
    title: "Humanitarian Coordination",
    description:
      "Coordinating with authorities, humanitarian organizations, and partners to support effective emergency operations.",
    accent: "#2563EB",
  },
  {
    icon: FaHome,
    number: "04",
    title: "Recovery Support",
    description:
      "Helping communities move toward safer and more resilient conditions following emergencies and disasters.",
    accent: "#087B5A",
  },
];

export default function DisasterImpact() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28">
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-48 top-20 h-[420px] w-[420px] rounded-full bg-[#087B5A]/5 blur-3xl" />

        <div className="absolute -right-48 bottom-0 h-[420px] w-[420px] rounded-full bg-[#F97316]/5 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(#0B3D2E 1px, transparent 1px), linear-gradient(90deg, #0B3D2E 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-9 rounded-full bg-[#F97316]" />

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#087B5A] sm:text-sm">
              Our Response Areas
            </p>

            <span className="h-[2px] w-9 rounded-full bg-[#F97316]" />
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Supporting Communities
            <span className="block text-[#087B5A]">When They Need It Most</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            DAFA works alongside communities and humanitarian partners to
            strengthen emergency response, coordination, and recovery support.
          </p>
        </motion.div>

        {/* ================= RESPONSE CARDS ================= */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {responseAreas.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true, margin: "-80px" }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-xl"
              >
                {/* Accent line */}
                <div
                  className="absolute left-0 top-0 h-1 w-full opacity-80"
                  style={{ backgroundColor: item.accent }}
                />

                {/* Number */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-extrabold tracking-[0.18em]"
                    style={{ color: item.accent }}
                  >
                    {item.number}
                  </span>

                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${item.accent}12`,
                      color: item.accent,
                    }}
                  >
                    <Icon className="text-lg" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="mt-8 text-xl font-bold leading-snug tracking-tight text-[#0F172A] transition-colors duration-300 group-hover:text-[#087B5A]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>

                {/* Bottom */}
                <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                  <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400">
                    DAFA Response
                  </span>

                  <span
                    className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 group-hover:translate-x-1"
                    style={{
                      backgroundColor: `${item.accent}10`,
                      color: item.accent,
                    }}
                  >
                    <FaArrowRight size={11} />
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* ================= IMPACT STRIP ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          viewport={{ once: true }}
          className="mt-12 overflow-hidden rounded-3xl bg-[#0B3D2E] shadow-xl"
        >
          <div className="grid md:grid-cols-3">
            {/* Stat 1 */}
            <div className="relative p-7 sm:p-8">
              <div className="absolute right-0 top-1/2 hidden h-16 w-px -translate-y-1/2 bg-white/10 md:block" />

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#A7F3D0]">
                Approach
              </p>

              <p className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                Community
                <span className="text-[#F97316]"> First</span>
              </p>

              <p className="mt-2 text-sm leading-6 text-white/60">
                Response centered around local needs and priorities.
              </p>
            </div>

            {/* Stat 2 */}
            <div className="relative p-7 sm:p-8">
              <div className="absolute right-0 top-1/2 hidden h-16 w-px -translate-y-1/2 bg-white/10 md:block" />

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#A7F3D0]">
                Coordination
              </p>

              <p className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                Humanitarian
                <span className="text-[#F97316]"> Partners</span>
              </p>

              <p className="mt-2 text-sm leading-6 text-white/60">
                Working together for stronger emergency response.
              </p>
            </div>

            {/* Stat 3 */}
            <div className="p-7 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#A7F3D0]">
                Focus
              </p>

              <p className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                Safer
                <span className="text-[#F97316]"> Communities</span>
              </p>

              <p className="mt-2 text-sm leading-6 text-white/60">
                Supporting resilience before, during, and after emergencies.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
