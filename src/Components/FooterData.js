// src/Components/Footer/FooterData.js

import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

/* =========================================================
   QUICK LINKS
========================================================= */

export const quickLinks = [
  {
    label: "About DAFA",
    path: "/about",
  },
  {
    label: "Our Programs",
    path: "/programs",
  },
  {
    label: "Projects",
    path: "/projects",
  },
  {
    label: "Our Impact",
    path: "/impact",
  },
  {
    label: "Achievements",
    path: "/achievements",
  },
  {
    label: "Resources",
    path: "/resources",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

/* =========================================================
   OUR PROGRAMS
========================================================= */

export const programs = [
  {
    label: "Manual Demining",
    path: "/programs/manual-demining",
  },
  {
    label: "Mechanical Demining",
    path: "/programs/mechanical-demining",
  },
  {
    label: "EOD",
    path: "/programs/eod",
  },
  {
    label: "EORE",
    path: "/programs/eore",
  },
  {
    label: "Technical Survey",
    path: "/programs/technical-survey",
  },
  {
    label: "Victim Assistance",
    path: "/programs/victim-assistance",
  },
];

/* =========================================================
   RESOURCES
========================================================= */

export const resources = [
  {
    label: "Publications",
    path: "/publications",
  },
  {
    label: "Annual Reports",
    path: "/reports",
  },
  {
    label: "News & Updates",
    path: "/news-updates",
  },
  {
    label: "Media Gallery",
    path: "/media",
  },
  {
    label: "Procurement",
    path: "/procurement",
  },
];

/* =========================================================
   LEGAL / ACCESSIBILITY
========================================================= */

export const legalLinks = [
  {
    label: "Privacy Policy",
    path: "/privacy-policy",
  },
  {
    label: "Terms of Use",
    path: "/terms-of-use",
  },
  {
    label: "Accessibility",
    path: "/accessibility",
  },
  {
    label: "Sitemap",
    path: "/sitemap",
  },
];

/* =========================================================
   SOCIAL MEDIA
=========================================================

   Keep "#" until real DAFA URLs are available.
   Footer.jsx intentionally does not make "#" clickable,
   preventing fake social destinations.
========================================================= */

export const socialLinks = [
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

/* =========================================================
   CONTACT INFORMATION
========================================================= */

export const contactInfo = [
  {
    type: "location",
    title: "Head Office",
    value: "Kabul, Afghanistan",
  },
  {
    type: "email",
    title: "Email",
    value: "info@dafa.af",
  },
  {
    type: "phone",
    title: "Phone",
    value: "+93 XXX XXX XXX",
  },
];

/* =========================================================
   FOOTER CONTENT
========================================================= */

export const footerContent = {
  organizationName: "Demining Agency for Afghanistan",

  description:
    "DAFA works to reduce the impact of explosive hazards and support safer communities through humanitarian mine action across Afghanistan.",

  followLabel: "Follow DAFA",

  contactLabel: "Official Contact",

  contactTitle: "Get in Touch",

  legalDescription: "Official website of the Demining Agency for Afghanistan",

  bottomTagline: "Humanitarian Mine Action • Safety • Protection",
};

export default footerContent;
