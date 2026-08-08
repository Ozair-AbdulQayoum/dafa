import React from "react";
import { motion } from "framer-motion";
import { FaFilePdf, FaArrowRight, FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

const reports = [
  {
    title: "Annual Report",
    year: "2025",
    category: "Organization Report",
  },

  {
    title: "Humanitarian Demining Report",
    year: "2026",
    category: "Project Report",
  },

  {
    title: "Monthly Activity Update",
    year: "2026",
    category: "Update Report",
  },

  {
    title: "Donor Progress Report",
    year: "2026",
    category: "Donor Report",
  },
];

export default function Reports() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

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
            mx-auto
            mb-16
            max-w-3xl
            text-center
          "
        >
          <p
            className="
              text-sm
              font-bold
              uppercase
              tracking-[3px]
              text-[#087B5A]
            "
          >
            Transparency
          </p>

          <h2
            className="
              mt-4
              text-3xl
              font-bold
              text-[#0F172A]
              lg:text-5xl
            "
          >
            Reports & Publications
          </h2>

          <p
            className="
              mt-5
              text-gray-600
              lg:text-lg
            "
          >
            Access DAFA reports, publications, and updates to understand our
            humanitarian activities and impact.
          </p>
        </motion.div>

        {/* Report Cards */}

        <div
          className="
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          {reports.map((report, index) => (
            <motion.div
              key={report.title}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -10,
              }}
              className="
                rounded-2xl
                border
                border-gray-100
                bg-white
                p-6
                shadow-sm
                transition
                hover:shadow-xl
              "
            >
              {/* PDF Icon */}

              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-xl
                  bg-red-50
                  text-3xl
                  text-red-600
                "
              >
                <FaFilePdf />
              </div>

              <h3
                className="
                  mt-6
                  text-xl
                  font-bold
                  text-[#0F172A]
                "
              >
                {report.title}
              </h3>

              <p
                className="
                  mt-3
                  text-sm
                  text-gray-500
                "
              >
                {report.category}
              </p>

              <div
                className="
                  mt-5
                  flex
                  items-center
                  justify-between
                "
              >
                <span
                  className="
                    rounded-full
                    bg-green-50
                    px-4
                    py-1
                    text-sm
                    font-semibold
                    text-[#087B5A]
                  "
                >
                  {report.year}
                </span>

                <button
                  className="
                    text-[#087B5A]
                    transition
                    hover:scale-110
                  "
                >
                  <FaDownload />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="
            mt-14
            text-center
          "
        >
          <Link
            to="/reports"
            className="
              inline-flex
              items-center
              gap-3
              rounded-xl
              bg-[#087B5A]
              px-8
              py-4
              font-semibold
              text-white
              transition
              hover:bg-[#066347]
            "
          >
            View All Reports
            <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
