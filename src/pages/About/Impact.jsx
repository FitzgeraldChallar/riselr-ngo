import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AboutPageLayout from "../../components/about/AboutPageLayout";
import { aboutImages } from "../../data/about";

export default function Impact() {
  return (
    <AboutPageLayout
      title="Our Impact"
      description="Creating measurable change through environmental action, community resilience, knowledge, and sustainable development."
      image={aboutImages.impact}
    >
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-350 px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2E7D32]">
              Our Impact
            </p>

            <h2 className="mt-4 font-['Manrope'] text-3xl font-extrabold text-[#17231A] sm:text-4xl">
              Measuring progress. Strengthening communities. Protecting
              ecosystems.
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              RISE is committed to delivering measurable results through
              science-based interventions, locally owned solutions, and
              inclusive partnerships.
            </p>
          </div>

          {/* Placeholder statistics */}
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["00+", "Communities Reached"],
              ["00+", "Projects Implemented"],
              ["00+", "People Engaged"],
              ["00+", "Strategic Partners"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="rounded-2xl bg-[#173B22] p-7 text-white"
              >
                <div className="font-['Manrope'] text-4xl font-extrabold text-[#B9DC7A]">
                  {number}
                </div>

                <p className="mt-3 text-sm text-white/65">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F4F8F3] py-20 sm:py-24">
        <div className="mx-auto max-w-350 px-5 sm:px-8 lg:px-10">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Environmental Impact",
                text: "Placeholder content for RISE's environmental achievements, ecosystem restoration, conservation, waste management, and natural resource initiatives.",
              },
              {
                title: "Community Impact",
                text: "Placeholder content for communities reached, people trained, livelihoods strengthened, and locally led resilience initiatives.",
              },
              {
                title: "Knowledge & Policy",
                text: "Placeholder content for research, policy engagement, institutional strengthening, capacity development, and knowledge products.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-7 shadow-sm"
              >
                <h3 className="font-['Manrope'] text-xl font-bold text-[#17231A]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#173B22] py-16">
        <div className="mx-auto flex max-w-300 flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-['Manrope'] text-2xl font-extrabold text-white">
              Explore the work behind our impact.
            </h2>

            <p className="mt-2 text-sm text-white/60">
              Discover the programmes through which RISE creates change.
            </p>
          </div>

          <Link
            to="/programmes"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#173B22]"
          >
            Explore Programmes
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </AboutPageLayout>
  );
}