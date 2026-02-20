// icones
import { FaLinkedin } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io5";

// gif
import animatedGIF from "../assets/contact/animatedGIF.gif";

export default function Contact() {
  return (
    <main className="m-5 bg-white p-5 rounded shadow-inner shadow-gray-400">
      <h1 className="text-xl font-semibold text-slate-950 mb-3">Entre em Contato</h1>
      <p className="text-base text-slate-600">Ficarei feliz em me conectar com você, acesse minhas redes e envie uma mensagem !</p>

      <div className="flex items-center justify-center gap-5 md:gap-10 my-10">
        <a
          href="https://www.linkedin.com/in/americo-rodrigues025/"
          aria-label="Ir para meu LinkedIn"
          className="text-blue-700 hover:scale-110 transition-transform"
        >
          <FaLinkedin className="text-4xl md:text-5xl" />
        </a>

        <a
          href="https://wa.me/5511964166962"
          aria-label="Enviar mensagem no WhatsApp"
          className="text-green-600 hover:scale-110 transition-transform"
        >
          <RiWhatsappFill className="text-4xl md:text-5xl" />
        </a>

        <a
          href="mailto:americorodrigues.br@gmail.com"
          aria-label="Enviar email"
          className="text-red-600 hover:scale-110 transition-transform"
        >
          <SiGmail className="text-4xl md:text-5xl" />
        </a>

        <a
          href="https://github.com/americorodrigues25"
          aria-label="Ir para meu GitHub"
          className="text-slate-800 hover:scale-110 transition-transform"
        >
          <IoLogoGithub className="text-4xl md:text-5xl" />
        </a>
      </div>

      <div className="flex justify-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
        <img
          src={animatedGIF}
          alt="GIF animado meme de programação"
          className="w-full h-auto object-contain"
        />
      </div>
    </main>
  );
}
