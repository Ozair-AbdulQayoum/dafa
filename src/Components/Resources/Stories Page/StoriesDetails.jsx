import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt, FaQuoteLeft } from "react-icons/fa";

// ======================================================
// STORIES DATA
// ======================================================

const stories = {
  "safer-communities-afghanistan": {
    category: "Community Impact",
    title: "Building Safer Communities Across Afghanistan",
    description:
      "Discover how humanitarian mine action is helping communities affected by explosive hazards move toward a safer future.",
    date: "December 15, 2025",
    location: "Afghanistan",

    // image: "/images/story-community.jpg",

    content: [
      "For communities living in areas affected by landmines and explosive remnants of war, safety is an essential part of everyday life. DAFA works with communities across Afghanistan to reduce these risks and create safer environments.",

      "Our field teams work closely with local communities to identify hazardous areas, support clearance activities, and provide essential safety awareness. These activities help families, children, farmers, and community members better understand explosive hazards.",

      "Every cleared area represents more than land released from contamination. It can mean safer access to homes, schools, farmland, roads, and essential community services.",
    ],

    quote:
      "When hazardous land is made safe, communities gain more than land — they gain opportunities for a safer future.",
  },

  "field-team-making-difference": {
    category: "From the Field",
    title: "Our Field Teams Making a Difference",
    description:
      "Meet the dedicated people working in challenging environments to reduce explosive hazards and protect communities.",
    date: "November 28, 2025",
    location: "Afghanistan",

    // image: "/images/story-field-team.jpg",

    content: [
      "Humanitarian mine action requires dedication, teamwork, discipline, and careful attention to safety. DAFA field teams work every day to help communities affected by explosive hazards.",

      "From survey and clearance activities to community engagement and risk education, each team member plays an important role in making affected areas safer.",

      "Their work often takes place in challenging environments, but their commitment remains focused on one goal: protecting people and helping communities move forward.",
    ],

    quote:
      "Our mission is simple: make dangerous areas safer and help communities move forward.",
  },

  "community-awareness-program": {
    category: "Risk Education",
    title: "Creating Awareness, Protecting Lives",
    description:
      "Learn how community awareness and safety education help people recognize explosive hazards and make safer decisions.",
    date: "October 10, 2025",
    location: "Afghanistan",

    // image: "/images/story-awareness.jpg",

    content: [
      "Explosive Ordnance Risk Education is an important part of humanitarian mine action. Communities need clear and practical information about the dangers they may encounter.",

      "DAFA awareness activities help children, families, farmers, and other community members recognize potential hazards and understand what to do when they encounter something suspicious.",

      "By sharing knowledge directly with communities, risk education helps reduce accidents and encourages safer behavior in areas affected by explosive hazards.",
    ],

    quote:
      "Knowledge can be one of the most powerful tools for preventing accidents and protecting lives.",
  },

  "returning-safe-access": {
    category: "Community Impact",
    title: "Restoring Safe Access for Communities",
    description:
      "Clearing contaminated land can help communities safely access homes, roads, farmland, and essential services.",
    date: "September 18, 2025",
    location: "Afghanistan",

    // image: "/images/story-access.jpg",

    content: [
      "Contaminated land can prevent communities from safely accessing important areas and essential services.",

      "Humanitarian mine-action activities help identify and address hazardous areas so that communities can regain safer access to homes, roads, farmland, schools, and other important locations.",

      "Restoring safe access can support daily activities and help communities move toward a more secure and productive future.",
    ],

    quote:
      "Safe access gives communities the freedom to return to places that are important to everyday life.",
  },

  "life-after-clearance": {
    category: "Human Stories",
    title: "Life After Land Clearance",
    description:
      "A look at how communities can rebuild daily activities and create new opportunities after hazardous land is released.",
    date: "August 22, 2025",
    location: "Afghanistan",

    // image: "/images/story-clearance.jpg",

    content: [
      "When contaminated land is safely cleared, communities can begin returning to activities that were previously difficult or dangerous.",

      "For families, farmers, and local communities, the release of land can create safer opportunities to access homes, farmland, roads, schools, and other important areas.",

      "The impact of clearance goes beyond the physical removal of hazards. It can help communities rebuild daily activities, strengthen local opportunities, and look toward a safer future.",

      "DAFA's humanitarian mine-action work supports communities by helping reduce the risks associated with explosive hazards and contributing to safer environments across Afghanistan.",
    ],

    quote:
      "Safe land gives communities the opportunity to move forward and rebuild their everyday lives.",
  },

  "mine-action-teamwork": {
    category: "From the Field",
    title: "Teamwork Behind Humanitarian Mine Action",
    description:
      "From field teams to community partners, discover the people working together to make affected areas safer.",
    date: "July 12, 2025",
    location: "Afghanistan",

    // image: "/images/story-teamwork.jpg",

    content: [
      "Humanitarian mine action depends on cooperation between field teams, communities, organizations, and partners.",

      "Every successful operation requires planning, communication, teamwork, and a strong commitment to safety.",

      "DAFA teams work together with communities and partners to support activities that reduce explosive hazards and improve safety for people living in affected areas.",
    ],

    quote:
      "Working together allows communities and humanitarian teams to create safer places for everyone.",
  },
};

