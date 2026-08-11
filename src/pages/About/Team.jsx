import AboutPageLayout from "../../components/about/AboutPageLayout";
import { aboutImages } from "../../data/about";

export default function Team() {
  return (
    <AboutPageLayout
      title="Our Team"
      description="A multidisciplinary team working across environmental sustainability, climate resilience, governance, engineering, research, and community development."
      image={aboutImages.team}
    >
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-250 px-5 sm:px-8 lg:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2E7D32]">
            Our People
          </p>

          <h2 className="mt-4 font-['Manrope'] text-3xl font-extrabold text-[#17231A] sm:text-4xl">
            A multidisciplinary team for complex challenges.
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600">
            RISE brings together professionals with diverse technical
            expertise and experience in environmental management, climate
            change, natural resources, engineering, research, agriculture,
            governance, community development, and sustainable livelihoods.
          </p>
        </div>
      </section>

      <section className="bg-[#F4F8F3] py-20 sm:py-24">
        <div className="mx-auto max-w-350 px-5 sm:px-8 lg:px-10">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Environmental & Climate Specialists",
              "Engineers & Technical Experts",
              "Research & Knowledge Professionals",
              "Community Development Specialists",
              "Agriculture & Livelihood Experts",
              "Governance & Policy Professionals",
              "Monitoring & Evaluation Specialists",
              "Communications & Engagement",
            ].map((area, index) => (
              <div
                key={area}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <span className="text-xs font-bold text-[#2E7D32]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-4 font-['Manrope'] text-base font-bold leading-6 text-[#17231A]">
                  {area}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AboutPageLayout>
  );
}