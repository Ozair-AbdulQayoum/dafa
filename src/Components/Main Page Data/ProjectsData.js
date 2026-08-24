// =====================================================
// PROJECTS DATA
// =====================================================

export const projects = [
  {
    slug: "kabul-humanitarian-clearance-project",
    image: "",
    location: "Kabul Province",
    year: "2025",
    title: "Kabul Humanitarian Clearance Project",
    description:
      "Clearing contaminated land and removing explosive hazards to restore safe access for communities.",
    status: "Completed",
  },

  {
    slug: "kandahar-humanitarian-demining-operations",
    image: "",
    location: "Kandahar Province",
    year: "2026",
    title: "Kandahar Humanitarian Demining Operations",
    description:
      "Professional demining operations supporting communities affected by landmines and explosive hazards.",
    status: "Ongoing",
  },

  {
    slug: "nangarhar-explosive-risk-education",
    image: "",
    location: "Nangarhar Province",
    year: "2026",
    title: "Nangarhar Explosive Risk Education",
    description:
      "Community-based awareness activities helping people recognize explosive hazards and adopt safer behaviors.",
    status: "Ongoing",
  },

  {
    slug: "herat-clearance-project",
    image: "",
    location: "Herat Province",
    year: "2026",
    title: "Herat Humanitarian Clearance Project",
    description:
      "Humanitarian clearance operations focused on reducing explosive hazards and improving safety for affected communities.",
    status: "Ongoing",
  },
];

// =====================================================
// HOME PROJECTS
// Only Ongoing projects appear on Home
// Maximum 3 cards
// =====================================================

export const homeProjects = projects
  .filter((project) => project.status === "Ongoing")
  .slice(0, 3);
