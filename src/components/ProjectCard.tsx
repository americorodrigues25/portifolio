import { useState } from "react";
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
    url?: string;
    github: string;
    linkedin: string;
    video?: string;
    capa?: string;
    cardImages?: string[];
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [selectedImage, setSelectedImage] = useState(null);


  const badgeStyle =
    project.type === "Freelance" || project.type === "Projeto pessoal" || project.type === "Projeto Acadêmico"
      ? "bg-slate-700/10 text-slate-700 border border-slate-700/20"
      : "bg-slate-400/10 text-slate-400 border border-slate-400/20";

  return (
    <div>
      <div className="flex flex-col-reverse lg:flex-row items-center gap-6">

        <div className="w-full max-w-[450px] aspect-[4/3] overflow-hidden rounded-lg bg-white">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex flex-col items-center">
          <span className={`px-3 py-1 rounded-full text-xs font-medium mb-2 ${badgeStyle}`}>
            {project.type}
          </span>
          <h2 className="text-xl font-bold text-slate-800 text-center">{project.title}</h2>
          <p className="text-slate-600 mt-1 text-center">{project.shortDescription}</p>
        </div>
      </div>

      <div className="mt-8 space-y-1">
        <Accordion label="Descrição:">
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
          <div className="flex flex-col lg:flex-row gap-4 mt-2">

            {project.url && (
              <a
                href={project.url}
                target="_blank"
                className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-900 rounded-lg shadow-sm hover:bg-slate-800 transition"
              >
                <FaExternalLinkAlt /> Acessar site
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-900 rounded-lg shadow-sm hover:bg-slate-800 transition"
              >
                <FaGithub /> Acessar GitHub
              </a>
            )}

            {project.linkedin && (
              <a
                href={project.linkedin}
                target="_blank"
                className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-900 rounded-lg shadow-sm hover:bg-slate-800 transition"
              >
                <FaLinkedin /> Acessar LinkedIn
              </a>
            )}

          </div>
        </Accordion>

        {project.video ? (

          <div className="mt-5 w-full flex flex-col items-center">
            <h3 className="text-slate-800 text-xl text-center">
              Veja a demonstração em video
            </h3>

            <div className="w-full max-w-4xl mt-3">
              <video
                src={project.video}
                poster={project.capa}
                controls
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        ) : project.cardImages ? (

          <div className="mt-5 w-full flex flex-col items-center">
            <h3 className="text-slate-800 text-xl text-center">
              Imagens do projeto | (Clique para ampliar)
            </h3>

            <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
              {project.cardImages.map((imgSrc, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(imgSrc)}
                  className="w-full aspect-square overflow-hidden rounded"
                >
                  <img
                    src={imgSrc}
                    alt={`${project.title} - imagem ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition duration-300"
                  />
                </button>
              ))}
            </div>

            {selectedImage && (
              <div
                className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                onClick={() => setSelectedImage(null)}
              >
                <div className="relative max-w-3xl w-full px-4">
                  <img
                    src={selectedImage}
                    className="w-full max-h-[80vh] object-contain rounded-lg"
                  />
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-3 right-3 text-slate-200 text-3xl cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : null}

      </div>
    </div>
  );
}
