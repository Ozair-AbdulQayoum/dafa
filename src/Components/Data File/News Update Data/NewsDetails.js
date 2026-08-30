import { FaCalendarAlt, FaHandshake, FaUsers } from "react-icons/fa";

export const newsDetailsData = {
  "dafa-mou-signing": {
    category: "Partnerships",

    title: "DAFA Strengthens Humanitarian Partnerships Through New MOU",

    date: "December 20, 2025",

    location: "Kabul, Afghanistan",

    // Main image
    image: "/images/news-mou.jpg",

    // Images for auto slider
    gallery: [
      "/images/news-mou.jpg",
      "/images/news-mou-2.jpg",
      "/images/news-mou-3.jpg",
      "/images/news-mou-4.jpg",
    ],

    intro:
      "DAFA has strengthened its commitment to humanitarian mine action through the signing of a new Memorandum of Understanding with a strategic partner.",

    articleTitle: "Strengthening Cooperation for Safer Communities",

    paragraphs: [
      "The agreement represents an important step toward strengthening cooperation and supporting humanitarian efforts aimed at reducing the impact of explosive hazards on communities across Afghanistan.",

      "During the signing ceremony, representatives from both organizations discussed opportunities for collaboration, technical cooperation, knowledge sharing, and improved support for communities affected by explosive hazards.",

      "The partnership will help create stronger coordination between humanitarian organizations and contribute to more effective mine-action activities in affected areas.",
    ],

    highlights: [
      {
        icon: FaHandshake,
        title: "Partnership",
        text: "Strengthening cooperation between humanitarian organizations.",
      },

      {
        icon: FaUsers,
        title: "Community Focus",
        text: "Supporting safer communities affected by explosive hazards.",
      },

      {
        icon: FaCalendarAlt,
        title: "New Commitment",
        text: "Creating opportunities for continued humanitarian cooperation.",
      },
    ],

    closing:
      "DAFA remains committed to building meaningful partnerships that support humanitarian mine action and contribute to safer and more resilient communities across Afghanistan.",
  },

  "dafa-community-meeting": {
    category: "Meetings",

    title: "DAFA Holds Community Meeting to Strengthen Local Engagement",

    date: "December 18, 2025",

    location: "Kabul, Afghanistan",

    image: "/images/news-meeting.jpg",

    gallery: [
      "/images/news-meeting.jpg",
      "/images/news-meeting-2.jpg",
      "/images/news-meeting-3.jpg",
    ],

    intro:
      "DAFA representatives met with community members to discuss humanitarian mine action activities, safety concerns, and local priorities.",

    articleTitle: "Working Together With Local Communities",

    paragraphs: [
      "Community engagement is an important part of humanitarian mine action. DAFA works closely with local communities to understand their concerns and priorities.",

      "During the meeting, community representatives shared information about areas affected by explosive hazards and discussed safety concerns facing families.",

      "The discussion helped strengthen communication between DAFA teams and local communities while supporting safer and more effective humanitarian activities.",
    ],

    highlights: [
      {
        icon: FaUsers,
        title: "Community Engagement",
        text: "Working directly with communities to understand local priorities.",
      },

      {
        icon: FaHandshake,
        title: "Local Cooperation",
        text: "Building stronger relationships with community representatives.",
      },

      {
        icon: FaCalendarAlt,
        title: "Field Activity",
        text: "Supporting ongoing humanitarian mine-action activities.",
      },
    ],

    closing:
      "DAFA continues to place communities at the center of its humanitarian mine-action work and remains committed to listening to local needs.",
  },
};
