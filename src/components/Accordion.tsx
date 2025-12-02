import { useState } from "react";
import { motion } from "framer-motion";

import { IoChevronDown, IoChevronUp } from "react-icons/io5";


interface AccordionProps {
  label: string;
  children: React.ReactNode;
}

export default function Accordion({ label, children }: AccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left p-4 bg-slate-950 hover:bg-slate-800 transition rounded-t"
      >
        <p className="text-slate-400">{label}</p>
        <span className="text-slate-400 text-lg">
          {open ? <IoChevronUp /> : <IoChevronDown />}
        </span>

      </button>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="overflow-hidden"
      >
        <div className="p-4 text-sm text-slate-400 bg-slate-950 border-t-2 border-slate-600 rounded-b">{children}</div>
      </motion.div>
    </div>
  );
}
