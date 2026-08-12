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
      {
        title: "Manual Demining Team",
        path: "/what-we-do/manual-demining",
      },
      {
        title: "Mechanical Demining Unit",
        path: "/what-we-do/mechanical-demining",
      },
      {
        title: "Improvised Explosive Devices",
        path: "/what-we-do/ied-response",
      },
      {
        title: "Explosive Ordnance Disposal",
        path: "/what-we-do/eod",
      },
      {
        title: "Explosive Ordnance Risk Education",
        path: "/what-we-do/eore",
      },
      {
        title: "Support to Natural Disaster Management",
        path: "/what-we-do/disaster-management",
      },
      {
        title: "Cash For Work",
        path: "/what-we-do/cash-for-work",
      },
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
    title: "Knowledge Center",
    path: "/knowledge-center",
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
      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-[100] bg-[#087B5A] shadow-md">
        <div className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          {/* ================= LOGO ================= */}
          <NavLink
            to="/"
            onClick={closeMobileMenu}
            className="flex min-w-0 shrink-0 items-center gap-3"
          >
            <img
              src={Logo}
              alt="DAFA Logo"
              className="h-11 w-11 rounded-full bg-white p-1 object-cover sm:h-12 sm:w-12"
            />

            <div className="min-w-0">
              <h1 className="text-lg font-bold leading-tight text-white sm:text-xl">
                DAFA
              </h1>

              <p className="max-w-[220px] truncate text-[9px] leading-tight text-green-100 sm:max-w-none sm:text-[11px]">
                Demining Agency for Afghanistan
              </p>
            </div>
          </NavLink>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-5 text-[15px] font-medium xl:gap-6">
              {/* HOME */}
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `whitespace-nowrap text-white transition ${
                      isActive
                        ? "border-b-2 border-white pb-1"
                        : "hover:text-green-100"
                    }`
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
                        className="flex items-center gap-2 whitespace-nowrap text-white transition hover:text-green-100"
                      >
                        {item.title}

                        <FaChevronDown
                          size={10}
                          className="transition-transform duration-300 group-hover:rotate-180"
                        />
                      </button>

                      {/* DROPDOWN */}
                      <div className="invisible absolute left-0 top-8 w-72 translate-y-2 rounded-xl bg-white p-2 opacity-0 shadow-xl transition-all duration-300 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                        {item.items.map((sub) => (
                          <NavLink
                            key={sub.path}
                            to={sub.path}
                            className={({ isActive }) =>
                              `block rounded-lg px-4 py-3 text-sm transition ${
                                isActive
                                  ? "bg-green-50 font-semibold text-[#087B5A]"
                                  : "text-gray-700 hover:bg-green-50 hover:text-[#087B5A]"
                              }`
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
                        `whitespace-nowrap text-white transition ${
                          isActive
                            ? "border-b-2 border-white pb-1"
                            : "hover:text-green-100"
                        }`
                      }
                    >
                      {item.title}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* ================= DESKTOP CONTACT ================= */}
          <NavLink
            to="/contact"
            className="hidden shrink-0 rounded-lg bg-white px-5 py-2 text-sm font-semibold text-[#087B5A] transition hover:bg-green-50 lg:block"
          >
            Contact Us
          </NavLink>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            type="button"
            onClick={() => {
              setMobileMenu((prev) => !prev);
              setOpenDropdown(null);
            }}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-2xl text-white transition hover:bg-white/10 active:bg-white/20 lg:hidden"
            aria-label={mobileMenu ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenu}
          >
            {mobileMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {mobileMenu && (
        <div className="fixed inset-0 z-[90] lg:hidden">
          {/* BACKDROP */}
          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMobileMenu}
            className="absolute inset-0 bg-black/40"
          />

          {/* MOBILE MENU PANEL */}
          <div className="absolute left-0 right-0 top-[72px] max-h-[calc(100vh-72px)] overflow-y-auto bg-[#087B5A] shadow-2xl">
            <nav className="px-5 pb-8 pt-3">
              <ul className="flex flex-col">
                {/* HOME */}
                <li className="border-b border-white/10">
                  <NavLink
                    to="/"
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      `block py-4 text-base font-medium text-white ${
                        isActive ? "font-bold text-green-100" : ""
                      }`
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
                        {/* MOBILE DROPDOWN BUTTON */}
                        <button
                          type="button"
                          onClick={() => toggleDropdown(item.title)}
                          className="flex w-full items-center justify-between py-4 text-left text-base font-medium text-white"
                        >
                          <span>{item.title}</span>

                          <FaChevronDown
                            size={13}
                            className={`transition-transform duration-300 ${
                              openDropdown === item.title ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {/* MOBILE SUBMENU */}
                        {openDropdown === item.title && (
                          <div className="mb-3 overflow-hidden rounded-lg bg-white/10">
                            {item.items.map((sub) => (
                              <NavLink
                                key={sub.path}
                                to={sub.path}
                                onClick={closeMobileMenu}
                                className={({ isActive }) =>
                                  `block border-b border-white/10 px-4 py-3 text-sm last:border-0 ${
                                    isActive
                                      ? "bg-white font-semibold text-[#087B5A]"
                                      : "text-white"
                                  }`
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
                          `block py-4 text-base font-medium text-white ${
                            isActive ? "font-bold text-green-100" : ""
                          }`
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
                    className="block w-full rounded-lg bg-white px-5 py-3.5 text-center text-sm font-bold text-[#087B5A] transition active:bg-green-50"
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
