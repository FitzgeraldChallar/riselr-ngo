import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import AboutPageLayout from "../../components/about/AboutPageLayout";
import { programmes } from "../../data/programmes";

export default function Programmes() {
  return (
    <AboutPageLayout
      title="Our Programmes"
      description="Six interconnected programmes advancing environmental sustainability, climate resilience, inclusive livelihoods, knowledge and community-led development across Liberia."
      image="/images/programmes/programmes-hero.jpg"
    >
      {/* Introduction / Programme Hero */}
      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/images/programmes/programmes-hero.jpg')",
          }}
        />

        {/* Light Green Overlay */}
        <div className="absolute inset-0 bg-[#EAF4E8]/90" />

        {/* Subtle Green Tint */}
        <div className="absolute inset-0 bg-[#B9DC7A]/15 mix-blend-multiply" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-350 px-5 sm:px-8 lg:px-10">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2E7D32]">
              Our Programmes
            </p>

            <h2 className="mt-4 font-['Manrope'] text-3xl font-extrabold leading-tight tracking-[-0.03em] text-[#17231A] sm:text-4xl lg:text-5xl">
              Six programmes. One shared commitment to sustainable change.
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#35543D] sm:text-lg">
              RISE brings together environmental action, climate resilience,
              sustainable livelihoods, research, education and green
              innovation to address interconnected challenges facing
              communities and ecosystems across Liberia.
            </p>
          </div>
        </div>
      </section>

      {/* Programme Cards */}
      <section className="bg-[#F4F8F3] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-350 px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programmes.map((programme) => (
              <Link
                key={programme.slug}
                to={`/programmes/${programme.slug}`}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative aspect-16/10 overflow-hidden bg-[#EAF2EA]">
                  <img
                    src={programme.image}
                    alt={programme.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />

                  {/* Green Image Overlay */}
                  <div className="absolute inset-0 bg-[#173B22]/10 transition-colors duration-300 group-hover:bg-[#173B22]/25" />

                  {/* Programme Number */}
                  <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-sm font-bold text-[#2E7D32] shadow-sm">
                    {programme.number}
                  </div>

                  {/* Arrow */}
                  <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#173B22] opacity-0 shadow-md transition-all duration-300 group-hover:opacity-100">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2E7D32]">
                    Programme {programme.number}
                  </p>

                  <h3 className="mt-3 font-['Manrope'] text-xl font-extrabold leading-7 text-[#17231A]">
                    {programme.title}
                  </h3>

                  <p className="mt-4 text-sm font-medium italic leading-6 text-[#2E7D32]">
                    {programme.tagline}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {programme.shortDescription}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#173B22]">
                    Explore programme

                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </AboutPageLayout>
  );
}