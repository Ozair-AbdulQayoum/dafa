import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

import Logo from "../assets/DAFA-New-Logo.jpg";

const navItems = [
  {
    title: "About DAFA",
    dropdown: true,
    items: [
      { title: "About DAFA", path: "/about" },
      { title: "Director Short Bio", path: "/director-bio" },
      { title: "Organization Chart", path: "/organization-chart" },
      { title: "Members", path: "/members" },
    ],
  },

  {
    title: "What We Do",
    dropdown: true,
    items: [
      { title: "Manual Demining Team", path: "/what-we-do/manual-demining" },
      {
        title: "Mechanical Demining Unit",
        path: "/what-we-do/mechanical-demining",
      },
      {
        title: "Improvised Explosive Devices",
        path: "/what-we-do/ied-response",
      },
      { title: "Explosive Ordnance Disposal", path: "/what-we-do/eod" },
      {
        title: "Explosive Ordnance Risk Education",
        path: "/what-we-do/risk-education",
      },
      {
        title: "Support to Natural Disaster Management",
        path: "/what-we-do/disaster-management",
      },
      { title: "Cash For Work", path: "/what-we-do/cash-for-work" },
    ],
  },

  {
    title: "Projects",
    path: "/projects",
  },

  {
    title: "Achievements",
    path: "/achievements",
  },

  {
    title: "Donors",
    path: "/donors",
  },

  {
    title: "Resources",
    dropdown: true,
    items: [
      { title: "Reports", path: "/resources/reports" },
      { title: "Stories", path: "/resources/stories" },
      { title: "News & Updates", path: "/resources/news-updates" },
    ],
  },
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header
      className="
sticky
top-0
z-50
bg-[#087B5A]
shadow-md
"
    >
      <div
        className="
mx-auto
flex
max-w-7xl
items-center
justify-between
px-6
py-3
"
      >
        {/* Logo */}

        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={Logo}
            alt="DAFA Logo"
            className="
h-12
w-12
rounded-full
bg-white
p-1
object-cover
"
          />

          <div>
            <h1
              className="
text-xl
font-bold
text-white
"
            >
              DAFA
            </h1>

            <p
              className="
whitespace-nowrap
text-[11px]
text-green-100
"
            >
              Demining Agency for Afghanistan
            </p>
          </div>
        </NavLink>

        {/* Desktop */}

        <nav className="hidden lg:block">
          <ul
            className="
flex
items-center
gap-6
text-[15px]
font-medium
"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `
whitespace-nowrap
text-white
transition

${isActive ? "border-b-2 border-white pb-1" : ""}

`
                }
              >
                Home
              </NavLink>
            </li>

            {navItems.map((item) => (
              <li
                key={item.title}
                className="
relative
group
"
              >
                {item.dropdown ? (
                  <>
                    <button
                      className="
flex
items-center
gap-1
whitespace-nowrap
text-white
transition
hover:text-green-200
"
                    >
                      {item.title}

                      <FaChevronDown size={10} />
                    </button>

                    {/* Dropdown */}

                    <div
                      className="
invisible
absolute
left-0
top-10
w-72
translate-y-2
rounded-xl
bg-white
p-2
opacity-0
shadow-xl
transition-all
duration-300
ease-out

group-hover:visible
group-hover:translate-y-0
group-hover:opacity-100
"
                    >
                      {item.items.map((sub) => (
                        <NavLink
                          key={sub.title}
                          to={sub.path}
                          className="
block
rounded-lg
px-4
py-3
text-sm
text-gray-700
transition
hover:bg-green-50
hover:text-[#087B5A]
"
                        >
                          {sub.title}
                        </NavLink>
                      ))}
                    </div>
                  </>
                ) : (
                  <NavLink
                    to={item.path}
                    className="
whitespace-nowrap
text-white
hover:text-green-200
"
                  >
                    {item.title}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}

        <button
          className="
hidden
rounded-lg
bg-white
px-5
py-2
text-sm
font-semibold
text-[#087B5A]
transition
hover:bg-green-50
lg:block
"
        >
          Contact Us
        </button>

        {/* Mobile */}

        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="
text-2xl
text-white
lg:hidden
"
        >
          {mobileMenu ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}
