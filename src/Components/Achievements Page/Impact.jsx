import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import achievementsData from "../../Components/Data File/Achievements Data/AchievementsData";

/* =========================================================
   COUNTER
========================================================= */

function Counter({ value, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -80px 0px",
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView || typeof value !== "number") return;

    const duration = 1800;
    const startTime = performance.now();
    let animationFrame;

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easedProgress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, value]);

  return (
    <span ref={ref} className="inline-block whitespace-nowrap tabular-nums">
      {typeof value === "number" ? count.toLocaleString() : value}
      {suffix}
    </span>
  );
}

/* =========================================================
   IMPACT PAGE
========================================================= */

export default function Impact() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="overflow-x-hidden bg-[#F7FBF8]">
      {/* =====================================================
          ACHIEVEMENTS
      ====================================================== */}

      <section
        aria-labelledby="impact-heading"
        className="py-14 sm:py-18 lg:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-10 xl:px-12">
          {/* Section Header */}
          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto mb-10 max-w-3xl text-center sm:mb-14"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span
                aria-hidden="true"
                className="h-[2px] w-8 rounded-full bg-[#F97316] sm:w-10"
              />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#0F8A63] sm:text-xs">
                Our Achievements
              </span>

              <span
                aria-hidden="true"
                className="h-[2px] w-8 rounded-full bg-[#F97316] sm:w-10"
              />
            </div>

            <h1
              id="impact-heading"
              className="
                text-3xl font-extrabold leading-[1.08]
                tracking-[-0.045em] text-[#06281E]
                sm:text-4xl md:text-5xl
              "
            >
              Measuring Progress Through
              <span className="mt-1 block text-[#0F8A63]">
                Meaningful Action
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#64748B] sm:text-base">
              A record of humanitarian mine action delivered across Afghanistan
              and the communities we serve.
            </p>
          </motion.div>

          {/* Achievement Cards */}
          <div
            className="
              grid grid-cols-1 gap-4
              sm:grid-cols-2 sm:gap-5
              lg:grid-cols-3
              xl:grid-cols-4
            "
          >
            {achievementsData.map((achievement, index) => {
              const Icon = achievement.icon;

              return (
                <motion.article
                  key={`${achievement.label}-${index}`}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 24 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.55,
                    delay: shouldReduceMotion ? 0 : Math.min(index * 0.05, 0.3),
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    group relative flex min-w-0 flex-col
                    overflow-hidden rounded-2xl
                    border border-[#0B3D2E]/10
                    bg-white p-5
                    shadow-[0_10px_30px_rgba(15,23,42,0.06)]
                    transition-all duration-500
                    hover:-translate-y-1
                    hover:border-[#0F8A63]/25
                    hover:shadow-[0_20px_45px_rgba(15,23,42,0.11)]
                    sm:rounded-3xl sm:p-6
                    lg:p-7
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      mb-6 flex h-11 w-11 shrink-0
                      items-center justify-center
                      rounded-xl bg-[#EAF6F0]
                      text-[#0F8A63]
                      transition-all duration-500
                      group-hover:bg-[#0F8A63]
                      group-hover:text-white
                      sm:h-12 sm:w-12
                    "
                  >
                    <Icon className="text-base sm:text-lg" aria-hidden="true" />
                  </div>

                  {/* Number */}
                  <div
                    className="
                      flex min-h-[44px] w-full min-w-0
                      items-center overflow-visible
                      text-[2rem] font-extrabold
                      leading-none tracking-[-0.045em]
                      text-[#06281E]
                      sm:min-h-[50px] sm:text-4xl
                    "
                  >
                    <Counter
                      value={achievement.value}
                      suffix={achievement.suffix || ""}
                    />
                  </div>

                  {/* Label */}
                  <h2
                    className="
                      mt-4 text-[15px]
                      font-extrabold leading-5
                      text-[#0F172A]
                      sm:text-base sm:leading-6
                    "
                  >
                    {achievement.label}
                  </h2>

                  {/* Description */}
                  <p
                    className="
                      mt-2.5 text-[13px]
                      leading-5 text-[#64748B]
                      sm:mt-3 sm:text-sm sm:leading-6
                    "
                  >
                    {achievement.description}
                  </p>

                  {/* Orange Accent */}
                  <span
                    aria-hidden="true"
                    className="
                      absolute bottom-0 left-5
                      h-[3px] w-8 rounded-full
                      bg-[#F97316]
                      transition-all duration-500
                      group-hover:w-14
                      sm:left-6
                    "
                  />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          MAKING A DIFFERENCE
      ====================================================== */}

      <section
        aria-labelledby="difference-heading"
        className="
          relative overflow-hidden
          bg-[#06281E]
          py-14 sm:py-18 lg:py-24
        "
      >
        {/* Background Effects */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            -right-32 -top-32
            h-[320px] w-[320px]
            rounded-full bg-[#0F8A63]/20
            blur-3xl
            sm:-right-40 sm:-top-40
            sm:h-[420px] sm:w-[420px]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            -bottom-40 -left-32
            h-[320px] w-[320px]
            rounded-full bg-[#0284C7]/10
            blur-3xl
            sm:-bottom-48 sm:-left-40
            sm:h-[420px] sm:w-[420px]
          "
        />

        <div
          className="
            relative z-10
            mx-auto w-full max-w-7xl
            px-4 sm:px-8 lg:px-10 xl:px-12
          "
        >
          <div
            className="
              grid gap-8
              lg:grid-cols-[0.8fr_1.2fr]
              lg:items-center lg:gap-16
            "
          >
            {/* Heading */}
            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -25 }
              }
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="mb-4 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-[2px] w-8 rounded-full bg-[#F97316]"
                />

                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#A7F3D0]">
                  Our Difference
                </span>
              </div>

              <h2
                id="difference-heading"
                className="
                  text-3xl font-extrabold
                  leading-[1.08] tracking-[-0.04em]
                  text-white sm:text-4xl lg:text-5xl
                "
              >
                Making a<span className="block text-[#A7F3D0]">Difference</span>
              </h2>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 25 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="border-l-2 border-[#F97316] pl-5 sm:pl-8"
            >
              <p className="text-sm leading-7 text-white/75 sm:text-base sm:leading-8 lg:text-lg">
                Every cleared area represents safer land, restored livelihoods,
                and greater opportunities for communities affected by explosive
                hazards.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/75 sm:mt-5 sm:text-base sm:leading-8 lg:text-lg">
                Through sustained humanitarian action, DAFA continues working
                toward safer communities and a future where people can live and
                work without the threat of mines and explosive remnants of war.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DATA NOTE
      ====================================================== */}

      <footer className="bg-[#F7FBF8] px-4 py-7 text-center sm:px-8">
        <p className="mx-auto max-w-3xl text-[11px] leading-5 text-[#64748B] sm:text-xs sm:leading-6">
          Impact figures represent cumulative achievements reported through DAFA
          humanitarian mine action operations.
        </p>
      </footer>
    </main>
  );
}
