import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { hasLocale, getDictionary } from "./dictionaries";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  const t = dict.home;

  return (
    <div className="relative min-h-screen flex flex-col">

      {/* ── HERO ── */}
      <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/p07_img2.png"
            alt="Anissa Hafidi — The End, Anfa Beach Casablanca"
            fill
            className="object-cover object-center opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/90" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto mt-16">
          <p className="text-[0.65rem] tracking-[0.5em] uppercase text-black mb-6">
            Morocco Collection · Limited Edition
          </p>
          <h1 className="text-5xl md:text-7xl font-light tracking-[0.08em] leading-tight mb-4">
            Anissa<br /><span className="font-light">Hafidi</span>
          </h1>
          <div className="divider-gold" />
          <p className="text-xs tracking-[0.35em] uppercase text-[#f5f0e8]/40 mb-2">
            {t.tagline}
          </p>
          <p className="text-[#f5f0e8]/50 text-xs mb-10">Paris · Casablanca · Genève</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${lang}/gallery`}
              className="px-8 py-3 text-xs tracking-[0.25em] uppercase border border-white/20 text-[#f5f0e8]/70 hover:border-white/50 hover:text-[#f5f0e8] transition-all duration-300"
            >
              {t.cta_gallery}
            </Link>
            <Link
              href={`/${lang}/about`}
              className="px-8 py-3 text-xs tracking-[0.25em] uppercase border border-white/20 text-[#f5f0e8]/70 hover:border-white/50 hover:text-[#f5f0e8] transition-all duration-300"
            >
              {t.cta_about}
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <span className="text-[0.55rem] tracking-[0.4em] uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#f5f0e8] to-transparent animate-pulse" />
        </div>
      </section>

      {/* ── WHY MOROCCO ── */}
      <section className="relative py-24 px-6 overflow-hidden bg-[#b5541e]">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-[0.65rem] tracking-[0.4em] uppercase text-black mb-4">Why Morocco ?</p>
          <h2 className="text-2xl md:text-3xl font-light tracking-widest mb-4">
            {t.why_morocco_title}
          </h2>
          <div className="divider-gold" />
          <p className="text-[#f5f0e8]/65 text-sm leading-relaxed max-w-xl mx-auto">
            {t.why_morocco_text}
          </p>
        </div>
      </section>

      {/* ── SÉRIE 3 PREVIEW ── */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[0.65rem] tracking-[0.4em] uppercase text-black mb-3">
              {t.serie3_label}
            </p>
            <h2 className="text-2xl md:text-3xl font-light tracking-widest">
              {t.serie3_title}
            </h2>
            <div className="divider-gold" />
          </div>

          <div className="max-w-sm mx-auto">
            <div className="artwork-card group">
              <Image
                src="/images/Série3.png"
                alt="La verticale et l'étendue — Désert du Sahara marocain, Merzouga"
                width={400}
                height={400}
                className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="artwork-overlay">
                <p className="text-white text-xs tracking-widest uppercase">
                  {t.serie3_artwork_title}
                </p>
                <p className="text-black text-xs mt-1">
                  {t.serie3_artwork_medium}
                </p>
              </div>
            </div>
            <p className="text-[#f5f0e8]/40 text-[0.65rem] tracking-widest uppercase text-center mt-3">
              {t.serie3_artwork_location}
            </p>
          </div>
        </div>
      </section>

      {/* ── SÉRIE 2 PREVIEW ── */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[0.65rem] tracking-[0.4em] uppercase text-black mb-3">
              {t.serie2_label}
            </p>
            <h2 className="text-2xl md:text-3xl font-light tracking-widest">
              {t.serie2_title}
            </h2>
            <div className="divider-gold" />
            <p className="text-[#f5f0e8]/50 text-sm">
              Acrylique au couteau · Paris · The Muisca Gallery · 2025
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: "/images/p10_img1.jpeg", title: "After Tea", price: "1 300 €" },
              { src: "/images/p14_img1.jpeg", title: "Dyptique Majorelle", price: "1 600 €" },
              { src: "/images/p12_img1.jpeg", title: "Réminiscence", price: "2 100 €" },
              { src: "/images/Série2.jpg", title: "The End", price: "3 000 €" },
            ].map((a) => (
              <div key={a.title} className="artwork-card group">
                <Image
                  src={a.src}
                  alt={a.title}
                  width={400}
                  height={400}
                  className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized={a.src.startsWith("http")}
                />
                <div className="artwork-overlay">
                  <p className="text-white text-xs tracking-widest uppercase">{a.title}</p>
                  <p className="text-black text-xs mt-1">{a.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href={`/${lang}/gallery`}
              className="inline-block px-10 py-3 text-xs tracking-[0.25em] uppercase border border-black text-black hover:bg-black hover:text-black transition-all duration-300"
            >
              {t.serie2_cta}
            </Link>
          </div>
        </div>
      </section>

      {/* ── SÉRIE 1 — Marrakech Set ── */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative overflow-hidden">
            <Image
              src="/images/p04_img2.png"
              alt="Marrakech Set"
              width={800}
              height={600}
              className="w-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-black text-black text-[0.6rem] tracking-[0.2em] uppercase px-3 py-1">
              Best Seller
            </div>
          </div>
          <div>
            <p className="text-[0.65rem] tracking-[0.4em] uppercase text-black mb-4">
              {t.serie1_label}
            </p>
            <h2 className="text-2xl md:text-3xl font-light tracking-widest mb-4">Marrakech Set</h2>
            <div className="w-8 h-px bg-black mb-6" />
            <p className="text-[#f5f0e8]/65 text-sm leading-relaxed mb-4">
              {t.serie1_p1}
            </p>
            <p className="text-[#f5f0e8]/65 text-sm leading-relaxed mb-8">
              {t.serie1_p2}
            </p>
            <Link
              href={`/${lang}/gallery`}
              className="text-xs tracking-[0.25em] uppercase text-black border-b border-black/40 pb-1 hover:border-black transition-colors duration-300"
            >
              {t.serie1_cta}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
