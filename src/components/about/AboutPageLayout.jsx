import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { aboutNavigation } from "../../data/about";

export default function AboutPageLayout({
  eyebrow = "About RISE",
  title,
  description,
  image,
  children,
}) {
  return (
    <div className="bg-white">
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-[#173B22]">
        <div className="absolute inset-0">
          {image && (
            <img
              src={image}
              alt=""
              className="h-full w-full object-cover opacity-30"
            />
          )}

          <div className="absolute inset-0 bg-linear-to-r from-[#102C1A] via-[#173B22]/90 to-[#173B22]/65" />
        </div>

        <div className="relative mx-auto max-w-350 px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B9DC7A]">
              {eyebrow}
            </p>

            <h1 className="mt-4 font-['Manrope'] text-4xl font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            {description && (
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                {description}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* About Navigation */}
      <div className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-350 overflow-x-auto px-5 sm:px-8 lg:px-10">
          <nav className="flex min-w-max items-center gap-7">
            {aboutNavigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="border-b-2 border-transparent py-5 text-sm font-semibold text-gray-500 transition-colors hover:border-[#2E7D32] hover:text-[#2E7D32]"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Page Content */}
      {children}
    </div>
  );
}