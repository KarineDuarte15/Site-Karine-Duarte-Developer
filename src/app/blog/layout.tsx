// src/app/blog/layout.tsx
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";


export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="pt-10"> 
        
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}