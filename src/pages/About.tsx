// icone
import { FaDownload } from "react-icons/fa";
import { MdMyLocation } from "react-icons/md";

// components
import SocialLinks from "../components/SocialLinks";

export default function About() {
  return (
    <main className="m-5 bg-white p-5 rounded shadow-inner shadow-gray-400">
      <div className="flex flex-col md:flex-row md:gap-12 gap-6">
        <div className="flex justify-center">
          <img
            src="/img-perfil.png"
            alt="Foto de Américo Rodrigues"
            className="md:w-48 w-3/4"
          />
        </div>
        <div className="flex flex-col-reverse md:flex-col justify-between gap-5">
          <div className="text-slate-950 space-y-1">
            <div className="flex items-center gap-1">
              <MdMyLocation className="text-slate-900 text-lg" />
              <span>Suzano, SP</span>
            </div>

            <p className="text-slate-800">React • Next.js • Typescript</p>
          </div>
          <div className="space-y-4">
            <SocialLinks className="justify-start" />
            <a
              href="/FrontEnd_Americo_Rodrigues.pdf"
              download="Americo_Rodrigues_CV.pdf"
              aria-label="Baixar currículo em PDF"
              className="bg-slate-800 w-44 md:w-60 px-5 py-4 flex items-center justify-center gap-3 text-slate-200 font-medium rounded hover:bg-slate-600 transition-all"
            >
              <FaDownload className="text-slate-200 text-lg" />
              Baixar CV
            </a>
          </div>
        </div>
      </div>

      <div className="">
        <h1 className="text-slate-950 text-3xl font-bold mb-4 mt-10">
          Desenvolvedor Front-End
        </h1>
        <p className="mb-2 text-slate-600">
          Sou Desenvolvedor Front-End formado em Análise e Desenvolvimento de Sistemas, com foco na criação de
          interfaces modernas, performáticas e fiéis ao design.
        </p>
        <p className="mb-2 text-slate-600">
          Atuo principalmente com <b>React</b>, <b>Next.js</b> e <b>TypeScript</b>, desenvolvendo aplicações web escaláveis, organizadas
          e com boas práticas de código. Tenho experiência prática na construção de aplicações Full Stack utilizando Node.js,
          além de integração com bancos de dados como Firebase, MongoDB e MySQL, o que me permite compreender o fluxo completo
          da aplicação, do front ao back-end.
        </p>
        <p className="mb-2 text-slate-600">Tenho perfil analítico, aprendizado rápido e forte atenção à qualidade do código.
          Busco constantemente evoluir tecnicamente e aprofundar meus conhecimentos em arquitetura, performance e boas práticas
          de desenvolvimento. Planejo iniciar uma pós-graduação em Engenharia de Software para fortalecer ainda mais minha base técnica.</p>
        <p className="text-slate-600">
          Atualmente, busco minha primeira oportunidade profissional como desenvolvedor, onde eu possa contribuir com dedicação, organização e evolução contínua, agregando valor real ao time e aos projetos.

          Estou aberto a oportunidades e conexões na área de tecnologia.  🚀
        </p>
      </div>
    </main>
  );
}
