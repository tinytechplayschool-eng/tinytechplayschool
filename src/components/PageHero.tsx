import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  gradient = "bg-gradient-hero",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  gradient?: string;
  children?: ReactNode;
}) {
  return (
    <section className={`${gradient} text-white relative overflow-hidden`}>
      <div className="absolute -top-10 -left-10 h-60 w-60 rounded-full bg-white/10 animate-blob" />
      <div className="absolute -bottom-20 -right-10 h-80 w-80 rounded-full bg-white/10 animate-blob" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        {eyebrow && (
          <p className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-sm font-semibold mb-4 backdrop-blur">
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">{title}</h1>
        {subtitle && (
          <p className="max-w-2xl mx-auto text-lg opacity-95">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
