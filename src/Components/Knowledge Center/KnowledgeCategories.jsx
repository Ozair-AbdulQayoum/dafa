import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBookOpen,
  FaGraduationCap,
  FaQuestionCircle,
  FaShieldAlt,
  FaTools,
} from "react-icons/fa";

const categories = [
  {
    icon: FaBookOpen,
    number: "01",
    title: "Mine Action Basics",
    description:
      "Learn about landmines, explosive remnants of war, humanitarian mine action, and clearance activities.",
  },
  {
    icon: FaShieldAlt,
    number: "02",
    title: "Safety & Awareness",
    description:
      "Understand explosive hazards, recognize risks, and learn safer behaviors for affected communities.",
  },
  {
    icon: FaGraduationCap,
    number: "03",
    title: "Training & Education",
    description:
      "Access educational materials and learning resources for communities, humanitarian workers, and professionals.",
  },
  {
    icon: FaTools,
    number: "04",
    title: "Technical Knowledge",
    description:
      "Explore technical information about surveys, clearance operations, EOD, safety procedures, and quality management.",
  },
  {
    icon: FaQuestionCircle,
    number: "05",
    title: "Frequently Asked Questions",
    description:
      "Find clear answers to common questions about explosive hazards, humanitarian mine action, and DAFA's work.",
  },
];

export default function KnowledgeCategories() {
  return (
    <section
      id="knowledge-categories"
      className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-28"
    >
      {/* ================= BACKGROUND DECORATION ================= */}

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#087B5A]/5 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#F97316]/5 blur-3xl" />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================= HEADER ================= */}

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
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#087B5A] sm:text-sm">
            Explore & Learn
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Explore Our
            <span className="block text-[#087B5A]">Knowledge Areas</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Discover reliable information and educational resources that support
            greater understanding of humanitarian mine action and safer
            communities.
          </p>
        </motion.div>

        {/* ================= CATEGORY GRID ================= */}

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-6">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.article
                key={category.title}
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
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -8,
                }}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-7
                  shadow-sm
                  transition-all
                  duration-300
                  hover:border-[#087B5A]/30
                  hover:shadow-xl
                  ${index < 3 ? "lg:col-span-2" : "lg:col-span-3"}
                `}
              >
                {/* Top Accent */}

                <div
                  className="
                    absolute
                    inset-x-0
                    top-0
                    h-1
                    origin-left
                    scale-x-0
                    bg-[#F97316]
                    transition-transform
                    duration-500
                    group-hover:scale-x-100
                  "
                />

                {/* Number */}

                <span
                  className="
                    absolute
                    right-6
                    top-5
                    text-4xl
                    font-black
                    text-slate-100
                    transition-colors
                    duration-300
                    group-hover:text-[#087B5A]/10
                  "
                >
                  {category.number}
                </span>

                {/* Icon */}

                <div
                  className="
                    relative
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#087B5A]/10
                    text-[#087B5A]
                    transition-all
                    duration-300
                    group-hover:bg-[#087B5A]
                    group-hover:text-white
                  "
                >
                  <Icon size={20} />
                </div>

                {/* Content */}

                <div className="relative">
                  <h3
                    className="
                      mt-6
                      text-xl
                      font-bold
                      leading-tight
                      text-[#0F172A]
                    "
                  >
                    {category.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-7
                      text-slate-500
                    "
                  >
                    {category.description}
                  </p>

                  {/* Explore */}

                  <button
                    type="button"
                    className="
                      mt-6
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-bold
                      text-[#087B5A]
                      transition-all
                      duration-300
                      group-hover:gap-3
                    "
                  >
                    Explore
                    <FaArrowRight
                      size={12}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </div>

                {/* Bottom Glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -bottom-16
                    -right-16
                    h-40
                    w-40
                    rounded-full
                    bg-[#087B5A]/5
                    blur-3xl
                    transition-all
                    duration-500
                    group-hover:bg-[#F97316]/10
                  "
                />
              </motion.article>
            );
          })}
        </div>

        {/* ================= BOTTOM STATEMENT ================= */}

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
            duration: 0.7,
            delay: 0.15,
          }}
          className="mx-auto mt-12 max-w-2xl text-center"
        >
          <div className="mx-auto mb-5 h-px w-16 bg-[#F97316]" />

          <p className="text-sm leading-7 text-slate-500 sm:text-base">
            The DAFA Knowledge Center brings together information designed to
            strengthen awareness, understanding, and knowledge of humanitarian
            mine action.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
