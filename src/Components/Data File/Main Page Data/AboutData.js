import aboutImg from "../../../assets/About-img.png";

// =====================================================
// ABOUT DAFA SECTION DATA
// =====================================================

export const aboutData = {
  label: "About DAFA",

  title: "Protecting Communities. Building Safer Futures.",

  description:
    "DAFA is a humanitarian mine action organization with decades of experience reducing explosive hazards across Afghanistan. Through professional field teams and community-focused operations, DAFA works to make communities safer and help people build a more secure future.",

  image: {
    src: aboutImg,
    alt: "DAFA humanitarian mine action team working in Afghanistan",
    label: "Humanitarian Mine Action",
  },

  highlights: [
    {
      title: "Humanitarian Mission",
      description: "Protecting people from explosive hazards.",
      icon: "mission",
    },
    {
      title: "Experienced Teams",
      description: "Skilled professionals working in challenging environments.",
      icon: "team",
    },
    {
      title: "Nationwide Operations",
      description: "Supporting safer communities across Afghanistan.",
      icon: "operations",
    },
  ],

  button: {
    text: "Learn More About DAFA",
    path: "/about",
  },
};
