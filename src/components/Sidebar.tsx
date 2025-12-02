import { Link, useLocation } from "react-router-dom";

import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineAcademicCap, HiOutlineCog8Tooth } from "react-icons/hi2";
import { IoCodeSlashSharp } from "react-icons/io5";
import { FiUser } from "react-icons/fi";

import SocialLinks from "./SocialLinks";


interface SidebarProps {
  onClickLink?: () => void;
}

export default function Sidebar({ onClickLink }: SidebarProps) {
  const { pathname } = useLocation();

  const activePath = pathname === "/" ? "/about" : pathname;

  const menu = [
    { label: "Sobre mim", path: "/about", icon: FiUser },
    { label: "Meus projetos", path: "/projects", icon: IoCodeSlashSharp },
    { label: "Acadêmico", path: "/academic", icon: HiOutlineAcademicCap },
    { label: "Minhas habilidades", path: "/skills", icon: HiOutlineCog8Tooth },
    { label: "Contato", path: "/contact", icon: MdOutlineEmail },
  ];

  return (
    <aside className="w-72 h-screen bg-slate-950 px-5 py-10 flex flex-col overflow-y-auto">

      {/* FOTO E NOME */}
      <div className="flex flex-col items-center">
        <div className="bg-slate-800 p-2 rounded-full">
          <img
            src="/img-perfil.png"
            className="w-28 h-28 rounded-full object-cover"
          />
        </div>
        <h2 className="my-4 text-xl font-semibold">Américo Rodrigues</h2>
      </div>

      <div className="flex justify-center">
        <SocialLinks />
      </div>

      {/* LINKS */}
      <nav className="mt-8 flex flex-col gap-3">
        {menu.map(item => (
          <Link
            key={item.path}
            to={item.path}
            onClick={onClickLink}
            className={`py-3 pl-5 rounded-l-2xl transition duration-200
              ${activePath === item.path
                ? "bg-slate-800 text-slate-200 font-semibold"
                : "text-slate-200 hover:bg-slate-600"
              }`}
          >
            <item.icon className="inline mr-3 text-lg align-middle relative" />
            <span
              className={`align-middle text-base text-slate-200 ${activePath === item.path ? "font-semibold" : "font-extralight"
                }`}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </nav>

    </aside>
  );
}
