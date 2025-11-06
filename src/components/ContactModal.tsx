// src/components/ContactModal.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';
import { supabase } from '@/lib/supabaseClient';

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState('');
  const [contactPreference, setContactPreference] = useState('Via WhatsApp');

  useEffect(() => {
    if (!sessionStorage.getItem('contactModalSeen')) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('contactModalSeen', 'true');
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('Enviando...');
    
    const form = event.currentTarget;
    const formData = new FormData(form);
    
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const city = formData.get('city') as string;
    const activity = formData.get('activity') as string;
    
    const { error } = await supabase
      .from('contacts_modal')
      .insert([{ name, phone, email, city, activity, contact_preference: contactPreference }]);

    if (error) {
      setStatus('Erro ao enviar. Tente novamente.');
      console.error('Erro do Supabase:', error);
    } else {
      setStatus('Mensagem enviada! Entraremos em contato em breve.');
      form.reset();
      setTimeout(() => setIsOpen(false), 2500); 
    }
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setIsOpen(false)}
        >
          {/* AS MUDANÇAS ESTÃO AQUI ABAIXO */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            // 1. max-h-[90vh]: Limita a altura do modal a 90% da altura da tela.
            // 2. overflow-y-auto: Cria uma barra de rolagem se o conteúdo for maior que a altura máxima.
            className="bg-white rounded-xl shadow-2xl w-full max-w-4xl relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 transition-colors z-10"
              aria-label="Fechar modal"
            >
              <FaTimes size={20} />
            </button>
            
            {/* O layout de grid já é responsivo por padrão (empilha em telas pequenas) */}
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-10 flex flex-col justify-center bg-gray-50/50 relative">
                <div className="absolute bottom-8 left-8 grid grid-cols-5 gap-2 opacity-30">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-blue-200 rounded-full"></div>
                  ))}
                </div>

                <h2 className="text-3xl font-bold text-[#0D1B2A] mb-3" style={{ fontFamily: 'var(--font-montserrat)' }}>Ficou com alguma dúvida?</h2>
                <p className="text-gray-500 mb-6">Preencha as informações ao lado que em breve entraremos em contato com você.</p>
                <div className="relative w-48 h-48 rounded-md overflow-hidden self-center">
                  <Image src="/profile11.png" alt="Karine Duarte" layout="fill" objectFit="cover" />
                </div>
              </div>

              <div className="p-8 md:p-10">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700">Nome</label>
                      <input type="text" name="name" placeholder="Nome completo" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#F4C542]" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">Celular</label>
                      <input type="tel" name="phone" placeholder="(DDD) 00000-0000" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#F4C542]" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Qual é o seu e-mail?</label>
                    <input type="email" name="email" placeholder="seu.email@mail.com.br" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#F4C542]" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Em qual cidade sua empresa está situada?</label>
                    <input type="text" name="city" placeholder="Ex: São Paulo" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#F4C542]" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Descrição da atividade que você exercerá na empresa</label>
                    <input type="text" name="activity" placeholder="Ex: programador, consultor de marketing" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#F4C542]" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Como prefere que entremos em contato com você?</label>
                    <div className="flex gap-2">
                      <button type="button" onClick={() => setContactPreference('Via WhatsApp')} className={`flex-1 py-2 px-4 rounded-md border text-sm transition-colors ${contactPreference === 'Via WhatsApp' ? 'bg-blue-100 border-blue-400 text-blue-800' : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-50'}`}>
                        Via WhatsApp
                      </button>
                      <button type="button" onClick={() => setContactPreference('Via Ligação')} className={`flex-1 py-2 px-4 rounded-md border text-sm transition-colors ${contactPreference === 'Via Ligação' ? 'bg-blue-100 border-blue-400 text-blue-800' : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-50'}`}>
                        Via Ligação
                      </button>
                    </div>
                  </div>
                  
                  <button type="submit" className="w-full bg-[#706649] text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:bg-[#5b523a] transition-colors duration-300">
                    Agendar Consultoria
                  </button>
                  {status && <p className="mt-2 text-center text-sm text-gray-600">{status}</p>}
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}