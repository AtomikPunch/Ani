"use client";

import Image from "next/image";

type GalleryDict = {
  serie3_collection: string;
  serie3_name: string;
  serie3_status: string;
  serie2_collection: string;
  serie2_name: string;
  serie2_subtitle: string;
  serie2_medium: string;
  serie1_collection: string;
  serie1_name: string;
  serie1_subtitle: string;
  serie1_medium: string;
  color1_name: string;
  color1_text: string;
  color2_name: string;
  color2_text: string;
  color3_name: string;
  color3_text: string;
  artwork_aftertea_desc: string;
  artwork_theend_desc: string;
  artwork_reminiscence_desc: string;
  artwork_dyptique_desc: string;
  artwork_casablanca_desc: string;
  artwork_tanger3_desc: string;
  artwork_marrakech_desc: string;
  artwork_tanger2_desc: string;
  artwork_verticale_desc: string;
};

interface GalleryClientProps {
  dict: GalleryDict;
  lang: string;
}

type Artwork = {
  title: string;
  subtitle: string;
  size: string;
  price: string;
  image: string;
  description: string;
};

function ArtworkCard({ a }: { a: Artwork }) {
  return (
    <div className="artwork-card group flex flex-col">
      <div className="relative overflow-hidden">
        <Image
          src={a.image}
          alt={a.title}
          width={600}
          height={600}
          className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
          unoptimized={a.image.startsWith("http")}
        />
        <div className="artwork-overlay">
          <p className="text-white text-[0.6rem] tracking-widest uppercase mb-1">{a.subtitle}</p>
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

export default function GalleryClient({ dict }: GalleryClientProps) {
  const serie3: Artwork[] = [
    {
      title: "La verticale et l'étendue",
      subtitle: "Désert du Sahara marocain · Merzouga",
      size: "60×50 cm",
      price: "",
      image: "/images/Série3.png",
      description: dict.artwork_verticale_desc,
    },
  ];

  const serie2: Artwork[] = [
    {
      title: "After Tea",
      subtitle: "Autoportrait",
      size: "50×50 cm",
      price: "",
      image: "/images/p10_img1.jpeg",
      description: dict.artwork_aftertea_desc,
    },
    {
      title: "The End",
      subtitle: "Al Hank Lighthouse · Casablanca",
      size: "130×97 cm",
      price: "",
      image: "/images/Série2.jpg",
      description: dict.artwork_theend_desc,
    },
    {
      title: "Réminiscence",
      subtitle: "Blue Klein & Majorelle",
      size: "80×80 cm",
      price: "",
      image: "/images/p12_img1.jpeg",
      description: dict.artwork_reminiscence_desc,
    },
    {
      title: "Dyptique Majorelle",
      subtitle: "Silence absolu",
      size: "60×60 cm",
      price: "",
      image: "/images/p14_img1.jpeg",
      description: dict.artwork_dyptique_desc,
    },
  ];

  const serie1: Artwork[] = [
    {
      title: "Casablanca",
      subtitle: "2023 · Édition limitée",
      size: "",
      price: "",
      image: "/images/p05_img1.jpeg",
      description: dict.artwork_casablanca_desc,
    },
    {
      title: "Tanger III",
      subtitle: "The Sounds of Tangier",
      size: "",
      price: "",
      image: "/images/p06_img1.png",
      description: dict.artwork_tanger3_desc,
    },
    {
      title: "Marrakech",
      subtitle: "The Red City",
      size: "",
      price: "",
      image: "https://static.wixstatic.com/media/b18fbb_25782a6965fe4515aad6aaa7c01f9f62~mv2.png",
      description: dict.artwork_marrakech_desc,
    },
    {
      title: "Tanger II",
      subtitle: "Cities of Atlas",
      size: "",
      price: "",
      image: "https://static.wixstatic.com/media/b18fbb_d0186b2a11c54f1aa2f4a6a7faed90f4~mv2.png",
      description: dict.artwork_tanger2_desc,
    },
  ];

  const colors = [
    { title: dict.color1_name, text: dict.color1_text },
    { title: dict.color2_name, text: dict.color2_text },
    { title: dict.color3_name, text: dict.color3_text },
  ];

  // Parse the multiline medium strings
  const serie2MediumLines = dict.serie2_medium.split("\n");
  const serie1MediumLines = dict.serie1_medium.split("\n");

  return (
    <div className="min-h-screen">

      {/* ══ LOGO SIGNATURE ══ */}
      <div className="flex justify-center pt-24 pb-2">
        <Image
          src="/images/signature2.jpg"
          alt="Anissa Hafidi"
          width={200}
          height={117}
          className="h-14 w-auto object-contain mix-blend-screen opacity-100"
        />
      </div>

      {/* ══ SÉRIE 3 ══ */}
      <div className="px-6 md:px-12 pt-28 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[0.6rem] tracking-[0.5em] uppercase text-black/80 mb-3">
              {dict.serie3_collection}
            </p>
            <h2 className="text-4xl md:text-5xl font-light tracking-[0.1em]">
              {dict.serie3_name}
            </h2>
            <p className="text-xs tracking-[0.35em] uppercase text-[#f5f0e8]/40 mt-2 mb-1">
              {dict.serie3_status}
            </p>
            <div className="divider-gold" />
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-xs">
              {serie3.map((a) => <ArtworkCard key={a.title} a={a} />)}
            </div>
          </div>
        </div>
      </div>

      {/* ══ TRANSITION ══ */}
      <div className="py-14 flex flex-col items-center gap-3 opacity-20 pointer-events-none">
        <div className="w-px h-12 bg-gradient-to-b from-[#f5f0e8] to-transparent" />
        <div className="w-12 h-px bg-black" />
        <div className="w-px h-12 bg-gradient-to-t from-[#f5f0e8] to-transparent" />
      </div>

      {/* ══ SÉRIE 2 ══ */}
      <div className="px-6 md:px-12 pt-28 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[0.6rem] tracking-[0.5em] uppercase text-black/80 mb-3">
              {dict.serie2_collection}
            </p>
            <h2 className="text-4xl md:text-5xl font-light tracking-[0.1em]">
              {dict.serie2_name}
            </h2>
            <p className="text-xs tracking-[0.35em] uppercase text-[#f5f0e8]/40 mt-2 mb-1">
              {dict.serie2_subtitle}
            </p>
            <div className="divider-gold" />
            <p className="text-sm text-[#f5f0e8]/50 max-w-lg mx-auto leading-relaxed">
              {serie2MediumLines[0]}<br />
              {serie2MediumLines[1]}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {serie2.map((a) => <ArtworkCard key={a.title} a={a} />)}
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8 border-t border-white/10 pt-12">
            {colors.map((item) => (
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
            <p className="text-[0.6rem] tracking-[0.5em] uppercase text-black/80 mb-3">
              {dict.serie1_collection}
            </p>
            <h2 className="text-4xl md:text-5xl font-light tracking-[0.1em]">
              {dict.serie1_name}
            </h2>
            <p className="text-xs tracking-[0.35em] uppercase text-[#f5f0e8]/40 mt-2 mb-1">
              {dict.serie1_subtitle}
            </p>
            <div className="divider-gold" />
            <p className="text-sm text-[#f5f0e8]/50 max-w-lg mx-auto leading-relaxed">
              {serie1MediumLines[0]}<br />
              {serie1MediumLines[1]}
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
                  <Image
                    src={src}
                    alt={`Mood ${i + 1}`}
                    fill
                    className="object-cover opacity-70 hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
