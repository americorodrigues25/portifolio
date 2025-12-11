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
              href="/cv-americo.pdf"
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
          👋 Ei! Sou o Américo, desenvolvedor front-end. Formado em Análise e Desenvolvimento de
          Sistemas, e um grande apaixonado por tecnologia e tudo que envolve
          desenvolvimento. Sou curioso, gosto de mergulhar de cabeça em tudo que envolve desenvolvimento. Sou movido por curiosidade,
          disciplina e pela vontade de transformar ideias em interfaces funcionais, modernas e fiéis ao design.
        </p>
        <p className="mb-2 text-slate-600">
          Minha principal tecnologia é <b>React</b>, e atualmente venho me aprofundando ainda mais em <b>Next.js</b> e <b>Typescript</b>.
          Além do front-end, também tenho experiência com Node.js e bancos de dados como Firebase, MongoDb e Mysql, o que me ajuda a entender melhor o fluxo
          completo das aplicações.
          Estou sempre explorando novas ferramentas e pensando em evoluir, inclusive estou planejando cursar Engenharia de
          Software para expandir ainda mais meus conhecimentos.
        </p>
        <p className="text-slate-600">
          No momento, estou dando meus próximos passos para ingressar oficialmente no mercado como desenvolvedor
          front-end. Estou aberto a novas oportunidades e desafios, se quiser saber mais sobre mim ou entrar em contato,
          fique à vontade para me chamar nas redes sociais.
        </p>
      </div>
    </main>
  );
}
