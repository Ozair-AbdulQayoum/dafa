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
   Marquee Row
   ========================================================= */

const MarqueeRow = ({ group, groupIndex }) => {
  const shouldReduceMotion = useReducedMotion();

  const trackRef = useRef(null);
  const isPaused = useRef(false);

  const x = useMotionValue(0);

  // Row 1 = left
  // Row 2 = right
  // Row 3 = left
  const direction = groupIndex % 2 === 0 ? -1 : 1;

  const speed = 45;

  // Duplicate logos for seamless marquee
  const logos = [...group.logos, ...group.logos];

  const normalizePosition = () => {
    const track = trackRef.current;

    if (!track) return;

    const halfWidth = track.scrollWidth / 2;

    if (!halfWidth) return;

    let currentX = x.get();

    if (direction === -1) {
      if (currentX <= -halfWidth) {
        currentX += halfWidth;
      }
    } else {
      if (currentX >= 0) {
        currentX -= halfWidth;
      }
    }

    x.set(currentX);
  };

  useEffect(() => {
    const handleResize = () => {
      normalizePosition();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Smooth continuous animation
  useAnimationFrame((_, delta) => {
    if (shouldReduceMotion || isPaused.current) {
      return;
    }

    const track = trackRef.current;

    if (!track) return;

    const halfWidth = track.scrollWidth / 2;

    if (!halfWidth) return;

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

  return (
    <div
      className="relative overflow-hidden"
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
      <motion.div
        ref={trackRef}
        style={{ x }}
        className="
          flex
          w-max
          gap-4
          py-2
          will-change-transform
        "
      >
        {logos.map((partner, index) => (
          <div
            key={`${group.id}-${partner.name}-${index}`}
            className="
              flex
              h-[135px]
              w-[180px]
              shrink-0
              flex-col
              items-center
              justify-center
              rounded-xl
              border
              border-slate-200/90
              bg-white
              px-5
              py-4
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-md
              sm:h-[145px]
              sm:w-[200px]
            "
          >
            {/* Logo */}
            <div className="flex h-16 w-full items-center justify-center">
              <img
                src={partner.image}
                alt={`${partner.name} logo`}
                className={`
                  max-h-14
                  max-w-[145px]
                  object-contain
                  sm:max-w-[160px]
                  ${
                    partner.bordered
                      ? "rounded-md border-2 border-slate-300 p-1"
                      : ""
                  }
                `}
                loading="lazy"
              />
            </div>

            {/* Organization Name */}
            <p className="mt-3 text-center text-xs font-semibold text-slate-600 sm:text-sm">
              {partner.shortName || partner.name}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

/* =========================================================
   Partners & Donors
   ========================================================= */

const PartnersDonors = () => {
  return (
    <section
      id="partners-donors"
      aria-labelledby="partners-donors-heading"
      className="
        relative
        -mt-6
        overflow-hidden
        bg-[#F8FBF9]
        px-5
        pt-0
        pb-16
        sm:-mt-8
        sm:px-8
        sm:pb-20
        lg:-mt-10
        lg:px-10
        lg:pb-24
      "
    >
      {/* Background Decorations */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-24
          top-20
          h-72
          w-72
          rounded-full
          bg-[#0B3D2E]/5
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-24
          bottom-10
          h-72
          w-72
          rounded-full
          bg-orange-500/5
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span
            className="
              mb-3
              inline-block
              text-sm
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#0B3D2E]
            "
          >
            Partners & Donors
          </span>

          <h2
            id="partners-donors-heading"
            className="
              text-3xl
              font-bold
              tracking-tight
              text-[#0F172A]
              sm:text-4xl
              lg:text-5xl
            "
          >
            Working Together for Safer Communities
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-slate-600
              sm:text-lg
            "
          >
            DAFA works with partners and donors to support humanitarian mine
            action and help create safer communities across Afghanistan.
          </p>
        </div>

        {/* Partner Groups */}

        <div
          className="
            mt-12
            space-y-14
            lg:mt-16
            lg:space-y-16
          "
        >
          {partnerGroups.map((group, groupIndex) => (
            <div key={group.id}>
              {/* Group Title */}

              <div className="mb-6 flex justify-center">
                <div className="flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="h-1 w-8 rounded-full"
                    style={{
                      backgroundColor: group.accent,
                    }}
                  />

                  <h3
                    className="
                      text-center
                      text-2xl
                      font-bold
                      tracking-tight
                      text-[#0F172A]
                      sm:text-3xl
                    "
                  >
                    {group.title}
                  </h3>

                  <span
                    aria-hidden="true"
                    className="h-1 w-8 rounded-full"
                    style={{
                      backgroundColor: group.accent,
                    }}
                  />
                </div>
              </div>

              {/* Alternating Marquee */}

              <MarqueeRow group={group} groupIndex={groupIndex} />

              {/* Divider */}

              {groupIndex < partnerGroups.length - 1 && (
                <div
                  className="
                    mx-auto
                    mt-10
                    h-px
                    max-w-5xl
                    bg-slate-200
                  "
                />
              )}
            </div>
          ))}
        </div>

        {/* Bottom Message */}

        <div
          className="
            mt-14
            border-t
            border-slate-200
            pt-8
            text-center
            lg:mt-16
          "
        >
          <p
            className="
              mx-auto
              max-w-2xl
              text-sm
              leading-6
              text-slate-600
              sm:text-base
            "
          >
            Through continued collaboration, DAFA and its partners work together
            to strengthen humanitarian mine action and support safer, more
            resilient communities.
          </p>

          <div
            className="
              mt-5
              inline-flex
              items-center
              gap-2
              text-sm
              font-bold
              text-[#0B3D2E]
            "
          >
            <span>Stronger Together</span>

            <FaArrowRight className="text-orange-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersDonors;
