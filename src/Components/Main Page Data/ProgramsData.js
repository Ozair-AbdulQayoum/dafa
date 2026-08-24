import { FaShieldAlt, FaHardHat, FaExclamationTriangle } from "react-icons/fa";

// =====================================================
// HOME PAGE PROGRAMS
// Only 3 programs are displayed on the main page
// =====================================================

export const programs = [
  {
    number: "01",
    image: "",
    title: "Manual Demining",
    slug: "manual-demining",
    category: "Clearance Operations",
    description:
      "Highly trained teams locate and safely clear landmines and explosive hazards, helping communities regain safe access to land.",
    icon: FaShieldAlt,
  },

  {
    number: "02",
    image: "",
    title: "Mechanical Demining",
    slug: "mechanical-demining",
    category: "Clearance Operations",
    description:
      "Specialized machinery supports efficient and controlled clearance operations across larger contaminated areas.",
    icon: FaHardHat,
  },

  {
    number: "03",
    image: "",
    title: "IED Response",
    slug: "ied-response",
    category: "Emergency Response",
    description:
      "Professional teams assess and respond to improvised explosive device threats to help protect people and communities.",
    icon: FaExclamationTriangle,
  },
];
