// src/components/Footer.tsx
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background py-10 text-center text-muted">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          
          {/* Botão Voltar ao Topo */}
          <Link href="#home" className="flex flex-col items-center group text-muted hover:text-accent transition-colors duration-300">
            <div className="p-3 border-2 border-muted rounded-full group-hover:border-accent group-hover:scale-110 transition-transform duration-300">
              <FaArrowUp size={20} />
            </div>
            <span className="mt-2 text-sm font-semibold">Voltar ao Topo</span>
          </Link>

          {/* Ícones de Redes Sociais */}
          <div className="flex items-center space-x-6 py-4">
            <a href="https://github.com/KarineDuarte15" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="w-7 h-7 text-muted hover:text-accent transition-transform hover:scale-110 duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/karine-duarte-759ba02bb-" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="w-7 h-7 text-muted hover:text-accent transition-transform hover:scale-110 duration-300" />
            </a>
          </div>

          {/* Texto de Copyright */}
          <p className="text-sm text-muted/70">
            &copy; {currentYear} Karine Duarte. Todos os direitos reservados.
          </p>
          
        </div>
      </div>
    </footer>
  );
}