import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaCalendarAlt, FaNewspaper } from "react-icons/fa";

export default function NewsHero() {
  return (
    <section className="relative overflow-hidden bg-[#0B3D2E]">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#087B5A]/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#F97316]/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#A7F3D0]/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#A7F3D0]">
              <FaNewspaper size={12} />
              News & Updates
            </div>

            {/* Heading */}
            <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Latest News &<span className="block text-[#A7F3D0]">Updates</span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-8 text-green-50/80 sm:text-lg">
              Stay informed about DAFA's latest activities, meetings, trainings,
              partnerships, agreements, and humanitarian mine-action initiatives
              across Afghanistan.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#news"
                className="inline-flex items-center gap-2 rounded-xl bg-[#F97316] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#ea650d]"
              >
                Explore Updates
                <FaArrowRight size={11} />
              </a>

              <a
                href="#latest"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/15"
              >
                <FaCalendarAlt size={12} />
                Latest Activities
              </a>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#F97316]/10 blur-2xl" />

              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A7F3D0]">
                  DAFA Activities
                </p>

                <h2 className="mt-4 text-2xl font-bold leading-snug text-white sm:text-3xl">
                  Connecting People,
                  <br />
                  Building Partnerships
                </h2>

                <p className="mt-4 text-sm leading-7 text-green-100/70">
                  Follow important moments from DAFA's work, including official
                  meetings, capacity-building activities, training programs, and
                  new partnerships.
                </p>

                {/* Activity Items */}
                <div className="mt-7 space-y-3">
                  <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#087B5A] text-[#A7F3D0]">
                      <FaCalendarAlt size={15} />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-white">
                        Meetings & Events
                      </p>
                      <p className="mt-1 text-xs text-green-100/60">
                        Official DAFA activities
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F97316]/20 text-[#F97316]">
                      <FaNewspaper size={15} />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-white">
                        Training & Capacity Building
                      </p>
                      <p className="mt-1 text-xs text-green-100/60">
                        Developing field expertise
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#087B5A] text-[#A7F3D0]">
                      <FaArrowRight size={15} />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-white">
                        Partnerships & MoUs
                      </p>
                      <p className="mt-1 text-xs text-green-100/60">
                        Strengthening collaboration
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
