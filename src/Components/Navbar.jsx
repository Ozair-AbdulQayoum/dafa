import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

import Logo from "../assets/DAFA-New-Logo.jpg";
import { navItems, navbarData } from "./NavbarData";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // =====================================================
  // CLOSE MOBILE MENU
  // =====================================================

  const closeMobileMenu = () => {
    setMobileMenu(false);
    setOpenDropdown(null);
  };

  // =====================================================
  // TOGGLE MOBILE DROPDOWN
  // =====================================================

  const toggleDropdown = (title) => {
    setOpenDropdown((prev) => (prev === title ? null : title));
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header
        className="
          sticky
          top-0
          z-[100]
          border-b
          border-white/10
          bg-[#087B5A]
          shadow-md
        "
      >
        <div
          className="
            mx-auto
            flex
            h-[72px]
            w-full
            max-w-7xl
            items-center
            justify-between
            gap-5
            px-5
            sm:px-8
            lg:px-10
          "
        >
          {/* =================================================
              LOGO
          ================================================== */}

          <NavLink
            to="/"
            onClick={closeMobileMenu}
            aria-label="DAFA Home"
            className="
              group
              flex
              shrink-0
              items-center
              gap-3
            "
          >
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                overflow-hidden
                rounded-full
                bg-white
                p-1
                shadow-sm
                transition-transform
                duration-300
                group-hover:scale-105
                sm:h-[52px]
                sm:w-[52px]
              "
            >
              <img
                src={Logo}
                alt="DAFA Logo"
                className="h-full w-full rounded-full object-cover"
              />
            </div>

            <div className="min-w-0">
              <h1
                className="
                  text-lg
                  font-bold
                  leading-none
                  tracking-tight
                  text-white
                  sm:text-xl
                "
              >
                {navbarData.brand.name}
              </h1>

              <p
                className="
                  mt-1
                  max-w-[220px]
                  truncate
                  text-[9px]
                  font-medium
                  leading-none
                  tracking-wide
                  text-green-100
                  sm:text-[10px]
                "
              >
                {navbarData.brand.description}
              </p>
            </div>
          </NavLink>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <nav className="hidden lg:block" aria-label="Main navigation">
            <ul
              className="
                flex
                items-center
                gap-5
                text-[13px]
                font-medium
                xl:gap-6
                xl:text-sm
              "
            >
              {/* =================================================
                  HOME
              ================================================== */}

              <li>
                <NavLink
                  to={navbarData.home.path}
                  className={({ isActive }) =>
                    `
                    group
                    relative
                    flex
                    items-center
                    whitespace-nowrap
                    py-2
                    text-white
                    transition-colors
                    duration-200
                    ${isActive ? "font-semibold" : "hover:text-green-100"}
                    `
                  }
                >
                  {navbarData.home.title}

                  <span
                    className="
                      absolute
                      -bottom-0.5
                      left-0
                      h-[2px]
                      w-full
                      origin-left
                      scale-x-0
                      rounded-full
                      bg-[#F97316]
                      transition-transform
                      duration-300
                      group-hover:scale-x-100
                    "
                  />
                </NavLink>
              </li>

              {/* =================================================
                  NAV ITEMS
              ================================================== */}

              {navItems.map((item) => (
                <li key={item.title} className="group relative">
                  {item.dropdown ? (
                    <>
                      {/* DROPDOWN BUTTON */}

                      <button
                        type="button"
                        aria-haspopup="true"
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

                      {/* DROPDOWN MENU */}

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
                          overflow-hidden
                          rounded-xl
                          border
                          border-slate-100
                          border-t-2
                          border-t-[#F97316]
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
                        {item.items.map((subItem) => (
                          <NavLink
                            key={subItem.path}
                            to={subItem.path}
                            className={({ isActive }) =>
                              `
                              group/item
                              flex
                              items-center
                              justify-between
                              rounded-lg
                              px-4
                              py-2.5
                              text-[13px]
                              font-medium
                              leading-5
                              transition-all
                              duration-200
                              ${
                                isActive
                                  ? "bg-green-50 font-semibold text-[#087B5A]"
                                  : "text-slate-700 hover:bg-green-50 hover:text-[#087B5A]"
                              }
                              `
                            }
                          >
                            <span>{subItem.title}</span>

                            <span
                              className="
                                h-1
                                w-1
                                rounded-full
                                bg-[#F97316]
                                opacity-0
                                transition-opacity
                                duration-200
                                group-hover/item:opacity-100
                              "
                            />
                          </NavLink>
                        ))}
                      </div>
                    </>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `
                        group
                        relative
                        flex
                        items-center
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

                      <span
                        className="
                          absolute
                          -bottom-0.5
                          left-0
                          h-[2px]
                          w-full
                          origin-left
                          scale-x-0
                          rounded-full
                          bg-[#F97316]
                          transition-transform
                          duration-300
                          group-hover:scale-x-100
                        "
                      />
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* =================================================
              CONTACT CTA
          ================================================== */}

          <NavLink
            to={navbarData.contact.path}
            className="
              hidden
              shrink-0
              items-center
              justify-center
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
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#EA580C]
              hover:shadow-lg
              focus:outline-none
              focus:ring-2
              focus:ring-[#FDBA74]
              focus:ring-offset-2
              focus:ring-offset-[#087B5A]
              lg:flex
            "
          >
            {navbarData.contact.title}
          </NavLink>

          {/* =================================================
              MOBILE BUTTON
          ================================================== */}

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
              transition-all
              duration-200
              hover:bg-white/10
              active:scale-95
              active:bg-white/20
              lg:hidden
            "
            aria-label={
              mobileMenu ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileMenu}
            aria-controls="mobile-navigation"
          >
            {mobileMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      {mobileMenu && (
        <div id="mobile-navigation" className="fixed inset-0 z-[90] lg:hidden">
          {/* BACKDROP */}

          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMobileMenu}
            className="
              absolute
              inset-0
              cursor-default
              bg-black/45
              backdrop-blur-[2px]
            "
          />

          {/* MENU PANEL */}

          <div
            className="
              absolute
              left-0
              right-0
              top-[72px]
              max-h-[calc(100vh-72px)]
              overflow-y-auto
              border-t
              border-white/10
              bg-[#087B5A]
              shadow-2xl
            "
          >
            <nav className="px-5 pb-8 pt-2" aria-label="Mobile navigation">
              <ul className="flex flex-col">
                {/* =================================================
                    HOME
                ================================================== */}

                <li className="border-b border-white/10">
                  <NavLink
                    to={navbarData.home.path}
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      `
                      relative
                      block
                      py-4
                      text-[15px]
                      leading-6
                      text-white
                      ${isActive ? "font-bold text-green-100" : "font-medium"}
                      `
                    }
                  >
                    {navbarData.home.title}

                    <span
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-[2px]
                        w-8
                        rounded-full
                        bg-[#F97316]
                      "
                    />
                  </NavLink>
                </li>

                {/* =================================================
                    NAV ITEMS
                ================================================== */}

                {navItems.map((item) => (
                  <li key={item.title} className="border-b border-white/10">
                    {item.dropdown ? (
                      <>
                        {/* MOBILE DROPDOWN */}

                        <button
                          type="button"
                          onClick={() => toggleDropdown(item.title)}
                          aria-expanded={openDropdown === item.title}
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
                              ${
                                openDropdown === item.title
                                  ? "rotate-180 text-[#FDBA74]"
                                  : ""
                              }
                            `}
                          />
                        </button>

                        {/* SUBMENU */}

                        {openDropdown === item.title && (
                          <div
                            className="
                              mb-3
                              overflow-hidden
                              rounded-lg
                              border
                              border-white/10
                              border-l-2
                              border-l-[#F97316]
                              bg-black/10
                            "
                          >
                            {item.items.map((subItem) => (
                              <NavLink
                                key={subItem.path}
                                to={subItem.path}
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
                                {subItem.title}
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
                          relative
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

                        <span
                          className={`
                            absolute
                            bottom-0
                            left-0
                            h-[2px]
                            w-8
                            rounded-full
                            bg-[#F97316]
                            ${item.path ? "" : "hidden"}
                          `}
                        />
                      </NavLink>
                    )}
                  </li>
                ))}

                {/* =================================================
                    CONTACT
                ================================================== */}

                <li className="pt-5">
                  <NavLink
                    to={navbarData.contact.path}
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
                      shadow-sm
                      transition-all
                      duration-300
                      hover:bg-[#EA580C]
                      hover:shadow-lg
                      active:scale-[0.99]
                    "
                  >
                    {navbarData.contact.title}
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
