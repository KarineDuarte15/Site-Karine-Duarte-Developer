// src/components/Header.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-[#E5E5E5] z-50 shadow-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center bg-background">
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3" onClick={closeMenu}>
            <Image src="/Logo1.png" alt="Logo Karine Duarte" width={100} height={100} />
             <span className="font-bold text-xl text-blue-950 hidden sm:block">Karine Duarte Developer</span>
        </Link>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="/#about" className="font-bold px-3 py-2 text-[#0D1B2A] hover:text-yellow-500 scale-105 hover:-translate-y-1 hover:shadow-xl transition-all">Sobre mim</Link>
          <Link href="/#about" className="font-bold px-3 py-2 text-[#0D1B2A] hover:text-yellow-500 scale-105 hover:-translate-y-1 hover:shadow-xl transition-all">Habilidades</Link>
          <Link href="/#journey" className="font-bold px-3 py-2 text-[#0D1B2A] hover:text-yellow-500 scale-105 hover:-translate-y-1 hover:shadow-xl transition-all">Jornada</Link>
          <Link href="/#projects" className="font-bold px-3 py-2 text-[#0D1B2A] hover:text-yellow-500 scale-105 hover:-translate-y-1 hover:shadow-xl transition-all">Projetos</Link>
          <Link href="/#blog" className="font-bold px-3 py-2 text-[#0D1B2A] hover:text-yellow-500 scale-105 hover:-translate-y-1 hover:shadow-xl transition-all">Blog</Link>
          <Link href="/#contact" className="font-bold px-3 py-2 text-[#0D1B2A] hover:text-yellow-500 scale-105 hover:-translate-y-1 hover:shadow-xl transition-all">Contato</Link>
        </div>

        {/* Ícones Sociais (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://github.com/KarineDuarte15" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="font-bold cursor-pointer w-6 h-6 text-[#0D1B2A] hover:text-yellow-500 scale-105 hover:-translate-y-1 hover:shadow-xl transition-all" />
          </a>
          <a href="https://www.linkedin.com/in/karine-duarte-759ba02bb/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="font-bold cursor-pointer w-6 h-6 text-[#0D1B2A] hover:text-yellow-500 scale-105 hover:-translate-y-1 hover:shadow-xl transition-all" />
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-[#0D1B2A] focus:outline-none p-2">
            {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#E5E5E5] shadow-lg overflow-hidden"
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              <Link href="/#about" onClick={closeMenu} className="text-lg font-bold text-[#0D1B2A] hover:text-yellow-500 w-full text-center py-2">Sobre mim</Link>
              <Link href="/#skills" onClick={closeMenu} className="text-lg font-bold text-[#0D1B2A] hover:text-yellow-500 w-full text-center py-2">Habilidades</Link>
              <Link href="/#journey" onClick={closeMenu} className="text-lg font-bold text-[#0D1B2A] hover:text-yellow-500 w-full text-center py-2">Jornada</Link>
              <Link href="/#projects" onClick={closeMenu} className="text-lg font-bold text-[#0D1B2A] hover:text-yellow-500 w-full text-center py-2">Projetos</Link>
              <Link href="/#blog" onClick={closeMenu} className="text-lg font-bold text-[#0D1B2A] hover:text-yellow-500 w-full text-center py-2">Blog</Link>
              <Link href="/#contact" onClick={closeMenu} className="text-lg font-bold text-[#0D1B2A] hover:text-yellow-500 w-full text-center py-2">Contato</Link>
              
              <div className="flex space-x-6 pt-4 border-t border-gray-300 w-full justify-center">
                <a href="https://github.com/KarineDuarte15" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub className="w-8 h-8 text-[#0D1B2A] hover:text-yellow-500" />
                </a>
                <a href="https://www.linkedin.com/in/karine-duarte-759ba02bb-" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin className="w-8 h-8 text-[#0D1B2A] hover:text-yellow-500" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}