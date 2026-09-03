import React, { useEffect, useState } from "react";
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

  if (!total) return null;

  const getIndex = (index) => (index + total) % total;

  const previousIndex = getIndex(activeIndex - 1);
  const nextIndex = getIndex(activeIndex + 1);

  const activeItem = communityVoicesData[activeIndex];

  const previousItem = communityVoicesData[previousIndex];

  const nextItem = communityVoicesData[nextIndex];

  /* =========================================================
     MANUAL NAVIGATION
  ========================================================= */

  const goPrevious = () => {
    setActiveIndex((current) => getIndex(current - 1));
  };

  const goNext = () => {
    setActiveIndex((current) => getIndex(current + 1));
  };

  /* =========================================================
     AUTO SLIDER
     Changes every 5 seconds
  ========================================================= */

  useEffect(() => {
    if (shouldReduceMotion || total <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => getIndex(current + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [shouldReduceMotion, total]);

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-[#E8F5EF]
        via-[#F4FAF7]
        to-[#EAF4F8]
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* =====================================================
          AMBIENT BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Green Glow */}

        <div
          className="
            absolute
            -left-44
            -top-44
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#087B5A]/10
            blur-[130px]
          "
        />

        {/* Blue Glow */}

        <div
          className="
            absolute
            -right-44
            top-[25%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#0284C7]/8
            blur-[130px]
          "
        />

        {/* Orange Glow */}

        <div
          className="
            absolute
            -bottom-52
            left-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-[#F97316]/6
            blur-[130px]
          "
        />

        {/* Center Light */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[300px]
            w-[600px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-white/30
            blur-[100px]
          "
        />
      </div>

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-5
          sm:px-8
          lg:px-10
        "
      >
        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 25,
                }
          }
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
          className="
            mx-auto
            max-w-3xl
            text-center
          "
        >
          <div
            className="
              mb-5
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#F97316]
                shadow-[0_0_10px_rgba(249,115,22,0.35)]
              "
            />

            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#087B5A]
                sm:text-sm
              "
            >
              Community Voices
            </span>

            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#F97316]
                shadow-[0_0_10px_rgba(249,115,22,0.35)]
              "
            />
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
            <span
              className="
                block
                text-[#087B5A]
              "
            >
              Communities We Serve
            </span>
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

        {/* =====================================================
            TESTIMONIAL AREA
        ===================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-14
            max-w-6xl
            sm:mt-16
          "
        >
          {/* ===================================================
              LEFT GLASS PREVIEW
          =================================================== */}

          <motion.div
            key={`previous-${previousItem.id}`}
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -25,
                  }
            }
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.45,
            }}
            className="
              absolute
              left-0
              top-1/2
              hidden
              w-[270px]
              -translate-x-10
              -translate-y-1/2
              overflow-hidden
              rounded-[28px]
              bg-[#0B3D2E]/10
              p-6
              backdrop-blur-2xl
              lg:block
              xl:w-[285px]
            "
            style={{
              boxShadow: "0 25px 55px rgba(11,61,46,0.12)",
            }}
          >
            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                top-0
                h-24
                bg-gradient-to-b
                from-white/20
                to-transparent
              "
            />

            <div
              className="
                relative
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-2xl
                bg-[#087B5A]/15
                text-[#087B5A]
                backdrop-blur-md
              "
            >
              <FaQuoteLeft size={13} />
            </div>

            <p
              className="
                relative
                mt-5
                line-clamp-4
                text-sm
                leading-6
                text-slate-600
              "
            >
              “{previousItem.quote}”
            </p>

            <div
              className="
                mt-6
                border-t
                border-[#087B5A]/10
                pt-5
              "
            >
              <p
                className="
                  text-sm
                  font-bold
                  text-[#0F172A]
                "
              >
                {previousItem.name}
              </p>

              <div
                className="
                  mt-2
                  flex
                  items-center
                  gap-2
                  text-xs
                  text-slate-400
                "
              >
                <FaMapMarkerAlt size={9} className="text-[#087B5A]" />

                <span>{previousItem.location}</span>
              </div>
            </div>
          </motion.div>

          {/* ===================================================
              RIGHT GLASS PREVIEW
          =================================================== */}

          <motion.div
            key={`next-${nextItem.id}`}
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 25,
                  }
            }
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.45,
            }}
            className="
              absolute
              right-0
              top-1/2
              hidden
              w-[270px]
              translate-x-10
              -translate-y-1/2
              overflow-hidden
              rounded-[28px]
              bg-[#0B3D2E]/10
              p-6
              backdrop-blur-2xl
              lg:block
              xl:w-[285px]
            "
            style={{
              boxShadow: "0 25px 55px rgba(11,61,46,0.12)",
            }}
          >
            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                top-0
                h-24
                bg-gradient-to-b
                from-white/20
                to-transparent
              "
            />

            <div
              className="
                relative
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-2xl
                bg-[#F97316]/10
                text-[#F97316]
                backdrop-blur-md
              "
            >
              <FaQuoteLeft size={13} />
            </div>

            <p
              className="
                relative
                mt-5
                line-clamp-4
                text-sm
                leading-6
                text-slate-600
              "
            >
              “{nextItem.quote}”
            </p>

            <div
              className="
                mt-6
                border-t
                border-[#F97316]/10
                pt-5
              "
            >
              <p
                className="
                  text-sm
                  font-bold
                  text-[#0F172A]
                "
              >
                {nextItem.name}
              </p>

              <div
                className="
                  mt-2
                  flex
                  items-center
                  gap-2
                  text-xs
                  text-slate-400
                "
              >
                <FaMapMarkerAlt size={9} className="text-[#F97316]" />

                <span>{nextItem.location}</span>
              </div>
            </div>
          </motion.div>

          {/* ===================================================
              MAIN GLASS CARD
          =================================================== */}

          <div
            className="
              relative
              mx-auto
              max-w-3xl
              lg:max-w-2xl
              xl:max-w-3xl
            "
          >
            {/* Glow */}

            <div
              className="
                pointer-events-none
                absolute
                -inset-4
                rounded-[38px]
                bg-gradient-to-r
                from-[#087B5A]/10
                via-[#0284C7]/5
                to-[#F97316]/10
                blur-2xl
              "
            />

            <AnimatePresence mode="wait">
              <motion.article
                key={activeItem.id}
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 18,
                        scale: 0.985,
                      }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={
                  shouldReduceMotion
                    ? undefined
                    : {
                        opacity: 0,
                        y: -18,
                        scale: 0.985,
                      }
                }
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  relative
                  z-10
                  overflow-hidden
                  rounded-[32px]
                  bg-[#0B3D2E]/10
                  p-[1px]
                  backdrop-blur-2xl
                "
                style={{
                  boxShadow: "0 30px 80px rgba(11,61,46,0.16)",
                }}
              >
                {/* Inner Glass */}

                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[31px]
                    bg-[#F7FBF9]/60
                    px-7
                    py-9
                    backdrop-blur-3xl
                    sm:px-10
                    sm:py-11
                    lg:px-12
                    lg:py-12
                  "
                >
                  {/* Glass Highlight */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-x-0
                      top-0
                      h-40
                      bg-gradient-to-b
                      from-white/45
                      via-white/10
                      to-transparent
                    "
                  />

                  {/* Top Accent */}

                  <div
                    className="
                      absolute
                      left-10
                      right-10
                      top-0
                      h-[3px]
                      rounded-b-full
                      bg-gradient-to-r
                      from-[#087B5A]
                      via-[#0284C7]
                      to-[#F97316]
                    "
                  />

                  {/* Background Quote */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-2
                      top-3
                      text-[150px]
                      font-black
                      leading-none
                      text-[#087B5A]/[0.045]
                      sm:text-[180px]
                    "
                  >
                    ”
                  </div>

                  {/* Quote Icon */}

                  <div className="relative">
                    <div
                      className="
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-[20px]
                        bg-[#087B5A]/10
                        text-[#087B5A]
                        shadow-[0_10px_30px_rgba(8,123,90,0.10)]
                      "
                    >
                      <FaQuoteLeft size={20} />
                    </div>
                  </div>

                  {/* Quote Text */}

                  <blockquote className="relative mt-8">
                    <p
                      className="
                        max-w-2xl
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

                  {/* Divider */}

                  <div
                    className="
                      my-8
                      h-px
                      bg-gradient-to-r
                      from-[#087B5A]/20
                      via-slate-200/70
                      to-transparent
                    "
                  />

                  {/* Author */}

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-4
                    "
                  >
                    <div>
                      <p
                        className="
                          text-base
                          font-extrabold
                          tracking-tight
                          text-[#0F172A]
                          sm:text-lg
                        "
                      >
                        {activeItem.name}
                      </p>

                      <div
                        className="
                          mt-2
                          flex
                          items-center
                          gap-2
                          text-sm
                          text-slate-500
                        "
                      >
                        <FaMapMarkerAlt size={11} className="text-[#087B5A]" />

                        <span>{activeItem.location}</span>
                      </div>
                    </div>

                    {/* Counter */}

                    <div
                      className="
                        hidden
                        h-12
                        min-w-12
                        items-center
                        justify-center
                        rounded-2xl
                        bg-[#087B5A]/10
                        px-3
                        text-sm
                        font-black
                        text-[#087B5A]
                        sm:flex
                      "
                    >
                      {String(activeIndex + 1).padStart(2, "0")}

                      <span className="mx-1 text-[#087B5A]/30">/</span>

                      {String(total).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Bottom Accent */}

                  <div
                    className="
                      absolute
                      bottom-0
                      left-10
                      h-[3px]
                      w-20
                      rounded-t-full
                      bg-[#F97316]
                    "
                  />
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          {/* ===================================================
              CONTROLS
          =================================================== */}

          <div
            className="
              relative
              z-20
              mt-9
              flex
              items-center
              justify-center
              gap-4
            "
          >
            {/* Previous */}

            <button
              type="button"
              onClick={goPrevious}
              aria-label="Previous testimonial"
              className="
                group
                flex
                h-13
                w-13
                items-center
                justify-center
                rounded-2xl
                bg-[#0B3D2E]/10
                text-[#087B5A]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#087B5A]
                hover:text-white
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#087B5A]/30
              "
              style={{
                boxShadow: "0 12px 30px rgba(11,61,46,0.10)",
              }}
            >
              <FaArrowLeft
                size={13}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-x-1
                "
              />
            </button>

            {/* Dots */}

            <div
              className="
                flex
                items-center
                gap-2
                rounded-2xl
                bg-[#0B3D2E]/10
                px-4
                py-3
                backdrop-blur-xl
              "
              style={{
                boxShadow: "0 12px 30px rgba(11,61,46,0.08)",
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
                      duration-500
                      ${
                        index === activeIndex
                          ? "h-2.5 w-8 bg-[#087B5A] shadow-[0_0_10px_rgba(8,123,90,0.25)]"
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
                h-13
                w-13
                items-center
                justify-center
                rounded-2xl
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
                boxShadow: "0 14px 30px rgba(8,123,90,0.22)",
              }}
            >
              <FaArrowRight
                size={13}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </button>
          </div>

          {/* ===================================================
              MOBILE PREV / NEXT
          =================================================== */}

          <div
            className="
              mt-8
              grid
              grid-cols-2
              gap-4
              lg:hidden
            "
          >
            {/* Previous */}

            <button
              type="button"
              onClick={goPrevious}
              className="
                group
                overflow-hidden
                rounded-2xl
                bg-[#0B3D2E]/10
                p-4
                text-left
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
              "
              style={{
                boxShadow: "0 12px 25px rgba(11,61,46,0.08)",
              }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="
                    text-[10px]
                    font-black
                    uppercase
                    tracking-[0.18em]
                    text-[#087B5A]
                  "
                >
                  Previous
                </span>

                <FaArrowLeft
                  size={10}
                  className="
                    text-[#087B5A]
                    transition-transform
                    group-hover:-translate-x-1
                  "
                />
              </div>

              <p
                className="
                  mt-3
                  line-clamp-2
                  text-xs
                  leading-5
                  text-slate-500
                "
              >
                {previousItem.quote}
              </p>
            </button>

            {/* Next */}

            <button
              type="button"
              onClick={goNext}
              className="
                group
                overflow-hidden
                rounded-2xl
                bg-[#0B3D2E]/10
                p-4
                text-left
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
              "
              style={{
                boxShadow: "0 12px 25px rgba(11,61,46,0.08)",
              }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="
                    text-[10px]
                    font-black
                    uppercase
                    tracking-[0.18em]
                    text-[#F97316]
                  "
                >
                  Next
                </span>

                <FaArrowRight
                  size={10}
                  className="
                    text-[#F97316]
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </div>

              <p
                className="
                  mt-3
                  line-clamp-2
                  text-xs
                  leading-5
                  text-slate-500
                "
              >
                {nextItem.quote}
              </p>
            </button>
          </div>
        </div>

        {/* =====================================================
            SAFEGUARDING NOTE
        ===================================================== */}

        <motion.p
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                }
          }
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="
            mx-auto
            mt-10
            max-w-3xl
            text-center
            text-xs
            leading-6
            text-slate-400
          "
        >
          Community stories are published with appropriate consent and in
          accordance with DAFA's communication and safeguarding policies.
        </motion.p>
      </div>
    </section>
  );
}
