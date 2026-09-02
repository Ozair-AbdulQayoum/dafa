import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown, FaArrowRight } from "react-icons/fa";

import Logo from "../assets/DAFA-New-Logo.jpg";
import { navItems, navbarData } from "./NavbarData";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const desktopNavRef = useRef(null);

  /* =========================================================
     CLOSE ALL MENUS
  ========================================================= */

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setDesktopDropdown(null);
    setMobileDropdown(null);
  };

  /* =========================================================
     MOBILE MENU
  ========================================================= */

  const toggleMobileMenu = () => {
    setMobileMenuOpen((previous) => !previous);

    setDesktopDropdown(null);
    setMobileDropdown(null);
  };

  /* =========================================================
     MOBILE DROPDOWN
  ========================================================= */

  const toggleMobileDropdown = (title) => {
    setMobileDropdown((previous) => (previous === title ? null : title));
  };

  /* =========================================================
     DESKTOP DROPDOWN
  ========================================================= */

  const toggleDesktopDropdown = (title) => {
    setDesktopDropdown((previous) => (previous === title ? null : title));
  };

  /* =========================================================
     CLOSE DESKTOP DROPDOWN OUTSIDE
  ========================================================= */

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

  /* =========================================================
     ESCAPE KEY
  ========================================================= */

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

  /* =========================================================
     PREVENT BODY SCROLL WHEN MOBILE MENU IS OPEN
  ========================================================= */

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  /* =========================================================
     MOBILE LINK CLICK
  ========================================================= */

  const handleMobileLinkClick = () => {
    closeAllMenus();
  };

  /* =========================================================
     DESKTOP LINK CLASS
  ========================================================= */

  const desktopLinkClass = ({ isActive }) => `
    group
    relative
    flex
    items-center
    gap-2
    whitespace-nowrap
    rounded-xl
    px-3
    py-2.5
    text-[13px]
    font-medium
    transition-all
    duration-300
    xl:text-sm

    ${
      isActive
        ? `
          bg-white/10
          font-semibold
          text-white
          shadow-[inset_2px_2px_5px_rgba(0,0,0,0.10)]
        `
        : `
          text-white/85
          hover:bg-white/10
          hover:text-white
        `
    }
  `;

  return (
    <>
      {/* =====================================================
          FIXED NAVBAR
      ====================================================== */}

      <header
        className="
          fixed
          left-0
          right-0
          top-0
          z-[100]
          w-full
          bg-transparent
          px-3
          pt-3
          font-[Poppins]
          sm:px-5
          lg:px-7
        "
      >
        {/* ===================================================
            NAVBAR GLASS CONTAINER
        ==================================================== */}

        <div
          className="
            mx-auto
            flex
            h-[70px]
            w-full
            max-w-7xl
            items-center
            justify-between
            gap-4
            rounded-2xl
            border
            border-white/15
            bg-[#087B5A]/40
            px-4
            backdrop-blur-xl
            backdrop-saturate-150
            shadow-[0_8px_30px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.08)]
            sm:px-6
            lg:px-7
            xl:gap-6
          "
        >
          {/* =================================================
              LOGO + BRAND
          ================================================== */}

          <NavLink
            to="/"
            onClick={closeAllMenus}
            aria-label="DAFA Home"
            className="
              group
              flex
              min-w-0
              shrink-0
              items-center
              gap-3
            "
          >
            {/* CIRCULAR LOGO */}

            <div
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                overflow-hidden
                rounded-full
                border-2
                border-white/90
                bg-white
                p-[2px]
                shadow-[0_5px_15px_rgba(0,0,0,0.22)]
                transition-all
                duration-300
                group-hover:scale-105
                group-hover:border-white
                sm:h-12
                sm:w-12
              "
            >
              <img
                src={Logo}
                alt="DAFA logo"
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
              <div
                className="
                  text-lg
                  font-extrabold
                  leading-none
                  tracking-[-0.02em]
                  text-white
                  drop-shadow-sm
                  sm:text-xl
                "
              >
                {navbarData.brand.name}
              </div>

              <div
                className="
                  mt-1
                  hidden
                  max-w-[220px]
                  truncate
                  text-[9px]
                  font-medium
                  leading-none
                  tracking-[0.02em]
                  text-white/65
                  sm:block
                  sm:text-[10px]
                "
              >
                {navbarData.brand.description}
              </div>
            </div>
          </NavLink>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <nav
            ref={desktopNavRef}
            className="hidden xl:flex"
            aria-label="Main navigation"
          >
            <ul
              className="
                flex
                items-center
                gap-1
                rounded-2xl
                border
                border-white/10
                bg-[#087B5A]/20
                p-1.5
                shadow-[inset_1px_1px_5px_rgba(0,0,0,0.10),inset_-1px_-1px_5px_rgba(255,255,255,0.04)]
                2xl:gap-1.5
              "
            >
              {/* =================================================
                  HOME
              ================================================== */}

              <li>
                <NavLink
                  to={navbarData.home.path}
                  onClick={() => setDesktopDropdown(null)}
                  className={desktopLinkClass}
                >
                  {({ isActive }) => (
                    <>
                      {navbarData.home.title}

                      <span
                        className={`
                          absolute
                          bottom-1
                          left-1/2
                          h-[2px]
                          -translate-x-1/2
                          rounded-full
                          bg-[#F97316]
                          transition-all
                          duration-300
                          ${isActive ? "w-5 opacity-100" : "w-0 opacity-0"}
                        `}
                      />
                    </>
                  )}
                </NavLink>
              </li>

              {/* =================================================
                  NAV ITEMS
              ================================================== */}

              {navItems.map((item) => (
                <li key={item.title} className="relative">
                  {item.dropdown ? (
                    <>
                      {/* DROPDOWN BUTTON */}

                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();

                          toggleDesktopDropdown(item.title);
                        }}
                        aria-haspopup="menu"
                        aria-expanded={desktopDropdown === item.title}
                        className={`
                          group
                          relative
                          flex
                          items-center
                          gap-2
                          whitespace-nowrap
                          rounded-xl
                          px-3
                          py-2.5
                          text-[13px]
                          font-medium
                          transition-all
                          duration-300
                          focus:outline-none
                          focus-visible:ring-2
                          focus-visible:ring-[#FDBA74]
                          xl:text-sm

                          ${
                            desktopDropdown === item.title
                              ? `
                                bg-white/10
                                text-white
                                shadow-[inset_2px_2px_5px_rgba(0,0,0,0.10)]
                              `
                              : `
                                text-white/85
                                hover:bg-white/10
                                hover:text-white
                              `
                          }
                        `}
                      >
                        {item.title}

                        <FaChevronDown
                          size={8}
                          aria-hidden="true"
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

                        <span
                          className={`
                            absolute
                            bottom-1
                            left-1/2
                            h-[2px]
                            -translate-x-1/2
                            rounded-full
                            bg-[#F97316]
                            transition-all
                            duration-300
                            ${
                              desktopDropdown === item.title
                                ? "w-5 opacity-100"
                                : "w-0 opacity-0"
                            }
                          `}
                        />
                      </button>

                      {/* =================================================
                          DESKTOP DROPDOWN
                      ================================================== */}

                      <div
                        className={`
                          absolute
                          left-1/2
                          top-full
                          z-50
                          mt-3
                          w-64
                          -translate-x-1/2
                          origin-top
                          rounded-2xl
                          border
                          border-white/15
                          bg-[#087B5A]/90
                          p-2
                          backdrop-blur-2xl
                          shadow-[0_20px_50px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.08)]
                          transition-all
                          duration-200
                          ${
                            desktopDropdown === item.title
                              ? `
                                visible
                                translate-y-0
                                scale-100
                                opacity-100
                              `
                              : `
                                invisible
                                translate-y-2
                                scale-[0.97]
                                opacity-0
                              `
                          }
                        `}
                        role="menu"
                        aria-hidden={desktopDropdown !== item.title}
                      >
                        {item.items.map((subItem) => (
                          <NavLink
                            key={subItem.path}
                            to={subItem.path}
                            onClick={() => setDesktopDropdown(null)}
                            role="menuitem"
                            tabIndex={desktopDropdown === item.title ? 0 : -1}
                            className={({ isActive }) =>
                              `
                                group/item
                                flex
                                items-center
                                justify-between
                                rounded-xl
                                px-4
                                py-3
                                text-[13px]
                                transition-all
                                duration-200
                                focus:outline-none
                                focus-visible:ring-2
                                focus-visible:ring-[#FDBA74]

                                ${
                                  isActive
                                    ? `
                                      bg-white/15
                                      font-semibold
                                      text-white
                                    `
                                    : `
                                      font-medium
                                      text-white/80
                                      hover:bg-white/10
                                      hover:text-white
                                    `
                                }
                              `
                            }
                          >
                            <span>{subItem.title}</span>

                            <FaArrowRight
                              size={9}
                              aria-hidden="true"
                              className="
                                text-[#F97316]
                                opacity-0
                                transition-all
                                duration-200
                                group-hover/item:translate-x-1
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
                      onClick={() => setDesktopDropdown(null)}
                      className={desktopLinkClass}
                    >
                      {({ isActive }) => (
                        <>
                          {item.title}

                          <span
                            className={`
                              absolute
                              bottom-1
                              left-1/2
                              h-[2px]
                              -translate-x-1/2
                              rounded-full
                              bg-[#F97316]
                              transition-all
                              duration-300
                              ${isActive ? "w-5 opacity-100" : "w-0 opacity-0"}
                            `}
                          />
                        </>
                      )}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* =================================================
              CONTACT BUTTON
          ================================================== */}

          <NavLink
            to={navbarData.contact.path}
            onClick={() => setDesktopDropdown(null)}
            className="
              group
              hidden
              min-h-[44px]
              shrink-0
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-white/10
              bg-[#F97316]/95
              px-5
              text-[13px]
              font-bold
              text-white
              shadow-[0_5px_15px_rgba(0,0,0,0.18)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#EA580C]
              hover:shadow-[0_8px_20px_rgba(0,0,0,0.24)]
              active:translate-y-0
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#FDBA74]
              xl:flex
            "
          >
            {navbarData.contact.title}

            <FaArrowRight
              size={10}
              aria-hidden="true"
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </NavLink>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              border-white/15
              bg-white/5
              text-lg
              text-white
              backdrop-blur-xl
              shadow-[0_5px_15px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.08)]
              transition-all
              duration-200
              hover:bg-white/10
              hover:text-[#FDBA74]
              active:scale-95
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-white/60
              xl:hidden
            "
          >
            {mobileMenuOpen ? (
              <FaTimes aria-hidden="true" />
            ) : (
              <FaBars aria-hidden="true" />
            )}
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
            font-[Poppins]
            xl:hidden
          "
        >
          {/* BACKDROP */}

          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={closeAllMenus}
            className="
              absolute
              inset-0
              bg-black/45
              backdrop-blur-sm
            "
          />

          {/* =================================================
              MOBILE PANEL
          ================================================== */}

          <div
            className="
              absolute
              left-3
              right-3
              top-[88px]
              max-h-[calc(100vh-105px)]
              overflow-y-auto
              rounded-2xl
              border
              border-white/15
              bg-[#087B5A]/80
              p-2
              backdrop-blur-2xl
              shadow-[0_20px_50px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.08)]
              sm:left-5
              sm:right-5
            "
          >
            <nav
              className="
                mx-auto
                max-w-7xl
                px-2
                pb-4
                pt-1
                sm:px-3
              "
              aria-label="Mobile navigation"
            >
              <ul className="flex flex-col">
                {/* HOME */}

                <li>
                  <NavLink
                    to="/"
                    onClick={handleMobileLinkClick}
                    className={({ isActive }) =>
                      `
                        flex
                        min-h-[52px]
                        items-center
                        rounded-xl
                        px-4
                        text-[15px]
                        transition-all
                        duration-200

                        ${
                          isActive
                            ? `
                              bg-white/10
                              font-bold
                              text-white
                            `
                            : `
                              font-medium
                              text-white/85
                              hover:bg-white/10
                              hover:text-white
                            `
                        }
                      `
                    }
                  >
                    Home
                  </NavLink>
                </li>

                {/* NAV ITEMS */}

                {navItems.map((item) => (
                  <li key={item.title}>
                    {item.dropdown ? (
                      <>
                        {/* MOBILE DROPDOWN BUTTON */}

                        <button
                          type="button"
                          onClick={() => toggleMobileDropdown(item.title)}
                          aria-expanded={mobileDropdown === item.title}
                          className="
                            flex
                            min-h-[52px]
                            w-full
                            items-center
                            justify-between
                            rounded-xl
                            px-4
                            text-left
                            text-[15px]
                            font-medium
                            text-white/90
                            transition-all
                            duration-200
                            hover:bg-white/10
                            hover:text-white
                            focus:outline-none
                            focus-visible:ring-2
                            focus-visible:ring-white/60
                          "
                        >
                          <span>{item.title}</span>

                          <FaChevronDown
                            size={10}
                            aria-hidden="true"
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

                        {/* MOBILE SUBMENU */}

                        {mobileDropdown === item.title && (
                          <div
                            className="
                              mb-2
                              overflow-hidden
                              rounded-xl
                              border
                              border-white/10
                              bg-[#063F30]/80
                              p-1
                            "
                          >
                            {item.items.map((subItem) => (
                              <NavLink
                                key={subItem.path}
                                to={subItem.path}
                                onClick={handleMobileLinkClick}
                                className={({ isActive }) =>
                                  `
                                    group/item
                                    flex
                                    min-h-[50px]
                                    items-center
                                    justify-between
                                    rounded-lg
                                    px-4
                                    py-3
                                    text-[14px]
                                    transition-all
                                    duration-200

                                    ${
                                      isActive
                                        ? `
                                          bg-white/10
                                          font-bold
                                          text-white
                                        `
                                        : `
                                          font-medium
                                          text-white/80
                                          hover:bg-white/10
                                          hover:text-white
                                        `
                                    }
                                  `
                                }
                              >
                                <span>{subItem.title}</span>

                                <FaArrowRight
                                  size={9}
                                  aria-hidden="true"
                                  className="
                                    text-[#F97316]
                                    transition-transform
                                    duration-200
                                    group-hover/item:translate-x-1
                                  "
                                />
                              </NavLink>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <NavLink
                        to={item.path}
                        onClick={handleMobileLinkClick}
                        className={({ isActive }) =>
                          `
                            flex
                            min-h-[52px]
                            items-center
                            rounded-xl
                            px-4
                            text-[15px]
                            transition-all
                            duration-200

                            ${
                              isActive
                                ? `
                                  bg-white/10
                                  font-bold
                                  text-white
                                `
                                : `
                                  font-medium
                                  text-white/85
                                  hover:bg-white/10
                                  hover:text-white
                                `
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

                <li className="mt-3">
                  <NavLink
                    to={navbarData.contact.path}
                    onClick={handleMobileLinkClick}
                    className="
                      group
                      flex
                      min-h-[52px]
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      border
                      border-white/10
                      bg-[#F97316]/95
                      px-5
                      text-[14px]
                      font-bold
                      text-white
                      shadow-[0_6px_16px_rgba(0,0,0,0.20)]
                      transition-all
                      duration-300
                      hover:bg-[#EA580C]
                      active:scale-[0.99]
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-[#FDBA74]
                    "
                  >
                    {navbarData.contact.title}

                    <FaArrowRight
                      size={10}
                      aria-hidden="true"
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
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
