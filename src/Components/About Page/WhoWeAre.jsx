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
    <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
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
            {/* Section Label */}
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-[#087B5A] sm:text-sm"
            >
              Who We Are
            </motion.span>

            {/* Heading */}
            <h2 className="max-w-xl text-3xl font-bold leading-[1.15] tracking-tight text-[#0F172A] sm:text-4xl lg:text-[46px]">
              Working Together for{" "}
              <span className="text-[#087B5A]">a Safer Afghanistan</span>
            </h2>

            {/* Description */}
            <div className="mt-6 max-w-xl space-y-4">
              <p className="text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8">
                The Demining Agency for Afghanistan (DAFA) is a humanitarian
                organization dedicated to reducing the impact of explosive
                hazards and supporting safer communities across Afghanistan.
              </p>

              <p className="text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8">
                Through dedicated teams, responsible humanitarian action, and
                close engagement with communities, DAFA works to make affected
                areas safer and support people living with the consequences of
                explosive hazards.
              </p>
            </div>
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

              {/* Card Header */}
              <div className="relative mb-7">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A7F3D0] sm:text-xs">
                  Our Identity
                </span>

                <h3 className="mt-2 text-xl font-bold leading-tight text-white sm:text-2xl lg:text-3xl">
                  Humanitarian Mine Action
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-6 text-green-50/75 sm:text-[15px] sm:leading-7">
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
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-colors duration-300 hover:bg-white/10"
                    >
                      {/* Icon */}
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#A7F3D0]/10 text-[#A7F3D0]">
                        <Icon size={17} />
                      </div>

                      {/* Card Title */}
                      <h4 className="text-sm font-semibold leading-5 text-white sm:text-[15px]">
                        {card.title}
                      </h4>

                      {/* Card Description */}
                      <p className="mt-2 text-xs leading-5 text-green-50/65 sm:text-[13px] sm:leading-6">
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
