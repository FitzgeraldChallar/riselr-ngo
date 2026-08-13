import { Globe, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#173B22] text-white">
      <div className="mx-auto max-w-350 px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* =========================================================
              BRAND
          ========================================================= */}
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

          {/* =========================================================
              ABOUT
          ========================================================= */}
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
                to="/about/leadership"
                className="block text-sm text-white/65 transition-colors hover:text-white"
              >
                Leadership
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

              <Link
                to="/about/impact"
                className="block text-sm text-white/65 transition-colors hover:text-white"
              >
                Our Impact
              </Link>
            </div>
          </div>

          {/* =========================================================
              PROGRAMMES
          ========================================================= */}
          <div>
            <h3 className="font-['Manrope'] text-sm font-bold uppercase tracking-wider">
              Programmes
            </h3>

            <div className="mt-5 space-y-3">
              <Link
                to="/programmes/forests-biodiversity-natural-resource-governance"
                className="block text-sm text-white/65 transition-colors hover:text-white"
              >
                Forests, Biodiversity & Natural Resource Governance
              </Link>

              <Link
                to="/programmes/climate-action-community-resilience"
                className="block text-sm text-white/65 transition-colors hover:text-white"
              >
                Climate Action & Community Resilience
              </Link>

              <Link
                to="/programmes/climate-smart-agriculture-food-systems-livelihoods"
                className="block text-sm text-white/65 transition-colors hover:text-white"
              >
                Climate-Smart Agriculture, Food Systems & Livelihoods
              </Link>

              <Link
                to="/programmes/environmental-education-youth-community-leadership"
                className="block text-sm text-white/65 transition-colors hover:text-white"
              >
                Environmental Education, Youth & Community Leadership
              </Link>

              <Link
                to="/programmes/research-evidence-policy-influence"
                className="block text-sm text-white/65 transition-colors hover:text-white"
              >
                Research, Evidence & Policy Influence
              </Link>

              <Link
                to="/programmes/circular-economy-waste-inclusive-green-energy"
                className="block text-sm text-white/65 transition-colors hover:text-white"
              >
                Circular Economy, Waste & Inclusive Green Energy
              </Link>
            </div>
          </div>

          {/* =========================================================
              CONTACT
          ========================================================= */}
          <div>
            <h3 className="font-['Manrope'] text-sm font-bold uppercase tracking-wider">
              Contact Us
            </h3>

            <div className="mt-5 space-y-4 text-sm text-white/65">
              <div className="flex items-start gap-3">
                <MapPin size={17} className="mt-0.5 shrink-0" />

                <span>
                  72nd Junction, Behind the Viewpoint Entertainment Center,
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

        {/* =========================================================
            BOTTOM / LEGAL
        ========================================================= */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-4 text-xs sm:flex-row sm:items-center sm:justify-between">

            {/* Copyright */}
            <p className="text-white/40">
              © {new Date().getFullYear()} RISE Liberia. All rights reserved.
            </p>

            {/* Legal Documents */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <a
                href="/documents/copyright-laws.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 transition-colors hover:text-white"
              >
                Copyright Laws
              </a>

              <span className="text-white/20">|</span>

              <a
                href="/documents/privacy-policy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 transition-colors hover:text-white"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}