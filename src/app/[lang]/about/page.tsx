import Image from "next/image";
import { notFound } from "next/navigation";
import { hasLocale, getDictionary } from "../dictionaries";

export async function generateMetadata({ params }: PageProps<"/[lang]/about">) {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    title: `About — Anissa Hafidi · ${dict.about.meta_title}`,
    description: "Artiste franco-marocaine entre Paris, Casablanca et Genève.",
  };
}

export default async function AboutPage({ params }: PageProps<"/[lang]/about">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  const t = dict.about;

  return (
    <div className="pt-16 min-h-screen">

      {/* ── HEADER ── */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/p13_img1.jpeg"
            alt="Anissa Hafidi à la galerie"
            fill
            className="object-cover object-top opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/85" />
        </div>
        <div className="relative z-10">
          <p className="text-[0.65rem] tracking-[0.5em] uppercase text-black mb-4">
            {t.page_label}
          </p>
          <h1 className="text-4xl md:text-6xl font-light tracking-[0.1em] mb-3">Anissa Hafidi</h1>
          <div className="divider-gold" />
          <p className="text-xs tracking-[0.3em] uppercase text-[#f5f0e8]/40 mb-4">
            {t.meta_title}
          </p>
          <div className="flex justify-center">
            <Image
              src="/images/signature2.jpg"
              alt="Signature Anissa Hafidi"
              width={160}
              height={94}
              className="h-10 w-auto object-contain mix-blend-screen opacity-100"
            />
          </div>
        </div>
      </section>

      {/* ── BIO ── */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Photo */}
          <div className="relative">
            <div className="relative overflow-hidden aspect-[3/4]">
              <Image
                src="/images/About.jpg"
                alt="Anissa Hafidi devant ses œuvres"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="mt-8 flex flex-col gap-3">
              {["Paris", "Casablanca", "Genève"].map((city) => (
                <div key={city} className="flex items-center gap-3">
                  <span className="w-6 h-px bg-black" />
                  <span className="text-xs tracking-[0.25em] uppercase text-[#f5f0e8]/50">{city}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Texte bio */}
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-sm tracking-[0.3em] uppercase text-black mb-5">
                {t.section1_title}
              </h2>
              <p className="text-[#f5f0e8]/75 leading-relaxed text-sm mb-4">
                {t.section1_p1}
              </p>
              <p className="text-[#f5f0e8]/75 leading-relaxed text-sm">
                {t.section1_p2}
              </p>
            </div>

            <div>
              <h2 className="text-sm tracking-[0.3em] uppercase text-black mb-5">
                {t.section2_title}
              </h2>
              <p className="text-[#f5f0e8]/75 leading-relaxed text-sm mb-4">
                {t.section2_p1}
              </p>
              <p className="text-[#f5f0e8]/75 leading-relaxed text-sm mb-4">
                {t.section2_p2}
              </p>
              <p className="text-[#f5f0e8]/75 leading-relaxed text-sm">
                {t.section2_p3}
              </p>
            </div>

            <div>
              <h2 className="text-sm tracking-[0.3em] uppercase text-black mb-5">
                {t.section3_title}
              </h2>
              <p className="text-[#f5f0e8]/75 leading-relaxed text-sm mb-4">
                {t.section3_p1}
              </p>
              <p className="text-[#f5f0e8]/75 leading-relaxed text-sm mb-4">
                {t.section3_p2}
              </p>
              <p className="text-[#f5f0e8]/75 leading-relaxed text-sm">
                {t.section3_p3}
              </p>
            </div>

            <div className="border-t border-white/10 pt-8">
              <p className="text-[0.6rem] tracking-[0.3em] uppercase text-[#f5f0e8]/30 mb-5">Contact</p>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:galerieani.pro@gmail.com"
                  className="inline-flex items-center gap-3 text-sm text-black hover:text-[#f5f0e8] transition-colors duration-300"
                >
                  <span className="w-4 h-px bg-black" />galerieani.pro@gmail.com
                </a>
                <a
                  href="https://instagram.com/anissheart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm text-[#f5f0e8]/50 hover:text-black transition-colors duration-300"
                >
                  <span className="w-4 h-px bg-white/30" />@anissheart
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALERIE OPENING ── */}
      <section className="border-t border-white/5 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[0.65rem] tracking-[0.4em] uppercase text-black mb-3">
              {t.opening_label}
            </p>
            <h2 className="text-2xl font-light tracking-widest">{t.opening_title}</h2>
            <div className="divider-gold" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative overflow-hidden aspect-square">
              <Image
                src="/images/p06_img1.png"
                alt="Tanger III"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <p className="text-xs tracking-widest uppercase text-[#f5f0e8]/80">Tanger III</p>
              </div>
            </div>
            <div className="relative overflow-hidden aspect-square">
              <Image
                src="/images/p04_img1.png"
                alt="Marrakech Set"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <p className="text-xs tracking-widest uppercase text-[#f5f0e8]/80">Marrakech Set</p>
              </div>
            </div>
            <div className="relative overflow-hidden aspect-square col-span-2 md:col-span-1">
              <Image
                src="/images/p11_img1.jpeg"
                alt="Série 2 — Echoes of Heart"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <p className="text-xs tracking-widest uppercase text-[#f5f0e8]/80">
                  Série 2 · Echoes of Heart
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ART LEASING ── */}
      <section className="border-t border-white/5 py-20 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[0.65rem] tracking-[0.4em] uppercase text-black mb-4">
              {t.services_label}
            </p>
            <h2 className="text-2xl font-light tracking-widest mb-4">{t.services_title}</h2>
            <div className="w-8 h-px bg-black mb-6" />
            <p className="text-[#f5f0e8]/65 text-sm leading-relaxed mb-4">
              {t.services_p1}
            </p>
            <p className="text-[#f5f0e8]/65 text-sm leading-relaxed mb-6">
              {t.services_p2}
            </p>
            <a
              href="mailto:galerieani.pro@gmail.com"
              className="text-xs tracking-[0.25em] uppercase text-black border-b border-black/40 pb-1 hover:border-black transition-colors duration-300"
            >
              {t.services_cta}
            </a>
          </div>
          <div className="relative overflow-hidden">
            <Image
              src="/images/p15_img1.jpeg"
              alt="Art Leasing — La Défense Paris"
              width={800}
              height={600}
              className="w-full object-cover"
            />
            <p className="text-[0.6rem] tracking-wider text-[#f5f0e8]/30 mt-3 text-center uppercase">
              La Défense Business Center · Paris
            </p>
          </div>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className="border-t border-white/5 py-20 px-6 text-center">
        <blockquote className="max-w-2xl mx-auto">
          <p className="text-lg md:text-xl font-light leading-relaxed italic text-[#f5f0e8]/70">
            &ldquo;Each artwork is a pulse — a heartbeat caught between joy and sorrow,
            lightness and complexity, light and darkness.&rdquo;
          </p>
          <div className="divider-gold" />
          <cite className="text-[0.65rem] tracking-[0.35em] uppercase text-black not-italic">
            Anissa Hafidi
          </cite>
        </blockquote>
      </section>

    </div>
  );
}
