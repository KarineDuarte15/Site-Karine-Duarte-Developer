// src/components/EventsGallery.tsx
'use client';

import Image from 'next/image';

import ParticlesBackground from './ParticlesBackground';
import RevealOnScroll from './RevealOnScroll';

// Lista de imagens (seu array existente)
const eventImages = [
  { src: '/profile2.png', alt: 'Evento Transforme-se Serasa Experian' },
  { src: '/profile30.jpeg', alt: 'Hackathon Game Jam' },
  { src: '/profile6.jpeg', alt: 'Formatura em Análise e Desenvolvimento de Sistemas' },
  { src: '/profile4.png', alt: 'Evento Transforme-se Serasa Experian' },
  { src: '/profile1.png', alt: 'Gravação em estúdio Unifor' },
  { src: '/profile14.jpeg', alt: 'Front-end Day 2025' },
  { src: '/profile15.jpeg', alt: 'Palestra Git Together' },
  { src: '/profile16.jpeg', alt: 'Hackathon Nasa Space Apps Challenge' },
  { src: '/profile17.jpeg', alt: 'Front-end Day 2025' },
  { src: '/profile18.jpeg', alt: 'Palestra Git Together' },
  { src: '/profile19.jpeg', alt: 'Hackathon Nasa Space Apps Challenge' },
  { src: '/profile20.jpeg', alt: 'Palestra Git Together' },
  { src: '/profile21.jpeg', alt: 'Hackathon Nasa Space Apps Challenge' },
  { src: '/profile22.jpeg', alt: 'Palestra Git Together' },
  { src: '/profile23.jpeg', alt: 'Front-end Day 2025' },
  { src: '/profile24.jpeg', alt: 'Reportagem balanço geral game jam' },
  { src: '/profile25.jpeg', alt: 'Hackathon Nasa Space Apps Challenge' },
  { src: '/profile26.jpeg', alt: 'Hackathon Game Jam' },
  { src: '/profile27.jpeg', alt: 'Front-end Day 2025' },
  { src: '/profile28.jpeg', alt: 'Reportagem balanço geral game jam' },
  { src: '/profile29.jpeg', alt: 'Front-end Day 2025' },
];

const allImages = [...eventImages, ...eventImages];

export default function EventsGallery() {
  return (
    <section id="events">
      <ParticlesBackground id="particles-events">
        <div className="py-20">
          <div className="container mx-auto">
            
            <RevealOnScroll>
              <h2 className="text-4xl font-bold text-center mb-16 font-heading text-[#F4C542]">
                Momentos da Carreira
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <div className="group w-full overflow-hidden">
                <div className="inline-flex animate-marquee group-hover:[animation-play-state:paused]">
                  {allImages.map((image, index) => (
                    <div key={index} className="relative w-72 h-80 mx-4 flex-shrink-0 border-2 border-[#F4C542]/20 rounded-lg overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill 
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </ParticlesBackground>
    </section>
  );
}