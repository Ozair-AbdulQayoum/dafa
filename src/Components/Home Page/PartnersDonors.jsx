import React from "react";
import { motion, useReducedMotion } from "framer-motion";

import { partnerGroups } from "../../Components/Data File/Main Page Data/PartnersDonorsData";

export default function PartnersDonors() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="
        relative overflow-hidden
        bg-gradient-to-br
        from-[#E8F5EF]
        via-[#F4FAF7]
        to-[#EAF4F8]
        py-20 sm:py-24 lg:py-28
      "
    >
      {/* =========================================================
          SECTION BACKGROUND GLOW
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Green Glow */}
        <div
          className="
            absolute -left-40 -top-32
            h-[480px] w-[480px]
            rounded-full
            bg-[#087B5A]/[0.10]
            blur-[120px]
          "
        />

        {/* Blue Glow */}
        <div
          className="
            absolute -right-40 top-1/4
            h-[450px] w-[450px]
            rounded-full
            bg-[#0284C7]/[0.07]
            blur-[120px]
          "
        />

        {/* Orange Glow */}
        <div
          className="
            absolute bottom-[-220px] left-1/2
            h-[500px] w-[500px]
            -translate-x-1/2
            rounded-full
            bg-[#F97316]/[0.05]
            blur-[130px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =========================================================
            MAIN HEADING
        ========================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-16"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#087B5A]/50" />

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#087B5A] sm:text-sm">
              Collaboration
            </p>

            <span className="h-px w-10 bg-[#087B5A]/50" />
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Our Donors & <span className="text-[#087B5A]">Partners</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Working together with humanitarian organizations, UN agencies,
            donors, and partners to create safer communities across Afghanistan.
          </p>
        </motion.div>

        {/* =========================================================
            THREE MARQUEE ROWS
        ========================================================= */}

        <div className="space-y-10">
          {partnerGroups.map((group, groupIndex) => {
            /*
              Row 1 → Left
              Row 2 → Right
              Row 3 → Left
            */

            const direction = groupIndex % 2 === 0 ? "left" : "right";

            /*
              SPEED
              -----------------------------
              Row 1 → 22 seconds
              Row 2 → 24 seconds
              Row 3 → 15 seconds  ⚡ FAST
            */

            const animationDuration =
              groupIndex === 2 ? 15 : groupIndex === 1 ? 24 : 22;

            const duplicatedLogos = [
              ...group.logos,
              ...group.logos,
              ...group.logos,
            ];

            return (
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
                transition={{
                  duration: 0.7,
                  delay: groupIndex * 0.12,
                }}
                viewport={{
                  once: true,
                  margin: "-80px",
                }}
                className="
                  relative overflow-hidden
                  rounded-[2rem]
                  border border-white/80
                  bg-[#F3F9F6]/90
                  py-6
                  shadow-[8px_8px_22px_rgba(15,23,42,0.08),-8px_-8px_22px_rgba(255,255,255,0.95)]
                  backdrop-blur-xl
                  sm:py-7
                "
              >
                {/* =================================================
                    GROUP TITLE
                ================================================= */}

                <div className="mb-5 flex justify-center px-5">
                  <h3
                    className="
                      text-center
                      text-lg
                      font-bold
                      tracking-tight
                      sm:text-xl
                    "
                    style={{
                      color: group.accent,
                    }}
                  >
                    {group.title}
                  </h3>
                </div>

                {/* =================================================
                    LOGO MARQUEE
                ================================================= */}

                <div className="relative overflow-hidden">
                  {/* Left Fade */}
                  <div
                    className="
                      pointer-events-none
                      absolute left-0 top-0
                      z-10 h-full w-16
                      bg-gradient-to-r
                      from-[#F3F9F6]
                      to-transparent
                      sm:w-24
                    "
                  />

                  {/* Right Fade */}
                  <div
                    className="
                      pointer-events-none
                      absolute right-0 top-0
                      z-10 h-full w-16
                      bg-gradient-to-l
                      from-[#F3F9F6]
                      to-transparent
                      sm:w-24
                    "
                  />

                  <motion.div
                    className="flex w-max gap-4"
                    animate={
                      shouldReduceMotion
                        ? {}
                        : {
                            x:
                              direction === "left"
                                ? ["0%", "-33.333333%"]
                                : ["-33.333333%", "0%"],
                          }
                    }
                    transition={
                      shouldReduceMotion
                        ? {}
                        : {
                            duration: animationDuration,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "linear",
                          }
                    }
                  >
                    {duplicatedLogos.map((logo, index) => (
                      <motion.div
                        key={`${logo.name}-${index}`}
                        whileHover={
                          shouldReduceMotion
                            ? {}
                            : {
                                y: -5,
                                scale: 1.03,
                              }
                        }
                        className="
                          group/logo
                          w-40 shrink-0
                          rounded-2xl
                          border border-slate-100
                          bg-white/80
                          p-3
                          shadow-[4px_4px_10px_rgba(15,23,42,0.06),-4px_-4px_10px_rgba(255,255,255,0.9)]
                          transition-all duration-300
                          hover:shadow-lg
                          sm:w-44
                        "
                      >
                        {/* =================================================
                            LOGO
                        ================================================= */}

                        <div
                          className="
                            flex h-24
                            items-center justify-center
                            rounded-xl
                            bg-slate-50
                            p-3
                            sm:h-28
                          "
                        >
                          <img
                            src={logo.image}
                            alt={logo.name}
                            title={logo.name}
                            loading="lazy"
                            decoding="async"
                            className={`
                              max-h-16
                              max-w-full
                              object-contain
                              transition-transform
                              duration-300
                              group-hover/logo:scale-105
                              sm:max-h-20
                              ${
                                logo.bordered
                                  ? "rounded-md border border-slate-300"
                                  : ""
                              }
                            `}
                          />
                        </div>

                        {/* =================================================
                            LOGO NAME
                        ================================================= */}

                        <p
                          className="
                            mt-3
                            min-h-[32px]
                            text-center
                            text-xs
                            font-semibold
                            leading-4
                            text-slate-700
                          "
                          title={logo.name}
                        >
                          {logo.shortName}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
