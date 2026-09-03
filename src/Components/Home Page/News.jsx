import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaCalendarAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import { latestNews } from "../../Components/Data File/News Update Data/LatestNews";

export default function News() {
  const [currentImage, setCurrentImage] = useState(0);

  /* =====================================================
     IMAGE DATA
  ===================================================== */

  const images = useMemo(() => {
    if (latestNews?.gallery?.length > 0) {
      return latestNews.gallery;
    }

    if (latestNews?.image) {
      return [latestNews.image];
    }

    return [];
  }, []);

  /* =====================================================
     AUTO IMAGE SLIDER
  ===================================================== */

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImage((previous) => (previous + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  /* =====================================================
     NEXT IMAGE
  ===================================================== */

  const nextImage = () => {
    if (images.length <= 1) return;

    setCurrentImage((previous) => (previous + 1) % images.length);
  };

  /* =====================================================
     PREVIOUS IMAGE
  ===================================================== */

  const previousImage = () => {
    if (images.length <= 1) return;

    setCurrentImage(
      (previous) => (previous - 1 + images.length) % images.length,
    );
  };

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-[#E8F5EF]
        via-[#F4FAF7]
        to-[#EAF4F8]
        py-14
        sm:py-16
        lg:py-20
      "
    >
      {/* =====================================================
          BACKGROUND GLOWS
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Green */}

        <div
          className="
            absolute
            -right-40
            -top-40
            h-96
            w-96
            rounded-full
            bg-[#087B5A]/10
            blur-[120px]
          "
        />

        {/* Blue */}

        <div
          className="
            absolute
            -bottom-40
            -left-40
            h-96
            w-96
            rounded-full
            bg-[#0284C7]/8
            blur-[120px]
          "
        />

        {/* Orange */}

        <div
          className="
            absolute
            bottom-[-180px]
            left-1/2
            h-96
            w-96
            -translate-x-1/2
            rounded-full
            bg-[#F97316]/5
            blur-[120px]
          "
        />
      </div>

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
            SECTION HEADING
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
            margin: "-100px",
          }}
          className="
            mx-auto
            mb-10
            max-w-3xl
            text-center
            sm:mb-12
          "
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 rounded-full bg-[#087B5A]" />

            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#087B5A]
                sm:text-sm
              "
            >
              Latest Updates
            </p>

            <span className="h-[2px] w-10 rounded-full bg-[#087B5A]" />
          </div>

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
            News & <span className="text-[#087B5A]">Updates</span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-base
              leading-7
              text-slate-600
              sm:text-lg
            "
          >
            Stay connected with DAFA activities, achievements, meetings, and
            humanitarian efforts across Afghanistan.
          </p>
        </motion.div>

        {/* =====================================================
            MAIN NEWS CARD
        ===================================================== */}

        <motion.article
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
            margin: "-80px",
          }}
          className="
            mx-auto
            max-w-6xl
            overflow-hidden
            rounded-[2rem]
            border
            border-white/80
            bg-[#F3F9F6]/90
            shadow-[10px_12px_30px_rgba(15,23,42,0.10),-10px_-10px_28px_rgba(255,255,255,0.95)]
            backdrop-blur-xl
            transition-all
            duration-500
            hover:shadow-[14px_16px_38px_rgba(15,23,42,0.12),-12px_-12px_32px_rgba(255,255,255,1)]
          "
        >
          {/* =================================================
              LEFT IMAGE / RIGHT CONTENT
          ================================================= */}

          <div className="grid min-h-[420px] lg:grid-cols-[1.05fr_0.95fr]">
            {/* =================================================
                IMAGE — LEFT SIDE
            ================================================= */}

            <div
              className="
                relative
                h-[300px]
                min-h-full
                overflow-hidden
                bg-[#0B3D2E]
                sm:h-[380px]
                lg:h-auto
              "
            >
              {images.length > 0 ? (
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`${images[currentImage]}-${currentImage}`}
                    src={images[currentImage]}
                    alt={latestNews?.title || "Latest DAFA news"}
                    initial={{
                      opacity: 0,
                      scale: 1.08,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 1.03,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                    "
                  />
                </AnimatePresence>
              ) : (
                <div
                  className="
                    flex
                    h-full
                    min-h-[300px]
                    items-center
                    justify-center
                    bg-[#0B3D2E]
                    text-sm
                    font-semibold
                    text-white/70
                  "
                >
                  DAFA News
                </div>
              )}

              {/* Dark Cinematic Overlay */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#031F18]/80
                  via-[#031F18]/15
                  to-transparent
                "
              />

              {/* =================================================
                  PREVIOUS BUTTON
              ================================================= */}

              {images.length > 1 && (
                <button
                  type="button"
                  onClick={previousImage}
                  aria-label="Previous image"
                  className="
                    absolute
                    left-4
                    top-1/2
                    z-20
                    flex
                    h-10
                    w-10
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/20
                    bg-black/25
                    text-white
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:bg-white
                    hover:text-[#087B5A]
                  "
                >
                  <FaChevronLeft size={13} />
                </button>
              )}

              {/* =================================================
                  NEXT BUTTON
              ================================================= */}

              {images.length > 1 && (
                <button
                  type="button"
                  onClick={nextImage}
                  aria-label="Next image"
                  className="
                    absolute
                    right-4
                    top-1/2
                    z-20
                    flex
                    h-10
                    w-10
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/20
                    bg-black/25
                    text-white
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:bg-white
                    hover:text-[#087B5A]
                  "
                >
                  <FaChevronRight size={13} />
                </button>
              )}

              {/* =================================================
                  SLIDER DOTS
              ================================================= */}

              {images.length > 1 && (
                <div
                  className="
                    absolute
                    bottom-5
                    left-1/2
                    z-20
                    flex
                    -translate-x-1/2
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-white/20
                    bg-black/25
                    px-3
                    py-2
                    backdrop-blur-md
                  "
                >
                  {images.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setCurrentImage(index)}
                      aria-label={`Show image ${index + 1}`}
                      className={`
                        h-2
                        rounded-full
                        transition-all
                        duration-500
                        ${
                          currentImage === index
                            ? "w-7 bg-white"
                            : "w-2 bg-white/50"
                        }
                      `}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* =================================================
                CONTENT — RIGHT SIDE
            ================================================= */}

            <div
              className="
                flex
                flex-col
                justify-center
                p-7
                sm:p-9
                lg:p-11
              "
            >
              {/* Latest News Badge */}

              <div
                className="
                  mb-5
                  flex
                  w-fit
                  items-center
                  gap-2
                  rounded-xl
                  bg-[#E6F3ED]
                  px-4
                  py-2
                  shadow-[4px_4px_10px_rgba(15,23,42,0.06),-4px_-4px_10px_rgba(255,255,255,0.8)]
                "
              >
                <span
                  className="
                    h-2
                    w-2
                    animate-pulse
                    rounded-full
                    bg-[#087B5A]
                  "
                />

                <span
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-[#087B5A]
                  "
                >
                  Latest News
                </span>
              </div>

              {/* Category */}

              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-[#087B5A]
                "
              >
                {latestNews?.category}
              </p>

              {/* Date */}

              <div
                className="
                  mt-3
                  flex
                  items-center
                  gap-2
                  text-xs
                  font-medium
                  uppercase
                  tracking-wide
                  text-slate-400
                "
              >
                <FaCalendarAlt className="text-[#087B5A]" />

                <span>{latestNews?.date}</span>
              </div>

              {/* Title */}

              <h3
                className="
                  mt-4
                  text-2xl
                  font-bold
                  leading-tight
                  tracking-tight
                  text-[#0F172A]
                  sm:text-3xl
                  lg:text-[2.1rem]
                "
              >
                {latestNews?.title}
              </h3>

              {/* Description */}

              <p
                className="
                  mt-5
                  max-w-xl
                  text-sm
                  leading-7
                  text-slate-600
                  sm:text-base
                "
              >
                {latestNews?.description}
              </p>

              {/* Divider */}

              <div className="my-7 h-px bg-slate-200/70" />

              {/* Read More */}

              <Link
                to={`/resources/news-updates/${latestNews?.slug}`}
                className="
                  group
                  inline-flex
                  w-fit
                  items-center
                  gap-3
                  rounded-xl
                  bg-[#087B5A]
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  shadow-[5px_6px_14px_rgba(8,123,90,0.20)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#0B3D2E]
                "
              >
                <span>Read More</span>

                <FaArrowRight
                  size={12}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>
          </div>
        </motion.article>

        {/* =====================================================
            VIEW ALL NEWS
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          viewport={{
            once: true,
          }}
          className="mt-8 text-center"
        >
          <Link
            to="/resources/news-updates"
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-xl
              border
              border-white
              bg-[#F3F9F6]
              px-7
              py-3.5
              text-sm
              font-bold
              text-[#087B5A]
              shadow-[6px_6px_14px_rgba(15,23,42,0.08),-6px_-6px_14px_rgba(255,255,255,0.9)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#087B5A]
              hover:text-white
            "
          >
            <span>See More News & Meetings</span>

            <FaArrowRight
              size={11}
              className="
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
