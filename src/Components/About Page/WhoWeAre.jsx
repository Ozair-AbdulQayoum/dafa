import React from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaMapMarkedAlt,
  FaHandsHelping,
  FaLeaf,
} from "react-icons/fa";

const focusCards = [
  {
    icon: FaShieldAlt,
    title: "Humanitarian Action",
    text: "Working to reduce the impact of explosive hazards on communities.",
  },
  {
    icon: FaMapMarkedAlt,
    title: "Across Afghanistan",
    text: "Supporting safer communities through humanitarian mine action.",
  },
  {
    icon: FaHandsHelping,
    title: "Community Focused",
    text: "Putting the safety and needs of affected communities first.",
  },
  {
    icon: FaLeaf,
    title: "Safer Future",
    text: "Contributing to safer land and more resilient communities.",
  },
];

export default function WhoWeAre() {
  return (
    <section className="overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* ================= LEFT CONTENT ================= */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Label */}
            <motion.span
              className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-[#087B5A]"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Who We Are
            </motion.span>

            {/* Heading */}
            <h2 className="max-w-xl text-3xl font-bold leading-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
              Working Together for{" "}
              <span className="text-[#087B5A]">a Safer Afghanistan</span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              The Demining Agency for Afghanistan (DAFA) is a humanitarian
              organization dedicated to reducing the impact of explosive hazards
              and supporting safer communities across Afghanistan.
            </p>

            <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">
              Through dedicated teams, responsible humanitarian action, and
              close engagement with communities, DAFA works to make affected
              areas safer and support people living with the consequences of
              explosive hazards.
            </p>
          </motion.div>

          {/* ================= RIGHT VISUAL ================= */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative overflow-hidden rounded-3xl bg-[#0B3D2E] p-6 shadow-xl sm:p-8">
              {/* Decorative Circle */}
              <motion.div
                className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#A7F3D0]/10"
                animate={{
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Header */}
              <div className="relative mb-7">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A7F3D0]">
                  Our Identity
                </span>

                <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  Humanitarian Mine Action
                </h3>

                <p className="mt-3 text-sm leading-6 text-green-50/75">
                  Dedicated to protecting people, reducing risks, and helping
                  communities move toward a safer future.
                </p>
              </div>

              {/* Focus Cards */}
              <div className="relative grid gap-3 sm:grid-cols-2">
                {focusCards.map((card, index) => {
                  const Icon = card.icon;

                  return (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: 0.25 + index * 0.1,
                      }}
                      whileHover={{ y: -4 }}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-colors hover:bg-white/10"
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#A7F3D0]/10 text-[#A7F3D0]">
                        <Icon size={17} />
                      </div>

                      <h4 className="text-sm font-semibold text-white">
                        {card.title}
                      </h4>

                      <p className="mt-2 text-xs leading-5 text-green-50/65">
                        {card.text}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
