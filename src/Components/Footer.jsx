// src/Components/Footer/Footer.jsx

import React from "react";
import { Link } from "react-router-dom";

import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaChevronRight,
} from "react-icons/fa";

import {
  quickLinks,
  programs,
  resources,
  legalLinks,
  socialLinks,
  contactInfo,
  footerContent,
} from "./FooterData";

// =====================================================
// FOOTER
// =====================================================

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative w-full overflow-hidden bg-[#06281E] text-white"
      aria-labelledby="footer-heading"
    >
      {/* =====================================================
          TOP ACCENT
      ===================================================== */}

      <div aria-hidden="true" className="h-1 w-full bg-[#F97316]" />

      {/* =====================================================
          SUBTLE BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#087B5A]/10 blur-3xl" />

        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#F97316]/[0.025] blur-3xl" />

        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =================================================
            MAIN FOOTER GRID
        ================================================= */}

        <div
          className="
            grid
            gap-12
            border-b
            border-white/[0.10]
            py-14

            sm:py-16

            lg:grid-cols-[1.6fr_1fr_1fr_1.1fr]
            lg:gap-12
            lg:py-20
          "
        >
          {/* =================================================
              DAFA
          ================================================= */}

          <div className="max-w-sm">
            <h2
              id="footer-heading"
              className="
                text-2xl
                font-black
                tracking-tight
                text-white
              "
            >
              {footerContent.organizationName}
            </h2>

            <div
              aria-hidden="true"
              className="mt-4 h-1 w-10 rounded-full bg-[#F97316]"
            />

            <p
              className="
                mt-6
                text-sm
                leading-7
                text-white/60
                sm:text-[15px]
              "
            >
              {footerContent.description}
            </p>

            {/* Social Links */}

            {socialLinks.length > 0 && (
              <div className="mt-8">
                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#A7DCC9]
                  "
                >
                  {footerContent.followLabel}
                </p>

                <div className="mt-4 flex flex-wrap gap-2.5">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;

                    if (!social.href || social.href === "#") {
                      return (
                        <span
                          key={social.label}
                          aria-label={`${social.label} link unavailable`}
                          title={`${social.label} link unavailable`}
                          className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-lg
                            border
                            border-white/[0.08]
                            text-white/20
                          "
                        >
                          <Icon size={14} aria-hidden="true" />
                        </span>
                      );
                    }

                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit DAFA on ${social.label}`}
                        className="
                          group
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-lg
                          border
                          border-white/[0.10]
                          text-white/55
                          transition-all
                          duration-200

                          hover:-translate-y-0.5
                          hover:border-[#F97316]
                          hover:bg-[#F97316]
                          hover:text-white

                          focus:outline-none
                          focus-visible:ring-2
                          focus-visible:ring-[#F97316]
                          focus-visible:ring-offset-2
                          focus-visible:ring-offset-[#06281E]
                        "
                      >
                        <Icon
                          size={14}
                          aria-hidden="true"
                          className="transition-transform duration-200 group-hover:scale-110"
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* =================================================
              EXPLORE
          ================================================= */}

          <FooterColumn title="Explore" items={quickLinks} />

          {/* =================================================
              OUR WORK
          ================================================= */}

          <FooterColumn title="Our Work" items={programs} />

          {/* =================================================
              RESOURCES
          ================================================= */}

          <FooterColumn title="Resources" items={resources} />
        </div>

        {/* =====================================================
            CONTACT INFORMATION
        ===================================================== */}

        <div
          className="
            border-b
            border-white/[0.10]
            py-10
            sm:py-12
          "
        >
          <div className="mb-6">
            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#A7DCC9]
              "
            >
              Contact DAFA
            </p>

            <h3 className="mt-2 text-xl font-bold text-white">
              Get in touch with us
            </h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {contactInfo.map((contact) => (
              <ContactItem
                key={`${contact.type}-${contact.title}`}
                type={contact.type}
                title={contact.title}
                value={contact.value}
              />
            ))}
          </div>
        </div>

        {/* =====================================================
            LOWER FOOTER
        ===================================================== */}

        <div
          className="
            flex
            flex-col
            gap-5
            py-7

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* Copyright */}

          <p
            className="
              text-xs
              leading-6
              text-white/40
            "
          >
            © {currentYear} {footerContent.organizationName}. All rights
            reserved.
          </p>

          {/* Legal Links */}

          {legalLinks.length > 0 && (
            <nav
              aria-label="Legal and accessibility links"
              className="
                flex
                flex-wrap
                items-center
                gap-x-5
                gap-y-2
              "
            >
              {legalLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="
                    rounded
                    text-xs
                    text-white/40
                    transition-colors
                    duration-200
                    hover:text-[#A7F3D0]

                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#F97316]
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-[#06281E]
                  "
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </div>
    </footer>
  );
}

// =====================================================
// FOOTER COLUMN
// =====================================================

function FooterColumn({ title, items = [] }) {
  return (
    <nav aria-label={title}>
      <h3
        className="
          text-[11px]
          font-bold
          uppercase
          tracking-[0.18em]
          text-white
        "
      >
        {title}
      </h3>

      <div
        aria-hidden="true"
        className="mt-4 h-[2px] w-8 rounded-full bg-[#F97316]"
      />

      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li key={`${item.label}-${item.path}`}>
            <Link
              to={item.path}
              className="
                group
                inline-flex
                min-h-8
                items-center
                gap-2
                text-sm
                text-white/55
                transition-all
                duration-200

                hover:translate-x-1
                hover:text-white

                focus:outline-none
                focus-visible:rounded
                focus-visible:ring-2
                focus-visible:ring-[#F97316]
                focus-visible:ring-offset-2
                focus-visible:ring-offset-[#06281E]
              "
            >
              <FaChevronRight
                size={7}
                aria-hidden="true"
                className="
                  shrink-0
                  text-[#F97316]
                  opacity-0
                  transition-all
                  duration-200

                  group-hover:translate-x-0.5
                  group-hover:opacity-100
                "
              />

              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// =====================================================
// CONTACT ITEM
// =====================================================

function ContactItem({ type, title, value }) {
  const icons = {
    location: FaMapMarkerAlt,
    email: FaEnvelope,
    phone: FaPhone,
  };

  const Icon = icons[type];

  if (!Icon) return null;

  const getContactLink = () => {
    if (type === "email" && value.includes("@")) {
      return `mailto:${value}`;
    }

    if (type === "phone" && !value.includes("XXX")) {
      return `tel:${value.replace(/\s+/g, "")}`;
    }

    return null;
  };

  const contactLink = getContactLink();

  const content = (
    <>
      {/* Icon */}

      <div
        className="
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-[#0A5A42]
          text-[#A7DCC9]
          transition-colors
          duration-200
          group-hover:bg-[#087B5A]
        "
      >
        <Icon size={15} aria-hidden="true" />
      </div>

      {/* Content */}

      <div className="min-w-0">
        <p
          className="
            text-[9px]
            font-bold
            uppercase
            tracking-[0.18em]
            text-white/35
          "
        >
          {title}
        </p>

        <p
          className="
            mt-1
            break-words
            text-sm
            font-medium
            leading-6
            text-white/70
          "
        >
          {value}
        </p>
      </div>
    </>
  );

  if (contactLink) {
    return (
      <a
        href={contactLink}
        className="
          group
          flex
          min-h-[72px]
          min-w-0
          items-center
          gap-4
          rounded-xl
          border
          border-white/[0.08]
          bg-white/[0.025]
          p-4
          transition-all
          duration-200

          hover:border-[#087B5A]/50
          hover:bg-white/[0.045]

          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-[#F97316]
          focus-visible:ring-offset-2
          focus-visible:ring-offset-[#06281E]
        "
      >
        {content}
      </a>
    );
  }

  return (
    <div
      className="
        group
        flex
        min-h-[72px]
        min-w-0
        items-center
        gap-4
        rounded-xl
        border
        border-white/[0.08]
        bg-white/[0.025]
        p-4
      "
    >
      {content}
    </div>
  );
}
