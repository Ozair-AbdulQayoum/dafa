import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaMapMarkerAlt } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "After DAFA cleared our area, our families can safely use the land again and continue their daily lives without fear.",
    name: "Community Member",
    location: "Kabul Province",
  },
  {
    quote:
      "Risk education programs helped our children understand explosive hazards and learn how to stay safe.",
    name: "Local Resident",
    location: "Kandahar Province",
  },
  {
    quote:
      "DAFA's humanitarian work has brought safety, awareness, and hope to our community.",
    name: "Community Representative",
    location: "Nangarhar Province",
  },
];

export default function CommunityVoices() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-24 sm:py-28">
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#087B5A]/5 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#F97316]/5 blur-3xl" />
      </div>

      {/* ================= CONTAINER ================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          {/* Label */}

          <div className="mb-5 inline-flex items-center gap-3">
            <span className="h-[2px] w-8 rounded-full bg-[#F97316]" />

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#087B5A]">
              Community Voices
            </span>

            <span className="h-[2px] w-8 rounded-full bg-[#F97316]" />
          </div>

          {/* Heading */}

          <h2 className="text-3xl font-black leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Stories From the{" "}
            <span className="text-[#087B5A]">Communities We Serve</span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
            The impact of humanitarian mine action is measured not only in land
            cleared, but also in the lives made safer and the communities given
            renewed confidence.
          </p>
        </motion.div>

        {/* ================= TESTIMONIAL CARDS ================= */}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={`${item.name}-${item.location}`}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -7,
              }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl sm:p-8"
            >
              {/* Top Accent */}

              <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#087B5A] via-[#087B5A] to-[#F97316] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Large Decorative Quote */}

              <FaQuoteLeft className="pointer-events-none absolute right-7 top-6 text-6xl text-[#087B5A]/5 transition-transform duration-500 group-hover:scale-110" />

              {/* Quote Icon */}

              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A] transition-all duration-300 group-hover:bg-[#087B5A] group-hover:text-white">
                <FaQuoteLeft size={17} />
              </div>

              {/* Quote */}

              <blockquote className="relative mt-7">
                <p className="text-[15px] leading-7 text-slate-600">
                  “{item.quote}”
                </p>
              </blockquote>

              {/* Divider */}

              <div className="my-7 h-px bg-slate-100" />

              {/* Person */}

              <div>
                <h3 className="text-base font-bold text-[#0F172A]">
                  {item.name}
                </h3>

                <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                  <FaMapMarkerAlt
                    size={12}
                    className="shrink-0 text-[#087B5A]"
                  />

                  <span>{item.location}</span>
                </div>
              </div>

              {/* Bottom Accent */}

              <div className="absolute bottom-0 left-8 h-[2px] w-0 bg-[#F97316] transition-all duration-500 group-hover:w-16" />
            </motion.article>
          ))}
        </div>

        {/* ================= DATA NOTE ================= */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-8 max-w-2xl text-center text-[11px] leading-6 text-slate-400"
        >
          Community stories and testimonials should be published only with
          appropriate consent and according to DAFA's communication and
          safeguarding policies.
        </motion.p>
      </div>
    </section>
  );
}
