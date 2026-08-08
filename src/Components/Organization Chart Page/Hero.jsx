import React from "react";
import { motion } from "framer-motion";
import {
  FaUserTie,
  FaUserCog,
  FaCalculator,
  FaTruck,
  FaTools,
} from "react-icons/fa";

const departments = [
  {
    name: "Administration",
    icon: FaUserCog,
    positions: ["HR / Admin Manager", "HR / Admin Officer"],
  },
  {
    name: "Finance",
    icon: FaCalculator,
    positions: ["Finance Manager", "Finance Officer"],
  },
  {
    name: "Logistics",
    icon: FaTruck,
    positions: [
      "Logistics Manager / Support Manager",
      "Logistics Officer",
      "Logistics Assistant",
      "Storekeeper",
    ],
  },
  {
    name: "Operations",
    icon: FaTools,
    positions: [
      "Operations Manager",
      "Operations Officer",
      "QA Manager",
      "QA Officer",
    ],
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#06281E]">
      {/* =====================================================
          DECORATIVE BACKGROUND
      ====================================================== */}

      <motion.div
        className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#A7F3D0]/10 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.35, 0.65, 0.35],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#0284C7]/10 blur-3xl"
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.25, 0.55, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.035]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
            className="mb-5 flex items-center justify-center gap-3"
          >
            <span className="h-2 w-2 rounded-full bg-[#A7F3D0]" />

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A7F3D0]">
              Organizational Structure
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
            className="text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl"
          >
            How DAFA Is
            <span className="block text-[#A7F3D0]">Organized</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
            className="mt-6 text-base leading-8 text-green-50/75 sm:text-lg"
          >
            DAFA's organizational structure brings together leadership and
            specialized departments working together to support effective
            humanitarian operations across Afghanistan.
          </motion.p>
        </motion.div>

        {/* =====================================================
            ORGANIZATIONAL STRUCTURE
        ====================================================== */}

        <div className="mt-16">
          {/* DIRECTOR */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#A7F3D0]/30 bg-[#0B3D2E] text-[#A7F3D0] shadow-xl">
              <FaUserTie size={26} />
            </div>

            <div className="mt-4 rounded-2xl border border-[#A7F3D0]/20 bg-white/10 px-8 py-4 text-center backdrop-blur-md">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A7F3D0]">
                Leadership
              </p>

              <h2 className="mt-1 text-xl font-bold text-white">Director</h2>
            </div>
          </motion.div>

          {/* MAIN CONNECTOR */}
          <div className="mx-auto mt-6 h-10 w-px bg-[#A7F3D0]/30" />

          {/* HORIZONTAL CONNECTOR */}
          <div className="relative hidden lg:block">
            <div className="absolute left-[12.5%] right-[12.5%] top-0 h-px bg-[#A7F3D0]/30" />

            {/* Connector drops */}
            <div className="absolute left-[12.5%] top-0 h-7 w-px bg-[#A7F3D0]/30" />
            <div className="absolute left-[37.5%] top-0 h-7 w-px bg-[#A7F3D0]/30" />
            <div className="absolute left-[62.5%] top-0 h-7 w-px bg-[#A7F3D0]/30" />
            <div className="absolute left-[87.5%] top-0 h-7 w-px bg-[#A7F3D0]/30" />
          </div>

          {/* =====================================================
              FOUR DEPARTMENTS — ONE ROW
          ====================================================== */}

          <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {departments.map((department, index) => {
              const Icon = department.icon;

              return (
                <motion.div
                  key={department.name}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.65 + index * 0.12,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-[#A7F3D0]/25 hover:bg-white/[0.09]"
                >
                  {/* Department Header */}
                  <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#A7F3D0]/10 text-[#A7F3D0]">
                      <Icon size={18} />
                    </div>

                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#A7F3D0]/60">
                        Department
                      </p>

                      <h3 className="text-base font-bold text-white">
                        {department.name}
                      </h3>
                    </div>
                  </div>

                  {/* Key Personnel */}
                  <div className="mt-5">
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-green-50/40">
                      Key Personnel
                    </p>

                    <div className="space-y-2.5">
                      {department.positions.map((position, positionIndex) => (
                        <motion.div
                          key={position}
                          initial={{
                            opacity: 0,
                            x: -8,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            duration: 0.4,
                            delay: 0.8 + index * 0.12 + positionIndex * 0.08,
                          }}
                          className="flex items-start gap-2.5 rounded-lg bg-black/10 px-3 py-2.5"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#A7F3D0]" />

                          <span className="text-sm leading-5 text-green-50/75">
                            {position}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Supporting Line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 1.2,
            }}
            className="mx-auto mt-10 flex max-w-xl items-center justify-center gap-3"
          >
            <span className="h-px flex-1 bg-[#A7F3D0]/15" />

            <span className="text-center text-xs uppercase tracking-[0.16em] text-green-50/35">
              Departments working together
            </span>

            <span className="h-px flex-1 bg-[#A7F3D0]/15" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
