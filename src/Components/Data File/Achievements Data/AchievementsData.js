import {
  FaCalendarAlt,
  FaProjectDiagram,
  FaMapMarkedAlt,
  FaRulerCombined,
  FaBomb,
  FaShieldAlt,
  FaUsers,
  FaExclamationTriangle,
} from "react-icons/fa";

const achievementsData = [
  {
    icon: FaCalendarAlt,
    value: 36,
    suffix: "+",
    label: "Years of Humanitarian Service",
    description:
      "More than three decades of humanitarian mine action experience.",
  },

  {
    icon: FaProjectDiagram,
    value: 118,
    suffix: "+",
    label: "Projects Implemented",
    description:
      "Humanitarian mine action and community support projects implemented.",
  },

  {
    icon: FaMapMarkedAlt,
    value: 32,
    suffix: "+",
    label: "Provinces Covered",
    description:
      "Operational coverage across provinces throughout Afghanistan.",
  },

  {
    icon: FaRulerCombined,
    value: 323,
    suffix: "M m²",
    label: "Land Cleared",
    description: "Millions of square metres of contaminated land cleared.",
  },

  {
    icon: FaBomb,
    value: 47313,
    suffix: "",
    label: "Anti-Tank Mines",
    description:
      "Anti-tank mines identified and removed through humanitarian operations.",
  },

  {
    icon: FaShieldAlt,
    value: 40387,
    suffix: "",
    label: "Anti-Personnel Mines",
    description:
      "Anti-personnel mines identified and removed through clearance operations.",
  },

  {
    icon: FaExclamationTriangle,
    value: 1975904,
    suffix: "",
    label: "ERW Removed",
    description: "Explosive remnants of war identified and safely addressed.",
  },

  {
    icon: FaBomb,
    value: 755,
    suffix: "",
    label: "UXO Removed",
    description:
      "Unexploded ordnance identified and removed through field operations.",
  },

  {
    icon: FaBomb,
    value: 1491,
    suffix: "",
    label: "IEDs Addressed",
    description:
      "Improvised explosive devices addressed through appropriate humanitarian operations.",
  },

  {
    icon: FaUsers,
    value: 12,
    suffix: "M+",
    label: "People Benefited",
    description:
      "People benefiting from DAFA's humanitarian mine action and support activities.",
  },
];

export default achievementsData;
