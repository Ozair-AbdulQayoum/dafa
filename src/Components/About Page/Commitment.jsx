import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaAward, FaUsers, FaBalanceScale } from "react-icons/fa";

const commitments = [
  {
    icon: FaShieldAlt,
    title: "Safety First",
    text: "Protecting communities and field teams through responsible, safe, and professional humanitarian operations.",
  },
  {
    icon: FaAward,
    title: "Professionalism",
    text: "Maintaining high standards, technical expertise, and professional practices across every activity.",
  },
  {
    icon: FaUsers,
    title: "Community Focus",
    text: "Working closely with communities to understand their needs and reduce the impact of explosive hazards.",
  },
  {
    icon: FaBalanceScale,
    title: "Accountability",
    text: "Working transparently and responsibly with communities, partners, donors, and other stakeholders.",
  },
];

export default function Commitment() {
  return (
    <section className="relative overflow-hidden bg-[#0B3D2E] py-16 sm:py-20 lg:py-24">
      {/* Decorative Elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#A7F3D0]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-40 h-[28rem] w-[28rem] rounded-full bg-[#0284C7]/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A7F3D0] sm:text-sm">
            Our Commitment
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Committed to{" "}
            <span className="text-[#A7F3D0]">Safer Communities</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-green-50/75 sm:text-base sm:leading-8 lg:text-lg">
            DAFA is committed to delivering humanitarian mine action with
            safety, professionalism, accountability, and respect for the
            communities we serve.
          </p>
        </motion.div>

        {/* ================= COMMITMENT CARDS ================= */}
        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -5 }}
                className="
                  group
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.06]
                  p-5
                  shadow-sm
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:border-[#A7F3D0]/30
                  hover:bg-white/[0.10]
                  hover:shadow-xl
                  sm:p-6
                "
              >
                {/* Icon */}
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#A7F3D0]/10
                    text-[#A7F3D0]
                    transition-all
                    duration-300
                    group-hover:bg-[#A7F3D0]
                    group-hover:text-[#0B3D2E]
                  "
                >
                  <Icon size={19} />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-base font-bold leading-snug text-white sm:text-lg">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-sm leading-7 text-green-50/65">
                  {item.text}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* ================= BOTTOM STATEMENT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-10 max-w-4xl sm:mt-12"
        >
          <div className="h-px w-full bg-white/10" />

          <p className="mx-auto mt-6 max-w-3xl text-center text-sm italic leading-7 text-green-50/60 sm:mt-7 sm:text-base">
            "Our work is guided by a commitment to safety, dignity, and a better
            future for communities across Afghanistan."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
