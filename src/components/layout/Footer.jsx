import { Globe, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#173B22] text-white">
      <div className="mx-auto max-w-350 px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="font-['Manrope'] text-3xl font-extrabold">
              RISE
            </div>

            <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-white/50">
              Liberia
            </p>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
              Building sustainable climate resilience through locally
              grounded solutions and global knowledge.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="RISE website"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/40 hover:text-white"
              >
                <Globe size={16} />
              </a>

              <a
                href="mailto:alexander@rise-lr.org"
                aria-label="Email RISE"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/40 hover:text-white"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="font-['Manrope'] text-sm font-bold uppercase tracking-wider">
              About RISE
            </h3>

            <div className="mt-5 space-y-3">
              <Link
                to="/about/who-we-are"
                className="block text-sm text-white/65 transition-colors hover:text-white"
              >
                Who We Are
              </Link>

              <Link
                to="/about/mission-vision"
                className="block text-sm text-white/65 transition-colors hover:text-white"
              >
                Mission & Vision
              </Link>

              <Link
                to="/about/team"
                className="block text-sm text-white/65 transition-colors hover:text-white"
              >
                Our Team
              </Link>

              <Link
                to="/about/partners"
                className="block text-sm text-white/65 transition-colors hover:text-white"
              >
                Our Partners
              </Link>
            </div>
          </div>

          {/* Programmes */}
          <div>
            <h3 className="font-['Manrope'] text-sm font-bold uppercase tracking-wider">
              Programmes
            </h3>

            <div className="mt-5 space-y-3">
              <Link
                to="/programmes/climate-resilience"
                className="block text-sm text-white/65 transition-colors hover:text-white"
              >
                Climate Resilience
              </Link>

              <Link
                to="/programmes/environmental-governance"
                className="block text-sm text-white/65 transition-colors hover:text-white"
              >
                Environmental Governance
              </Link>

              <Link
                to="/programmes/resource-management"
                className="block text-sm text-white/65 transition-colors hover:text-white"
              >
                Resource Management
              </Link>

              <Link
                to="/programmes/community-empowerment"
                className="block text-sm text-white/65 transition-colors hover:text-white"
              >
                Community Empowerment
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-['Manrope'] text-sm font-bold uppercase tracking-wider">
              Contact Us
            </h3>

            <div className="mt-5 space-y-4 text-sm text-white/65">
              <div className="flex items-start gap-3">
                <MapPin size={17} className="mt-0.5 shrink-0" />
                <span>72nd Junction, Behind the Viewpoint Entertainment Center,
                       Paynesville City, Montserrado County, Liberia
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={17} className="shrink-0" />
                <span>+231 77 515 2637</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={17} className="shrink-0" />
                <span>alexander@rise-lr.org</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="mt-6 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#173B22] transition-transform hover:-translate-y-0.5"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/40">
          © {new Date().getFullYear()} RISE Liberia. All rights reserved.
        </div>
      </div>
    </footer>
  );
}