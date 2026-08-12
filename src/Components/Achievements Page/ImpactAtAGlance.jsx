import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaCalendarAlt,
  FaMapMarkedAlt,
  FaUsers,
  FaGlobeAsia,
  FaRulerCombined,
  FaProjectDiagram,
  FaBomb,
  FaShieldAlt,
  FaGraduationCap,
  FaUserShield,
  FaSearch,
  FaMapMarkerAlt,
} from "react-icons/fa";

const achievementGroups = [
  {
    number: "01",
    title: "Humanitarian Impact",
    description:
      "A long-standing contribution to humanitarian mine action, civilian protection, and safer communities across Afghanistan.",
    stats: [
      {
        icon: FaCalendarAlt,
        value: 36,
        suffix: "+",
        label: "Years of Experience",
        description: "Humanitarian mine action experience",
      },
      {
        icon: FaMapMarkedAlt,
        value: 32,
        suffix: "+",
        label: "Provinces Reached",
        description: "Areas reached across Afghanistan",
      },
      {
        icon: FaUsers,
        value: 12,
        suffix: "M+",
        label: "People Benefited",
        description: "People supported through humanitarian work",
      },
      {
        icon: FaGlobeAsia,
        value: "Thousands",
        suffix: "+",
        label: "Communities Supported",
        description: "Communities benefiting from safer environments",
      },
    ],
  },

  {
    number: "02",
    title: "Operational Achievements",
    description:
      "Operational achievements demonstrating DAFA's contribution to reducing explosive hazards and releasing contaminated land.",
    stats: [
      {
        icon: FaRulerCombined,
        value: 323,
        suffix: "M+ m²",
        label: "Land Cleared",
        description: "Land cleared through humanitarian operations",
      },
      {
        icon: FaProjectDiagram,
        value: 118,
        suffix: "+",
        label: "Projects Completed",
        description: "Humanitarian mine-action projects",
      },
      {
        icon: FaBomb,
        value: null,
        suffix: "",
        label: "Minefields Cleared",
        description: "Official figure pending verification",
        verified: true,
      },
      {
        icon: FaShieldAlt,
        value: null,
        suffix: "",
        label: "Mines & ERW Removed",
        description: "Official figure pending verification",
        verified: true,
      },
    ],
  },

  {
    number: "03",
    title: "Community & Capacity",
    description:
      "Achievements supporting community awareness, technical capacity, field operations, and long-term humanitarian impact.",
    stats: [
      {
        icon: FaGraduationCap,
        value: null,
        suffix: "",
        label: "EORE Beneficiaries",
        description: "Official figure pending verification",
        verified: true,
      },
      {
        icon: FaUserShield,
        value: null,
        suffix: "",
        label: "Field Teams",
        description: "Official figure pending verification",
        verified: true,
      },
      {
        icon: FaSearch,
        value: null,
        suffix: "",
        label: "Technical Surveys",
        description: "Official figure pending verification",
        verified: true,
      },
      {
        icon: FaMapMarkerAlt,
        value: null,
        suffix: "",
        label: "Land Released",
        description: "Official figure pending verification",
        verified: true,
      },
    ],
  },
];

function Counter({ value, suffix, verified }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView || verified || typeof value !== "number") return;

    const duration = 1800;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easedProgress * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, verified]);

  if (verified || value === null) {
    return (
      <span
        ref={ref}
        className="text-3xl font-extrabold tracking-tight text-slate-300 sm:text-4xl"
      >
        —
      </span>
    );
  }

  if (typeof value === "string") {
    return (
      <span
        ref={ref}
        className="text-3xl font-extrabold tracking-tight sm:text-4xl"
      >
        {value}
        {suffix}
      </span>
    );
  }

  return (
    <span
      ref={ref}
      className="text-3xl font-extrabold tracking-tight sm:text-4xl"
    >
      {count}
      {suffix}
    </span>
  );
}

