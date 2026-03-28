import Image from "next/image";

export const metadata = {
  title: "About — Anissa Hafidi · Anissheart",
  description: "Artiste franco-marocaine entre Paris, Casablanca, Bordeaux et Genève.",
};

const ARTIST_PHOTO = "https://galerieani.infy.uk/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-12-at-11.01.32-PM-704x1024.jpeg";
const WIX = "https://static.wixstatic.com/media";

export default function AboutPage() {
  return (
    <div className="pt-16 min-h-screen">

      {/* ── HEADER ── */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={ARTIST_PHOTO} alt="Anissa Hafidi" fill
            className="object-cover object-top opacity-25" priority unoptimized />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/85" />
        </div>
        <div className="relative z-10">
          <p className="text-[0.65rem] tracking-[0.5em] uppercase text-[#c9a84c] mb-4">About me</p>
          <h1 className="text-4xl md:text-6xl font-light tracking-[0.1em] mb-3">Anissa Hafidi</h1>
          <div className="divider-gold" />
          <p className="text-xs tracking-[0.3em] uppercase text-[#f5f0e8]/40">Artiste Peintre · Anissheart</p>
        </div>
      </section>

      {/* ── BIO ── */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          <div className="relative">
            <div className="relative overflow-hidden">
              <Image src={ARTIST_PHOTO} alt="Anissa Hafidi" width={704} height={1024}
                className="w-full object-cover" unoptimized />
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-[#c9a84c]/30 pointer-events-none" />
            </div>
            <div className="mt-8 flex flex-col gap-3">
              {["Paris", "Casablanca", "Bordeaux", "Genève"].map((city) => (
                <div key={city} className="flex items-center gap-3">
                  <span className="w-6 h-px bg-[#c9a84c]" />
                  <span className="text-xs tracking-[0.25em] uppercase text-[#f5f0e8]/50">{city}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-sm tracking-[0.3em] uppercase text-[#c9a84c] mb-5">Qui suis-je</h2>
              <p className="text-[#f5f0e8]/75 leading-relaxed text-sm mb-4">
                Ani est une artiste franco-marocaine qui partage sa vie entre Paris, Casablanca, Bordeaux et Genève.
                Depuis son enfance, le dessin est pour elle un langage naturel et instinctif, hérité de son père, passionné d&apos;art.
              </p>
              <p className="text-[#f5f0e8]/75 leading-relaxed text-sm">
                À la suite d&apos;une crise de santé personnelle — des problèmes cardiaques — elle a transformé sa pratique
                artistique en une nécessité vitale et un moyen d&apos;exprimer ses émotions à travers la peinture.
              </p>
            </div>

            <div>
              <h2 className="text-sm tracking-[0.3em] uppercase text-[#c9a84c] mb-5">L&apos;électrocardiogramme comme langage</h2>
              <p className="text-[#f5f0e8]/75 leading-relaxed text-sm mb-4">
                Son travail est centré sur l&apos;électrocardiogramme — le battement du cœur — comme matrice de son
                langage pictural. Elle varie les rythmes selon les émotions : longues ou courtes pulsations,
                traits fins ou épais, tracés sombres ou lumineux.
              </p>
              <p className="text-[#f5f0e8]/75 leading-relaxed text-sm">
                Née franco-marocaine, l&apos;artiste retrace dans ses toiles des histoires personnelles et collectives
                à travers des villes en couches, des textures et des paysages. Sa collection est un voyage
                immersif au Maroc.
              </p>
            </div>

            <div>
              <h2 className="text-sm tracking-[0.3em] uppercase text-[#c9a84c] mb-5">Matériaux & Technique</h2>
              <p className="text-[#f5f0e8]/75 leading-relaxed text-sm mb-4">
                Acrylique au couteau. Elle utilise des matériaux précieux — feuilles d&apos;or, verre coloré —
                qui transforment la lumière. L&apos;espace devient lieu de vibration, de mouvement et d&apos;éclat.
              </p>
              <p className="text-[#f5f0e8]/75 leading-relaxed text-sm">
                Ses œuvres ne sont pas de simples représentations, mais des entités vivantes qui respirent et pulsent,
                réconciliant l&apos;esprit et l&apos;intimité.
              </p>
            </div>

            <div className="border-t border-white/10 pt-8">
              <p className="text-[0.6rem] tracking-[0.3em] uppercase text-[#f5f0e8]/30 mb-5">Contact</p>
              <div className="flex flex-col gap-3">
                <a href="mailto:galerieani.pro@gmail.com"
                  className="inline-flex items-center gap-3 text-sm text-[#c9a84c] hover:text-[#f5f0e8] transition-colors duration-300">
                  <span className="w-4 h-px bg-[#c9a84c]" />galerieani.pro@gmail.com
                </a>
                <a href="https://instagram.com/anissheart" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm text-[#f5f0e8]/50 hover:text-[#c9a84c] transition-colors duration-300">
                  <span className="w-4 h-px bg-white/30" />@anissheart
                </a>
                <a href="tel:+33760989190"
                  className="inline-flex items-center gap-3 text-sm text-[#f5f0e8]/40 hover:text-[#f5f0e8] transition-colors duration-300">
                  <span className="w-4 h-px bg-white/20" />+33 7 60 98 91 90
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── APERÇU ŒUVRES ── */}
      <section className="border-t border-white/5 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[0.65rem] tracking-[0.4em] uppercase text-[#c9a84c] mb-3">Morocco Collection</p>
            <h2 className="text-2xl font-light tracking-widest">Séries I & II</h2>
            <div className="divider-gold" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: `${WIX}/b18fbb_9aabcb39edd941e781079ec20b7bd4a8~mv2.png`, label: "Dyptique Majorelle" },
              { src: `${WIX}/b18fbb_cae91198dfbc4439b2aa902f3747fa16~mv2.png`, label: "Réminiscence" },
              { src: `${WIX}/b18fbb_25782a6965fe4515aad6aaa7c01f9f62~mv2.png`, label: "Marrakech" },
              { src: `${WIX}/b18fbb_d0186b2a11c54f1aa2f4a6a7faed90f4~mv2.png`, label: "Tanger II" },
            ].map((a) => (
              <div key={a.label} className="relative overflow-hidden aspect-square group">
                <Image src={a.src} alt={a.label} fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3">
                  <p className="text-xs tracking-widest uppercase text-[#f5f0e8]/80">{a.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ART LEASING ── */}
      <section className="border-t border-white/5 py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-[0.65rem] tracking-[0.4em] uppercase text-[#c9a84c] mb-4">Services</p>
          <h2 className="text-2xl font-light tracking-widest mb-4">Art Leasing</h2>
          <div className="divider-gold" />
          <p className="text-[#f5f0e8]/65 text-sm leading-relaxed mb-4">
            Un service de location d&apos;art est proposé aux entreprises souhaitant enrichir leur espace de travail.
            Les clients bénéficient d&apos;avantages fiscaux et sont accompagnés par nos avocats fiscalistes spécialisés.
          </p>
          <p className="text-[#f5f0e8]/40 text-xs tracking-wider mb-8">
            Paris · La Défense · Rue du Faubourg Saint-Honoré
          </p>
          <a href="mailto:galerieani.pro@gmail.com"
            className="inline-block px-8 py-3 text-xs tracking-[0.25em] uppercase border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-black transition-all duration-300">
            Nous contacter
          </a>
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
          <cite className="text-[0.65rem] tracking-[0.35em] uppercase text-[#c9a84c] not-italic">Anissa Hafidi</cite>
        </blockquote>
      </section>

    </div>
  );
}
