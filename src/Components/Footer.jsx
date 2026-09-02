import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaArrowRight,
  FaChevronRight,
} from "react-icons/fa";

import {
  quickLinks,
  programs,
  resources,
  socialLinks,
  contactInfo,
  footerContent,
} from "./FooterData";

// Temporary online sample image
const footerBackgroundImage =
  "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1800&q=85";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#061F18] text-white">
      {/* Top Accent */}
      <div className="h-1 w-full bg-gradient-to-r from-[#087B5A] via-[#A7F3D0] to-[#F97316]" />

      {/* Background Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-52 -top-52 h-[550px] w-[550px] rounded-full bg-[#087B5A]/10 blur-[140px]" />

        <div className="absolute -right-52 top-1/3 h-[550px] w-[550px] rounded-full bg-[#0284C7]/8 blur-[140px]" />

        <div className="absolute bottom-[-250px] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#F97316]/5 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            GET IN TOUCH — IMAGE BACKGROUND
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="pt-12 sm:pt-16 lg:pt-20"
        >
          <div
            className="
              group
              relative
              min-h-[380px]
              overflow-hidden
              rounded-[2rem]
              border
              border-white/10
              shadow-[0_25px_70px_rgba(0,0,0,0.30)]
              sm:min-h-[430px]
              lg:min-h-[480px]
            "
          >
            {/* Sample Background Image */}
            <img
              src={footerBackgroundImage}
              alt=""
              aria-hidden="true"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-center
                transition-transform
                duration-[1200ms]
                group-hover:scale-[1.03]
              "
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-[#021812]/65" />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#021812]/95 via-[#052E23]/70 to-[#021812]/35" />

            {/* Green Glow */}
            <div className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-[#087B5A]/30 blur-[100px]" />

            {/* Orange Glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#F97316]/20 blur-[100px]" />

            {/* Content */}
            <div
              className="
                relative
                z-10
                flex
                min-h-[380px]
                flex-col
                justify-center
                px-7
                py-12
                sm:min-h-[430px]
                sm:px-10
                lg:min-h-[480px]
                lg:px-16
              "
            >
              <div className="max-w-3xl">
                {/* Official Contact */}
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F97316]" />

                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#A7F3D0]">
                    {footerContent.contactLabel}
                  </span>
                </div>

                {/* Heading */}
                <h2
                  className="
                    text-4xl
                    font-black
                    leading-[1]
                    tracking-[-0.03em]
                    text-white
                    sm:text-5xl
                    lg:text-6xl
                  "
                >
                  Get in Touch
                  <span className="text-[#A7F3D0]">.</span>
                </h2>

                {/* Description */}
                <p
                  className="
                    mt-6
                    max-w-2xl
                    text-sm
                    leading-7
                    text-slate-200
                    sm:text-base
                    sm:leading-8
                  "
                >
                  Have a question, partnership inquiry, or need more information
                  about DAFA's humanitarian mine action? Our team is ready to
                  hear from you.
                </p>

                {/* Contact Button */}
                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="
                      group/button
                      inline-flex
                      items-center
                      gap-4
                      rounded-2xl
                      bg-[#F97316]
                      px-6
                      py-4
                      text-sm
                      font-bold
                      text-white
                      shadow-[0_12px_30px_rgba(249,115,22,0.25)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:bg-[#EA580C]
                      hover:shadow-[0_16px_35px_rgba(249,115,22,0.35)]
                    "
                  >
                    <span>Contact DAFA</span>

                    <span
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-xl
                        bg-white/15
                      "
                    >
                      <FaArrowRight
                        size={11}
                        className="
                          transition-transform
                          duration-300
                          group-hover/button:translate-x-1
                        "
                      />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            MAIN FOOTER
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
          className="
            grid
            gap-12
            border-b
            border-white/10
            py-14
            sm:py-16
            lg:grid-cols-[1.5fr_1fr_1fr_1fr]
          "
        >
          {/* Organization */}
          <div className="max-w-sm">
            <h2 className="text-xl font-bold leading-tight text-white sm:text-2xl">
              {footerContent.organizationName}
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              {footerContent.description}
            </p>

            {/* Social Media */}
            <div className="mt-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A7F3D0]">
                {footerContent.followLabel}
              </p>

              <div className="mt-4 flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-white/10
                        bg-[#0A2A20]
                        text-slate-400
                        shadow-[4px_4px_10px_rgba(0,0,0,0.15),-3px_-3px_8px_rgba(255,255,255,0.02)]
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-[#F97316]
                        hover:bg-[#F97316]
                        hover:text-white
                      "
                    >
                      <Icon
                        size={14}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <FooterColumn title="Quick Links" items={quickLinks} />

          {/* Programs */}
          <FooterColumn title="Our Programs" items={programs} />

          {/* Resources */}
          <FooterColumn title="Resources" items={resources} />
        </motion.div>

        {/* =====================================================
            CONTACT INFORMATION
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="py-10"
        >
          <div className="grid gap-4 sm:grid-cols-3">
            {contactInfo.map((contact) => (
              <ContactItem
                key={contact.title}
                type={contact.type}
                title={contact.title}
                value={contact.value}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          COPYRIGHT
      ====================================================== */}
      <div className="border-t border-white/10 bg-[#041711]">
        <div className="mx-auto flex max-w-7xl justify-center px-5 py-5 sm:px-8 lg:px-10">
          <p className="text-center text-xs leading-6 text-slate-500">
            © {new Date().getFullYear()} Demining Agency for Afghanistan (DAFA).
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   FOOTER COLUMN
========================================================= */

function FooterColumn({ title, items }) {
  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white">
        {title}
      </h3>

      <div className="mt-4 h-0.5 w-8 rounded-full bg-[#087B5A]" />

      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              to={item.path}
              className="
                group
                inline-flex
                items-center
                gap-2
                text-sm
                text-slate-500
                transition-colors
                duration-200
                hover:text-white
              "
            >
              <FaChevronRight
                size={6}
                className="
                  shrink-0
                  text-[#F97316]
                  opacity-0
                  transition-all
                  duration-200
                  group-hover:translate-x-1
                  group-hover:opacity-100
                "
              />

              <span className="transition-transform duration-200 group-hover:translate-x-1">
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* =========================================================
   CONTACT ITEM
========================================================= */

function ContactItem({ type, title, value }) {
  const icons = {
    location: FaMapMarkerAlt,
    email: FaEnvelope,
    phone: FaPhone,
  };

  const Icon = icons[type];

  return (
    <div
      className="
        flex
        items-center
        gap-4
        rounded-2xl
        border
        border-white/10
        bg-[#0A2A20]
        p-5
        shadow-[5px_5px_14px_rgba(0,0,0,0.16),-4px_-4px_10px_rgba(255,255,255,0.02)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#087B5A]/40
      "
    >
      <div
        className="
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-[#087B5A]/15
          text-[#A7F3D0]
        "
      >
        <Icon size={15} />
      </div>

      <div className="min-w-0">
        <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-600">
          {title}
        </p>

        <p className="mt-1 truncate text-sm font-medium text-slate-300">
          {value}
        </p>
      </div>
    </div>
  );
}
