// components
import type { JSX } from "react";
import Accordion from "./Accordion";

import { FaExternalLinkAlt, FaGithub, FaLinkedin } from "react-icons/fa";


interface ProjectCardProps {
  project: {
    image: string;
    title: string;
    type: string;
    shortDescription: string;
    details: string;
    techs: { name: string; icon: JSX.Element }[];
    url: string;
    github: string;
    linkedin: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {

  const badgeStyle =
    project.type === "Freelance" || project.type === "Projeto pessoal"
      ? "bg-slate-700/10 text-slate-700 border border-slate-700/20"
      : "bg-slate-400/10 text-slate-400 border border-slate-400/20";

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center gap-6">

        <img src={project.image} alt={project.title} className="w-full max-w-[450px] h-auto object-cover" />

        <div className="flex flex-col items-center">
          <span className={`px-3 py-1 rounded-full text-xs font-medium mb-2 ${badgeStyle}`}>
            {project.type}
          </span>
          <h2 className="text-xl font-bold text-slate-800 text-center">{project.title}</h2>
          <p className="text-slate-600 mt-1 text-center">{project.shortDescription}</p>
        </div>
      </div>

      <div className="mt-8 space-y-1">
        <Accordion label="Descrição detalhada:">
          <p className="whitespace-pre-line">{project.details}</p>
        </Accordion>

        <Accordion label="Tecnologias utilizadas:">
          <ul className="list-disc space-y-2 ml-4">
            {project.techs.map((tecch) => (
              <li key={tecch.name} className="flex items-center gap-2">
                {tecch.icon}
                <span>{tecch.name}</span>
              </li>
            ))}
          </ul>
        </Accordion>

        <Accordion label="Links:">
          <div className="flex flex-col md:flex-row gap-4 mt-2">

            <a
              href={project.url}
              target="_blank"
              className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-900 rounded-lg shadow-sm hover:bg-slate-800 transition"
            >
              <FaExternalLinkAlt /> Acessar site
            </a>

            <a
              href={project.github}
              target="_blank"
              className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-900 rounded-lg shadow-sm hover:bg-slate-800 transition"
            >
              <FaGithub /> Acessar GitHub
            </a>

            <a
              href={project.linkedin}
              target="_blank"
              className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-900 rounded-lg shadow-sm hover:bg-slate-800 transition"
            >
              <FaLinkedin /> Acessar LinkedIn
            </a>

          </div>
        </Accordion>
      </div>
    </div>
  );
}
