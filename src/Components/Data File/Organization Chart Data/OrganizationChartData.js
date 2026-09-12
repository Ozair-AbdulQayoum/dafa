// =====================================================
// ORGANIZATION CHART DATA
// =====================================================

import {
  FaUserTie,
  FaUsersCog,
  FaCalculator,
  FaTruck,
  FaTools,
  FaDatabase,
} from "react-icons/fa";

// =====================================================
// PAGE INTRODUCTION
// =====================================================

export const organizationPageData = {
  eyebrow: "Organizational Structure",

  title: "How DAFA Is Organized",

  description:
    "DAFA's organizational structure brings together leadership, management, support services, information management, operations, and quality assurance to deliver effective humanitarian mine action across Afghanistan.",

  supportingText:
    "Leadership • Management • Support • Operations • Quality Assurance • Information Management",
};

// =====================================================
// LEADERSHIP
// =====================================================

export const leadershipData = {
  position: "Director",

  icon: FaUserTie,

  description:
    "Provides strategic leadership, organizational oversight, and direction for DAFA's humanitarian mine-action programs and operations.",
};

// =====================================================
// DEPARTMENTS
// =====================================================

export const departments = [
  // ===================================================
  // ADMINISTRATION
  // ===================================================

  {
    id: "administration",

    name: "Administration",

    label: "People & Organizational Support",

    icon: FaUsersCog,

    accent: "green",

    description:
      "Supports human resources, staff administration, coordination, liaison activities, and organizational services.",

    responsibilities: [
      "Human resources management",
      "Staff administration and coordination",
      "Organizational support services",
      "Internal and external liaison",
    ],

    hierarchy: {
      title: "HR / Admin Manager",

      children: [
        {
          title: "HR / Admin Officer",
        },
        {
          title: "Liaison Officer",
        },
      ],
    },
  },

  // ===================================================
  // FINANCE
  // ===================================================

  {
    id: "finance",

    name: "Finance",

    label: "Financial Management",

    icon: FaCalculator,

    accent: "blue",

    description:
      "Manages financial planning, accounting, budgeting, grants, reporting, cash management, and financial compliance.",

    responsibilities: [
      "Financial planning and budgeting",
      "Accounting and financial reporting",
      "Financial monitoring and compliance",
      "Grants and financial management",
    ],

    hierarchy: {
      title: "Finance Manager",

      children: [
        {
          title: "Finance Officer",
        },
        {
          title: "Assistant Finance Officer",
        },
        {
          title: "Finance & Grants Officer",
        },
        {
          title: "Cashier / Finance Assistant",
        },
      ],
    },
  },

  // ===================================================
  // LOGISTICS
  // ===================================================

  {
    id: "logistics",

    name: "Logistics",

    label: "Operational Support",

    icon: FaTruck,

    accent: "orange",

    description:
      "Provides procurement, transportation, fleet, warehousing, inventory, and operational logistics support.",

    responsibilities: [
      "Procurement and supplies",
      "Transportation and fleet support",
      "Warehousing and inventory management",
      "Operational logistics support",
    ],

    hierarchy: {
      title: "Logistics / Support Manager",

      children: [
        {
          title: "Logistics Officer",
        },
        {
          title: "Logistics Assistant",
        },
        {
          title: "Storekeeper",
        },
      ],
    },
  },

  // ===================================================
  // OPERATIONS & QUALITY ASSURANCE
  // ===================================================

  {
    id: "operations-quality",

    name: "Operations & Quality Assurance",

    label: "Field Operations & Quality Management",

    icon: FaTools,

    accent: "green",

    description:
      "Leads humanitarian field operations while ensuring activities meet operational, technical, safety, and quality requirements through effective supervision, monitoring, and inspection.",

    responsibilities: [
      "Operational planning and field coordination",
      "Field team supervision and implementation",
      "Quality assurance and monitoring",
      "Field inspections and operational compliance",
      "Quality control and reporting",
    ],

    hierarchy: {
      title: "Head of Operations",

      children: [
        // LEFT — OPERATIONS
        {
          title: "Operations Manager",

          children: [
            {
              title: "Operations Officer",
            },
          ],
        },

        // RIGHT — QUALITY ASSURANCE
        {
          title: "QA Manager",

          children: [
            {
              title: "QA Officer",
            },
            {
              title: "QA Inspector",
            },
            {
              title: "QA Assistant",
            },
          ],
        },
      ],
    },
  },

  // ===================================================
  // MIS
  // ===================================================

  {
    id: "mis",

    name: "MIS",

    label: "Information Management",

    icon: FaDatabase,

    accent: "blue",

    description:
      "Manages organizational information, data processing, reporting, information systems, data quality, and digital records.",

    responsibilities: [
      "Information management",
      "Data collection and processing",
      "Data quality and verification",
      "Reporting and information systems support",
    ],

    hierarchy: {
      title: "MIS Manager",

      children: [
        {
          title: "MIS Officer",
        },
        {
          title: "Data Processor",
        },
      ],
    },
  },
];

// =====================================================
// WORKFLOW
// =====================================================

export const organizationWorkflow = [
  {
    number: "01",

    title: "Leadership",

    description: "Provides strategic direction and organizational oversight.",
  },

  {
    number: "02",

    title: "Management & Support",

    description:
      "Administration, finance, and logistics provide essential organizational support.",
  },

  {
    number: "03",

    title: "Information Management",

    description:
      "MIS manages organizational information, data processing, and reporting.",
  },

  {
    number: "04",

    title: "Operations & Quality",

    description:
      "Operations and Quality Assurance teams support effective and compliant field activities.",
  },

  {
    number: "05",

    title: "Community Impact",

    description:
      "DAFA contributes to safer land and safer communities across Afghanistan.",
  },
];
