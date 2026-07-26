"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Monogram from "../UI/Monogram";
import { scrollToSection } from "../Experience/SmoothScroll";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-invite relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6"
    >
      {/* faint paper grain */}
      <div className="grain pointer-events-none absolute inset-0 opacity-40" />

      {/* soft gold aura */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c8a45b]/15 blur-[120px]"
        animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.06, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* elegant thin double frame */}
      <div className="pointer-events-none absolute inset-4 border border-[#c8a45b]/30 md:inset-8" />
      <div className="pointer-events-none absolute inset-[22px] border border-[#c8a45b]/15 md:inset-[42px]" />

      {/* content */}
      <div className="relative z-10 flex w-full max-w-2xl flex-col items-center py-14 text-center md:py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.15, ease }}
        >
          <span className="inline-flex md:hidden">
            <Monogram size={92} />
          </span>
          <span className="hidden md:inline-flex">
            <Monogram size={116} />
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="eyebrow mt-6 text-[#9a1b34] md:mt-9"
        >
          Together with our families
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease }}
          className="mt-6 font-display text-[3.35rem] font-light leading-[0.95] text-[#7a0019] md:text-8xl"
        >
          Divya
          <span className="my-1 block font-display text-3xl italic text-[#c8a45b] md:my-2 md:text-5xl">
            &amp;
          </span>
          Yaswanth
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.9, ease }}
          className="rule-gold mt-6 w-52 md:mt-9 md:w-64"
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.05 }}
          className="mt-6 max-w-xl font-display text-xl italic leading-relaxed text-[#4a3830] md:mt-9 md:text-2xl"
        >
          request the honour of your presence as we begin our
          forever, together.
        </motion.p>

        {/* date — 22 & 23 emphasised */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2 }}
          className="mt-7 flex flex-col items-center md:mt-10"
        >
          <p className="flex items-baseline gap-3 font-display text-[#7a0019]">
            <span className="text-5xl font-semibold md:text-6xl">22</span>
            <span className="text-2xl italic text-[#c8a45b] md:text-3xl">
              &amp;
            </span>
            <span className="text-5xl font-semibold md:text-6xl">23</span>
          </p>
          <p className="font-ui mt-3 text-base tracking-[0.4em] text-[#9a1b34] md:text-lg">
            AUGUST 2026
          </p>
        </motion.div>

        {/* CTA — roomy, well spaced below the date */}
        <motion.button
          type="button"
          onClick={() => scrollToSection("#pre-wedding")}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.45 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="font-ui group relative mt-9 overflow-hidden rounded-full border border-[#7a0019] px-12 py-5 text-sm uppercase tracking-[0.22em] text-[#7a0019] transition-colors duration-500 hover:text-[#faf8f2] md:mt-14"
        >
          <span className="relative z-10">Open the Invitation</span>
          <span className="absolute inset-0 origin-bottom scale-y-0 bg-[#7a0019] transition-transform duration-500 group-hover:scale-y-100" />
        </motion.button>
      </div>

      {/* scroll cue */}
      <motion.button
        type="button"
        aria-label="Scroll to next section"
        onClick={() => scrollToSection("#pre-wedding")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-[#c8a45b]"
      >
        <motion.span
          className="block"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={26} strokeWidth={1.3} />
        </motion.span>
      </motion.button>
    </section>
  );
}
