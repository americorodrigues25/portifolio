// components
import Accordion from "./Accordion";

interface ProjectCardProps {
  project: {
    image: string;
    title: string;
    shortDescription: string;
    details: string;
    techs: string[];
    demo: string;
    github: string;
    linkedin: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center gap-6">

        <img src={project.image} alt={project.title} className="w-full max-w-[450px] h-auto rounded-lg shadow-lg object-cover" />

        <div className="flex flex-col">
          <h2 className="text-xl font-bold text-slate-800 text-center">{project.title}</h2>
          <p className="text-slate-600 mt-1 text-center">{project.shortDescription}</p>
        </div>
      </div>

      <div className="mt-8 space-y-1">
        <Accordion label="Descrição detalhada do projeto:">
          <p>{project.details}</p>
        </Accordion>

        <Accordion label="Tecnologias utilizadas:">
          <ul className="list-disc ml-4">
            {project.techs.map((t: string) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Accordion>

        <Accordion label="Demonstração:">
          <a href={project.demo} className="text-blue-400 underline">
            Acessar demonstração
          </a>
        </Accordion>

        <Accordion label="Links:">
          <div className="flex flex-col md:flex-row gap-4 mt-2">
            <a href={project.demo} className="btn-link">Acessar site</a>
            <a href={project.github} className="btn-link">Acessar GitHub</a>
            <a href={project.linkedin} className="btn-link">Acessar LinkedIn</a>
          </div>
        </Accordion>
      </div>
    </div>
  );
}
