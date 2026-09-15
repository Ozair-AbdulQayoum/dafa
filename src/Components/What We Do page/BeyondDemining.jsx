import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import beyondDeminingData from "../../Components/Data File/What We Do Data/BeyondDeminingData";

export default function BeyondDemining() {
  const shouldReduceMotion = useReducedMotion();

  // Remove the 3rd card
  const activities = beyondDeminingData.filter((_, index) => index !== 2);

  return (
    <main className="bg-[#F7FBF8]">
      {/* =====================================================
          HUMANITARIAN SUPPORT
      ===================================================== */}

      <section className="py-10 sm:py-12 lg:py-14">
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
            initial={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }
            }
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
                "
              >
                Humanitarian Support
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

            <h1
              className="
                text-2xl
                font-extrabold
                leading-[1.08]
                tracking-[-0.04em]
                text-[#0F172A]
                sm:text-3xl
                lg:text-[2.7rem]
              "
            >
              Supporting Communities Beyond Demining
            </h1>

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
              Through additional humanitarian initiatives, DAFA works to support
              vulnerable communities, strengthen livelihoods, and respond to
              urgent needs.
            </p>
          </motion.div>

          {/* ================= ACTIVITIES ================= */}

          <div
            className="
              grid
              gap-4
              md:grid-cols-2
              lg:grid-cols-3
              lg:gap-5
            "
          >
            {activities.map((activity, index) => {
              const image = activity?.images?.[0] || "";
              const title = activity?.title || "Humanitarian Support";
              const slug = activity?.slug || "";

              return (
                <motion.article
                  key={activity?.slug || `support-${index}`}
                  initial={
                    shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }
                  }
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
                  className="group"
                >
                  <Link
                    to={`/beyond-demining/${slug}`}
                    aria-label={`Explore ${title}`}
                    className="
                      relative
                      block
                      h-[450px]
                      overflow-hidden
                      rounded-2xl
                      border
                      border-[#0B3D2E]/10
                      bg-[#0B3D2E]
                      shadow-[0_14px_35px_rgba(15,23,42,0.09)]
                      transition-all
                      duration-500
                      hover:-translate-y-1
                      hover:shadow-[0_22px_50px_rgba(15,23,42,0.15)]
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-[#F97316]
                      focus-visible:ring-offset-2
                      sm:h-[480px]
                      sm:rounded-3xl
                      lg:h-[500px]
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
                        "
                      >
                        <span
                          className="
                            max-w-xs
                            px-6
                            text-center
                            text-sm
                            font-semibold
                            leading-6
                            text-white/70
                          "
                        >
                          DAFA Humanitarian Support
                        </span>
                      </div>
                    )}

                    {/* ================= IMAGE DEPTH ================= */}

                    <div
                      aria-hidden="true"
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#031F18]/95
                        via-[#0B3D2E]/25
                        to-black/5
                      "
                    />

                    <div
                      aria-hidden="true"
                      className="
                        absolute
                        inset-x-0
                        bottom-0
                        h-[68%]
                        bg-gradient-to-t
                        from-[#031F18]
                        via-[#031F18]/75
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

                      <span
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
                      </span>

                      {/* Category */}

                      <span
                        className="
                          rounded-full
                          border
                          border-white/20
                          bg-[#031F18]/40
                          px-3
                          py-1.5
                          text-[9px]
                          font-extrabold
                          uppercase
                          tracking-[0.16em]
                          text-white/95
                          backdrop-blur-md
                        "
                      >
                        Humanitarian
                      </span>
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
                      {/* Orange Accent */}

                      <div
                        aria-hidden="true"
                        className="
                          mb-4
                          h-[3px]
                          w-8
                          rounded-full
                          bg-[#F97316]
                          transition-all
                          duration-500
                          group-hover:w-14
                        "
                      />

                      {/* Meta */}

                      <div
                        className="
                          mb-3
                          flex
                          flex-wrap
                          items-center
                          gap-x-3
                          gap-y-1
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.12em]
                          text-white/60
                        "
                      >
                        <span>Community Support</span>

                        <span aria-hidden="true" className="text-white/25">
                          /
                        </span>

                        <span>DAFA</span>
                      </div>

                      {/* Title */}

                      <h2
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
                      </h2>

                      {/* Description */}

                      {activity?.description && (
                        <p
                          className="
                            mt-3
                            line-clamp-3
                            max-w-[95%]
                            text-xs
                            leading-5
                            text-white/70
                            sm:text-sm
                            sm:leading-6
                          "
                        >
                          {activity.description}
                        </p>
                      )}

                      {/* Explore */}

                      <span
                        className="
                          mt-5
                          inline-flex
                          min-h-10
                          items-center
                          gap-3
                          border-b
                          border-white/30
                          pb-1
                          text-xs
                          font-bold
                          text-white
                          transition-all
                          duration-300
                          group-hover:gap-4
                          group-hover:border-[#F97316]
                          group-hover:text-[#F97316]
                        "
                      >
                        <span>Explore More</span>

                        <FaArrowRight
                          aria-hidden="true"
                          className="
                            text-[10px]
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                          "
                        />
                      </span>
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
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
