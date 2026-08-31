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

  // =====================================================
  // CLOSE ALL MENUS
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
    setMobileDropdown(null);
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
  // CLOSE DROPDOWN WHEN CLICKING OUTSIDE
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
  // PREVENT BODY SCROLL
  // =====================================================

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // =====================================================
  // MOBILE LINK CLICK
  // =====================================================

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
    setMobileDropdown(null);
    setDesktopDropdown(null);
  };

  // =====================================================
  // DESKTOP LINK STYLE
  // =====================================================

  const desktopLinkClass = ({ isActive }) =>
    `
      group
      relative
      flex
      items-center
      whitespace-nowrap
      py-2
      text-[13px]
      font-medium
      transition-colors
      duration-200
      xl:text-sm
      ${
        isActive ? "font-semibold text-white" : "text-white/85 hover:text-white"
      }
    `;

  return (
    <>
      {/* =====================================================
          HEADER
      ====================================================== */}

      <header
        className="
          sticky
          top-0
          z-[100]
          border-b
          border-white/10
          bg-[#087B5A]/95
          shadow-[0_4px_20px_rgba(0,0,0,0.08)]
          backdrop-blur-xl
        "
      >
        <div
          className="
            mx-auto
            flex
            h-[76px]
            w-full
            max-w-7xl
            items-center
            justify-between
            gap-6
            px-5
            sm:px-8
            lg:px-10
          "
        >
          {/* =================================================
              LOGO / BRAND
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
                bg-white
                p-1
                shadow-sm
                ring-1
                ring-white/20
                transition-transform
                duration-300
                group-hover:scale-105
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

            <div className="min-w-0">
              <div
                className="
                  text-lg
                  font-extrabold
                  leading-none
                  tracking-tight
                  text-white
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
                  tracking-wide
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
            className="hidden lg:flex"
            aria-label="Main navigation"
          >
            <ul
              className="
                flex
                items-center
                gap-3
                xl:gap-5
              "
            >
              {/* HOME */}

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
                          bottom-0
                          left-0
                          h-[2px]
                          rounded-full
                          bg-[#F97316]
                          transition-all
                          duration-300
                          ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                        `}
                      />
                    </>
                  )}
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
                          py-2
                          text-[13px]
                          font-medium
                          text-white/85
                          transition-colors
                          duration-200
                          hover:text-white
                          xl:text-sm
                          ${desktopDropdown === item.title ? "text-white" : ""}
                        `}
                      >
                        {item.title}

                        <FaChevronDown
                          size={8}
                          aria-hidden="true"
                          className={`
                            transition-transform
                            duration-200
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
                            bottom-0
                            left-0
                            right-0
                            h-[2px]
                            rounded-full
                            bg-[#F97316]
                            transition-transform
                            duration-300
                            ${
                              desktopDropdown === item.title
                                ? "scale-x-100"
                                : "scale-x-0"
                            }
                          `}
                        />
                      </button>

                      {/* DROPDOWN */}

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
                          rounded-xl
                          border
                          border-slate-200
                          border-t-2
                          border-t-[#F97316]
                          bg-white
                          p-2
                          shadow-[0_20px_50px_rgba(0,0,0,0.16)]
                          transition-all
                          duration-200
                          ${
                            desktopDropdown === item.title
                              ? "visible translate-y-0 scale-100 opacity-100"
                              : "invisible translate-y-2 scale-95 opacity-0"
                          }
                        `}
                        role="menu"
                      >
                        {item.items.map((subItem) => (
                          <NavLink
                            key={subItem.path}
                            to={subItem.path}
                            onClick={() => setDesktopDropdown(null)}
                            role="menuitem"
                            className={({ isActive }) =>
                              `
                                group/item
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

                            <FaArrowRight
                              size={9}
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
                              bottom-0
                              left-0
                              h-[2px]
                              rounded-full
                              bg-[#F97316]
                              transition-all
                              duration-300
                              ${isActive ? "w-full" : "w-0 group-hover:w-full"}
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
              CONTACT CTA
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
              bg-[#F97316]
              px-5
              text-[13px]
              font-bold
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
              border-white/10
              bg-white/5
              text-lg
              text-white
              transition-all
              duration-200
              hover:bg-white/10
              active:scale-95
              focus:outline-none
              focus:ring-2
              focus:ring-white/60
              lg:hidden
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
            lg:hidden
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
              bg-black/50
              backdrop-blur-sm
            "
          />

          {/* MOBILE PANEL */}

          <div
            className="
              absolute
              left-0
              right-0
              top-[76px]
              max-h-[calc(100vh-76px)]
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
                {/* HOME */}

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
                        ${
                          isActive
                            ? "font-bold text-white"
                            : "font-medium text-white/85"
                        }
                      `
                    }
                  >
                    {({ isActive }) => (
                      <>
                        Home
                        {isActive && (
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
                        )}
                      </>
                    )}
                  </NavLink>
                </li>

                {/* NAV ITEMS */}

                {navItems.map((item) => (
                  <li key={item.title} className="border-b border-white/10">
                    {item.dropdown ? (
                      <>
                        <button
                          type="button"
                          onClick={() => toggleMobileDropdown(item.title)}
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
                            text-white/90
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
                              mb-3
                              overflow-hidden
                              rounded-xl
                              border
                              border-white/10
                              bg-[#063F30]
                            "
                          >
                            {item.items.map((subItem) => (
                              <NavLink
                                key={subItem.path}
                                to={subItem.path}
                                onClick={handleMobileLinkClick}
                                className={({ isActive }) =>
                                  `
                                    flex
                                    items-center
                                    justify-between
                                    border-b
                                    border-white/10
                                    px-4
                                    py-3.5
                                    text-[14px]
                                    last:border-0
                                    ${
                                      isActive
                                        ? "bg-white font-bold text-[#087B5A]"
                                        : "font-medium text-white/90 hover:bg-white/10"
                                    }
                                  `
                                }
                              >
                                <span>{subItem.title}</span>

                                <FaArrowRight
                                  size={9}
                                  aria-hidden="true"
                                  className="text-[#F97316]"
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
                            relative
                            block
                            py-4
                            text-[15px]
                            ${
                              isActive
                                ? "font-bold text-white"
                                : "font-medium text-white/85"
                            }
                          `
                        }
                      >
                        {({ isActive }) => (
                          <>
                            {item.title}

                            {isActive && (
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
                            )}
                          </>
                        )}
                      </NavLink>
                    )}
                  </li>
                ))}

                {/* CONTACT */}

                <li className="pt-5">
                  <NavLink
                    to={navbarData.contact.path}
                    onClick={handleMobileLinkClick}
                    className="
                      group
                      flex
                      min-h-[50px]
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-[#F97316]
                      px-5
                      text-[14px]
                      font-bold
                      text-white
                      shadow-lg
                      transition-all
                      duration-300
                      hover:bg-[#EA580C]
                      hover:shadow-xl
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
