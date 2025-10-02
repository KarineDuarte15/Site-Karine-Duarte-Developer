// src/app/page.tsx
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Projects from "@/components/Projects"; // Comentado por enquanto
// import Blog from "@/components/Blog";       // Comentado por enquanto
// import Contact from "@/components/Contact";   // Comentado por enquanto

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Journey />
      <Projects />
      {/* <Blog /> */}
      {/* <Contact /> */}
      {/* Restante das seções virão aqui */}
    </main>
  );
}