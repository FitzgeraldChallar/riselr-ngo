import { UserRound } from "lucide-react";
import AboutPageLayout from "../../components/about/AboutPageLayout";
import { aboutImages } from "../../data/about";

const leaders = [
  {
    name: "Alexander G. Wrehyou",
    role: "Founder / Technical Manager",
    image: "/images/rise-leader-1.jpg",
  },
  {
    name: "Reuben S. Ban",
    role: "Team Lead",
    image: "/images/rise-leader-2.jpg",
  },
  {
    name: "Smith Jallah Saywaye",
    role: "Environmental Manager",
    image: "/images/rise-leader-3.jpg",
  },
  {
    name: "Ezekiel Korlubah",
    role: "Senior Agriculturist / Soil Scientist",
    image: "/images/rise-leader-4.jpg",
  },
];

export default function Leadership() {
  return (
    <AboutPageLayout
      title="Leadership"
      description="Meet the professionals providing strategic direction and technical leadership for RISE."
      image={aboutImages.leadership}
    >
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-350 px-5 sm:px-8 lg:px-10">
          {/* Introduction */}
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2E7D32]">
              Leadership
            </p>

            <h2 className="mt-4 font-['Manrope'] text-3xl font-extrabold text-[#17231A] sm:text-4xl">
              Experienced professionals. Local leadership.
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-600">
             Our team brings together Liberian expertise and lived experience across environmental management, community development, agriculture, education, research, monitoring and organizational leadership. We value interdisciplinary work, ethical practice and the ability to translate knowledge into useful action.
            </p>
          </div>

          {/* Leadership Cards */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {leaders.map((leader) => (
              <article
                key={leader.role}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                {/* Leader Image */}
                <div className="relative aspect-[4/4.2] overflow-hidden bg-[#EAF2EA]">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="absolute inset-0 h-full w-full object-cover"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";

                      const fallback =
                        event.currentTarget.nextElementSibling;

                      if (fallback) {
                        fallback.style.display = "flex";
                      }
                    }}
                  />

                  {/* Fallback shown only when image fails */}
                  <div className="absolute inset-0 hidden items-center justify-center text-[#2E7D32]">
                    <UserRound size={55} strokeWidth={1.2} />
                  </div>
                </div>

                {/* Leader Information */}
                <div className="p-6">
                  <h3 className="font-['Manrope'] text-lg font-bold leading-6 text-[#17231A]">
                    {leader.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#2E7D32]">
                    {leader.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </AboutPageLayout>
  );
}