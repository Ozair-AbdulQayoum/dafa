import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";

// Replace images when DAFA project images are available
// import project1 from "../../assets/projects/project1.jpg";
// import project2 from "../../assets/projects/project2.jpg";
// import project3 from "../../assets/projects/project3.jpg";

const projects = [
  {
    image: "",
    location: "Kabul Province",
    title: "Mine Clearance Project",
    description:
      "Clearing contaminated land and removing explosive hazards to create safer communities.",
    status: "Completed",
  },

  {
    image: "",
    location: "Kandahar Province",
    title: "Humanitarian Demining Operations",
    description:
      "Professional demining activities supporting communities affected by explosive hazards.",
    status: "Ongoing",
  },

  {
    image: "",
    location: "Nangarhar Province",
    title: "Explosive Risk Education",
    description:
      "Community awareness programs helping people understand and avoid explosive risks.",
    status: "Active",
  },
];

export default function Projects() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
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
          className="mx-auto mb-14 max-w-3xl text-center"
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
            Featured Projects
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
            Making Afghanistan Safer
            <span className="block text-[#087B5A]">
              Through Humanitarian Action
            </span>
          </h2>

          <p
            className="
              mt-5
              text-gray-600
              lg:text-lg
            "
          >
            DAFA implements humanitarian demining projects across Afghanistan to
            remove explosive hazards and protect communities.
          </p>
        </motion.div>

        {/* Project Cards */}

        <div
          className="
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
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
              {/* Image */}

              <div
                className="
                  relative
                  h-60
                  overflow-hidden
                  bg-gray-200
                "
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition
                      duration-700
                      group-hover:scale-110
                    "
                  />
                ) : (
                  <div
                    className="
                      flex
                      h-full
                      items-center
                      justify-center
                      text-sm
                      font-medium
                      text-gray-400
                    "
                  >
                    Project Image
                  </div>
                )}

                {/* Location */}

                <div
                  className="
                    absolute
                    left-4
                    top-4
                    flex
                    items-center
                    gap-2
                    rounded-full
                    bg-white
                    px-4
                    py-2
                    text-xs
                    font-semibold
                    text-[#087B5A]
                    shadow
                  "
                >
                  <FaMapMarkerAlt />

                  {project.location}
                </div>

                {/* Status */}

                <div
                  className={`
                    absolute
                    right-4
                    top-4
                    rounded-full
                    px-4
                    py-2
                    text-xs
                    font-semibold

                    ${
                      project.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : project.status === "Ongoing"
                          ? "bg-orange-100 text-orange-700"
                          : "bg-blue-100 text-blue-700"
                    }

                  `}
                >
                  {project.status}
                </div>
              </div>

              {/* Content */}

              <div className="p-7">
                <h3
                  className="
                    text-xl
                    font-bold
                    text-[#0F172A]
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    mt-4
                    text-sm
                    leading-relaxed
                    text-gray-600
                  "
                >
                  {project.description}
                </p>

                <Link
                  to="/projects"
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
          ))}
        </div>

        {/* Button */}

        <div className="mt-12 text-center">
          <Link
            to="/projects"
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
            View All Projects
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
