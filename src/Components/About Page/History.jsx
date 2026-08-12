import React from "react";
import { motion } from "framer-motion";
import {
  FaFlag,
  FaUsers,
  FaHandsHelping,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";

const milestones = [
  {
    year: "1990",
    title: "The Beginning",
    text: "DAFA began its humanitarian work with a commitment to reducing the risks posed by explosive hazards and supporting affected communities.",
    icon: FaFlag,
  },
  {
    year: "1990s",
    title: "Growing Mine Action",
    text: "DAFA expanded its humanitarian mine action activities and developed dedicated teams to support communities affected by explosive hazards.",
    icon: FaUsers,
  },
  {
    year: "2000s",
    title: "Community Support",
    text: "The organization continued strengthening its field operations and working closely with communities to reduce risks and improve safety.",
    icon: FaHandsHelping,
  },
  {
    year: "2010s",
    title: "Strengthening Operations",
    text: "DAFA continued developing its operational capabilities and expanding its humanitarian response across different areas of Afghanistan.",
    icon: FaShieldAlt,
  },
  {
    year: "Today",
    title: "Continuing the Mission",
    text: "DAFA continues working toward safer communities through humanitarian mine action, dedicated field teams, and community-focused programs.",
    icon: FaArrowRight,
  },
];

export default function History() {
  return (
    <section className="relative overflow-hidden bg-[#0B3D2E] py-16 sm:py-20 lg:py-24">
      {/* ================= DECORATIVE BACKGROUND ================= */}

      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#A7F3D0]/10 blur-3xl" />

      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#0284C7]/10 blur-3xl" />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-16"
        >
          {/* Section Label */}

          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#A7F3D0] sm:text-sm">
            Our Journey
          </span>

          {/* Heading */}

          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Our <span className="text-[#A7F3D0]">History</span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-green-50/75 sm:mt-5 sm:text-base sm:leading-8 lg:text-lg">
            For decades, DAFA has remained committed to humanitarian mine action
            and supporting communities affected by explosive hazards.
          </p>
        </motion.div>

        {/* ================= TIMELINE ================= */}

        <div className="relative">
          {/* Timeline Line */}

          <div className="absolute bottom-0 left-5 top-0 w-px bg-white/15 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10 sm:space-y-12 md:space-y-16">
            {milestones.map((item, index) => {
              const Icon = item.icon;
              const isRight = index % 2 !== 0;

              return (
                <motion.div
                  key={item.year}
                  initial={{
                    opacity: 0,
                    x: isRight ? 40 : -40,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative grid md:grid-cols-2 md:gap-16"
                >
                  {/* ================= TIMELINE ICON ================= */}

                  <div className="absolute left-5 top-1 z-20 -translate-x-1/2">
                    <motion.div
                      whileInView={{
                        scale: [0.75, 1.1, 1],
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.08 + 0.15,
                      }}
                      className="flex h-9 w-9 items-center justify-center rounded-full border-4 border-[#0B3D2E] bg-[#A7F3D0] text-[#0B3D2E] shadow-lg sm:h-10 sm:w-10"
                    >
                      <Icon size={14} />
                    </motion.div>
                  </div>

                  {/* ================= YEAR ================= */}

                  <div
                    className={`pl-14 md:pl-0 ${
                      isRight ? "md:order-2 md:text-left" : "md:text-right"
                    }`}
                  >
                    <span className="text-xl font-bold tracking-tight text-[#A7F3D0] sm:text-2xl lg:text-3xl">
                      {item.year}
                    </span>
                  </div>

                  {/* ================= CONTENT ================= */}

                  <div
                    className={`mt-2 pl-14 md:mt-0 md:pl-0 ${
                      isRight ? "md:order-1 md:text-right" : "md:text-left"
                    }`}
                  >
                    <div
                      className={`max-w-xl rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#A7F3D0]/30 hover:bg-white/10 sm:p-6 ${
                        isRight ? "md:ml-auto" : ""
                      }`}
                    >
                      {/* Title */}

                      <h3 className="text-lg font-bold leading-snug text-white sm:text-xl">
                        {item.title}
                      </h3>

                      {/* Description */}

                      <p className="mt-2.5 text-sm leading-7 text-green-50/70 sm:mt-3 sm:text-base sm:leading-7">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ================= BOTTOM STATEMENT ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-14 max-w-3xl text-center sm:mt-16"
        >
          <div className="h-px w-full bg-white/10" />

          <p className="mt-7 text-sm leading-7 text-green-50/60 sm:mt-8 sm:text-base sm:leading-8">
            Building on decades of humanitarian experience, DAFA continues
            working toward safer communities and a safer future for Afghanistan.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
