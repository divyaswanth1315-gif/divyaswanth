"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { scrollToSection } from "../Experience/SmoothScroll";

interface Props {
  to: string;
  label: string;
}

export default function ScrollCue({ to, label }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="mt-16 flex flex-col items-center"
    >
      <p className="eyebrow text-[#9a1b34]/60">{label}</p>
      <motion.button
        type="button"
        onClick={() => scrollToSection(to)}
        className="mt-3 text-[#c8a45b]"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        aria-label={`Scroll to ${label}`}
      >
        <ChevronDown size={26} strokeWidth={1.3} />
      </motion.button>
    </motion.div>
  );
}
