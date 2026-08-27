import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import achievementsData from "../../Components/Data File/Achievements Data/AchievementsData";

// =====================================================
// COUNTER
// =====================================================

function Counter({ value, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView || typeof value !== "number") return;

    const duration = 1800;
    const startTime = performance.now();

    let animationFrame;

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Smooth ease-out animation
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easedProgress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

// =====================================================
// ACHIEVEMENTS
// =====================================================

export default function Impact() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-28">
        {/* =================================================
            BACKGROUND DECORATION
        ================================================= */}

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#087B5A]/5 blur-3xl" />

          <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#F97316]/5 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* =================================================
              HERO HEADING
          ================================================= */}

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
            className="mx-auto max-w-4xl text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#087B5A]/10 bg-white px-4 py-2 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F97316]" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087B5A]">
                Our Impact
              </span>
            </div>

            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl">
              Decades of Impact,
              <span className="block text-[#087B5A]">Measurable Results</span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              For more than three decades, DAFA has worked to reduce explosive
              hazards, support affected communities, and create safer
              environments across Afghanistan.
            </p>
          </motion.div>

          {/* =================================================
              ACHIEVEMENT CARDS
          ================================================= */}

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {achievementsData.map((achievement, index) => {
              const Icon = achievement.icon;

              return (
                <motion.article
                  key={achievement.label}
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
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#087B5A]/30 hover:shadow-xl"
                >
                  {/* Top Accent */}

                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#087B5A] to-[#F97316] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Background Number */}

                  <span className="pointer-events-none absolute right-4 top-2 text-6xl font-black text-slate-100 transition-colors duration-300 group-hover:text-[#087B5A]/5">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Icon */}

                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A] transition-all duration-300 group-hover:bg-[#0B3D2E] group-hover:text-white">
                    <Icon size={18} />
                  </div>

                  {/* Counter */}

                  <div className="relative mt-7 text-3xl font-extrabold tracking-tight text-[#0B3D2E] sm:text-4xl">
                    <Counter
                      value={achievement.value}
                      suffix={achievement.suffix}
                    />
                  </div>

                  {/* Label */}

                  <h2 className="relative mt-4 text-sm font-bold uppercase leading-6 tracking-[0.06em] text-[#0F172A]">
                    {achievement.label}
                  </h2>

                  {/* Description */}

                  <p className="relative mt-2 text-xs leading-6 text-slate-500">
                    {achievement.description}
                  </p>
                </motion.article>
              );
            })}
          </div>

          {/* =================================================
              BOTTOM FEATURE
          ================================================= */}

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
            className="mt-14 overflow-hidden rounded-2xl bg-[#0B3D2E] sm:mt-16 sm:rounded-3xl"
          >
            <div className="relative px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
              {/* Glow */}

              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#F97316]/10 blur-3xl" />

              <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#A7F3D0]/10 blur-3xl" />

              <div className="relative z-10 flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
                {/* Text */}

                <div className="max-w-3xl">
                  <div className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#F97316]" />

                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#A7F3D0]">
                      Humanitarian Impact
                    </span>
                  </div>

                  <h3 className="mt-3 text-xl font-bold leading-tight text-white sm:text-2xl">
                    Continuing the commitment to safer communities.
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-green-50/70 sm:text-base">
                    DAFA's achievements reflect years of dedicated humanitarian
                    mine action, operational experience, and commitment to
                    protecting communities across Afghanistan.
                  </p>
                </div>

                {/* Impact Badge */}

                <div className="flex shrink-0 items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-sm">
                  <div>
                    <p className="text-2xl font-bold text-white">12M+</p>

                    <p className="mt-1 text-xs text-green-50/60">
                      People Benefited
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              DATA NOTE
          ================================================= */}

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
            className="mx-auto mt-6 max-w-3xl text-center text-[11px] leading-5 text-slate-400"
          >
            Achievement figures should be maintained and updated using
            officially verified DAFA program data and approved organizational
            records.
          </motion.p>
        </div>
      </section>
    </main>
  );
}
