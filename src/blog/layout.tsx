// src/app/blog/layout.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Este layout envolve todas as páginas de blog
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="pt-24"> 
        {/* pt-24 para dar espaço para o Header fixo */}
        {children}
      </main>
      <Footer />
    </>
  );
}