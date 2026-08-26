import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import { programs } from "../../Components/Data File/Main Page Data/ProgramsData";

export default function Programs() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-24 sm:py-28 lg:py-32">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-56 -top-56 h-[600px] w-[600px] rounded-full bg-[#087B5A]/5 blur-3xl" />

        <div className="absolute -bottom-56 -right-56 h-[600px] w-[600px] rounded-full bg-[#F97316]/5 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.018]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(#0B3D2E 1px, transparent 1px), linear-gradient(90deg, #0B3D2E 1px, transparent 1px)",
              backgroundSize: "64px 64px",
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 rounded-full bg-[#F97316]" />

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#087B5A] sm:text-sm">
              What We Do
            </span>

            <span className="h-[2px] w-10 rounded-full bg-[#F97316]" />
          </div>

          <h2 className="text-3xl font-extrabold leading-[1.08] tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Humanitarian Action
            <span className="block text-[#087B5A]">
              That Protects Communities
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            From land clearance to emergency response, DAFA delivers
            humanitarian services that reduce explosive risks and help
            communities live more safely.
          </p>
        </motion.div>

        {/* =====================================================
            THREE PROGRAM CARDS
        ====================================================== */}

        <div className="mx-auto grid max-w-6xl gap-7 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <motion.article
                key={program.slug}
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
                  margin: "-70px",
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:border-[#087B5A]/20 hover:shadow-2xl"
              >
                {/* =================================================
                    VISUAL AREA
                ================================================== */}

                <div className="relative h-[245px] overflow-hidden bg-[#0B3D2E]">
                  {program.image ? (
                    <img
                      src={program.image}
                      alt={program.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  ) : (
                    <>
                      {/* Background */}

                      <div className="absolute inset-0 bg-gradient-to-br from-[#0B3D2E] via-[#0B3D2E] to-[#087B5A]" />

                      {/* Top Decorative Circle */}

                      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/10" />

                      {/* Bottom Decorative Circle */}

                      <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full border border-[#F97316]/10" />

                      {/* Icon */}

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-[#A7F3D0] shadow-xl backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-white/15">
                          <Icon size={30} />
                        </div>
                      </div>
                    </>
                  )}

                  {/* Overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#052E23]/90 via-[#052E23]/10 to-transparent" />

                  {/* Number */}

                  <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-black/20 text-xs font-bold text-white backdrop-blur-md">
                    {program.number}
                  </div>

                  {/* Category */}

                  <div className="absolute bottom-5 left-5">
                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#A7F3D0] backdrop-blur-md">
                      {program.category}
                    </span>
                  </div>
                </div>

                {/* =================================================
                    CONTENT
                ================================================== */}

                <div className="p-7">
                  <h3 className="text-xl font-extrabold leading-snug tracking-tight text-[#0F172A] transition-colors duration-300 group-hover:text-[#087B5A]">
                    {program.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {program.description}
                  </p>

                  {/* =================================================
                      LEARN MORE
                  ================================================== */}

                  <Link
                    to={`/what-we-do/${program.slug}`}
                    className="group/link mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#087B5A] transition-colors duration-300 hover:text-[#0B3D2E]"
                  >
                    <span>Learn More</span>

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#087B5A]/10 transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:bg-[#087B5A] group-hover/link:text-white">
                      <FaArrowRight size={10} />
                    </span>
                  </Link>
                </div>

                {/* Bottom Accent */}

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#F97316] transition-all duration-500 group-hover:w-full" />
              </motion.article>
            );
          })}
        </div>

        {/* =====================================================
            VIEW ALL SERVICES
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
          className="mt-12 flex justify-center"
        >
          <Link
            to="/what-we-do"
            className="group inline-flex items-center gap-3 rounded-xl border border-[#087B5A] px-7 py-3.5 text-sm font-bold text-[#087B5A] transition-all duration-300 hover:-translate-y-1 hover:bg-[#087B5A] hover:text-white hover:shadow-lg"
          >
            <span>View All Our Services</span>

            <FaArrowRight
              size={12}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
