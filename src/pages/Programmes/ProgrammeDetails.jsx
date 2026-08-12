import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  UsersRound,
} from "lucide-react";
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

          <h1 className="mt-4 font-['Manrope'] text-3xl font-extrabold text-[#17231A]">
            Programme not found
          </h1>

          <p className="mt-4 text-gray-600">
            The programme you are looking for could not be found.
          </p>

          <Link
            to="/programmes"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#173B22] px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
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
    <div>
      {/* Hero */}
      <section className="relative min-h-[58vh] overflow-hidden">
        <img
          src={programme.image}
          alt={programme.title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#173B22]/75" />

        <div className="relative mx-auto flex min-h-[58vh] max-w-350 items-end px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="max-w-4xl text-white">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#B9DC7A]">
              Programme {programme.number}
            </p>

            <h1 className="mt-4 font-['Manrope'] text-4xl font-extrabold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              {programme.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg font-medium italic leading-8 text-white/85 sm:text-xl">
              {programme.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Programme Objective */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-350 gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2E7D32]">
              Programme Objective
            </p>

            <h2 className="mt-4 font-['Manrope'] text-3xl font-extrabold leading-tight tracking-[-0.03em] text-[#17231A] sm:text-4xl">
              What we aim to achieve.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-9 text-gray-600">
              {programme.objective}
            </p>
          </div>
        </div>
      </section>

      {/* Our Focus */}
      <section className="bg-[#F4F8F3] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-350 px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2E7D32]">
              Our Focus
            </p>

            <h2 className="mt-4 font-['Manrope'] text-3xl font-extrabold tracking-[-0.03em] text-[#17231A] sm:text-4xl">
              Areas where we concentrate our efforts.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {programme.focus.map((item, index) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl border border-[#DCE8DB] bg-white p-6"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EAF2EA] text-xs font-bold text-[#2E7D32]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-sm leading-7 text-gray-600">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What This May Include */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-350 px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2E7D32]">
              What This May Include
            </p>

            <h2 className="mt-4 font-['Manrope'] text-3xl font-extrabold tracking-[-0.03em] text-[#17231A] sm:text-4xl">
              Turning priorities into practical action.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {programme.activities.map((activity) => (
              <div
                key={activity}
                className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm"
              >
                <CheckCircle2
                  size={22}
                  className="text-[#2E7D32]"
                  strokeWidth={2}
                />

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {activity}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Change We Seek */}
      <section className="bg-[#173B22] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-250 px-5 text-center sm:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B9DC7A]">
            The Change We Seek
          </p>

          <h2 className="mt-4 font-['Manrope'] text-3xl font-extrabold tracking-[-0.03em] text-white sm:text-4xl">
            Creating lasting, measurable change.
          </h2>

          <p className="mt-7 text-lg leading-9 text-white/75">
            {programme.change}
          </p>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-350 px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <UsersRound size={34} className="text-[#2E7D32]" />

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#2E7D32]">
                Who We Work With
              </p>

              <h2 className="mt-4 font-['Manrope'] text-3xl font-extrabold tracking-[-0.03em] text-[#17231A] sm:text-4xl">
                Partnerships that make change possible.
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {programme.partners.map((partner) => (
                <div
                  key={partner}
                  className="rounded-xl bg-[#F4F8F3] px-5 py-4 text-sm font-medium text-[#31513A]"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programme Navigation */}
      <section className="border-t border-gray-100 bg-[#FAFCFA] py-10">
        <div className="mx-auto flex max-w-350 flex-col gap-5 px-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          {previousProgramme ? (
            <Link
              to={`/programmes/${previousProgramme.slug}`}
              className="group flex items-center gap-3 text-sm font-semibold text-[#173B22]"
            >
              <ArrowLeft
                size={18}
                className="transition-transform group-hover:-translate-x-1"
              />

              <span>
                Previous
                <span className="ml-2 text-gray-500">
                  Programme {previousProgramme.number}
                </span>
              </span>
            </Link>
          ) : (
            <div />
          )}

          <Link
            to="/programmes"
            className="text-sm font-bold text-[#2E7D32] hover:underline"
          >
            All Programmes
          </Link>

          {nextProgramme ? (
            <Link
              to={`/programmes/${nextProgramme.slug}`}
              className="group flex items-center justify-end gap-3 text-sm font-semibold text-[#173B22]"
            >
              <span>
                Next
                <span className="ml-2 text-gray-500">
                  Programme {nextProgramme.number}
                </span>
              </span>

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>
    </div>
  );
}