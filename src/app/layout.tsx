// src/app/layout.tsx
import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactModal from "@/components/ContactModal";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ThemeProvider from "@/components/ThemeProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['400', '700'], 
  variable: '--font-roboto', 
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ['700', '800'], 
  variable: '--font-montserrat', 
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
    // ADICIONEI: suppressHydrationWarning aqui na tag html
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${roboto.variable} ${montserrat.variable} bg-background text-foreground transition-colors duration-300`}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
            <ContactModal />
            <WhatsAppButton />
            <SpeedInsights />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}