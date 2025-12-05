import sistemabarbearia from "../assets/images/sistema-barbearia.png";

// icones
import { FaReact } from "react-icons/fa";
import { SiTypescript, SiStyledcomponents, SiNextdotjs, SiTailwindcss, SiPrisma, SiFirebase } from "react-icons/si";
import { FaNode } from "react-icons/fa";

const techIconClass = "text-slate-400 text-2xl";

export const projects = [
  {
    id: 1,
    title: "Sistema Barbearia do Cabeça",
    type: "Freelance",
    shortDescription:
      "Um dashboard onde o barbeiro pode gerenciar seus serviços de forma simples e intuitiva.",
    image: sistemabarbearia,
    techs: [
      { name: "React", icon: <FaReact className={techIconClass} /> },
      { name: "TypeScript", icon: <SiTypescript className={techIconClass} /> },
      { name: "Styled-components", icon: <SiStyledcomponents className={techIconClass} /> },
      { name: "Node.js", icon: <FaNode className={techIconClass} /> },
    ],
    details:
      `Desenvolvi este sistema para um cliente barbeiro que antes registrava seus serviços apenas em papel. 
      O objetivo foi automatizar o controle financeiro diário, mensal e geral, facilitando o registro de serviços e automatizando os cálculos. O sistema oferece dashboard, gráficos e relatórios para melhor visualização dos dados.
      
      Credenciais para teste:
      Usuário: usuarioteste
      Senha: 123456`,
    url: "https://sistema-barbearia-cabeca.vercel.app/",
    github: "https://github.com/americorodrigues25/Frontend-Sistema-financeiro-barbearia",
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7387509887292964864/",
  },

  {
    id: 2,
    title: "Sistema Financeiro",
    type: "Projeto pessoal",
    shortDescription:
      "Gerenciador financeiro com gráficos, login seguro e dashboard completo.",
    image: "/images/financeiro.png",
    techs: [
      { name: "Next.js", icon: <SiNextdotjs className={techIconClass} /> },
      { name: "Prisma", icon: <SiPrisma className={techIconClass} /> },
      { name: "Tailwind", icon: <SiTailwindcss className={techIconClass} /> },
    ],
    details:
      "Aplicação completa para controle financeiro pessoal e empresarial.",
    url: "https://meusite.com/barbearia",
    github: "https://github.com/.../",
    linkedin: "https://linkedin.com/.../",
  },

  {
    id: 3,
    title: "Controle de Estoque",
    type: "Projeto pessoal",
    shortDescription:
      "Sistema para controle de estoque com relatórios e alertas automáticos.",
    image: "/images/estoque.png",
    techs: [
      { name: "React", icon: <FaReact className={techIconClass} /> },
      { name: "Firebase", icon: <SiFirebase className={techIconClass} /> },
    ],
    details: "...",
    url: "https://meusite.com/barbearia",
    github: "https://github.com/.../",
    linkedin: "https://linkedin.com/.../",
  },
];
