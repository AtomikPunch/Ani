"use client";

import Image from "next/image";
import Link from "next/link";
import { getSeries, type Artwork, type GalleryDict } from "@/lib/artworks";

interface GalleryClientProps {
  dict: GalleryDict;
  lang: string;
}

function ArtworkCard({ a, lang }: { a: Artwork; lang: string }) {
  const featured = a.featured === true;
  const wipHighlight = a.wipHighlight === true;
  const overlayMeta =
    !wipHighlight && (a.size || a.price)
      ? [a.size, a.price].filter(Boolean).join(" · ")
      : "";
  return (
    <Link
      href={`/${lang}/gallery/${a.slug}`}
      className={`artwork-card group flex flex-col ${featured ? "w-full" : ""}`}
    >
      <div className={`relative overflow-hidden ${featured ? "rounded-sm shadow-lg shadow-black/20" : ""}`}>
        <Image
          src={a.image}
          alt={a.title}
          width={featured ? 789 : 600}
          height={featured ? 1024 : 600}
          sizes={featured ? "(max-width: 768px) 100vw, min(896px, 90vw)" : "300px"}
          className={
            featured
              ? "w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
              : "w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
          }
          unoptimized={a.image.startsWith("http")}
          priority={featured}
        />
        <div className="artwork-overlay">
          <p className="text-white text-[0.6rem] tracking-widest uppercase mb-1 md:text-xs">{a.subtitle}</p>
          <p className="text-white text-sm font-light tracking-widest uppercase md:text-base">{a.title}</p>
          {overlayMeta && (
            <p className="text-white/60 text-xs mt-1">{overlayMeta}</p>
          )}
        </div>
      </div>
      <div className={`pt-3 px-1 text-center ${featured ? "max-w-2xl mx-auto" : ""}`}>
        <p className="text-[#f5f0e8]/80 text-xs tracking-widest uppercase font-light md:text-sm">{a.title}</p>
        {wipHighlight && a.price ? (
          (() => {
            const [title, ...meta] = a.price.split("\n");
            return (
              <div className="mt-3">
                <p className="text-black text-xs md:text-sm font-medium tracking-[0.2em] uppercase">
                  {title}
                </p>
                {meta.map((line, i) => (
                  <p
                    key={i}
                    className="text-[#f5f0e8]/40 text-[0.6rem] tracking-widest uppercase mt-1"
                  >
                    {line}
                  </p>
                ))}
              </div>
            );
          })()
        ) : (
          a.price && (
            <p className="text-black text-[0.65rem] mt-0.5 md:text-xs">{a.price}</p>
          )
        )}
      </div>
    </Link>
  );
}

export default function GalleryClient({ dict, lang }: GalleryClientProps) {
  const { serie3, serie2, serie1 } = getSeries(dict);

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
            <p className="mt-8 max-w-3xl mx-auto text-sm text-[#f5f0e8]/65 leading-relaxed text-justify hyphens-auto">
              {dict.serie3_intro}
            </p>
          </div>

          <div className="flex flex-col items-center gap-16 md:gap-24 w-full">
            {serie3.map((a) => (
              <div
                key={a.slug}
                className={
                  a.featured
                    ? "w-full max-w-4xl mx-auto px-0"
                    : "w-full max-w-xs mx-auto"
                }
              >
                <ArtworkCard a={a} lang={lang} />
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
            {serie2.map((a) => <ArtworkCard key={a.slug} a={a} lang={lang} />)}
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
            {serie1.map((a) => <ArtworkCard key={a.slug} a={a} lang={lang} />)}
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
