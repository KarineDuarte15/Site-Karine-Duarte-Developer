// src/app/layout.tsx
import type { Metadata } from "next";
// Importa as fontes do Google
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";

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
  title: "Karine Duarte | Desenvolvedora Back-End",
  description: "Portfólio de Karine Duarte, Desenvolvedora Back-End e Analista de Dados.",
  icons: {
    icon: '/Logo1.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      {/* Aqui aplicamos as variáveis das fontes ao body.
        A classe `roboto.className` define Roboto como a fonte padrão.
      */}
      <body className={`${roboto.variable} ${montserrat.variable} bg-white text-navy font-sans`}>
        {children}
      </body>
    </html>
  );
}