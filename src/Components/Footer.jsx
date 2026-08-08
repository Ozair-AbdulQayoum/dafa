import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

import logo from "../assets/DAFA-New-Logo.jpg";

export default function Footer() {
  return (
    <footer className="bg-[#0B3D2E] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="
            grid
            gap-12
            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          {/* Logo & About */}

          <div>
            <img
              src={logo}
              alt="DAFA Logo"
              className="
                mb-5
                h-20
                w-auto
                rounded-lg
                bg-white
                p-2
                object-contain
              "
            />

            <h2
              className="
                text-2xl
                font-bold
              "
            >
              DAFA
            </h2>

            <p
              className="
                mt-4
                leading-relaxed
                text-gray-300
              "
            >
              Demining Agency for Afghanistan working to remove explosive
              hazards and create safer communities across Afghanistan.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3
              className="
                text-lg
                font-bold
              "
            >
              Quick Links
            </h3>

            <ul
              className="
                mt-5
                space-y-3
                text-gray-300
              "
            >
              <li>Home</li>

              <li>About DAFA</li>

              <li>Programs</li>

              <li>Projects</li>

              <li>Resources</li>

              <li>Contact</li>
            </ul>
          </div>

          {/* Our Work */}

          <div>
            <h3
              className="
                text-lg
                font-bold
              "
            >
              Our Work
            </h3>

            <ul
              className="
                mt-5
                space-y-3
                text-gray-300
              "
            >
              <li>Mine Clearance</li>

              <li>Technical Survey</li>

              <li>Risk Education</li>

              <li>Victim Assistance</li>

              <li>Reports</li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3
              className="
                text-lg
                font-bold
              "
            >
              Contact
            </h3>

            <div
              className="
                mt-5
                space-y-4
                text-gray-300
              "
            >
              <p className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 text-[#F97316]" />
                Kabul, Afghanistan
              </p>

              <p className="flex gap-3">
                <FaEnvelope className="mt-1 text-[#F97316]" />
                info@dafa.af
              </p>

              <p className="flex gap-3">
                <FaPhone className="mt-1 text-[#F97316]" />
                +93 XXX XXX XXX
              </p>
            </div>
          </div>
        </motion.div>

        {/* Social Media */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          viewport={{
            once: true,
          }}
          className="
            mt-12
            flex
            justify-center
            gap-5
          "
        >
          <a
            href="#"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-white/10
              transition
              hover:bg-[#F97316]
            "
          >
            <FaFacebookF />
          </a>

          <a
            href="#"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-white/10
              transition
              hover:bg-[#F97316]
            "
          >
            <FaLinkedinIn />
          </a>

          <a
            href="#"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-white/10
              transition
              hover:bg-[#F97316]
            "
          >
            <FaYoutube />
          </a>
        </motion.div>
      </div>

      {/* Copyright */}

      <div
        className="
          border-t
          border-white/20
          py-5
          text-center
          text-sm
          text-gray-300
        "
      >
        © 2026 Demining Agency for Afghanistan. All Rights Reserved.
      </div>
    </footer>
  );
}
