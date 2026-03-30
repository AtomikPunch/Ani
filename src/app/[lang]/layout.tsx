import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { notFound } from "next/navigation";
import { hasLocale, getDictionary } from "./dictionaries";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anissa Hafidi — Artiste Peintre",
  description:
    "Morocco Collection — Portfolio artistique d'Anissa Hafidi (Anissheart), artiste franco-marocaine.",
};

export async function generateStaticParams() {
  return [{ lang: "fr" }, { lang: "en" }];
}

export default async function LangLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <html lang={lang} className={`h-full antialiased ${inter.className}`}>
      <body className="min-h-full flex flex-col text-[#f5f0e8]">
        <Navbar lang={lang} dict={dict.navbar} />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-white/10 py-8 text-center text-xs tracking-widest text-white/30 uppercase">
          <div className="flex justify-center mb-5">
            <Image
              src="/images/signature2.jpg"
              alt="Anissa Hafidi"
              width={160}
              height={94}
              className="h-12 w-auto object-contain mix-blend-screen opacity-100"
            />
          </div>
          <p>
            © {new Date().getFullYear()} Anissa Hafidi · Anissheart —{" "}
            {dict.footer.rights}
          </p>
          <div className="mt-2 flex justify-center gap-6">
            <Link
              href={`/${lang}/mentions-legales`}
              className="hover:text-white/60 transition-colors duration-300"
            >
              {dict.footer.legal}
            </Link>
            <span className="text-white/10">·</span>
            <Link
              href={`/${lang}/politique-de-confidentialite`}
              className="hover:text-white/60 transition-colors duration-300"
            >
              {dict.footer.privacy}
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
