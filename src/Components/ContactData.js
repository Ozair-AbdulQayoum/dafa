// src/Data File/Main Page Data/ContactData.js

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

export const contactData = {
  badge: "Get In Touch",

  title: "Contact",
  highlightedTitle: "DAFA",

  description:
    "Have a question, need more information, or want to work with us? Contact the Demining Agency for Afghanistan team.",

  contactInfo: [
    {
      icon: FaMapMarkerAlt,
      title: "Our Office",
      value: "Kabul, Afghanistan",
      link: null,
    },

    {
      icon: FaPhoneAlt,
      title: "Phone",
      value: "+93 20 250 0000",
      link: "tel:+93202500000",
    },

    {
      icon: FaEnvelope,
      title: "Email",
      value: "info@dafa.af",
      link: "mailto:info@dafa.af",
    },

    {
      icon: FaClock,
      title: "Office Hours",
      value: "Saturday – Thursday, 8:00 AM – 4:00 PM",
      link: null,
    },
  ],

  form: {
    title: "Send Us a Message",

    description:
      "Complete the form below and our team will get back to you as soon as possible.",

    fields: {
      firstName: {
        label: "First Name",
        placeholder: "Enter your first name",
      },

      lastName: {
        label: "Last Name",
        placeholder: "Enter your last name",
      },

      email: {
        label: "Email Address",
        placeholder: "you@example.com",
      },

      phone: {
        label: "Phone Number",
        placeholder: "+93 xxx xxx xxx",
      },

      subject: {
        label: "Subject",
        placeholder: "How can we help you?",
      },

      message: {
        label: "Message",
        placeholder: "Write your message here...",
      },
    },

    buttonText: "Send Message",
  },

  importantNotice: {
    title: "Important Notice",
    text: "For urgent mine or explosive hazard concerns, please contact the appropriate local emergency or mine-action authorities. Do not approach or touch suspected explosive items.",
  },
};
