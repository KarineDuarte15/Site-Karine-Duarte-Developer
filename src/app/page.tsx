// src/app/page.tsx
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Projects from "@/components/Projects"; 
import Blog from "@/components/Blog";  
import Contact from "@/components/Contact";   
import Footer from "@/components/Footer";
import EventsGallery from "@/components/EventsGallery";
import { SpeedInsights } from "@vercel/speed-insights/next";  

export default function Home() {
  return (
    <main>
      <SpeedInsights />
      <Header />
      <Hero />
      <About />
      <Journey />
      <Projects />
      <EventsGallery />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}