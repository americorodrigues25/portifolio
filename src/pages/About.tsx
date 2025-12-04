// icone
import { FaDownload } from "react-icons/fa";

// components
import SocialLinks from "../components/SocialLinks";

export default function About() {
  return (

    <main className="m-5 bg-white p-5 rounded shadow-inner shadow-gray-400">
      <div className="flex flex-col md:flex-row md:gap-12 gap-6">
        <div className="flex justify-center">
          <img src="/img-perfil.png" alt="Foto de Américo Rodrigues" className="md:w-48 w-3/4" />
        </div>
        <div className="flex flex-col-reverse md:flex-col justify-between gap-5">
          <div className="text-slate-950 space-y-2">
            <p>📍 Suzano, SP</p>
            <p>⚙️ React, Next.js, Typescript</p>
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
        <h1 className="text-slate-950 text-3xl font-bold mb-4 mt-10">Desenvolvedor Front-End</h1>
        <p className="mb-2 text-slate-600">Olá ! Me chamo Américo sou formado em Análise e Desenvolvimento de Sistemas, e atualmente estou cursando pós graduaçõa em Inteligência Artificial. Sou um grande apaixonado por tecnologia e tudo que envolve desenvolvimento. Sou curioso,
          gosto de aprender coisas novas e me dedicar a ter bons conceitos tecnicos para poder aplica-los na pratica.</p>
        <p className="mb-2 text-slate-600">Gosto de ter disciplina e constancia nos estudos, como um bom desenvolvedor Front-End me preocupo em fidelizar ao maximo os design na hora do desenvolvimento.</p>
        <p className="mb-2 text-slate-600">Minhas tecnologias principais são  React, Next.js e Typescript, mas você pode acessar outras tecnologias que tenho dominio e conhecimento na sessão “habilidades”</p>
        <p className="text-slate-600">Estou aberto a novas oportunidades e desafios, se quiser saber mais sobre mim ou entrar em contato, fique a vontade para me chamar nas redes sociais.</p>
      </div>
    </main>

  );
}


