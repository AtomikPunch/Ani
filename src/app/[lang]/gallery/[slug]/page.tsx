import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { hasLocale, getDictionary } from "../../dictionaries";
import { ARTWORK_SLUGS, findArtwork } from "@/lib/artworks";

export function generateStaticParams() {
  const langs = ["fr", "en"] as const;
  return langs.flatMap((lang) =>
    ARTWORK_SLUGS.map((slug) => ({ lang, slug }))
  );
}

export async function generateMetadata({ params }: PageProps<"/[lang]/gallery/[slug]">) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) return {};

  const dict = await getDictionary(lang);
  const artwork = findArtwork(dict.gallery, slug);
  if (!artwork) return {};

  return {
    title: `${artwork.title} — Anissa Hafidi`,
    description: artwork.description || `${artwork.title} · ${artwork.collection}`,
  };
}

export default async function ArtworkPage({ params }: PageProps<"/[lang]/gallery/[slug]">) {
  const { lang, slug } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  const t = dict.gallery;
  const artwork = findArtwork(t, slug);

  if (!artwork) notFound();

  const isExternal = artwork.image.startsWith("http");
  const priceLabel = artwork.price || t.detail_price_request;

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24">

        {/* ── Retour ── */}
        <Link
          href={`/${lang}/gallery`}
          className="inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#f5f0e8]/50 hover:text-black transition-colors duration-300"
        >
          <span className="w-6 h-px bg-current" />
          {t.detail_back}
        </Link>

        {/* ── Œuvre ── */}
        <div className="mt-12 grid md:grid-cols-2 gap-12 md:gap-16 items-start">

          {/* Image en grand */}
          <div className="relative w-full aspect-[4/5] md:aspect-auto md:h-[75vh] overflow-hidden shadow-lg ">
            <Image
              src={artwork.image}
              alt={artwork.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
              unoptimized={isExternal}
              priority
            />
          </div>

          {/* Informations */}
          <div className="md:pt-6">
            <p className="text-[0.6rem] tracking-[0.4em] uppercase text-black/80 mb-4">
              {artwork.collection}
            </p>
            <h1 className="text-3xl md:text-5xl font-light tracking-[0.08em] leading-tight">
              {artwork.title}
            </h1>
            {artwork.subtitle && (
              <p className="text-xs tracking-[0.3em] uppercase text-[#f5f0e8]/40 mt-3">
                {artwork.subtitle}
              </p>
            )}

            <div className="divider-gold !mx-0" />

            {/* Description (à compléter) */}
            {artwork.description && (
              <div className="mt-6 max-w-prose flex flex-col gap-4">
                {artwork.description.split("\n\n").map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-[#f5f0e8]/75 text-sm md:text-base leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            {/* Caractéristiques */}
            <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-8">
              {artwork.size && !artwork.wipHighlight && (
                <div>
                  <p className="text-[0.6rem] tracking-[0.3em] uppercase text-[#f5f0e8]/30 mb-1">
                    {t.detail_size_label}
                  </p>
                  <p className="text-sm text-[#f5f0e8]/80">{artwork.size}</p>
                </div>
              )}
              {(() => {
                const [title, ...meta] = priceLabel.split("\n");
                return (
                  <div>
                    <p className="text-black text-xl md:text-2xl font-medium tracking-[0.15em] uppercase">
                      {title}
                    </p>
                    {meta.map((line, i) => (
                      <p
                        key={i}
                        className="text-[#f5f0e8]/50 text-xs md:text-sm tracking-widest uppercase mt-1"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                );
              })()}
            </div>

            {/* Contact / demande */}
            <a
              href={`mailto:galerieani.pro@gmail.com?subject=${encodeURIComponent(artwork.title)}`}
              className="inline-flex items-center gap-3 mt-10 text-xs tracking-[0.25em] uppercase text-black border-b border-black/40 pb-1 hover:border-black transition-colors duration-300"
            >
              <span className="w-4 h-px bg-black" />
              {t.detail_inquire}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
