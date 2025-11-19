// src/app/layout.tsx
import type { Metadata } from "next";
// Importa as fontes do Google
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactModal from "@/components/ContactModal";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Configura a fonte para os textos corridos (corpo)
const roboto = Roboto({
  subsets: ["latin"],
  weight: ['400', '700'], // Pesos que vamos usar
  variable: '--font-roboto', // Nome da variável CSS
});

// Configura a fonte para os títulos
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ['700', '800'], // Pesos que vamos usar
  variable: '--font-montserrat', // Nome da variável CSS
});

export const metadata: Metadata = {
  title: "Karine Duarte | Developer",
  description: "Portfólio de Karine Duarte, Desenvolvedora Fullstack e Analista de Dados.",
  icons: {
    icon: '/Logo1.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${roboto.variable} ${montserrat.variable} bg-background text-foreground`}>
        {children}
        <ContactModal />
        <WhatsAppButton />
        <SpeedInsights />
      </body>
    </html>
  );
}