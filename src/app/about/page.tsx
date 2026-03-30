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
            <div className="relative overflow-hidden aspect-[3/4]">
              <Image src="/images/About.jpg" alt="Anissa Hafidi devant ses œuvres"
                fill className="object-cover object-center" />
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
                Ani est une artiste franco-marocaine, partageant sa vie entre Paris, Casablanca et Genève.
                Depuis son enfance, le dessin a toujours été pour elle un langage naturel, presque instinctif,
                qu&apos;elle a hérité de son père, passionné d&apos;art. Cet héritage s&apos;est imposé au fil
                du temps comme une base solide de son identité créative.
              </p>
              <p className="text-[#f5f0e8]/75 leading-relaxed text-sm">
                Mais c&apos;est à la suite d&apos;une épreuve personnelle, marquée par des problèmes cardiaques,
                qui a donné une nouvelle dimension à sa pratique : la transformer en une nécessité vitale,
                un moyen d&apos;exprimer et de sublimer ce que les mots ne pouvaient contenir.
              </p>
            </div>

            <div>
              <h2 className="text-sm tracking-[0.3em] uppercase text-black mb-5">L&apos;électrocardiogramme comme langage</h2>
              <p className="text-[#f5f0e8]/75 leading-relaxed text-sm mb-4">
                Ani a choisi de peindre, de faire vibrer sur de grandes toiles ce qui constitue le fil le plus précieux
                de toute existence : le battement du cœur. L&apos;électrocardiogramme est devenu la matrice de son
                langage pictural, une texture vibrante qui traverse son œuvre. Elle en varie les rythmes selon ses
                émotions : battements longs ou courts, traits fins ou épais, sombres ou lumineux. Ainsi, ses peintures
                traduisent la vérité de la vie dans ses contrastes, ses phases d&apos;élan et ses moments de chute.
              </p>
              <p className="text-[#f5f0e8]/75 leading-relaxed text-sm mb-4">
                Son tout premier tableau, peint il y a trois ans pour sa sœur aînée, fut une révélation. Depuis ce
                jour, elle n&apos;a plus quitté son pinceau. Ses œuvres accumulent les ventes depuis plus d&apos;un
                an via sa galerie en ligne et ses réseaux sociaux, touchant un public international sensible à son
                approche singulière.
              </p>
              <p className="text-[#f5f0e8]/75 leading-relaxed text-sm">
                La première collection, « Morocco Collection », est un hommage à son pays d&apos;origine. Chaque toile
                illustre la singularité d&apos;une ville, sa mémoire, sa culture et son héritage. À travers ce cycle,
                Ani convoque ses souvenirs d&apos;enfance et les entremêle avec son présent, mettant en scène dans ses
                toiles un espace-temps où se croisent la France et le Maroc.
              </p>
            </div>

            <div>
              <h2 className="text-sm tracking-[0.3em] uppercase text-black mb-5">Matériaux & Esthétique</h2>
              <p className="text-[#f5f0e8]/75 leading-relaxed text-sm mb-4">
                Dans ses œuvres, l&apos;espace devient un lieu de vibration, de mouvement, de scintillement.
                Les matériaux précieux qu&apos;elle utilise comme les feuilles d&apos;or, suspendues sans être
                fixées créent une autonomie propre, illustrant la mouvance et la métaphore du « cœur en or ».
                Associés aux reflets du verre coloré, ils transforment la lumière et renouvellent sans cesse
                l&apos;apparence de ses toiles selon l&apos;air et le souffle ambiant.
              </p>
              <p className="text-[#f5f0e8]/75 leading-relaxed text-sm mb-4">
                L&apos;artiste brouille volontairement les pistes : elle refuse au spectateur le confort
                d&apos;une lecture simplifiée de l&apos;Histoire ou de la société. Elle préfère créer une
                séquence d&apos;émotions, une suite de réminiscences et d&apos;introspections, une exaltation
                des sens qui nous oblige à accueillir le monde dans sa légèreté comme dans sa complexité.
              </p>
              <p className="text-[#f5f0e8]/75 leading-relaxed text-sm">
                Ses œuvres ne se regardent pas seulement : elles respirent, elles palpitent. En peignant le
                cœur, Ani réconcilie l&apos;esprit et l&apos;intime. Puisqu&apos;une peinture est parfaite
                lorsqu&apos;elle prend vie de la manière dont vous la lisez, elle vous laisse le libre arbitre
                de projeter vos propres expériences sur ses tableaux.
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
