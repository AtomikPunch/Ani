import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anissa Hafidi — Artiste Peintre",
  description: "Morocco Collection — Portfolio artistique d'Anissa Hafidi (Anissheart), artiste franco-marocaine.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`h-full antialiased ${inter.className}`}>
      <body className="min-h-full flex flex-col text-[#f5f0e8]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-white/10 py-8 text-center text-xs tracking-widest text-white/30 uppercase">
          <p>© {new Date().getFullYear()} Anissa Hafidi · Anissheart — Tous droits réservés</p>
          <div className="mt-2 flex justify-center gap-6">
            <Link href="/mentions-legales" className="hover:text-white/60 transition-colors duration-300">
              Mentions Légales
            </Link>
            <span className="text-white/10">·</span>
            <Link href="/politique-de-confidentialite" className="hover:text-white/60 transition-colors duration-300">
              Politique de Confidentialité
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
