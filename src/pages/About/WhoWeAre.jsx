import { MapPin } from "lucide-react";
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

export default function WhoWeAre() {
  return (
    <AboutPageLayout
      title="Who We Are"
      description="A Liberian-led non-profit organization advancing sustainable environmental management, climate resilience, and inclusive development."
      image={aboutImages.whoWeAre}
    >
      {/* =========================================================
          INTRODUCTION
      ========================================================= */}
      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${aboutImages.whoWeAre})`,
          }}
          aria-hidden="true"
        />

        {/* Light Green Overlay */}
        <div
          className="absolute inset-0 bg-[#DDEEDC]/90"
          aria-hidden="true"
        />

        {/* Additional soft white overlay */}
        <div
          className="absolute inset-0 bg-linear-to-r from-white/35 via-[#EAF5E8]/20 to-white/30"
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-10 mx-auto grid max-w-350 gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">
          {/* Heading */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2E7D32]">
              About RISE
            </p>

            <h2 className="mt-4 font-['Manrope'] text-3xl font-extrabold leading-tight tracking-[-0.03em] text-[#17231A] sm:text-4xl lg:text-5xl">
              Bridging global knowledge with local action.
            </h2>

            <div className="mt-6 h-1 w-16 rounded-full bg-[#2E7D32]" />
          </div>

          {/* Description */}
          <div className="rounded-2xl border border-white/50 bg-white/55 p-7 shadow-sm backdrop-blur-[2px] sm:p-8">
            <div className="space-y-5 text-base leading-8 text-[#374151]">
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
        </div>
      </section>

      {/* =========================================================
          OUR STORY
      ========================================================= */}
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
              Recognizing Liberia&apos;s urgent environmental challenges —
              ranging from deforestation and land and water degradation to
              climate vulnerability, poor waste management, and weak
              governance — RISE was established as a platform for solutions
              that are science-based, locally owned, and community-driven.
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

      {/* =========================================================
          CORE VALUES
      ========================================================= */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-350 px-5 sm:px-8 lg:px-10">
          {/* Section Heading */}
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2E7D32]">
              Our Core Values
            </p>

            <h2 className="mt-4 font-['Manrope'] text-3xl font-extrabold tracking-[-0.03em] text-[#17231A] sm:text-4xl lg:text-5xl">
              The principles that guide our work.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600">
              These principles shape how RISE makes decisions, works with
              communities and partners, manages resources, and pursues
              sustainable environmental and social outcomes.
            </p>
          </div>

          {/* Values Grid */}
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value) => (
              <article
                key={value.number}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D6E6D5] hover:shadow-[0_15px_40px_rgba(23,59,34,0.08)]"
              >
                {/* Number */}
                <div className="flex items-center justify-between">
                  <span className="font-['Manrope'] text-sm font-extrabold tracking-wider text-[#2E7D32]">
                    {value.number}
                  </span>

                  <span className="h-8 w-8 rounded-full border border-[#DCE8DC] transition-colors duration-300 group-hover:border-[#2E7D32]" />
                </div>

                {/* Value Title */}
                <h3 className="mt-7 font-['Manrope'] text-xl font-extrabold leading-tight text-[#17231A] sm:text-2xl">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {value.description}
                </p>

                {/* Accent */}
                <div className="mt-7 h-1 w-10 rounded-full bg-[#2E7D32] transition-all duration-300 group-hover:w-16" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          LEGAL STATUS
      ========================================================= */}
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
            <MapPin
              size={18}
              className="mt-1 shrink-0 text-[#B9DC7A]"
            />

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