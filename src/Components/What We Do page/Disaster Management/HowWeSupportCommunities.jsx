import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaHandsHelping,
  FaPeopleCarry,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";

const supportAreas = [
  {
    icon: FaHandsHelping,
    title: "Emergency Coordination",
    description:
      "Working with communities and humanitarian partners to coordinate timely support during emergencies.",
  },
  {
    icon: FaUsers,
    title: "Community Assistance",
    description:
      "Supporting affected communities with practical assistance focused on safety, dignity, and immediate needs.",
  },
  {
    icon: FaShieldAlt,
    title: "Humanitarian Support",
    description:
      "Providing coordinated humanitarian assistance that helps communities respond to difficult situations.",
  },
  {
    icon: FaPeopleCarry,
    title: "Recovery & Resilience",
    description:
      "Helping communities strengthen their ability to recover and build safer, more resilient environments.",
  },
];

export default function HowWeSupportCommunities() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#087B5A]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#F97316]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================= MAIN GRID ================= */}

        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          {/* ================= IMAGE ================= */}

          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] bg-[#0B3D2E] shadow-xl">
              {/* Replace with authentic DAFA image */}
              <img
                src="/images/disaster-management-support.jpg"
                alt="DAFA humanitarian disaster management support"
                className="h-[500px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[560px]"
              />

              {/* Image overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D2E]/80 via-[#0B3D2E]/10 to-transparent" />

              {/* Top label */}

              <div className="absolute left-6 top-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#0B3D2E]/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-[#F97316]" />
                  Community Support
                </span>
              </div>

              {/* Bottom information */}

              <div className="absolute bottom-6 left-6 right-6 sm:bottom-7 sm:left-7 sm:right-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#A7F3D0]">
                  Disaster Management
                </p>

                <h3 className="mt-2 max-w-md text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                  Supporting communities through challenging times
                </h3>
              </div>
            </div>

            {/* Floating accent card */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.35,
              }}
              viewport={{ once: true }}
              className="absolute -bottom-6 right-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:-right-6 sm:p-5"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F97316]/10 text-[#F97316]">
                  <FaHandsHelping />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Our Focus
                  </p>

                  <p className="mt-0.5 text-sm font-bold text-[#0F172A]">
                    People & Communities
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ================= CONTENT ================= */}

          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
          >
            {/* Eyebrow */}

            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-9 rounded-full bg-[#F97316]" />

              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#087B5A] sm:text-sm">
                Our Approach
              </p>
            </div>

            {/* Heading */}

            <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.12] tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
              Practical Support When Communities
              <span className="block text-[#087B5A]">Need It Most</span>
            </h2>

            {/* Description */}

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              DAFA supports communities affected by emergencies and natural
              disasters through coordinated humanitarian action, community
              assistance, and practical support designed to help people stay
              safe and recover.
            </p>

            {/* Support Areas */}

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {supportAreas.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.08,
                    }}
                    viewport={{
                      once: true,
                    }}
                    whileHover={{
                      y: -4,
                    }}
                    className="group rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5 transition-all duration-300 hover:border-[#087B5A]/20 hover:bg-white hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A] transition-colors duration-300 group-hover:bg-[#087B5A] group-hover:text-white">
                        <Icon size={17} />
                      </div>

                      <div>
                        <h3 className="text-[15px] font-bold text-[#0F172A]">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Learn More */}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.4,
              }}
              viewport={{ once: true }}
              className="mt-9"
            >
              <a
                href="#disaster-activities"
                className="group inline-flex items-center gap-3 rounded-xl bg-[#087B5A] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#087B5A]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B3D2E] hover:shadow-xl"
              >
                <span>Explore Our Support</span>

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                  <FaArrowRight
                    size={11}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
