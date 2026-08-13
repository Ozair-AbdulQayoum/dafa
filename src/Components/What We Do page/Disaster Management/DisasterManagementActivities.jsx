import React from "react";
import { motion } from "framer-motion";
import {
  FaAmbulance,
  FaHandsHelping,
  FaHome,
  FaPeopleCarry,
  FaShieldAlt,
  FaWater,
} from "react-icons/fa";

const activities = [
  {
    icon: FaAmbulance,
    number: "01",
    title: "Emergency Response Support",
    description:
      "Supporting humanitarian partners and affected communities during emergency situations with coordinated response activities.",
  },
  {
    icon: FaHandsHelping,
    number: "02",
    title: "Humanitarian Assistance",
    description:
      "Providing practical assistance to vulnerable communities affected by disasters and other emergency situations.",
  },
  {
    icon: FaPeopleCarry,
    number: "03",
    title: "Community Mobilization",
    description:
      "Working with local communities to identify needs, coordinate support, and strengthen community participation.",
  },
  {
    icon: FaShieldAlt,
    number: "04",
    title: "Safety & Protection",
    description:
      "Helping communities understand risks and promoting safer practices during and after emergency situations.",
  },
  {
    icon: FaHome,
    number: "05",
    title: "Recovery Support",
    description:
      "Supporting recovery activities that help affected communities restore essential conditions and regain stability.",
  },
  {
    icon: FaWater,
    number: "06",
    title: "Natural Disaster Support",
    description:
      "Assisting communities and humanitarian actors responding to floods, earthquakes, severe weather, and other disasters.",
  },
];

export default function DisasterManagementActivities() {
  return (
    <section
      id="disaster-activities"
      className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-28"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#087B5A]/5 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#F97316]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-9 rounded-full bg-[#F97316]" />

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#087B5A] sm:text-sm">
              What We Do
            </p>

            <span className="h-[2px] w-9 rounded-full bg-[#F97316]" />
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Disaster Management
            <span className="block text-[#087B5A]">Activities</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            DAFA contributes to humanitarian disaster-response efforts by
            supporting communities, coordinating assistance, and helping
            affected people move toward recovery.
          </p>
        </motion.div>

        {/* ================= ACTIVITY GRID ================= */}

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity, index) => {
            const Icon = activity.icon;

            return (
              <motion.article
                key={activity.title}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{
                  once: true,
                  margin: "-70px",
                }}
                whileHover={{
                  y: -7,
                }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-[#087B5A]/20 hover:shadow-xl"
              >
                {/* Number */}

                <div className="absolute right-6 top-5 text-4xl font-black tracking-tight text-slate-100 transition-colors duration-300 group-hover:text-[#087B5A]/10">
                  {activity.number}
                </div>

                {/* Icon */}

                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#087B5A]/10 text-[#087B5A] transition-all duration-300 group-hover:bg-[#087B5A] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#087B5A]/20">
                  <Icon size={21} />
                </div>

                {/* Content */}

                <div className="relative mt-7">
                  <h3 className="text-xl font-bold leading-tight tracking-tight text-[#0F172A] transition-colors duration-300 group-hover:text-[#087B5A]">
                    {activity.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {activity.description}
                  </p>
                </div>

                {/* Bottom accent */}

                <div className="mt-7 h-1 w-10 rounded-full bg-[#F97316] transition-all duration-300 group-hover:w-16" />
              </motion.article>
            );
          })}
        </div>

        {/* ================= BOTTOM MESSAGE ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          viewport={{ once: true }}
          className="mt-12 rounded-3xl border border-[#087B5A]/10 bg-white p-7 shadow-sm sm:p-8"
        >
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F97316]">
                Community First
              </p>

              <h3 className="mt-2 text-xl font-extrabold tracking-tight text-[#0F172A] sm:text-2xl">
                Responding with people, safety, and dignity at the center.
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500 sm:text-base">
                Our disaster-management support is designed to complement
                humanitarian efforts and respond to the needs of affected
                communities.
              </p>
            </div>

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F97316]/10 text-[#F97316]">
              <FaHandsHelping size={22} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
