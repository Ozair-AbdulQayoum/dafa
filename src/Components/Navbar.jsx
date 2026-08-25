// src/Components/Navbar.jsx

import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

import Logo from "../assets/DAFA-New-Logo.jpg";
import { navItems, navbarData } from "./NavbarData";

export default function Navbar() {
  // =====================================================
  // STATE
  // =====================================================

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [desktopDropdown, setDesktopDropdown] = useState(null);

  const [mobileDropdown, setMobileDropdown] = useState(null);

  const desktopNavRef = useRef(null);

  // =====================================================
  // CLOSE EVERYTHING
  // =====================================================

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setDesktopDropdown(null);
    setMobileDropdown(null);
  };

  // =====================================================
  // MOBILE MENU
  // =====================================================

  const toggleMobileMenu = () => {
    setMobileMenuOpen((previous) => !previous);

    // Reset mobile dropdown when opening/closing
    setMobileDropdown(null);

    // Close desktop dropdown
    setDesktopDropdown(null);
  };

  // =====================================================
  // MOBILE DROPDOWN
  // =====================================================

  const toggleMobileDropdown = (title) => {
    setMobileDropdown((previous) => (previous === title ? null : title));
  };

  // =====================================================
  // DESKTOP DROPDOWN
  // =====================================================

  const toggleDesktopDropdown = (title) => {
    setDesktopDropdown((previous) => (previous === title ? null : title));
  };

  // =====================================================
  // CLOSE DESKTOP DROPDOWN WHEN CLICKING OUTSIDE
  // =====================================================

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        desktopNavRef.current &&
        !desktopNavRef.current.contains(event.target)
      ) {
        setDesktopDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // =====================================================
  // ESCAPE KEY
  // =====================================================

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeAllMenus();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // =====================================================
  // PREVENT BODY SCROLL WHEN MOBILE MENU IS OPEN
  // =====================================================

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // =====================================================
  // HANDLE MOBILE LINK
  // =====================================================

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
    setMobileDropdown(null);
    setDesktopDropdown(null);
  };

  // =====================================================
  // RENDER
  // =====================================================

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
            onClick={closeAllMenus}
            aria-label="DAFA Home"
            className="
              group
              flex
              shrink-0
              items-center
              gap-3
            "
          >
            {/* LOGO */}

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
                className="
                  h-full
                  w-full
                  rounded-full
                  object-cover
                "
              />
            </div>

            {/* BRAND */}

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

          <nav
            ref={desktopNavRef}
            className="hidden lg:block"
            aria-label="Main navigation"
          >
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
              {/* HOME */}

              <li>
                <NavLink
                  to={navbarData.home.path}
                  onClick={() => setDesktopDropdown(null)}
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

              {/* NAV ITEMS */}

              {navItems.map((item) => (
                <li key={item.title} className="relative">
                  {item.dropdown ? (
                    <>
                      {/* DROPDOWN BUTTON */}

                      <button
                        type="button"
                        aria-haspopup="true"
                        aria-expanded={desktopDropdown === item.title}
                        onClick={(event) => {
                          event.stopPropagation();

                          toggleDesktopDropdown(item.title);
                        }}
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
                          className={`
                            transition-transform
                            duration-300
                            ${
                              desktopDropdown === item.title
                                ? "rotate-180 text-[#FDBA74]"
                                : ""
                            }
                          `}
                        />
                      </button>

                      {/* DESKTOP DROPDOWN */}

                      <div
                        className={`
                          absolute
                          left-1/2
                          top-full
                          mt-3
                          w-64
                          -translate-x-1/2
                          rounded-xl
                          border
                          border-slate-100
                          border-t-2
                          border-t-[#F97316]
                          bg-white
                          p-2
                          shadow-2xl
                          transition-all
                          duration-200
                          ${
                            desktopDropdown === item.title
                              ? "visible translate-y-0 opacity-100"
                              : "invisible translate-y-2 opacity-0"
                          }
                        `}
                      >
                        {item.items.map((subItem) => (
                          <NavLink
                            key={subItem.path}
                            to={subItem.path}
                            onClick={() => setDesktopDropdown(null)}
                            className={({ isActive }) =>
                              `
                                flex
                                items-center
                                justify-between
                                rounded-lg
                                px-4
                                py-3
                                text-[13px]
                                font-medium
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
                              "
                            />
                          </NavLink>
                        ))}
                      </div>
                    </>
                  ) : (
                    <NavLink
                      to={item.path}
                      onClick={() => setDesktopDropdown(null)}
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
              DESKTOP CONTACT
          ================================================== */}

          <NavLink
            to={navbarData.contact.path}
            onClick={() => setDesktopDropdown(null)}
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
              text-white
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#EA580C]
              hover:shadow-lg
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
            onClick={toggleMobileMenu}
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
              lg:hidden
            "
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* =====================================================
          MOBILE NAVIGATION
      ====================================================== */}

      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="
            fixed
            inset-0
            z-[90]
            lg:hidden
          "
        >
          {/* =================================================
              BACKDROP

              IMPORTANT:
              z-0 keeps backdrop BEHIND the menu.
          ================================================== */}

          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={closeAllMenus}
            className="
              absolute
              inset-0
              z-0
              bg-black/45
              backdrop-blur-[2px]
            "
          />

          {/* =================================================
              MOBILE PANEL

              IMPORTANT:
              z-10 guarantees links are clickable.
          ================================================== */}

          <div
            className="
              absolute
              left-0
              right-0
              top-[72px]
              z-10
              max-h-[calc(100vh-72px)]
              overflow-y-auto
              border-t
              border-white/10
              bg-[#087B5A]
              shadow-2xl
            "
          >
            <nav
              className="
                mx-auto
                max-w-7xl
                px-5
                pb-8
                pt-2
                sm:px-8
              "
              aria-label="Mobile navigation"
            >
              <ul className="flex flex-col">
                {/* =================================================
                    HOME
                ================================================== */}

                <li className="border-b border-white/10">
                  <NavLink
                    to="/"
                    onClick={handleMobileLinkClick}
                    className={({ isActive }) =>
                      `
                        relative
                        block
                        py-4
                        text-[15px]
                        text-white
                        ${isActive ? "font-bold text-green-100" : "font-medium"}
                      `
                    }
                  >
                    Home
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
                  <li
                    key={item.title}
                    className="
                      border-b
                      border-white/10
                    "
                  >
                    {/* =================================================
                        DROPDOWN ITEM
                    ================================================== */}

                    {item.dropdown ? (
                      <>
                        <button
                          type="button"
                          onClick={(event) => {
                            event.preventDefault();
                            event.stopPropagation();

                            toggleMobileDropdown(item.title);
                          }}
                          aria-expanded={mobileDropdown === item.title}
                          className="
                            flex
                            w-full
                            items-center
                            justify-between
                            py-4
                            text-left
                            text-[15px]
                            font-medium
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
                                mobileDropdown === item.title
                                  ? "rotate-180 text-[#FDBA74]"
                                  : ""
                              }
                            `}
                          />
                        </button>

                        {/* =================================================
                            MOBILE SUBMENU
                        ================================================== */}

                        {mobileDropdown === item.title && (
                          <div
                            className="
                              mb-3
                              overflow-hidden
                              rounded-xl
                              border
                              border-white/10
                              border-l-2
                              border-l-[#F97316]
                              bg-[#063F30]
                            "
                          >
                            {item.items.map((subItem) => (
                              <NavLink
                                key={subItem.path}
                                to={subItem.path}
                                onClick={(event) => {
                                  /*
                                      IMPORTANT:
                                      Stop the click from
                                      reaching anything behind
                                      the submenu.
                                    */

                                  event.stopPropagation();

                                  handleMobileLinkClick();
                                }}
                                className={({ isActive }) =>
                                  `
                                      block
                                      border-b
                                      border-white/10
                                      px-4
                                      py-3.5
                                      text-[14px]
                                      last:border-0
                                      ${
                                        isActive
                                          ? "bg-white font-bold text-[#087B5A]"
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
                      /* =================================================
                         NORMAL MOBILE LINK
                      ================================================== */

                      <NavLink
                        to={item.path}
                        onClick={handleMobileLinkClick}
                        className={({ isActive }) =>
                          `
                            relative
                            block
                            py-4
                            text-[15px]
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
                    )}
                  </li>
                ))}

                {/* =================================================
                    CONTACT
                ================================================== */}

                <li className="pt-5">
                  <NavLink
                    to={navbarData.contact.path}
                    onClick={handleMobileLinkClick}
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
                      text-white
                      shadow-sm
                      transition-all
                      duration-300
                      hover:bg-[#EA580C]
                      hover:shadow-lg
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
