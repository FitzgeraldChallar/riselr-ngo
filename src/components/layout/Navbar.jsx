import { useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import { navigation } from "../../data/navigation";
import DesktopDropdown from "../navigation/DesktopDropdown";
import MobileMenu from "../navigation/MobileMenu";
import riseLogo from "../../assets/images/rise-logo.png";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navRef = useRef(null);
  const location = useLocation();

  const handleDropdownToggle = (label) => {
    setOpenDropdown((current) => (current === label ? null : label));
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  useEffect(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        ref={navRef}
        className="sticky top-0 z-40 border-b border-gray-100 bg-white"
      >
        <div className="mx-auto flex h-19.5 max-w-350 items-center justify-between px-5 sm:px-8 lg:px-10">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center"
            aria-label="RISE Liberia Home"
          >
           <img
             src={riseLogo}
             alt="RISE Liberia"
             className="h-18 w-auto object-contain"
           />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => {
              if (item.dropdown) {
                return (
                  <DesktopDropdown
                    key={item.label}
                    item={item}
                    isOpen={openDropdown === item.label}
                    onToggle={() =>
                      handleDropdownToggle(item.label)
                    }
                    onClose={closeDropdown}
                  />
                );
              }

              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`py-7 text-[15px] font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-[#2E7D32]"
                      : "text-[#374151] hover:text-[#2E7D32]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 lg:hidden"
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
          >
            <Menu size={26} strokeWidth={1.8} />
          </button>
        </div>
      </header>

      <MobileMenu
        navigation={navigation}
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}
