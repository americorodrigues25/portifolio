// icones
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
                    href="https://www.linkedin.com/in/americo-rodrigues025/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-slate-800 text-slate-200 text-lg hover:bg-slate-600 transition"
                >
                    <FaLinkedin />
                </a>

                <a
                    href="https://github.com/americorodrigues25"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-slate-800 text-slate-200 text-lg hover:bg-slate-600 transition"
                >
                    <IoLogoGithub />
                </a>

                <a
                    href="https://wa.me/5511964166962"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-slate-800 text-slate-200 text-lg hover:bg-slate-600 transition"
                >
                    <FaWhatsapp />
                </a>

                <a
                    href="mailto:americo.200422@gmail.com"
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
