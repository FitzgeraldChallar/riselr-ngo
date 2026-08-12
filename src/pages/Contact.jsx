import {
  ArrowRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#173B22]">
        {/* Decorative background */}
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#2E7D32]/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#B9DC7A]/10 blur-3xl" />

        <div className="relative mx-auto max-w-350 px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B9DC7A]">
              Get In Touch
            </p>

            <h1 className="mt-4 font-['Manrope'] text-4xl font-extrabold leading-tight tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
              Let's build a more sustainable future together.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Whether you are looking to collaborate, learn more about our
              programmes, explore a partnership, or discuss an environmental
              and climate-related initiative, we'd be glad to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-350 px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            {/* Introduction */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2E7D32]">
                Contact Us
              </p>

              <h2 className="mt-4 font-['Manrope'] text-3xl font-extrabold leading-tight tracking-[-0.03em] text-[#17231A] sm:text-4xl">
                We would love to hear from you.
              </h2>

              <p className="mt-6 text-base leading-8 text-gray-600">
                RISE works with communities, institutions, development
                partners, government agencies, businesses, researchers, and
                other stakeholders committed to sustainable development and
                environmental action.
              </p>

              <p className="mt-5 text-base leading-8 text-gray-600">
                Reach out to us directly using any of the contact details
                below.
              </p>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/231775152637"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#2E7D32] px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#256628] hover:shadow-md"
              >
                <MessageCircle size={18} />
                Chat with us on WhatsApp
                <ArrowRight size={17} />
              </a>
            </div>

            {/* Contact Cards */}
            <div className="grid gap-5 sm:grid-cols-2">
              {/* Address */}
              <div className="rounded-2xl border border-gray-100 bg-[#F4F8F3] p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#DDEEDC] text-[#2E7D32]">
                  <MapPin size={21} strokeWidth={1.8} />
                </div>

                <h3 className="mt-6 font-['Manrope'] text-lg font-bold text-[#17231A]">
                  Our Office
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  72nd Junction, Behind the Viewpoint Entertainment Center,
                  Paynesville City, Montserrado County, Liberia
                </p>
              </div>

              {/* Phone */}
              <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#DDEEDC] text-[#2E7D32]">
                  <Phone size={21} strokeWidth={1.8} />
                </div>

                <h3 className="mt-6 font-['Manrope'] text-lg font-bold text-[#17231A]">
                  Phone
                </h3>

                <a
                  href="tel:+231775152637"
                  className="mt-3 block text-sm leading-7 text-gray-600 transition-colors hover:text-[#2E7D32]"
                >
                  +231 77 515 2637
                </a>
              </div>

              {/* Email */}
              <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#DDEEDC] text-[#2E7D32]">
                  <Mail size={21} strokeWidth={1.8} />
                </div>

                <h3 className="mt-6 font-['Manrope'] text-lg font-bold text-[#17231A]">
                  Email
                </h3>

                <a
                  href="mailto:alexander@rise-lr.org"
                  className="mt-3 block break-all text-sm leading-7 text-gray-600 transition-colors hover:text-[#2E7D32]"
                >
                  alexander@rise-lr.org
                </a>
              </div>

              {/* WhatsApp */}
              <div className="rounded-2xl border border-gray-100 bg-[#173B22] p-7 text-white">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-[#B9DC7A]">
                  <MessageCircle size={21} strokeWidth={1.8} />
                </div>

                <h3 className="mt-6 font-['Manrope'] text-lg font-bold">
                  WhatsApp
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/65">
                  Connect directly with the RISE team through WhatsApp.
                </p>

                <a
                  href="https://wa.me/231775152637"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#B9DC7A] transition-colors hover:text-white"
                >
                  Start a conversation
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="bg-[#F4F8F3] py-20 sm:py-24">
        <div className="mx-auto max-w-350 px-5 sm:px-8 lg:px-10">
          <div className="relative overflow-hidden rounded-3xl bg-[#2E7D32] px-7 py-12 sm:px-12 sm:py-16 lg:px-16">
            {/* Decorative circles */}
            <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-white/10" />
            <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#B9DC7A]/10" />

            <div className="relative z-10 max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#DDEEDC]">
                Partnerships & Collaboration
              </p>

              <h2 className="mt-4 font-['Manrope'] text-3xl font-extrabold leading-tight tracking-[-0.03em] text-white sm:text-4xl">
                Have an idea, project, or partnership in mind?
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">
                RISE believes meaningful environmental progress happens
                through collaboration. Connect with us to explore how we can
                work together.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/231775152637"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#173B22] transition-all hover:-translate-y-0.5 hover:bg-[#F4F8F3]"
                >
                  <MessageCircle size={17} />
                  Contact RISE
                </a>

                <Link
                  to="/about/who-we-are"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white/10"
                >
                  Learn About RISE
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}