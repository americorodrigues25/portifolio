import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { IoClose } from "react-icons/io5";

export default function Main() {
    const [open, setOpen] = useState<boolean>(false);
    const { pathname } = useLocation();

    const headers: Record<string, { title: string; subtitle: string }> = {
        "/": { title: "Sobre mim", subtitle: "Aqui vou contar um pouco mais sobre mim !" },
        "/about": { title: "Sobre mim", subtitle: "Aqui vou contar um pouco mais sobre mim !" },
        "/projects": { title: "Meus projetos", subtitle: "Aqui vou demonstrar um pouco sobre meus trabalhos e projetos !" },
        "/academic": { title: "Acadêmico", subtitle: "Aqui você verá minhas formações acadêmicas e cursos extras !" },
        "/skills": { title: "Habilidades", subtitle: "Aqui você verá minhas soft e hard skills !" },
        "/contact": { title: "Contato", subtitle: "Aqui você terá acesso aos meus contatos diretos !" },
    };

    const currentHeader = headers[pathname];

    return (
        <div className="flex min-h-screen bg-gray-200 text-white">

            {/* SIDEBAR — DESKTOP */}
            <div className="hidden md:block">
                <Sidebar />
            </div>

            {/* SIDEBAR MOBILE (ANIMAÇÃO DESLIZANDO) */}
            <div
                className={`fixed top-0 left-0 h-full w-72 bg-slate-950 z-40 transform transition-transform duration-300 
        ${open ? "translate-x-0" : "-translate-x-full"} md:hidden`}
            >
                {/* BOTÃO FECHAR */}
                <button
                    className="absolute top-4 right-4 text-white"
                    onClick={() => setOpen(false)}
                >
                    <IoClose size={32} />
                </button>

                <Sidebar onClickLink={() => setOpen(false)} />
            </div>
            {open && (
                <div
                    className="fixed inset-0 bg-black/70 bg-opacity-50 z-30 md:hidden">
                </div>
            )}

            {/* ÁREA DIREITA: HEADER FIXO + CONTEÚDO */}
            <div className="flex-1 flex flex-col h-screen overflow-hidden">

                {/* HEADER FIXO */}
                {currentHeader && (
                    <div className="shrink-0">
                        <Header title={currentHeader.title} subtitle={currentHeader.subtitle} onMenuClick={() => setOpen(true)} isOpen={open} />
                    </div>
                )}

                {/* CONTEÚDO QUE MUDA */}
                <main className="flex-1 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
