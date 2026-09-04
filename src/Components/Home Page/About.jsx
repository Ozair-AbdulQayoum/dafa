import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaHandsHelping,
  FaUsers,
  FaMapMarkedAlt,
} from "react-icons/fa";

import { aboutData } from "../../Components/Data File/Main Page Data/AboutData";

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  const highlightIcons = {
    mission: FaHandsHelping,
    team: FaUsers,
    operations: FaMapMarkedAlt,
  };

  return (
    <section
      aria-labelledby="about-section-title"
      className="
        relative
        overflow-hidden
        bg-[#F7FBF8]
        py-8
        sm:py-10
        lg:py-12
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-5
          sm:px-8
          lg:px-10
        "
      >
        {/* Section Label */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.45,
          }}
          className="
            -mt-5
            mb-6
            flex
            items-center
            justify-center
            gap-3
            sm:-mt-7
            sm:mb-7
            lg:-mt-10
            lg:mb-8
          "
        >
          <span
            aria-hidden="true"
            className="
              h-[2px]
              w-8
              rounded-full
              bg-[#F97316]
              sm:w-10
            "
          />

          <span
            className="
              text-[11px]
              font-extrabold
              uppercase
              tracking-[0.18em]
              text-[#0B3D2E]
              sm:text-sm
              sm:tracking-[0.2em]
            "
          >
            {aboutData.label}
          </span>

          <span
            aria-hidden="true"
            className="
              h-[2px]
              w-8
              rounded-full
              bg-[#F97316]
              sm:w-10
            "
          />
        </motion.div>

        {/* Main Content */}
        <div
          className="
            grid
            items-center
            gap-8
            lg:grid-cols-[0.98fr_1.02fr]
            lg:gap-12
            xl:gap-16
          "
        >
          {/* Image */}
          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -20 }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              order-1
              relative
              w-full
            "
          >
            <div
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                bg-[#0B3D2E]
                shadow-[0_18px_45px_rgba(15,23,42,0.11)]
                sm:rounded-3xl
              "
            >
              <img
                src={aboutData.image.src}
                alt={aboutData.image.alt}
                loading="lazy"
                decoding="async"
                className="
                  h-[280px]
                  w-full
                  object-cover
                  object-center
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-[1.02]
                  sm:h-[350px]
                  md:h-[400px]
                  lg:h-[440px]
                  xl:h-[460px]
                "
              />

              {/* Image Overlay */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#0B3D2E]/40
                  via-transparent
                  to-transparent
                "
              />

              {/* Image Label */}
              <div
                className="
                  absolute
                  bottom-4
                  left-4
                  rounded-lg
                  border
                  border-white/20
                  bg-[#0B3D2E]/90
                  px-3
                  py-2
                  sm:bottom-5
                  sm:left-5
                  sm:px-4
                  sm:py-2.5
                "
              >
                <p
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-white
                    sm:text-[10px]
                  "
                >
                  {aboutData.image.label}
                </p>
              </div>
            </div>

            {/* Decorative Element */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -bottom-3
                -right-3
                -z-10
                h-16
                w-16
                rounded-2xl
                border
                border-[#F97316]/20
                bg-[#F97316]/5
                sm:-bottom-4
                sm:-right-4
                sm:h-20
                sm:w-20
              "
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 20 }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.65,
              delay: shouldReduceMotion ? 0 : 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              order-2
              lg:-mt-5
              xl:-mt-7
            "
          >
            {/* Heading */}
            <h2
              id="about-section-title"
              className="
                max-w-2xl
                text-[1.9rem]
                font-extrabold
                leading-[1.08]
                tracking-[-0.035em]
                text-[#0F172A]
                sm:text-4xl
                md:text-[2.5rem]
                lg:text-[2.7rem]
                xl:text-[3rem]
              "
            >
              {aboutData.title}
            </h2>

            {/* Description */}
            <p
              className="
                mt-4
                max-w-xl
                text-[14px]
                leading-6
                text-slate-600
                sm:mt-5
                sm:text-base
                sm:leading-7
                lg:text-[16px]
              "
            >
              {aboutData.description}
            </p>

            {/* Highlights */}
            <div
              className="
                mt-6
                grid
                gap-3
                sm:mt-7
                sm:grid-cols-3
              "
            >
              {aboutData.highlights.map((item, index) => {
                const Icon = highlightIcons[item.icon];

                return (
                  <motion.div
                    key={item.title}
                    initial={
                      shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }
                    }
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.3,
                    }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.4,
                      delay: shouldReduceMotion ? 0 : 0.1 + index * 0.07,
                    }}
                    className="
                      group
                      rounded-xl
                      border
                      border-[#0B3D2E]/10
                      bg-white
                      p-3.5
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:border-[#0B3D2E]/20
                      hover:shadow-[0_8px_22px_rgba(15,23,42,0.06)]
                    "
                  >
                    <div
                      className="
                        mb-2.5
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-lg
                        bg-[#0B3D2E]/[0.07]
                        text-[#0B3D2E]
                        transition-all
                        duration-300
                        group-hover:bg-[#0B3D2E]
                        group-hover:text-white
                      "
                    >
                      <Icon size={14} aria-hidden="true" />
                    </div>

                    <h3
                      className="
                        text-[12px]
                        font-bold
                        leading-5
                        text-[#0F172A]
                        sm:text-[13px]
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-1
                        text-[10px]
                        leading-4
                        text-slate-500
                        sm:text-[11px]
                        sm:leading-5
                      "
                    >
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <motion.div
              initial={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.45,
                delay: shouldReduceMotion ? 0 : 0.28,
              }}
              className="mt-6 sm:mt-7"
            >
              <Link
                to={aboutData.button.path}
                className="
                  group
                  inline-flex
                  min-h-[48px]
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-[#0B3D2E]
                  px-6
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_8px_22px_rgba(11,61,46,0.13)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#0A5A42]
                  hover:shadow-[0_12px_28px_rgba(11,61,46,0.17)]
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#F97316]
                  focus-visible:ring-offset-2
                  sm:w-auto
                "
              >
                <span>{aboutData.button.text}</span>

                <FaArrowRight
                  size={10}
                  aria-hidden="true"
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
