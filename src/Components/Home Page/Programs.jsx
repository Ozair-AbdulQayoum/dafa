import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaShieldAlt,
  FaUsers,
  FaMapMarkerAlt,
} from "react-icons/fa";

// ======================================================
// ADD OFFICIAL DAFA IMAGES WHEN AVAILABLE
// ======================================================
// import manualImg from "../../assets/programs/manual.jpg";
// import mechanicalImg from "../../assets/programs/mechanical.jpg";
// import iedImg from "../../assets/programs/ied.jpg";
// import eodImg from "../../assets/programs/eod.jpg";
// import eoreImg from "../../assets/programs/eore.jpg";
// import disasterImg from "../../assets/programs/disaster.jpg";
// import cashImg from "../../assets/programs/cash.jpg";

const programs = [
  {
    number: "01",
    image: "",
    title: "Manual Demining",
    slug: "manual-demining",
    category: "Clearance Operations",
    description:
      "Highly trained teams locate and safely clear landmines and explosive hazards, helping communities regain safe access to land.",
    impact: "Community-focused land clearance",
    coverage: "Across affected provinces",
  },
  {
    number: "02",
    image: "",
    title: "Mechanical Demining",
    slug: "mechanical-demining",
    category: "Clearance Operations",
    description:
      "Specialized machinery supports efficient and controlled clearance operations across larger contaminated areas.",
    impact: "Efficient area clearance",
    coverage: "Contaminated land",
  },
  {
    number: "03",
    image: "",
    title: "IED Response",
    slug: "ied-response",
    category: "Emergency Response",
    description:
      "Professional teams assess and respond to threats from improvised explosive devices to help protect people and communities.",
    impact: "Rapid threat response",
    coverage: "High-risk communities",
  },
  {
    number: "04",
    image: "",
    title: "Explosive Ordnance Disposal",
    slug: "explosive-ordnance-disposal",
    category: "EOD Services",
    description:
      "Specialists identify, manage and safely dispose of explosive remnants and other hazardous ordnance.",
    impact: "Explosive hazard reduction",
    coverage: "Affected locations",
  },
  {
    number: "05",
    image: "",
    title: "Explosive Ordnance Risk Education",
    slug: "risk-education",
    category: "Community Protection",
    description:
      "Community-focused education helps people recognize explosive hazards, understand risk and adopt safer behaviors.",
    impact: "Life-saving safety awareness",
    coverage: "Children & communities",
  },
  {
    number: "06",
    image: "",
    title: "Natural Disaster Management Support",
    slug: "disaster-management",
    category: "Humanitarian Support",
    description:
      "DAFA supports communities and humanitarian partners during emergencies and natural disasters.",
    impact: "Emergency community support",
    coverage: "Affected communities",
  },
  {
    number: "07",
    image: "",
    title: "Cash for Work",
    slug: "cash-for-work",
    category: "Community Support",
    description:
      "Temporary employment opportunities provide practical support to vulnerable communities while contributing to local recovery.",
    impact: "Livelihood support",
    coverage: "Vulnerable communities",
  },
];

export default function Programs() {
  const [showMore, setShowMore] = useState(false);

  const visiblePrograms = showMore ? programs : programs.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-24 sm:py-28 lg:py-32">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

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

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

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
            <span className="h-[2px] w-10 rounded-full bg-[#F97316]" />

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#087B5A] sm:text-sm">
              What We Do
            </p>

            <span className="h-[2px] w-10 rounded-full bg-[#F97316]" />
          </div>

          <h2 className="text-3xl font-extrabold leading-[1.08] tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Humanitarian Action
            <span className="block text-[#087B5A]">
              That Protects Communities
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            From land clearance to community education, DAFA delivers
            humanitarian services that reduce explosive risks and help people
            live, work and travel more safely.
          </p>
        </motion.div>

        {/* =====================================================
            PROGRAM GRID
        ===================================================== */}

        <motion.div layout className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {visiblePrograms.map((program, index) => (
            <motion.article
              layout
              key={program.slug}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{
                once: true,
                margin: "-70px",
              }}
              whileHover={{
                y: -8,
              }}
              className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:border-[#087B5A]/20 hover:shadow-2xl"
            >
              {/* =================================================
                  IMAGE
              ================================================= */}

              <div className="relative h-[260px] overflow-hidden bg-[#0B3D2E]">
                {program.image ? (
                  <img
                    src={program.image}
                    alt={program.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B3D2E] via-[#0B3D2E]/90 to-[#087B5A]" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                        <FaShieldAlt className="text-3xl text-[#A7F3D0]" />
                      </div>
                    </div>

                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-[#A7F3D0]/10" />

                    <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full border border-[#F97316]/10" />
                  </>
                )}

                {/* Image Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#052E23]/90 via-[#052E23]/10 to-transparent" />

                {/* Number */}

                <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-[#052E23]/50 text-xs font-bold text-white backdrop-blur-md">
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
              ================================================= */}

              <div className="p-7">
                <h3 className="text-xl font-extrabold leading-snug tracking-tight text-[#0F172A] transition-colors duration-300 group-hover:text-[#087B5A]">
                  {program.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {program.description}
                </p>

                {/* Impact Details */}

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-[#F8FAFC] p-3.5 transition-colors duration-300 group-hover:bg-[#087B5A]/5">
                    <div className="flex items-center gap-2 text-[#F97316]">
                      <FaUsers size={12} />

                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        Impact
                      </span>
                    </div>

                    <p className="mt-2 text-xs font-bold leading-5 text-[#0F172A]">
                      {program.impact}
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#F8FAFC] p-3.5 transition-colors duration-300 group-hover:bg-[#087B5A]/5">
                    <div className="flex items-center gap-2 text-[#087B5A]">
                      <FaMapMarkerAlt size={12} />

                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        Coverage
                      </span>
                    </div>

                    <p className="mt-2 text-xs font-bold leading-5 text-[#0F172A]">
                      {program.coverage}
                    </p>
                  </div>
                </div>

                {/* CTA */}

                <Link
                  to={`/what-we-do/${program.slug}`}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#087B5A]"
                >
                  <span>Learn More</span>

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#087B5A]/10 transition-all duration-300 group-hover/link:bg-[#087B5A] group-hover/link:text-white group-hover/link:translate-x-1">
                    <FaArrowRight size={10} />
                  </span>
                </Link>
              </div>

              {/* Bottom Hover Accent */}

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#F97316] transition-all duration-500 group-hover:w-full" />
            </motion.article>
          ))}
        </motion.div>

        {/* =====================================================
            SHOW MORE
        ===================================================== */}

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
                  showMore ? "rotate-[-90deg]" : "group-hover:translate-x-1"
                }`}
              >
                <FaArrowRight size={11} />
              </span>
            </button>
          </motion.div>
        )}

        {/* =====================================================
            BOTTOM IMPACT STATEMENT
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-4xl rounded-2xl border border-[#087B5A]/10 bg-[#087B5A]/5 px-6 py-6 text-center sm:px-10"
        >
          <p className="text-sm font-medium leading-7 text-[#0B3D2E] sm:text-base">
            Every program contributes to one goal:{" "}
            <span className="font-extrabold">
              reducing explosive risks and helping communities live safer.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
