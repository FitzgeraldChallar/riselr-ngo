import AboutPageLayout from "../../components/about/AboutPageLayout";
import { aboutImages } from "../../data/about";

const partners = [
  "Partner Organization",
  "Development Institution",
  "Government Institution",
  "Research Institution",
  "Community Organization",
  "International Partner",
];

export default function Partners() {
  return (
    <AboutPageLayout
      title="Our Partners"
      description="Building inclusive partnerships that strengthen collective action and amplify sustainable development impact."
      image={aboutImages.partners}
    >
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-250 px-5 sm:px-8 lg:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2E7D32]">
            Collaboration
          </p>

          <h2 className="mt-4 font-['Manrope'] text-3xl font-extrabold text-[#17231A] sm:text-4xl">
            Stronger together.
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600">
            RISE believes that meaningful environmental and development
            challenges require collaboration. We work with communities,
            government institutions, development partners, researchers,
            private-sector actors, civil society organizations, and other
            stakeholders to create sustainable solutions.
          </p>

          <p className="mt-5 text-base leading-8 text-gray-600">
            Our partnerships are built around shared knowledge, technical
            expertise, local ownership, transparency, and measurable impact.
          </p>
        </div>
      </section>

      <section className="bg-[#F4F8F3] py-20 sm:py-24">
        <div className="mx-auto max-w-300 px-5 sm:px-8 lg:px-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner, index) => (
              <div
                key={partner}
                className="flex min-h-32 items-center justify-center rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm"
              >
                <div>
                  <div className="text-xs font-bold text-[#2E7D32]">
                    PARTNER {String(index + 1).padStart(2, "0")}
                  </div>

                  <p className="mt-2 font-['Manrope'] font-bold text-[#17231A]">
                    {partner}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AboutPageLayout>
  );
}