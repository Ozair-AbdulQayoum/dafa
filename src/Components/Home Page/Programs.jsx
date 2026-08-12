import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaShieldAlt } from "react-icons/fa";

// Add official DAFA images when available.
// import manualImg from "../../assets/programs/manual.jpg";
// import mechanicalImg from "../../assets/programs/mechanical.jpg";
// import iedImg from "../../assets/programs/ied.jpg";
// import eodImg from "../../assets/programs/eod.jpg";
// import eoreImg from "../../assets/programs/eore.jpg";
// import disasterImg from "../../assets/programs/disaster.jpg";
// import cashImg from "../../assets/programs/cash.jpg";

const programs = [
  {
    image: "",
    title: "Manual Demining",
    slug: "manual-demining",
    description:
      "Highly trained teams locate and safely clear landmines and explosive hazards to protect communities and restore access to land.",
  },
  {
    image: "",
    title: "Mechanical Demining",
    slug: "mechanical-demining",
    description:
      "Specialized machinery supports safe and efficient clearance operations across contaminated areas.",
  },
  {
    image: "",
    title: "IED Response",
    slug: "ied-response",
    description:
      "Professional teams identify, assess, and respond to threats from improvised explosive devices.",
  },
  {
    image: "",
    title: "Explosive Ordnance Disposal",
    slug: "explosive-ordnance-disposal",
    description:
      "Specialists safely identify, remove, and dispose of explosive remnants and other hazardous ordnance.",
  },
  {
    image: "",
    title: "Explosive Ordnance Risk Education",
    slug: "risk-education",
    description:
      "Community-focused education helps people recognize explosive hazards and adopt safer behaviors.",
  },
  {
    image: "",
    title: "Natural Disaster Management Support",
    slug: "disaster-management",
    description:
      "Supporting communities and humanitarian partners during emergencies and natural disasters.",
  },
  {
    image: "",
    title: "Cash for Work",
    slug: "cash-for-work",
    description:
      "Supporting vulnerable communities through temporary employment and community-focused humanitarian assistance.",
  },
];

export default function Programs() {
  const [showMore, setShowMore] = useState(false);

  const visiblePrograms = showMore ? programs : programs.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-24 sm:py-28">
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-48 -top-48 h-[500px] w-[500px] rounded-full bg-[#087B5A]/5 blur-3xl" />

        <div className="absolute -bottom-48 -left-48 h-[500px] w-[500px] rounded-full bg-[#0284C7]/5 blur-3xl" />

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

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================= HEADING ================= */}
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
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#087B5A]/40" />

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#087B5A] sm:text-sm">
              Our Programs
            </p>

            <span className="h-px w-10 bg-[#087B5A]/40" />
          </div>

          <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Removing Explosive Hazards,
            <span className="block text-[#087B5A]">Protecting Communities</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            DAFA provides professional humanitarian services to reduce explosive
            risks, restore access to land, and help create safer environments
            across Afghanistan.
          </p>
        </motion.div>

        {/* ================= PROGRAM CARDS ================= */}
        <motion.div layout className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {visiblePrograms.map((program, index) => (
            <motion.article
              layout
              key={program.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{
                once: true,
                margin: "-60px",
              }}
              whileHover={{
                y: -8,
              }}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              {/* ================= IMAGE ================= */}
              <div className="relative h-56 overflow-hidden bg-[#0B3D2E]">
                {program.image ? (
                  <img
                    src={program.image}
                    alt={program.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <>
                    {/* Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-[#A7F3D0]/20 bg-white/5">
                        <FaShieldAlt className="text-3xl text-[#A7F3D0]" />
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B3D2E] via-[#0B3D2E]/90 to-[#087B5A]/70" />

                    <div className="absolute bottom-5 left-5">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A7F3D0]">
                        Humanitarian Mine Action
                      </span>
                    </div>
                  </>
                )}

                {/* Image overlay */}
                {program.image && (
                  <div className="absolute inset-0 bg-gradient-to-t from-[#052E23]/70 via-transparent to-transparent" />
                )}
              </div>

              {/* ================= CONTENT ================= */}
              <div className="p-7">
                <h3 className="text-xl font-bold leading-snug tracking-tight text-[#0F172A] transition-colors duration-300 group-hover:text-[#087B5A]">
                  {program.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {program.description}
                </p>

                <Link
                  to={`/what-we-do/${program.slug}`}
                  className="group/link mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#087B5A]"
                >
                  <span>Learn More</span>

                  <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                    <FaArrowRight size={12} />
                  </span>
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* ================= SHOW MORE ================= */}
        {programs.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-14 text-center"
          >
            <button
              type="button"
              onClick={() => setShowMore((prev) => !prev)}
              aria-expanded={showMore}
              className="group inline-flex items-center gap-3 rounded-xl bg-[#087B5A] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#087B5A]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B3D2E] hover:shadow-xl"
            >
              <span>
                {showMore ? "Show Less Programs" : "See All Programs"}
              </span>

              <span
                className={`flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 ${
                  showMore ? "rotate-[-90deg]" : ""
                }`}
              >
                <FaArrowRight size={11} />
              </span>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
