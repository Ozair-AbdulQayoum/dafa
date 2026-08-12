import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaArrowRight,
  FaChevronRight,
} from "react-icons/fa";

import logo from "../assets/DAFA-New-Logo.jpg";

const quickLinks = [
  "About DAFA",
  "Our Programs",
  "Projects",
  "Our Impact",
  "Achievements",
  "Resources",
  "Contact",
];

const programs = [
  "Manual Demining",
  "Mechanical Demining",
  "EOD",
  "EORE",
  "Technical Survey",
  "Victim Assistance",
];

const resources = [
  "Publications",
  "Annual Reports",
  "News & Updates",
  "Media Gallery",
  "Procurement",
];

const socialLinks = [
  {
    icon: FaFacebookF,
    label: "Facebook",
    href: "#",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "#",
  },
  {
    icon: FaYoutube,
    label: "YouTube",
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#061F18] text-white">
      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]"
        >
          {/* =================================================
              ORGANIZATION
          ================================================== */}

          <div className="max-w-sm">
            <div className="inline-flex rounded-xl bg-white p-2">
              <img
                src={logo}
                alt="Demining Agency for Afghanistan Logo"
                className="h-16 w-auto object-contain"
              />
            </div>

            <h2 className="mt-6 text-2xl font-bold tracking-tight">
              Demining Agency for Afghanistan
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              DAFA works to reduce the impact of explosive hazards and support
              safer communities through humanitarian mine action across
              Afghanistan.
            </p>

            {/* Social Links */}

            <div className="mt-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#A7F3D0]">
                Follow DAFA
              </p>

              <div className="mt-4 flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-[#F97316] hover:bg-[#F97316] hover:text-white"
                    >
                      <Icon size={15} />
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
              OUR PROGRAMS
          ================================================== */}

          <FooterColumn title="Our Programs" items={programs} />

          {/* =================================================
              RESOURCES
          ================================================== */}

          <FooterColumn title="Resources" items={resources} />
        </motion.div>

        {/* =====================================================
            CONTACT / PARTNERS PANEL
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-14 grid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] md:grid-cols-2"
        >
          {/* Contact */}

          <div className="border-b border-white/10 p-7 md:border-b-0 md:border-r lg:p-8">
            <div className="flex items-center gap-3">
              <div className="h-8 w-1 rounded-full bg-[#F97316]" />

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#A7F3D0]">
                  Official Contact
                </p>

                <h3 className="mt-1 text-lg font-bold text-white">
                  Get in Touch
                </h3>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
              <ContactItem
                icon={FaMapMarkerAlt}
                title="Head Office"
                value="Kabul, Afghanistan"
              />

              <ContactItem
                icon={FaEnvelope}
                title="Email"
                value="info@dafa.af"
              />

              <ContactItem
                icon={FaPhone}
                title="Phone"
                value="+93 XXX XXX XXX"
              />
            </div>
          </div>

          {/* Partners / Donors */}

          <div className="p-7 lg:p-8">
            <div className="flex items-center gap-3">
              <div className="h-8 w-1 rounded-full bg-[#F97316]" />

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#A7F3D0]">
                  Partnerships
                </p>

                <h3 className="mt-1 text-lg font-bold text-white">
                  Partners & Donors
                </h3>
              </div>
            </div>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
              DAFA works with partners, donors, government institutions and
              humanitarian organizations to support mine-action activities
              across Afghanistan.
            </p>

            <a
              href="#partners"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#A7F3D0] transition-colors hover:text-[#F97316]"
            >
              View Our Partners
              <FaArrowRight
                size={11}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </motion.div>

        {/* =====================================================
            INSTITUTIONAL LINKS
        ====================================================== */}

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-7 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <a href="#privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </a>

            <a href="#terms" className="transition-colors hover:text-white">
              Terms of Use
            </a>

            <a
              href="#accessibility"
              className="transition-colors hover:text-white"
            >
              Accessibility
            </a>

            <a href="#sitemap" className="transition-colors hover:text-white">
              Sitemap
            </a>
          </div>

          <p>Official website of the Demining Agency for Afghanistan</p>
        </div>
      </div>

      {/* =====================================================
          COPYRIGHT
      ====================================================== */}

      <div className="border-t border-white/10 bg-[#041711]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-center sm:px-8 md:flex-row md:items-center md:justify-between md:text-left lg:px-10">
          <p className="text-xs leading-6 text-slate-400 sm:text-sm">
            © {new Date().getFullYear()} Demining Agency for Afghanistan (DAFA).
            All Rights Reserved.
          </p>

          <p className="text-xs text-slate-500">
            Humanitarian Mine Action • Safety • Protection
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

      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors duration-200 hover:text-white"
            >
              <FaChevronRight
                size={8}
                className="text-[#F97316] opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100"
              />

              <span className="transition-transform duration-200 group-hover:translate-x-1">
                {item}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* =========================================================
   CONTACT ITEM
========================================================= */

function ContactItem({ icon: Icon, title, value }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#087B5A]/30 text-[#A7F3D0]">
        <Icon size={14} />
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          {title}
        </p>

        <p className="mt-1 text-sm text-slate-300">{value}</p>
      </div>
    </div>
  );
}
