"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Blessing() {
  return (
    <section
      id="blessings"
      className="bg-invite relative overflow-hidden px-6 py-24 md:py-32"
    >
      <div className="grain pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
          className="font-display text-5xl text-[#c8a45b]"
        >
          &#10047;
        </motion.span>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="eyebrow mt-6 text-[#9a1b34]"
        >
          With Love &amp; Gratitude
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.25, ease }}
          className="mt-3 font-display text-5xl font-light text-[#7a0019] md:text-7xl"
        >
          Your Blessings
        </motion.h2>

        <div className="rule-gold mt-6 w-40" />

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-10 font-display text-2xl font-light leading-relaxed text-[#5a4a42] md:text-3xl"
        >
          As we begin this beautiful new chapter, your love and
          presence mean more to us than words can express.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8 font-display text-xl italic text-[#9a1b34] md:text-2xl"
        >
          Please keep us in your thoughts and prayers as we step
          into forever.
        </motion.p>

        {/* closing */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 font-display text-4xl text-[#7a0019] md:text-5xl"
        >
          Divya <span className="text-[#c8a45b]">&amp;</span> Yaswanth
        </motion.p>

        <p className="font-ui mt-12 text-[0.72rem] uppercase tracking-[0.3em] text-[#7a0019]/55">
          Made with love for our forever
        </p>
      </div>
    </section>
  );
}
