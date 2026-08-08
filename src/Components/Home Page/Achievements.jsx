import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaUsers,
  FaProjectDiagram,
  FaMapMarkedAlt,
  FaMountain,
} from "react-icons/fa";

const achievements = [
  {
    icon: FaUsers,
    number: 12,
    suffix: "M+",
    title: "People Benefited",
    description: "Communities supported across Afghanistan",
  },

  {
    icon: FaProjectDiagram,
    number: 118,
    suffix: "+",
    title: "Projects",
    description: "Humanitarian demining projects completed",
  },

  {
    icon: FaMapMarkedAlt,
    number: 32,
    suffix: "+",
    title: "Provinces",
    description: "Operations across Afghanistan",
  },

  {
    icon: FaMountain,
    number: 323,
    suffix: "M+",
    title: "m² of Land Cleared",
    description: "Land made safe from explosive hazards",
  },
];

// Counter Animation Component

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0);

  const ref = React.useRef(null);

  const isVisible = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  useEffect(() => {
    if (isVisible) {
      let start = 0;

      const duration = 1500;
      const increment = value / (duration / 20);

      const timer = setInterval(() => {
        start += increment;

        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 20);

      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  return (
    <section
      className="
bg-gray-50
py-24
"
    >
      <div
        className="
mx-auto
max-w-7xl
px-6
"
      >
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
mb-14
max-w-3xl
text-center
"
        >
          <p
            className="
mb-3
text-sm
font-semibold
uppercase
tracking-[3px]
text-[#087B5A]
"
          >
            Our Achievements
          </p>

          <h2
            className="
text-3xl
font-bold
text-[#0F172A]
lg:text-5xl
"
          >
            36 Years of Impact
            <span
              className="
text-[#087B5A]
"
            >
              {" "}
              Across Afghanistan
            </span>
          </h2>

          <p
            className="
mt-5
text-gray-600
leading-relaxed
lg:text-lg
"
          >
            Through decades of humanitarian work, DAFA has helped protect
            communities by clearing explosive hazards, supporting affected
            populations, and creating safer environments across Afghanistan.
          </p>
        </motion.div>

        {/* Cards */}

        <div
          className="
grid
grid-cols-1
gap-6
sm:grid-cols-2
lg:grid-cols-4
"
        >
          {achievements.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
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
                className="
group
rounded-2xl
bg-white
p-8
text-center
shadow-sm
transition
duration-300
hover:-translate-y-3
hover:shadow-xl
"
              >
                <div
                  className="
mx-auto
mb-5
flex
h-14
w-14
items-center
justify-center
rounded-full
bg-green-50
text-2xl
text-[#087B5A]
transition
group-hover:bg-[#087B5A]
group-hover:text-white
"
                >
                  <Icon />
                </div>

                <h3
                  className="
text-4xl
font-extrabold
text-[#087B5A]
"
                >
                  <Counter value={item.number} suffix={item.suffix} />
                </h3>

                <h4
                  className="
mt-3
text-lg
font-semibold
text-gray-800
"
                >
                  {item.title}
                </h4>

                <p
                  className="
mt-2
text-sm
text-gray-500
"
                >
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Button */}

        <div
          className="
mt-12
text-center
"
        >
          <Link
            to="/achievements"
            className="
rounded-lg
bg-[#087B5A]
px-8
py-3.5
text-sm
font-semibold
text-white
transition
hover:bg-[#065c43]
hover:shadow-lg
"
          >
            Show More Achievements
          </Link>
        </div>
      </div>
    </section>
  );
}
