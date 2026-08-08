import React from "react";
import { motion } from "framer-motion";
import {
  FaCrown,
  FaSitemap,
  FaUsers,
  FaComments,
  FaCheckCircle,
} from "react-icons/fa";

const levels = [
  {
    icon: FaCrown,
    level: "01",
    title: "Leadership",
    text: "Provides strategic direction, organizational oversight, and key decision-making.",
  },
  {
    icon: FaSitemap,
    level: "02",
    title: "Departments & Units",
    text: "Translate organizational priorities into clear departmental responsibilities and coordinated support.",
  },
  {
    icon: FaUsers,
    level: "03",
    title: "Field & Support Teams",
    text: "Provide operational and technical support while carrying out assigned responsibilities.",
  },
];

const principles = [
  "Clear responsibilities",
  "Effective communication",
  "Coordinated decision-making",
  "Shared accountability",
];

export default function OrganizationalCoordination() {
  return (
    <div>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative isolate overflow-hidden bg-[#0B3D2E]">
        {/* Background Glow */}

        <motion.div
          className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#A7F3D0]/10 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#0284C7]/10 blur-3xl"
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Grid */}

        <div className="absolute inset-0 opacity-[0.035]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Hero Content */}

        <div className="relative z-10 mx-auto flex min-h-[430px] w-full max-w-7xl items-center px-5 py-20 sm:px-8 md:min-h-[480px] lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-2 w-2 rounded-full bg-[#A7F3D0]" />

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A7F3D0]">
                Organizational Coordination
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl"
            >
              Connected Teams,
              <span className="block text-[#A7F3D0]">
                Shared Responsibility
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-2xl text-base leading-8 text-green-50/75 sm:text-lg"
            >
              DAFA's organizational structure connects leadership, departments,
              and field teams through clear responsibilities and coordinated
              communication.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          ORGANIZATIONAL LEVELS
      ===================================================== */}

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#087B5A]">
              Organizational Levels
            </span>

            <h2 className="mt-4 text-3xl font-bold text-[#0F172A] sm:text-4xl lg:text-5xl">
              One Structure,
              <span className="text-[#087B5A]"> Many Roles</span>
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              Different levels of the organization contribute distinct
              responsibilities while remaining connected through coordination
              and communication.
            </p>
          </motion.div>

          <div className="mx-auto mt-16 max-w-4xl space-y-5">
            {levels.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -35 : 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.12,
                  }}
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:bg-white hover:shadow-xl sm:p-8"
                >
                  <div className="absolute bottom-0 left-0 top-0 w-1 origin-bottom scale-y-0 bg-[#087B5A] transition-transform duration-300 group-hover:scale-y-100" />

                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0B3D2E] text-[#A7F3D0]">
                      <Icon size={20} />
                    </div>

                    <div className="flex-1">
                      <span className="text-xs font-bold tracking-[0.2em] text-[#087B5A]/60">
                        LEVEL {item.level}
                      </span>

                      <h3 className="mt-1 text-xl font-bold text-[#0F172A] sm:text-2xl">
                        {item.title}
                      </h3>

                      <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          COORDINATION PRINCIPLES
      ===================================================== */}

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#087B5A]">
              Coordination Principles
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#0F172A] sm:text-4xl">
              Strong Coordination
              <span className="text-[#087B5A]"> Builds Strong Teams</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
              Effective coordination helps different parts of the organization
              understand their responsibilities, communicate effectively, and
              work toward shared objectives.
            </p>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {principles.map((principle, index) => (
              <motion.div
                key={principle}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.1,
                }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <FaCheckCircle className="text-[#087B5A]" size={18} />

                <h3 className="mt-4 text-sm font-bold text-[#0F172A]">
                  {principle}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
