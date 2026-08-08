import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaAward, FaUsers, FaBalanceScale } from "react-icons/fa";

const commitments = [
  {
    icon: FaShieldAlt,
    title: "Safety First",
    text: "Protecting people and field teams through responsible and safe humanitarian operations.",
  },
  {
    icon: FaAward,
    title: "Professionalism",
    text: "Maintaining high standards, expertise, and professionalism across our activities.",
  },
  {
    icon: FaUsers,
    title: "Community Focus",
    text: "Listening to and working alongside communities affected by explosive hazards.",
  },
  {
    icon: FaBalanceScale,
    title: "Accountability",
    text: "Working responsibly and transparently with communities, partners, and stakeholders.",
  },
];

export default function Commitment() {
  return (
    <section className="relative overflow-hidden bg-[#0B3D2E] py-20 sm:py-24 lg:py-28">
      {/* Decorative Background */}
      <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#A7F3D0]/10 blur-3xl" />

      <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#0284C7]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-[#A7F3D0]">
            Our Commitment
          </span>

          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Committed to{" "}
            <span className="text-[#A7F3D0]">Safer Communities</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-green-50/75 sm:text-lg">
            DAFA is committed to delivering humanitarian mine action with
            professionalism, safety, accountability, and respect for the
            communities we serve.
          </p>
        </motion.div>

        {/* ================= COMMITMENTS ================= */}

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-[#A7F3D0]/30 hover:bg-white/10"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#A7F3D0]/10 text-[#A7F3D0] transition-all duration-300 group-hover:bg-[#A7F3D0] group-hover:text-[#0B3D2E]">
                  <Icon size={20} />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-lg font-bold text-white">
                  {item.title}
                </h3>

                {/* Text */}
                <p className="mt-3 text-sm leading-7 text-green-50/65">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* ================= BOTTOM STATEMENT ================= */}

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-14 max-w-4xl text-center"
        >
          <div className="h-px w-full bg-white/10" />

          <p className="mt-8 text-sm italic leading-7 text-green-50/60 sm:text-base">
            "Our work is guided by a commitment to safety, dignity, and a better
            future for communities across Afghanistan."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
