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
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2 /* ... */ className="text-4xl font-bold text-center mb-4 font-heading text-foreground">
          Entre em Contato
        </motion.h2>
        <motion.p /* ... */ className="text-center text-muted mb-12 max-w-2xl mx-auto">
          Tem uma pergunta, proposta ou apenas quer dizer um &quot;oi&quot;? Ficarei feliz em ouvir de você. Preencha o formulário abaixo.
        </motion.p>

        <motion.form onSubmit={handleSubmit} className="max-w-xl mx-auto" /* ... */ >
          {/* ... campos do formulário (name, email, message) ... */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-foreground font-semibold mb-2">Nome</label>
            <input type="text" id="name" name="name" required className="w-full px-4 py-2 bg-card border border-accent/30 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent"/>
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-foreground font-semibold mb-2">Email</label>
            <input type="email" id="email" name="email" required className="w-full px-4 py-2 bg-card border border-accent/30 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent"/>
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-foreground font-semibold mb-2">Mensagem</label>
            <textarea id="message" name="message" required rows={5} className="w-full px-4 py-2 bg-card border border-accent/30 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="inline-flex items-center gap-3 bg-accent text-dark-text font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-yellow-500 transition-transform duration-300 hover:scale-105">
              Enviar Mensagem <FaPaperPlane />
            </button>
            {status && <p className="mt-4 text-center text-muted">{status}</p>}
          </div>
        </motion.form>
      </div>
    </section>
  );
}