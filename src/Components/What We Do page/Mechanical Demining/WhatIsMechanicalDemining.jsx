import React from "react";
import { motion } from "framer-motion";
import {
  FaCogs,
  FaShieldAlt,
  FaMapMarkedAlt,
  FaCheckCircle,
} from "react-icons/fa";

export default function WhatIsMechanicalDemining() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
            Mechanical Demining
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            What Is Mechanical Demining?
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Mechanical demining uses specialized machines and equipment to help
            clear hazardous areas and support humanitarian mine action
            operations across Afghanistan.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="overflow-hidden rounded-[2rem] bg-[#0B3D2E] shadow-xl">
              <div className="relative aspect-[4/3]">
                <img
                  src="/images/what-we-do/mechanical-demining.jpg"
                  alt="Mechanical demining operations"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#06281E]/70 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                    <FaCogs className="text-[#A7F3D0]" />
                    Specialized Equipment
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-lg font-semibold leading-8 text-[#0F172A]">
              Using specialized machinery to support safer and more efficient
              clearance of contaminated land.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Mechanical demining can be used in suitable environments where
              machines can safely support the clearance process. Specialized
              equipment helps process contaminated ground and can complement
              manual demining and other technical methods.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              DAFA's mechanical capabilities support field teams by improving
              operational efficiency while maintaining a strong focus on safety,
              quality, and humanitarian standards.
            </p>

            {/* Key Points */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A]">
                  <FaShieldAlt size={16} />
                </div>

                <div>
                  <h3 className="font-bold text-[#0F172A]">
                    Safety-Focused Operations
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Mechanical assets are operated with careful planning and
                    appropriate safety procedures.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#087B5B]/10 text-[#087B5A]">
                  <FaMapMarkedAlt size={16} />
                </div>

                <div>
                  <h3 className="font-bold text-[#0F172A]">
                    Suitable for Field Conditions
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Mechanical methods are selected according to terrain,
                    contamination, and operational requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A]">
                  <FaCheckCircle size={16} />
                </div>

                <div>
                  <h3 className="font-bold text-[#0F172A]">
                    Supports Humanitarian Clearance
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Mechanical operations can complement other clearance methods
                    to help return land to safe use.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
