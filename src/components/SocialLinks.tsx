import { MdEmail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io5";

import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

interface SocialLinksProps {
    className?: string;
}

const SocialLinks = ({ className }: SocialLinksProps) => {
    return (
            <div className={`flex gap-5 ${className}`}>

                <a
                    href="https://www.linkedin.com/in/seu-perfil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-slate-800 text-slate-200 text-lg hover:bg-slate-600 transition"
                >
                    <FaLinkedin />
                </a>

                <a
                    href="https://github.com/seuusuario"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-slate-800 text-slate-200 text-lg hover:bg-slate-600 transition"
                >
                    <IoLogoGithub />
                </a>

                <a
                    href="https://wa.me/55SEUNUMERO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-slate-800 text-slate-200 text-lg hover:bg-slate-600 transition"
                >
                    <FaWhatsapp />
                </a>

                <a
                    href="mailto:seuemail@example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-slate-800 text-slate-200 text-lg hover:bg-slate-600 transition"
                >
                    <MdEmail />
                </a>

            </div>

    )
}

export default SocialLinks
