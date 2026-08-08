import React from "react";
import { motion } from "framer-motion";
import {
  FaUserTie,
  FaHardHat,
  FaClipboardCheck,
  FaHandsHelping,
} from "react-icons/fa";
const roles = [
  {
    number: "01",
    icon: FaUserTie,
    title: "Leadership",
    text: "Providing direction, strategic oversight, and organizational leadership.",
  },
  {
    number: "02",
    icon: FaHardHat,
    title: "Field Personnel",
    text: "Supporting humanitarian operations and working directly in affected areas.",
  },
  {
    number: "03",
    icon: FaClipboardCheck,
    title: "Technical Specialists",
    text: "Applying specialized knowledge to support safe and effective operations.",
  },
  {
    number: "04",
    icon: FaHandsHelping,
    title: "Support Teams",
    text: "Keeping administrative, logistical, and operational activities moving.",
  },
];
export default function TeamOverview() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {" "}
      {/* Background Decoration */}{" "}
      <div className="absolute right-[-180px] top-[-120px] h-[400px] w-[400px] rounded-full bg-[#087B5A]/5 blur-3xl" />{" "}
      <div className="absolute bottom-[-150px] left-[-150px] h-[350px] w-[350px] rounded-full bg-[#0284C7]/5 blur-3xl" />{" "}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {" "}
        {/* ================= SECTION HEADER ================= */}{" "}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          {" "}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            {" "}
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#087B5A]">
              {" "}
              Our People{" "}
            </span>{" "}
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
              {" "}
              One Mission.{" "}
              <span className="block text-[#087B5A]"> Many Roles. </span>{" "}
            </h2>{" "}
          </motion.div>{" "}
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-2xl text-base leading-8 text-slate-600 lg:ml-auto lg:text-lg"
          >
            {" "}
            DAFA brings together people with different responsibilities,
            professional backgrounds, and areas of expertise. Together, they
            contribute to one shared humanitarian mission.{" "}
          </motion.p>{" "}
        </div>{" "}
        {/* ================= ROLE TIMELINE ================= */}{" "}
        <div className="relative mt-16">
          {" "}
          {/* Desktop Line */}{" "}
          <div className="absolute left-0 right-0 top-[27px] hidden h-px bg-slate-200 lg:block" />{" "}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {" "}
            {roles.map((role, index) => {
              const Icon = role.icon;
              return (
                <motion.div
                  key={role.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  className="group relative"
                >
                  {" "}
                  {/* Number */}{" "}
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-[#087B5A] text-xs font-bold text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                    {" "}
                    {role.number}{" "}
                  </div>{" "}
                  {/* Card */}{" "}
                  <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#087B5A]/20 group-hover:shadow-lg">
                    {" "}
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A]">
                      {" "}
                      <Icon size={18} />{" "}
                    </div>{" "}
                    <h3 className="mt-5 text-lg font-bold text-[#0F172A]">
                      {" "}
                      {role.title}{" "}
                    </h3>{" "}
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {" "}
                      {role.text}{" "}
                    </p>{" "}
                  </div>{" "}
                </motion.div>
              );
            })}{" "}
          </div>{" "}
        </div>{" "}
        {/* ================= CLOSING STATEMENT ================= */}{" "}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 rounded-2xl bg-[#0B3D2E] px-6 py-7 sm:px-8"
        >
          {" "}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {" "}
            <p className="max-w-3xl text-sm leading-7 text-green-50/75 sm:text-base">
              {" "}
              Every role matters. From leadership and technical expertise to
              field operations and essential support, our people work together
              to help deliver humanitarian mine action.{" "}
            </p>{" "}
            <div className="shrink-0 text-sm font-semibold text-[#A7F3D0]">
              {" "}
              One Team • One Mission{" "}
            </div>{" "}
          </div>{" "}
        </motion.div>{" "}
      </div>{" "}
    </section>
  );
}
