import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaUsers,
  FaChalkboardTeacher,
  FaMapMarkedAlt,
  FaBullhorn,
} from "react-icons/fa";

const impactStats = [
  {
    value: 1250,
    suffix: "+",
    label: "Communities Reached",
    description: "Communities supported through EORE activities.",
    icon: FaUsers,
  },
  {
    value: 85,
    suffix: "K+",
    label: "People Reached",
    description: "People receiving essential safety information.",
    icon: FaChalkboardTeacher,
  },
  {
    value: 3500,
    suffix: "+",
    label: "Awareness Sessions",
    description: "Community awareness and safety sessions delivered.",
    icon: FaBullhorn,
  },
  {
    value: 25,
    suffix: "+",
    label: "Provinces Reached",
    description: "Areas reached through humanitarian risk education.",
    icon: FaMapMarkedAlt,
  },
];

function AnimatedNumber({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 1600;
    const startTime = performance.now();

    const updateCounter = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easedProgress * value));

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function EOREImpactStats() {
  return (
    <section
      id="eore-impact"
      className="relative overflow-hidden bg-white py-20 sm:py-24"
    >
      {/* ================= BACKGROUND DECORATION ================= */}

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#087B5A]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-[#F97316]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#F97316]" />

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
              Our Reach
            </p>

            <span className="h-px w-8 bg-[#F97316]" />
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            EORE Impact & <span className="text-[#087B5A]">Reach</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Through community-based awareness and safety education, DAFA works
            to help people better understand explosive hazards and make safer
            decisions.
          </p>
        </motion.div>

        {/* ================= STATISTICS ================= */}

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.article
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#087B5A]/30 hover:shadow-xl"
              >
                {/* Top Accent */}

                <div className="absolute left-0 top-0 h-1 w-0 bg-[#F97316] transition-all duration-500 group-hover:w-full" />

                {/* Icon */}

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A] transition-all duration-300 group-hover:bg-[#087B5A] group-hover:text-white">
                  <Icon size={20} />
                </div>

                {/* Number */}

                <div className="mt-7 text-4xl font-bold tracking-tight text-[#087B5A] sm:text-5xl">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}

                <h3 className="mt-3 text-base font-bold text-[#0F172A]">
                  {stat.label}
                </h3>

                {/* Description */}

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {stat.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* ================= BOTTOM MESSAGE ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-14 max-w-4xl border-t border-slate-200 pt-8 text-center"
        >
          <p className="text-sm leading-7 text-slate-500 sm:text-base">
            EORE is an important part of humanitarian mine action, helping
            communities understand explosive hazards and promoting safer
            behavior in affected areas.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
