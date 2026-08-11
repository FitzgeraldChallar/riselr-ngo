import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Leaf,
  ShieldCheck,
  Users,
  Globe2,
} from "lucide-react";
import { Link } from "react-router-dom";

import { homeImages } from "../data/home";
import { programmes } from "../data/programmes";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = homeImages.hero;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((current) =>
        current === heroSlides.length - 1 ? 0 : current + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const previousSlide = () => {
    setCurrentSlide((current) =>
      current === 0 ? heroSlides.length - 1 : current - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((current) =>
      current === heroSlides.length - 1 ? 0 : current + 1
    );
  };

  return (
    <div className="overflow-hidden">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[calc(100vh-78px)] overflow-hidden bg-[#173B22]">
        {/* Hero Images */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <img
              src={heroSlides[currentSlide].src}
              alt={heroSlides[currentSlide].alt}
              className="h-full w-full object-cover"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-[#102C1A]/95 via-[#173B22]/75 to-[#173B22]/25" />

            <div className="absolute inset-0 bg-black/10" />
          </motion.div>
        </AnimatePresence>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-78px)] max-w-350 items-center px-5 py-20 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-[#A8D76A]" />

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/85">
                  Resilience Institute for Sustainability & Environment
                </span>
              </div>

              <h1 className="max-w-3xl font-['Manrope'] text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Building Sustainable
                <span className="block text-[#B9DC7A]">
                  Climate Resilience.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
                Bridging global knowledge with local solutions to strengthen
                communities, protect our environment, and create a more
                resilient future for Liberia.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/about/who-we-are"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#173B22] transition-all hover:-translate-y-0.5 hover:bg-[#F2F7ED]"
                >
                  Discover RISE

                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/programmes"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/15"
                >
                  Explore Our Programmes
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-8 right-5 z-20 flex items-center gap-3 sm:right-8 lg:right-10">
          <button
            type="button"
            onClick={previousSlide}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/10 text-white backdrop-blur-sm transition-colors hover:bg-white/15"
            aria-label="Previous slide"
          >
            <ChevronLeft size={19} />
          </button>

          <div className="flex items-center gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentSlide
                    ? "w-8 bg-white"
                    : "w-2 bg-white/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={nextSlide}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/10 text-white backdrop-blur-sm transition-colors hover:bg-white/15"
            aria-label="Next slide"
          >
            <ChevronRight size={19} />
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-9 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
          <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/50">
            Scroll
          </span>

          <div className="h-8 w-px bg-white/30" />
        </div>
      </section>

      {/* =========================================================
          INTRO / ABOUT
      ========================================================= */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-350 gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl bg-[#EAF2EA]">
              <img
                src={homeImages.about}
                alt="RISE Liberia"
                className="aspect-4/3 h-full w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-5 -right-4 hidden rounded-xl bg-[#2E7D32] px-7 py-5 text-white shadow-xl sm:block">
              <p className="font-['Manrope'] text-3xl font-extrabold">
                Liberia
              </p>
              <p className="mt-1 text-xs text-white/70">
                Local action. Global knowledge.
              </p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2E7D32]">
              Who We Are
            </p>

            <h2 className="mt-4 max-w-xl font-['Manrope'] text-3xl font-extrabold leading-tight tracking-[-0.03em] text-[#17231A] sm:text-4xl lg:text-5xl">
              Creating solutions for a more resilient tomorrow.
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              RISE is committed to advancing sustainable development,
              environmental stewardship, and climate resilience through
              practical solutions grounded in local realities.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-600">
              We connect communities, institutions, technical expertise,
              and global knowledge to address environmental and
              development challenges across Liberia.
            </p>

            <Link
              to="/about/who-we-are"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#2E7D32]"
            >
              Learn more about RISE

              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          FOCUS AREAS
      ========================================================= */}
      <section className="bg-[#F4F8F3] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-350 px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2E7D32]">
              Our Focus
            </p>

            <h2 className="mt-4 font-['Manrope'] text-3xl font-extrabold tracking-[-0.03em] text-[#17231A] sm:text-4xl">
              Turning knowledge into meaningful action.
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-600">
              Our work focuses on practical, sustainable approaches that
              strengthen people, communities, institutions, and the
              environment.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Leaf,
                title: "Environmental Sustainability",
                text: "Supporting responsible management and protection of natural resources.",
              },
              {
                icon: ShieldCheck,
                title: "Climate Resilience",
                text: "Helping communities and institutions prepare for climate-related challenges.",
              },
              {
                icon: Users,
                title: "Community Empowerment",
                text: "Placing communities at the centre of sustainable development solutions.",
              },
              {
                icon: Globe2,
                title: "Knowledge & Innovation",
                text: "Connecting global expertise with locally relevant approaches.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="rounded-2xl bg-white p-7 shadow-[0_5px_25px_rgba(23,59,34,0.05)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E5F0E5] text-[#2E7D32]">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-6 font-['Manrope'] text-lg font-bold text-[#17231A]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROGRAMMES
      ========================================================= */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-350 px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2E7D32]">
                Our Programmes
              </p>

              <h2 className="mt-4 font-['Manrope'] text-3xl font-extrabold tracking-[-0.03em] text-[#17231A] sm:text-4xl">
                Programmes designed for lasting impact.
              </h2>
            </div>

            <Link
              to="/programmes"
              className="group inline-flex items-center gap-2 text-sm font-bold text-[#2E7D32]"
            >
              View all programmes

              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programmes.slice(0, 3).map((programme, index) => (
              <motion.div
                key={programme.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-16/10 overflow-hidden bg-[#EAF2EA]">
                  <img
                    src={homeImages.programmes[index].image}
                    alt={programme.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <h3 className="font-['Manrope'] text-xl font-bold text-[#17231A]">
                    {programme.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {programme.description}
                  </p>

                  <Link
                    to={`/programmes/${programme.slug}`}
                    className="group/link mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#2E7D32]"
                  >
                    Explore programme

                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover/link:translate-x-1"
                    />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          IMPACT BANNER
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#173B22]">
        <div className="absolute inset-0">
          <img
            src={homeImages.impact}
            alt=""
            className="h-full w-full object-cover opacity-30"
          />

          <div className="absolute inset-0 bg-[#173B22]/85" />
        </div>

        <div className="relative mx-auto max-w-350 px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B9DC7A]">
                Our Impact
              </p>

              <h2 className="mt-4 font-['Manrope'] text-3xl font-extrabold tracking-[-0.03em] text-white sm:text-4xl">
                Working together for communities and the environment.
              </h2>

              <p className="mt-5 text-base leading-8 text-white/70">
                Placeholder impact statement. This section can later
                showcase RISE's key achievements, communities reached,
                projects implemented, or measurable environmental
                outcomes.
              </p>

              <Link
                to="/about/impact"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#173B22] transition-transform hover:-translate-y-0.5"
              >
                See our impact

                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-5">
              {[
                ["00+", "Communities Reached"],
                ["00+", "Projects"],
                ["00+", "Partners"],
                ["00+", "Years of Experience"],
              ].map(([number, label]) => (
                <div
                  key={label}
                  className="min-w-35 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm sm:p-7"
                >
                  <div className="font-['Manrope'] text-3xl font-extrabold text-[#B9DC7A] sm:text-4xl">
                    {number}
                  </div>

                  <div className="mt-2 text-xs leading-5 text-white/60">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CLOSING STORY
      ========================================================= */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-350 gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20 lg:px-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2E7D32]">
              From Knowledge to Action
            </p>

            <h2 className="mt-4 font-['Manrope'] text-3xl font-extrabold tracking-[-0.03em] text-[#17231A] sm:text-4xl">
              Local solutions. Sustainable change.
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-600">
              RISE works with communities, institutions, and partners to
              transform ideas and knowledge into practical action.
            </p>

            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#2E7D32] px-6 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#246528]"
            >
              Connect with RISE

              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="overflow-hidden rounded-2xl bg-[#EAF2EA]">
            <img
              src={homeImages.story}
              alt="RISE Liberia working with communities"
              className="aspect-16/10 w-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}