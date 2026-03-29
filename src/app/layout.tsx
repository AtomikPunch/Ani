import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
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
          © {new Date().getFullYear()} Anissa Hafidi · Anissheart — Tous droits réservés
        </footer>
      </body>
    </html>
  );
}
