import { MapPin } from "lucide-react";
import AboutPageLayout from "../../components/about/AboutPageLayout";
import { aboutImages, values } from "../../data/about";

export default function WhoWeAre() {
  return (
    <AboutPageLayout
      title="Who We Are"
      description="A Liberian-led organization advancing sustainable environmental management, climate resilience, and inclusive development."
      image={aboutImages.whoWeAre}
    >
      {/* Introduction */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-350 gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2E7D32]">
              About RISE
            </p>

            <h2 className="mt-4 font-['Manrope'] text-3xl font-extrabold leading-tight tracking-[-0.03em] text-[#17231A] sm:text-4xl">
              Bridging global knowledge with local action.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-gray-600">
            <p>
              RISE is a Liberian-led, non-profit, environmental and climate
              governance organization committed to advancing sustainable
              natural resource management, climate change adaptation, waste
              management, geotechnical solutions to environmental and
              development initiatives, alternative energy, and environmental
              justice across Liberia and the world.
            </p>

            <p>
              RISE is founded by a network of highly experienced Liberian
              professionals who have served with international development
              institutions including the European Union, World Bank, United
              Nations, UNDP, and key government ministries and agencies.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-[#F4F8F3] py-20 sm:py-24">
        <div className="mx-auto max-w-250 px-5 sm:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2E7D32]">
            Our Story
          </p>

          <h2 className="mt-4 font-['Manrope'] text-3xl font-extrabold tracking-[-0.03em] text-[#17231A] sm:text-4xl">
            Science-based. Locally owned. Community-driven.
          </h2>

          <div className="mt-7 space-y-5 text-base leading-8 text-gray-600">
            <p>
              With academic backgrounds from leading international
              universities, the founders are driven by a shared passion to
              give back to their country by bridging global knowledge with
              local action.
            </p>

            <p>
              Recognizing Liberia's urgent environmental challenges — ranging
              from deforestation and land and water degradation to climate
              vulnerability, poor waste management, and weak governance —
              RISE was established as a platform for solutions that are
              science-based, locally owned, and community-driven.
            </p>

            <p>
              The organization focuses on empowering citizens, supporting
              institutions, and catalysing policy and behaviour change to
              ensure long-term environmental sustainability and inclusive
              growth.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-350 px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2E7D32]">
              Our Values
            </p>

            <h2 className="mt-4 font-['Manrope'] text-3xl font-extrabold tracking-[-0.03em] text-[#17231A] sm:text-4xl">
              The principles that guide our work.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.number}
                className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm"
              >
                <span className="text-sm font-bold text-[#2E7D32]">
                  {value.number}
                </span>

                <h3 className="mt-5 font-['Manrope'] text-xl font-bold text-[#17231A]">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Status */}
      <section className="bg-[#173B22] py-12">
        <div className="mx-auto flex max-w-350 flex-col gap-5 px-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B9DC7A]">
              Legal Status & Location
            </p>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-white/75">
              Legally registered under Liberian Laws.
            </p>
          </div>

          <div className="flex items-start gap-3 text-sm text-white/70">
            <MapPin size={18} className="mt-1 shrink-0 text-[#B9DC7A]" />

            <span>
              72nd Junction, Behind the Viewpoint Entertainment Center,
              Paynesville City, Montserrado County, Liberia
            </span>
          </div>
        </div>
      </section>
    </AboutPageLayout>
  );
}