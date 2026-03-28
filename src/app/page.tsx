import Link from "next/link";
import Image from "next/image";

const WP = "https://galerieani.infy.uk/wp-content/uploads/2025";
const WIX = "https://static.wixstatic.com/media";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">

      {/* ── HERO ── */}
      <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={`${WP}/05/WhatsApp-Image-2025-05-12-at-11.01.32-PM-704x1024.jpeg`}
            alt="Anissa Hafidi"
            fill
            className="object-cover object-top opacity-35"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/90" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto mt-16">
          <p className="text-[0.65rem] tracking-[0.5em] uppercase text-[#c9a84c] mb-6">
            Morocco Collection · Limited Edition
          </p>
          <h1 className="text-5xl md:text-7xl font-light tracking-[0.08em] leading-tight mb-4">
            Anissa<br /><span className="italic text-[#c9a84c]">Hafidi</span>
          </h1>
          <div className="divider-gold" />
          <p className="text-xs tracking-[0.35em] uppercase text-[#f5f0e8]/40 mb-2">Artiste Peintre · Anissheart</p>
          <p className="text-[#f5f0e8]/50 text-xs mb-10">Paris · Casablanca · Genève · Bordeaux</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gallery"
              className="px-8 py-3 text-xs tracking-[0.25em] uppercase border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-black transition-all duration-300">
              Voir les Œuvres
            </Link>
            <Link href="/about"
              className="px-8 py-3 text-xs tracking-[0.25em] uppercase border border-white/20 text-[#f5f0e8]/70 hover:border-white/50 hover:text-[#f5f0e8] transition-all duration-300">
              À Propos
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <span className="text-[0.55rem] tracking-[0.4em] uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#f5f0e8] to-transparent animate-pulse" />
        </div>
      </section>

      {/* ── WHY MOROCCO ── */}
      <section className="py-24 px-6 text-center border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <p className="text-[0.65rem] tracking-[0.4em] uppercase text-[#c9a84c] mb-4">Why Morocco ?</p>
          <h2 className="text-2xl md:text-3xl font-light tracking-widest mb-4">Une symphonie de vie</h2>
          <div className="divider-gold" />
          <p className="text-[#f5f0e8]/65 text-sm leading-relaxed max-w-xl mx-auto">
            Ani célèbre l&apos;âme de son pays, où les battements de cœur résonnent en harmonie avec ceux de ses habitants.
            Chaque tableau est une pulsation — un battement suspendu entre la joie et la mélancolie,
            la légèreté et la complexité, la lumière et l&apos;obscurité.
          </p>
        </div>
      </section>

      {/* ── SÉRIE 2 PREVIEW ── */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[0.65rem] tracking-[0.4em] uppercase text-[#c9a84c] mb-3">Série 2 · Echoes of Heart</p>
            <h2 className="text-2xl md:text-3xl font-light tracking-widest">Bleu Klein · Orange · Noir Soulages</h2>
            <div className="divider-gold" />
            <p className="text-[#f5f0e8]/50 text-sm">Acrylique au couteau · Paris · The Muisca Gallery · 2025</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: `${WIX}/b18fbb_f002dba6b0ed430bb0d2ff49a69bce7a~mv2.png`, title: "After Tea", price: "1 300 €" },
              { src: `${WIX}/b18fbb_393330155b9d46c2b9718c519316d956~mv2.png`, title: "The End", price: "3 000 €" },
              { src: `${WIX}/b18fbb_cae91198dfbc4439b2aa902f3747fa16~mv2.png`, title: "Réminiscence", price: "2 100 €" },
              { src: `${WIX}/b18fbb_9aabcb39edd941e781079ec20b7bd4a8~mv2.png`, title: "Dyptique Majorelle", price: "1 600 €" },
            ].map((a) => (
              <div key={a.title} className="artwork-card group">
                <Image src={a.src} alt={a.title} width={400} height={400}
                  className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized />
                <div className="artwork-overlay">
                  <p className="text-white text-xs tracking-widest uppercase">{a.title}</p>
                  <p className="text-[#c9a84c] text-xs mt-1">{a.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/gallery"
              className="inline-block px-10 py-3 text-xs tracking-[0.25em] uppercase border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-black transition-all duration-300">
              Découvrir la collection complète
            </Link>
          </div>
        </div>
      </section>

      {/* ── MARRAKECH SET ── */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-3">
            <Image src={`${WIX}/b18fbb_25782a6965fe4515aad6aaa7c01f9f62~mv2.png`} alt="Marrakech"
              width={400} height={400} className="w-full aspect-square object-cover" unoptimized />
            <Image src={`${WIX}/b18fbb_d0186b2a11c54f1aa2f4a6a7faed90f4~mv2.png`} alt="Tanger II"
              width={400} height={400} className="w-full aspect-square object-cover" unoptimized />
          </div>
          <div>
            <p className="text-[0.65rem] tracking-[0.4em] uppercase text-[#c9a84c] mb-4">Série 1 · Cities of Atlas</p>
            <h2 className="text-2xl md:text-3xl font-light tracking-widest mb-4">Itinéraire artistique</h2>
            <div className="w-8 h-px bg-[#c9a84c] mb-6" />
            <p className="text-[#f5f0e8]/65 text-sm leading-relaxed mb-4">
              La Série 1 trace un itinéraire artistique à travers des villes riches en histoire.
              Chaque toile capture des fragments de leur passé, des codes architecturaux et des couches culturelles.
            </p>
            <p className="text-[#f5f0e8]/65 text-sm leading-relaxed mb-8">
              Ensemble, elles offrent une interprétation multi-sensorielle du patrimoine —
              une archive visuelle façonnée par l&apos;émotion, la texture et la couleur.
            </p>
            <Link href="/gallery"
              className="text-xs tracking-[0.25em] uppercase text-[#c9a84c] border-b border-[#c9a84c]/40 pb-1 hover:border-[#c9a84c] transition-colors duration-300">
              Voir la Série 1 →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
