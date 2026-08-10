import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaCalendarAlt,
  FaMapMarkedAlt,
  FaRulerCombined,
  FaUsers,
} from "react-icons/fa";

// ============================================================
// IMPACT DATA
// ============================================================

const impactStats = [
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
    description: "Communities across Afghanistan",
  },
  {
    icon: FaRulerCombined,
    value: 323,
    suffix: "M+",
    label: "Land Cleared",
    description: "Square metres of land cleared",
  },
  {
    icon: FaUsers,
    value: 12,
    suffix: "M+",
    label: "People Benefited",
    description: "People supported through our work",
  },
];

// ============================================================
// COUNTER
// ============================================================

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
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

// ============================================================
// PROJECT IMPACT
// ============================================================

export default function ProjectImpact() {
  return (
    <section className="relative overflow-hidden bg-[#0B3D2E] py-20 sm:py-24">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#087B5A]/30 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-48 -right-40 h-[500px] w-[500px] rounded-full bg-[#0284C7]/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A7F3D0]">
            Project Impact
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Creating a
            <span className="block text-[#A7F3D0]">Safer Afghanistan</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-green-50/65 sm:text-lg">
            Through humanitarian mine action projects, DAFA works to reduce
            explosive hazards, release safe land, and support communities across
            Afghanistan.
          </p>
        </motion.div>

        {/* Statistics */}
        <div className="mt-14 grid overflow-hidden rounded-3xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group border-b border-white/10 p-7 text-center transition-all duration-300 hover:bg-white/5 sm:p-8 lg:border-b-0 lg:border-r last:border-r-0"
              >
                {/* Icon */}
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#A7F3D0]/10 text-[#A7F3D0] transition-all duration-300 group-hover:bg-[#F97316]/15 group-hover:text-[#FDBA74]">
                  <Icon size={19} />
                </div>

                {/* Number */}
                <div className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <h3 className="mt-3 text-sm font-bold uppercase tracking-wider text-[#A7F3D0]">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="mx-auto mt-2 max-w-[180px] text-xs leading-5 text-green-50/45">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-10 max-w-3xl text-center"
        >
          <div className="mx-auto mb-5 h-px w-16 bg-[#A7F3D0]/30" />

          <p className="text-sm leading-7 text-green-50/55">
            Our projects are part of a wider humanitarian effort to reduce
            explosive hazards and help communities safely use land for homes,
            livelihoods, and development.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
