import type { Metadata } from "next";
import { LanguageProvider } from "../components/language-provider";
import Navbar from "../components/navbar";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://garage-jawhara.example.com"),
  title: "Ste Garage Jawhara | Garage & Centre Technique Prive",
  description:
    "Controle technique, tachygraphe, diagnostic, parallelisme et service rapide. Prenez rendez-vous avec Ste Garage Jawhara.",
  icons: {
    icon: "/logo2.png",
    shortcut: "/logo2.png",
    apple: "/logo2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <footer className="site-footer">
            <div className="container footer-content">
              <p>Ste Garage Jawhara - Serieux, rapidite, securite.</p>
              <p>(c) {new Date().getFullYear()} Tous droits reserves.</p>
            </div>
          </footer>
        </LanguageProvider>
      </body>
    </html>
  );
}
