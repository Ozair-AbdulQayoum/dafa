import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img1 from "../../assets/img.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}

      <motion.img
        src={img1}
        alt="Humanitarian Demining"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2,
          ease: "easeOut",
        }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* =====================================================
          OVERLAY
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#052E23]/95
          via-[#087B5A]/80
          via-65%
          to-transparent
        "
      />

      {/* Subtle bottom overlay */}

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#052E23]/30 to-transparent" />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

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
          py-16
          sm:px-8
          lg:px-10
        "
      >
        {/* =================================================
            LEFT CONTENT
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: -45,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            max-w-3xl
            -translate-y-12
            text-white
            sm:-translate-y-14
            lg:-translate-y-16
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
              delay: 0.15,
            }}
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-[2px] w-10 rounded-full bg-[#D4AF37]" />

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#D4AF37] sm:text-sm">
              Since 1990
            </span>
          </motion.div>

          {/* 36 Years */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.25,
            }}
            className="flex items-end gap-3 sm:gap-4"
          >
            <h1
              className="
                text-[96px]
                font-black
                leading-[0.75]
                tracking-[-0.06em]
                text-[#D4AF37]
                sm:text-[125px]
                md:text-[145px]
                lg:text-[170px]
              "
            >
              36
            </h1>

            <span
              className="
                mb-3
                text-3xl
                font-semibold
                tracking-tight
                text-white
                sm:mb-4
                sm:text-4xl
                lg:mb-5
                lg:text-5xl
              "
            >
              Years
            </span>
          </motion.div>

          {/* Main Heading */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.75,
              delay: 0.4,
            }}
            className="
              mt-7
              text-4xl
              font-extrabold
              leading-[0.95]
              tracking-tight
              sm:text-5xl
              md:text-6xl
              lg:text-[4.25rem]
            "
          >
            HUMANITARIAN
            <span className="mt-2 block text-green-300">DEMINING</span>
          </motion.h2>

          {/* Slogan */}

          <motion.h3
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.5,
            }}
            className="
              mt-6
              text-lg
              font-semibold
              tracking-wide
              text-white
              sm:text-xl
              lg:text-2xl
            "
          >
            Removing Hazards, Saving Lives
          </motion.h3>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.6,
            }}
            className="
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-white/80
              sm:text-base
              sm:leading-8
              lg:text-lg
            "
          >
            For 36 years, DAFA has worked to protect communities across
            Afghanistan by clearing contaminated land, reducing the threat of
            mines and unexploded ordnance, and supporting a safer future for
            families.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.7,
            }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            {/* View Projects */}

            <Link
              to="/projects"
              className="
                group
                inline-flex
                items-center
                justify-center
                rounded-xl
                bg-white
                px-7
                py-3.5
                text-sm
                font-bold
                text-[#087B5A]
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#D4AF37]
                hover:text-white
                hover:shadow-xl
              "
            >
              View Projects
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            {/* Contact */}

            <Link
              to="/contact"
              className="
                inline-flex
                items-center
                justify-center
                rounded-xl
                border
                border-white/60
                bg-white/5
                px-7
                py-3.5
                text-sm
                font-bold
                text-white
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-white
                hover:bg-white
                hover:text-[#087B5A]
                hover:shadow-xl
              "
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
