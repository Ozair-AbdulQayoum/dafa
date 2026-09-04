import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { storiesCardsData } from "../../Components/Data File/Stories Data/StoriesCards";

export default function StoriesCards() {
  const shouldReduceMotion = useReducedMotion();

  const stories = useMemo(() => storiesCardsData || [], []);

  const [currentStory, setCurrentStory] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const story = stories[currentStory];

  const images =
    story?.gallery?.length > 0
      ? story.gallery
      : story?.image
        ? [story.image]
        : [];

  // =========================================================
  // CHANGE STORY
  // =========================================================

  const goToStory = (index) => {
    if (!stories.length) return;

    const nextIndex = (index + stories.length) % stories.length;

    setCurrentStory(nextIndex);
    setCurrentImage(0);
  };

  const goToNextStory = () => {
    goToStory(currentStory + 1);
  };

  const goToPreviousStory = () => {
    goToStory(currentStory - 1);
  };

  // =========================================================
  // AUTOMATIC STORY ROTATION
  // =========================================================

  useEffect(() => {
    if (stories.length <= 1 || shouldReduceMotion) return;

    const interval = setInterval(() => {
      setCurrentStory((previous) => (previous + 1) % stories.length);
      setCurrentImage(0);
    }, 8000);

    return () => clearInterval(interval);
  }, [stories.length, shouldReduceMotion]);

  // =========================================================
  // AUTOMATIC IMAGE ROTATION
  // =========================================================

  useEffect(() => {
    if (images.length <= 1 || shouldReduceMotion) return;

    const interval = setInterval(() => {
      setCurrentImage((previous) => (previous + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length, shouldReduceMotion, currentStory]);

  // =========================================================
  // EMPTY STATE
  // =========================================================

  if (!story) {
    return null;
  }

  return (
    <section
      id="success-stories"
      aria-labelledby="success-stories-heading"
      className="
        relative
        overflow-hidden
        bg-white
        px-5
        py-16
        sm:px-8
        sm:py-20
        lg:px-10
        lg:py-24
      "
    >
      {/* =====================================================
          SUBTLE BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            -left-32
            top-20
            h-72
            w-72
            rounded-full
            bg-[#0B3D2E]/[0.035]
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -right-32
            bottom-10
            h-80
            w-80
            rounded-full
            bg-[#F97316]/[0.035]
            blur-3xl
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
        "
      >
        {/* ===================================================
            SECTION HEADER
        ==================================================== */}

        <motion.header
          initial={
            shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
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
            duration: shouldReduceMotion ? 0 : 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            mb-12
            max-w-3xl
            text-center
            lg:mb-14
          "
        >
          {/* Eyebrow */}

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
              aria-hidden="true"
              className="
                h-px
                w-8
                bg-[#F97316]
                sm:w-10
              "
            />

            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#0A5A42]
                sm:text-sm
              "
            >
              Success Stories
            </span>

            <span
              aria-hidden="true"
              className="
                h-px
                w-8
                bg-[#F97316]
                sm:w-10
              "
            />
          </div>

          {/* Heading */}

          <h2
            id="success-stories-heading"
            className="
              text-3xl
              font-extrabold
              leading-[1.08]
              tracking-tight
              text-[#0F172A]
              sm:text-4xl
              lg:text-5xl
            "
          >
            Real People.
            <span className="block text-[#0B3D2E]">Safer Communities.</span>
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-slate-600
              sm:text-lg
              sm:leading-8
            "
          >
            DAFA&apos;s work creates meaningful change for individuals,
            families, and communities by helping make everyday life safer.
          </p>
        </motion.header>

        {/* ===================================================
            FEATURED STORY
        ==================================================== */}

        <AnimatePresence mode="wait">
          <motion.article
            key={story.id}
            initial={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -12 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              overflow-hidden
              rounded-[24px]
              border
              border-slate-200
              bg-white
              shadow-[0_20px_60px_rgba(15,23,42,0.08)]
              lg:grid
              lg:grid-cols-[1.08fr_0.92fr]
            "
          >
            {/* =================================================
                IMAGE
            ================================================== */}

            <div
              className="
                relative
                h-[340px]
                overflow-hidden
                sm:h-[430px]
                lg:h-[520px]
              "
            >
              <AnimatePresence mode="wait">
                {images.length > 0 ? (
                  <motion.img
                    key={`${story.id}-${currentImage}`}
                    src={images[currentImage]}
                    alt={`${story.title} — ${story.location}`}
                    loading="eager"
                    decoding="async"
                    initial={
                      shouldReduceMotion
                        ? { opacity: 1 }
                        : {
                            opacity: 0,
                            scale: 1.025,
                          }
                    }
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={
                      shouldReduceMotion
                        ? { opacity: 1 }
                        : {
                            opacity: 0,
                          }
                    }
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.55,
                      ease: "easeOut",
                    }}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                      object-center
                    "
                  />
                ) : (
                  <div
                    className="
                      flex
                      h-full
                      items-center
                      justify-center
                      bg-[#0B3D2E]
                    "
                  >
                    <span
                      className="
                        text-sm
                        font-semibold
                        text-white/70
                      "
                    >
                      DAFA Story
                    </span>
                  </div>
                )}
              </AnimatePresence>

              {/* Small image count */}

              {images.length > 1 && (
                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                    z-20
                    rounded-full
                    bg-[#0B3D2E]/80
                    px-3
                    py-1.5
                    text-[11px]
                    font-semibold
                    text-white
                    backdrop-blur-sm
                  "
                  aria-label={`${images.length} images in this story`}
                >
                  {currentImage + 1} / {images.length}
                </div>
              )}

              {/* Image navigation */}

              {images.length > 1 && (
                <div
                  className="
                    absolute
                    bottom-5
                    right-5
                    z-20
                    flex
                    items-center
                    gap-1.5
                  "
                >
                  {images.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setCurrentImage(index)}
                      aria-label={`Show story image ${index + 1}`}
                      aria-current={currentImage === index ? "true" : undefined}
                      className={`
                        h-1.5
                        rounded-full
                        transition-all
                        duration-300
                        focus:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-white
                        focus-visible:ring-offset-2
                        focus-visible:ring-offset-[#0B3D2E]
                        ${
                          currentImage === index
                            ? "w-7 bg-white"
                            : "w-2 bg-white/55 hover:bg-white/80"
                        }
                      `}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* =================================================
                STORY CONTENT
            ================================================== */}

            <div
              className="
                flex
                flex-col
                justify-center
                px-6
                py-8
                sm:px-9
                sm:py-10
                lg:px-12
                lg:py-12
                xl:px-14
              "
            >
              {/* Category */}

              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#0A5A42]
                  sm:text-sm
                "
              >
                {story.category}
              </span>

              {/* Orange divider */}

              <div
                aria-hidden="true"
                className="
                  mt-4
                  h-1
                  w-12
                  rounded-full
                  bg-[#F97316]
                "
              />

              {/* Title */}

              <h3
                className="
                  mt-5
                  max-w-xl
                  text-2xl
                  font-extrabold
                  leading-[1.15]
                  tracking-tight
                  text-[#0F172A]
                  sm:text-3xl
                  lg:text-[2.15rem]
                  lg:leading-[1.15]
                "
              >
                {story.title}
              </h3>

              {/* Story */}

              <p
                className="
                  mt-5
                  max-w-xl
                  text-base
                  leading-7
                  text-slate-600
                  sm:text-lg
                  sm:leading-8
                "
              >
                {story.description}
              </p>

              {/* =================================================
                  METADATA
              ================================================== */}

              <div
                className="
                  mt-7
                  grid
                  gap-4
                  border-y
                  border-slate-200
                  py-5
                  sm:grid-cols-2
                  sm:gap-6
                "
              >
                {/* Location */}

                <div className="flex items-start gap-3">
                  <span
                    className="
                      mt-0.5
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#0B3D2E]/[0.07]
                      text-[#0B3D2E]
                    "
                  >
                    <FaMapMarkerAlt size={13} aria-hidden="true" />
                  </span>

                  <div>
                    <p
                      className="
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-slate-400
                      "
                    >
                      Location
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        font-semibold
                        text-[#0F172A]
                      "
                    >
                      {story.location}
                    </p>
                  </div>
                </div>

                {/* Date */}

                <div className="flex items-start gap-3">
                  <span
                    className="
                      mt-0.5
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#0B3D2E]/[0.07]
                      text-[#0B3D2E]
                    "
                  >
                    <FaCalendarAlt size={13} aria-hidden="true" />
                  </span>

                  <div>
                    <p
                      className="
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-slate-400
                      "
                    >
                      Published
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        font-semibold
                        text-[#0F172A]
                      "
                    >
                      {story.date}
                    </p>
                  </div>
                </div>
              </div>

              {/* =================================================
                  READ STORY
              ================================================== */}

              <div className="mt-7">
                <Link
                  to={`/resources/stories/${story.slug}`}
                  aria-label={`Read ${story.title}`}
                  className="
                    group/link
                    inline-flex
                    min-h-11
                    items-center
                    gap-3
                    rounded-full
                    bg-[#0B3D2E]
                    px-5
                    py-3
                    text-sm
                    font-bold
                    text-white
                    shadow-[0_8px_24px_rgba(11,61,46,0.16)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#0A5A42]
                    hover:shadow-[0_12px_30px_rgba(11,61,46,0.22)]
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#0B3D2E]/40
                    focus-visible:ring-offset-2
                  "
                >
                  <span>Read Story</span>

                  <span
                    className="
                      flex
                      h-6
                      w-6
                      items-center
                      justify-center
                      rounded-full
                      bg-white/10
                      transition-transform
                      duration-300
                      group-hover/link:translate-x-1
                    "
                  >
                    <FaArrowRight size={9} aria-hidden="true" />
                  </span>
                </Link>
              </div>
            </div>
          </motion.article>
        </AnimatePresence>

        {/* =====================================================
            STORY NAVIGATION
        ====================================================== */}

        {stories.length > 1 && (
          <div
            className="
              mt-7
              flex
              flex-col
              items-center
              justify-between
              gap-5
              sm:flex-row
            "
          >
            {/* Previous / Next */}

            <div
              className="
                order-2
                flex
                items-center
                gap-2
                sm:order-1
              "
            >
              <button
                type="button"
                onClick={goToPreviousStory}
                aria-label="Previous success story"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  text-[#0B3D2E]
                  shadow-sm
                  transition-all
                  duration-300
                  hover:border-[#0B3D2E]
                  hover:bg-[#0B3D2E]
                  hover:text-white
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#0B3D2E]/40
                  focus-visible:ring-offset-2
                "
              >
                <FaArrowLeft size={13} aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={goToNextStory}
                aria-label="Next success story"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  text-[#0B3D2E]
                  shadow-sm
                  transition-all
                  duration-300
                  hover:border-[#0B3D2E]
                  hover:bg-[#0B3D2E]
                  hover:text-white
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#0B3D2E]/40
                  focus-visible:ring-offset-2
                "
              >
                <FaArrowRight size={13} aria-hidden="true" />
              </button>
            </div>

            {/* Story indicators */}

            <div
              className="
                order-1
                flex
                items-center
                gap-2
                sm:order-2
              "
              aria-label="Success story navigation"
            >
              {stories.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goToStory(index)}
                  aria-label={`Show story ${index + 1}: ${item.title}`}
                  aria-current={currentStory === index ? "true" : undefined}
                  className={`
                    h-1.5
                    rounded-full
                    transition-all
                    duration-300
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#0B3D2E]/40
                    focus-visible:ring-offset-2
                    ${
                      currentStory === index
                        ? "w-9 bg-[#0B3D2E]"
                        : "w-2 bg-slate-300 hover:bg-[#0A5A42]"
                    }
                  `}
                />
              ))}
            </div>

            {/* Story counter */}

            <div
              className="
                order-3
                min-w-[90px]
                text-right
                text-xs
                font-semibold
                text-slate-400
                sm:text-sm
              "
            >
              <span className="text-[#0B3D2E]">
                {String(currentStory + 1).padStart(2, "0")}
              </span>

              <span className="mx-1">/</span>

              <span>{String(stories.length).padStart(2, "0")}</span>
            </div>
          </div>
        )}

        {/* =====================================================
            VIEW ALL STORIES
        ====================================================== */}

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
            duration: shouldReduceMotion ? 0 : 0.55,
            delay: shouldReduceMotion ? 0 : 0.1,
          }}
          className="
            mt-9
            flex
            justify-center
          "
        >
          <Link
            to="/resources/stories"
            className="
              group
              inline-flex
              min-h-11
              items-center
              gap-3
              rounded-full
              border
              border-[#0B3D2E]
              bg-white
              px-6
              py-3
              text-sm
              font-bold
              text-[#0B3D2E]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#0B3D2E]
              hover:text-white
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#0B3D2E]/40
              focus-visible:ring-offset-2
            "
          >
            <span>Read More Stories</span>

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
