import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, getDictionary } from "../dictionaries";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/politique-de-confidentialite">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    title: dict.privacy.meta_title,
    description: lang === "en"
      ? "Privacy policy and personal data protection — GalerieAni."
      : "Politique de confidentialité et protection des données personnelles — GalerieAni.",
  };
}

const Section = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="border-t border-white/10 pt-10">
    <p className="text-[0.65rem] tracking-[0.4em] uppercase text-black mb-5">{label}</p>
    <div className="flex flex-col gap-3 text-sm text-[#f5f0e8]/65 leading-relaxed">
      {children}
    </div>
  </div>
);

export default async function PolitiqueConfidentialitePage({
  params,
}: PageProps<"/[lang]/politique-de-confidentialite">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  const t = dict.privacy;

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

        <Section label={t.section_data}>
          <p>{t.data_p1}</p>
        </Section>

        <Section label={t.section_collected}>
          <p>{t.collected_intro}</p>
          <ul className="flex flex-col gap-1 pl-4 text-[#f5f0e8]/50 text-xs">
            <li>{t.collected_li1}</li>
            <li>{t.collected_li2}</li>
          </ul>
        </Section>

        <Section label={t.section_purpose}>
          <p className="text-xs text-[#f5f0e8]/50 leading-relaxed">
            {t.purpose_p1}
          </p>
          <p className="text-xs text-[#f5f0e8]/40">
            {t.purpose_p2}
          </p>
        </Section>

        <Section label={t.section_recipients}>
          <p>{t.recipients_intro}</p>
          <ul className="flex flex-col gap-1 pl-4 text-[#f5f0e8]/50 text-xs">
            <li>{t.recipients_li1}</li>
            <li>{t.recipients_li2}</li>
          </ul>
          <p className="text-xs text-[#f5f0e8]/40 leading-relaxed">
            {t.recipients_p}
          </p>
        </Section>

        <Section label={t.section_retention}>
          <p className="text-xs text-[#f5f0e8]/50 leading-relaxed">
            {t.retention_p1}
          </p>
          <ul className="flex flex-col gap-1 pl-4 text-[#f5f0e8]/50 text-xs">
            <li>{t.retention_li1}</li>
            <li>{t.retention_li2}</li>
          </ul>
        </Section>

        <Section label={t.section_rights}>
          <p>{t.rights_intro}</p>
          <ul className="flex flex-col gap-1 pl-4 text-[#f5f0e8]/50 text-xs">
            <li>{t.rights_li1}</li>
            <li>{t.rights_li2}</li>
            <li>{t.rights_li3}</li>
            <li>{t.rights_li4}</li>
            <li>{t.rights_li5}</li>
            <li>{t.rights_li6}</li>
            <li>{t.rights_li7}</li>
            <li>{t.rights_li8}</li>
          </ul>
          <p className="text-xs text-[#f5f0e8]/40 leading-relaxed">
            {t.rights_contact}{" "}
            <a
              href="mailto:galerieani.pro@gmail.com"
              className="text-black hover:text-[#f5f0e8] transition-colors duration-300"
            >
              galerieani.pro@gmail.com
            </a>
            .{" "}
            {t.rights_complaint}{" "}
            <span className="text-[#f5f0e8]/60">{t.rights_cnil}</span>{" "}
            {t.rights_bloctel}{" "}
            <span className="text-[#f5f0e8]/60">www.bloctel.gouv.fr</span>.
          </p>
        </Section>

        <Section label={t.section_cookies}>
          <p className="text-xs text-[#f5f0e8]/50 leading-relaxed">
            {t.cookies_p1}
          </p>

          <div className="flex flex-col gap-4 mt-2">
            {[
              { title: t.cookie1_title, text: t.cookie1_text },
              { title: t.cookie2_title, text: t.cookie2_text },
              { title: t.cookie3_title, text: t.cookie3_text },
            ].map((c) => (
              <div key={c.title} className="pl-4 border-l border-white/10">
                <p className="text-[0.6rem] tracking-[0.2em] uppercase text-black mb-1">{c.title}</p>
                <p className="text-xs text-[#f5f0e8]/40 leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#f5f0e8]/40 leading-relaxed mt-2">
            {t.cookies_p2}{" "}
            <span className="text-[#f5f0e8]/60">www.cnil.fr/fr/cookies-comment-mettre-mon-site-web-en-conformite</span>
          </p>
        </Section>

        <div className="border-t border-white/10 pt-8">
          <p className="text-[0.6rem] tracking-[0.3em] uppercase text-[#f5f0e8]/30 text-center">
            {t.footer_rights}
          </p>
        </div>

      </section>
    </div>
  );
}
