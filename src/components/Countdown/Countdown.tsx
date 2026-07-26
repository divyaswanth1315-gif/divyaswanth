"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ScrollCue from "../UI/ScrollCue";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const weddingDate = new Date("2026-08-23T08:00:00+05:30").getTime();

function calculateTimeLeft(): TimeLeft {
  const diff = weddingDate - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const ease = [0.22, 1, 0.36, 1] as const;

export default function Countdown() {
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTime(calculateTimeLeft());
    const t = setInterval(() => setTime(calculateTimeLeft()), 1000);
    return () => clearInterval(t);
  }, []);

  const items = [
    { label: "Days", value: time?.days ?? 0 },
    { label: "Hours", value: time?.hours ?? 0 },
    { label: "Minutes", value: time?.minutes ?? 0 },
    { label: "Seconds", value: time?.seconds ?? 0 },
  ];

  return (
    <section
      id="countdown"
      className="bg-invite relative overflow-hidden px-6 py-24 md:py-32"
    >
      <div className="grain pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="eyebrow text-[#9a1b34]"
        >
          Counting Every Moment
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease }}
          className="mt-3 font-display text-5xl font-light text-[#7a0019] md:text-7xl"
        >
          Until We Say <span className="italic text-[#b8860b]">I Do</span>
        </motion.h2>

        <div className="rule-gold mt-6 w-40" />

        <div className="mt-14 grid w-full grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              className="rounded-2xl border border-[#c8a45b]/40 bg-[#7a0019] px-2 py-8 shadow-lg shadow-[#7a0019]/15 md:py-10"
            >
              <div className="font-display text-5xl font-light tabular-nums text-[#faf8f2] md:text-7xl">
                {String(item.value).padStart(2, "0")}
              </div>
              <p className="font-ui mt-3 text-[0.72rem] uppercase tracking-[0.25em] text-[#e8c96d] md:text-sm">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 font-display text-2xl font-medium text-[#7a0019] md:text-3xl"
        >
          23 August 2026 &middot; 8:00 AM &middot; The Nilgiris
        </motion.p>

        <ScrollCue to="#blessings" label="A note of gratitude" />
      </div>
    </section>
  );
}
