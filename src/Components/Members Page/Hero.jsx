import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaUserTie, FaHandshake, FaShieldAlt } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0B3D2E]">
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#A7F3D0]/10 blur-3xl" />

        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#0284C7]/10 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.025]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto flex min-h-[500px] w-full max-w-7xl items-center px-5 py-20 sm:px-8 md:min-h-[560px] md:py-24 lg:px-10">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* ================= LEFT ================= */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Label */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#A7F3D0]/10 text-[#A7F3D0]">
                <FaUsers size={15} />
              </span>

              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A7F3D0] sm:text-sm">
                Our Team
              </span>
            </motion.div>

            {/* Heading */}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              The People Behind
              <span className="block text-[#A7F3D0]">DAFA</span>
            </motion.h1>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-7 max-w-2xl text-base leading-8 text-green-50/70 sm:text-lg"
            >
              DAFA is supported by dedicated professionals, technical
              specialists, field personnel, and support teams who work together
              to deliver humanitarian mine action and help protect communities
              across Afghanistan.
            </motion.p>

            {/* Supporting Points */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-green-50/80 backdrop-blur-sm">
                <FaShieldAlt className="text-[#A7F3D0]" size={13} />
                Dedicated Professionals
              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-green-50/80 backdrop-blur-sm">
                <FaHandshake className="text-[#A7F3D0]" size={13} />
                Working Together
              </div>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT VISUAL ================= */}

          <motion.div
            initial={{ opacity: 0, x: 35, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative h-[330px] w-full max-w-[430px] sm:h-[370px]">
              {/* Connecting Lines */}

              <div className="absolute left-1/2 top-1/2 h-px w-[72%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#A7F3D0]/30 to-transparent" />

              <div className="absolute left-1/2 top-1/2 h-[72%] w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-[#A7F3D0]/30 to-transparent" />

              {/* Center */}

              <motion.div
                animate={{
                  scale: [1, 1.04, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 z-20 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#A7F3D0]/25 bg-[#0F4B38] text-[#A7F3D0] shadow-xl"
              >
                <div className="text-center">
                  <FaUsers className="mx-auto" size={30} />

                  <p className="mt-2 text-[10px] font-bold uppercase tracking-widest">
                    DAFA Team
                  </p>
                </div>
              </motion.div>

              {/* Team Areas */}

              {[
                {
                  icon: FaUserTie,
                  label: "Leadership",
                  position: "left-2 top-8",
                },
                {
                  icon: FaShieldAlt,
                  label: "Field Teams",
                  position: "right-2 top-8",
                },
                {
                  icon: FaHandshake,
                  label: "Support Staff",
                  position: "left-2 bottom-8",
                },
                {
                  icon: FaUsers,
                  label: "Technical Teams",
                  position: "right-2 bottom-8",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    initial={{
                      opacity: 0,
                      scale: 0.7,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.55 + index * 0.12,
                    }}
                    whileHover={{
                      y: -5,
                    }}
                    className={`absolute ${item.position} z-10 flex w-36 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-3 backdrop-blur-md`}
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#A7F3D0]/10 text-[#A7F3D0]">
                      <Icon size={15} />
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-green-50/40">
                        Team
                      </p>

                      <p className="mt-0.5 text-xs font-semibold text-white">
                        {item.label}
                      </p>
                    </div>
                  </motion.div>
                );
              })}

              {/* Rotating Decorative Ring */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#A7F3D0]/10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
