import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import riseLogo from "../../assets/images/rise-logo.png";

export default function MobileMenu({ navigation, isOpen, onClose }) {
  const [expanded, setExpanded] = useState(null);

  const toggleDropdown = (label) => {
    setExpanded((current) => (current === label ? null : label));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/30 lg:hidden"
          />

          {/* Menu */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.25 }}
            className="fixed right-0 top-0 z-50 h-full w-[88%] max-w-97.5 overflow-y-auto bg-white shadow-2xl lg:hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
              <div>
                <img
                  src={riseLogo}
                  alt="RISE Liberia"
                  className="h-12 w-auto object-contain"
                />
              </div>

              <button
                type="button"
                onClick={onClose}
                className="rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Navigation */}
            <nav className="px-5 py-5">
              {navigation.map((item) => {
                const hasDropdown = Boolean(item.dropdown);
                const isExpanded = expanded === item.label;

                if (!hasDropdown) {
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={onClose}
                      className="block border-b border-gray-100 px-2 py-4 text-[15px] font-medium text-gray-700 transition-colors hover:text-[#2E7D32]"
                    >
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <div
                    key={item.label}
                    className="border-b border-gray-100"
                  >
                    <button
                      type="button"
                      onClick={() => toggleDropdown(item.label)}
                      className="flex w-full items-center justify-between px-2 py-4 text-left text-[15px] font-medium text-gray-700"
                    >
                      {item.label}

                      <ChevronDown
                        size={17}
                        className={`transition-transform duration-200 ${
                          isExpanded ? "rotate-180 text-[#2E7D32]" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="mb-3 rounded-lg bg-[#F5F9F5] p-2">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.path}
                                to={dropdownItem.path}
                                onClick={onClose}
                                className="block rounded-md px-4 py-3 text-sm text-gray-600 transition-colors hover:bg-white hover:text-[#2E7D32]"
                              >
                                {dropdownItem.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            {/* Mobile bottom section */}
            <div className="mx-5 mt-4 rounded-xl bg-[#2E7D32] p-5 text-white">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/70">
                RISE Liberia
              </p>

              <p className="mt-2 font-['Manrope'] text-lg font-bold">
                Building sustainable climate resilience.
              </p>

              <p className="mt-2 text-sm leading-6 text-white/80">
                Bridging global knowledge with local solutions.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}