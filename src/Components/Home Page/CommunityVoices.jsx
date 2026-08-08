import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaMapMarkerAlt } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "After DAFA cleared our area, our families can safely use the land again and continue their daily lives without fear.",
    name: "Community Member",
    location: "Kabul Province",
  },

  {
    quote:
      "Risk education programs helped our children understand explosive hazards and learn how to stay safe.",
    name: "Local Resident",
    location: "Kandahar Province",
  },

  {
    quote:
      "DAFA's humanitarian work has brought safety, awareness, and hope to our community.",
    name: "Community Representative",
    location: "Nangarhar Province",
  },
];

export default function CommunityVoices() {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="
            mx-auto
            mb-16
            max-w-3xl
            text-center
          "
        >
          <p
            className="
              text-sm
              font-bold
              uppercase
              tracking-[3px]
              text-[#087B5A]
            "
          >
            Community Voices
          </p>

          <h2
            className="
              mt-4
              text-3xl
              font-bold
              text-[#0F172A]
              lg:text-5xl
            "
          >
            Real Stories From The People We Serve
          </h2>

          <p
            className="
              mt-5
              text-gray-600
              lg:text-lg
            "
          >
            Discover how DAFA's humanitarian work creates safer communities
            across Afghanistan.
          </p>
        </motion.div>

        {/* Testimonials */}

        <div
          className="
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -10,
              }}
              className="
                rounded-3xl
                bg-white
                p-8
                shadow-sm
                transition
                hover:shadow-xl
              "
            >
              {/* Quote Icon */}

              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-green-50
                  text-[#087B5A]
                "
              >
                <FaQuoteLeft />
              </div>

              {/* Quote */}

              <p
                className="
                  mt-6
                  leading-relaxed
                  text-gray-600
                "
              >
                "{item.quote}"
              </p>

              {/* Person */}

              <div className="mt-8">
                <h3
                  className="
                    text-lg
                    font-bold
                    text-[#0F172A]
                  "
                >
                  {item.name}
                </h3>

                <div
                  className="
                    mt-2
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-gray-500
                  "
                >
                  <FaMapMarkerAlt className="text-[#087B5A]" />

                  {item.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
