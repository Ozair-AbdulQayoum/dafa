import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCheck, FaMapMarkerAlt } from "react-icons/fa";

const stories = [
  {
    location: "Kandahar Province",
    title: "A Safer Tomorrow for Rural Families",
    description:
      "After demining operations, communities can safely access their land and continue daily activities without fear.",
    impact: "Families protected",
    image: "",
  },
  {
    location: "Nangarhar Province",
    title: "Safe Paths for Children",
    description:
      "Risk education programs helped communities understand explosive hazards and protect future generations.",
    impact: "Community awareness increased",
    image: "",
  },
  {
    location: "Helmand Province",
    title: "Land Returned to Communities",
    description:
      "Cleared land provides new opportunities for agriculture, livelihoods, and local development.",
    impact: "Land restored",
    image: "",
  },
];

export default function SuccessStories() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-24 sm:py-28">
      {/* ================= DECORATIVE BACKGROUND ================= */}

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#087B5A]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#0284C7]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================= HEADING ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
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
              Success Stories
            </p>

            <span className="h-px w-10 bg-[#087B5A]/40" />
          </div>

          <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Stories of Hope
            <span className="block text-[#087B5A]">From Communities</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Real stories showing how humanitarian mine action helps create safer
            communities and restores opportunities across Afghanistan.
          </p>
        </motion.div>

        {/* ================= STORY CARDS ================= */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story, index) => (
            <motion.article
              key={story.title}
              initial={{
                opacity: 0,
                y: 45,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{
                once: true,
                margin: "-70px",
              }}
              whileHover={{
                y: -8,
              }}
              className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              {/* ================= IMAGE ================= */}

              <div className="relative h-60 overflow-hidden bg-gradient-to-br from-[#0B3D2E] to-[#087B5A]">
                {story.image ? (
                  <motion.img
                    src={story.image}
                    alt={story.title}
                    className="h-full w-full object-cover"
                    whileHover={{
                      scale: 1.08,
                    }}
                    transition={{
                      duration: 0.7,
                    }}
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <div className="text-center text-white/70">
                      <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10">
                        <FaMapMarkerAlt className="text-xl" />
                      </div>

                      <span className="text-sm font-medium">Story Image</span>
                    </div>
                  </div>
                )}

                {/* Image Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#031F18]/70 via-transparent to-transparent" />

                {/* Location Badge */}

                <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#087B5A] shadow-lg">
                  <FaMapMarkerAlt />
                  {story.location}
                </div>
              </div>

              {/* ================= CONTENT ================= */}

              <div className="p-7">
                <h3 className="text-xl font-bold leading-snug text-[#0F172A] transition-colors duration-300 group-hover:text-[#087B5A]">
                  {story.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {story.description}
                </p>

                {/* Impact */}

                <div className="mt-6 flex items-center gap-3 rounded-xl border border-[#087B5A]/10 bg-[#087B5A]/5 px-4 py-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#087B5A] text-xs text-white">
                    <FaCheck />
                  </span>

                  <span className="text-sm font-bold text-[#087B5A]">
                    {story.impact}
                  </span>
                </div>

                {/* Read Story */}

                <Link
                  to="/stories"
                  className="group/link mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#087B5A]"
                >
                  Read Story
                  <FaArrowRight
                    size={12}
                    className="transition-transform duration-300 group-hover/link:translate-x-1"
                  />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ================= CTA ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="mt-14 text-center"
        >
          <Link
            to="/stories"
            className="group inline-flex items-center gap-3 rounded-xl bg-[#087B5A] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#087B5A]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B3D2E] hover:shadow-xl"
          >
            <span>View All Stories</span>

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
