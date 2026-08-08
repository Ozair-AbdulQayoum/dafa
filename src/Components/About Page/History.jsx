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
    <section className="relative overflow-hidden bg-[#0B3D2E] py-20 sm:py-24 lg:py-28">
      {/* Decorative Background */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#A7F3D0]/10 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#0284C7]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-[#A7F3D0]">
            Our Journey
          </span>

          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Our <span className="text-[#A7F3D0]">History</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-green-50/75 sm:text-lg">
            For decades, DAFA has remained committed to humanitarian mine action
            and supporting communities affected by explosive hazards.
          </p>
        </motion.div>

        {/* ================= TIMELINE ================= */}

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute bottom-0 left-5 top-0 w-px bg-white/15 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-16">
            {milestones.map((item, index) => {
              const Icon = item.icon;
              const isRight = index % 2 !== 0;

              return (
                <motion.div
                  key={item.year}
                  initial={{
                    opacity: 0,
                    x: isRight ? 50 : -50,
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
                    duration: 0.7,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative grid md:grid-cols-2 md:gap-16"
                >
                  {/* ================= MOBILE / LEFT DOT ================= */}

                  <div className="absolute left-5 top-2 z-20 -translate-x-1/2">
                    <motion.div
                      whileInView={{
                        scale: [0.7, 1.15, 1],
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08 + 0.2,
                      }}
                      className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-[#0B3D2E] bg-[#A7F3D0] text-[#0B3D2E] shadow-lg"
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
                    <span className="text-2xl font-bold text-[#A7F3D0] sm:text-3xl">
                      {item.year}
                    </span>
                  </div>

                  {/* ================= CONTENT ================= */}

                  <div
                    className={`mt-3 pl-14 md:mt-0 md:pl-0 ${
                      isRight ? "md:order-1 md:text-right" : "md:text-left"
                    }`}
                  >
                    <div
                      className={`rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition duration-300 hover:border-[#A7F3D0]/30 hover:bg-white/10 sm:p-7 ${
                        isRight ? "md:ml-auto" : ""
                      } max-w-xl`}
                    >
                      <h3 className="text-xl font-bold text-white sm:text-2xl">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-green-50/70 sm:text-base">
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
          className="mx-auto mt-16 max-w-3xl text-center"
        >
          <p className="text-sm leading-7 text-green-50/60 sm:text-base">
            Building on decades of humanitarian experience, DAFA continues
            working toward safer communities and a safer future for Afghanistan.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
