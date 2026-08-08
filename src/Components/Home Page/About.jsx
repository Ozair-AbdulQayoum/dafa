import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaShieldAlt, FaBullseye, FaHandshake } from "react-icons/fa";

import aboutImg from "../../assets/img2.png";

const values = [
  {
    icon: FaShieldAlt,
    title: "Our Mission",
    text: "Protecting lives and communities through professional humanitarian demining operations.",
  },

  {
    icon: FaBullseye,
    title: "Our Vision",
    text: "A safer Afghanistan free from the threat of explosive hazards.",
  },

  {
    icon: FaHandshake,
    title: "Our Commitment",
    text: "Delivering transparent, safe, and community-focused humanitarian services.",
  },
];

export default function About() {
  return (
    <section
      className="
        bg-white
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
        <div
          className="
            grid
            items-center
            gap-14
            lg:grid-cols-2
          "
        >
          {/* Image Side */}

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
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
            className="
              relative
            "
          >
            <div
              className="
                overflow-hidden
                rounded-3xl
                shadow-xl
              "
            >
              <img
                src={aboutImg}
                alt="DAFA humanitarian operation"
                className="
                  h-[520px]
                  w-full
                  object-cover
                  transition
                  duration-500
                  hover:scale-105
                "
              />
            </div>

            {/* Experience Card */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="
                absolute
                bottom-8
                right-8
                rounded-2xl
                bg-white
                px-7
                py-5
                shadow-xl
              "
            >
              <h3
                className="
                  text-4xl
                  font-bold
                  text-[#087B5A]
                "
              >
                36+
              </h3>

              <p
                className="
                  text-sm
                  font-medium
                  text-gray-600
                "
              >
                Years Experience
              </p>
            </motion.div>
          </motion.div>

          {/* Content Side */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
          >
            <p
              className="
                mb-3
                text-sm
                font-semibold
                uppercase
                tracking-[3px]
                text-[#087B5A]
              "
            >
              About DAFA
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
              Protecting Communities,
              <span
                className="
                  block
                  text-[#087B5A]
                "
              >
                Creating a Safer Afghanistan
              </span>
            </h2>

            <p
              className="
                mt-6
                text-base
                leading-relaxed
                text-gray-600
                lg:text-lg
              "
            >
              Demining Agency for Afghanistan (DAFA) is a national humanitarian
              organization dedicated to removing explosive hazards, reducing
              risks, and supporting safer communities across Afghanistan.
            </p>

            {/* Values */}

            <div
              className="
                mt-8
                space-y-4
              "
            >
              {values.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="
                      flex
                      gap-4
                      rounded-xl
                      bg-gray-50
                      p-4
                    "
                  >
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-green-100
                        text-[#087B5A]
                      "
                    >
                      <Icon />
                    </div>

                    <div>
                      <h4
                        className="
                          font-semibold
                          text-gray-800
                        "
                      >
                        {item.title}
                      </h4>

                      <p
                        className="
                          mt-1
                          text-sm
                          text-gray-600
                        "
                      >
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Buttons */}

            <div
              className="
                mt-8
                flex
                gap-4
              "
            >
              <Link
                to="/about"
                className="
                  rounded-lg
                  bg-[#087B5A]
                  px-7
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition
                  hover:bg-[#065c43]
                "
              >
                Learn More About DAFA
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
