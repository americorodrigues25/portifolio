// import de imagens
import sistemabarbearia from "../assets/images/sistema-barbearia.png";
import snapgram from "../assets/images/snapgram.png";
import capaSnapgram from "../assets/images/capasnapgram.png";
import cardion1 from "../assets/images/cardion1.jpg";
import cardion2 from "../assets/images/cardion2.jpg";
import cardion3 from "../assets/images/cardion3.jpg";
import cardion4 from "../assets/images/cardion4.jpg";
import cardion5 from "../assets/images/cardion5.jpg";
import cardion6 from "../assets/images/cardion6.jpg";
import cardion7 from "../assets/images/cardion7.jpg";
import cardion8 from "../assets/images/cardion8.jpg";
import devblog from "../assets/images/devblog.png";
import capaDevBlog from "../assets/images/capadevblog.png";

// import de videos
import demoSnapGram from "../assets/video/snapgram.mp4";
import demodevblog from "../assets/video/devblog.mp4";

// icones
import { FaReact } from "react-icons/fa";
import { SiStyledcomponents, SiTailwindcss, SiFirebase, SiExpress, SiMongodb, SiCss3, SiPostman, SiExpo, SiNodedotjs } from "react-icons/si";

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
      { name: "Tailwindcss", icon: <SiTailwindcss className={techIconClass} /> },
      { name: "Node.js", icon: <SiNodedotjs className={techIconClass} /> },
      { name: "Express", icon: <SiExpress className={techIconClass} /> },
      { name: "MongoDB", icon: <SiMongodb className={techIconClass} /> },
    ],
    details:
      `Desenvolvi este sistema para um cliente barbeiro que antes registrava seus serviços apenas em papel. 
      O objetivo foi automatizar o controle financeiro diário, mensal e geral, facilitando o registro de serviços e automatizando os cálculos. O sistema oferece dashboard, gráficos e relatórios para melhor visualização dos dados.
      
      Credenciais para teste:
      Usuário: usuarioteste
      Senha: 123456
      
      Confira todos os detalhes acessando o repositório no GitHub.`,
    url: "https://sistema-barbearia-cabeca.vercel.app/",
    github: "https://github.com/americorodrigues25/Frontend-Sistema-financeiro-barbearia",
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7387509887292964864/",
  },

  {
    id: 2,
    title: "SnapGram | Rede Social FullStack",
    type: "Projeto pessoal",
    shortDescription:
      "SnapGram é um projeto pessoal onde construi uma rede social completa, do frontend ao backend.",
    image: snapgram,
    techs: [
      { name: "React", icon: <FaReact className={techIconClass} /> },
      { name: "CSS", icon: <SiCss3 className={techIconClass} /> },
      { name: "Node.js", icon: <SiNodedotjs className={techIconClass} /> },
      { name: "Express", icon: <SiExpress className={techIconClass} /> },
      { name: "MongoDB", icon: <SiMongodb className={techIconClass} /> },
      { name: "Postman", icon: <SiPostman className={techIconClass} /> },
    ],
    details:
      `Os usuários podem criar contas, compartilhar suas fotos, editar perfis e interagir com outros usuários por meio de curtidas e comentários.
      
      O design e funcionalidades são inspirados no Instagram, proporcionando uma experiência semelhante.
      
      Foi desenvolvido em React no frontend e Node.js no backend, para o banco utilizei MongoDB Atlas.
      
      Este projeto me permitiu aprofundar meus conhecimentos em desenvolvimento fullstack. Primeiro fui construindo o backend e testando as rotas com postman e depois desenvolvi o frontend consumindo essas rotas e integrando com o servidor.
      
      Confira todos os detalhes acessando o repositório no GitHub.`,
    github: "https://github.com/americorodrigues25/SnapGram",
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7378885798789677056/",
    video: demoSnapGram,
    capa: capaSnapgram,
  },

  {
    id: 3,
    title: "Cardio Fitness | App de Treinos",
    type: "Projeto Acadêmico",
    shortDescription:
      "Aplicativo desenvolvido como TCC, focado em gerenciamento de treinos, organização de exercícios e acompanhamento físico.",
    image: cardion1,
    techs: [
      { name: "React Native", icon: <FaReact className={techIconClass} /> },
      { name: "Firebase", icon: <SiFirebase className={techIconClass} /> },
      { name: "tailwindcss", icon: <SiTailwindcss className={techIconClass} /> },
      { name: "Styled Components", icon: <SiStyledcomponents className={techIconClass} /> },
      { name: "Node.js", icon: <SiNodedotjs className={techIconClass} /> },
      { name: "Expo", icon: <SiExpo className={techIconClass} /> },
    ],
    details:
      `O Cardion Fitness é um aplicativo desenvolvido como Trabalho de Conclusão de Curso (TCC), com o objetivo de oferecer uma ferramenta prática e moderna para organização e acompanhamento de treinos voltados à musculação.

    O app permite que os usuários visualizem treinos personalizados, registrem séries e repetições, acompanhem sua evolução física e recebam orientações para melhorar o desempenho. Tudo de forma simples e intuitiva.

    O app Cardion Fitness possui dois fluxos principais:
    Personais: podem criar treinos, avaliações e acompanhar o progresso dos alunos.
    Alunos: além de acesso a treinos e avaliações, têm uma experiência gamificada com rankings, conquistas, desafios e um sistema de pontuação que valoriza cada avanço.

    O projeto foi construído utilizando React Native no frontend, Node.js no backend e Firebase para autenticação e armazenamento em nuvem, garantindo segurança, rapidez e sincronização dos dados em tempo real.

    Este TCC teve como foco a aplicação de conceitos de desenvolvimento, trabalho em equipe e boas práticas de engenharia de software.

    Confira todos os detalhes acessando o repositório no GitHub.`,
    github: "https://github.com/americorodrigues25/Cardion-Fitness",
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7345609999747878915/",
    cardImages: [
      cardion2,
      cardion3,
      cardion4,
      cardion5,
      cardion6,
      cardion7,
      cardion8,
    ],
  },
  {
    id: 4,
    title: "DevBlog | Blog para Desenvolvedores",
    type: "Projeto pessoal",
    shortDescription:
      "DevBlog é um blog interativo para usuários criar, compartilhar e editar posts, além de acompanhar publicações de outros usuários.",
    image: devblog,
    techs: [
      { name: "React", icon: <FaReact className={techIconClass} /> },
      { name: "Node.js", icon: <SiNodedotjs className={techIconClass} /> },
      { name: "Express", icon: <SiExpress className={techIconClass} /> },
      { name: "Firebase", icon: <SiFirebase className={techIconClass} /> },
    ],
    details:
      `O DevBlog foi desenvolvido em React para o frontend e node para o backend. Utilizei o Firebase para autenticação e armazenamento de dados.

      Os usuários podem criar contas, fazer login, criar, editar e excluir posts. Também é possível visualizar posts de outros usuários em um feed interativo.  
      `,
    github: "https://github.com/americorodrigues25/DevBlog",
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7371878040051736576/",
    video: demodevblog,
    capa: capaDevBlog,
  }
];
