import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img1 from "../../assets/img.png";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        py-24
        lg:py-32
      "
    >
      {/* Background Image */}

      <motion.img
        src={img1}
        alt="Humanitarian Demining"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2,
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

      {/* Overlay */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#052E23]/95
          via-[#087B5A]/80
          to-transparent
        "
      />

      {/* Content */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          items-center
          px-6
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            max-w-3xl
            text-white
          "
        >
          {/* Since 1990 */}

          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              mb-3
              text-sm
              font-semibold
              uppercase
              tracking-[2px]
              text-[#D4AF37]
            "
          >
            Since 1990
          </motion.div>

          {/* 36 Years */}

          <div
            className="
              flex
              items-end
              gap-3
            "
          >
            <motion.h1
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
              }}
              className="
                text-[130px]
                font-black
                leading-[0.8]
                tracking-tight
                text-[#D4AF37]
                lg:text-[170px]
              "
            >
              36
            </motion.h1>

            <span
              className="
                mb-5
                text-4xl
                font-semibold
                text-white
                lg:text-5xl
              "
            >
              Years
            </span>
          </div>

          {/* Heading */}

          <h2
            className="
              mt-6
              text-4xl
              font-bold
              leading-tight
              tracking-wide
              lg:text-6xl
            "
          >
            HUMANITARIAN
            <span
              className="
                block
                text-green-300
              "
            >
              DEMINING
            </span>
          </h2>

          {/* Slogan */}

          <h3
            className="
              mt-6
              text-xl
              font-semibold
              lg:text-3xl
            "
          >
            Removing Hazards, Saving Lives
          </h3>

          {/* Description */}

          <p
            className="
              mt-5
              max-w-2xl
              text-base
              leading-relaxed
              text-gray-100
              lg:text-lg
            "
          >
            For 36 years, DAFA has worked to protect communities across
            Afghanistan by clearing contaminated land, reducing the threat of
            mines and unexploded ordnance, and supporting a safer future for
            families.
          </p>

          {/* Buttons */}

          <div
            className="
              mt-8
              flex
              flex-wrap
              gap-4
            "
          >
            <Link
              to="/projects"
              className="
                rounded-lg
                bg-white
                px-7
                py-3.5
                text-sm
                font-semibold
                text-[#087B5A]
                transition
                hover:bg-green-100
                hover:shadow-xl
              "
            >
              View Project
            </Link>

            <Link
              to="/contact"
              className="
                rounded-lg
                border
                border-white
                px-7
                py-3.5
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-white
                hover:text-[#087B5A]
              "
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
