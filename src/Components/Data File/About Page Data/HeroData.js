// src/Components/Data File/About Page Data/HeroData.js

// =====================================================
// ABOUT DAFA — HERO DATA
// =====================================================

export const aboutHeroData = {
  // ---------------------------------------------------
  // HERO INTRO
  // ---------------------------------------------------

  eyebrow: "About DAFA",

  title: {
    normal: "About the",
    highlight: "Demining Agency",
    ending: "for Afghanistan",
  },

  description:
    "The Demining Agency for Afghanistan works to protect communities from explosive hazards and contribute to a safer, more secure future across Afghanistan.",

  supportText: "Humanitarian Mine Action • Afghanistan",

  // ---------------------------------------------------
  // BREADCRUMB
  // ---------------------------------------------------

  breadcrumb: [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About DAFA",
      path: "/about",
    },
  ],

  // ---------------------------------------------------
  // HERO SLIDER IMAGES
  // ---------------------------------------------------

  images: [
    {
      src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1400&q=85",
      alt: "Humanitarian community support and field activity",
    },
    {
      src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1400&q=85",
      alt: "Humanitarian field activity and community support",
    },
    {
      src: "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=1400&q=85",
      alt: "Community development and humanitarian support",
    },
  ],

  // ---------------------------------------------------
  // VISUAL CONTENT
  // ---------------------------------------------------

  visualLabel: "Humanitarian Mine Action",

  visualTitle: "Protecting communities through safer environments.",

  organizationLabel: "Organization",

  organizationName: "Demining Agency for Afghanistan",

  // ---------------------------------------------------
  // OPTIONAL VISUAL LINK
  // ---------------------------------------------------

  visualLink: {
    label: "Learn more about DAFA",
    path: "/about",
  },
};

export default aboutHeroData;
