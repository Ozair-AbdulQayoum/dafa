import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaShieldAlt,
  FaBullseye,
  FaHandshake,
  FaArrowRight,
} from "react-icons/fa";

import aboutImg from "../../assets/img2.png";

const values = [
  {
    icon: FaShieldAlt,
    title: "Our Mission",
    text: "Protecting lives and communities through professional humanitarian demining operations.",
  },
  {
    icon: FaBullseye,
    title: "Our Vision",
    text: "A safer Afghanistan free from the threat of explosive hazards.",
  },
  {
    icon: FaHandshake,
    title: "Our Commitment",
    text: "Delivering transparent, safe, and community-focused humanitarian services.",
  },
];

export default function About() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* ================= DECORATIVE BACKGROUND ================= */}

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#087B5A]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#0284C7]/5 blur-3xl" />

      {/* ================= CONTAINER ================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* =====================================================
              IMAGE SIDE
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            {/* Image Wrapper */}

            <div className="group relative overflow-hidden rounded-[2rem] bg-[#0B3D2E] shadow-[0_25px_70px_rgba(15,23,42,0.12)]">
              <img
                src={aboutImg}
                alt="DAFA humanitarian operation"
                className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[500px] lg:h-[540px]"
              />

              {/* Image Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-[#06281E]/60 via-transparent to-transparent" />

              {/* Image Label */}

              <div className="absolute bottom-6 left-6">
                <span className="rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                  Humanitarian Mine Action
                </span>
              </div>
            </div>

            {/* ================= EXPERIENCE CARD ================= */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-6 right-5 rounded-2xl border border-slate-100 bg-white px-6 py-5 shadow-[0_15px_40px_rgba(15,23,42,0.12)] sm:bottom-8 sm:right-8 sm:px-7"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A]">
                  <FaShieldAlt size={20} />
                </div>

                <div>
                  <h3 className="text-3xl font-black tracking-tight text-[#087B5A] sm:text-4xl">
                    36+
                  </h3>

                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
                    Years of Experience
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Decorative Circle */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -left-5 -top-5 hidden h-24 w-24 rounded-full border border-dashed border-[#087B5A]/20 lg:block"
            />
          </motion.div>

          {/* =====================================================
              CONTENT SIDE
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Section Label */}

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-[2px] w-10 rounded-full bg-[#087B5A]" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#087B5A] sm:text-sm">
                About DAFA
              </span>
            </motion.div>

            {/* Heading */}

            <h2 className="max-w-2xl text-3xl font-bold leading-[1.12] tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
              Protecting Communities,
              <span className="mt-1 block text-[#087B5A]">
                Creating a Safer Afghanistan
              </span>
            </h2>

            {/* Description */}

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              The Demining Agency for Afghanistan (DAFA) is a national
              humanitarian organization dedicated to removing explosive hazards,
              reducing risks, and supporting safer communities across
              Afghanistan.
            </p>

            {/* Secondary Description */}

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              Through professional field operations, dedicated teams, and
              community-focused humanitarian action, DAFA works to make affected
              areas safer and support communities living with the consequences
              of explosive hazards.
            </p>

            {/* ================= VALUES ================= */}

            <div className="mt-8 space-y-3">
              {values.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{
                      x: 5,
                    }}
                    className="group flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all duration-300 hover:border-[#A7F3D0] hover:bg-white hover:shadow-md sm:p-5"
                  >
                    {/* Icon */}

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A] transition-all duration-300 group-hover:bg-[#087B5A] group-hover:text-white">
                      <Icon size={17} />
                    </div>

                    {/* Text */}

                    <div>
                      <h4 className="text-sm font-bold text-[#0F172A] sm:text-base">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-xs leading-6 text-slate-500 sm:text-sm">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* ================= CTA ================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.4,
              }}
              className="mt-8"
            >
              <Link
                to="/about"
                className="group inline-flex items-center gap-3 rounded-xl bg-[#087B5A] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#087B5A]/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3D2E] hover:shadow-xl"
              >
                <span>Learn More About DAFA</span>

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:bg-white/20">
                  <FaArrowRight
                    size={11}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
