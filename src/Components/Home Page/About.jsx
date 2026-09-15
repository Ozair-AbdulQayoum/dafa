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
        py-10
        sm:py-12
        lg:py-14
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
          xl:px-12
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
            mb-7
            flex
            items-center
            justify-center
            gap-3
            sm:mb-8
            lg:mb-9
          "
        >
          <span
            aria-hidden="true"
            className="
              h-[2px]
              w-8
              rounded-full
              bg-[#F97316]
              sm:w-11
            "
          />

          <span
            className="
              text-[10px]
              font-extrabold
              uppercase
              tracking-[0.2em]
              text-[#0B3D2E]
              sm:text-xs
              sm:tracking-[0.22em]
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
              sm:w-11
            "
          />
        </motion.div>

        {/* Main Content */}

        <div
          className="
            grid
            items-center
            gap-9
            lg:grid-cols-2
            lg:gap-14
            xl:gap-18
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
            className="order-1 relative w-full"
          >
            <div
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-[#0B3D2E]/10
                bg-[#0B3D2E]
                shadow-[0_18px_45px_rgba(15,23,42,0.10)]
                sm:rounded-3xl
              "
            >
              <img
                src={aboutData.image.src}
                alt={aboutData.image.alt}
                loading="lazy"
                decoding="async"
                className="
                  h-[285px]
                  w-full
                  object-cover
                  object-center
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-[1.025]

                  sm:h-[350px]
                  md:h-[400px]
                  lg:h-[440px]
                  xl:h-[465px]
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
                  from-[#031F18]/55
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
                  bg-[#031F18]/85
                  px-3.5
                  py-2.5
                  backdrop-blur-sm

                  sm:bottom-5
                  sm:left-5
                  sm:px-4
                  sm:py-3
                "
              >
                <p
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-white/95

                    sm:text-[10px]
                  "
                >
                  {aboutData.image.label}
                </p>
              </div>

              {/* Subtle Image Accent */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  left-0
                  top-0
                  h-1
                  w-20
                  bg-[#F97316]
                  sm:w-24
                "
              />
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
            className="order-2 w-full"
          >
            {/* Heading */}

            <h2
              id="about-section-title"
              className="
                max-w-2xl
                text-[1.95rem]
                font-extrabold
                leading-[1.08]
                tracking-[-0.04em]
                text-[#0F172A]

                sm:text-4xl
                md:text-[2.5rem]
                lg:text-[2.75rem]
                xl:text-[3rem]
              "
            >
              {aboutData.title}
            </h2>

            {/* Description */}

            <p
              className="
                mt-5
                max-w-xl
                text-[14px]
                leading-6
                text-slate-600

                sm:mt-6
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
                mt-7
                grid
                gap-3

                sm:mt-8
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
                      shadow-[0_3px_12px_rgba(15,23,42,0.025)]
                      transition-all
                      duration-300

                      hover:-translate-y-1
                      hover:border-[#0B3D2E]/20
                      hover:shadow-[0_10px_24px_rgba(15,23,42,0.07)]
                    "
                  >
                    {/* Icon */}

                    <div
                      className="
                        mb-3
                        flex
                        h-9
                        w-9
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
                      {Icon ? <Icon size={14} aria-hidden="true" /> : null}
                    </div>

                    {/* Title */}

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

                    {/* Description */}

                    <p
                      className="
                        mt-1
                        text-[11px]
                        leading-5
                        text-slate-500

                        sm:text-[12px]
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
              className="mt-7 sm:mt-8"
            >
              <Link
                to={aboutData.button.path}
                className="
                  group
                  inline-flex
                  min-h-[50px]
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
                  hover:shadow-[0_12px_28px_rgba(11,61,46,0.18)]

                  active:translate-y-0

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
