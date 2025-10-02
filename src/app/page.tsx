// src/app/page.tsx
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      {/* Restante das seções virão aqui */}
    </main>
  );
}