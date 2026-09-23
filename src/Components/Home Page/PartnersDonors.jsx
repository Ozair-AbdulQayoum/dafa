// src/Components/Home-Page/PartnersDonors.jsx

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

import partnerGroups from "../../Components/Data File/Main Page Data/PartnersDonorsData";

export default function PartnersDonors() {
  const shouldReduceMotion = useReducedMotion();
  const groups = Array.isArray(partnerGroups) ? partnerGroups : [];

  if (!groups.length) {
    return null;
  }

  return (
    <section
      id="partners-donors"
      aria-labelledby="partners-donors-heading"
      className="
        bg-[#F8FBF9]
        px-5
        py-14
        sm:px-8
        sm:py-16
        lg:px-10
        lg:py-20
        xl:px-12
      "
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <motion.header
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 18,
                }
          }
          whileInView={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
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
                sm:w-10
              "
            />
          </div>

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
            Working together
            <span className="block text-[#0B3D2E]">for safer communities.</span>
          </h2>

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
            DAFA works with donors, international partners, and humanitarian
            organizations to support mine action and strengthen safer
            communities across Afghanistan.
          </p>
        </motion.header>

        {/* =====================================================
            PARTNER GROUPS
        ===================================================== */}

        <div
          className="
            mt-12
            space-y-12
            sm:mt-14
            sm:space-y-14
            lg:mt-16
            lg:space-y-16
          "
        >
          {groups.map((group, groupIndex) => (
            <PartnerGroup
              key={group.id || groupIndex}
              group={group}
              groupIndex={groupIndex}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PARTNER GROUP
========================================================= */

function PartnerGroup({ group, groupIndex, shouldReduceMotion }) {
  const logos = Array.isArray(group?.logos) ? group.logos : [];

  if (!logos.length) {
    return null;
  }

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              y: 18,
            }
      }
      whileInView={
        shouldReduceMotion
          ? undefined
          : {
              opacity: 1,
              y: 0,
            }
      }
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.55,
        delay: shouldReduceMotion ? 0 : groupIndex * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* =====================================================
          GROUP HEADER
      ===================================================== */}

      <div
        className="
          mb-6
          flex
          items-center
          gap-4
          sm:mb-7
        "
      >
        <span
          aria-hidden="true"
          className="
            h-[2px]
            w-8
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

        <span
          aria-hidden="true"
          className="
            h-px
            flex-1
            bg-slate-200
          "
        />
      </div>

      {/* =====================================================
          LOGO GRID
      ===================================================== */}

      <div
        className="
          grid
          grid-cols-2
          items-center
          gap-x-6
          gap-y-8
          sm:grid-cols-3
          sm:gap-x-8
          sm:gap-y-10
          lg:grid-cols-4
          lg:gap-x-10
          lg:gap-y-12
          xl:grid-cols-5
        "
      >
        {logos.map((partner, index) => (
          <PartnerLogo
            key={`${group.id || groupIndex}-${partner.name}-${index}`}
            partner={partner}
          />
        ))}
      </div>
    </motion.div>
  );
}

/* =========================================================
   PARTNER LOGO
========================================================= */

function PartnerLogo({ partner }) {
  if (!partner?.image) {
    return null;
  }

  return (
    <div
      className="
        flex
        min-h-[92px]
        flex-col
        items-center
        justify-center
        text-center
      "
    >
      {/* Logo */}

      <div
        className="
          flex
          h-20
          w-full
          items-center
          justify-center
          sm:h-24
        "
      >
        <img
          src={partner.image}
          alt={`${partner.name || "DAFA partner"} logo`}
          loading="lazy"
          decoding="async"
          draggable="false"
          className="
            max-h-16
            max-w-[150px]
            object-contain
            sm:max-h-20
            sm:max-w-[180px]
          "
        />
      </div>

      {/* Organization Name */}

      {partner.name && (
        <span
          className="
            mt-3
            max-w-[190px]
            text-xs
            font-medium
            leading-5
            text-slate-500
            sm:text-sm
          "
        >
          {partner.name}
        </span>
      )}
    </div>
  );
}
