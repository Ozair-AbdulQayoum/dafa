import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

import Logo from "../assets/DAFA-New-Logo.jpg";

// =====================================================
// MAIN NAVIGATION
// =====================================================

const navItems = [
  {
    title: "About",
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
      {
        title: "Manual Demining",
        path: "/what-we-do/manual-demining",
      },
      {
        title: "Mechanical Demining",
        path: "/what-we-do/mechanical-demining",
      },
      {
        title: "IED Response",
        path: "/what-we-do/ied-response",
      },
      {
        title: "Explosive Ordnance Disposal",
        path: "/what-we-do/eod",
      },
      {
        title: "Risk Education",
        path: "/what-we-do/eore",
      },
      {
        title: "Disaster Management",
        path: "/what-we-do/disaster-management",
      },
      {
        title: "Cash for Work",
        path: "/what-we-do/cash-for-work",
      },
    ],
  },

  {
    title: "Projects",
    path: "/projects",
  },

  {
    title: "Impact",
    path: "/achievements",
  },

  {
    title: "Resources",
    dropdown: true,
    items: [
      {
        title: "Reports",
        path: "/resources/reports",
      },
      {
        title: "Stories",
        path: "/resources/stories",
      },
      {
        title: "News & Updates",
        path: "/resources/news-updates",
      },
    ],
  },
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const closeMobileMenu = () => {
    setMobileMenu(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (title) => {
    setOpenDropdown((prev) => (prev === title ? null : title));
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header className="sticky top-0 z-[100] border-b border-white/10 bg-[#087B5A] shadow-md">
        <div className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between gap-5 px-5 sm:px-8 lg:px-10">
          {/* =================================================
              LOGO
          ================================================= */}

          <NavLink
            to="/"
            onClick={closeMobileMenu}
            className="flex shrink-0 items-center gap-3"
          >
            <img
              src={Logo}
              alt="DAFA Logo"
              className="h-11 w-11 rounded-full bg-white p-1 object-cover sm:h-12 sm:w-12"
            />

            <div className="min-w-0">
              <h1 className="text-lg font-bold leading-none tracking-tight text-white sm:text-xl">
                DAFA
              </h1>

              <p className="mt-1 max-w-[220px] truncate text-[9px] font-medium leading-none tracking-wide text-green-100 sm:text-[10px]">
                Demining Agency for Afghanistan
              </p>
            </div>
          </NavLink>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-5 text-[13px] font-medium xl:gap-6 xl:text-sm">
              {/* HOME */}

              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `
                    relative
                    whitespace-nowrap
                    py-2
                    text-white
                    transition-colors
                    duration-200
                    ${isActive ? "font-semibold" : "hover:text-green-100"}
                    `
                  }
                >
                  Home
                </NavLink>
              </li>

              {/* NAV ITEMS */}

              {navItems.map((item) => (
                <li key={item.title} className="group relative">
                  {item.dropdown ? (
                    <>
                      {/* DROPDOWN BUTTON */}

                      <button
                        type="button"
                        className="
                          flex
                          items-center
                          gap-1.5
                          whitespace-nowrap
                          py-2
                          text-white
                          transition-colors
                          duration-200
                          hover:text-green-100
                        "
                      >
                        {item.title}

                        <FaChevronDown
                          size={8}
                          className="
                            transition-transform
                            duration-300
                            group-hover:rotate-180
                          "
                        />
                      </button>

                      {/* DROPDOWN */}

                      <div
                        className="
                          invisible
                          absolute
                          left-1/2
                          top-full
                          mt-3
                          w-64
                          -translate-x-1/2
                          translate-y-2
                          rounded-xl
                          border
                          border-slate-100
                          bg-white
                          p-2
                          opacity-0
                          shadow-2xl
                          transition-all
                          duration-200
                          ease-out
                          group-hover:visible
                          group-hover:translate-y-0
                          group-hover:opacity-100
                        "
                      >
                        {item.items.map((sub) => (
                          <NavLink
                            key={sub.path}
                            to={sub.path}
                            className={({ isActive }) =>
                              `
                              block
                              rounded-lg
                              px-4
                              py-2.5
                              text-[13px]
                              font-medium
                              leading-5
                              transition-colors
                              duration-200
                              ${
                                isActive
                                  ? "bg-green-50 font-semibold text-[#087B5A]"
                                  : "text-slate-700 hover:bg-green-50 hover:text-[#087B5A]"
                              }
                              `
                            }
                          >
                            {sub.title}
                          </NavLink>
                        ))}
                      </div>
                    </>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `
                        whitespace-nowrap
                        py-2
                        text-white
                        transition-colors
                        duration-200
                        ${isActive ? "font-semibold" : "hover:text-green-100"}
                        `
                      }
                    >
                      {item.title}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* =================================================
              CONTACT CTA
          ================================================= */}

          <NavLink
            to="/contact"
            className="
              hidden
              shrink-0
              rounded-lg
              bg-[#F97316]
              px-5
              py-2.5
              text-[13px]
              font-bold
              leading-none
              text-white
              shadow-sm
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:bg-[#EA580C]
              hover:shadow-md
              lg:block
            "
          >
            Contact Us
          </NavLink>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={() => {
              setMobileMenu((prev) => !prev);
              setOpenDropdown(null);
            }}
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-lg
              text-xl
              text-white
              transition
              hover:bg-white/10
              active:bg-white/20
              lg:hidden
            "
            aria-label={mobileMenu ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenu}
          >
            {mobileMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      {mobileMenu && (
        <div className="fixed inset-0 z-[90] lg:hidden">
          {/* BACKDROP */}

          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMobileMenu}
            className="absolute inset-0 bg-black/40"
          />

          {/* MENU PANEL */}

          <div className="absolute left-0 right-0 top-[72px] max-h-[calc(100vh-72px)] overflow-y-auto bg-[#087B5A] shadow-2xl">
            <nav className="px-5 pb-8 pt-2">
              <ul className="flex flex-col">
                {/* HOME */}

                <li className="border-b border-white/10">
                  <NavLink
                    to="/"
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      `
                      block
                      py-4
                      text-[15px]
                      leading-6
                      text-white
                      ${isActive ? "font-bold text-green-100" : "font-medium"}
                      `
                    }
                  >
                    Home
                  </NavLink>
                </li>

                {/* NAV ITEMS */}

                {navItems.map((item) => (
                  <li key={item.title} className="border-b border-white/10">
                    {item.dropdown ? (
                      <>
                        {/* MOBILE DROPDOWN */}

                        <button
                          type="button"
                          onClick={() => toggleDropdown(item.title)}
                          className="
                            flex
                            w-full
                            items-center
                            justify-between
                            py-4
                            text-left
                            text-[15px]
                            font-medium
                            leading-6
                            text-white
                          "
                        >
                          <span>{item.title}</span>

                          <FaChevronDown
                            size={11}
                            className={`
                              transition-transform
                              duration-300
                              ${openDropdown === item.title ? "rotate-180" : ""}
                            `}
                          />
                        </button>

                        {/* SUBMENU */}

                        {openDropdown === item.title && (
                          <div className="mb-3 overflow-hidden rounded-lg bg-white/10">
                            {item.items.map((sub) => (
                              <NavLink
                                key={sub.path}
                                to={sub.path}
                                onClick={closeMobileMenu}
                                className={({ isActive }) =>
                                  `
                                  block
                                  border-b
                                  border-white/10
                                  px-4
                                  py-3
                                  text-[13px]
                                  leading-5
                                  last:border-0
                                  ${
                                    isActive
                                      ? "bg-white font-semibold text-[#087B5A]"
                                      : "font-medium text-white hover:bg-white/10"
                                  }
                                  `
                                }
                              >
                                {sub.title}
                              </NavLink>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <NavLink
                        to={item.path}
                        onClick={closeMobileMenu}
                        className={({ isActive }) =>
                          `
                          block
                          py-4
                          text-[15px]
                          leading-6
                          text-white
                          ${
                            isActive
                              ? "font-bold text-green-100"
                              : "font-medium"
                          }
                          `
                        }
                      >
                        {item.title}
                      </NavLink>
                    )}
                  </li>
                ))}

                {/* CONTACT */}

                <li className="pt-5">
                  <NavLink
                    to="/contact"
                    onClick={closeMobileMenu}
                    className="
                      block
                      w-full
                      rounded-lg
                      bg-[#F97316]
                      px-5
                      py-3.5
                      text-center
                      text-[14px]
                      font-bold
                      leading-5
                      text-white
                      transition-all
                      duration-200
                      hover:bg-[#EA580C]
                    "
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
