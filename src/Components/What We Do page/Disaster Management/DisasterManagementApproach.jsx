import React from "react";
import { motion } from "framer-motion";
import {
  FaClipboardCheck,
  FaHandsHelping,
  FaRegLifeRing,
  FaArrowRight,
} from "react-icons/fa";

const approachSteps = [
  {
    number: "01",
    icon: FaClipboardCheck,
    title: "Assess",
    description:
      "Identify disaster-related needs, affected communities, risks, and priority areas to help guide an effective humanitarian response.",
    accent: "#087B5A",
  },
  {
    number: "02",
    icon: FaHandsHelping,
    title: "Respond",
    description:
      "Coordinate with communities, humanitarian organizations, and relevant partners to provide timely and practical support.",
    accent: "#F97316",
  },
  {
    number: "03",
    icon: FaRegLifeRing,
    title: "Recover",
    description:
      "Support communities during recovery efforts by helping restore safer conditions and strengthening their ability to cope with future emergencies.",
    accent: "#2563EB",
  },
];

export default function DisasterManagementApproach() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28">
      {/* ================= BACKGROUND DECORATION ================= */}

      <div className="pointer-events-none absolute -left-48 top-20 h-[420px] w-[420px] rounded-full bg-[#087B5A]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-48 bottom-0 h-[420px] w-[420px] rounded-full bg-[#F97316]/5 blur-3xl" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(#0B3D2E 1px, transparent 1px), linear-gradient(90deg, #0B3D2E 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Eyebrow */}

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-9 rounded-full bg-[#F97316]" />

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#087B5A] sm:text-sm">
              Our Approach
            </span>

            <span className="h-[2px] w-9 rounded-full bg-[#F97316]" />
          </div>

          {/* Heading */}

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            A Coordinated Approach to
            <span className="block text-[#087B5A]">Disaster Management</span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            DAFA works with communities and humanitarian partners through a
            practical approach focused on understanding needs, responding
            effectively, and supporting recovery.
          </p>
        </motion.div>

        {/* ================= APPROACH STEPS ================= */}

        <div className="relative mt-16">
          {/* Connecting Line */}

          <div className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-16 hidden h-px bg-slate-200 lg:block" />

          <div className="grid gap-6 md:grid-cols-3">
            {approachSteps.map((step, index) => {
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
                  transition={{
                    duration: 0.65,
                    delay: index * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{
                    once: true,
                    margin: "-80px",
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="group relative"
                >
                  {/* ================= STEP NUMBER ================= */}

                  <div className="relative z-10 mx-auto flex h-32 w-32 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition-all duration-500 group-hover:border-[#087B5A]/20 group-hover:shadow-xl">
                    {/* Outer Ring */}

                    <div
                      className="absolute inset-3 rounded-full border border-dashed opacity-40 transition-all duration-500 group-hover:rotate-180 group-hover:opacity-70"
                      style={{
                        borderColor: step.accent,
                      }}
                    />

                    {/* Icon */}

                    <div
                      className="flex h-16 w-16 items-center justify-center rounded-2xl text-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                      style={{
                        backgroundColor: `${step.accent}12`,
                        color: step.accent,
                      }}
                    >
                      <Icon />
                    </div>

                    {/* Number */}

                    <span
                      className="absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full text-[10px] font-extrabold text-white shadow-md"
                      style={{
                        backgroundColor: step.accent,
                      }}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* ================= CONTENT ================= */}

                  <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 group-hover:border-slate-300 group-hover:shadow-lg sm:p-7">
                    <h3 className="text-xl font-extrabold tracking-tight text-[#0F172A] transition-colors duration-300 group-hover:text-[#087B5A]">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {step.description}
                    </p>

                    {/* Small Accent */}

                    <div className="mt-5 flex items-center justify-center gap-2">
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{
                          backgroundColor: step.accent,
                        }}
                      />

                      <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                        DAFA Response
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* ================= BOTTOM MESSAGE ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto mt-14 max-w-3xl"
        >
          <div className="relative overflow-hidden rounded-2xl border border-[#087B5A]/10 bg-[#F8FAFC] px-6 py-6 sm:px-8">
            {/* Accent */}

            <div className="absolute bottom-0 left-0 top-0 w-1 bg-[#087B5A]" />

            <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A]">
                <FaArrowRight />
              </div>

              <div>
                <p className="text-sm font-bold text-[#0F172A]">
                  Community-centered humanitarian action
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Our approach prioritizes coordination, safety, local needs,
                  and practical support throughout the response and recovery
                  process.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
