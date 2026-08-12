import React from "react";
import { motion } from "framer-motion";
import {
  FaExclamationTriangle,
  FaHandPaper,
  FaPhoneAlt,
  FaArrowRight,
  FaShieldAlt,
} from "react-icons/fa";

const safetySteps = [
  {
    number: "01",
    icon: FaExclamationTriangle,
    title: "Recognize the Risk",
    description:
      "Stay alert in areas that may be contaminated by landmines or explosive remnants of war. Never assume an unfamiliar object or area is safe.",
    image: "/images/knowledge/safety-recognize.jpg",
  },
  {
    number: "02",
    icon: FaHandPaper,
    title: "Stay Away",
    description:
      "Never touch, move, kick, or approach a suspicious object. Warn others nearby and carefully move away from the suspected hazard.",
    image: "/images/knowledge/safety-stay-away.jpg",
  },
  {
    number: "03",
    icon: FaPhoneAlt,
    title: "Report the Hazard",
    description:
      "Report suspected explosive hazards through appropriate authorities or humanitarian mine-action organizations so trained personnel can respond safely.",
    image: "/images/knowledge/safety-report.jpg",
  },
];

export default function SafetyGuidance() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Background Decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#087B5A]/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#F97316]/5 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-[#087B5A]/10 bg-[#087B5A]/5 px-4 py-2">
            <FaShieldAlt className="text-[#087B5A]" size={13} />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#087B5A]">
              Safety First
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Essential Guidance
            <span className="block text-[#087B5A]">
              Around Explosive Hazards
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            Knowing what to do when encountering a suspected explosive hazard
            can help reduce risk and protect individuals, families, and
            communities.
          </p>
        </motion.div>

        {/* Safety Steps */}
        <div className="relative mt-16 grid gap-7 lg:grid-cols-3">
          {/* Connecting Line */}
          <div
            aria-hidden="true"
            className="absolute left-[16.66%] right-[16.66%] top-28 hidden h-px bg-gradient-to-r from-[#087B5A]/10 via-[#087B5A]/30 to-[#087B5A]/10 lg:block"
          />

          {safetySteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.number}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-80px",
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-[#0B3D2E]">
                  <img
                    src={step.image}
                    alt={step.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#041F18]/90 via-[#0B3D2E]/20 to-transparent" />

                  {/* Step Number */}
                  <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-sm font-bold text-white shadow-lg backdrop-blur-md">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="absolute bottom-5 left-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#087B5A] text-white shadow-lg">
                    <Icon size={17} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="text-2xl font-bold text-[#0F172A]">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>

                  {/* Step Indicator */}
                  <div className="mt-6 flex items-center gap-2">
                    <span className="h-1 w-8 rounded-full bg-[#087B5A]" />
                    <span className="h-1 w-2 rounded-full bg-slate-200" />
                    <span className="h-1 w-2 rounded-full bg-slate-200" />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Important Safety Message */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-80px",
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative mt-14 overflow-hidden rounded-3xl bg-[#0B3D2E]"
        >
          {/* Decorative Elements */}
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#087B5A]/30 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-[#F97316]/10 blur-3xl"
          />

          <div className="relative z-10 flex flex-col gap-8 p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-12">
            {/* Message */}
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F97316] text-white shadow-lg">
                  <FaExclamationTriangle size={16} />
                </div>

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A7F3D0]">
                  Important Safety Message
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
                If You See a Suspicious Object
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-green-50/70 sm:text-base">
                Do not touch it. Do not approach it. Do not attempt to move it.
                Keep yourself and others away from the area and report the
                suspected hazard through the appropriate channels.
              </p>
            </div>

            {/* CTA */}
            <a
              href="#knowledge-categories"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-[#F97316] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:gap-4 hover:bg-[#EA580C] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:ring-offset-2 focus:ring-offset-[#0B3D2E]"
            >
              Learn More
              <FaArrowRight size={12} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
