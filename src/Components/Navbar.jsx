import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaArrowRight, FaBars, FaChevronDown, FaTimes } from "react-icons/fa";

import Logo from "../assets/DAFA-New-Logo.jpg";
import { navItems, navbarData } from "./NavbarData";

export default function Navbar() {
  const location = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const navRef = useRef(null);
  const mobileMenuButtonRef = useRef(null);

  // =====================================================
  // SCROLL STATE
  // =====================================================

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =====================================================
  // CLOSE MENUS WHEN ROUTE CHANGES
  // =====================================================

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  // =====================================================
  // BODY SCROLL LOCK
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
  // ESCAPE KEY
  // =====================================================

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        setOpenDropdown(null);

        requestAnimationFrame(() => {
          mobileMenuButtonRef.current?.focus();
        });
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // =====================================================
  // OUTSIDE CLICK
  // =====================================================

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // =====================================================
  // MENU HELPERS
  // =====================================================

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
    setOpenDropdown(null);
  };

  const toggleDropdown = (title) => {
    setOpenDropdown((prev) => (prev === title ? null : title));
  };

  // =====================================================
  // DROPDOWN ACTIVE STATE
  // =====================================================

  const isDropdownActive = (item) => {
    if (!item.dropdown) return false;

    return item.items?.some((subItem) => location.pathname === subItem.path);
  };

  // =====================================================
  // DESKTOP LINK
  // =====================================================

  const desktopLinkClass = ({ isActive }) => `
    group
    relative
    flex
    min-h-[42px]
    items-center
    gap-2
    whitespace-nowrap
    rounded-lg
    px-3
    py-2
    text-[13px]
    font-medium
    transition-all
    duration-200
    xl:text-sm

    ${
      isActive
        ? "bg-white/[0.10] font-semibold text-white"
        : "text-white/80 hover:bg-white/[0.06] hover:text-white"
    }

    focus:outline-none
    focus-visible:ring-2
    focus-visible:ring-[#FDBA74]
    focus-visible:ring-offset-1
    focus-visible:ring-offset-[#087B5A]
  `;

  // =====================================================
  // MOBILE LINK
  // =====================================================

  const mobileLinkClass = ({ isActive }) => `
    flex
    min-h-[50px]
    items-center
    rounded-lg
    px-4
    text-[15px]
    transition-all
    duration-200

    ${
      isActive
        ? "bg-white/[0.12] font-semibold text-white"
        : "font-medium text-white/85 hover:bg-white/[0.07] hover:text-white"
    }

    focus:outline-none
    focus-visible:ring-2
    focus-visible:ring-white/70
  `;

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header
        className={`
          fixed
          left-0
          right-0
          top-0
          z-[100]
          px-3
          font-[Poppins]
          transition-all
          duration-300

          sm:px-5
          lg:px-6

          ${isScrolled ? "pt-2" : "pt-3"}
        `}
      >
        <div
          ref={navRef}
          className={`
            mx-auto
            flex
            w-full
            max-w-7xl
            items-center
            justify-between
            gap-3
            rounded-2xl
            border
            border-white/[0.08]
            px-3
            backdrop-blur-xl
            transition-all
            duration-300

            sm:px-5
            lg:px-6

            ${
              isScrolled
                ? `
                  h-[62px]
                  bg-[#087B5A]/95
                  shadow-[0_12px_30px_rgba(6,63,48,0.22)]
                `
                : `
                  h-[68px]
                  bg-[#087B5A]/88
                  shadow-[0_6px_24px_rgba(0,0,0,0.12)]
                `
            }
          `}
        >
          {/* =================================================
              LOGO
          ================================================= */}

          <NavLink
            to="/"
            onClick={closeMenus}
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
            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                overflow-hidden
                rounded-xl
                border
                border-white/70
                bg-white
                p-[2px]
                shadow-sm
                transition-all
                duration-200

                group-hover:scale-[1.03]
                group-hover:border-white

                sm:h-11
                sm:w-11
              "
            >
              <img
                src={Logo}
                alt="DAFA logo"
                className="
                  h-full
                  w-full
                  rounded-[9px]
                  object-cover
                "
              />
            </div>

            <div className="min-w-0">
              <div
                className="
                  text-base
                  font-extrabold
                  leading-none
                  tracking-tight
                  text-white

                  sm:text-lg
                "
              >
                {navbarData.brand.name}
              </div>

              <div
                className="
                  mt-1
                  hidden
                  max-w-[210px]
                  truncate
                  text-[9px]
                  font-medium
                  leading-none
                  text-white/60

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
          ================================================= */}

          <nav className="hidden xl:flex" aria-label="Main navigation">
            <ul
              className="
                flex
                items-center
                gap-0.5
                rounded-xl
                border
                border-white/[0.08]
                bg-[#063F30]/20
                p-1

                2xl:gap-1
              "
            >
              {/* HOME */}

              <li>
                <NavLink
                  to={navbarData.home.path}
                  onClick={() => setOpenDropdown(null)}
                  className={desktopLinkClass}
                >
                  {({ isActive }) => (
                    <>
                      <span>{navbarData.home.title}</span>

                      <ActiveIndicator active={isActive} />
                    </>
                  )}
                </NavLink>
              </li>

              {/* NAV ITEMS */}

              {navItems.map((item) => {
                const active = isDropdownActive(item);

                return (
                  <li key={item.title} className="relative">
                    {item.dropdown ? (
                      <>
                        {/* DROPDOWN BUTTON */}

                        <button
                          type="button"
                          onClick={() => toggleDropdown(item.title)}
                          aria-haspopup="menu"
                          aria-expanded={openDropdown === item.title}
                          className={`
                            group
                            relative
                            flex
                            min-h-[42px]
                            items-center
                            gap-2
                            whitespace-nowrap
                            rounded-lg
                            px-3
                            py-2
                            text-[13px]
                            font-medium
                            transition-all
                            duration-200
                            xl:text-sm

                            ${
                              openDropdown === item.title || active
                                ? "bg-white/[0.10] font-semibold text-white"
                                : "text-white/80 hover:bg-white/[0.06] hover:text-white"
                            }

                            focus:outline-none
                            focus-visible:ring-2
                            focus-visible:ring-[#FDBA74]
                            focus-visible:ring-offset-1
                            focus-visible:ring-offset-[#087B5A]
                          `}
                        >
                          <span>{item.title}</span>

                          <FaChevronDown
                            size={8}
                            aria-hidden="true"
                            className={`
                              transition-transform
                              duration-200

                              ${
                                openDropdown === item.title
                                  ? "rotate-180 text-[#FDBA74]"
                                  : "text-white/60"
                              }
                            `}
                          />

                          <ActiveIndicator
                            active={openDropdown === item.title || active}
                          />
                        </button>

                        {/* DROPDOWN */}

                        <div
                          className={`
                            absolute
                            left-1/2
                            top-full
                            z-50
                            mt-2
                            w-60
                            -translate-x-1/2
                            origin-top
                            rounded-xl
                            border
                            border-white/10
                            bg-[#087B5A]
                            p-1.5
                            shadow-[0_18px_40px_rgba(0,0,0,0.24)]
                            transition-all
                            duration-200

                            ${
                              openDropdown === item.title
                                ? `
                                  visible
                                  translate-y-0
                                  scale-100
                                  opacity-100
                                `
                                : `
                                  invisible
                                  translate-y-1
                                  scale-[0.98]
                                  opacity-0
                                `
                            }
                          `}
                          role="menu"
                          aria-hidden={openDropdown !== item.title}
                        >
                          {item.items.map((subItem) => (
                            <NavLink
                              key={subItem.path}
                              to={subItem.path}
                              role="menuitem"
                              tabIndex={openDropdown === item.title ? 0 : -1}
                              onClick={() => setOpenDropdown(null)}
                              className={({ isActive }) =>
                                `
                                  group/item
                                  flex
                                  min-h-[44px]
                                  items-center
                                  justify-between
                                  rounded-lg
                                  px-3
                                  py-2.5
                                  text-[13px]
                                  transition-all
                                  duration-200

                                  focus:outline-none
                                  focus-visible:ring-2
                                  focus-visible:ring-[#FDBA74]

                                  ${
                                    isActive
                                      ? "bg-white/[0.12] font-semibold text-white"
                                      : "text-white/80 hover:bg-white/[0.07] hover:text-white"
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
                        onClick={() => setOpenDropdown(null)}
                        className={desktopLinkClass}
                      >
                        {({ isActive }) => (
                          <>
                            <span>{item.title}</span>

                            <ActiveIndicator active={isActive} />
                          </>
                        )}
                      </NavLink>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* =================================================
              CONTACT CTA
          ================================================= */}

          <NavLink
            to={navbarData.contact.path}
            onClick={closeMenus}
            className="
              group
              hidden
              min-h-[42px]
              shrink-0
              items-center
              justify-center
              gap-2
              rounded-lg
              bg-[#F97316]
              px-4
              text-[13px]
              font-bold
              text-white
              shadow-[0_4px_12px_rgba(0,0,0,0.12)]
              transition-all
              duration-200

              hover:-translate-y-0.5
              hover:bg-[#EA580C]
              hover:shadow-[0_7px_16px_rgba(0,0,0,0.18)]

              active:translate-y-0

              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#FDBA74]
              focus-visible:ring-offset-1
              focus-visible:ring-offset-[#087B5A]

              xl:flex
            "
          >
            {navbarData.contact.title}

            <FaArrowRight
              size={10}
              aria-hidden="true"
              className="
                transition-transform
                duration-200
                group-hover:translate-x-1
              "
            />
          </NavLink>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            ref={mobileMenuButtonRef}
            type="button"
            onClick={toggleMobileMenu}
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-lg
              border
              border-white/15
              bg-white/[0.06]
              text-lg
              text-white
              transition-all
              duration-200

              hover:bg-white/[0.11]
              hover:text-[#FDBA74]

              active:scale-95

              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-white/70

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
      ===================================================== */}

      <div
        id="mobile-navigation"
        className={`
          fixed
          inset-0
          z-[90]
          font-[Poppins]
          transition-opacity
          duration-200
          xl:hidden

          ${mobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"}
        `}
        aria-hidden={!mobileMenuOpen}
      >
        {/* BACKDROP */}

        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={closeMenus}
          className="
            absolute
            inset-0
            cursor-default
            bg-black/50
            backdrop-blur-sm
          "
        />

        {/* PANEL */}

        <div
          className={`
            absolute
            left-3
            right-3
            top-[78px]
            max-h-[calc(100vh-94px)]
            overflow-y-auto
            rounded-2xl
            border
            border-white/10
            bg-[#087B5A]
            p-2
            shadow-[0_20px_45px_rgba(0,0,0,0.28)]
            transition-all
            duration-200

            sm:left-5
            sm:right-5

            ${
              mobileMenuOpen
                ? "translate-y-0 scale-100"
                : "-translate-y-2 scale-[0.98]"
            }
          `}
        >
          <nav aria-label="Mobile navigation" className="px-1 pb-2 pt-1">
            <ul className="flex flex-col">
              {/* HOME */}

              <li>
                <NavLink
                  to="/"
                  onClick={closeMenus}
                  className={mobileLinkClass}
                >
                  Home
                </NavLink>
              </li>

              {/* NAV ITEMS */}

              {navItems.map((item) => {
                const active = isDropdownActive(item);

                return (
                  <li key={item.title}>
                    {item.dropdown ? (
                      <>
                        <button
                          type="button"
                          onClick={() => toggleDropdown(item.title)}
                          aria-expanded={openDropdown === item.title}
                          className={`
                            flex
                            min-h-[50px]
                            w-full
                            items-center
                            justify-between
                            rounded-lg
                            px-4
                            text-left
                            text-[15px]
                            transition-all
                            duration-200

                            ${
                              openDropdown === item.title || active
                                ? "bg-white/[0.12] font-semibold text-white"
                                : "font-medium text-white/85 hover:bg-white/[0.07] hover:text-white"
                            }

                            focus:outline-none
                            focus-visible:ring-2
                            focus-visible:ring-white/70
                          `}
                        >
                          <span>{item.title}</span>

                          <FaChevronDown
                            size={10}
                            aria-hidden="true"
                            className={`
                              transition-transform
                              duration-200

                              ${
                                openDropdown === item.title
                                  ? "rotate-180 text-[#FDBA74]"
                                  : "text-white/60"
                              }
                            `}
                          />
                        </button>

                        {/* MOBILE SUBMENU */}

                        <div
                          className={`
                            grid
                            transition-all
                            duration-300

                            ${
                              openDropdown === item.title
                                ? "grid-rows-[1fr] opacity-100"
                                : "grid-rows-[0fr] opacity-0"
                            }
                          `}
                        >
                          <div className="overflow-hidden">
                            <div
                              className="
                                mb-1
                                mt-1
                                rounded-lg
                                border
                                border-white/10
                                bg-[#063F30]/65
                                p-1
                              "
                            >
                              {item.items.map((subItem) => (
                                <NavLink
                                  key={subItem.path}
                                  to={subItem.path}
                                  onClick={closeMenus}
                                  className={({ isActive }) =>
                                    `
                                      group/item
                                      flex
                                      min-h-[46px]
                                      items-center
                                      justify-between
                                      rounded-md
                                      px-4
                                      py-2.5
                                      text-[14px]
                                      transition-all
                                      duration-200

                                      ${
                                        isActive
                                          ? "bg-white/[0.12] font-semibold text-white"
                                          : "text-white/75 hover:bg-white/[0.08] hover:text-white"
                                      }

                                      focus:outline-none
                                      focus-visible:ring-2
                                      focus-visible:ring-white/70
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
                          </div>
                        </div>
                      </>
                    ) : (
                      <NavLink
                        to={item.path}
                        onClick={closeMenus}
                        className={mobileLinkClass}
                      >
                        {item.title}
                      </NavLink>
                    )}
                  </li>
                );
              })}

              {/* CONTACT */}

              <li className="mt-2 border-t border-white/10 pt-2">
                <NavLink
                  to={navbarData.contact.path}
                  onClick={closeMenus}
                  className="
                    group
                    flex
                    min-h-[50px]
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    bg-[#F97316]
                    px-5
                    text-[14px]
                    font-bold
                    text-white
                    shadow-md
                    transition-all
                    duration-200

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
                      duration-200
                      group-hover:translate-x-1
                    "
                  />
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

// =====================================================
// ACTIVE INDICATOR
// =====================================================

function ActiveIndicator({ active }) {
  return (
    <span
      aria-hidden="true"
      className={`
        absolute
        bottom-1
        left-1/2
        h-[2px]
        -translate-x-1/2
        rounded-full
        bg-[#F97316]
        transition-all
        duration-200

        ${active ? "w-5 opacity-100" : "w-0 opacity-0"}
      `}
    />
  );
}
