import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaUsers,
  FaProjectDiagram,
  FaMapMarkedAlt,
  FaMountain,
  FaArrowRight,
} from "react-icons/fa";

const achievements = [
  {
    icon: FaUsers,
    number: 12,
    suffix: "M+",
    title: "People Benefited",
    description: "Communities supported through humanitarian action.",
  },
  {
    icon: FaProjectDiagram,
    number: 118,
    suffix: "+",
    title: "Projects Completed",
    description: "Humanitarian mine-action projects delivered.",
  },
  {
    icon: FaMapMarkedAlt,
    number: 32,
    suffix: "+",
    title: "Provinces Reached",
    description: "Operations supporting communities across Afghanistan.",
  },
  {
    icon: FaMountain,
    number: 323,
    suffix: "M+ m²",
    title: "Land Cleared",
    description: "Land released from explosive hazards.",
  },
];

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

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
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-24 sm:py-28">
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#087B5A]/5 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#F97316]/5 blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-px w-[80%] -translate-x-1/2 bg-slate-200/50" />
      </div>

      {/* ================= CONTAINER ================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Label */}

          <div className="inline-flex items-center gap-3 rounded-full border border-[#087B5A]/10 bg-white px-4 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#F97316]" />

            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#087B5A]">
              Our Achievements
            </span>
          </div>

          {/* Heading */}

          <h2 className="mt-6 text-4xl font-black tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl">
            36 Years of Impact
            <span className="block text-[#087B5A]">Across Afghanistan</span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-500 sm:text-lg">
            Through decades of humanitarian mine action, DAFA has helped protect
            communities, clear explosive hazards, and create safer environments
            across Afghanistan.
          </p>
        </motion.div>

        {/* ================= STAT CARDS ================= */}

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
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
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-[#087B5A]/25 hover:shadow-xl"
              >
                {/* Top Accent */}

                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#087B5A] via-[#087B5A] to-[#F97316] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Background Number */}

                <span className="pointer-events-none absolute right-4 top-2 text-6xl font-black text-slate-100 transition-colors duration-300 group-hover:text-[#087B5A]/5">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}

                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A] transition-all duration-300 group-hover:bg-[#0B3D2E] group-hover:text-white">
                  <Icon size={19} />
                </div>

                {/* Counter */}

                <div className="relative mt-7 text-4xl font-black tracking-tight text-[#0B3D2E] sm:text-5xl">
                  <Counter value={item.number} suffix={item.suffix} />
                </div>

                {/* Title */}

                <h3 className="relative mt-4 text-sm font-bold uppercase tracking-[0.08em] text-[#0F172A]">
                  {item.title}
                </h3>

                {/* Description */}

                <p className="relative mt-2 text-xs leading-6 text-slate-500">
                  {item.description}
                </p>

                {/* Hover Arrow */}

                <div className="absolute bottom-6 right-6 flex h-7 w-7 items-center justify-center rounded-full bg-slate-50 text-slate-300 opacity-0 transition-all duration-300 group-hover:bg-[#087B5A]/10 group-hover:text-[#087B5A] group-hover:opacity-100">
                  <FaArrowRight size={10} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ================= BOTTOM FEATURE ================= */}

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
          className="mt-14 overflow-hidden rounded-3xl bg-[#0B3D2E]"
        >
          <div className="relative px-7 py-9 sm:px-10 sm:py-10">
            {/* Decorative Glow */}

            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#F97316]/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#A7F3D0]/10 blur-3xl" />

            <div className="relative z-10 flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              {/* Text */}

              <div className="max-w-3xl">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#F97316]" />

                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A7F3D0]">
                    36 Years of Service
                  </span>
                </div>

                <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                  A lasting humanitarian impact.
                </h3>

                <p className="mt-3 text-sm leading-7 text-green-50/60 sm:text-base">
                  These figures represent DAFA's contribution to humanitarian
                  mine action and safer communities across Afghanistan.
                </p>
              </div>

              {/* CTA */}

              <Link
                to="/achievements"
                className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-[#0B3D2E] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#A7F3D0]"
              >
                <span>View All Achievements</span>

                <FaArrowRight
                  size={11}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
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
          className="mx-auto mt-7 max-w-3xl text-center text-[11px] leading-6 text-slate-400"
        >
          Achievement figures should be maintained and updated using officially
          verified DAFA program data and approved organizational records.
        </motion.p>
      </div>
    </section>
  );
}
