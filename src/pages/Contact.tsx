import { FaLinkedin } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io5";

import animatedGIF from "../assets/contact/animatedGIF.gif";

export default function Contact() {
  return (
    <div className="m-5 bg-white p-5 rounded shadow-inner shadow-gray-400">
      <h2 className="text-xl font-semibold text-slate-950 mb-3">Entre em Contato</h2>
      <p className="text-base text-slate-600">Ficarei feliz em me conectar com você, acesse minhas redes e envie uma mensagem !</p>

      <div className="flex items-center justify-center gap-5 md:gap-10 my-10">
        <FaLinkedin className="text-4xl md:text-5xl text-blue-700 cursor-pointer transition-transform duration-300 hover:scale-110 hover:brightness-110" />
        <RiWhatsappFill className="text-4xl md:text-5xl text-green-600 cursor-pointer transition-transform duration-300 hover:scale-110 hover:brightness-110" />
        <SiGmail className="text-4xl md:text-5xl text-red-600 cursor-pointer transition-transform duration-300 hover:scale-110 hover:brightness-110" />
        <IoLogoGithub className="text-4xl md:text-5xl text-slate-800 cursor-pointer transition-transform duration-300 hover:scale-110 hover:brightness-110" />
      </div>

      <div className="flex justify-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
        <img
          src={animatedGIF}
          alt="GIF animado de ilustração"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}
