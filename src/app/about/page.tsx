import Image from "next/image";

export const metadata = {
  title: "About — Anissa Hafidi · Anissheart",
  description: "Artiste franco-marocaine entre Paris, Casablanca et Genève.",
};

export default function AboutPage() {
  return (
    <div className="pt-16 min-h-screen">

      {/* ── HEADER — Ani à la galerie ── */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/p13_img1.jpeg" alt="Anissa Hafidi à la galerie"
            fill className="object-cover object-top opacity-30" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/85" />
        </div>
        <div className="relative z-10">
          <p className="text-[0.65rem] tracking-[0.5em] uppercase text-black mb-4">About me</p>
          <h1 className="text-4xl md:text-6xl font-light tracking-[0.1em] mb-3">Anissa Hafidi</h1>
          <div className="divider-gold" />
          <p className="text-xs tracking-[0.3em] uppercase text-[#f5f0e8]/40">Artiste Peintre · Anissheart</p>
        </div>
      </section>

      {/* ── BIO ── */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Photo — Ani devant ses œuvres */}
          <div className="relative">
            <div className="relative overflow-hidden">
              <Image src="/images/p02_img2.png" alt="Anissa Hafidi devant ses œuvres"
                width={800} height={1000} className="w-full object-cover" />
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-black/30 pointer-events-none" />
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
              <h2 className="text-sm tracking-[0.3em] uppercase text-black mb-5">Qui suis-je</h2>
              <p className="text-[#f5f0e8]/75 leading-relaxed text-sm mb-4">
                Ani est une artiste franco-marocaine qui partage sa vie entre Paris, Casablanca et Genève.
                Depuis son enfance, le dessin est pour elle un langage naturel et instinctif, hérité de son père, passionné d&apos;art.
              </p>
              <p className="text-[#f5f0e8]/75 leading-relaxed text-sm">
                À la suite d&apos;une crise de santé personnelle — des problèmes cardiaques — elle a transformé sa pratique
                artistique en une nécessité vitale et un moyen d&apos;exprimer ses émotions à travers la peinture.
              </p>
            </div>

            <div>
              <h2 className="text-sm tracking-[0.3em] uppercase text-black mb-5">L&apos;électrocardiogramme comme langage</h2>
              <p className="text-[#f5f0e8]/75 leading-relaxed text-sm mb-4">
                Son travail est centré sur l&apos;électrocardiogramme — le battement du cœur — comme matrice de son
                langage pictural. Elle varie les rythmes selon les émotions : longues ou courtes pulsations,
                traits fins ou épais, tracés sombres ou lumineux.
              </p>
              <p className="text-[#f5f0e8]/75 leading-relaxed text-sm">
                Née franco-marocaine, l&apos;artiste retrace dans ses toiles des histoires personnelles et collectives
                à travers des villes en couches, des textures et des paysages. Sa collection est un voyage immersif au Maroc.
              </p>
            </div>

            <div>
              <h2 className="text-sm tracking-[0.3em] uppercase text-black mb-5">Matériaux & Technique</h2>
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
                  className="inline-flex items-center gap-3 text-sm text-black hover:text-[#f5f0e8] transition-colors duration-300">
                  <span className="w-4 h-px bg-black" />galerieani.pro@gmail.com
                </a>
                <a href="https://instagram.com/anissheart" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm text-[#f5f0e8]/50 hover:text-black transition-colors duration-300">
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
            <p className="text-[0.65rem] tracking-[0.4em] uppercase text-black mb-3">Morocco Collection Opening</p>
            <h2 className="text-2xl font-light tracking-widest">Série 1 — Paris · Casablanca</h2>
            <div className="divider-gold" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative overflow-hidden aspect-square">
              <Image src="/images/p06_img1.png" alt="Tanger III" fill
                className="object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <p className="text-xs tracking-widest uppercase text-[#f5f0e8]/80">Tanger III</p>
              </div>
            </div>
            <div className="relative overflow-hidden aspect-square">
              <Image src="/images/p04_img1.png" alt="Marrakech Set" fill
                className="object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <p className="text-xs tracking-widest uppercase text-[#f5f0e8]/80">Marrakech Set</p>
              </div>
            </div>
            <div className="relative overflow-hidden aspect-square col-span-2 md:col-span-1">
              <Image src="/images/p11_img1.jpeg" alt="Série 2 — Echoes of Heart" fill
                className="object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <p className="text-xs tracking-widest uppercase text-[#f5f0e8]/80">Série 2 · Echoes of Heart</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ART LEASING ── */}
      <section className="border-t border-white/5 py-20 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[0.65rem] tracking-[0.4em] uppercase text-black mb-4">Services</p>
            <h2 className="text-2xl font-light tracking-widest mb-4">Art Leasing</h2>
            <div className="w-8 h-px bg-black mb-6" />
            <p className="text-[#f5f0e8]/65 text-sm leading-relaxed mb-4">
              Un service de location d&apos;art est proposé aux entreprises souhaitant enrichir leur espace de travail.
              Ce choix permet de renouveler régulièrement les œuvres et de soutenir l&apos;art contemporain.
            </p>
            <p className="text-[#f5f0e8]/65 text-sm leading-relaxed mb-6">
              Les clients bénéficient d&apos;avantages fiscaux et sont accompagnés par nos avocats fiscalistes spécialisés.
            </p>
            <a href="mailto:galerieani.pro@gmail.com"
              className="text-xs tracking-[0.25em] uppercase text-black border-b border-black/40 pb-1 hover:border-black transition-colors duration-300">
              Nous contacter →
            </a>
          </div>
          <div className="relative overflow-hidden">
            <Image src="/images/p15_img1.jpeg" alt="Art Leasing — La Défense Paris"
              width={800} height={600} className="w-full object-cover" />
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
          <cite className="text-[0.65rem] tracking-[0.35em] uppercase text-black not-italic">Anissa Hafidi</cite>
        </blockquote>
      </section>

    </div>
  );
}
