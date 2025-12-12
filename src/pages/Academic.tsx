// components
import SlideDown from "../components/SlideDown";

// icones
import { TbExternalLink } from "react-icons/tb";
import { AiFillSafetyCertificate } from "react-icons/ai";

export default function Academic() {
  const extraCourses = [
    {
      platform: "Udemy",
      title: "React + Hooks",
      year: "2025",
      link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-974636d9-6670-4361-8ad7-76bbce3e3010.pdf",
    },
    {
      platform: "Udemy",
      title: "JavaScript Moderno",
      year: "2025",
      link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-efc27fc5-f947-4990-ade5-c13ddf7eb57e.pdf",
    },
    {
      platform: "Dio",
      title: "Explorando SASS",
      year: "2025",
      link: "https://hermes.dio.me/certificates/ZUGY8WAF.pdf",
    },
    {
      platform: "Dio",
      title: "Git e GitHub",
      year: "2025",
      link: "https://hermes.dio.me/certificates/YXXLCB3L.pdf",
    },
    {
      platform: "Dio",
      title: "Lógica de programação",
      year: "2025",
      link: "https://hermes.dio.me/certificates/OFJSSEJF.pdf",
    },
  ];

  return (
    <main className="m-5 bg-white p-5 rounded shadow-inner shadow-gray-400">
      <h1 className="text-xl font-semibold text-slate-950 mb-3">Graduação</h1>

      <div className="space-y-1 mb-10">
        <SlideDown label="Análise e Desenvolvimento de Sistemas">
          <div className="space-y-2">
            <p className="font-semibold">Universidade Piaget - Suzano</p>
            <p className="text-sm text-slate-600">Concluído em 2025</p>
            <p>
              Curso focado em desenvolvimento de software, abrangendo desde a
              análise de requisitos até a implementação e manutenção de sistemas
            </p>
          </div>
        </SlideDown>
      </div>

      <h2 className="text-xl font-semibold text-slate-950 mb-3">
        Cursos extras
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
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
    </main>
  );
}
