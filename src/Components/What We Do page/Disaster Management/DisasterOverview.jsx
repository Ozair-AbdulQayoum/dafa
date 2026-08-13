import React from "react";
import { motion } from "framer-motion";
import {
  FaHandsHelping,
  FaPeopleCarry,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";

const supportAreas = [
  {
    icon: FaShieldAlt,
    title: "Emergency Response",
    description:
      "Supporting affected communities with timely humanitarian assistance and coordinated emergency response.",
  },
  {
    icon: FaPeopleCarry,
    title: "Community Support",
    description:
      "Working alongside communities and humanitarian partners to address urgent needs during emergencies.",
  },
  {
    icon: FaHandsHelping,
    title: "Humanitarian Coordination",
    description:
      "Supporting effective coordination between communities, local stakeholders, and humanitarian organizations.",
  },
];

export default function DisasterOverview() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28">
      {/* ================= BACKGROUND DECORATION ================= */}

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#087B5A]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#F97316]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================= SECTION HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-9 rounded-full bg-[#F97316]" />

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#087B5A] sm:text-sm">
              Our Role
            </span>

            <span className="h-[2px] w-9 rounded-full bg-[#F97316]" />
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Supporting Communities
            <span className="block text-[#087B5A]">
              When Emergencies Strike
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            DAFA works with communities and humanitarian partners to support
            disaster response, emergency assistance, and community recovery
            across Afghanistan.
          </p>
        </motion.div>

        {/* ================= MAIN CONTENT ================= */}

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
          {/* ================= IMAGE ================= */}

          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="group relative overflow-hidden rounded-[2rem] bg-[#0B3D2E] shadow-xl">
              {/* Replace with authentic DAFA image */}

              <img
                src="/images/disaster-management.jpg"
                alt="DAFA humanitarian disaster response activities"
                className="h-[430px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[500px]"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-[#052E23]/85 via-[#0B3D2E]/10 to-transparent" />

              {/* Orange accent */}

              <div className="absolute left-6 top-6 h-1 w-16 rounded-full bg-[#F97316]" />

              {/* Image caption */}

              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A7F3D0]">
                  Humanitarian Response
                </p>

                <h3 className="mt-2 max-w-md text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                  Standing with communities in times of crisis.
                </h3>
              </div>
            </div>

            {/* Floating badge */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 right-5 rounded-2xl border border-white bg-white px-5 py-4 shadow-xl sm:right-8"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#087B5A]">
                Our Commitment
              </p>

              <p className="mt-1 text-sm font-bold text-[#0F172A]">
                People First. Response Ready.
              </p>
            </motion.div>
          </motion.div>

          {/* ================= CONTENT ================= */}

          <div>
            <motion.div
              initial={{ opacity: 0, x: 45 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#087B5A]">
                Disaster Management Support
              </p>

              <h3 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-[#0F172A] sm:text-4xl">
                From emergency response
                <span className="text-[#087B5A]"> to community recovery.</span>
              </h3>

              <p className="mt-6 text-base leading-8 text-slate-600">
                Natural disasters can have a devastating impact on vulnerable
                communities. DAFA supports humanitarian efforts by working with
                communities, local stakeholders, and partners to help deliver
                timely assistance and strengthen emergency response efforts.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-600">
                Our approach focuses on practical support, coordination, and
                helping affected communities move toward safer and more
                resilient recovery.
              </p>
            </motion.div>

            {/* ================= SUPPORT AREAS ================= */}

            <div className="mt-9 space-y-4">
              {supportAreas.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true, margin: "-60px" }}
                    whileHover={{ x: 5 }}
                    className="group flex gap-4 rounded-2xl border border-slate-200 bg-[#F8FAFC] p-4 transition-all duration-300 hover:border-[#087B5A]/20 hover:bg-white hover:shadow-lg sm:p-5"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A] transition-all duration-300 group-hover:bg-[#087B5A] group-hover:text-white">
                      <Icon size={18} />
                    </div>

                    <div className="flex-1">
                      <h4 className="text-base font-bold text-[#0F172A]">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {item.description}
                      </p>
                    </div>

                    <FaArrowRight className="mt-2 shrink-0 text-xs text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#F97316]" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ================= BOTTOM PRINCIPLES ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 border-t border-slate-200 pt-8"
        >
          <div className="grid gap-6 text-center sm:grid-cols-3 sm:divide-x sm:divide-slate-200">
            <div>
              <p className="text-sm font-bold text-[#087B5A]">Preparedness</p>

              <p className="mt-1 text-xs text-slate-500">
                Strengthening readiness
              </p>
            </div>

            <div>
              <p className="text-sm font-bold text-[#087B5A]">Response</p>

              <p className="mt-1 text-xs text-slate-500">
                Acting when communities need support
              </p>
            </div>

            <div>
              <p className="text-sm font-bold text-[#087B5A]">Recovery</p>

              <p className="mt-1 text-xs text-slate-500">
                Supporting safer communities
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
