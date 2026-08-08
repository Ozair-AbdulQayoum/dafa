import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const stories = [
  {
    location: "Kandahar Province",
    title: "A Safer Tomorrow for Rural Families",
    description:
      "After demining operations, communities can safely access their land and continue daily activities without fear.",
    impact: "Families protected",
  },

  {
    location: "Nangarhar Province",
    title: "Safe Paths for Children",
    description:
      "Risk education programs helped communities understand explosive hazards and protect future generations.",
    impact: "Community awareness increased",
  },

  {
    location: "Helmand Province",
    title: "Land Returned to Communities",
    description:
      "Cleared land provides new opportunities for agriculture and local development.",
    impact: "Land restored",
  },
];

export default function SuccessStories() {
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
          className="mx-auto mb-16 max-w-3xl text-center"
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
            Success Stories
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
            Stories of Hope
            <span className="block text-[#087B5A]">From Communities</span>
          </h2>

          <p className="mt-5 text-gray-600 lg:text-lg">
            Real stories showing how humanitarian demining creates safer
            communities and restores opportunities across Afghanistan.
          </p>
        </motion.div>

        {/* Story Cards */}

        <div
          className="
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {stories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{
                opacity: 0,
                y: 40,
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
              className="
                overflow-hidden
                rounded-3xl
                bg-white
                shadow-sm
                transition
                hover:-translate-y-2
                hover:shadow-xl
              "
            >
              {/* Image Placeholder */}

              <div
                className="
                  flex
                  h-56
                  items-center
                  justify-center
                  bg-gray-200
                "
              >
                <span className="text-gray-500">Story Image</span>
              </div>

              {/* Content */}

              <div className="p-7">
                <div
                  className="
                    flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-[#087B5A]
                  "
                >
                  <FaMapMarkerAlt />

                  {story.location}
                </div>

                <h3
                  className="
                    mt-4
                    text-xl
                    font-bold
                    text-[#0F172A]
                  "
                >
                  {story.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-relaxed
                    text-gray-600
                  "
                >
                  {story.description}
                </p>

                <div
                  className="
                    mt-5
                    rounded-lg
                    bg-green-50
                    px-4
                    py-3
                    text-sm
                    font-semibold
                    text-[#087B5A]
                  "
                >
                  ✓ {story.impact}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="mt-14 text-center"
        >
          <Link
            to="/stories"
            className="
              inline-flex
              items-center
              gap-3
              rounded-xl
              bg-[#087B5A]
              px-8
              py-4
              font-semibold
              text-white
              transition
              hover:bg-[#066347]
            "
          >
            View All Stories
            <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
