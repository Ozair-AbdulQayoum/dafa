// src/Components/Home-Page/PartnersDonors.jsx

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import partnerGroups from "../../Components/Data File/Main Page Data/PartnersDonorsData";

export default function PartnersDonors() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = shouldReduceMotion
    ? {
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 1, y: 0 },
      }
    : {
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.65,
            ease: "easeOut",
          },
        },
      };

  return (
    <section
      aria-labelledby="partners-donors-heading"
      className="relative overflow-hidden bg-[#F8FBF9] py-20 sm:py-24 lg:py-28"
    >
      {/* Subtle Background Details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-[#0B3D2E]/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#F97316]/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================= HEADER ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#0B3D2E]">
            <span className="h-px w-7 bg-[#F97316]" />
            Partners & Donors
            <span className="h-px w-7 bg-[#F97316]" />
          </span>

          <h2
            id="partners-donors-heading"
            className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl"
          >
            Working Together for Safer Communities
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            DAFA works with partners and donors to support humanitarian mine
            action and help create safer communities across Afghanistan.
          </p>
        </motion.div>

        {/* ================= PARTNER GROUPS ================= */}
        <div className="space-y-16 lg:space-y-20">
          {partnerGroups.map((group, groupIndex) => (
            <motion.div
              key={group.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={reveal}
              transition={{
                delay: shouldReduceMotion ? 0 : groupIndex * 0.08,
              }}
              className={
                groupIndex !== partnerGroups.length - 1
                  ? "border-b border-slate-200 pb-16 lg:pb-20"
                  : ""
              }
            >
              {/* Group Heading */}
              <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-1 h-12 w-1 shrink-0 rounded-full"
                    style={{ backgroundColor: group.accent }}
                  />

                  <div>
                    <h3 className="text-2xl font-bold text-[#0F172A] sm:text-3xl">
                      {group.title}
                    </h3>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                      {group.description}
                    </p>
                  </div>
                </div>

                <span className="shrink-0 text-sm font-semibold text-slate-500">
                  {group.logos.length}{" "}
                  {group.logos.length === 1 ? "Organization" : "Organizations"}
                </span>
              </div>

              {/* Logos Grid */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
                {group.logos.map((logo, logoIndex) => {
                  const logoContent = (
                    <div
                      className="
                        group
                        flex
                        min-h-[145px]
                        flex-col
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-slate-200
                        bg-white
                        px-4
                        py-6
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-slate-300
                        hover:shadow-md
                      "
                    >
                      {/* Logo */}
                      <div className="flex h-20 w-full items-center justify-center">
                        <img
                          src={logo.image}
                          alt={logo.name}
                          loading="lazy"
                          className="
                            max-h-16
                            w-auto
                            max-w-[150px]
                            object-contain
                            transition-transform
                            duration-300
                            group-hover:scale-105
                          "
                        />
                      </div>

                      {/* Organization Name */}
                      <p className="mt-4 text-center text-xs font-semibold leading-5 text-slate-600 sm:text-sm">
                        {logo.shortName}
                      </p>
                    </div>
                  );

                  return (
                    <motion.div
                      key={`${group.id}-${logo.name}`}
                      initial={
                        shouldReduceMotion
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 12 }
                      }
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.45,
                        delay: shouldReduceMotion ? 0 : logoIndex * 0.04,
                      }}
                    >
                      {logo.url ? (
                        <a
                          href={logo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit ${logo.name}`}
                        >
                          {logoContent}
                        </a>
                      ) : (
                        logoContent
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= FOOTER MESSAGE ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          className="mt-16 border-t border-slate-200 pt-8 text-center"
        >
          <p className="mx-auto max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            Through continued collaboration, DAFA and its partners work together
            to strengthen humanitarian mine action and support safer, more
            resilient communities.
          </p>

          <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#0B3D2E]">
            <span>Stronger Together</span>
            <FaArrowRight className="text-xs text-[#F97316]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
