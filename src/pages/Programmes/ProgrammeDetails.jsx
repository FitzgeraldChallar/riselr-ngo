import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { programmes } from "../../data/programmes";

export default function ProgrammeDetails() {
  const { slug } = useParams();

  const programmeIndex = programmes.findIndex(
    (programme) => programme.slug === slug
  );

  const programme = programmes[programmeIndex];

  if (!programme) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center px-5">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2E7D32]">
            Programme
          </p>

          <h1 className="mt-3 font-['Manrope'] text-3xl font-extrabold text-[#17231A]">
            Programme not found
          </h1>

          <Link
            to="/programmes"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#2E7D32] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#245F28]"
          >
            <ArrowLeft size={16} />
            Back to Programmes
          </Link>
        </div>
      </section>
    );
  }

  const previousProgramme =
    programmeIndex > 0 ? programmes[programmeIndex - 1] : null;

  const nextProgramme =
    programmeIndex < programmes.length - 1
      ? programmes[programmeIndex + 1]
      : null;

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#17231A]">
        <div className="absolute inset-0">
          <img
            src={programme.image}
            alt={programme.title}
            className="h-full w-full object-cover opacity-30"
          />

          <div className="absolute inset-0 bg-linear-to-r from-[#17231A] via-[#17231A]/90 to-[#17231A]/40" />
        </div>

        <div className="relative mx-auto max-w-350 px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4">
              <span className="text-sm font-bold tracking-[0.2em] text-[#8BC34A]">
                {programme.number}
              </span>

              <span className="h-px w-12 bg-[#8BC34A]" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                RISE Programme
              </span>
            </div>

            <h1 className="mt-6 font-['Manrope'] text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              {programme.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl">
              {programme.shortTitle}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-350 gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2E7D32]">
              About this programme
            </p>

            <h2 className="mt-4 font-['Manrope'] text-3xl font-extrabold leading-tight text-[#17231A] sm:text-4xl">
              Creating practical solutions for sustainable development.
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              {programme.description}
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600">
              Through locally informed approaches, technical expertise, and
              meaningful partnerships, RISE works to translate knowledge into
              practical action that benefits communities, institutions, and
              the environment.
            </p>
          </div>

          {/* Image */}
          <div className="overflow-hidden rounded-3xl bg-[#EAF2EA]">
            <img
              src={programme.image}
              alt={programme.title}
              className="h-full min-h-80 w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Programme Areas */}
      <section className="bg-[#F5F9F5] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-350 px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2E7D32]">
              Programme Areas
            </p>

            <h2 className="mt-4 font-['Manrope'] text-3xl font-extrabold text-[#17231A] sm:text-4xl">
              Areas of focus
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-600">
              Our work focuses on practical interventions that respond to
              Liberia's environmental, climate, livelihood, and development
              priorities.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {programme.programmeAreas.map((area) => (
              <div
                key={area}
                className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
              >
                <CheckCircle2
                  size={21}
                  className="mt-0.5 shrink-0 text-[#2E7D32]"
                  strokeWidth={2}
                />

                <span className="text-sm font-medium leading-6 text-[#374151]">
                  {area}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-350 px-5 sm:px-8 lg:px-10">
          <div className="rounded-3xl bg-[#2E7D32] px-7 py-12 text-white sm:px-12 sm:py-16 lg:px-16">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                What we do
              </p>

              <h2 className="mt-4 font-['Manrope'] text-3xl font-extrabold sm:text-4xl">
                Turning knowledge into action.
              </h2>

              <p className="mt-6 text-base leading-8 text-white/80 sm:text-lg">
                {programme.whatWeDo}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Navigation */}
      <section className="border-t border-gray-100 bg-white">
        <div className="mx-auto flex max-w-350 flex-col gap-6 px-5 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          {previousProgramme ? (
            <Link
              to={`/programmes/${previousProgramme.slug}`}
              className="group flex items-center gap-4"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 transition-colors group-hover:border-[#2E7D32] group-hover:bg-[#EAF2EA]">
                <ArrowLeft
                  size={18}
                  className="text-gray-500 group-hover:text-[#2E7D32]"
                />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Previous programme
                </p>

                <p className="mt-1 text-sm font-bold text-[#17231A]">
                  {previousProgramme.title}
                </p>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextProgramme ? (
            <Link
              to={`/programmes/${nextProgramme.slug}`}
              className="group flex items-center justify-end gap-4 text-right"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Next programme
                </p>

                <p className="mt-1 text-sm font-bold text-[#17231A]">
                  {nextProgramme.title}
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 transition-colors group-hover:border-[#2E7D32] group-hover:bg-[#EAF2EA]">
                <ArrowRight
                  size={18}
                  className="text-gray-500 group-hover:text-[#2E7D32]"
                />
              </div>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>
    </main>
  );
}