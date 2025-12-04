// icones
import { FaReact } from "react-icons/fa";
import { SiTypescript, SiStyledcomponents, SiNextdotjs, SiTailwindcss, SiPrisma, SiFirebase } from "react-icons/si";
import { FaNode } from "react-icons/fa";

const techIconClass = "text-slate-400 text-2xl";

export const projects = [
  {
    id: 1,
    title: "Sistema Barbearia do Cabeça",
    shortDescription:
      "Um dashboard onde o barbeiro pode gerenciar seus serviços de forma simples e intuitiva.",
    image: "/images/barbearia.png",
    techs: [
      { name: "React", icon: <FaReact className={techIconClass} /> },
      { name: "TypeScript", icon: <SiTypescript className={techIconClass} /> },
      { name: "Styled-components", icon: <SiStyledcomponents className={techIconClass} /> },
      { name: "Node.js", icon: <FaNode className={techIconClass} /> },
    ],
    details:
      "O sistema permite ao barbeiro acompanhar serviços, estatísticas, agenda e relatórios.",
    demo: "...",
    github: "...",
    linkedin: "...",
  },

  {
    id: 2,
    title: "Sistema Financeiro",
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
    demo: "...",
    github: "...",
    linkedin: "...",
  },

  {
    id: 3,
    title: "Controle de Estoque",
    shortDescription:
      "Sistema para controle de estoque com relatórios e alertas automáticos.",
    image: "/images/estoque.png",
    techs: [
      { name: "React", icon: <FaReact className={techIconClass} /> },
      { name: "Firebase", icon: <SiFirebase className={techIconClass} /> },
    ],
    details: "...",
    demo: "...",
    github: "...",
    linkedin: "...",
  },
];
