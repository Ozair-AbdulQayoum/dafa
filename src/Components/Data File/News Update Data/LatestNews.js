// src/Components/Data File/News Update Data/LatestNews.js

export const newsUpdates = [
  {
    id: 1,
    slug: "dafa-community-meeting",
    category: "Meetings",
    title: "DAFA Holds Community Meeting to Strengthen Local Engagement",
    description:
      "DAFA representatives meet with community members to discuss humanitarian mine action activities, safety concerns, and local priorities.",
    date: "December 18, 2025",
    location: "Kabul, Afghanistan",
    image: "/images/news/news-meeting.jpg",
    gallery: [
      "/images/news/news-meeting.jpg",
      "/images/news/news-meeting-2.jpg",
      "/images/news/news-meeting-3.jpg",
    ],
  },

  {
    id: 2,
    slug: "dafa-field-team-training",
    category: "Training",
    title: "DAFA Conducts Training for Humanitarian Mine Action Teams",
    description:
      "A capacity-building training program helps field teams strengthen their technical knowledge, safety practices, and operational skills.",
    date: "December 08, 2025",
    location: "Afghanistan",
    image: "/images/news/news-training.jpg",
    gallery: [
      "/images/news/news-training.jpg",
      "/images/news/news-training-2.jpg",
    ],
  },

  {
    id: 3,
    slug: "dafa-mou-partnership",
    category: "MOU & Partnerships",
    title:
      "DAFA Signs New Partnership Agreement to Support Humanitarian Action",
    description:
      "DAFA strengthens cooperation with partners through a new memorandum of understanding focused on humanitarian mine-action activities.",
    date: "November 24, 2025",
    location: "Kabul, Afghanistan",
    image: "/images/news/news-mou.jpg",
    gallery: ["/images/news/news-mou.jpg", "/images/news/news-mou-2.jpg"],
  },

  {
    id: 4,
    slug: "dafa-stakeholder-meeting",
    category: "Meetings",
    title: "DAFA Meets With Humanitarian Partners",
    description:
      "DAFA meets with humanitarian stakeholders to discuss ongoing programs, operational priorities, and opportunities for collaboration.",
    date: "November 12, 2025",
    location: "Kabul, Afghanistan",
    image: "/images/news/news-stakeholder.jpg",
    gallery: ["/images/news/news-stakeholder.jpg"],
  },

  {
    id: 5,
    slug: "mine-action-awareness-training",
    category: "Training",
    title: "Community Safety Awareness Training Conducted",
    description:
      "DAFA teams conduct awareness activities to help communities better understand explosive hazards and safer behavior.",
    date: "October 30, 2025",
    location: "Afghanistan",
    image: "/images/news/news-awareness.jpg",
    gallery: ["/images/news/news-awareness.jpg"],
  },

  {
    id: 6,
    slug: "dafa-humanitarian-event",
    category: "Events",
    title: "DAFA Participates in Humanitarian Mine Action Event",
    description:
      "DAFA joins humanitarian organizations and partners to highlight the importance of mine action and community safety.",
    date: "October 16, 2025",
    location: "Kabul, Afghanistan",
    image: "/images/news/news-event.jpg",
    gallery: ["/images/news/news-event.jpg"],
  },
];

/*
|--------------------------------------------------------------------------
| LATEST NEWS FOR HOME PAGE
|--------------------------------------------------------------------------
| The first item is considered the latest news.
| Change the order of newsUpdates whenever you add a new news item.
*/

export const latestNews = newsUpdates[0];

/*
|--------------------------------------------------------------------------
| NEWS CATEGORIES
|--------------------------------------------------------------------------
*/

export const newsCategories = [
  "All Updates",
  "Meetings",
  "Training",
  "MOU & Partnerships",
  "Events",
  "Field Activities",
  "Announcements",
];
