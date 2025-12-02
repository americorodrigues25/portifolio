import Accordion from "../components/Accordion";

import { TbExternalLink } from "react-icons/tb";
import { AiFillSafetyCertificate } from "react-icons/ai";

export default function Academic() {

  const extraCourses = [
    {
      platform: "Dio",
      title: "Lógica de programação",
      year: "2024",
      link: "https://dio.me",
    },
    {
      platform: "Udemy",
      title: "JavaScript Moderno",
      year: "2023",
      link: "https://udemy.com",
    },
    {
      platform: "Alura",
      title: "React + Hooks",
      year: "2024",
      link: "https://alura.com.br",
    },
  ];

  return (
    <div className="m-5 bg-white p-5 rounded shadow-inner shadow-gray-400">
      <h2 className="text-xl font-semibold text-slate-950 mb-3">Graduação</h2>

      <div className="space-y-1 mb-10">
        <Accordion label="Análise e Desenvolvimento de Sistemas" >
          <div className="space-y-2">
            <p className="font-semibold">Universidade Piaget - Suzano</p>
            <p className="text-sm text-slate-600">Concluído em 2025</p>
            <p>Curso focado em desenvolvimento de software, abrangendo desde a análise de requisitos até a implementação e manutenção de sistemas</p>
          </div>
        </Accordion>

        <Accordion label="Pós Graduação em Inteligência Artificial" >
          <div className="space-y-2">
            <p className="font-semibold">Universidade São Judas - EAD</p>
            <p className="text-sm text-slate-600">Previsão para 2026</p>
            <p>Atualmente estou cusando pós graduação em Inteligência Artificial buscando unir o desenvolvimento com a I.A</p>
          </div>
        </Accordion>
      </div>

      <h2 className="text-xl font-semibold text-slate-950 mb-3">Cursos extras</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
        {extraCourses.map((course, index) => (
          <div key={index} className="bg-slate-950 p-4 rounded">
            <div className="flex justify-between items-center">
              <p className="text-slate-200 font-semibold">{course.platform}</p>

              <a
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-200 transition"
              >
                <TbExternalLink />
              </a>
            </div>

            <div className="flex items-center justify-between mt-2">
              <span className="text-slate-400 flex items-center gap-2 text-sm">
                <AiFillSafetyCertificate />
                {course.title}
              </span>

              <p className="text-slate-400 text-sm">{course.year}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
