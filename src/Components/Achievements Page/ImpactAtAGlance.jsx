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
  FaArrowUp,
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
        className="text-4xl font-black tracking-tight text-slate-300 sm:text-5xl"
      >
        —
      </span>
    );
  }

  if (typeof value === "string") {
    return (
      <span
        ref={ref}
        className="text-4xl font-black tracking-tight sm:text-5xl"
      >
        {value}
        {suffix}
      </span>
    );
  }

  return (
    <span ref={ref} className="text-4xl font-black tracking-tight sm:text-5xl">
      {count}
      {suffix}
    </span>
  );
}

export default function ImpactAtAGlance() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-24 sm:py-28">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#087B5A]/5 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#F97316]/5 blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-px w-[80%] -translate-x-1/2 bg-slate-200/60" />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =================================================
            SECTION HEADER
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Label */}

          <div className="inline-flex items-center gap-3 rounded-full border border-[#087B5A]/10 bg-white px-4 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#F97316]" />

            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#087B5A]">
              Impact at a Glance
            </span>
          </div>

          {/* Heading */}

          <h2 className="mt-6 text-4xl font-black tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl">
            DAFA Achievements
            <span className="block text-[#087B5A]">& Humanitarian Impact</span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-500 sm:text-lg">
            More than three decades of humanitarian mine action, operational
            experience, and continued commitment to safer communities across
            Afghanistan.
          </p>
        </motion.div>

        {/* =================================================
            ACHIEVEMENT GROUPS
        ================================================== */}

        <div className="mt-20 space-y-20">
          {achievementGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{
                opacity: 0,
                y: 35,
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
                duration: 0.8,
                delay: groupIndex * 0.08,
              }}
            >
              {/* ==========================================
                  GROUP HEADER
              =========================================== */}

              <div className="mb-8 flex flex-col gap-5 border-b border-slate-200 pb-7 sm:flex-row sm:items-end sm:justify-between">
                {/* Left */}

                <div className="flex items-start gap-4">
                  {/* Number */}

                  <span className="mt-1 text-sm font-black tracking-widest text-[#F97316]">
                    {group.number}
                  </span>

                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl">
                      {group.title}
                    </h3>

                    <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-500">
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

              {/* ==========================================
                  STAT CARDS
              =========================================== */}

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {group.stats.map((stat, index) => {
                  const Icon = stat.icon;

                  return (
                    <motion.div
                      key={stat.label}
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
                        duration: 0.55,
                        delay: index * 0.08,
                      }}
                      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#087B5A]/25 hover:shadow-xl"
                    >
                      {/* Top Accent */}

                      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#087B5A] via-[#087B5A] to-[#F97316] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      {/* Background Number */}

                      <span className="pointer-events-none absolute right-4 top-3 text-6xl font-black text-slate-100 transition-colors duration-300 group-hover:text-[#087B5A]/5">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* Icon */}

                      <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A] transition-all duration-300 group-hover:bg-[#0B3D2E] group-hover:text-white">
                        <Icon size={18} />
                      </div>

                      {/* Number */}

                      <div
                        className={`relative mt-7 ${
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

                      <h4 className="relative mt-4 text-sm font-bold uppercase tracking-[0.08em] text-[#0F172A]">
                        {stat.label}
                      </h4>

                      {/* Description */}

                      <p className="relative mt-2 text-xs leading-6 text-slate-500">
                        {stat.description}
                      </p>

                      {/* Verified */}

                      {stat.verified && (
                        <div className="relative mt-5 flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />

                          <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                            Awaiting Verified Data
                          </span>
                        </div>
                      )}

                      {/* Hover Arrow */}

                      {!stat.verified && (
                        <div className="absolute bottom-6 right-6 flex h-7 w-7 items-center justify-center rounded-full bg-slate-50 text-slate-300 opacity-0 transition-all duration-300 group-hover:bg-[#087B5A]/10 group-hover:text-[#087B5A] group-hover:opacity-100">
                          <FaArrowUp size={10} className="rotate-45" />
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* =================================================
            BOTTOM FEATURE
        ================================================== */}

        <motion.div
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
          }}
          transition={{
            duration: 0.8,
          }}
          className="mt-20 overflow-hidden rounded-3xl bg-[#0B3D2E]"
        >
          <div className="relative px-7 py-10 sm:px-12 sm:py-12">
            {/* Decorative Glow */}

            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#F97316]/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#A7F3D0]/10 blur-3xl" />

            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              {/* Text */}

              <div className="max-w-3xl">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#F97316]" />

                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A7F3D0]">
                    36 Years of Service
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                  Continuing the commitment to safer communities.
                </h3>

                <p className="mt-4 text-sm leading-7 text-green-50/60 sm:text-base">
                  These achievements represent DAFA's broader humanitarian
                  mine-action contribution. Additional figures can be added as
                  officially verified program data becomes available.
                </p>
              </div>

              {/* Side Badge */}

              <div className="flex shrink-0 items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F97316]/15 text-[#FDBA74]">
                  <FaShieldAlt size={20} />
                </div>

                <div>
                  <p className="text-2xl font-black text-white">36+</p>

                  <p className="text-xs font-medium text-green-50/50">
                    Years of Impact
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =================================================
            DATA NOTE
        ================================================== */}

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
          className="mx-auto mt-8 max-w-3xl text-center text-[11px] leading-6 text-slate-400"
        >
          Achievement figures should be maintained and updated using officially
          verified DAFA program data and approved organizational records.
        </motion.p>
      </div>
    </section>
  );
}
