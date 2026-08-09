import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaCalendarAlt,
  FaMapMarkedAlt,
  FaRulerCombined,
  FaUsers,
} from "react-icons/fa";

const stats = [
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

export default function ImpactStats() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-28">
      {/* Background Decorations */}

      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#087B5A]/5 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-48 -left-40 h-[500px] w-[500px] rounded-full bg-[#F97316]/5 blur-3xl" />

      {/* Main Content */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
            Our Impact
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Decades of
            <span className="block text-[#087B5A]">Humanitarian Impact</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-500 sm:text-lg">
            DAFA's work contributes to reducing explosive hazard risks and
            supporting communities throughout Afghanistan.
          </p>
        </motion.div>

        {/* Stats */}

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:border-[#087B5A]/30 hover:shadow-xl sm:p-8"
              >
                {/* Top Accent */}

                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#087B5A] to-[#A7F3D0] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Icon */}

                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A] transition-all duration-300 group-hover:bg-[#087B5A] group-hover:text-white">
                  <Icon size={19} />
                </div>

                {/* Number */}

                <div className="mt-6 text-4xl font-black tracking-tight text-[#0F172A] sm:text-5xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}

                <h3 className="mt-3 text-sm font-bold uppercase tracking-wider text-[#087B5A]">
                  {stat.label}
                </h3>

                {/* Description */}

                <p className="mt-2 text-xs leading-5 text-slate-500">
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
          transition={{ duration: 0.8 }}
          className="mx-auto mt-10 max-w-3xl text-center"
        >
          <p className="text-sm leading-7 text-slate-400">
            These figures represent DAFA's wider humanitarian mine action
            contribution and should be presented alongside verified
            program-specific data where available.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
