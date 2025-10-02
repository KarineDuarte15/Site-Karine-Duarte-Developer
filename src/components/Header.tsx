// src/components/Header.tsx
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
            <Image src="/Logo Karine developer.png" alt="Logo Karine Duarte" width={50} height={50} className="rounded-full"/>
             <span className="font-bold text-xl hidden sm:block">Karine Duarte</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="#about" className="hover:text-yellow-400 transition-colors">Sobre mim</Link>
          <Link href="#projects" className="hover:text-yellow-400 transition-colors">Projetos</Link>
          <Link href="#blog" className="hover:text-yellow-400 transition-colors">Blog</Link>
          <Link href="#contact" className="hover:text-yellow-400 transition-colors">Contato</Link>
        </div>

        <div className="flex items-center space-x-4">
          <a href="https://github.com/KarineDuarte15" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="w-6 h-6 hover:text-yellow-400 transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/karine-duarte-759ba02bb/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="w-6 h-6 hover:text-yellow-400 transition-colors" />
          </a>
        </div>
      </nav>
    </header>
  );
}