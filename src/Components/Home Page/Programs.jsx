import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

// Add official DAFA images later
// import manualImg from "../../assets/programs/manual.jpg";
// import mechanicalImg from "../../assets/programs/mechanical.jpg";
// import iedImg from "../../assets/programs/ied.jpg";
// import eodImg from "../../assets/programs/eod.jpg";
// import eoreImg from "../../assets/programs/eore.jpg";
// import disasterImg from "../../assets/programs/disaster.jpg";
// import cashImg from "../../assets/programs/cash.jpg";

const programs = [
  {
    image: "",
    title: "Manual Demining",
    slug: "manual-demining",
    description:
      "Highly trained teams locate and clear landmines and explosive hazards safely to protect communities.",
  },

  {
    image: "",
    title: "Mechanical Demining",
    slug: "mechanical-demining",
    description:
      "Using specialized machinery to support safe and efficient large-scale land clearance operations.",
  },

  {
    image: "",
    title: "IED Response",
    slug: "ied-response",
    description:
      "Identifying and reducing threats from improvised explosive devices through professional operations.",
  },

  {
    image: "",
    title: "Explosive Ordnance Disposal",
    slug: "explosive-ordnance-disposal",
    description:
      "Safe identification, removal, and disposal of explosive remnants and hazardous materials.",
  },

  {
    image: "",
    title: "Explosive Ordnance Risk Education",
    slug: "risk-education",
    description:
      "Educating communities about explosive hazards and promoting safer behaviors.",
  },

  {
    image: "",
    title: "Natural Disaster Management Support",
    slug: "disaster-management",
    description:
      "Supporting communities during emergencies and providing humanitarian assistance.",
  },

  {
    image: "",
    title: "Cash for Work",
    slug: "cash-for-work",
    description:
      "Supporting vulnerable communities through temporary employment opportunities and humanitarian assistance.",
  },
];

export default function Programs() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      className="
        bg-gray-50
        py-24
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-6
        "
      >
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
            mb-14
            max-w-3xl
            text-center
          "
        >
          <p
            className="
              mb-3
              text-sm
              font-bold
              uppercase
              tracking-[3px]
              text-[#087B5A]
            "
          >
            Our Programs
          </p>

          <h2
            className="
              text-3xl
              font-bold
              leading-tight
              text-[#0F172A]
              lg:text-5xl
            "
          >
            Removing Explosive Hazards,
            <span
              className="
                block
                text-[#087B5A]
              "
            >
              Protecting Communities
            </span>
          </h2>

          <p
            className="
              mt-5
              text-gray-600
              lg:text-lg
            "
          >
            DAFA provides professional humanitarian services to reduce explosive
            risks and create safer environments across Afghanistan.
          </p>
        </motion.div>

        {/* Cards */}

        <div
          className="
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {(showMore ? programs : programs.slice(0, 3)).map(
            (program, index) => (
              <motion.div
                key={program.title}
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
                  delay: index * 0.1,
                }}
                viewport={{
                  once: true,
                }}
                className="
                group
                overflow-hidden
                rounded-2xl
                bg-white
                shadow-sm
                transition
                duration-300
                hover:-translate-y-3
                hover:shadow-xl
              "
              >
                {/* Image Placeholder */}

                <div
                  className="
                  h-56
                  w-full
                  bg-gray-200
                "
                >
                  {program.image && (
                    <img
                      src={program.image}
                      alt={program.title}
                      className="
                      h-full
                      w-full
                      object-cover
                      transition
                      duration-700
                      group-hover:scale-110
                    "
                    />
                  )}
                </div>

                {/* Content */}

                <div
                  className="
                  p-7
                "
                >
                  <h3
                    className="
                    text-xl
                    font-bold
                    text-[#0F172A]
                  "
                  >
                    {program.title}
                  </h3>

                  <p
                    className="
                    mt-4
                    text-sm
                    leading-relaxed
                    text-gray-600
                  "
                  >
                    {program.description}
                  </p>

                  <Link
                    to={`/what-we-do/${program.slug}`}
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
                    Learn More
                    <FaArrowRight />
                  </Link>
                </div>
              </motion.div>
            ),
          )}
        </div>

        {/* See More Button */}

        <div
          className="
            mt-12
            text-center
          "
        >
          <button
            onClick={() => setShowMore(!showMore)}
            className="
              inline-flex
              items-center
              gap-2
              rounded-lg
              bg-[#087B5A]
              px-8
              py-3.5
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-[#065c43]
              hover:shadow-lg
            "
          >
            {showMore ? "Show Less Programs" : "See More Programs"}

            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
