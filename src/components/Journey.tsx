// src/components/Journey.tsx
'use client';

import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const journeyData = [
  // ... (seus dados, que já estão corretos)
  {
    icon: <FaBriefcase />,
    year: '2025',
    title: 'Desenvolvedora Full Stack',
    company: 'ACI Contabilidade',
    description: 'Desenvolvimento de um sistema de automação para relatórios contábeis, com extração de dados, processamento e geração de relatórios inteligentes.',
  },
  {
    icon: <FaGraduationCap />,
    year: '2025',
    title: 'Formação em Desenvolvimento Back-end',
    company: 'Oracle Next Education',
    description: 'Curso intensivo focado em desenvolvimento back-end, incluindo Java, Express, bancos de dados oracle e NoSQL, e práticas de DevOps.',
  },
  {
    icon: <FaGraduationCap />,
    year: '2023 - 2025',
    title: 'Análise e Desenvolvimento de Sistemas',
    company: 'Unifor',
    description: 'Graduação com foco no desenvolvimento e análise de sistemas de software.',
  },
  {
    icon: <FaBriefcase />,
    year: '2024',
    title: 'Professora de Robótica e Programação',
    company: 'Centro Educacional São Sebastião',
    description: 'Gerenciamento do departamento de tecnologia e ensino de programação e tecnologia para turmas de anos iniciais.',
  },
  {
    icon: <FaBriefcase />,
    year: '2025',
    title: 'Estagiária de TI - Infraestrutura e Segurança',
    company: 'Pronutrir - Suporte Nutricional ',
    description: 'Atuação com suporte à infraestrutura de TI, administração de usuários no Active Directory e monitoramento de rede.',
  },
  {
    icon: <FaBriefcase />,
    year: '2024',
    title: 'Professora de Tecnologia',
    company: 'Tree House Fortaleza',
    description: 'Gerenciamento do departamento de tecnologia e ensino de programação e tecnologia para turmas de anos iniciais.',
  },
  {
    icon: <FaGraduationCap />,
    year: '2023',
    title: 'Programador de Sistemas',
    company: 'Senac',
    description: 'Formação técnica para programação de sistemas.',
  },
  {
    icon: <FaBriefcase />,
    year: '2025',
    title: 'Desenvolvedora Full Stack',
    company: 'ACI Contabilidade',
    description: 'Desenvolvimento de um sistema de automação para relatórios contábeis, com extração de dados, processamento e geração de relatórios inteligentes.',
  },
  {
    icon: <FaGraduationCap />,
    year: '2025',
    title: 'Formação em Desenvolvimento Back-end',
    company: 'Oracle Next Education',
    description: 'Curso intensivo focado em desenvolvimento back-end, incluindo Java, Express, bancos de dados oracle e NoSQL, e práticas de DevOps.',
  },
  {
    icon: <FaGraduationCap />,
    year: '2023 - 2025',
    title: 'Análise e Desenvolvimento de Sistemas',
    company: 'Unifor',
    description: 'Graduação com foco no desenvolvimento e análise de sistemas de software.',
  },
  {
    icon: <FaBriefcase />,
    year: '2024',
    title: 'Professora de Robótica e Programação',
    company: 'Centro Educacional São Sebastião',
    description: 'Gerenciamento do departamento de tecnologia e ensino de programação e tecnologia para turmas de anos iniciais.',
  },
  {
    icon: <FaBriefcase />,
    year: '2025',
    title: 'Estagiária de TI - Infraestrutura e Segurança',
    company: 'Pronutrir - Suporte Nutricional ',
    description: 'Atuação com suporte à infraestrutura de TI, administração de usuários no Active Directory e monitoramento de rede.',
  },
  {
    icon: <FaBriefcase />,
    year: '2024',
    title: 'Professora de Tecnologia',
    company: 'Tree House Fortaleza',
    description: 'Gerenciamento do departamento de tecnologia e ensino de programação e tecnologia para turmas de anos iniciais.',
  },
  {
    icon: <FaGraduationCap />,
    year: '2023',
    title: 'Programador de Sistemas',
    company: 'Senac',
    description: 'Formação técnica para programação de sistemas.',
  },
];


export default function Journey() {
  return (
    <section id="journey" className="py-24 bg-light-background">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 font-heading text-header-text">
          Minha Jornada
        </h2>

        <div className="group relative w-full overflow-hidden">
          {/* 👇 A CORREÇÃO PRINCIPAL ESTÁ AQUI: 'inline-flex' 👇 */}
          <div className="relative inline-flex animate-marquee">
            
            <div className="absolute top-1/2 left-0 h-0.5 w-full bg-[#F4C542] -translate-y-1/2 z-0"></div>
            
            {journeyData.map((item, index) => (
              <div key={index} className="relative flex-shrink-0 w-110 h-110 flex items-center justify-center">
                
                <div className="absolute top-1/2 -translate-y-1/2 z-20">
                  <div className="flex items-center justify-center w-10 h-10 bg-header-text rounded-full border-20 border-[#F4C542]">
                    <div className="text-accent">{item.icon}</div>
                  </div>
                </div>

                <div className={`absolute left-1/2 -translate-x-1/2 w-72 bg-header-bg p-4 rounded-lg shadow-md border-2 border-accent z-10
                  ${index % 2 === 0 ? 'bottom-1/2 mb-6' : 'top-1/2 mt-6'}`}
                >
                  <time className="text-xs font-semibold text-header-text/70">{item.year} - {item.company}</time>
                  <h3 className="text-md font-bold mt-1 mb-1 font-heading text-header-text">{item.title}</h3>
                  <p className="text-sm text-header-text/90 whitespace-normal">{item.description}</p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}