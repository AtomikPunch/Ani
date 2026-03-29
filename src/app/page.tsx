import Link from "next/link";
import Image from "next/image";

const WIX = "https://static.wixstatic.com/media";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">

      {/* ── HERO — Ani au coucher de soleil avec "The End" ── */}
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
            Anissa<br /><span className="italic text-black">Hafidi</span>
          </h1>
          <div className="divider-gold" />
          <p className="text-xs tracking-[0.35em] uppercase text-[#f5f0e8]/40 mb-2">Artiste Peintre · Anissheart</p>
          <p className="text-[#f5f0e8]/50 text-xs mb-10">Paris · Casablanca · Genève · Bordeaux</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gallery"
              className="px-8 py-3 text-xs tracking-[0.25em] uppercase border border-black text-black hover:bg-black hover:text-black transition-all duration-300">
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

      {/* ── WHY MOROCCO — fond dunes + peinture ── */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/p02_img1.png" alt="Sahara et Majorelle" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-black/65" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-[0.65rem] tracking-[0.4em] uppercase text-black mb-4">Why Morocco ?</p>
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
            <p className="text-[0.65rem] tracking-[0.4em] uppercase text-black mb-3">Série 2 · Echoes of Heart</p>
            <h2 className="text-2xl md:text-3xl font-light tracking-widest">Bleu Klein · Orange · Noir Soulages</h2>
            <div className="divider-gold" />
            <p className="text-[#f5f0e8]/50 text-sm">Acrylique au couteau · Paris · The Muisca Gallery · 2025</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: "/images/p10_img1.jpeg", title: "After Tea", price: "1 300 €" },
              { src: "/images/p14_img1.jpeg", title: "Dyptique Majorelle", price: "1 600 €" },
              { src: "/images/p12_img1.jpeg", title: "Réminiscence", price: "2 100 €" },
              { src: `${WIX}/b18fbb_393330155b9d46c2b9718c519316d956~mv2.png`, title: "The End", price: "3 000 €" },
            ].map((a) => (
              <div key={a.title} className="artwork-card group">
                <Image src={a.src} alt={a.title} width={400} height={400}
                  className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized={a.src.startsWith("http")} />
                <div className="artwork-overlay">
                  <p className="text-white text-xs tracking-widest uppercase">{a.title}</p>
                  <p className="text-black text-xs mt-1">{a.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/gallery"
              className="inline-block px-10 py-3 text-xs tracking-[0.25em] uppercase border border-black text-black hover:bg-black hover:text-black transition-all duration-300">
              Découvrir la collection complète
            </Link>
          </div>
        </div>
      </section>

      {/* ── SÉRIE 1 — Marrakech Set ── */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative overflow-hidden">
            <Image src="/images/p04_img2.png" alt="Marrakech Set" width={800} height={600} className="w-full object-cover" />
            <div className="absolute top-4 left-4 bg-black text-black text-[0.6rem] tracking-[0.2em] uppercase px-3 py-1">
              Best Seller
            </div>
          </div>
          <div>
            <p className="text-[0.65rem] tracking-[0.4em] uppercase text-black mb-4">Série 1 · Cities of Atlas</p>
            <h2 className="text-2xl md:text-3xl font-light tracking-widest mb-4">Marrakech Set</h2>
            <div className="w-8 h-px bg-black mb-6" />
            <p className="text-[#f5f0e8]/65 text-sm leading-relaxed mb-4">
              Ce triptyque capture les contrastes de la ville ocre. Le bleu Klein et Majorelle évoque
              les jardins Majorelle, havre de calme et de contemplation.
            </p>
            <p className="text-[#f5f0e8]/65 text-sm leading-relaxed mb-8">
              L&apos;orange renvoie à la lumière chaude sur les remparts, et le noir de Soulages,
              dense et subtil, rappelle les anciennes portes, les nuits étoilées et les mystères de la Médina.
            </p>
            <Link href="/gallery"
              className="text-xs tracking-[0.25em] uppercase text-black border-b border-black/40 pb-1 hover:border-black transition-colors duration-300">
              Voir la Série 1 →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
