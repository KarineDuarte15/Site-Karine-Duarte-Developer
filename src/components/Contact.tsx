'use client';

import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { supabase } from '@/lib/supabaseClient';
import ParticlesBackground from './ParticlesBackground';
import RevealOnScroll from './RevealOnScroll';
import { useLanguage } from '@/contexts/LanguageContext';
import emailjs from '@emailjs/browser'; 

export default function Contact() {
  const [status, setStatus] = useState('');
  const { t } = useLanguage();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(t.msgSending);
    
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    try {

      const { error: dbError } = await supabase
        .from('contatos') 
        .insert([{ name, email, message }]);

      if (dbError) throw dbError;


      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, 
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          source: 'Formulário de Contato (Rodapé)',
          name: name,
          email: email,
          message: message,
          phone: 'N/A',
          city: 'N/A',
          activity: 'N/A',
          contact_preference: 'N/A'
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!   
      );

      setStatus(t.msgSuccess);
      form.reset();

    } catch (error) {
      console.error('Erro:', error);
      setStatus(t.msgError);
    }
  };

  return (
    <section id="contact">
      <ParticlesBackground id="particles-contact">
        <div className="container mx-auto px-6 py-24">
          
          <RevealOnScroll>
            <h2 className="text-4xl font-bold text-center mb-4 font-heading text-[#F4C542]">
              {t.contactTitle}
            </h2>
            <p className="text-center mb-12 max-w-2xl mx-auto">
              {t.contactSubtitle}
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-[#1B263B]/80 p-8 rounded-xl border border-white/10 backdrop-blur-sm">
              
              <div className="mb-6">
                <label htmlFor="name" className="block text-[#F4C542] font-semibold mb-2">{t.labelName}</label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#F4C542] transition-shadow"/>
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-[#F4C542] font-semibold mb-2">{t.labelEmail}</label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#F4C542] transition-shadow"/>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-[#F4C542] font-semibold mb-2">{t.labelMessage}</label>
                <textarea id="message" name="message" required rows={5} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#F4C542] transition-shadow"></textarea>
              </div>
              
              <div className="text-center">
                <button type="submit" className="inline-flex items-center gap-3 bg-[#F4C542] text-[#0D1B2A] font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-yellow-500 transition-transform duration-300 hover:scale-105">
                  {t.btnSend} <FaPaperPlane />
                </button>
                {status && <p className="mt-4 text-center text-white">{status}</p>}
              </div>

            </form>
          </RevealOnScroll>
        </div>
      </ParticlesBackground>
    </section>
  );
}