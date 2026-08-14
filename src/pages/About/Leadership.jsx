import { UserRound } from "lucide-react";
import AboutPageLayout from "../../components/about/AboutPageLayout";
import { aboutImages } from "../../data/about";

const leaders = [
  {
    name: "Alexander G. Wrehyou",
    role: "Founder & Senior Advisor - BSc, MSc, MSc(Hon), PGip, Cert",
    image: "/images/rise-leader-1.jpg",
    version: "1",
  },
  {
    name: "Faith Emmey Blapooh",
    role: "Team Lead / Executive Director - BSc, MSc, MSc",
    image: "/images/rise-leader-5.jpg",
    version: "5",
  },
  {
    name: "Ezekiel Korlubah",
    role: "Programmes Manager - BSc, MSc, Cert",
    image: "/images/rise-leader-4.jpg",
    version: "4",
  },
  {
    name: "Christian O.C. Davis",
    role: "Lead for Partnership, Communication & Outreach Officer - BA, Dip., Certs",
    image: "/images/rise-leader-7.jpg",
    version: "7",
  },
  {
    name: "Reuben S. Ban",
    role: "Lead for Environment & Climate Action - BSc, MSc, Cert",
    image: "/images/rise-leader-2.jpg",
    version: "2",
  },
  {
    name: "Rebecca Kumba Fallah",
    role: "Lead for Natural Resources, Biodiversity & Livelihoods - BSc, MSc, Cert",
    image: "/images/rise-leader-6.jpg",
    version: "6",
  },
  {
    name: "Smith Jallah Saywaye",
    role: "Gis, Research & Data Specialist - BSc, MSc, Certs",
    image: "/images/rise-leader-3.jpg",
    version: "3",
  },
];

export default function Leadership() {
  // Explicit row arrangement:
  // Row 1 → 2 leaders
  // Row 2 → 2 leaders
  // Row 3 → 3 leaders
  const firstRow = leaders.slice(0, 2);
  const secondRow = leaders.slice(2, 4);
  const thirdRow = leaders.slice(4, 7);

  const LeaderCard = ({ leader }) => {
    /*
     * Cache-busting query parameter.
     * Useful when replacing an image on Vercel while
     * keeping the same filename.
     */
    const imageSrc = `${leader.image}?v=${leader.version}`;

    return (
      <article
        className="
          w-full
          max-w-70
          overflow-hidden
          rounded-2xl
          border
          border-gray-100
          bg-white
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-lg
        "
      >
        {/* =====================================================
            LEADER IMAGE
        ===================================================== */}
        <div className="relative aspect-[4/4.1] overflow-hidden bg-[#EAF2EA]">
          <img
            key={imageSrc}
            src={imageSrc}
            alt={`${leader.name} - ${leader.role}`}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
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
            <UserRound
              size={48}
              strokeWidth={1.2}
            />
          </div>
        </div>

        {/* =====================================================
            LEADER INFORMATION
        ===================================================== */}
        <div className="p-5">
          <h3 className="font-['Manrope'] text-base font-bold leading-6 text-[#17231A]">
            {leader.name}
          </h3>

          <p className="mt-2 text-xs leading-5 text-[#2E7D32]">
            {leader.role}
          </p>
        </div>
      </article>
    );
  };

  return (
    <AboutPageLayout
      title="Leadership"
      description="Meet the professionals providing strategic direction and technical leadership for RISE."
      image={aboutImages.leadership}
    >
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-350 px-5 sm:px-8 lg:px-10">

          {/* =========================================================
              INTRODUCTION
          ========================================================= */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2E7D32]">
              Leadership
            </p>

            <h2 className="mt-4 font-['Manrope'] text-3xl font-extrabold tracking-[-0.03em] text-[#17231A] sm:text-4xl">
              Experienced professionals. Local leadership.
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-600">
              Our team brings together Liberian expertise and lived
              experience across environmental management, community
              development, agriculture, education, research, monitoring
              and organizational leadership. We value interdisciplinary
              work, ethical practice and the ability to translate
              knowledge into useful action.
            </p>
          </div>

          {/* =========================================================
              LEADERSHIP CARDS
          ========================================================= */}
          <div className="mt-14 space-y-8">

            {/* =====================================================
                ROW 1 — TWO LEADERS
            ===================================================== */}
            <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
              {firstRow.map((leader) => (
                <LeaderCard
                  key={`${leader.name}-${leader.image}`}
                  leader={leader}
                />
              ))}
            </div>

            {/* =====================================================
                ROW 2 — TWO LEADERS
            ===================================================== */}
            <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
              {secondRow.map((leader) => (
                <LeaderCard
                  key={`${leader.name}-${leader.image}`}
                  leader={leader}
                />
              ))}
            </div>

            {/* =====================================================
                ROW 3 — THREE LEADERS
            ===================================================== */}
            <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:flex-wrap">
              {thirdRow.map((leader) => (
                <LeaderCard
                  key={`${leader.name}-${leader.image}`}
                  leader={leader}
                />
              ))}
            </div>

          </div>

          {/* =========================================================
              LEADERSHIP STRUCTURE
          ========================================================= */}
          <section className="mt-24 border-t border-gray-100 pt-20 sm:mt-28 sm:pt-24">

            {/* Section Heading */}
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2E7D32]">
                Organizational Structure
              </p>

              <h2 className="mt-4 font-['Manrope'] text-3xl font-extrabold tracking-[-0.03em] text-[#17231A] sm:text-4xl">
                Leadership Structure
              </h2>

              <p className="mt-5 text-base leading-8 text-gray-600">
                An overview of the leadership and organizational structure
                through which RISE coordinates its programmes, partnerships
                and technical work.
              </p>
            </div>

            {/* Structure Image */}
            <div className="mx-auto mt-12 max-w-6xl">
              <div className="overflow-hidden rounded-2xl border border-gray-100 bg-[#F4F8F3] p-3 shadow-sm sm:p-5 lg:p-7">
                <img
                  src="/images/leadership-structure.jpg"
                  alt="RISE organizational leadership structure"
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full rounded-xl object-contain"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";

                    const fallback =
                      event.currentTarget.nextElementSibling;

                    if (fallback) {
                      fallback.style.display = "flex";
                    }
                  }}
                />

                {/* Image fallback */}
                <div className="hidden min-h-60 items-center justify-center rounded-xl bg-[#EAF2EA] px-6 text-center text-[#2E7D32]">
                  <div>
                    <UserRound
                      size={48}
                      strokeWidth={1.2}
                      className="mx-auto"
                    />

                    <p className="mt-4 text-sm font-medium">
                      Leadership structure image coming soon.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </section>

        </div>
      </section>
    </AboutPageLayout>
  );
}