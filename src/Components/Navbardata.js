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
        title: "Director Short Bio",
        path: "/director-bio",
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
    dropdown: true,
    items: [
      {
        title: "Manual Demining",
        path: "/what-we-do/manual-demining",
      },
      {
        title: "Mechanical Demining",
        path: "/what-we-do/mechanical-demining",
      },
      {
        title: "IED Response",
        path: "/what-we-do/ied-response",
      },
      {
        title: "Explosive Ordnance Disposal",
        path: "/what-we-do/eod",
      },
      {
        title: "Risk Education",
        path: "/what-we-do/eore",
      },
      {
        title: "Disaster Management",
        path: "/what-we-do/disaster-management",
      },
      {
        title: "Cash for Work",
        path: "/what-we-do/cash-for-work",
      },
    ],
  },

  {
    title: "Projects",
    path: "/projects",
  },

  {
    title: "Impact",
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
    ],
  },
];