// ======================================================
// COMPONENT
// ======================================================

export default function StoriesDetails() {
  const { slug } = useParams();

  const story = stories[slug] || stories["life-after-clearance"];

  return (
    <main className="bg-[#F8FAFC]">
      {/* ==================================================
          STORY HERO
      ================================================== */}

      <section className="relative overflow-hidden bg-[#0B3D2E]">
        {/* Background Decoration */}

        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#087B5A]/20 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#F97316]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* ================= HERO CONTENT ================= */}

            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Category */}

              <span className="inline-flex rounded-full border border-[#A7F3D0]/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#A7F3D0]">
                {story.category}
              </span>

              {/* Title */}

              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                {story.title}
              </h1>

              {/* Description */}

              <p className="mt-6 max-w-xl text-base leading-8 text-green-50/80 sm:text-lg">
                {story.description}
              </p>

              {/* Meta */}

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-green-100/70">
                <span className="flex items-center gap-2">
                  <FaCalendarAlt size={13} className="text-[#F97316]" />
                  {story.date}
                </span>

                <span className="flex items-center gap-2">
                  <FaMapMarkerAlt size={13} className="text-[#F97316]" />
                  {story.location}
                </span>
              </div>
            </motion.div>

            {/* ================= HERO IMAGE ================= */}

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.15,
              }}
              className="relative"
            >
              <div className="relative h-[380px] overflow-hidden rounded-3xl border border-white/10 bg-[#174E3D] shadow-2xl sm:h-[480px]">
                {/*
                  IMAGE TEMPORARILY COMMENTED

                  <img
                    src={story.image}
                    alt={story.title}
                    className="h-full w-full object-cover"
                  />
                */}

                {/* Temporary Placeholder */}

                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A7F3D0]">
                      DAFA
                    </p>

                    <p className="mt-2 text-xs text-green-100/50">
                      Story Image
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================================================
          STORY CONTENT
      ================================================== */}

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_320px] lg:px-10">
          {/* ================= ARTICLE ================= */}

          <motion.article
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            {/* Label */}

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087B5A]">
              The Story
            </p>

            {/* Heading */}

            <h2 className="mt-3 text-3xl font-bold text-[#0F172A] sm:text-4xl">
              {story.title}
            </h2>

            {/* Paragraphs */}

            <div className="mt-8 space-y-6">
              {story.content.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base leading-8 text-slate-600 sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.article>

          {/* ================= STORY INFORMATION ================= */}

          <motion.aside
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#0F172A]">
                Story Information
              </h3>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-xs text-slate-400">Category</p>

                  <p className="mt-1 text-sm font-semibold text-[#087B5A]">
                    {story.category}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">Published</p>

                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    {story.date}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">Location</p>

                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    {story.location}
                  </p>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      {/* ==================================================
          HIGHLIGHT QUOTE
      ================================================== */}

      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-5xl rounded-3xl bg-[#0B3D2E] p-8 sm:p-12 lg:p-14"
        >
          <FaQuoteLeft size={28} className="text-[#F97316]" />

          <blockquote className="mt-6 text-2xl font-semibold leading-9 text-white sm:text-3xl sm:leading-10">
            {story.quote}
          </blockquote>
        </motion.div>
      </section>
    </main>
  );
}
