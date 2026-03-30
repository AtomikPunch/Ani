import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, getDictionary } from "../dictionaries";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/mentions-legales">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    title: dict.mentions.meta_title,
    description: lang === "en"
      ? "Legal notice — GalerieAni, Anissa Hafidi."
      : "Mentions légales du site Anissa Hafidi — Anissheart.",
  };
}

const Section = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="border-t border-white/10 pt-10">
    <p className="text-[0.65rem] tracking-[0.4em] uppercase text-black mb-5">{label}</p>
    <div className="flex flex-col gap-2 text-sm text-[#f5f0e8]/65 leading-relaxed">
      {children}
    </div>
  </div>
);

export default async function MentionsLegalesPage({
  params,
}: PageProps<"/[lang]/mentions-legales">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  const t = dict.mentions;

  return (
    <div className="pt-16 min-h-screen">

      {/* ── HEADER ── */}
      <section className="py-24 px-6 text-center border-b border-white/5">
        <p className="text-[0.65rem] tracking-[0.5em] uppercase text-black mb-4">
          {t.page_label}
        </p>
        <h1 className="text-4xl md:text-5xl font-light tracking-[0.1em] mb-3">
          {t.page_title}
        </h1>
        <div className="divider-gold" />
        <p className="text-xs tracking-[0.3em] uppercase text-[#f5f0e8]/30">
          GalerieAni · Anissa Hafidi
        </p>
      </section>

      {/* ── CONTENU ── */}
      <section className="max-w-3xl mx-auto px-6 py-20 flex flex-col gap-10">

        <Section label={t.section_owner}>
          <p>{t.owner_p1} <span className="text-[#f5f0e8]/90">Anissa HAFIDI</span></p>
          <p>{t.owner_p2}</p>
          <p>N° SIREN : <span className="text-[#f5f0e8]/40 italic">952230472</span></p>
        </Section>

        <Section label={t.section_director}>
          <p>{t.owner_p1} <span className="text-[#f5f0e8]/90">Anissa HAFIDI</span></p>
          <p>
            {t.contact_label} :{" "}
            <a
              href="mailto:galerieani.pro@gmail.com"
              className="text-black hover:text-[#f5f0e8] transition-colors duration-300"
            >
              galerieani.pro@gmail.com
            </a>
          </p>
        </Section>

        <Section label={t.section_host}>
          <p><span className="text-[#f5f0e8]/90">OVH SAS</span></p>
          <p>2 rue Kellermann, 59100 Roubaix, France</p>
          <p>RCS Lille Métropole 424 761 419 00045</p>
          <p>
            {t.contact_label} :{" "}
            <a
              href="mailto:support@ovhcloud.com"
              className="text-black hover:text-[#f5f0e8] transition-colors duration-300"
            >
              support@ovhcloud.com
            </a>
          </p>
        </Section>

        <Section label={t.section_credits}>
          <p>{t.credits_visual} : <span className="text-[#f5f0e8]/90">{t.owner_p1} Anissa HAFIDI</span></p>
          <p>{t.credits_photos} : <span className="text-[#f5f0e8]/90">Anissa HAFIDI</span></p>
          <p>{t.credits_dev} : <span className="text-[#f5f0e8]/90">Anissa HAFIDI & Jad YAMOUT</span></p>
          <p className="text-[#f5f0e8]/40 text-xs leading-relaxed">{t.credits_dev_detail}</p>
          <p>
            <a
              href="https://theexploitchronicle.ovh/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f5f0e8]/40 text-xs hover:text-[#f5f0e8]/70 transition-colors duration-300"
            >
              ↗ {t.credits_dev_portfolio}
            </a>
          </p>
        </Section>

        <Section label={t.section_ip}>
          <p className="text-[#f5f0e8]/50 text-xs leading-relaxed">
            {t.ip_text}
          </p>
          <p className="text-[#f5f0e8]/40 text-xs">{t.ip_rights}</p>
        </Section>

      </section>
    </div>
  );
}
