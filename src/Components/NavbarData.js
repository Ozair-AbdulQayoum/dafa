// src/Components/NavbarData.js

// =====================================================
// NAVBAR DATA
// =====================================================

export const navbarData = {
  brand: {
    name: "DAFA",
    description: "Demining Agency for Afghanistan",
  },

  home: {
    title: "Home",
    path: "/",
  },

  contact: {
    title: "Contact Us",
    path: "/contact",
  },
};

// =====================================================
// MAIN NAVIGATION
// =====================================================

export const navItems = [
  // =====================================================
  // ABOUT
  // =====================================================

  {
    title: "About",
    dropdown: true,

    items: [
      {
        title: "About DAFA",
        path: "/about",
      },

      {
        title: "Organization Chart",
        path: "/organization-chart",
      },

      {
        title: "Members",
        path: "/members",
      },
    ],
  },

  // =====================================================
  // WHAT WE DO
  // =====================================================

  {
    title: "What We Do",
    path: "/what-we-do",
  },

  // =====================================================
  // PROJECTS
  // =====================================================

  {
    title: "Projects",
    path: "/projects",
  },

  // =====================================================
  // ACHIEVEMENTS
  // =====================================================

  {
    title: "Achievements",
    path: "/achievements",
  },

  // =====================================================
  // RESOURCES
  // =====================================================

  {
    title: "Resources",
    dropdown: true,

    items: [
      {
        title: "Reports",
        path: "/resources/reports",
      },

      {
        title: "Stories",
        path: "/resources/stories",
      },

      {
        title: "News & Updates",
        path: "/resources/news-updates",
      },

      {
        title: "Certificates",
        path: "/resources/certificates",
      },
    ],
  },
];
