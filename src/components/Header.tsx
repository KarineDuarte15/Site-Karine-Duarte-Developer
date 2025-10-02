// src/components/Header.tsx
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

export default function Header() {
  return (
    // Fundo escuro para combinar com o contexto do vídeo
    <header className="fixed top-0 left-0 w-full bg-header-bg z-50 shadow-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center bg-foreground">
        <Link href="/" className="flex items-center space-x-3 ">
            <Image src="/Logo1.png" alt="Logo Karine Duarte" width={50} height={50} />
             <span className="font-bold text-xl text-foreground">Karine Duarte</span>
        </Link>

        <div className="hidden md:flex items-center space-x-4"> {/* Diminuí o space-x para caber melhor */}
          {/* 👇 A MÁGICA ACONTECE AQUI 👇 */}
          <Link 
            href="#about" 
            className=" px-4 py-2 text-foreground hover:text-yellow-500 scale-105 hover:-translate-y-1 hover:shadow-xl"
          >
            Sobre mim
          </Link>
          <Link 
            href="#skills"
            className=" px-4 py-2 text-foreground hover:text-yellow-500 scale-105 hover:-translate-y-1 hover:shadow-xl"
          >
            Habilidades
          </Link>
          <Link 
            href="#journey"
            className=" px-4 py-2 text-foreground  hover:text-yellow-500 scale-105 hover:-translate-y-1 hover:shadow-xl"
          >
            Jornada
          </Link>
          <Link 
            href="#projects"
            className=" px-4 py-2 text-foreground hover:text-yellow-500 scale-105 hover:-translate-y-1 hover:shadow-xl"
          >
            Projetos
          </Link>
          <Link 
            href="#blog"
            className=" px-4 py-2 text-foreground  hover:text-yellow-500 scale-105 hover:-translate-y-1 hover:shadow-xl"
          >
            Blog
          </Link>
          <Link 
            href="#contact"
            className=" px-4 py-2text-foreground hover:text-yellow-500 scale-105 hover:-translate-y-1 hover:shadow-xl"
          >
            Contato
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <a href="https-github-com-karineduarte15" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="w-6 h-6 text-foreground  hover:text-yellow-500 scale-105 hover:-translate-y-1 hover:shadow-xl" />
          </a>
          <a href="https-www-linkedin-com-in-karine-duarte-759ba02bb-" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="w-6 h-6 text-foreground  hover:text-yellow-500 scale-105 hover:-translate-y-1 hover:shadow-xl" />
          </a>
        </div>
      </nav>
    </header>
  );
}