// src/components/Contact.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import { supabase } from '@/lib/supabaseClient'; 

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('Enviando...');
    
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    const { error } = await supabase
      .from('contacts')
      .insert([{ name, email, message }]);

    if (error) {
      setStatus('Erro ao enviar. Tente novamente.');
      console.error('Erro do Supabase:', error);
    } else {
      setStatus('Mensagem enviada com sucesso!');
      form.reset(); // Limpa o formulário
    }
  };

  return (
    // 1. COR DE FUNDO ALTERADA AQUI
    <section id="contact" className="py-24 bg-[#E5E5E5]">
      <div className="container mx-auto px-6">
        {/* 2. CORES DOS TEXTOS ALTERADAS PARA UM TOM ESCURO */}
        <motion.h2 className="text-4xl font-bold text-center mb-4 font-heading text-[#0D1B2A]">
          Entre em Contato
        </motion.h2>
        <motion.p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          Tem uma pergunta, proposta ou apenas quer dizer um &quot;oi&quot;? Ficarei feliz em ouvir de você. Preencha o formulário abaixo.
        </motion.p>

        <motion.form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          {/* 3. CORES DOS CAMPOS DO FORMULÁRIO ALTERADAS */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-[#0D1B2A] font-semibold mb-2">Nome</label>
            <input type="text" id="name" name="name" required className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500"/>
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-[#0D1B2A] font-semibold mb-2">Email</label>
            <input type="email" id="email" name="email" required className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500"/>
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-[#0D1B2A] font-semibold mb-2">Mensagem</label>
            <textarea id="message" name="message" required rows={5} className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="inline-flex items-center gap-3 bg-accent text-dark-text font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-yellow-500 transition-transform duration-300 hover:scale-105">
              Enviar Mensagem <FaPaperPlane />
            </button>
            {status && <p className="mt-4 text-center text-gray-600">{status}</p>}
          </div>
        </motion.form>
      </div>
    </section>
  );
}