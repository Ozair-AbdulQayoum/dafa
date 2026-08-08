import React from "react";
import { motion } from "framer-motion";
import {
  FaUserTie,
  FaUsersCog,
  FaClipboardCheck,
  FaCogs,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const leadershipAreas = [
  {
    icon: FaUserTie,
    title: "Executive Leadership",
    text: "Provides strategic direction and overall leadership for the organization.",
  },
  {
    icon: FaUsersCog,
    title: "Senior Management",
    text: "Coordinates teams, resources, and organizational priorities.",
  },
  {
    icon: FaClipboardCheck,
    title: "Program Leadership",
    text: "Guides humanitarian programs and supports effective implementation.",
  },
  {
    icon: FaCogs,
    title: "Operational Management",
    text: "Supports planning, coordination, and delivery of field activities.",
  },
];

export default function LeadershipManagement() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28">
      {/* Decorative Background */}

      <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-[#087B5A]/5 blur-3xl" />

      <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#0284C7]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================= HEADER ================= */}

        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#087B5A]">
              Leadership
            </span>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
              Leadership That
              <span className="block text-[#087B5A]">
                Moves the Mission Forward
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-2xl text-base leading-8 text-slate-600 lg:ml-auto lg:text-lg"
          >
            DAFA's leadership and management teams work across different areas
            of responsibility to provide direction, coordinate resources, and
            support effective humanitarian action.
          </motion.p>
        </div>

        {/* ================= LEADERSHIP FEATURE ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-14 overflow-hidden rounded-3xl bg-[#0B3D2E] shadow-xl"
        >
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            {/* Left */}

            <div className="relative flex min-h-[260px] items-center overflow-hidden p-8 sm:p-10 lg:p-12">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#A7F3D0]/10 blur-2xl" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#A7F3D0]/10 text-[#A7F3D0]">
                  <FaUserTie size={22} />
                </div>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#A7F3D0]">
                  Executive Direction
                </p>

                <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  Strong Leadership.
                  <br />
                  Shared Responsibility.
                </h3>
              </div>
            </div>

            {/* Right */}

            <div className="border-t border-white/10 p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <p className="max-w-2xl text-sm leading-7 text-green-50/75 sm:text-base">
                Effective humanitarian work depends on clear leadership,
                responsible decision-making, and close coordination between
                different areas of the organization. DAFA's management structure
                supports these principles while keeping its humanitarian mission
                at the center.
              </p>

              <Link
                to="/director-bio"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#A7F3D0] transition hover:gap-3 hover:text-white"
              >
                View Director's Profile
                <span>→</span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* ================= LEADERSHIP AREAS ================= */}

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {leadershipAreas.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -5 }}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#087B5A]/20 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A] transition-colors duration-300 group-hover:bg-[#087B5A] group-hover:text-white">
                  <Icon size={18} />
                </div>

                <h3 className="mt-5 text-base font-bold text-[#0F172A]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
