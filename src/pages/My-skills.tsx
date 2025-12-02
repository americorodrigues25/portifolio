import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { BsChatLeftText } from "react-icons/bs";
import { HiOutlineUsers, HiOutlineArrowTrendingUp } from "react-icons/hi2";
import { IoBulbOutline } from "react-icons/io5";


export default function Skills() {
  const hardSkills = [
    { icon: <FaReact />, name: "React" },
    { icon: <RiNextjsFill />, name: "Next.js" },
    { icon: <BiLogoTypescript />, name: "TypeScript" },
    { icon: <BiLogoTypescript />, name: "TypeScript" },
    { icon: <BiLogoTypescript />, name: "TypeScript" },
  ];

  const softSkills = [
    { icon: <BsChatLeftText />, name: "Comunicação", subtitle: "Expressar ideias de forma clara." },
    { icon: <HiOutlineUsers />, name: "Trabalho em equipe", subtitle: "Colaborar para alcançar objetivos." },
    { icon: <IoBulbOutline />, name: "Resolução de problemas", subtitle: "Identificar desafios e encontrar soluções." },
    { icon: <HiOutlineArrowTrendingUp />, name: "Proatividade", subtitle: "Agir antes da necessidade." },
  ];

  return (
    <div className="m-5 bg-white p-5 rounded shadow-inner shadow-gray-400">

      <h2 className="text-xl font-semibold text-slate-950 mb-3">Hard Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
        {hardSkills.map((skill, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center gap-2 py-6  bg-slate-200 border-slate-800 border-b-8 rounded-lg hover:shadow-md transition rounded-tl-4xl rounded-br-4xl"
          >
            <p className="text-3xl text-slate-800">{skill.icon}</p>
            <p className="text-sm font-medium text-slate-800">{skill.name}</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-semibold text-slate-950 mb-4">Soft Skills</h2>

      <div className="flex flex-col divide-y divide-slate-200">
        {softSkills.map((skill, i) => (
          <div key={i} className="flex items-start gap-4 py-4">
            <div className="text-2xl text-slate-800">{skill.icon}</div>
            <div className="flex flex-col">
              <p className="text-base font-medium text-slate-800">{skill.name}</p>
              <p className="text-sm text-slate-600 opacity-80">{skill.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
