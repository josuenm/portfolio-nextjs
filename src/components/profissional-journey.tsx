import React from 'react';

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  skills: string[];
  links?: { label: string; url: string }[];
}

export function ProfessionalJourney() {
  const experiences: Experience[] = [
    {
      company: "ValidaPay",
      role: "Desenvolvedor Full-Stack",
      period: "Dezembro de 2024 - Maio de 2026",
      location: "Remoto / São Paulo, Brasil",
      description: "Atuação estratégica no setor financeiro focado em soluções de pagamento de alta escala.",
      highlights: [
        "Planejamento, concepção e desenvolvimento do zero do gateway de pagamentos.",
        "Provisionamento e automação de infraestrutura Serverless em nuvem AWS com alta disponibilidade.",
        "Desenvolvimento de regras de negócio financeiras, onboarding e integração com adquirentes e APIs externas."
      ],
      skills: ["Node.js", "TypeScript", "AWS Lambda", "Serverless", "DynamoDB", "NestJS", "Next.js"],
      links: [{ label: "validapay.com.br", url: "https://validapay.com.br" }]
    },
    {
      company: "ValidaPix",
      role: "Desenvolvedor Full-Stack",
      period: "Janeiro de 2024 - Dezembro de 2024",
      location: "Remoto / São Paulo, Brasil",
      description: "Desenvolvimento de soluções financeiras focadas no ecossistema de Pix e produtos paralelos.",
      highlights: [
        "Desenvolvimento ativo da plataforma principal e integrações complexas com os maiores bancos do Brasil.",
        "Criação de aplicativos móveis corporativos para o setor de energia.",
        "Desenvolvimento de sistemas de bilhetagem eletrônica (Pix para transporte/ônibus)."
      ],
      skills: ["JavaScript", "TypeScript", "React", "React Native", "Next.js", "Tailwind", "Node.js", "Express", "MySQL", "AWS S3"],
      links: [{ label: "validapix.com.br", url: "https://validapix.com.br" }]
    },
    {
      company: "JSX",
      role: "Desenvolvedor Full-Stack",
      period: "Junho de 2023 - Dezembro de 2023",
      location: "São José dos Campos, SP",
      description: "Foco no desenvolvimento de software sob demanda para múltiplos setores de mercado.",
      highlights: [
        "Desenvolvimento de sistema voltado ao Agronegócio (Essent Agro).",
        "Desenvolvimento de plataforma para seguradoras (Sindicante Digital).",
        "Implementação de funcionalidades de telemetria e rastreadores veiculares.",
        "Manutenção evolutiva e melhorias na plataforma ValidaPix."
      ],
      skills: ["React", "React Native", "Next.js", "Node.js", "Express", "NestJS", "MySQL"],
      links: [
        { label: "essentagro.com.br", url: "https://essentagro.com.br" },
        { label: "sindicantedigital.com", url: "https://sindicantedigital.com" }
      ]
    },
    {
      company: "Voch Tech",
      role: "Desenvolvedor PHP",
      period: "Maio de 2023 - Julho de 2023",
      location: "São José dos Campos, SP",
      description: "Manutenção e evolução de um sistema ERP/plataforma corporativa de grande porte focada no fornecimento e compra de EPIs e materiais industriais.",
      highlights: [
        "Refatoração, correção de bugs críticos e otimização de consultas ao banco de dados.",
        "Desenvolvimento de novas features para aprimorar a experiência B2B de compra."
      ],
      skills: ["PHP", "Laravel", "Vue.js", "jQuery", "MySQL"]
    },
    {
      company: "JSX (Primeira Passagem)",
      role: "Desenvolvedor Full-Stack",
      period: "Dezembro de 2021 - Fevereiro de 2023",
      location: "Jacareí, SP",
      description: "Início da jornada profissional com foco em entregas ágeis e arquitetura de software.",
      highlights: [
        "Responsável pelo planejamento e desenvolvimento da primeiríssima versão da ValidaPix.",
        "Criação de painel de controle e monitoramento de infraestrutura para um dos maiores servidores de CS:GO da América Latina.",
        "Desenvolvimento de landing pages e páginas de vendas de alta performance e conversão."
      ],
      skills: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express", "MySQL", "Bootstrap"]
    }
  ];

  return (
    <section className="py-12 text-zinc-100 min-h-screen font-sans">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="mb-16 text-center md:text-start">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Trajetória Profissional
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl">
            Mais de 5 anos de experiência desenvolvendo sistemas escaláveis, arquiteturas serverless e produtos de alta demanda.
          </p>
        </div>

        <div className="relative border-l border-zinc-600 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-10 group">
              
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 bg-black border-white group-hover:bg-white transition-colors duration-300 shadow-[0_0_10px_rgba(16,185,129,0.3)]" />

              <div className="flex flex-col space-y-3">
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-4">
                  <div>
                    <h3 className="text-sm md:text-xl font-bold text-zinc-50 flex flex-col md:flex-row md:items-center gap-2">
                      {exp.role} 
                      <span className="text-blue-400 font-medium text-xs md:text-lg pb-2 md:pb-0">@ {exp.company}</span>
                    </h3>
                    <p className="text-sm text-zinc-500">{exp.location}</p>
                  </div>
                  <span className="inline-block md:text-right text-sm font-semibold text-zinc-400 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800 self-start md:self-center">
                    {exp.period}
                  </span>
                </div>

                <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                  {exp.description}
                </p>

                {exp.links && exp.links.length > 0 && (
                  <div className="flex flex-wrap gap-3 pt-1">
                    {exp.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-400 hover:text-blue-300 underline transition-colors"
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                )}

                <ul className="list-none space-y-2 pt-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm text-zinc-300 flex items-start gap-2">
                      <span className="text-blue-500 select-none mt-0.5">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-3">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}