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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-[#0B3D2E]
        text-white
      "
      aria-labelledby="footer-heading"
    >
      {/* =====================================================
          TOP ACCENT
      ===================================================== */}

      <div aria-hidden="true" className="h-1 w-full bg-[#F97316]" />

      {/* =====================================================
          SUBTLE BACKGROUND DETAILS
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            -left-48
            -top-48
            h-96
            w-96
            rounded-full
            bg-[#0A5A42]/35
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -bottom-48
            -right-40
            h-96
            w-96
            rounded-full
            bg-[#F97316]/[0.035]
            blur-3xl
          "
        />
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-5
          sm:px-8
          lg:px-10
        "
      >
        {/* =====================================================
            MAIN FOOTER CONTENT
        ===================================================== */}

        <div
          className="
            grid
            gap-12
            border-b
            border-white/[0.09]
            py-14

            sm:py-16

            lg:grid-cols-[1.5fr_1fr_1fr_1fr]
            lg:gap-10
            lg:py-20
          "
        >
          {/* =================================================
              BRAND AREA
          ================================================= */}

          <div className="max-w-sm">
            <h2
              id="footer-heading"
              className="
                text-xl
                font-bold
                leading-tight
                tracking-[-0.01em]
                text-white

                sm:text-2xl
              "
            >
              {footerContent.organizationName}
            </h2>

            <div
              aria-hidden="true"
              className="
                mt-4
                h-[3px]
                w-10
                rounded-full
                bg-[#F97316]
              "
            />

            <p
              className="
                mt-5
                text-sm
                leading-7
                text-white/60

                sm:text-[15px]
                sm:leading-7
              "
            >
              {footerContent.description}
            </p>

            {/* Social Media */}

            {socialLinks.length > 0 && (
              <div className="mt-7">
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

                <div className="mt-4 flex items-center gap-2.5">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;

                    /*
                      Do not render fake "#" URLs.
                    */

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
                            bg-white/[0.035]
                            text-white/25
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
                          bg-white/[0.035]
                          text-white/60
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
                          focus-visible:ring-offset-[#0B3D2E]
                        "
                      >
                        <Icon
                          size={14}
                          aria-hidden="true"
                          className="
                            transition-transform
                            duration-200
                            group-hover:scale-110
                          "
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* =================================================
              QUICK LINKS
          ================================================= */}

          <FooterColumn title="Quick Links" items={quickLinks} />

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
            grid
            gap-4
            border-b
            border-white/[0.09]
            py-10

            sm:grid-cols-3
            sm:gap-5

            lg:py-12
          "
        >
          {contactInfo.map((contact) => (
            <ContactItem
              key={`${contact.type}-${contact.title}`}
              type={contact.type}
              title={contact.title}
              value={contact.value}
            />
          ))}
        </div>

        {/* =====================================================
            LOWER FOOTER
        ===================================================== */}

        <div
          className="
            flex
            flex-col
            gap-6
            py-7

            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          {/* Copyright */}

          <p
            className="
              text-xs
              leading-6
              text-white/40
              lg:text-left
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
                    text-xs
                    text-white/40
                    transition-colors
                    duration-200
                    hover:text-white

                    focus:outline-none
                    focus-visible:rounded
                    focus-visible:ring-2
                    focus-visible:ring-[#F97316]
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-[#0B3D2E]
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

/* =========================================================
   FOOTER COLUMN
========================================================= */

function FooterColumn({ title, items }) {
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
        className="
          mt-4
          h-[2px]
          w-8
          rounded-full
          bg-[#F97316]
        "
      />

      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={`${item.label}-${item.path}`}>
            <Link
              to={item.path}
              className="
                group
                inline-flex
                items-center
                gap-2
                text-sm
                text-white/55
                transition-all
                duration-200

                hover:translate-x-0.5
                hover:text-white

                focus:outline-none
                focus-visible:rounded
                focus-visible:ring-2
                focus-visible:ring-[#F97316]
                focus-visible:ring-offset-2
                focus-visible:ring-offset-[#0B3D2E]
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
      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-lg
          border
          border-white/[0.06]
          bg-[#0A5A42]
          text-[#A7DCC9]
          transition-colors
          duration-200
        "
      >
        <Icon size={14} aria-hidden="true" />
      </div>

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

          hover:border-white/[0.16]
          hover:bg-white/[0.05]

          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-[#F97316]
          focus-visible:ring-offset-2
          focus-visible:ring-offset-[#0B3D2E]
        "
      >
        {content}
      </a>
    );
  }

  return (
    <div
      className="
        flex
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
