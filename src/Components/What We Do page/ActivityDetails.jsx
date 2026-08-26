import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaCheckCircle } from "react-icons/fa";

import whatWeDoData from "../Data File/What We Do Data/ActivitiesData.js";

export default function ActivityDetails() {
  const { slug } = useParams();

  const activity = whatWeDoData.find((item) => item.slug === slug);

  /* =====================================================
     ACTIVITY NOT FOUND
  ===================================================== */

  if (!activity) {
    return (
      <main className="min-h-screen bg-white">
        <section className="flex min-h-[60vh] items-center justify-center px-5">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-[#0F172A]">
              Activity Not Found
            </h1>

            <p className="mt-4 text-slate-500">
              The requested activity could not be found.
            </p>

            <Link
              to="/what-we-do"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#087B5A] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0B3D2E]"
            >
              <FaArrowLeft size={12} />
              Back to What We Do
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-white">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#06281E]">
        {/* Background Decoration */}

        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#A7F3D0]/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#0284C7]/10 blur-3xl" />

        <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:60px_60px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24 lg:px-10 lg:py-28">
          {/* Back Button */}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/what-we-do"
              className="inline-flex items-center gap-2 text-sm font-semibold text-green-50/70 transition hover:text-white"
            >
              <FaArrowLeft size={12} />
              Back to What We Do
            </Link>
          </motion.div>

          {/* Hero Content */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-10 max-w-4xl"
          >
            {/* Abbreviation */}

            <span className="inline-flex rounded-lg bg-[#A7F3D0]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#A7F3D0]">
              {activity.abbreviation}
            </span>

            {/* Title */}

            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              {activity.title}
            </h1>

            {/* Description */}

            <p className="mt-6 max-w-3xl text-base leading-8 text-green-50/70 sm:text-lg">
              {activity.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* =================================================
              OVERVIEW
          ================================================= */}

          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            {/* Main Image */}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="overflow-hidden rounded-3xl"
            >
              <img
                src={activity.images[0]}
                alt={activity.title}
                className="h-[420px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </motion.div>

            {/* Overview */}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
                About This Activity
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                Overview
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600">
                {activity.overview}
              </p>
            </motion.div>
          </div>

          {/* =================================================
              KEY ACTIVITIES
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-24"
          >
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
                Our Work
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                Key Activities
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-500">
                Our teams carry out a range of activities based on operational
                requirements, approved procedures, and humanitarian mine action
                standards.
              </p>
            </div>

            {/* Activity List */}

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {activity.activities.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5 transition hover:border-[#087B5A]/30 hover:bg-white hover:shadow-md"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#087B5A]/10 text-[#087B5A]">
                    <FaCheckCircle size={15} />
                  </span>

                  <span className="text-sm font-semibold leading-6 text-[#0F172A]">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* =================================================
              IMAGE GALLERY
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-24"
          >
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
                Field Work
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                Activity in Action
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {activity.images.map((image, index) => (
                <motion.div
                  key={image}
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
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group overflow-hidden rounded-2xl bg-[#E8F3EF]"
                >
                  <img
                    src={image}
                    alt={`${activity.title} ${index + 1}`}
                    loading="lazy"
                    className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* =================================================
              BACK CTA
          ================================================= */}

          <div className="mt-20 flex justify-center">
            <Link
              to="/what-we-do"
              className="group inline-flex items-center gap-3 rounded-xl bg-[#087B5A] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0B3D2E]"
            >
              Explore All Activities
              <FaArrowRight
                size={12}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
