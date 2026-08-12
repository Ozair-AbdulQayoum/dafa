import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const partnerGroups = [
  {
    title: "Donors",
    accent: "#087B5A",
    logos: ["Donor Organization", "Humanitarian Fund", "Development Partner"],
  },
  {
    title: "UN Agencies",
    accent: "#2563EB",
    logos: ["UN Agency", "UN Organization", "UN Partner"],
  },
  {
    title: "Partners",
    accent: "#F97316",
    logos: ["Partner Organization", "Government Partner", "Local Partner"],
  },
];

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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
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
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: groupIndex * 0.12,
              }}
              viewport={{ once: true, margin: "-80px" }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7"
            >
              {/* Top Accent */}
              <div
                className="absolute inset-x-0 top-0 h-1"
                style={{ backgroundColor: group.accent }}
              />

              {/* Group Header */}
              <div className="mb-7 flex items-center justify-between">
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-[0.2em]"
                    style={{ color: group.accent }}
                  >
                    DAFA Collaboration
                  </p>

                  <h3 className="mt-1.5 text-xl font-bold tracking-tight text-[#0F172A]">
                    {group.title}
                  </h3>
                </div>

                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold"
                  style={{
                    backgroundColor: `${group.accent}12`,
                    color: group.accent,
                  }}
                >
                  {group.logos.length}+
                </div>
              </div>

              {/* Logo Area */}
              <div className="overflow-hidden">
                <motion.div
                  className="flex w-max gap-4"
                  animate={{
                    x: ["0%", "-50%"],
                  }}
                  transition={{
                    duration: 16,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {[...group.logos, ...group.logos].map((logo, index) => (
                    <motion.div
                      key={`${logo}-${index}`}
                      whileHover={{
                        y: -5,
                        scale: 1.02,
                      }}
                      className="w-40 shrink-0 rounded-2xl border border-slate-100 bg-slate-50 p-3 transition-shadow duration-300 hover:shadow-md"
                    >
                      {/* Logo Placeholder */}
                      <div className="flex h-20 items-center justify-center rounded-xl bg-white">
                        <span className="text-xs font-bold tracking-[0.15em] text-slate-300">
                          LOGO
                        </span>
                      </div>

                      <p className="mt-3 truncate text-center text-xs font-semibold text-slate-700">
                        {logo}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Bottom Accent */}
              <div className="mt-7 h-px w-full bg-slate-100" />

              <p className="mt-4 text-xs leading-5 text-slate-500">
                Supporting humanitarian mine action and safer communities across
                Afghanistan.
              </p>
            </motion.div>
          ))}
        </div>

        {/* ================= CTA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="mx-auto max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
              Stronger Together
            </p>

            <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl">
              Building a Safer Afghanistan Together
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              Explore the organizations and partners supporting DAFA's
              humanitarian mission.
            </p>

            <Link
              to="/donors"
              className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-[#087B5A] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#087B5A]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B3D2E] hover:shadow-xl"
            >
              <span>View All Donors & Partners</span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-white/20">
                <FaArrowRight
                  size={11}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
