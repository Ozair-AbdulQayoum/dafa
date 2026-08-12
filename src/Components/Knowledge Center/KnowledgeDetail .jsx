import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBookOpen,
  FaShieldAlt,
  FaGraduationCap,
  FaTools,
  FaQuestionCircle,
} from "react-icons/fa";

const knowledgeAreas = [
  {
    slug: "mine-action-basics",
    number: "01",
    icon: FaBookOpen,
    category: "Fundamentals",
    title: "Mine Action Basics",
    description:
      "Build a strong understanding of humanitarian mine action, including landmines, explosive remnants of war, survey, clearance, land release, and the role of mine-action organizations.",
    image: "/images/knowledge/mine-action-basics.jpg",
  },
  {
    slug: "safety-awareness",
    number: "02",
    icon: FaShieldAlt,
    category: "Community Safety",
    title: "Safety & Awareness",
    description:
      "Learn how to recognize potential explosive hazards, understand risk, and follow safer behavior when living, working, or traveling in affected areas.",
    image: "/images/knowledge/safety-awareness.jpg",
  },
  {
    slug: "training-education",
    number: "03",
    icon: FaGraduationCap,
    category: "Learning & Training",
    title: "Training & Education",
    description:
      "Explore educational materials and learning resources designed to support communities, humanitarian workers, students, and mine-action professionals.",
    image: "/images/knowledge/training-education.jpg",
  },
  {
    slug: "technical-knowledge",
    number: "04",
    icon: FaTools,
    category: "Technical Resources",
    title: "Technical Knowledge",
    description:
      "Explore technical information covering non-technical survey, technical survey, clearance operations, EOD, safety procedures, and quality management.",
    image: "/images/knowledge/technical-knowledge.jpg",
  },
  {
    slug: "frequently-asked-questions",
    number: "05",
    icon: FaQuestionCircle,
    category: "Information",
    title: "Frequently Asked Questions",
    description:
      "Find straightforward answers to common questions about explosive hazards, humanitarian mine action, safety, clearance activities, and DAFA.",
    image: "/images/knowledge/faq.jpg",
  },
];

export default function KnowledgeCategories() {
  return (
    <section
      id="knowledge-categories"
      className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-28"
    >
      {/* Background Decorations */}

      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-[#087B5A]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-40 h-96 w-96 rounded-full bg-[#F97316]/5 blur-3xl" />

      {/* Container */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            SECTION HEADER
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
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#087B5A]">
            Explore & Learn
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Knowledge That
            <span className="block text-[#087B5A]">Helps Save Lives</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            Explore educational and technical information about humanitarian
            mine action, explosive hazards, safety, and DAFA's work across
            Afghanistan.
          </p>
        </motion.div>

        {/* =====================================================
            KNOWLEDGE AREAS
        ====================================================== */}

        <div className="mt-16 space-y-10 lg:mt-20 lg:space-y-14">
          {knowledgeAreas.map((item, index) => {
            const Icon = item.icon;
            const imageLeft = index % 2 === 0;

            return (
              <motion.article
                key={item.slug}
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
                  margin: "-80px",
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.05,
                }}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`grid lg:grid-cols-2 ${
                    !imageLeft ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* =================================================
                      IMAGE
                  ================================================== */}

                  <div className="relative min-h-[300px] overflow-hidden bg-[#0B3D2E] sm:min-h-[360px] lg:min-h-[430px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    {/* Image Overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#041F18]/80 via-[#0B3D2E]/20 to-transparent" />

                    {/* Number */}

                    <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-sm font-bold text-white backdrop-blur-md">
                      {item.number}
                    </div>

                    {/* Image Label */}

                    <div className="absolute bottom-6 left-6 flex items-center gap-3 text-white">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#087B5A]">
                        <Icon size={16} />
                      </div>

                      <span className="text-xs font-bold uppercase tracking-[0.15em] text-white/80">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================== */}

                  <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
                    {/* Small Label */}

                    <div className="flex items-center gap-3">
                      <span className="h-px w-8 bg-[#F97316]" />

                      <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#087B5A]">
                        Knowledge Area
                      </span>
                    </div>

                    {/* Title */}

                    <h3 className="mt-5 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                      {item.title}
                    </h3>

                    {/* Description */}

                    <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
                      {item.description}
                    </p>

                    {/* Explore */}

                    <Link
                      to={`/knowledge-center/${item.slug}`}
                      className="mt-8 inline-flex w-fit items-center gap-3 rounded-xl bg-[#087B5A] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0B3D2E] hover:gap-4"
                    >
                      Explore Topic
                      <FaArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM INFORMATION
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-16 overflow-hidden rounded-3xl bg-[#0B3D2E] p-8 sm:p-10 lg:mt-20 lg:p-12"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A7F3D0]">
                Learn More
              </p>

              <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                Building Knowledge for Safer Communities
              </h3>

              <p className="mt-4 text-sm leading-7 text-green-50/70 sm:text-base">
                Knowledge and awareness are essential parts of humanitarian mine
                action. Explore our resources to better understand explosive
                hazards and the work being done to reduce their impact.
              </p>
            </div>

            <Link
              to="/projects"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-[#F97316] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#ea580c]"
            >
              Explore Our Projects
              <FaArrowRight size={12} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
