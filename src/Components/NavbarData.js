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

  {
    title: "What We Do",
    path: "/what-we-do",
  },

  {
    title: "Projects",
    path: "/projects",
  },

  {
    title: "Achievements",
    path: "/achievements",
  },

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
