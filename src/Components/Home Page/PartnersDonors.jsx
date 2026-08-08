import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const partnerGroups = [
  {
    title: "DONORS",
    color: "text-[#087B5A]",
    logos: ["Donor Organization", "Humanitarian Fund", "Development Partner"],
  },

  {
    title: "UN AGENCIES",
    color: "text-blue-600",
    logos: ["UN Agency", "UN Organization", "UN Partner"],
  },

  {
    title: "PARTNERS",
    color: "text-orange-500",
    logos: ["Partner Organization", "Government Partner", "Local Partner"],
  },
];

export default function PartnersDonors() {
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
            Collaboration
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
            Our Donors & Partners
          </h2>

          <p
            className="
              mt-5
              text-gray-600
              lg:text-lg
            "
          >
            Working Together For A Safer Afghanistan
          </p>
        </motion.div>

        {/* Three Separate Columns */}

        <div
          className="
            grid
            gap-8
            lg:grid-cols-3
          "
        >
          {partnerGroups.map((group, index) => (
            <motion.div
              key={group.title}
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
                delay: index * 0.2,
              }}
              viewport={{
                once: true,
              }}
              className="
                overflow-hidden
                rounded-3xl
                bg-white
                p-6
                shadow-sm
              "
            >
              {/* Title */}

              <h3
                className={`
                  mb-6
                  text-center
                  text-xl
                  font-bold
                  ${group.color}
                `}
              >
                {group.title}
              </h3>

              {/* Horizontal Logo Row Animation */}

              <div
                className="
                  overflow-hidden
                "
              >
                <motion.div
                  className="
                    flex
                    gap-5
                    w-max
                  "
                  animate={{
                    x: ["0%", "-40%"],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {[...group.logos, ...group.logos].map((logo, index) => (
                    <motion.div
                      key={index}
                      whileHover={{
                        scale: 1.05,
                        y: -8,
                      }}
                      className="
                        w-44
                        shrink-0
                        rounded-2xl
                        border
                        border-gray-100
                        bg-white
                        p-4
                        shadow-sm
                      "
                    >
                      <div
                        className="
                          flex
                          h-24
                          items-center
                          justify-center
                          rounded-xl
                          bg-gray-50
                        "
                      >
                        <span
                          className="
                            text-gray-400
                          "
                        >
                          LOGO
                        </span>
                      </div>

                      <p
                        className="
                          mt-3
                          text-center
                          text-xs
                          font-semibold
                          text-gray-700
                        "
                      >
                        {logo}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}

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
            mt-16
            text-center
          "
        >
          <h3
            className="
              text-2xl
              font-bold
              text-[#0F172A]
            "
          >
            Trusted Collaboration
          </h3>

          <p
            className="
              mt-3
              text-gray-600
            "
          >
            Building safer communities together
          </p>

          <Link
            to="/donors"
            className="
              mt-8
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
            See More
            <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