export default function ImpactAtAGlance() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-28">
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#087B5A]/5 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#F97316]/5 blur-3xl" />
      </div>

      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Section Label */}

          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#087B5A]/10 bg-white px-4 py-2 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F97316]" />

            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#087B5A]">
              Impact at a Glance
            </span>
          </div>

          {/* Heading */}

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            DAFA Achievements
            <span className="mt-1 block text-[#087B5A]">
              & Humanitarian Impact
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            More than three decades of humanitarian mine action, operational
            experience, and continued commitment to safer communities across
            Afghanistan.
          </p>
        </motion.div>

        {/* ================= ACHIEVEMENT GROUPS ================= */}

        <div className="mt-14 space-y-16 sm:mt-16 sm:space-y-20">
          {achievementGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                duration: 0.7,
                delay: groupIndex * 0.08,
              }}
            >
              {/* ================= GROUP HEADER ================= */}

              <div className="mb-7 flex flex-col gap-4 border-b border-slate-200 pb-6 sm:mb-8 sm:gap-5 md:flex-row md:items-end md:justify-between">
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="mt-1 text-xs font-bold tracking-[0.16em] text-[#F97316] sm:text-sm">
                    {group.number}
                  </span>

                  <div>
                    <h3 className="text-xl font-bold leading-tight text-[#0F172A] sm:text-2xl">
                      {group.title}
                    </h3>

                    <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
                      {group.description}
                    </p>
                  </div>
                </div>

                {/* Decorative Element */}

                <div className="hidden items-center gap-2 sm:flex">
                  <span className="h-1 w-8 rounded-full bg-[#087B5A]" />
                  <span className="h-1 w-3 rounded-full bg-[#F97316]" />
                </div>
              </div>

              {/* ================= STAT CARDS ================= */}

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
                {group.stats.map((stat, index) => {
                  const Icon = stat.icon;

                  return (
                    <motion.div
                      key={stat.label}
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08,
                      }}
                      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#087B5A]/25 hover:shadow-lg sm:p-7"
                    >
                      {/* Top Accent */}

                      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#087B5A] to-[#F97316] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      {/* Background Number */}

                      <span className="pointer-events-none absolute right-4 top-3 text-5xl font-black text-slate-100 transition-colors duration-300 group-hover:text-[#087B5A]/5">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* Icon */}

                      <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A] transition-all duration-300 group-hover:bg-[#0B3D2E] group-hover:text-white">
                        <Icon size={17} />
                      </div>

                      {/* Number */}

                      <div
                        className={`relative mt-6 ${
                          stat.verified ? "text-slate-300" : "text-[#0B3D2E]"
                        }`}
                      >
                        <Counter
                          value={stat.value}
                          suffix={stat.suffix}
                          verified={stat.verified}
                        />
                      </div>

                      {/* Label */}

                      <h4 className="relative mt-3 text-xs font-bold uppercase leading-5 tracking-[0.06em] text-[#0F172A] sm:text-sm">
                        {stat.label}
                      </h4>

                      {/* Description */}

                      <p className="relative mt-2 text-xs leading-6 text-slate-500">
                        {stat.description}
                      </p>

                      {/* Verified */}

                      {stat.verified && (
                        <div className="relative mt-4 flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />

                          <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-400">
                            Awaiting Verified Data
                          </span>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= BOTTOM FEATURE ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-16 overflow-hidden rounded-2xl bg-[#0B3D2E] sm:mt-20 sm:rounded-3xl"
        >
          <div className="relative px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
            {/* Decorative Glow */}

            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#F97316]/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#A7F3D0]/10 blur-3xl" />

            <div className="relative z-10 flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              {/* Text */}

              <div className="max-w-3xl">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F97316]" />

                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#A7F3D0]">
                    36 Years of Service
                  </span>
                </div>

                <h3 className="mt-3 text-xl font-bold leading-tight text-white sm:text-2xl">
                  Continuing the commitment to safer communities.
                </h3>

                <p className="mt-3 text-sm leading-7 text-green-50/70 sm:text-base">
                  These achievements represent DAFA's broader humanitarian
                  mine-action contribution. Additional figures can be added as
                  officially verified program data becomes available.
                </p>
              </div>

              {/* Side Badge */}

              <div className="flex shrink-0 items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm sm:gap-4 sm:rounded-2xl sm:px-6 sm:py-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F97316]/15 text-[#FDBA74]">
                  <FaShieldAlt size={18} />
                </div>

                <div>
                  <p className="text-xl font-bold text-white sm:text-2xl">
                    36+
                  </p>

                  <p className="text-xs text-green-50/60">Years of Impact</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= DATA NOTE ================= */}

        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto mt-6 max-w-3xl text-center text-[11px] leading-5 text-slate-400 sm:mt-8"
        >
          Achievement figures should be maintained and updated using officially
          verified DAFA program data and approved organizational records.
        </motion.p>
      </div>
    </section>
  );
}
