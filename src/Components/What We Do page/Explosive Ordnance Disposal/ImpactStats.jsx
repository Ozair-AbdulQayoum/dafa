import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaShieldAlt,
  FaMapMarkedAlt,
  FaUserCheck,
  FaHandsHelping,
} from "react-icons/fa";

/* ======================================================
   IMPACT DATA
====================================================== */

const impactStats = [
  {
    value: 32,
    suffix: "+",
    label: "Provinces Reached",
    description:
      "Supporting communities affected by explosive hazards across Afghanistan.",
    icon: FaMapMarkedAlt,
  },
  {
    value: 100,
    suffix: "+",
    label: "Trained Personnel",
    description:
      "Skilled personnel contributing to safe and responsible operations.",
    icon: FaUserCheck,
  },
  {
    value: 6,
    suffix: "",
    label: "Core EOD Areas",
    description: "Supporting different aspects of explosive ordnance response.",
    icon: FaShieldAlt,
  },
  {
    value: 36,
    suffix: "+",
    label: "Years of Humanitarian Action",
    description:
      "Decades of commitment to humanitarian mine action in Afghanistan.",
    icon: FaHandsHelping,
  },
];

/* ======================================================
   ANIMATED NUMBER
====================================================== */

function AnimatedNumber({ value, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1400;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out animation
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      const currentValue = Math.floor(easedProgress * value);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);

    return () => {
      start = 0;
    };
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ======================================================
   COMPONENT
====================================================== */

export default function ImpactStats() {
  return (
    <section
      id="eod-impact"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* ==================================================
          BACKGROUND DECORATION
      ================================================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#087B5A]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#F97316]/5 blur-3xl" />

      {/* ==================================================
          CONTAINER
      ================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ==================================================
            HEADER
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#F97316]" />

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
              Our Impact
            </p>

            <span className="h-px w-10 bg-[#F97316]" />
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Supporting Safer
            <span className="text-[#087B5A]"> Communities</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            DAFA's humanitarian mine-action activities contribute to reducing
            explosive hazards and creating safer environments for communities
            across Afghanistan.
          </p>
        </motion.div>

        {/* ==================================================
            STATS GRID
        ================================================== */}

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
                  duration: 0.55,
                  delay: index * 0.1,
                }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-[#F8FAFC] p-7 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#087B5A]/30 hover:bg-white hover:shadow-xl"
              >
                {/* Top accent */}

                <div className="absolute left-0 right-0 top-0 h-1 scale-x-0 bg-[#F97316] transition-transform duration-300 group-hover:scale-x-100" />

                {/* Icon */}

                <motion.div
                  whileHover={{ scale: 1.08, rotate: 3 }}
                  className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A] transition-colors duration-300 group-hover:bg-[#087B5A] group-hover:text-white"
                >
                  <Icon size={20} />
                </motion.div>

                {/* Number */}

                <div className="mt-6 text-4xl font-extrabold tracking-tight text-[#0B3D2E] sm:text-5xl">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}

                <h3 className="mt-3 text-base font-bold text-[#0F172A]">
                  {stat.label}
                </h3>

                {/* Description */}

                <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-slate-500">
                  {stat.description}
                </p>

                {/* Bottom accent */}

                <div className="mx-auto mt-6 h-1 w-8 rounded-full bg-[#087B5A]/20 transition-all duration-300 group-hover:w-14 group-hover:bg-[#F97316]" />
              </motion.article>
            );
          })}
        </div>

        {/* ==================================================
            BOTTOM MESSAGE
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.35,
          }}
          className="relative mt-10 overflow-hidden rounded-2xl bg-[#0B3D2E] px-6 py-8 sm:px-10"
        >
          {/* Decoration */}

          <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#087B5A]/30 blur-3xl" />

          <div className="relative flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#A7F3D0]">
                Safer Communities
              </p>

              <p className="mt-2 max-w-3xl text-sm leading-7 text-green-50/75 sm:text-base">
                Every operation contributes to reducing explosive hazards and
                supporting safer environments for people and communities.
              </p>
            </div>

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F97316] text-white shadow-lg">
              <FaShieldAlt size={17} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
