import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaCogs, FaUsers, FaCheckDouble } from "react-icons/fa";

const approaches = [
  {
    icon: FaShieldAlt,
    number: "01",
    title: "Safety First",
    description:
      "Safety remains central to every mechanical demining activity, from operational planning and machine deployment to field monitoring and verification.",
  },
  {
    icon: FaCogs,
    number: "02",
    title: "Specialized Equipment",
    description:
      "Specialized mechanical assets are selected and used according to terrain, contamination, and the specific requirements of each operational area.",
  },
  {
    icon: FaUsers,
    number: "03",
    title: "Skilled Teams",
    description:
      "Experienced personnel coordinate mechanical operations, field activities, safety procedures, and technical requirements throughout the clearance process.",
  },
  {
    icon: FaCheckDouble,
    number: "04",
    title: "Quality Assurance",
    description:
      "Monitoring, quality control, and verification processes help ensure that mechanical activities are carried out according to established operational requirements.",
  },
];

export default function MechanicalApproach() {
  return (
    <section className="relative overflow-hidden bg-[#0B3D2E] py-20 sm:py-24">
      {/* Background Decorations */}
      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#A7F3D0]/10 blur-3xl" />

      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#0284C7]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A7F3D0]">
            Our Approach
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Built Around Safety,
            <span className="block text-[#A7F3D0]">
              Quality & Professionalism
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-green-50/70 sm:text-lg">
            DAFA's mechanical demining activities combine appropriate equipment,
            trained personnel, careful planning, and quality assurance to
            support humanitarian mine action operations.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {approaches.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#A7F3D0]/30 hover:bg-white/[0.09]"
              >
                {/* Number */}
                <span className="absolute right-5 top-4 text-4xl font-black text-white/[0.06]">
                  {item.number}
                </span>

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#A7F3D0]/10 text-[#A7F3D0] transition-all duration-300 group-hover:bg-[#A7F3D0] group-hover:text-[#0B3D2E]">
                  <Icon size={20} />
                </div>

                {/* Content */}
                <h3 className="mt-6 text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-green-50/60">
                  {item.description}
                </p>

                {/* Bottom Accent */}
                <div className="mt-6 h-px w-10 bg-[#A7F3D0]/30 transition-all duration-300 group-hover:w-full group-hover:bg-[#A7F3D0]/60" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7"
        >
          <div>
            <p className="text-sm font-semibold text-[#A7F3D0]">
              Humanitarian Focus
            </p>

            <p className="mt-1 text-sm leading-6 text-green-50/60">
              Our operations are focused on reducing explosive hazard risks and
              supporting safer communities.
            </p>
          </div>

          <div className="shrink-0 text-sm font-bold text-white">
            Safety • Quality • Accountability
          </div>
        </motion.div>
      </div>
    </section>
  );
}
