import AboutPageLayout from "../../components/about/AboutPageLayout";
import { aboutImages } from "../../data/about";

export default function Team() {
  return (
    <AboutPageLayout
      title="Our Team"
      description="A multidisciplinary team working across environmental sustainability, climate resilience, governance, engineering, research, and community development."
      image={aboutImages.team}
    >
      {/* Our People */}
      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${aboutImages.team})`,
          }}
          aria-hidden="true"
        />

        {/* Light Green Overlay */}
        <div
          className="absolute inset-0 bg-[#DDEEDC]/90"
          aria-hidden="true"
        />

        {/* Soft Gradient Overlay */}
        <div
          className="absolute inset-0 bg-linear-to-r from-white/35 via-[#EAF5E8]/20 to-white/30"
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-250 px-5 sm:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2E7D32]">
            Our People
          </p>

          <h2 className="mt-4 font-['Manrope'] text-3xl font-extrabold leading-tight tracking-[-0.03em] text-[#17231A] sm:text-4xl lg:text-5xl">
            A multidisciplinary team for complex challenges.
          </h2>

          <div className="mt-6 h-1 w-16 rounded-full bg-[#2E7D32]" />

          <div className="mt-7 max-w-4xl rounded-2xl border border-white/50 bg-white/55 p-7 shadow-sm backdrop-blur-[2px] sm:p-8">
            <p className="text-base leading-8 text-[#374151]">
              RISE brings together professionals with diverse technical
              expertise and experience in environmental management, climate
              change, natural resources, engineering, research, agriculture,
              governance, community development, and sustainable livelihoods.
            </p>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
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
                className="rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
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