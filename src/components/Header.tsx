// src/components/Header.tsx
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

export default function Header() {
  return (
    // Fundo escuro para combinar com o contexto do vídeo
    <header className="fixed top-0 left-0 w-full bg-[#E5E5E5] z-50 shadow-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center bg-background">
        <Link href="/" className="flex items-center space-x-3 ">
            <Image src="/Logo1.png" alt="Logo Karine Duarte" width={100} height={100} />
             <span className="font-bold text-xl text-blue-950">Karine Duarte Developer</span>
        </Link>

        <div className="hidden md:flex items-center space-x-4"> {/* Diminuí o space-x para caber melhor */}
          <Link 
            href="#about" 
            className=" font-bold px-4 py-2 text-[#0D1B2A] hover:text-yellow-500 scale-105 hover:-translate-y-1 hover:shadow-xl"
          >
            Sobre mim
          </Link>
          <Link 
            href="#skills"
            className=" font-bold px-4 py-2 text-[#0D1B2A] hover:text-yellow-500 scale-105 hover:-translate-y-1 hover:shadow-xl"
          >
            Habilidades
          </Link>
          <Link 
            href="#journey"
            className="font-bold px-4 py-2 text-[#0D1B2A] hover:text-yellow-500 scale-105 hover:-translate-y-1 hover:shadow-xl"
          >
            Jornada
          </Link>
          <Link 
            href="#projects"
            className="font-bold px-4 py-2 text-[#0D1B2A] hover:text-yellow-500 scale-105 hover:-translate-y-1 hover:shadow-xl"
          >
            Projetos
          </Link>
          <Link 
            href="#blog"
            className="font-bold px-4 py-2 text-[#0D1B2A] hover:text-yellow-500 scale-105 hover:-translate-y-1 hover:shadow-xl"
          >
            Blog
          </Link>
          <Link 
            href="#contact"
            className="font-bold px-4 py-2 text-[#0D1B2A] hover:text-yellow-500 scale-105 hover:-translate-y-1 hover:shadow-xl"
          >
            Contato
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <a href="https-github-com-karineduarte15" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="font-bold cursor-pointer w-6 h-6 text-[#0D1B2A]  hover:text-yellow-500 scale-105 hover:-translate-y-1 hover:shadow-xl" />
          </a>
          <a href="https-www-linkedin-com-in-karine-duarte-759ba02bb-" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="font-bold cursor-pointer w-6 h-6 text-[#0D1B2A]  hover:text-yellow-500 scale-105 hover:-translate-y-1 hover:shadow-xl" />
          </a>
        </div>
      </nav>
    </header>
  );
}