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

      <div>
        <h1 className="text-slate-950 text-3xl font-bold mb-4 mt-10">
          Desenvolvedor Front-End
        </h1>

        <p className="mb-2 text-slate-600">
            Sou desenvolvedor Front-End desde 2024, formado em Análise e Desenvolvimento de Sistemas, com experiência prática na construção de aplicações web completas e sistemas em produção.
        </p>

        <p className="mb-2 text-slate-600">
          Já desenvolvi dashboards administrativos, sistema financeiro, aplicação mobile e projetos fullstack, atuando desde a construção da interface até a integração com APIs e bancos de dados. Gosto de participar do processo como um todo e entender como cada parte da aplicação se conecta.
        </p>

        <p className="mb-2 text-slate-600">
          Trabalho principalmente com <b>React, Next.js e TypeScript</b>, e utilizo Node.js para integrar ou estruturar o backend. Tenho experiência com autenticação, consumo de APIs REST, geração de relatórios e deploy em produção.
        </p>

        <p className="mb-2 text-slate-600">
          Meu foco vai além de “fazer funcionar”. Eu me preocupo com organização, legibilidade, performance e experiência do usuário. Acredito que código bom é aquele que resolve o problema hoje e continua fácil de evoluir amanhã.
        </p>

        <p className="text-slate-600">
          Atualmente busco minha primeira oportunidade formal como desenvolvedor, já com experiência prática em projetos reais. Quero fazer parte de um time onde eu possa contribuir, aprender com pessoas mais experientes e crescer construindo soluções que gerem impacto de verdade.
        </p>
      </div>
    </main>
  );
}
