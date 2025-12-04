import { useState } from "react";

// Biblioteca externa
import { AnimatePresence, motion } from "framer-motion";

// projetos
import { projects } from '../data/projects'

// components
import ProjectCard from "../components/ProjectCard";

// icones
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Projects() {
  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((i) => (i + 1) % projects.length);

  const prev = () =>
    setIndex((i) => (i - 1 + projects.length) % projects.length);

  return (
    <main className="">
      <div className="flex justify-between w-full max-w-3xl px-20 mx-auto mt-5">
        <button
          onClick={prev}
          aria-label="Voltar para o projeto anterior"
          className="px-4 py-2 flex items-center gap-2 transition-all duration-200 hover:opacity-90 hover:-translate-x-1"

        >
          <span className="text-slate-200 bg-slate-950 p-2 rounded-full transition-all duration-200">
            <FaArrowLeft />
          </span>
          <p className="text-slate-950 hidden md:block">Voltar projeto</p>
        </button>


        <button
          onClick={next}
          aria-label="Avançar para o próximo projeto"
          className="px-4 py-2 flex items-center gap-2 transition-all duration-200 hover:opacity-90 hover:translate-x-1"
        >
          <p className="text-slate-950 hidden md:block">Avançar projeto</p>
          <span className="text-slate-200 bg-slate-950 p-2 rounded-full transition-all duration-200">
            <FaArrowRight />
          </span>
        </button>
      </div>


      <section className="m-5 bg-white p-5 rounded shadow-inner shadow-gray-400">

        <div className="relative w-full my-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
            >
              <ProjectCard project={projects[index]} />
            </motion.div>
          </AnimatePresence>
        </div>

      </section>
    </main>
  );
}
