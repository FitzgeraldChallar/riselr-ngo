import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function DesktopDropdown({
  item,
  isOpen,
  onToggle,
  onClose,
}) {
  return (
    <div className="relative">
      <button
        type="button"
        onClick={onToggle}
        className={`flex items-center gap-1.5 py-7 text-[15px] font-medium transition-colors duration-200 ${
          isOpen
            ? "text-[#2E7D32]"
            : "text-[#374151] hover:text-[#2E7D32]"
        }`}
        aria-expanded={isOpen}
      >
        {item.label}

        <ChevronDown
          size={16}
          strokeWidth={1.8}
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18 }}
            className="absolute left-1/2 top-full z-50 w-72.5 -translate-x-1/2"
          >
            <div className="overflow-hidden rounded-b-xl border border-gray-100 bg-white shadow-[0_15px_40px_rgba(0,0,0,0.10)]">
              <div className="h-1 bg-[#2E7D32]" />

              <div className="p-3">
                {item.dropdown.map((dropdownItem) => (
                  <Link
                    key={dropdownItem.path}
                    to={dropdownItem.path}
                    onClick={onClose}
                    className="group flex items-center justify-between rounded-lg px-4 py-3 text-[14px] text-gray-600 transition-all duration-200 hover:bg-[#F1F8F2] hover:text-[#2E7D32]"
                  >
                    <span>{dropdownItem.label}</span>

                    <ArrowRight
                      size={15}
                      className="translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}