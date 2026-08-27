// src/Data File/Store Data/StoriesData.js

// ======================================================
// STORIES DATA
// Single source of truth for:
// 1. Stories listing page
// 2. Story details page
// 3. Home page latest story
// ======================================================

export const stories = [
  // ======================================================
  // NEWEST STORY
  // ======================================================

  {
    slug: "safer-communities-afghanistan",

    category: "Community Impact",

    title: "Building Safer Communities Across Afghanistan",

    description:
      "Discover how humanitarian mine action is helping communities affected by explosive hazards move toward a safer future.",

    date: "December 15, 2025",

    location: "Afghanistan",

    images: [
      "/images/story-community.jpg",
      "/images/story-community-2.jpg",
      "/images/story-community-3.jpg",
    ],

    content: [
      "For communities living in areas affected by landmines and explosive remnants of war, safety is an essential part of everyday life. DAFA works with communities across Afghanistan to reduce these risks and create safer environments.",

      "Our field teams work closely with local communities to identify hazardous areas, support clearance activities, and provide essential safety awareness. These activities help families, children, farmers, and community members better understand explosive hazards.",

      "Every cleared area represents more than land released from contamination. It can mean safer access to homes, schools, farmland, roads, and essential community services.",
    ],

    quote:
      "When hazardous land is made safe, communities gain more than land — they gain opportunities for a safer future.",

    impact: "Safer communities and improved access",
  },

  // ======================================================
  // STORY 2
  // ======================================================

  {
    slug: "field-team-making-difference",

    category: "From the Field",

    title: "Our Field Teams Making a Difference",

    description:
      "Meet the dedicated people working in challenging environments to reduce explosive hazards and protect communities.",

    date: "November 28, 2025",

    location: "Afghanistan",

    images: [
      "/images/story-field-team.jpg",
      "/images/story-field-team-2.jpg",
      "/images/story-field-team-3.jpg",
    ],

    content: [
      "Humanitarian mine action requires dedication, teamwork, discipline, and careful attention to safety. DAFA field teams work every day to help communities affected by explosive hazards.",

      "From survey and clearance activities to community engagement and risk education, each team member plays an important role in making affected areas safer.",

      "Their work often takes place in challenging environments, but their commitment remains focused on one goal: protecting people and helping communities move forward.",
    ],

    quote:
      "Our mission is simple: make dangerous areas safer and help communities move forward.",

    impact: "Dedicated teams protecting communities",
  },

  // ======================================================
  // STORY 3
  // ======================================================

  {
    slug: "community-awareness-program",

    category: "Risk Education",

    title: "Creating Awareness, Protecting Lives",

    description:
      "Learn how community awareness and safety education help people recognize explosive hazards and make safer decisions.",

    date: "October 10, 2025",

    location: "Afghanistan",

    images: [
      "/images/story-awareness.jpg",
      "/images/story-awareness-2.jpg",
      "/images/story-awareness-3.jpg",
    ],

    content: [
      "Explosive Ordnance Risk Education is an important part of humanitarian mine action. Communities need clear and practical information about the dangers they may encounter.",

      "DAFA awareness activities help children, families, farmers, and other community members recognize potential hazards and understand what to do when they encounter something suspicious.",

      "By sharing knowledge directly with communities, risk education helps reduce accidents and encourages safer behavior in areas affected by explosive hazards.",
    ],

    quote:
      "Knowledge can be one of the most powerful tools for preventing accidents and protecting lives.",

    impact: "Awareness that helps protect lives",
  },

  // ======================================================
  // STORY 4
  // ======================================================

  {
    slug: "returning-safe-access",

    category: "Community Impact",

    title: "Restoring Safe Access for Communities",

    description:
      "Clearing contaminated land can help communities safely access homes, roads, farmland, and essential services.",

    date: "September 18, 2025",

    location: "Afghanistan",

    images: [
      "/images/story-access.jpg",
      "/images/story-access-2.jpg",
      "/images/story-access-3.jpg",
    ],

    content: [
      "Contaminated land can prevent communities from safely accessing important areas and essential services.",

      "Humanitarian mine-action activities help identify and address hazardous areas so that communities can regain safer access to homes, roads, farmland, schools, and other important locations.",

      "Restoring safe access can support daily activities and help communities move toward a more secure and productive future.",
    ],

    quote:
      "Safe access gives communities the freedom to return to places that are important to everyday life.",

    impact: "Restoring safer access for communities",
  },

  // ======================================================
  // STORY 5
  // ======================================================

  {
    slug: "life-after-clearance",

    category: "Human Stories",

    title: "Life After Land Clearance",

    description:
      "A look at how communities can rebuild daily activities and create new opportunities after hazardous land is released.",

    date: "August 22, 2025",

    location: "Afghanistan",

    images: [
      "/images/story-clearance.jpg",
      "/images/story-clearance-2.jpg",
      "/images/story-clearance-3.jpg",
    ],

    content: [
      "When contaminated land is safely cleared, communities can begin returning to activities that were previously difficult or dangerous.",

      "For families, farmers, and local communities, the release of land can create safer opportunities to access homes, farmland, roads, schools, and other important areas.",

      "The impact of clearance goes beyond the physical removal of hazards. It can help communities rebuild daily activities, strengthen local opportunities, and look toward a safer future.",

      "DAFA's humanitarian mine-action work supports communities by helping reduce the risks associated with explosive hazards and contributing to safer environments across Afghanistan.",
    ],

    quote:
      "Safe land gives communities the opportunity to move forward and rebuild their everyday lives.",

    impact: "Land released for safer community use",
  },

  // ======================================================
  // STORY 6
  // ======================================================

  {
    slug: "mine-action-teamwork",

    category: "From the Field",

    title: "Teamwork Behind Humanitarian Mine Action",

    description:
      "From field teams to community partners, discover the people working together to make affected areas safer.",

    date: "July 12, 2025",

    location: "Afghanistan",

    images: [
      "/images/story-teamwork.jpg",
      "/images/story-teamwork-2.jpg",
      "/images/story-teamwork-3.jpg",
    ],

    content: [
      "Humanitarian mine action depends on cooperation between field teams, communities, organizations, and partners.",

      "Every successful operation requires planning, communication, teamwork, and a strong commitment to safety.",

      "DAFA teams work together with communities and partners to support activities that reduce explosive hazards and improve safety for people living in affected areas.",
    ],

    quote:
      "Working together allows communities and humanitarian teams to create safer places for everyone.",

    impact: "Stronger teamwork for safer communities",
  },
];

// ======================================================
// STORY CATEGORIES
// ======================================================

export const storyCategories = [
  "All Stories",
  "Community Impact",
  "From the Field",
  "Risk Education",
  "Human Stories",
];

// ======================================================
// GET STORY BY SLUG
// ======================================================

export const getStoryBySlug = (slug) => {
  return stories.find((story) => story.slug === slug);
};

// ======================================================
// GET LATEST STORY
// Automatically finds the newest story by date
// ======================================================

export const getLatestStory = () => {
  return [...stories].sort((a, b) => new Date(b.date) - new Date(a.date))[0];
};
