// src/Components/Home-Page/News.jsx

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { FaArrowRight, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

import {
  newsUpdates,
  latestNews,
} from "../../Components/Data File/News Update Data/LatestNews";

export default function News() {
  /*
   * =========================================================
   * HOMEPAGE NEWS SELECTION
   * =========================================================
   */

  const featuredNews = latestNews || newsUpdates?.[0];

  const secondaryNews = newsUpdates
    ?.filter((article) => article.id !== featuredNews?.id)
    .slice(0, 2);

  if (!featuredNews) return null;

  return (
    <section
      id="news-media"
      className="
        relative
        overflow-hidden
        bg-white
        py-16
        sm:py-20
        lg:py-24
      "
    >
      {/* =====================================================
          SUBTLE BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          h-72
          w-72
          rounded-full
          bg-[#0B3D2E]/[0.035]
          blur-3xl
        "
        aria-hidden="true"
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-64
          w-64
          rounded-full
          bg-[#F97316]/[0.025]
          blur-3xl
        "
        aria-hidden="true"
      />

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
            SECTION HEADER
        ===================================================== */}

        <motion.header
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.65,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          className="
            mb-10
            max-w-3xl
            sm:mb-12
          "
        >
          {/* Eyebrow */}

          <div className="mb-4 flex items-center gap-3">
            <span
              className="
                h-[2px]
                w-9
                rounded-full
                bg-[#F97316]
              "
              aria-hidden="true"
            />

            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#0A5A42]
                sm:text-sm
              "
            >
              News &amp; Media
            </p>
          </div>

          {/* Heading */}

          <h2
            className="
              text-3xl
              font-bold
              leading-tight
              tracking-tight
              text-[#0F172A]
              sm:text-4xl
              lg:text-5xl
            "
          >
            Latest Updates From <span className="text-[#0B3D2E]">DAFA</span>
          </h2>

          {/* Description */}

          <p
            className="
              mt-4
              max-w-2xl
              text-base
              leading-7
              text-slate-600
              sm:text-lg
            "
          >
            Stay informed about DAFA&apos;s latest activities, field updates,
            meetings, training, and humanitarian initiatives across Afghanistan.
          </p>
        </motion.header>

        {/* =====================================================
            NEWS GRID
        ===================================================== */}

        <div
          className="
            grid
            items-stretch
            gap-6
            lg:grid-cols-[1.25fr_0.75fr]
          "
        >
          {/* ===================================================
              FEATURED ARTICLE
          =================================================== */}

          <motion.article
            initial={{
              opacity: 0,
              y: 28,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            viewport={{
              once: true,
              margin: "-80px",
            }}
            className="
              group
              flex
              h-full
              flex-col
              overflow-hidden
              rounded-2xl
              border
              border-slate-200
              bg-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#0B3D2E]/20
              hover:shadow-[0_18px_45px_rgba(15,23,42,0.09)]
            "
          >
            {/* =================================================
                FEATURED IMAGE
            ================================================= */}

            <Link
              to={`/resources/news-updates/${featuredNews.slug}`}
              aria-label={`Read ${featuredNews.title}`}
              className="
                relative
                block
                h-[270px]
                shrink-0
                overflow-hidden
                sm:h-[320px]
                lg:h-[335px]
              "
            >
              <img
                src={featuredNews.image}
                alt={featuredNews.title}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-[1.03]
                "
                loading="lazy"
              />

              {/* Subtle image gradient */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  bottom-0
                  h-24
                  bg-gradient-to-t
                  from-black/35
                  to-transparent
                "
                aria-hidden="true"
              />

              {/* Featured label */}

              <span
                className="
                  absolute
                  left-5
                  top-5
                  rounded-md
                  bg-[#0B3D2E]
                  px-3
                  py-1.5
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-white
                  sm:left-6
                  sm:top-6
                "
              >
                Featured
              </span>
            </Link>

            {/* =================================================
                FEATURED CONTENT
            ================================================= */}

            <div
              className="
                flex
                flex-1
                flex-col
                p-6
                sm:p-7
                lg:p-8
              "
            >
              {/* Category + Date */}

              <div
                className="
                  flex
                  flex-wrap
                  items-center
                  gap-x-4
                  gap-y-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.08em]
                "
              >
                <span className="text-[#0A5A42]">{featuredNews.category}</span>

                <span
                  className="
                    h-1
                    w-1
                    rounded-full
                    bg-[#F97316]
                  "
                  aria-hidden="true"
                />

                <span
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-slate-400
                  "
                >
                  <FaCalendarAlt
                    className="text-[#F97316]"
                    aria-hidden="true"
                  />

                  {featuredNews.date}
                </span>
              </div>

              {/* Title */}

              <h3
                className="
                  mt-4
                  max-w-3xl
                  text-2xl
                  font-bold
                  leading-tight
                  tracking-tight
                  text-[#0F172A]
                  transition-colors
                  duration-300
                  group-hover:text-[#0B3D2E]
                  sm:text-3xl
                  lg:text-[1.9rem]
                "
              >
                {featuredNews.title}
              </h3>

              {/* Description */}

              {featuredNews.description && (
                <p
                  className="
                    mt-4
                    max-w-2xl
                    text-sm
                    leading-7
                    text-slate-600
                    sm:text-base
                  "
                >
                  {featuredNews.description}
                </p>
              )}

              {/* =================================================
                  FEATURED FOOTER
              ================================================= */}

              <div
                className="
                  mt-auto
                  pt-6
                "
              >
                <div
                  className="
                    mb-5
                    h-px
                    w-full
                    bg-slate-200
                  "
                />

                <div
                  className="
                    flex
                    flex-col
                    gap-4
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                  "
                >
                  {/* Location */}

                  {featuredNews.location && (
                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        text-xs
                        font-medium
                        text-slate-500
                      "
                    >
                      <FaMapMarkerAlt
                        className="text-[#0A5A42]"
                        aria-hidden="true"
                      />

                      <span>{featuredNews.location}</span>
                    </div>
                  )}

                  {/* Read Article */}

                  <Link
                    to={`/resources/news-updates/${featuredNews.slug}`}
                    className="
                      group/link
                      inline-flex
                      min-h-[44px]
                      w-fit
                      items-center
                      gap-2.5
                      rounded-lg
                      bg-[#0B3D2E]
                      px-5
                      py-3
                      text-sm
                      font-bold
                      text-white
                      transition-all
                      duration-300
                      hover:bg-[#0A5A42]
                      focus:outline-none
                      focus:ring-2
                      focus:ring-[#F97316]
                      focus:ring-offset-2
                    "
                  >
                    <span>Read Article</span>

                    <FaArrowRight
                      size={11}
                      className="
                        transition-transform
                        duration-300
                        group-hover/link:translate-x-1
                      "
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </motion.article>

          {/* ===================================================
              SECONDARY ARTICLES
          =================================================== */}

          <div
            className="
              grid
              gap-6
              sm:grid-cols-2
              lg:grid-cols-1
            "
          >
            {secondaryNews?.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{
                  opacity: 0,
                  y: 28,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{
                  once: true,
                  margin: "-80px",
                }}
                className="
                  group
                  flex
                  h-full
                  flex-col
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#0B3D2E]/20
                  hover:shadow-[0_16px_38px_rgba(15,23,42,0.08)]
                  sm:flex-row
                  lg:flex-col
                "
              >
                {/* Image */}

                <Link
                  to={`/resources/news-updates/${article.slug}`}
                  aria-label={`Read ${article.title}`}
                  className="
                    relative
                    block
                    h-[205px]
                    shrink-0
                    overflow-hidden
                    sm:h-auto
                    sm:w-[42%]
                    lg:h-[170px]
                    lg:w-full
                  "
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-[1.04]
                    "
                    loading="lazy"
                  />
                </Link>

                {/* Content */}

                <div
                  className="
                    flex
                    min-w-0
                    flex-1
                    flex-col
                    p-5
                    sm:p-6
                    lg:p-5
                  "
                >
                  {/* Category + Date */}

                  <div
                    className="
                      flex
                      flex-wrap
                      items-center
                      gap-x-3
                      gap-y-1.5
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.1em]
                    "
                  >
                    <span className="text-[#0A5A42]">{article.category}</span>

                    <span
                      className="
                        h-1
                        w-1
                        rounded-full
                        bg-[#F97316]
                      "
                      aria-hidden="true"
                    />

                    <span className="text-slate-400">{article.date}</span>
                  </div>

                  {/* Title */}

                  <h3
                    className="
                      mt-3
                      line-clamp-2
                      text-lg
                      font-bold
                      leading-snug
                      tracking-tight
                      text-[#0F172A]
                      transition-colors
                      duration-300
                      group-hover:text-[#0B3D2E]
                      sm:text-xl
                      lg:text-lg
                    "
                  >
                    {article.title}
                  </h3>

                  {/* Short excerpt */}

                  {article.description && (
                    <p
                      className="
                        mt-3
                        line-clamp-2
                        text-sm
                        leading-6
                        text-slate-500
                      "
                    >
                      {article.description}
                    </p>
                  )}

                  {/* CTA */}

                  <Link
                    to={`/resources/news-updates/${article.slug}`}
                    className="
                      group/link
                      mt-auto
                      pt-4
                      inline-flex
                      min-h-[42px]
                      w-fit
                      items-center
                      gap-2
                      text-sm
                      font-bold
                      text-[#0B3D2E]
                      transition-colors
                      duration-300
                      hover:text-[#F97316]
                      focus:outline-none
                      focus-visible:underline
                    "
                  >
                    <span>Read Article</span>

                    <FaArrowRight
                      size={10}
                      className="
                        transition-transform
                        duration-300
                        group-hover/link:translate-x-1
                      "
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* =====================================================
            VIEW ALL NEWS
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
          }}
          className="
            mt-10
            flex
            justify-center
            sm:mt-12
          "
        >
          <Link
            to="/resources/news-updates"
            className="
              group
              inline-flex
              min-h-[48px]
              items-center
              gap-3
              rounded-lg
              border
              border-[#0B3D2E]
              bg-white
              px-7
              py-3.5
              text-sm
              font-bold
              text-[#0B3D2E]
              transition-all
              duration-300
              hover:bg-[#0B3D2E]
              hover:text-white
              focus:outline-none
              focus:ring-2
              focus:ring-[#F97316]
              focus:ring-offset-2
            "
          >
            <span>View All News</span>

            <FaArrowRight
              size={11}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
              aria-hidden="true"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
