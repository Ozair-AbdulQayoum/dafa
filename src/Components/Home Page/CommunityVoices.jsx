import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  FaQuoteLeft,
  FaMapMarkerAlt,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

import { communityVoicesData } from "../../Components/Data File/Main Page Data/CommunityVoicesData";

export default function CommunityVoices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const total = communityVoicesData.length;

  const getIndex = (index) => (index + total) % total;

  const previousIndex = getIndex(activeIndex - 1);
  const nextIndex = getIndex(activeIndex + 1);

  const activeItem = communityVoicesData[activeIndex];
  const previousItem = communityVoicesData[previousIndex];
  const nextItem = communityVoicesData[nextIndex];

  const goPrevious = () => {
    setActiveIndex((current) => getIndex(current - 1));
  };

  const goNext = () => {
    setActiveIndex((current) => getIndex(current + 1));
  };

  const cardShadow =
    "[8px_8px_20px_rgba(15,23,42,0.10),-8px_-8px_20px_rgba(255,255,255,0.95)]";

  const smallCardShadow =
    "[6px_6px_16px_rgba(15,23,42,0.08),-6px_-6px_16px_rgba(255,255,255,0.9)]";

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-[#EAF5EF]
        via-[#F4FAF7]
        to-[#EAF4F8]
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* =========================================================
          SOFT BACKGROUND LIGHT
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            -left-40
            -top-40
            h-[480px]
            w-[480px]
            rounded-full
            bg-[#087B5A]/[0.08]
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            -right-40
            top-1/3
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#0284C7]/[0.06]
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            -bottom-40
            left-1/2
            h-[450px]
            w-[450px]
            -translate-x-1/2
            rounded-full
            bg-[#F97316]/[0.05]
            blur-[120px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =========================================================
            HEADER
        ========================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F97316]" />

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#087B5A] sm:text-sm">
              Community Voices
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-[#F97316]" />
          </div>

          <h2
            className="
              text-3xl
              font-black
              leading-[1.1]
              tracking-tight
              text-[#0F172A]
              sm:text-4xl
              lg:text-5xl
            "
          >
            Stories From the
            <span className="block text-[#087B5A]">Communities We Serve</span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-slate-600
              sm:text-lg
            "
          >
            The impact of humanitarian mine action is measured not only in land
            cleared, but also in the lives made safer and communities given
            renewed confidence.
          </p>
        </motion.div>

        {/* =========================================================
            TESTIMONIAL AREA
        ========================================================= */}

        <div className="relative mx-auto mt-14 max-w-6xl sm:mt-16">
          {/* =======================================================
              LEFT CARD
          ======================================================== */}

          <motion.div
            key={`previous-${previousItem.id}`}
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -20,
                  }
            }
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            className={`
              absolute
              left-0
              top-1/2
              hidden
              w-[270px]
              -translate-x-8
              -translate-y-1/2
              rounded-[2rem]
              border
              border-white
              bg-[#EDF6F1]
              p-6
              shadow-${smallCardShadow}
              lg:block
              xl:w-[290px]
            `}
            style={{
              boxShadow:
                "8px 8px 20px rgba(15,23,42,0.09), -8px -8px 20px rgba(255,255,255,0.95)",
            }}
          >
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-[#EDF6F1]
                text-[#087B5A]
              "
              style={{
                boxShadow:
                  "5px 5px 12px rgba(15,23,42,0.08), -5px -5px 12px rgba(255,255,255,0.9)",
              }}
            >
              <FaQuoteLeft size={14} />
            </div>

            <p className="mt-5 line-clamp-4 text-sm leading-6 text-slate-500">
              “{previousItem.quote}”
            </p>

            <div className="mt-6 border-t border-slate-200/70 pt-5">
              <p className="text-sm font-bold text-slate-700">
                {previousItem.name}
              </p>

              <div className="mt-2 flex items-center gap-2 text-xs text-slate-400">
                <FaMapMarkerAlt size={9} className="text-[#087B5A]" />

                <span>{previousItem.location}</span>
              </div>
            </div>
          </motion.div>

          {/* =======================================================
              RIGHT CARD
          ======================================================== */}

          <motion.div
            key={`next-${nextItem.id}`}
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 20,
                  }
            }
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            className="
              absolute
              right-0
              top-1/2
              hidden
              w-[270px]
              translate-x-8
              -translate-y-1/2
              rounded-[2rem]
              border
              border-white
              bg-[#EDF6F1]
              p-6
              lg:block
              xl:w-[290px]
            "
            style={{
              boxShadow:
                "8px 8px 20px rgba(15,23,42,0.09), -8px -8px 20px rgba(255,255,255,0.95)",
            }}
          >
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-[#EDF6F1]
                text-[#F97316]
              "
              style={{
                boxShadow:
                  "5px 5px 12px rgba(15,23,42,0.08), -5px -5px 12px rgba(255,255,255,0.9)",
              }}
            >
              <FaQuoteLeft size={14} />
            </div>

            <p className="mt-5 line-clamp-4 text-sm leading-6 text-slate-500">
              “{nextItem.quote}”
            </p>

            <div className="mt-6 border-t border-slate-200/70 pt-5">
              <p className="text-sm font-bold text-slate-700">
                {nextItem.name}
              </p>

              <div className="mt-2 flex items-center gap-2 text-xs text-slate-400">
                <FaMapMarkerAlt size={9} className="text-[#F97316]" />

                <span>{nextItem.location}</span>
              </div>
            </div>
          </motion.div>

          {/* =======================================================
              MAIN NEUMORPHIC CARD
          ======================================================== */}

          <div className="relative mx-auto max-w-3xl lg:max-w-2xl xl:max-w-3xl">
            {/* Back shadow layer */}

            <div
              className="
                absolute
                inset-x-6
                top-4
                bottom-[-14px]
                rounded-[2.7rem]
                bg-[#E5F0EA]
              "
              style={{
                boxShadow:
                  "8px 8px 18px rgba(15,23,42,0.07), -8px -8px 18px rgba(255,255,255,0.85)",
              }}
            />

            <AnimatePresence mode="wait">
              <motion.article
                key={activeItem.id}
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        scale: 0.97,
                        y: 12,
                      }
                }
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={
                  shouldReduceMotion
                    ? undefined
                    : {
                        opacity: 0,
                        scale: 0.97,
                        y: -12,
                      }
                }
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  relative
                  z-10
                  overflow-hidden
                  rounded-[2.7rem]
                  border
                  border-white
                  bg-[#EDF6F1]
                  px-7
                  py-9
                  sm:px-10
                  sm:py-11
                  lg:px-12
                  lg:py-12
                "
                style={{
                  boxShadow:
                    "12px 14px 32px rgba(15,23,42,0.11), -12px -12px 32px rgba(255,255,255,0.98)",
                }}
              >
                {/* =================================================
                    TOP ACCENT
                ================================================== */}

                <div
                  className="
                    absolute
                    left-12
                    right-12
                    top-0
                    h-1.5
                    rounded-b-full
                    bg-gradient-to-r
                    from-[#087B5A]
                    via-[#0284C7]
                    to-[#F97316]
                  "
                />

                {/* =================================================
                    LARGE QUOTE
                ================================================== */}

                <div
                  className="
                    absolute
                    right-7
                    top-6
                    text-[100px]
                    font-black
                    leading-none
                    text-[#087B5A]/[0.055]
                    sm:right-10
                    sm:top-8
                    sm:text-[120px]
                  "
                >
                  ”
                </div>

                {/* =================================================
                    QUOTE ICON
                ================================================== */}

                <div
                  className="
                    relative
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-[1.3rem]
                    bg-[#EDF6F1]
                    text-[#087B5A]
                  "
                  style={{
                    boxShadow:
                      "6px 6px 14px rgba(15,23,42,0.09), -6px -6px 14px rgba(255,255,255,0.95)",
                  }}
                >
                  <FaQuoteLeft size={20} />
                </div>

                {/* =================================================
                    QUOTE TEXT
                ================================================== */}

                <blockquote className="relative mt-8">
                  <p
                    className="
                      text-lg
                      font-medium
                      leading-8
                      tracking-tight
                      text-[#334155]
                      sm:text-xl
                      sm:leading-9
                      lg:text-[21px]
                    "
                  >
                    “{activeItem.quote}”
                  </p>
                </blockquote>

                {/* =================================================
                    DIVIDER
                ================================================== */}

                <div className="my-8 h-px bg-slate-200/80" />

                {/* =================================================
                    AUTHOR
                ================================================== */}

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-extrabold text-[#0F172A] sm:text-lg">
                      {activeItem.name}
                    </h3>

                    <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                      <FaMapMarkerAlt size={11} className="text-[#087B5A]" />

                      <span>{activeItem.location}</span>
                    </div>
                  </div>

                  <div
                    className="
                      hidden
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#EDF6F1]
                      text-sm
                      font-black
                      text-[#087B5A]
                      sm:flex
                    "
                    style={{
                      boxShadow:
                        "5px 5px 12px rgba(15,23,42,0.08), -5px -5px 12px rgba(255,255,255,0.9)",
                    }}
                  >
                    {String(activeIndex + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* Bottom accent */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-12
                    h-1
                    w-20
                    rounded-t-full
                    bg-[#F97316]
                  "
                />
              </motion.article>
            </AnimatePresence>
          </div>

          {/* =======================================================
              CONTROLS
          ======================================================== */}

          <div className="relative z-20 mt-9 flex items-center justify-center gap-5">
            {/* Previous */}

            <button
              type="button"
              onClick={goPrevious}
              aria-label="Previous testimonial"
              className="
                group
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                border
                border-white
                bg-[#EDF6F1]
                text-[#087B5A]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:text-[#065D45]
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#087B5A]/30
              "
              style={{
                boxShadow:
                  "6px 7px 15px rgba(15,23,42,0.09), -6px -6px 15px rgba(255,255,255,0.95)",
              }}
            >
              <FaArrowLeft
                size={14}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
            </button>

            {/* Dots */}

            <div
              className="
                flex
                items-center
                gap-2
                rounded-2xl
                border
                border-white
                bg-[#EDF6F1]
                px-4
                py-3
              "
              style={{
                boxShadow:
                  "5px 5px 12px rgba(15,23,42,0.07), -5px -5px 12px rgba(255,255,255,0.9)",
              }}
            >
              {communityVoicesData.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                  className={`
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      index === activeIndex
                        ? "h-2.5 w-7 bg-[#087B5A]"
                        : "h-2.5 w-2.5 bg-[#087B5A]/20 hover:bg-[#087B5A]/40"
                    }
                  `}
                />
              ))}
            </div>

            {/* Next */}

            <button
              type="button"
              onClick={goNext}
              aria-label="Next testimonial"
              className="
                group
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                border
                border-[#087B5A]/10
                bg-[#087B5A]
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#065D45]
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#087B5A]/30
              "
              style={{
                boxShadow:
                  "6px 7px 15px rgba(8,123,90,0.20), -4px -4px 10px rgba(255,255,255,0.8)",
              }}
            >
              <FaArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>

        {/* =========================================================
            MOBILE PREVIEW CARDS
        ========================================================= */}

        <div className="mt-8 grid grid-cols-2 gap-4 lg:hidden">
          <button
            type="button"
            onClick={goPrevious}
            className="
              rounded-2xl
              border
              border-white
              bg-[#EDF6F1]
              p-4
              text-left
              transition-all
              duration-300
              hover:-translate-y-1
            "
            style={{
              boxShadow:
                "6px 6px 15px rgba(15,23,42,0.08), -6px -6px 15px rgba(255,255,255,0.9)",
            }}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#087B5A]">
              Previous
            </span>

            <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500">
              {previousItem.quote}
            </p>
          </button>

          <button
            type="button"
            onClick={goNext}
            className="
              rounded-2xl
              border
              border-white
              bg-[#EDF6F1]
              p-4
              text-left
              transition-all
              duration-300
              hover:-translate-y-1
            "
            style={{
              boxShadow:
                "6px 6px 15px rgba(15,23,42,0.08), -6px -6px 15px rgba(255,255,255,0.9)",
            }}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#F97316]">
              Next
            </span>

            <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500">
              {nextItem.quote}
            </p>
          </button>
        </div>

        {/* =========================================================
            SAFEGUARDING NOTE
        ========================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="mx-auto mt-10 max-w-3xl text-center"
        >
          <p className="text-xs leading-6 text-slate-400">
            Community stories are published with appropriate consent and in
            accordance with DAFA's communication and safeguarding policies.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
