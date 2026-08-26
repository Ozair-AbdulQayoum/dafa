import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaCheckCircle } from "react-icons/fa";

import beyondDeminingData from "../../Components/Data File/What We Do Data/BeyondDeminingDetails";

export default function BeyondDeminingDetails() {
  const { slug } = useParams();

  const activity = beyondDeminingData.find((item) => item.slug === slug);

  // =====================================================
  // NOT FOUND
  // =====================================================

  if (!activity) {
    return (
      <main className="min-h-[60vh] bg-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-5 py-32 text-center">
          <h1 className="text-3xl font-bold text-[#0F172A]">
            Activity Not Found
          </h1>

          <p className="mt-4 text-slate-500">
            The humanitarian activity you are looking for could not be found.
          </p>

          <Link
            to="/beyond-demining"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#087B5A] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0B3D2E]"
          >
            <FaArrowLeft size={12} />
            Back to Humanitarian Support
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#06281E]">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#A7F3D0]/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#0284C7]/10 blur-3xl" />

        <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:60px_60px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24 lg:px-10 lg:py-28">
          {/* Back */}

          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/beyond-demining"
              className="inline-flex items-center gap-2 text-sm font-semibold text-green-50/70 transition hover:text-white"
            >
              <FaArrowLeft size={11} />
              Humanitarian Support
            </Link>
          </motion.div>

          {/* Hero Content */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-10 max-w-4xl"
          >
            <span className="inline-flex rounded-lg bg-[#A7F3D0]/10 px-3 py-1.5 text-xs font-bold tracking-wider text-[#A7F3D0]">
              {activity.abbreviation}
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              {activity.title}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-green-50/70 sm:text-lg">
              {activity.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          OVERVIEW
      ===================================================== */}

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Overview */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
                Overview
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0F172A] sm:text-4xl">
                {activity.shortTitle}
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600">
                {activity.overview}
              </p>

              {activity.focus && (
                <div className="mt-8 rounded-2xl border-l-4 border-[#087B5A] bg-[#F8FAFC] p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
                    Our Focus
                  </p>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {activity.focus}
                  </p>
                </div>
              )}
            </motion.div>

            {/* Key Areas */}

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-7"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
                Humanitarian Support
              </p>

              <h3 className="mt-3 text-xl font-bold text-[#0F172A]">
                Key Areas
              </h3>

              <div className="mt-6 space-y-4">
                {activity.activities.slice(0, 5).map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <FaCheckCircle
                      className="mt-1 shrink-0 text-[#087B5A]"
                      size={15}
                    />

                    <span className="text-sm leading-6 text-slate-600">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          IMAGE GALLERY
      ===================================================== */}

      <section className="border-y border-slate-100 bg-[#F8FAFC] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
              Field Activities
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0F172A] sm:text-4xl">
              Our Work in Action
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-500">
              Explore DAFA's humanitarian activities and community-focused work
              through the field.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {activity.images.map((image, index) => (
              <motion.div
                key={image}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="h-72 overflow-hidden bg-[#E8F3EF]">
                  <img
                    src={image}
                    alt={`${activity.title} ${index + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ACTIVITIES
      ===================================================== */}

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
              What We Do
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0F172A] sm:text-4xl">
              Key Activities
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-500">
              Our humanitarian interventions are designed around community needs
              and delivered through coordinated activities.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {activity.activities.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.04,
                }}
                className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#087B5A]/10 text-[#087B5A]">
                  <FaCheckCircle size={14} />
                </span>

                <span className="pt-1 text-sm font-medium leading-6 text-slate-700">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          IMPACT
      ===================================================== */}

      {activity.impact && (
        <section className="bg-[#06281E] py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A7F3D0]">
                Our Impact
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Supporting Communities
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-green-50/70">
                {activity.impact}
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* =====================================================
          BOTTOM NAVIGATION
      ===================================================== */}

      <section className="border-t border-slate-100 bg-[#F8FAFC] py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 sm:px-8 md:flex-row lg:px-10">
          <Link
            to="/beyond-demining"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#087B5A] transition hover:text-[#0B3D2E]"
          >
            <FaArrowLeft size={11} />
            Back to Humanitarian Support
          </Link>

          <Link
            to="/what-we-do"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#087B5A] transition hover:text-[#0B3D2E]"
          >
            Explore Mine Action Activities
            <FaArrowRight size={11} />
          </Link>
        </div>
      </section>
    </main>
  );
}
