import React from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

import { missionVisionData } from "../../Components/Data File/About Page Data/MissionVisionValuesData";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: index * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function InformationCard({ data, index, accent }) {
  const Icon = data.icon;

  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      whileHover={{
        y: -7,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-shadow
        duration-300
        hover:shadow-xl
        sm:p-8
      "
    >
      {/* Top Accent */}

      <div
        className={`
          absolute
          left-0
          right-0
          top-0
          h-1
          bg-gradient-to-r
          ${accent}
        `}
      />

      {/* Decorative Background */}

      <div
        className="
          pointer-events-none
          absolute
          -right-10
          -top-10
          h-32
          w-32
          rounded-full
          bg-slate-100
          opacity-60
          blur-3xl
          transition-transform
          duration-500
          group-hover:scale-150
        "
      />

      {/* Icon + Number */}

      <div className="relative flex items-center justify-between">
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-[#087B5A]/10
            text-[#087B5A]
            transition-all
            duration-300
            group-hover:bg-[#087B5A]
            group-hover:text-white
          "
        >
          <Icon size={22} />
        </div>

        <span
          className="
            text-5xl
            font-black
            text-slate-100
            transition-colors
            duration-300
            group-hover:text-slate-200
          "
        >
          0{index + 1}
        </span>
      </div>

      {/* Title */}

      <h3
        className="
          relative
          mt-7
          text-2xl
          font-extrabold
          tracking-tight
          text-[#0F172A]
          sm:text-3xl
        "
      >
        {data.title}
      </h3>

      {/* Statement */}

      <div
        className="
          relative
          mt-5
          rounded-2xl
          bg-slate-50
          p-5
        "
      >
        <p
          className="
            text-sm
            font-bold
            leading-7
            text-[#087B5A]
            sm:text-base
          "
        >
          “{data.statement}”
        </p>
      </div>

      {/* Description */}

      <p
        className="
          relative
          mt-5
          text-sm
          leading-7
          text-slate-600
          sm:text-[15px]
          sm:leading-8
        "
      >
        {data.description}
      </p>

      {/* Values */}

      {data.principles && (
        <div
          className="
            relative
            mt-6
            grid
            grid-cols-1
            gap-2
            sm:grid-cols-2
          "
        >
          {data.principles.map((principle) => {
            const PrincipleIcon = principle.icon;

            return (
              <div
                key={principle.title}
                className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-slate-100
                  bg-white
                  px-3
                  py-2.5
                  text-xs
                  font-semibold
                  text-slate-700
                  shadow-sm
                "
              >
                <PrincipleIcon size={12} className="shrink-0 text-[#087B5A]" />

                <span>{principle.title}</span>
              </div>
            );
          })}
        </div>
      )}

      {/* Bottom Accent */}

      <div
        className="
          absolute
          bottom-0
          left-8
          h-1
          w-0
          rounded-full
          bg-[#F97316]
          transition-all
          duration-500
          group-hover:w-20
        "
      />
    </motion.article>
  );
}

export default function MissionVisionValues() {
  const {
    sectionLabel,
    heading,
    headingHighlight,
    description,
    vision,
    mission,
    values,
    callToAction,
  } = missionVisionData;

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F8FAFC]
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -left-40
            top-20
            h-96
            w-96
            rounded-full
            bg-[#087B5A]/5
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -right-40
            bottom-40
            h-96
            w-96
            rounded-full
            bg-[#F97316]/5
            blur-3xl
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-1/3
            h-72
            w-72
            -translate-x-1/2
            rounded-full
            bg-[#0284C7]/5
            blur-3xl
          "
        />
      </div>

      {/* =====================================================
          CONTAINER
      ====================================================== */}

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
        {/* =================================================
            HEADER
        ================================================== */}

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
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            mb-14
            max-w-3xl
            text-center
            sm:mb-16
          "
        >
          {/* Label */}

          <div className="mb-5 inline-flex items-center gap-3">
            <span className="h-[2px] w-8 rounded-full bg-[#F97316]" />

            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#087B5A]
                sm:text-sm
              "
            >
              {sectionLabel}
            </span>

            <span className="h-[2px] w-8 rounded-full bg-[#F97316]" />
          </div>

          {/* Heading */}

          <h2
            className="
              text-3xl
              font-black
              leading-tight
              tracking-tight
              text-[#0F172A]
              sm:text-4xl
              lg:text-5xl
            "
          >
            {heading} <span className="text-[#087B5A]">{headingHighlight}</span>
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-slate-500
              sm:text-base
              sm:leading-8
              lg:text-lg
            "
          >
            {description}
          </p>
        </motion.div>

        {/* =================================================
            MISSION + VISION
        ================================================== */}

        <div className="grid gap-6 lg:grid-cols-2">
          <InformationCard
            data={mission}
            index={0}
            accent="from-[#087B5A] to-[#0B3D2E]"
          />

          <InformationCard
            data={vision}
            index={1}
            accent="from-[#0284C7] to-[#0369A1]"
          />
        </div>

        {/* =================================================
            VALUES
        ================================================== */}

        <div className="mt-6">
          <InformationCard
            data={values}
            index={2}
            accent="from-[#F97316] to-[#EA580C]"
          />
        </div>

        {/* =================================================
            CALL TO ACTION
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
            duration: 0.8,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mt-8
            overflow-hidden
            rounded-3xl
            bg-[#0B3D2E]
            px-6
            py-10
            shadow-xl
            sm:px-10
            sm:py-12
            lg:px-14
            lg:py-14
          "
        >
          {/* CTA Background */}

          <div className="pointer-events-none absolute inset-0">
            <div
              className="
                absolute
                -right-20
                -top-32
                h-80
                w-80
                rounded-full
                bg-[#A7F3D0]/10
                blur-3xl
              "
            />

            <div
              className="
                absolute
                -bottom-40
                -left-20
                h-80
                w-80
                rounded-full
                bg-[#0284C7]/10
                blur-3xl
              "
            />
          </div>

          {/* CTA Content */}

          <div
            className="
              relative
              z-10
              mx-auto
              max-w-4xl
              text-center
            "
          >
            {/* Eyebrow */}

            <div className="flex items-center justify-center gap-3">
              <span className="h-[2px] w-8 rounded-full bg-[#F97316]" />

              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#A7F3D0]
                "
              >
                {callToAction.eyebrow}
              </span>

              <span className="h-[2px] w-8 rounded-full bg-[#F97316]" />
            </div>

            {/* Title */}

            <h3
              className="
                mt-5
                text-2xl
                font-black
                tracking-tight
                text-white
                sm:text-3xl
                lg:text-4xl
              "
            >
              {callToAction.title}
            </h3>

            {/* Description */}

            <p
              className="
                mx-auto
                mt-5
                max-w-3xl
                text-sm
                leading-7
                text-green-50/80
                sm:text-base
                sm:leading-8
              "
            >
              {callToAction.description}
            </p>
          </div>
        </motion.div>

        {/* =================================================
            HUMANITARIAN PRINCIPLES
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mt-10
            flex
            flex-wrap
            items-center
            justify-center
            gap-x-6
            gap-y-3
            text-xs
            font-semibold
            uppercase
            tracking-wider
            text-slate-400
          "
        >
          {["Humanity", "Neutrality", "Impartiality", "Independence"].map(
            (item, index) => (
              <React.Fragment key={item}>
                <span className="inline-flex items-center gap-2">
                  <FaCheck size={9} className="text-[#087B5A]" />

                  {item}
                </span>

                {index < 3 && (
                  <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />
                )}
              </React.Fragment>
            ),
          )}
        </motion.div>
      </div>
    </section>
  );
}
