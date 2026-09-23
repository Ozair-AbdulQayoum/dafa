import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import whatWeDoData from "../../Components/Data File/What We Do Data/ActivitiesData.js";

function ProgramCard({ program, index, shouldReduceMotion }) {
  const image = program?.images?.[0] || program?.image || "";
  const title = program?.title || program?.shortTitle || "DAFA Program";
  const slug = program?.slug || "";

  return (
    <motion.article
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.55,
        delay: shouldReduceMotion ? 0 : index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        relative
        h-[470px]
        overflow-hidden
        rounded-2xl
        border
        border-[#0B3D2E]/10
        bg-[#0B3D2E]
        shadow-[0_14px_35px_rgba(15,23,42,0.08)]
        transition-all
        duration-500

        hover:-translate-y-1
        hover:shadow-[0_20px_45px_rgba(15,23,42,0.14)]

        sm:h-[490px]
        sm:rounded-3xl
      "
    >
      {/* ================= IMAGE ================= */}

      {image ? (
        <img
          src={image}
          alt={title}
          loading={index === 0 ? "eager" : "lazy"}
          decoding="async"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            transition-transform
            duration-[900ms]
            ease-out

            group-hover:scale-[1.045]
          "
        />
      ) : (
        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            bg-[#0B3D2E]
            px-6
            text-center
          "
        >
          <span
            className="
              text-sm
              font-semibold
              leading-6
              text-white/80
            "
          >
            DAFA Humanitarian Mine Action
          </span>
        </div>
      )}

      {/* ================= OVERLAY ================= */}

      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#031F18]
          via-[#0B3D2E]/30
          to-transparent
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute
          inset-x-0
          bottom-0
          h-3/4
          bg-gradient-to-t
          from-[#031F18]/95
          via-[#031F18]/45
          to-transparent
        "
      />

      {/* ================= TOP META ================= */}

      <div
        className="
          absolute
          left-5
          right-5
          top-5
          flex
          items-start
          justify-between

          sm:left-6
          sm:right-6
          sm:top-6
        "
      >
        {/* Number */}

        <div
          className="
            text-3xl
            font-light
            leading-none
            tracking-[-0.05em]
            text-white/90

            sm:text-4xl
          "
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Abbreviation */}

        {program?.abbreviation && (
          <span
            className="
              rounded-full
              border
              border-white/20
              bg-[#031F18]/40
              px-3
              py-1.5
              text-[9px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-white/95
              backdrop-blur-sm
            "
          >
            {program.abbreviation}
          </span>
        )}
      </div>

      {/* ================= CONTENT ================= */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          p-5

          sm:p-6
          lg:p-7
        "
      >
        {/* Category */}

        <div className="mb-3 flex items-center gap-2">
          <span
            aria-hidden="true"
            className="
              h-[3px]
              w-7
              rounded-full
              bg-[#F97316]
              transition-all
              duration-500

              group-hover:w-12
            "
          />

          <span
            className="
              text-[9px]
              font-bold
              uppercase
              tracking-[0.15em]
              text-white/70
            "
          >
            Humanitarian Mine Action
          </span>
        </div>

        {/* Title */}

        <h3
          className="
            max-w-[94%]
            text-xl
            font-extrabold
            leading-[1.15]
            tracking-[-0.025em]
            text-white

            sm:text-2xl
          "
        >
          {title}
        </h3>

        {/* Description */}

        {program?.description && (
          <p
            className="
              mt-3
              max-w-[95%]
              text-xs
              leading-5
              text-white/70

              sm:text-sm
              sm:leading-6
            "
          >
            {program.description}
          </p>
        )}

        {/* Explore */}

        <Link
          to={`/what-we-do/${slug}`}
          aria-label={`Explore ${title}`}
          className="
            mt-5
            inline-flex
            min-h-10
            items-center
            gap-3
            border-b
            border-white/25
            pb-1
            text-xs
            font-bold
            text-white
            transition-all
            duration-300

            hover:gap-4
            hover:border-[#F97316]
            hover:text-[#F97316]

            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-[#F97316]
            focus-visible:ring-offset-2
            focus-visible:ring-offset-[#0B3D2E]
          "
        >
          <span>Explore Program</span>

          <FaArrowRight
            aria-hidden="true"
            className="
              text-[10px]
              transition-transform
              duration-300

              group-hover:translate-x-1
            "
          />
        </Link>
      </div>

      {/* ================= HOVER BORDER ================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-2xl
          border
          border-white/0
          transition-colors
          duration-500

          group-hover:border-white/20

          sm:rounded-3xl
        "
      />
    </motion.article>
  );
}

export default function Programs() {
  const shouldReduceMotion = useReducedMotion();

  // Show only the first 3 programs on the Home Page
  const featuredPrograms = Array.isArray(whatWeDoData)
    ? whatWeDoData.slice(0, 3)
    : [];

  return (
    <section
      aria-labelledby="programs-section-title"
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
        {/* ================= HEADER ================= */}

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            mb-8
            max-w-3xl
            text-center

            sm:mb-9
            lg:mb-10
          "
        >
          {/* Section Label */}

          <div className="mb-3 flex items-center justify-center gap-3">
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
                text-[#0B3D2E]

                sm:text-xs
                sm:tracking-[0.22em]
              "
            >
              Our Programs
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

          {/* Heading */}

          <h2
            id="programs-section-title"
            className="
              text-2xl
              font-extrabold
              leading-[1.1]
              tracking-[-0.035em]
              text-[#0F172A]

              sm:text-3xl
              lg:text-[2.7rem]
            "
          >
            Protecting Communities Through Humanitarian Mine Action
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-6
              text-slate-600

              sm:text-base
              sm:leading-7
            "
          >
            Explore the key areas of work through which DAFA helps create safer
            communities across Afghanistan.
          </p>
        </motion.div>

        {/* ================= PROGRAMS ================= */}

        <div
          className="
            grid
            gap-4

            md:grid-cols-2

            lg:grid-cols-3
            lg:gap-5
          "
        >
          {featuredPrograms.map((program, index) => (
            <ProgramCard
              key={program?.slug || `program-${index}`}
              program={program}
              index={index}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>

        {/* ================= VIEW ALL ================= */}

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.5,
            delay: shouldReduceMotion ? 0 : 0.15,
          }}
          className="
            mt-8
            flex
            justify-center

            sm:mt-10
          "
        >
          <Link
            to="/what-we-do"
            className="
              group
              inline-flex
              min-h-[50px]
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
            "
          >
            <span>View All Programs</span>

            <FaArrowRight
              aria-hidden="true"
              className="
                text-xs
                transition-transform
                duration-300

                group-hover:translate-x-1
              "
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
