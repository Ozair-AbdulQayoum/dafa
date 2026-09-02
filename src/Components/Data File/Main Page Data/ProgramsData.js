import { FaShieldAlt, FaHardHat, FaExclamationTriangle } from "react-icons/fa";

// =====================================================
// HOME PAGE PROGRAMS
//
// Only 3 featured programs are displayed on the Home Page.
// Full services can be shown on /what-we-do.
// =====================================================

export const programs = [
  {
    number: "01",

    // Temporary sample image — replace with original DAFA image later
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1200&q=85",

    title: "Manual Demining",
    slug: "manual-demining",
    category: "Clearance Operations",

    description:
      "Highly trained teams locate and safely clear landmines and explosive hazards, helping communities regain safe access to land.",

    icon: FaShieldAlt,
  },

  {
    number: "02",

    // Temporary sample image — replace with original DAFA image later
    image:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1200&q=85",

    title: "Mechanical Demining",
    slug: "mechanical-demining",
    category: "Clearance Operations",

    description:
      "Specialized machinery supports efficient and controlled clearance operations across larger contaminated areas.",

    icon: FaHardHat,
  },

  {
    number: "03",

    // Temporary sample image — replace with original DAFA image later
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=85",

    title: "IED Response",
    slug: "ied-response",
    category: "Emergency Response",

    description:
      "Professional teams assess and respond to improvised explosive device threats to help protect people and communities.",

    icon: FaExclamationTriangle,
  },
];
