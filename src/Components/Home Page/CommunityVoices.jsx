import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

import { communityVoicesData } from "../../Components/Data File/Main Page Data/CommunityVoicesData";

export default function CommunityVoices() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-24 sm:py-28">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-48 top-10 h-[420px] w-[420px] rounded-full bg-[#087B5A]/5 blur-3xl" />

        <div className="absolute -right-48 bottom-0 h-[420px] w-[420px] rounded-full bg-[#F97316]/5 blur-3xl" />

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

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            HEADER
        ====================================================== */}

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
            margin: "-100px",
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          {/* Section Label */}

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#F97316]" />

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#087B5A] sm:text-sm">
              Community Voices
            </span>

            <span className="h-px w-10 bg-[#F97316]" />
          </div>

          {/* Heading */}

          <h2 className="text-3xl font-black leading-[1.1] tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Stories From the
            <span className="block text-[#087B5A]">Communities We Serve</span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            The impact of humanitarian mine action is measured not only in land
            cleared, but also in the lives made safer and communities given
            renewed confidence.
          </p>
        </motion.div>

        {/* =====================================================
            TESTIMONIALS
        ====================================================== */}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {communityVoicesData.map((item, index) => (
            <motion.article
              key={item.id}
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
                margin: "-60px",
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -8,
              }}
              className="
                group
                relative
                flex
                h-full
                flex-col
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-7
                shadow-sm
                transition-all
                duration-300
                hover:border-[#087B5A]/20
                hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]
                sm:p-8
              "
            >
              {/* =================================================
                  TOP ACCENT
              ================================================== */}

              <div
                className="
                  absolute
                  left-0
                  right-0
                  top-0
                  h-1
                  bg-gradient-to-r
                  from-[#087B5A]
                  via-[#087B5A]
                  to-[#F97316]
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
              />

              {/* =================================================
                  DECORATIVE QUOTE
              ================================================== */}

              <FaQuoteLeft
                className="
                  pointer-events-none
                  absolute
                  right-7
                  top-7
                  text-6xl
                  text-[#087B5A]/5
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
              />

              {/* =================================================
                  QUOTE ICON
              ================================================== */}

              <div
                className="
                  relative
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#087B5A]/10
                  text-[#087B5A]
                  transition-all
                  duration-300
                  group-hover:bg-[#087B5A]
                  group-hover:text-white
                "
              >
                <FaQuoteLeft size={16} />
              </div>

              {/* =================================================
                  QUOTE
              ================================================== */}

              <blockquote className="relative mt-7">
                <p className="text-[15px] leading-7 text-slate-600">
                  “{item.quote}”
                </p>
              </blockquote>

              {/* =================================================
                  DIVIDER
              ================================================== */}

              <div className="my-7 h-px bg-slate-100" />

              {/* =================================================
                  AUTHOR
              ================================================== */}

              <div className="mt-auto">
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

              {/* =================================================
                  BOTTOM ACCENT
              ================================================== */}

              <div
                className="
                  absolute
                  bottom-0
                  left-8
                  h-[2px]
                  w-0
                  bg-[#F97316]
                  transition-all
                  duration-500
                  group-hover:w-16
                "
              />
            </motion.article>
          ))}
        </div>

        {/* =====================================================
            TRUST / SAFEGUARDING NOTE
        ====================================================== */}

        <motion.div
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
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="
            mx-auto
            mt-10
            flex
            max-w-3xl
            flex-col
            items-center
            justify-center
            gap-3
            text-center
            sm:flex-row
          "
        >
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F97316]" />

          <p className="text-xs leading-6 text-slate-400">
            Community stories are published with appropriate consent and in
            accordance with DAFA's communication and safeguarding policies.
          </p>
        </motion.div>

        {/* =====================================================
            OPTIONAL CTA
        ====================================================== */}

        <motion.div
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
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
          className="mt-10 text-center"
        >
          <a
            href="/resources/stories"
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-xl
              border
              border-[#087B5A]/20
              bg-white
              px-7
              py-3.5
              text-sm
              font-bold
              text-[#087B5A]
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#087B5A]
              hover:bg-[#087B5A]
              hover:text-white
              hover:shadow-lg
            "
          >
            <span>Explore Community Stories</span>

            <FaArrowRight
              size={11}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
