import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";

const project = {
  title: "Community Cash for Work Initiative",
  location: "Afghanistan",
  duration: "2025–2026",
  beneficiaries: "1,500+",
  description:
    "A community-focused initiative providing temporary employment opportunities while supporting essential community improvement activities and strengthening household resilience.",
  activities: [
    "Temporary employment for vulnerable community members",
    "Community-based improvement activities",
    "Support for household income and resilience",
    "Inclusive participation of local communities",
  ],
};

export default function CashForWorkProject() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#087B5A]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#F97316]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-9 rounded-full bg-[#F97316]" />

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#087B5A]">
              Featured Initiative
            </span>

            <span className="h-[2px] w-9 rounded-full bg-[#F97316]" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Our First{" "}
            <span className="text-[#087B5A]">Cash for Work Project</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Creating temporary employment while helping communities improve
            their local environment and strengthen their resilience.
          </p>
        </motion.div>

        {/* Project Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.8 }}
          className="mt-14 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl"
        >
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            {/* Visual */}
            <div className="relative min-h-[360px] overflow-hidden bg-[#0B3D2E]">
              {/* Replace this with the authentic DAFA project image */}
              <img
                src="/images/cash-for-work/project.jpg"
                alt="DAFA Cash for Work community project"
                className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-br from-[#0B3D2E]/90 via-[#0B3D2E]/45 to-[#087B5A]/40" />

              <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                DAFA Humanitarian Initiative
              </div>

              <div className="absolute bottom-7 left-6 right-6 text-white sm:left-8 sm:right-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#A7F3D0]">
                  Community Support
                </p>

                <h3 className="mt-2 text-2xl font-extrabold leading-tight sm:text-3xl">
                  Community Cash for Work Initiative
                </h3>
              </div>
            </div>

            {/* Content */}
            <div className="p-7 sm:p-9 lg:p-10">
              <div className="grid gap-3 sm:grid-cols-3">
                <InfoItem
                  icon={<FaMapMarkerAlt />}
                  label="Location"
                  value={project.location}
                />

                <InfoItem
                  icon={<FaCalendarAlt />}
                  label="Duration"
                  value={project.duration}
                />

                <InfoItem
                  icon={<FaUsers />}
                  label="Beneficiaries"
                  value={project.beneficiaries}
                />
              </div>

              <div className="my-8 h-px bg-slate-100" />

              <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                {project.description}
              </p>

              <h4 className="mt-8 text-lg font-extrabold text-[#0F172A]">
                Key Activities
              </h4>

              <div className="mt-4 space-y-3">
                {project.activities.map((activity, index) => (
                  <motion.div
                    key={activity}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08,
                    }}
                    className="flex items-start gap-3"
                  >
                    <FaCheckCircle className="mt-1 shrink-0 text-[#087B5A]" />

                    <p className="text-sm leading-6 text-slate-600">
                      {activity}
                    </p>
                  </motion.div>
                ))}
              </div>

              <button
                type="button"
                className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-[#087B5A] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#087B5A]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B3D2E] hover:shadow-xl"
              >
                <span>Explore Project</span>

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                  <FaArrowRight
                    size={11}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-10 max-w-4xl rounded-2xl border border-[#087B5A]/10 bg-[#087B5A]/5 px-6 py-6 text-center sm:px-10"
        >
          <p className="text-sm leading-7 text-slate-600 sm:text-base">
            <span className="font-bold text-[#087B5A]">Beyond employment:</span>{" "}
            the initiative connects short-term livelihood support with community
            improvement, helping families and communities build greater
            resilience.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function InfoItem({ icon, label, value }) {
  return (
    <div className="rounded-xl bg-slate-50 p-4">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#087B5A]">
        {icon}
        <span>{label}</span>
      </div>

      <p className="mt-2 text-sm font-extrabold text-[#0F172A]">{value}</p>
    </div>
  );
}
