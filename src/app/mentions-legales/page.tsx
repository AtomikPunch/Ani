import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales — Anissa Hafidi · Anissheart",
  description: "Mentions légales du site Anissa Hafidi — Anissheart.",
};

const Section = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="border-t border-white/10 pt-10">
    <p className="text-[0.65rem] tracking-[0.4em] uppercase text-black mb-5">{label}</p>
    <div className="flex flex-col gap-2 text-sm text-[#f5f0e8]/65 leading-relaxed">
      {children}
    </div>
  </div>
);

export default function MentionsLegalesPage() {
  return (
    <div className="pt-16 min-h-screen">

      {/* ── HEADER ── */}
      <section className="py-24 px-6 text-center border-b border-white/5">
        <p className="text-[0.65rem] tracking-[0.5em] uppercase text-black mb-4">Informations légales</p>
        <h1 className="text-4xl md:text-5xl font-light tracking-[0.1em] mb-3">Mentions Légales</h1>
        <div className="divider-gold" />
        <p className="text-xs tracking-[0.3em] uppercase text-[#f5f0e8]/30">Anissa Hafidi · Anissheart</p>
      </section>

      {/* ── CONTENU ── */}
      <section className="max-w-3xl mx-auto px-6 py-20 flex flex-col gap-10">

        <Section label="Propriétaire du site">
          <p>Madame <span className="text-[#f5f0e8]/90">Anissa Hafidi</span></p>
          <p>N° SIREN : <span className="text-[#f5f0e8]/40 italic">— à compléter —</span></p>
        </Section>

        <Section label="Directrice de la publication">
          <p>Madame <span className="text-[#f5f0e8]/90">Anissa Hafidi</span></p>
          <p>
            Contact :{" "}
            <a href="mailto:galeriani.pro@gmail.com"
              className="text-black hover:text-[#f5f0e8] transition-colors duration-300">
              galeriani.pro@gmail.com
            </a>
          </p>
        </Section>

        <Section label="Hébergeur du site">
          <p><span className="text-[#f5f0e8]/90">OVH SAS</span></p>
          <p>2 rue Kellermann, 59100 Roubaix, France</p>
          <p>RCS Lille Métropole 424 761 419 00045</p>
          <p>
            Contact :{" "}
            <a href="mailto:support@ovhcloud.com"
              className="text-black hover:text-[#f5f0e8] transition-colors duration-300">
              support@ovhcloud.com
            </a>
          </p>
        </Section>

        <Section label="Crédits">
          <p>Identité visuelle & photographies : <span className="text-[#f5f0e8]/90">Anissa Hafidi</span></p>
          <p>Développement & design du site : <span className="text-[#f5f0e8]/90">Jad Yamout</span></p>
          <p className="pt-2 text-[#f5f0e8]/50 text-xs leading-relaxed">
            Les photographies utilisées sur ce site sont la propriété exclusive d&apos;Anissa Hafidi.
            Toute reproduction, même partielle, est interdite sans autorisation préalable.
          </p>
        </Section>

        <Section label="Propriété intellectuelle">
          <p className="text-[#f5f0e8]/50 text-xs leading-relaxed">
            Le responsable de l&apos;identité visuelle, du développement, du design et du site exige que son nom
            soit mentionné à côté de chaque utilisation de ses œuvres. Ne pas mentionner la paternité de l&apos;œuvre
            constitue une atteinte au droit moral de l&apos;auteur et contrevient aux dispositions de la loi N° 17-97
            relative à la protection de la propriété industrielle, Dahir n° 1-00-19 du 9 Kaada 1420 (15 Février 2000).
          </p>
          <p className="text-[#f5f0e8]/40 text-xs">Tous droits réservés.</p>
        </Section>

      </section>
    </div>
  );
}
