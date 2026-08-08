import React from "react";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaHardHat,
  FaProjectDiagram,
  FaLifeRing,
} from "react-icons/fa";
const expertise = [
  {
    icon: FaUserGraduate,
    number: "01",
    title: "Technical Professionals",
    text: "Skilled personnel who bring specialized knowledge, experience, and professional expertise to humanitarian operations.",
  },
  {
    icon: FaHardHat,
    number: "02",
    title: "Field Personnel",
    text: "Dedicated staff who support activities in communities and understand the practical realities of field operations.",
  },
  {
    icon: FaProjectDiagram,
    number: "03",
    title: "Operations & Coordination",
    text: "Professionals responsible for planning, coordination, communication, and keeping activities organized.",
  },
  {
    icon: FaLifeRing,
    number: "04",
    title: "Administration & Support",
    text: "People working behind the scenes across finance, human resources, logistics, IT, and administrative services.",
  },
];
export default function PeopleExpertise() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {" "}
      {/* ================= BACKGROUND ================= */}{" "}
      <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#087B5A]/5 blur-3xl" />{" "}
      <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#0284C7]/5 blur-3xl" />{" "}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {" "}
        {/* ================= HEADER ================= */}{" "}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          {" "}
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#087B5A]">
            {" "}
            People & Expertise{" "}
          </span>{" "}
          <h2 className="mt-3 text-3xl font-bold leading-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            {" "}
            Different Skills.{" "}
            <span className="block text-[#087B5A]">
              {" "}
              One Shared Purpose.{" "}
            </span>{" "}
          </h2>{" "}
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            {" "}
            DAFA's strength comes from people with different areas of expertise
            who work together to support its humanitarian mission.{" "}
          </p>{" "}
        </motion.div>{" "}
        {/* ================= EXPERTISE GRID ================= */}{" "}
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {" "}
          {expertise.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-[#087B5A]/20 hover:shadow-xl sm:p-8"
              >
                {" "}
                {/* Large Number */}{" "}
                <span className="absolute right-6 top-4 text-6xl font-black text-slate-100 transition-colors duration-300 group-hover:text-[#087B5A]/10">
                  {" "}
                  {item.number}{" "}
                </span>{" "}
                {/* Icon */}{" "}
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-[#087B5A]/10 text-[#087B5A] transition-all duration-300 group-hover:bg-[#087B5A] group-hover:text-white">
                  {" "}
                  <Icon size={19} />{" "}
                </div>{" "}
                {/* Content */}{" "}
                <div className="relative mt-6 max-w-md">
                  {" "}
                  <h3 className="text-xl font-bold text-[#0F172A]">
                    {" "}
                    {item.title}{" "}
                  </h3>{" "}
                  <p className="mt-3 text-sm leading-7 text-slate-500 sm:text-base">
                    {" "}
                    {item.text}{" "}
                  </p>{" "}
                </div>{" "}
                {/* Bottom Accent */}{" "}
                <div className="mt-7 h-px w-12 bg-[#087B5A]/30 transition-all duration-300 group-hover:w-20 group-hover:bg-[#087B5A]" />{" "}
              </motion.div>
            );
          })}{" "}
        </div>{" "}
        {/* ================= CLOSING ================= */}{" "}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 text-center"
        >
          {" "}
          <p className="mx-auto max-w-3xl text-sm leading-7 text-slate-500 sm:text-base">
            {" "}
            Together, these different areas of expertise create a collaborative
            workforce capable of supporting DAFA's work across Afghanistan.{" "}
          </p>{" "}
        </motion.div>{" "}
      </div>{" "}
    </section>
  );
}
