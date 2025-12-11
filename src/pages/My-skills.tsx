// icones
import { FaReact, FaBootstrap, FaNodeJs } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { BsChatLeftText } from "react-icons/bs";
import { HiOutlineUsers, HiOutlineArrowTrendingUp } from "react-icons/hi2";
import {
  IoBulbOutline,
  IoLogoJavascript,
  IoLogoFirebase,
} from "react-icons/io5";
import {
  SiStyledcomponents,
  SiMongodb,
  SiJirasoftware,
  SiJest,
  SiCypress,
  SiPostman,
  SiVercel,
  SiRender,
} from "react-icons/si";
import { TbApi, TbBrandMysql } from "react-icons/tb";
import { VscSourceControl } from "react-icons/vsc";

export default function Skills() {
  const hardSkills = [
    { icon: <FaReact aria-hidden="true" />, name: "React", description: "Sólido conhecimento em react, criando aplicações modernas e responsivas." },
    { icon: <RiNextjsFill aria-hidden="true" />, name: "Next.js", description: "teste" },
    { icon: <BiLogoTypescript aria-hidden="true" />, name: "TypeScript", description: "teste" },
    { icon: <IoLogoJavascript aria-hidden="true" />, name: "JavaScript", description: "teste" },
    { icon: <RiTailwindCssFill aria-hidden="true" />, name: "Tailwind CSS", description: "teste" },
    { icon: <FaBootstrap aria-hidden="true" />, name: "Bootstrap", description: "teste" },
    {
      icon: <SiStyledcomponents aria-hidden="true" />,
      name: "Styled Components",
      description: "teste"
    },
    { icon: <FaNodeJs aria-hidden="true" />, name: "Node.js", description: "teste" },
    { icon: <TbApi aria-hidden="true" />, name: "APIs REST", description: "teste" },
    { icon: <TbBrandMysql aria-hidden="true" />, name: "MySQL", description: "teste" },
    { icon: <IoLogoFirebase aria-hidden="true" />, name: "Firebase", description: "teste" },
    { icon: <SiMongodb aria-hidden="true" />, name: "MongoDB", description: "teste" },
    { icon: <VscSourceControl aria-hidden="true" />, name: "Git & GitHub", description: "teste" },
    { icon: <SiJest aria-hidden="true" />, name: "Jest", description: "teste" },
    { icon: <SiCypress aria-hidden="true" />, name: "Cypress", description: "teste" },
    { icon: <SiPostman aria-hidden="true" />, name: "Postman", description: "teste" },
    { icon: <SiVercel aria-hidden="true" />, name: "Vercel", description: "teste" },
    { icon: <SiRender aria-hidden="true" />, name: "Render", description: "teste" },
    { icon: <SiJirasoftware aria-hidden="true" />, name: "Scrum & Agile", description: "teste" },
  ];

  const softSkills = [
    {
      icon: <BsChatLeftText aria-hidden="true" />,
      name: "Comunicação",
      subtitle: "Expressar ideias de forma clara.",
    },
    {
      icon: <HiOutlineUsers aria-hidden="true" />,
      name: "Trabalho em equipe",
      subtitle: "Colaborar para alcançar objetivos.",
    },
    {
      icon: <IoBulbOutline aria-hidden="true" />,
      name: "Resolução de problemas",
      subtitle: "Identificar desafios e encontrar as melhores soluções.",
    },
    {
      icon: <HiOutlineArrowTrendingUp aria-hidden="true" />,
      name: "Proatividade",
      subtitle: "Agir antes da necessidade.",
    },
  ];

  return (
    <main className="m-5 bg-white p-5 rounded shadow-inner shadow-gray-400">
      <h1 className="text-xl font-semibold text-slate-950 mb-3">Hard Skills</h1>

      <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 mb-10">
        {hardSkills.map((skill, i) => (
          <div
            key={i}
            className="relative group"
          >
            <div
              className="flex flex-col items-center justify-center gap-2 py-6 bg-slate-200 
                 border-slate-800 border-b-8 rounded-lg hover:translate-y-1 
                 transition-all rounded-tl-4xl rounded-br-4xl"
            >
              <p className="text-3xl text-slate-800">{skill.icon}</p>
              <p className="text-sm font-medium text-slate-800 text-center">{skill.name}</p>
            </div>

            {skill?.description && (
              <div
                className="absolute left-1/2 -bottom-4 translate-y-full -translate-x-1/2 z-50
                   w-max max-w-[150px] px-3 py-2 text-xs text-slate-200 bg-slate-800 rounded 
                   opacity-0 group-hover:opacity-100 group-hover:translate-y-[90%]
                   transition-all duration-500 ease-in-out pointer-events-none shadow-lg text-center"
              >
                {skill.description}
              </div>
            )}
          </div>
        ))}
      </section>

      <h2 className="text-xl font-semibold text-slate-950 mb-4">Soft Skills</h2>

      <section className="flex flex-col divide-y divide-slate-200">
        {softSkills.map((skill, i) => (
          <div
            key={i}
            className="flex items-start gap-4 py-4 hover:shadow-md p-3 rounded transition-all"
          >
            <div className="text-2xl text-slate-800">{skill.icon}</div>
            <div className="flex flex-col">
              <p className="text-base font-medium text-slate-800">
                {skill.name}
              </p>
              <p className="text-sm text-slate-600 opacity-80">
                {skill.subtitle}
              </p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
