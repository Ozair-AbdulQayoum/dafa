import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const news = [
  {
    title: "DAFA Internal Meeting with HALO Technical Team",
    date: "August 2026",
    category: "Project Update",
    description:
      "DAFA conducted an internal coordination meeting with the HALO technical team to discuss current projects, technical progress, field operations, and future humanitarian activities across Afghanistan.",
  },

  {
    title: "Community Awareness Program",
    date: "May 2026",
    category: "Education",
    description:
      "Risk education sessions help communities understand explosive hazards and stay safe.",
  },

  {
    title: "New Humanitarian Partnership Support",
    date: "April 2026",
    category: "Partnership",
    description:
      "DAFA continues strengthening cooperation with humanitarian organizations across Afghanistan.",
  },
];

export default function News() {
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
            Latest Updates
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
            News & Updates
          </h2>

          <p
            className="
              mt-5
              text-gray-600
              lg:text-lg
            "
          >
            Stay connected with DAFA activities, achievements, meetings, and
            humanitarian efforts across Afghanistan.
          </p>
        </motion.div>

        {/* News Cards */}

        <div
          className="
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {news.map((item, index) => (
            <motion.article
              key={item.title}
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
                overflow-hidden
                rounded-3xl
                bg-white
                shadow-sm
                transition
                hover:shadow-xl
              "
            >
              {/* Image Placeholder */}

              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="
                  flex
                  h-56
                  items-center
                  justify-center
                  bg-gray-200
                "
              >
                <span className="text-gray-400">News Image</span>
              </motion.div>

              {/* Content */}

              <div className="p-7">
                <span
                  className="
                    rounded-full
                    bg-green-50
                    px-4
                    py-1
                    text-xs
                    font-semibold
                    text-[#087B5A]
                  "
                >
                  {item.category}
                </span>

                <h3
                  className="
                    mt-5
                    text-xl
                    font-bold
                    text-[#0F172A]
                  "
                >
                  {item.title}
                </h3>

                <div
                  className="
                    mt-3
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-gray-500
                  "
                >
                  <FaCalendarAlt />

                  {item.date}
                </div>

                <p
                  className="
                    mt-4
                    text-sm
                    leading-relaxed
                    text-gray-600
                  "
                >
                  {item.description}
                </p>

                <Link
                  to="/news-updates"
                  className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-[#087B5A]
                    transition
                    hover:gap-3
                  "
                >
                  Read More
                  <FaArrowRight />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Button */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="
            mt-14
            text-center
          "
        >
          <Link
            to="/news-updates"
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
            View All News
            <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
