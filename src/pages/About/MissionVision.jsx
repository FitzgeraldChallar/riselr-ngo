import AboutPageLayout from "../../components/about/AboutPageLayout";
import { aboutImages } from "../../data/about";

const coreValues = [
  {
    number: "01",
    title: "Stewardship",
    description:
      "We care for land, forests, water, biodiversity and the climate as shared assets held in trust for present and future generations.",
  },
  {
    number: "02",
    title: "Integrity & Accountability",
    description:
      "We act honestly, use resources responsibly, disclose conflicts of interest, and remain answerable to communities, partners and the public.",
  },
  {
    number: "03",
    title: "Inclusion & Environmental Justice",
    description:
      "We challenge exclusion and ensure that women, youth, persons with disabilities and resource-dependent communities can influence decisions that affect their lives.",
  },
  {
    number: "04",
    title: "Local Ownership",
    description:
      "We begin with community priorities, strengthen local institutions and build capacity that remains after a project ends.",
  },
  {
    number: "05",
    title: "Evidence & Learning",
    description:
      "We combine science, local knowledge and careful monitoring; we share what works, acknowledge what does not, and adapt.",
  },
  {
    number: "06",
    title: "Collaboration",
    description:
      "We build respectful partnerships across communities, government, civil society, academia and responsible business because complex environmental problems require collective action.",
  },
  {
    number: "07",
    title: "Courage & Innovation",
    description:
      "We test practical ideas, speak up for responsible resource use and pursue better solutions without compromising ethics or safeguards.",
  },
];

export default function MissionVision() {
  return (
    <AboutPageLayout
      title="Mission & Vision"
      description="Guided by stewardship, integrity, inclusion, evidence and collaboration, RISE works toward a just and climate-resilient Liberia."
      image={aboutImages.missionVision}
    >
      {/* =========================================================
          MISSION & VISION
      ========================================================= */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-350 px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            {/* Mission */}
            <div className="group relative overflow-hidden rounded-3xl bg-[#173B22] p-8 text-white sm:p-12">
              {/* Decorative element */}
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/5" />
              <div className="absolute -bottom-24 -left-16 h-48 w-48 rounded-full bg-[#B9DC7A]/10" />

              <div className="relative">
                <div className="flex items-center gap-4">
                  <span className="h-px w-10 bg-[#B9DC7A]" />

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B9DC7A]">
                    Our Mission
                  </p>
                </div>

                <h2 className="mt-8 max-w-xl font-['Manrope'] text-2xl font-extrabold leading-tight tracking-[-0.02em] sm:text-3xl lg:text-4xl">
                  RISE works with communities, young people, public
                  institutions, researchers and partners to protect and
                  restore ecosystems, strengthen climate resilience, improve
                  sustainable livelihoods, and turn evidence into inclusive
                  action and accountable natural-resource governance.
                </h2>
              </div>
            </div>

            {/* Vision */}
            <div className="group relative overflow-hidden rounded-3xl bg-[#EAF2EA] p-8 sm:p-12">
              {/* Decorative element */}
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#2E7D32]/5" />
              <div className="absolute -bottom-24 -left-16 h-48 w-48 rounded-full bg-[#2E7D32]/5" />

              <div className="relative">
                <div className="flex items-center gap-4">
                  <span className="h-px w-10 bg-[#2E7D32]" />

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2E7D32]">
                    Our Vision
                  </p>
                </div>

                <h2 className="mt-8 max-w-xl font-['Manrope'] text-2xl font-extrabold leading-tight tracking-[-0.02em] text-[#17231A] sm:text-3xl lg:text-4xl">
                  A just, climate-resilient Liberia where people prosper
                  within healthy ecosystems and natural resources are governed
                  for the common good.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CORE VALUES
      ========================================================= */}
      <section className="bg-[#F4F8F3] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-350 px-5 sm:px-8 lg:px-10">
          {/* Section Heading */}
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2E7D32]">
              Core Values
            </p>

            <h2 className="mt-4 font-['Manrope'] text-3xl font-extrabold tracking-[-0.03em] text-[#17231A] sm:text-4xl lg:text-5xl">
              Principles that guide how we work.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600">
              Our values shape the decisions we make, the partnerships we
              build and the way we engage with communities, institutions and
              the environment.
            </p>
          </div>

          {/* Values */}
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value, index) => (
              <article
                key={value.number}
                className={`
                  group relative overflow-hidden rounded-2xl border
                  border-[#DCE8DC] bg-white p-7
                  transition-all duration-300
                  hover:-translate-y-1 hover:border-[#BFD6BF]
                  hover:shadow-[0_15px_40px_rgba(23,59,34,0.08)]
                  ${
                    index === 0 || index === 6
                      ? "lg:col-span-1"
                      : ""
                  }
                `}
              >
                {/* Number */}
                <div className="flex items-center justify-between">
                  <span className="font-['Manrope'] text-sm font-extrabold tracking-wider text-[#2E7D32]">
                    {value.number}
                  </span>

                  <span className="h-8 w-8 rounded-full border border-[#DCE8DC] transition-colors duration-300 group-hover:border-[#2E7D32]" />
                </div>

                {/* Value */}
                <h3 className="mt-7 font-['Manrope'] text-xl font-extrabold leading-tight text-[#17231A] sm:text-2xl">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {value.description}
                </p>

                {/* Bottom accent */}
                <div className="mt-7 h-1 w-10 rounded-full bg-[#2E7D32] transition-all duration-300 group-hover:w-16" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CLOSING STATEMENT
      ========================================================= */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-350 px-5 sm:px-8 lg:px-10">
          <div className="relative overflow-hidden rounded-3xl bg-[#173B22] px-8 py-12 text-center sm:px-12 sm:py-16 lg:px-20">
            {/* Decorative circles */}
            <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-white/5" />
            <div className="absolute -bottom-32 -right-20 h-72 w-72 rounded-full bg-[#B9DC7A]/10" />

            <div className="relative mx-auto max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B9DC7A]">
                Our Commitment
              </p>

              <h2 className="mt-5 font-['Manrope'] text-2xl font-extrabold leading-tight tracking-[-0.02em] text-white sm:text-3xl lg:text-4xl">
                Working with integrity, learning continuously, and building
                solutions that last.
              </h2>

              <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                These principles guide RISE in turning knowledge into
                responsible action and ensuring that sustainability,
                resilience and community wellbeing remain at the centre of
                our work.
              </p>
            </div>
          </div>
        </div>
      </section>
    </AboutPageLayout>
  );
}