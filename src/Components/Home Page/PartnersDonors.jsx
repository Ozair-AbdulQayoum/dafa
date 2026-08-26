// src/Components/Home-Page/PartnersDonors.jsx

import React from "react";
import { motion } from "framer-motion";

import { partnerGroups } from "../../Components/Data File/Main Page Data/PartnersDonorsData";

export default function PartnersDonors() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-24 sm:py-28">
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#087B5A]/5 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#0284C7]/5 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.025]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(#0B3D2E 1px, transparent 1px), linear-gradient(90deg, #0B3D2E 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================= HEADING ================= */}

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
          className="mx-auto mb-16 max-w-3xl text-center"
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

        {/* ================= PARTNER GROUPS ================= */}

        <div className="grid gap-7 lg:grid-cols-3">
          {partnerGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.65,
                delay: groupIndex * 0.12,
              }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7"
            >
              {/* ================= TOP ACCENT ================= */}

              <div
                className="absolute inset-x-0 top-0 h-1"
                style={{
                  backgroundColor: group.accent,
                }}
              />

              {/* ================= GROUP HEADER ================= */}

              <div className="mb-7">
                <h3
                  className="text-xl font-bold tracking-tight"
                  style={{
                    color: group.accent,
                  }}
                >
                  {group.title}
                </h3>
              </div>

              {/* ================= LOGO AREA ================= */}

              <div className="overflow-hidden">
                <motion.div
                  className="flex w-max gap-4"
                  animate={{
                    x: ["0%", "-50%"],
                  }}
                  transition={{
                    duration: 26,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {[...group.logos, ...group.logos].map((logo, index) => (
                    <motion.div
                      key={`${logo.name}-${index}`}
                      whileHover={{
                        y: -5,
                        scale: 1.02,
                      }}
                      className="w-40 shrink-0 rounded-2xl border border-slate-100 bg-slate-50 p-3 transition-shadow duration-300 hover:shadow-md"
                    >
                      {/* ================= LOGO ================= */}

                      <div className="flex h-24 items-center justify-center rounded-xl bg-white p-3">
                        <img
                          src={logo.image}
                          alt={logo.name}
                          title={logo.name}
                          className={`max-h-16 max-w-full object-contain ${
                            logo.bordered
                              ? "rounded-md border border-slate-300"
                              : ""
                          }`}
                        />
                      </div>

                      {/* ================= NAME ================= */}

                      <p
                        className="mt-3 min-h-[32px] text-center text-xs font-semibold leading-4 text-slate-700"
                        title={logo.name}
                      >
                        {logo.shortName}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
