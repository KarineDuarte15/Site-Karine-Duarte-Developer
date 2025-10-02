// src/components/Header.tsx
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

export default function Header() {
  return (
    // Veja como as classes ficaram mais limpas: bg-background, border-card
    <header className="fixed top-0 left-0 w-full bg-background/90 backdrop-blur-sm z-50 border-b border-card">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3">
            <Image src="/Logo1.png" alt="Logo Karine Duarte" width={50} height={50} />
             {/* Usando text-foreground */}
             <span className="font-bold text-xl text-foreground">Karine Duarte</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8 font-semibold">
          {/* Usando text-foreground, hover:text-accent, e after:bg-accent */}
          <Link href="#about" className="relative text-foreground hover:text-accent transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">
            Sobre mim
          </Link>
          <Link href="#journey" className="relative text-foreground hover:text-accent transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">Jornada</Link>
          <Link href="#projects" className="relative text-foreground hover:text-accent transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">Projetos</Link>
          <Link href="#blog" className="relative text-foreground hover:text-accent transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">Blog</Link>
          <Link href="#contact" className="relative text-foreground hover:text-accent transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">Contato</Link>
        </div>

        <div className="flex items-center space-x-4">
          <a href="https://github.com/KarineDuarte15" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="w-6 h-6 text-foreground hover:text-accent transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/karine-duarte-759ba02bb/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="w-6 h-6 text-foreground hover:text-accent transition-colors" />
          </a>
        </div>
      </nav>
    </header>
  );
}