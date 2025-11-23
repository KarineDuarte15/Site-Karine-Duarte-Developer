// src/components/Header.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { useLanguage } from '@/contexts/LanguageContext';

const FlagButton = ({ lang, current, onClick, label }: { lang: string, current: string, onClick: () => void, label: string }) => (
  <button 
    onClick={onClick}
    className={`font-bold text-xs px-2 py-1 rounded border transition-all ${
      current === lang 
      ? 'bg-[#0D1B2A] text-[#F4C542] border-[#F4C542]' 
      : 'bg-transparent text-[#0D1B2A] border-transparent hover:bg-white/50'
    }`}
  >
    {label}
  </button>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    // Mantemos bg-[#E5E5E5] fixo como solicitado
    <header className="fixed top-0 left-0 w-full bg-[#E5E5E5] z-50 shadow-md transition-colors">
      {/* Removemos bg-background e forçamos bg-[#E5E5E5] também no nav container */}
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center bg-[#E5E5E5]">
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3" onClick={closeMenu}>
            <Image src="/Logo1.png" alt="Logo Karine Duarte" width={100} height={100} />
             <span className="font-bold text-xl text-blue-950 hidden sm:block">Karine Duarte Developer</span>
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/#about" className="font-bold px-3 py-2 text-[#0D1B2A] hover:text-yellow-500 scale-105 hover:-translate-y-1 hover:shadow-xl transition-all">{t.about}</Link>
          <Link href="/#skills" className="font-bold px-3 py-2 text-[#0D1B2A] hover:text-yellow-500 scale-105 hover:-translate-y-1 hover:shadow-xl transition-all">{t.skills}</Link>
          <Link href="/#journey" className="font-bold px-3 py-2 text-[#0D1B2A] hover:text-yellow-500 scale-105 hover:-translate-y-1 hover:shadow-xl transition-all">{t.journey}</Link>
          <Link href="/#projects" className="font-bold px-3 py-2 text-[#0D1B2A] hover:text-yellow-500 scale-105 hover:-translate-y-1 hover:shadow-xl transition-all">{t.projects}</Link>
          <Link href="/#blog" className="font-bold px-3 py-2 text-[#0D1B2A] hover:text-yellow-500 scale-105 hover:-translate-y-1 hover:shadow-xl transition-all">{t.blog}</Link>
          <Link href="/#contact" className="font-bold px-3 py-2 text-[#0D1B2A] hover:text-yellow-500 scale-105 hover:-translate-y-1 hover:shadow-xl transition-all">{t.contact}</Link>
        </div>

        {/* Ícones e Seletor de Idioma (Desktop) */}
        <div className="hidden md:flex items-center space-x-3">
          {/* Seletor de Idioma */}
          <div className="flex space-x-1 mr-2 bg-gray-200 rounded p-1">
            <FlagButton lang="pt" current={language} onClick={() => setLanguage('pt')} label="PT" />
            <FlagButton lang="en" current={language} onClick={() => setLanguage('en')} label="EN" />
            <FlagButton lang="de" current={language} onClick={() => setLanguage('de')} label="DE" />
          </div>

          <a href="https://github.com/KarineDuarte15" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="font-bold cursor-pointer w-6 h-6 text-[#0D1B2A] hover:text-yellow-500 scale-105 hover:-translate-y-1 hover:shadow-xl transition-all" />
          </a>
          <a href="https://www.linkedin.com/in/karine-duarte-759ba02bb/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="font-bold cursor-pointer w-6 h-6 text-[#0D1B2A] hover:text-yellow-500 scale-105 hover:-translate-y-1 hover:shadow-xl transition-all" />
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-2">
          {/* Versão compacta do seletor para mobile */}
          <div className="flex space-x-1 bg-gray-200 rounded p-1">
            <button onClick={() => setLanguage('pt')} className={`text-xs font-bold p-1 ${language === 'pt' ? 'text-yellow-600' : 'text-gray-600'}`}>PT</button>
            <button onClick={() => setLanguage('en')} className={`text-xs font-bold p-1 ${language === 'en' ? 'text-yellow-600' : 'text-gray-600'}`}>EN</button>
            <button onClick={() => setLanguage('de')} className={`text-xs font-bold p-1 ${language === 'de' ? 'text-yellow-600' : 'text-gray-600'}`}>DE</button>
          </div>
          <ThemeToggle />
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
              <Link href="/#about" onClick={closeMenu} className="text-lg font-bold text-[#0D1B2A] hover:text-yellow-500 w-full text-center py-2">{t.about}</Link>
              <Link href="/#skills" onClick={closeMenu} className="text-lg font-bold text-[#0D1B2A] hover:text-yellow-500 w-full text-center py-2">{t.skills}</Link>
              <Link href="/#journey" onClick={closeMenu} className="text-lg font-bold text-[#0D1B2A] hover:text-yellow-500 w-full text-center py-2">{t.journey}</Link>
              <Link href="/#projects" onClick={closeMenu} className="text-lg font-bold text-[#0D1B2A] hover:text-yellow-500 w-full text-center py-2">{t.projects}</Link>
              <Link href="/#blog" onClick={closeMenu} className="text-lg font-bold text-[#0D1B2A] hover:text-yellow-500 w-full text-center py-2">{t.blog}</Link>
              <Link href="/#contact" onClick={closeMenu} className="text-lg font-bold text-[#0D1B2A] hover:text-yellow-500 w-full text-center py-2">{t.contact}</Link>
              
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