// src/Components/Home-Page/PartnersDonors.jsx

import React, { useEffect, useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import partnerGroups from "../../Components/Data File/Main Page Data/PartnersDonorsData";

/* =========================================================
   MARQUEE ROW
========================================================= */

const MarqueeRow = ({ group, groupIndex }) => {
  const shouldReduceMotion = useReducedMotion();

  const trackRef = useRef(null);
  const isPaused = useRef(false);
  const hasInitialized = useRef(false);

  const x = useMotionValue(0);

  // Row 1 → left
  // Row 2 → right
  // Row 3 → left
  const direction = groupIndex % 2 === 0 ? -1 : 1;

  const speed = 42;

  const originalLogos = Array.isArray(group?.logos) ? group.logos : [];

  // Duplicate logos for seamless marquee
  const logos = [...originalLogos, ...originalLogos];

  /* =======================================================
     NORMALIZE POSITION
  ====================================================== */

  const normalizePosition = () => {
    const track = trackRef.current;

    if (!track) return;

    const halfWidth = track.scrollWidth / 2;

    if (!halfWidth) return;

    let currentX = x.get();

    if (direction === -1 && currentX <= -halfWidth) {
      currentX += halfWidth;
    }

    if (direction === 1 && currentX >= 0) {
      currentX -= halfWidth;
    }

    x.set(currentX);
  };

  /* =======================================================
     RESIZE
  ====================================================== */

  useEffect(() => {
    const handleResize = () => {
      normalizePosition();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* =======================================================
     MARQUEE ANIMATION
  ====================================================== */

  useAnimationFrame((_, delta) => {
    if (shouldReduceMotion || isPaused.current) {
      return;
    }

    const track = trackRef.current;

    if (!track) return;

    const halfWidth = track.scrollWidth / 2;

    if (!halfWidth) return;

    if (!hasInitialized.current) {
      if (direction === 1) {
        x.set(-halfWidth);
      }

      hasInitialized.current = true;
      return;
    }

    const movement = (speed * delta) / 1000;

    let newX = x.get() + direction * movement;

    if (direction === -1 && newX <= -halfWidth) {
      newX += halfWidth;
    }

    if (direction === 1 && newX >= 0) {
      newX -= halfWidth;
    }

    x.set(newX);
  });

  if (!originalLogos.length) {
    return null;
  }

  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-2xl
        border
        border-slate-200/80
        bg-white/35
        py-7
        sm:rounded-3xl
        sm:py-8
      "
      onMouseEnter={() => {
        if (!shouldReduceMotion) {
          isPaused.current = true;
        }
      }}
      onMouseLeave={() => {
        if (!shouldReduceMotion) {
          isPaused.current = false;
        }
      }}
      onFocus={() => {
        if (!shouldReduceMotion) {
          isPaused.current = true;
        }
      }}
      onBlur={() => {
        if (!shouldReduceMotion) {
          isPaused.current = false;
        }
      }}
    >
      {/* Left Fade */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-y-0
          left-0
          z-10
          w-14
          bg-gradient-to-r
          from-[#F8FBF9]
          to-transparent
          sm:w-24
          lg:w-32
        "
      />

      {/* Right Fade */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-y-0
          right-0
          z-10
          w-14
          bg-gradient-to-l
          from-[#F8FBF9]
          to-transparent
          sm:w-24
          lg:w-32
        "
      />

      {/* ===================================================
          MARQUEE TRACK
      ==================================================== */}

      <motion.div
        ref={trackRef}
        style={{ x }}
        className="
          flex
          w-max
          select-none
          items-start
          gap-9
          px-7
          will-change-transform
          sm:gap-12
          sm:px-12
          lg:gap-16
          lg:px-16
        "
      >
        {logos.map((partner, index) => {
          const isDuplicate = index >= originalLogos.length;

          return (
            <div
              key={`${group.id}-${partner.name}-${index}`}
              aria-hidden={isDuplicate}
              className="
                group
                flex
                w-[170px]
                shrink-0
                flex-col
                items-center
                justify-start
                text-center
                sm:w-[200px]
              "
            >
              {/* =================================================
                  LOGO AREA
              ================================================== */}

              <div
                className="
                  flex
                  h-24
                  w-full
                  items-center
                  justify-center
                  sm:h-28
                "
              >
                <img
                  src={partner.image}
                  alt={isDuplicate ? "" : `${partner.name} logo`}
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                  className={`
                    max-h-16
                    max-w-[145px]
                    object-contain
                    transition-transform
                    duration-500
                    ease-out
                    group-hover:scale-[1.045]
                    sm:max-h-20
                    sm:max-w-[175px]
                    ${
                      partner.bordered
                        ? "rounded-md border border-slate-200 p-1"
                        : ""
                    }
                  `}
                />
              </div>

              {/* =================================================
                  PARTNER / DONOR NAME
              ================================================== */}

              <div
                className="
                  mt-3
                  flex
                  min-h-[42px]
                  items-start
                  justify-center
                  px-2
                "
              >
                <span
                  className="
                    text-xs
                    font-semibold
                    leading-5
                    tracking-tight
                    text-slate-600
                    transition-colors
                    duration-300
                    group-hover:text-[#0B3D2E]
                    sm:text-sm
                  "
                >
                  {partner.name}
                </span>
              </div>

              {/* Small accent */}

              <span
                aria-hidden="true"
                className="
                  mt-2
                  h-0.5
                  w-0
                  rounded-full
                  bg-[#F97316]
                  transition-all
                  duration-300
                  group-hover:w-8
                "
              />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

/* =========================================================
   PARTNERS & DONORS
========================================================= */

const PartnersDonors = () => {
  const groups = Array.isArray(partnerGroups) ? partnerGroups : [];

  return (
    <section
      id="partners-donors"
      aria-labelledby="partners-donors-heading"
      className="
        relative
        overflow-hidden
        bg-[#F8FBF9]
        px-5
        pb-16
        pt-12
        sm:px-8
        sm:pb-20
        sm:pt-16
        lg:px-10
        lg:pb-24
        lg:pt-20
        xl:px-12
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-32
          top-20
          h-80
          w-80
          rounded-full
          bg-[#0B3D2E]/[0.025]
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-32
          bottom-10
          h-72
          w-72
          rounded-full
          bg-[#F97316]/[0.02]
          blur-3xl
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1440px]
        "
      >
        {/* ===================================================
            SECTION HEADER
        ==================================================== */}

        <motion.header
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            mb-10
            max-w-3xl
            text-center
            sm:mb-12
            lg:mb-14
          "
        >
          {/* Section Label */}

          <div
            className="
              mb-4
              flex
              items-center
              justify-center
              gap-3
              sm:gap-4
            "
          >
            <span
              aria-hidden="true"
              className="
                h-[2px]
                w-8
                rounded-full
                bg-[#F97316]
                sm:w-12
              "
            />

            <span
              className="
                text-[10px]
                font-extrabold
                uppercase
                tracking-[0.2em]
                text-[#0A5A42]
                sm:text-xs
              "
            >
              Partners &amp; Donors
            </span>

            <span
              aria-hidden="true"
              className="
                h-[2px]
                w-8
                rounded-full
                bg-[#F97316]
                sm:w-12
              "
            />
          </div>

          {/* Heading */}

          <h2
            id="partners-donors-heading"
            className="
              text-3xl
              font-extrabold
              leading-[1.08]
              tracking-[-0.04em]
              text-[#0F172A]
              sm:text-4xl
              lg:text-[2.7rem]
            "
          >
            Working together.
            <span className="block text-[#0B3D2E]">For safer communities.</span>
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-6
              text-slate-500
              sm:text-base
              sm:leading-7
            "
          >
            DAFA works alongside international partners, donors, and
            humanitarian organizations to support mine action and build safer
            communities across Afghanistan.
          </p>
        </motion.header>

        {/* ===================================================
            PARTNER GROUPS
        ==================================================== */}

        <div
          className="
            mt-10
            space-y-12
            sm:space-y-14
            lg:mt-14
            lg:space-y-16
          "
        >
          {groups.map((group, groupIndex) => (
            <motion.div
              key={group.id || groupIndex}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.6,
                delay: groupIndex * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* =================================================
                  GROUP HEADER
              ================================================== */}

              <div
                className="
                  mb-5
                  flex
                  items-center
                  justify-between
                  gap-6
                  sm:mb-6
                "
              >
                <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                  <span
                    aria-hidden="true"
                    className="
                      h-[2px]
                      w-7
                      shrink-0
                      rounded-full
                      bg-[#F97316]
                      sm:w-10
                    "
                    style={{
                      backgroundColor: group.accent || "#F97316",
                    }}
                  />

                  <h3
                    className="
                      truncate
                      text-base
                      font-bold
                      tracking-tight
                      text-[#0F172A]
                      sm:text-lg
                      lg:text-xl
                    "
                  >
                    {group.title}
                  </h3>
                </div>

                <span
                  className="
                    shrink-0
                    text-[10px]
                    font-bold
                    tracking-[0.2em]
                    text-slate-400
                  "
                >
                  {String(groupIndex + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Marquee */}

              <MarqueeRow group={group} groupIndex={groupIndex} />
            </motion.div>
          ))}
        </div>

        {/* ===================================================
            BOTTOM STATEMENT
        ==================================================== */}

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
            amount: 0.2,
          }}
          transition={{
            duration: 0.55,
          }}
          className="
            mt-12
            border-t
            border-slate-200
            pt-7
            sm:mt-14
            sm:pt-8
            lg:mt-16
          "
        >
          <div
            className="
              flex
              flex-col
              gap-5
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:gap-8
            "
          >
            <p
              className="
                max-w-3xl
                text-sm
                leading-6
                text-slate-600
                sm:text-base
              "
            >
              Through continued collaboration, DAFA and its partners strengthen
              humanitarian mine action and help communities move toward a safer,
              more resilient future.
            </p>

            <div
              className="
                group
                inline-flex
                shrink-0
                items-center
                gap-3
                text-sm
                font-bold
                text-[#0B3D2E]
              "
            >
              <span>Stronger Together</span>

              <FaArrowRight
                aria-hidden="true"
                className="
                  text-[#F97316]
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersDonors;
