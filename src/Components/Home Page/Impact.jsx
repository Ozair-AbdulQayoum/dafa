import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaUsers, FaProjectDiagram } from "react-icons/fa";

const locations = [
  {
    province: "Kabul",
    projects: "45+ Projects",
    people: "120,000+ People Supported",
  },
  {
    province: "Kandahar",
    projects: "60+ Projects",
    people: "250,000+ People Supported",
  },
  {
    province: "Nangarhar",
    projects: "35+ Projects",
    people: "90,000+ People Supported",
  },
  {
    province: "Helmand",
    projects: "50+ Projects",
    people: "180,000+ People Supported",
  },
];

export default function WhereWeWork() {
  return (
    <section className="bg-white py-24">
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
            Our Coverage
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
            Where We Work
            <span className="block text-[#087B5A]">Across Afghanistan</span>
          </h2>

          <p className="mt-5 text-gray-600 lg:text-lg">
            DAFA operates in communities across Afghanistan, supporting
            humanitarian demining activities and creating safer environments.
          </p>
        </motion.div>

        {/* Main Area */}

        <div
          className="
            grid
            gap-12
            lg:grid-cols-2
            lg:items-center
          "
        >
          {/* Map Placeholder */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
          >
            <div
              className="
                flex
                h-[500px]
                items-center
                justify-center
                rounded-3xl
                bg-[#F8FAFC]
                border
                border-gray-200
              "
            >
              <div className="text-center">
                <FaMapMarkerAlt
                  className="
                    mx-auto
                    text-6xl
                    text-[#087B5A]
                  "
                />

                <h3
                  className="
                    mt-5
                    text-2xl
                    font-bold
                    text-[#0F172A]
                  "
                >
                  Afghanistan Operations Map
                </h3>

                <p className="mt-3 text-gray-500">
                  Official DAFA map will be added here.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Province Cards */}

          <div className="space-y-5">
            {locations.map((item, index) => (
              <motion.div
                key={item.province}
                initial={{
                  opacity: 0,
                  x: 50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{
                  once: true,
                }}
                className="
                  rounded-2xl
                  border
                  border-gray-100
                  bg-white
                  p-6
                  shadow-sm
                  transition
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                <h3
                  className="
                    text-xl
                    font-bold
                    text-[#0F172A]
                  "
                >
                  {item.province}
                </h3>

                <div
                  className="
                    mt-4
                    flex
                    flex-col
                    gap-3
                    text-sm
                    text-gray-600
                  "
                >
                  <p className="flex items-center gap-3">
                    <FaProjectDiagram className="text-[#087B5A]" />
                    {item.projects}
                  </p>

                  <p className="flex items-center gap-3">
                    <FaUsers className="text-[#087B5A]" />
                    {item.people}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
