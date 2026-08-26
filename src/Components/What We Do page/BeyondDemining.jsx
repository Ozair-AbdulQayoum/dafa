import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import beyondDeminingData from "../../Components/Data File/What We Do Data/BeyondDeminingData";

export default function BeyondDemining() {
  return (
    <main className="bg-white">
      {/* =====================================================
          HUMANITARIAN SUPPORT
      ===================================================== */}

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* Section Introduction */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
              Humanitarian Support
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Supporting Communities Beyond Demining
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-500">
              Through additional humanitarian initiatives, DAFA works to support
              vulnerable communities, strengthen livelihoods, and respond to
              urgent needs.
            </p>
          </motion.div>

          {/* =================================================
              CARDS
          ================================================= */}

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {beyondDeminingData.map((activity, index) => (
              <motion.article
                key={activity.slug}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >
                <Link
                  to={`/beyond-demining/${activity.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#087B5A]/30 hover:shadow-xl"
                >
                  {/* Image */}

                  <div className="relative h-56 overflow-hidden bg-[#E8F3EF]">
                    <img
                      src={activity.images[0]}
                      alt={activity.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Abbreviation */}

                    <span className="absolute bottom-4 right-4 rounded-lg bg-[#06281E]/90 px-3 py-1.5 text-xs font-bold text-white">
                      {activity.abbreviation}
                    </span>
                  </div>

                  {/* Content */}

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-bold leading-snug text-[#0F172A] transition-colors group-hover:text-[#087B5A]">
                      {activity.title}
                    </h3>

                    <p className="mt-3 line-clamp-4 text-sm leading-7 text-slate-500">
                      {activity.description}
                    </p>

                    {/* Bottom */}

                    <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5">
                      <span className="text-sm font-semibold text-[#087B5A]">
                        Explore More
                      </span>

                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#087B5A]/10 text-[#087B5A] transition-all duration-300 group-hover:bg-[#087B5A] group-hover:text-white">
                        <FaArrowRight
                          size={12}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
