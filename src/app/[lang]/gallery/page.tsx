import GalleryClient from "@/components/GalleryClient";
import { notFound } from "next/navigation";
import { hasLocale, getDictionary } from "../dictionaries";

export async function generateMetadata({ params }: PageProps<"/[lang]/gallery">) {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return {
    title: lang === "en" ? "Gallery — Anissa Hafidi" : "Galerie — Anissa Hafidi",
    description: "Morocco Collection — Série I (Cities of Atlas) & Série II (Echoes of Heart).",
  };
}

export default async function GalleryPage({ params }: PageProps<"/[lang]/gallery">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return <GalleryClient dict={dict.gallery} lang={lang} />;
}
