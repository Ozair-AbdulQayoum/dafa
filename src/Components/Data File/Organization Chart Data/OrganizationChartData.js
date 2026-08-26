// =====================================================
// ORGANIZATION CHART DATA
// =====================================================

import {
  FaUserTie,
  FaUsersCog,
  FaCalculator,
  FaTruck,
  FaTools,
} from "react-icons/fa";

// =====================================================
// PAGE INTRODUCTION
// =====================================================

export const organizationPageData = {
  eyebrow: "Organizational Structure",

  title: "How DAFA Is Organized",

  description:
    "DAFA's organizational structure brings together leadership, management, support services, and field operations to deliver effective humanitarian mine action across Afghanistan.",

  supportingText: "Leadership • Management • Support • Field Operations",
};

// =====================================================
// LEADERSHIP
// =====================================================

export const leadershipData = {
  name: "Abdul Wahid Noori",

  position: "Director",

  icon: FaUserTie,

  description:
    "Provides strategic leadership and oversees DAFA's humanitarian mine-action programs, organizational development, and overall operations.",
};

// =====================================================
// DEPARTMENTS
// =====================================================

export const departments = [
  {
    id: "administration",

    name: "Administration",

    label: "People & Organizational Support",

    icon: FaUsersCog,

    description:
      "Supports human resources, administration, staff coordination, and organizational services that enable DAFA to operate effectively.",

    responsibilities: [
      "Human resources management",
      "Staff administration and coordination",
      "Organizational support services",
    ],

    positions: ["HR / Admin Manager", "HR / Admin Officer"],
  },

  {
    id: "finance",

    name: "Finance",

    label: "Financial Management",

    icon: FaCalculator,

    description:
      "Manages financial planning, accounting, budgeting, reporting, and financial compliance to support responsible use of resources.",

    responsibilities: [
      "Financial planning and budgeting",
      "Accounting and financial reporting",
      "Financial monitoring and compliance",
    ],

    positions: ["Finance Manager", "Finance Officer"],
  },

  {
    id: "logistics",

    name: "Logistics",

    label: "Operational Support",

    icon: FaTruck,

    description:
      "Provides the logistical support required for DAFA's activities, including procurement, transportation, warehousing, and supplies.",

    responsibilities: [
      "Procurement and supplies",
      "Transportation and fleet support",
      "Warehousing and inventory management",
    ],

    positions: [
      "Logistics Manager / Support Manager",
      "Logistics Officer",
      "Logistics Assistant",
      "Storekeeper",
    ],
  },

  {
    id: "operations",

    name: "Operations",

    label: "Field Operations",

    icon: FaTools,

    description:
      "Leads field activities, operational planning, quality assurance, and humanitarian mine-action activities carried out across affected communities.",

    responsibilities: [
      "Operational planning and coordination",
      "Field activities and implementation",
      "Quality assurance and monitoring",
    ],

    positions: [
      "Operations Manager",
      "Operations Officer",
      "QA Manager",
      "QA Officer",
    ],
  },
];

// =====================================================
// WORKFLOW
// =====================================================

export const organizationWorkflow = [
  {
    number: "01",
    title: "Leadership",
    description: "Strategic direction and organizational oversight.",
  },

  {
    number: "02",
    title: "Management & Support",
    description: "Administration, finance, and logistics enable operations.",
  },

  {
    number: "03",
    title: "Field Operations",
    description: "Specialized teams deliver humanitarian mine action.",
  },

  {
    number: "04",
    title: "Community Impact",
    description: "Safer land and communities across Afghanistan.",
  },
];
