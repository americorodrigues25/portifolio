import { BsTelephoneFill } from "react-icons/bs";

export default function Home() {
  return (
    <div className="bg-slate-950 h-full flex items-center">
      <div className="px-6 md:px-10 lg:px-24 w-full">

        <div className="flex flex-col gap-y-3 md:gap-y-0">
          <h1 className="text-slate-200 text-5xl md:text-5xl font-bold md:text-left text-center">
            Américo Rodrigues
          </h1>

          <p className="text-slate-400 text-2xl md:text-2xl mt-2 md:text-left text-center font-medium">
            Desenvolvedor Front-End
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mt-7 justify-center md:justify-start items-center">
          <button className="bg-slate-400 w-44 md:w-60 px-5 py-4 text-slate-950 font-medium hover:bg-slate-300 transition-all">
            Baixar CV
          </button>

          <div className="flex">
            <button className="text-slate-200 mt-40 md:mt-0 px-5 py-4 font-medium flex items-center gap-2 text-sm md:text-base">
              <span className="bg-slate-400 md:w-10 md:h-10 w-8 h-8 rounded-full flex items-center justify-center">
                <BsTelephoneFill className="text-slate-950 md:text-2xl text-xl" />
              </span>
              Fale comigo !
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
