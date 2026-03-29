"use client";

import Image from "next/image";

const serie2 = [
  {
    title: "After Tea", subtitle: "Autoportrait",
    size: "50×50 cm", price: "1 300 €",
    image: "/images/p10_img1.jpeg",
    description: "Bleu Majorelle, orange ocre terreux, noir Soulages. Le rituel du thé marocain étendu en méditation.",
  },
  {
    title: "The End", subtitle: "Al Hank Lighthouse · Casablanca",
    size: "130×97 cm", price: "3 000 €",
    image: "/images/p07_img2.png",
    description: "La fin non comme silence, mais comme transformation — un rythme qui résonne à travers lumière, ombre et émotion.",
  },
  {
    title: "Réminiscence", subtitle: "Blue Klein & Majorelle",
    size: "80×80 cm", price: "2 100 €",
    image: "/images/p12_img1.jpeg",
    description: "Un cercle se déploie depuis le centre — le bleu devient une lumière dense, presque tactile, espace de méditation.",
  },
  {
    title: "Dyptique Majorelle", subtitle: "Silence absolu",
    size: "60×60 cm", price: "1 600 €",
    image: "/images/p14_img1.jpeg",
    description: "Le bleu et l'orange s'opposent. La ligne centrale marque la frontière entre ces deux souffles et deux mondes.",
  },
];

const serie1 = [
  {
    title: "Casablanca", subtitle: "2023 · Édition limitée",
    size: undefined, price: "Best Seller",
    image: "/images/p05_img1.jpeg",
    description: "La plus vendue et reproduite de la série. Casablanca marque le début du voyage de Galerie Ani.",
  },
  {
    title: "Tanger III", subtitle: "The Sounds of Tangier",
    size: undefined, price: "Sur demande",
    image: "/images/p06_img1.png",
    description: "Le vert, symbole de guérison, de patrimoine et d'identité enracinée, traverse ce tableau.",
  },
  {
    title: "Marrakech", subtitle: "The Red City",
    size: undefined, price: "1 900 €",
    image: "https://static.wixstatic.com/media/b18fbb_25782a6965fe4515aad6aaa7c01f9f62~mv2.png",
    description: "Klein et Majorelle bleu, orange des remparts, noir de Soulages — les contrastes de la ville ocre.",
  },
  {
    title: "Tanger II", subtitle: "Cities of Atlas",
    size: undefined, price: "Sur demande",
    image: "https://static.wixstatic.com/media/b18fbb_d0186b2a11c54f1aa2f4a6a7faed90f4~mv2.png",
    description: "Tanger, carrefour entre continents et empires, porte le poids des siècles dans son silence.",
  },
];

function ArtworkCard({ a }: { a: typeof serie2[0] }) {
  return (
    <div className="artwork-card group flex flex-col">
      <div className="relative overflow-hidden">
        <Image src={a.image} alt={a.title} width={600} height={600}
          className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
          unoptimized={a.image.startsWith("http")} />
        <div className="artwork-overlay">
          <p className="text-black text-[0.6rem] tracking-widest uppercase mb-1">{a.subtitle}</p>
          <p className="text-white text-sm font-light tracking-widest uppercase">{a.title}</p>
          <p className="text-white/60 text-xs mt-1">{a.size ? `${a.size} · ` : ""}{a.price}</p>
        </div>
      </div>
      <div className="pt-3 px-1">
        <p className="text-[#f5f0e8]/80 text-xs tracking-widest uppercase font-light">{a.title}</p>
        <p className="text-black text-[0.65rem] mt-0.5">{a.price}</p>
      </div>
    </div>
  );
}

export default function GalleryClient() {
  return (
    <div className="min-h-screen">

      {/* ══ SÉRIE 2 ══ */}
      <div className="px-6 md:px-12 pt-28 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[0.6rem] tracking-[0.5em] uppercase text-black/80 mb-3">Morocco Collection · 2025</p>
            <h2 className="text-4xl md:text-5xl font-light tracking-[0.1em]">Série II</h2>
            <p className="text-xs tracking-[0.35em] uppercase text-[#f5f0e8]/40 mt-2 mb-1">Echoes of Heart</p>
            <div className="divider-gold" />
            <p className="text-sm text-[#f5f0e8]/50 max-w-lg mx-auto leading-relaxed">
              Acrylique au couteau · Bleu Klein · Orange vif · Noir Soulages<br />
              Paris · The Muisca Gallery · 2025
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {serie2.map((a) => <ArtworkCard key={a.title} a={a} />)}
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8 border-t border-white/10 pt-12">
            {[
              { title: "Bleu Klein", text: "Dense, presque tactile — une lumière pour la méditation et l'énergie pure." },
              { title: "Orange Vif", text: "La chaleur des remparts de Marrakech, la lumière dorée du désert du Sahara." },
              { title: "Noir Soulages", text: "Subtil et dense, il rappelle les portes anciennes, les nuits étoilées et le mystère de la Médina." },
            ].map((item) => (
              <div key={item.title}>
                <div className="w-6 h-px bg-black mb-4" />
                <p className="text-xs tracking-[0.25em] uppercase text-black mb-2">{item.title}</p>
                <p className="text-[#f5f0e8]/55 text-xs leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ TRANSITION ══ */}
      <div className="py-14 flex flex-col items-center gap-3 opacity-20 pointer-events-none">
        <div className="w-px h-12 bg-gradient-to-b from-[#f5f0e8] to-transparent" />
        <div className="w-12 h-px bg-black" />
        <div className="w-px h-12 bg-gradient-to-t from-[#f5f0e8] to-transparent" />
      </div>

      {/* ══ SÉRIE 1 ══ */}
      <div className="px-6 md:px-12 pb-28 pt-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[0.6rem] tracking-[0.5em] uppercase text-black/80 mb-3">Morocco Collection · 2023–2024</p>
            <h2 className="text-4xl md:text-5xl font-light tracking-[0.1em]">Série I</h2>
            <p className="text-xs tracking-[0.35em] uppercase text-[#f5f0e8]/40 mt-2 mb-1">Cities of Atlas</p>
            <div className="divider-gold" />
            <p className="text-sm text-[#f5f0e8]/50 max-w-lg mx-auto leading-relaxed">
              Acrylique au couteau · Or · Ocre · Couleurs des villes du Maroc<br />
              Paris · Bordeaux · Casablanca · 2023–2024
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {serie1.map((a) => <ArtworkCard key={a.title} a={a} />)}
          </div>

          {/* Mood board */}
          <div className="mt-16 border-t border-white/10 pt-12">
            <p className="text-[0.6rem] tracking-[0.4em] uppercase text-black/60 mb-6 text-center">
              Mood Board · Cities of Atlas
            </p>
            <div className="grid grid-cols-4 gap-2">
              {["/images/p17_img1.png", "/images/p17_img2.png", "/images/p17_img5.png", "/images/p17_img6.png"].map((src, i) => (
                <div key={i} className="relative overflow-hidden aspect-square">
                  <Image src={src} alt={`Mood ${i + 1}`} fill
                    className="object-cover opacity-70 hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
