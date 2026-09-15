import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

import { storiesCardsData } from "../../Components/Data File/Stories Data/StoriesCards";

export default function StoriesCards() {
  const shouldReduceMotion = useReducedMotion();

  const stories = useMemo(
    () => (Array.isArray(storiesCardsData) ? storiesCardsData.slice(0, 3) : []),
    [],
  );

  const [activeImages, setActiveImages] = useState({});

  /* =========================================================
     AUTOMATIC IMAGE ROTATION
  ========================================================== */

  useEffect(() => {
    if (shouldReduceMotion || stories.length === 0) return;

    const interval = setInterval(() => {
      setActiveImages((previous) => {
        const next = { ...previous };

        stories.forEach((story) => {
          const images =
            Array.isArray(story?.gallery) && story.gallery.length > 0
              ? story.gallery
              : story?.image
                ? [story.image]
                : [];

          if (images.length > 1) {
            const currentIndex = previous[story.id] || 0;

            next[story.id] =
              currentIndex + 1 >= images.length ? 0 : currentIndex + 1;
          }
        });

        return next;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [stories, shouldReduceMotion]);

  /* =========================================================
     EMPTY STATE
  ========================================================== */

  if (!stories.length) {
    return null;
  }

  return (
    <section
      id="success-stories"
      aria-labelledby="success-stories-heading"
      className="
        relative
        overflow-hidden
        bg-[#F7FBF8]
        py-10
        sm:py-12
        lg:py-14
      "
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 xl:px-12">
        {/* ===================================================
            HEADER
        ==================================================== */}

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
              "
            >
              Human Stories
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
            id="success-stories-heading"
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
            Real People. Safer Communities.
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
            Behind every cleared area is a person, a family, and a community
            with the opportunity to move forward safely.
          </p>
        </motion.div>

        {/* ===================================================
            STORIES
        ==================================================== */}

        <div
          className="
            grid
            gap-4
            md:grid-cols-2
            lg:grid-cols-3
            lg:gap-5
          "
        >
          {stories.map((story, index) => {
            const images =
              Array.isArray(story?.gallery) && story.gallery.length > 0
                ? story.gallery
                : story?.image
                  ? [story.image]
                  : [];

            const currentIndex = activeImages[story.id] || 0;

            const activeImage = images[currentIndex] || images[0];

            const title = story?.title || "DAFA Humanitarian Story";

            return (
              <motion.article
                key={story?.id || story?.slug || `story-${index}`}
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
                className="
                  group
                  relative
                  h-[470px]
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200/70
                  bg-[#0B3D2E]
                  shadow-[0_12px_32px_rgba(15,23,42,0.08)]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#0B3D2E]/20
                  hover:shadow-[0_20px_45px_rgba(15,23,42,0.14)]
                  sm:h-[500px]
                  sm:rounded-3xl
                "
              >
                {/* =================================================
                    IMAGE
                ================================================== */}

                {activeImage ? (
                  <motion.img
                    key={`${story.id}-${currentIndex}`}
                    src={activeImage}
                    alt={`${title}${
                      story?.location ? ` — ${story.location}` : ""
                    }`}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    initial={
                      shouldReduceMotion
                        ? {
                            opacity: 1,
                            scale: 1,
                          }
                        : {
                            opacity: 0,
                            scale: 1.025,
                          }
                    }
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.7,
                      ease: "easeOut",
                    }}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-[900ms]
                      ease-out
                      group-hover:scale-[1.055]
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
                        px-6
                        text-center
                        text-sm
                        font-semibold
                        text-white/70
                      "
                    >
                      DAFA Humanitarian Story
                    </span>
                  </div>
                )}

                {/* =================================================
                    OVERLAY
                ================================================== */}

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#031F18]
                    via-[#0B3D2E]/20
                    to-black/5
                    opacity-90
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

                {/* =================================================
                    TOP META
                ================================================== */}

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

                  {/* Category */}

                  {story?.category && (
                    <span
                      className="
                        rounded-full
                        border
                        border-white/20
                        bg-[#0B3D2E]/40
                        px-3
                        py-1.5
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.16em]
                        text-white
                        backdrop-blur-md
                      "
                    >
                      {story.category}
                    </span>
                  )}
                </div>

                {/* =================================================
                    IMAGE INDICATORS
                ================================================== */}

                {images.length > 1 && (
                  <div
                    className="
                      absolute
                      right-5
                      top-[72px]
                      z-10
                      flex
                      items-center
                      gap-1.5
                      sm:right-6
                    "
                    aria-hidden="true"
                  >
                    {images.map((_, imageIndex) => (
                      <span
                        key={imageIndex}
                        className={`
                          h-1
                          rounded-full
                          transition-all
                          duration-300
                          ${
                            currentIndex === imageIndex
                              ? "w-6 bg-white"
                              : "w-2 bg-white/40"
                          }
                        `}
                      />
                    ))}
                  </div>
                )}

                {/* =================================================
                    CONTENT
                ================================================== */}

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
                  {/* Accent */}

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

                  {/* Location / Date */}

                  <div
                    className="
                      mb-3
                      flex
                      flex-wrap
                      items-center
                      gap-x-4
                      gap-y-1
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.12em]
                      text-white/60
                    "
                  >
                    {story?.location && <span>{story.location}</span>}

                    {story?.date && (
                      <>
                        {story?.location && (
                          <span aria-hidden="true" className="text-white/30">
                            /
                          </span>
                        )}

                        <span>{story.date}</span>
                      </>
                    )}
                  </div>

                  {/* Title */}

                  <h3
                    className="
                      max-w-[92%]
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

                  {story?.description && (
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
                      {story.description}
                    </p>
                  )}

                  {/* Read Story */}

                  {story?.slug && (
                    <Link
                      to={`/resources/stories/${story.slug}`}
                      aria-label={`Read ${title}`}
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
                      <span>Read the Story</span>

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
                  )}
                </div>

                {/* =================================================
                    HOVER BORDER
                ================================================== */}

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
          })}
        </div>

        {/* ===================================================
            VIEW ALL
        ==================================================== */}

        <motion.div
          initial={
            shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }
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
            to="/resources/stories"
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
              shadow-[0_8px_22px_rgba(11,61,46,0.12)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#0A5A42]
              hover:shadow-[0_12px_28px_rgba(11,61,46,0.18)]
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#F97316]
              focus-visible:ring-offset-2
            "
          >
            <span>View All Stories</span>

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
