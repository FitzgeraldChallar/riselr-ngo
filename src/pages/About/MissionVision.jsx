import AboutPageLayout from "../../components/about/AboutPageLayout";
import { aboutImages, values } from "../../data/about";

export default function MissionVision() {
  return (
    <AboutPageLayout
      title="Mission & Vision"
      description="Guided by innovation, evidence, inclusion, and a commitment to sustainable development."
      image={aboutImages.missionVision}
    >
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-300 px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Mission */}
            <div className="rounded-3xl bg-[#173B22] p-8 text-white sm:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B9DC7A]">
                Our Mission
              </p>

              <h2 className="mt-7 font-['Manrope'] text-3xl font-extrabold leading-tight sm:text-4xl">
                 RISE works with communities, young people, public institutions, researchers and partners to protect and restore ecosystems, strengthen climate resilience, improve sustainable livelihoods, and turn evidence into inclusive action and accountable natural-resource governance.
              </h2>
            </div>

            {/* Vision */}
            <div className="rounded-3xl bg-[#EAF2EA] p-8 sm:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2E7D32]">
                Our Vision
              </p>

              <h2 className="mt-7 font-['Manrope'] text-3xl font-extrabold leading-tight text-[#17231A] sm:text-4xl">
                A just, climate-resilient Liberia where people prosper within healthy ecosystems and natural resources are governed for the common good.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F8F3] py-20 sm:py-24">
        <div className="mx-auto max-w-350 px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2E7D32]">
              Our Values
            </p>

            <h2 className="mt-4 font-['Manrope'] text-3xl font-extrabold text-[#17231A] sm:text-4xl">
              What guides our decisions.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.number}
                className="rounded-2xl bg-white p-7 shadow-sm"
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
    </AboutPageLayout>
  );
}