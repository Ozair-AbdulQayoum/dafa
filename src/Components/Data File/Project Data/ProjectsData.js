// ============================================================
// PROJECTS DATA
// ============================================================

const projects = [
  // ============================================================
  // 2026 — CURRENT / ONGOING
  // ============================================================

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

  {
    slug: "2026-community-protection-project",
    image: "",
    location: "Kabul Province",
    year: "2026",
    title: "Community Protection Project",
    description:
      "Humanitarian mine action activities focused on reducing explosive hazards and strengthening community safety.",
    status: "Completed",
  },

  // ============================================================
  // 2025 — COMPLETED
  // ============================================================

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
    slug: "nangarhar-community-clearance-project",
    image: "",
    location: "Nangarhar Province",
    year: "2025",
    title: "Nangarhar Community Clearance Project",
    description:
      "Clearance activities supporting communities affected by explosive hazards and contaminated land.",
    status: "Completed",
  },

  {
    slug: "balkh-land-release-project",
    image: "",
    location: "Balkh Province",
    year: "2025",
    title: "Balkh Land Release Project",
    description:
      "Supporting the safe release of contaminated land for communities, agriculture, and local development.",
    status: "Completed",
  },

  {
    slug: "2025-community-clearance",
    image: "",
    location: "Kunduz Province",
    year: "2025",
    title: "Community Clearance Initiative",
    description:
      "Community-focused mine clearance activities helping reduce risks and improve safe access to land.",
    status: "Completed",
  },

  // ============================================================
  // 2024 — COMPLETED
  // ============================================================

  {
    slug: "kandahar-land-clearance-project",
    image: "",
    location: "Kandahar Province",
    year: "2024",
    title: "Kandahar Land Clearance Project",
    description:
      "Humanitarian clearance activities helping communities safely access agricultural and residential areas.",
    status: "Completed",
  },

  {
    slug: "herat-community-safety-project",
    image: "",
    location: "Herat Province",
    year: "2024",
    title: "Herat Community Safety Project",
    description:
      "Explosive hazard reduction activities supporting communities affected by land contamination.",
    status: "Completed",
  },

  {
    slug: "2024-explosive-hazard-reduction",
    image: "",
    location: "Logar Province",
    year: "2024",
    title: "Explosive Hazard Reduction Project",
    description:
      "Humanitarian operations addressing explosive hazards and supporting safer environments for communities.",
    status: "Completed",
  },

  {
    slug: "2024-safe-access-project",
    image: "",
    location: "Parwan Province",
    year: "2024",
    title: "Safe Access & Community Support Project",
    description:
      "Mine action activities helping communities safely access land, roads, and essential services.",
    status: "Completed",
  },

  // ============================================================
  // 2023 — COMPLETED
  // ============================================================

  {
    slug: "helmand-clearance-operation",
    image: "",
    location: "Helmand Province",
    year: "2023",
    title: "Helmand Clearance Operation",
    description:
      "Field-based humanitarian mine action operations designed to reduce risks to local communities.",
    status: "Completed",
  },

  {
    slug: "balkh-safe-land-project",
    image: "",
    location: "Balkh Province",
    year: "2023",
    title: "Balkh Safe Land Project",
    description:
      "Supporting the safe release of contaminated land for communities and local development.",
    status: "Completed",
  },

  {
    slug: "kabul-explosive-hazard-project",
    image: "",
    location: "Kabul Province",
    year: "2023",
    title: "Kabul Explosive Hazard Reduction Project",
    description:
      "Humanitarian activities reducing explosive risks and improving safety for affected communities.",
    status: "Completed",
  },

  {
    slug: "nangarhar-safe-communities-project",
    image: "",
    location: "Nangarhar Province",
    year: "2023",
    title: "Nangarhar Safe Communities Project",
    description:
      "Mine action activities supporting safer movement and access for communities affected by contamination.",
    status: "Completed",
  },

  // ============================================================
  // 2022 — COMPLETED
  // ============================================================

  {
    slug: "logar-humanitarian-clearance",
    image: "",
    location: "Logar Province",
    year: "2022",
    title: "Logar Humanitarian Clearance",
    description:
      "Humanitarian mine clearance activities focused on reducing explosive risks in affected communities.",
    status: "Completed",
  },

  {
    slug: "parwan-mine-action-project",
    image: "",
    location: "Parwan Province",
    year: "2022",
    title: "Parwan Mine Action Project",
    description:
      "Mine action operations supporting safer movement, access, and livelihoods for local communities.",
    status: "Completed",
  },

  {
    slug: "2022-community-safety-project",
    image: "",
    location: "Wardak Province",
    year: "2022",
    title: "Community Safety & Clearance Project",
    description:
      "Clearance and community safety activities designed to reduce risks from explosive hazards.",
    status: "Completed",
  },

  // ============================================================
  // 2021 — COMPLETED
  // ============================================================

  {
    slug: "wardak-community-clearance",
    image: "",
    location: "Wardak Province",
    year: "2021",
    title: "Wardak Community Clearance Project",
    description:
      "Clearance operations helping reduce explosive hazards and improve safety for affected communities.",
    status: "Completed",
  },

  {
    slug: "paktiya-explosive-hazard-reduction",
    image: "",
    location: "Paktiya Province",
    year: "2021",
    title: "Paktiya Explosive Hazard Reduction",
    description:
      "Humanitarian activities addressing explosive hazards and supporting safer access to contaminated areas.",
    status: "Completed",
  },

  {
    slug: "2021-safe-land-project",
    image: "",
    location: "Khost Province",
    year: "2021",
    title: "Khost Safe Land Project",
    description:
      "Supporting communities through mine clearance and the safe release of contaminated land.",
    status: "Completed",
  },
];

export default projects;
