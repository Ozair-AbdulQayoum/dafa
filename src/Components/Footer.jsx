import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaChevronRight,
} from "react-icons/fa";

import logo from "../assets/DAFA-New-Logo.jpg";

import {
  quickLinks,
  programs,
  resources,
  legalLinks,
  socialLinks,
  contactInfo,
  footerContent,
} from "./FooterData";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#061F18] text-white">
      {/* =====================================================
          TOP ACCENT
      ====================================================== */}

      <div className="h-1 w-full bg-gradient-to-r from-[#087B5A] via-[#A7F3D0] to-[#F97316]" />

      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#087B5A]/10 blur-3xl" />

        <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-[#0284C7]/10 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.025]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(#A7F3D0 1px, transparent 1px), linear-gradient(90deg, #A7F3D0 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        {/* =====================================================
            MAIN FOOTER GRID
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-80px",
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1fr]"
        >
          {/* =================================================
              ORGANIZATION
          ================================================== */}

          <div className="max-w-sm">
            {/* Logo */}

            <Link
              to="/"
              className="inline-flex rounded-2xl bg-white p-2.5 shadow-lg shadow-black/10"
            >
              <img
                src={logo}
                alt="Demining Agency for Afghanistan Logo"
                className="h-16 w-auto object-contain"
              />
            </Link>

            {/* Organization Name */}

            <h2 className="mt-6 text-2xl font-bold leading-tight tracking-tight text-white">
              {footerContent.organizationName}
            </h2>

            {/* Description */}

            <p className="mt-4 text-sm leading-7 text-slate-300">
              {footerContent.description}
            </p>

            {/* Social */}

            <div className="mt-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#A7F3D0]">
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
                      className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-[#F97316] hover:bg-[#F97316] hover:text-white"
                    >
                      <Icon
                        size={15}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* =================================================
              QUICK LINKS
          ================================================== */}

          <FooterColumn title="Quick Links" items={quickLinks} />

          {/* =================================================
              PROGRAMS
          ================================================== */}

          <FooterColumn title="Our Programs" items={programs} />

          {/* =================================================
              RESOURCES
          ================================================== */}

          <FooterColumn title="Resources" items={resources} />
        </motion.div>

        {/* =====================================================
            CONTACT SECTION
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-60px",
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="mt-16 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035]"
        >
          {/* Header */}

          <div className="border-b border-white/10 px-6 py-5 sm:px-7">
            <div className="flex items-center gap-3">
              <div className="h-8 w-1 rounded-full bg-[#F97316]" />

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A7F3D0]">
                  {footerContent.contactLabel}
                </p>

                <h3 className="mt-1 text-lg font-bold text-white">
                  {footerContent.contactTitle}
                </h3>
              </div>
            </div>
          </div>

          {/* Contact Items */}

          <div className="grid divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
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

        {/* =====================================================
            LEGAL / INSTITUTIONAL LINKS
        ====================================================== */}

        <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {legalLinks.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="text-xs text-slate-400 transition-colors duration-200 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <p className="text-xs text-slate-500">
            {footerContent.legalDescription}
          </p>
        </div>
      </div>

      {/* =====================================================
          COPYRIGHT
      ====================================================== */}

      <div className="border-t border-white/10 bg-[#041711]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <p className="text-center text-xs leading-6 text-slate-400 sm:text-sm md:text-left">
            © {new Date().getFullYear()} Demining Agency for Afghanistan (DAFA).
            All Rights Reserved.
          </p>

          <p className="text-center text-xs text-slate-500 md:text-right">
            {footerContent.bottomTagline}
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
      <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
        {title}
      </h3>

      <div className="mt-4 h-0.5 w-8 rounded-full bg-[#087B5A]" />

      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              to={item.path}
              className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors duration-200 hover:text-white"
            >
              <FaChevronRight
                size={7}
                className="shrink-0 text-[#F97316] opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100"
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
    <div className="flex items-center gap-4 p-6 sm:p-7">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#087B5A]/30 bg-[#087B5A]/15 text-[#A7F3D0]">
        <Icon size={15} />
      </div>

      <div className="min-w-0">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
          {title}
        </p>

        <p className="mt-1 truncate text-sm font-medium text-slate-300">
          {value}
        </p>
      </div>
    </div>
  );
}
