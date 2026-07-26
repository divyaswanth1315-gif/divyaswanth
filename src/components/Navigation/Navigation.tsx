"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Monogram from "../UI/Monogram";
import { scrollToSection } from "../Experience/SmoothScroll";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Pre-Wedding", href: "#pre-wedding" },
  { label: "Wedding", href: "#wedding" },
  { label: "Countdown", href: "#countdown" },
  { label: "Blessings", href: "#blessings" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setIsOpen(false);
    scrollToSection(href);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed left-1/2 top-3 z-50 w-[calc(100%-1.5rem)] max-w-5xl -translate-x-1/2 rounded-full border transition-all duration-500 ${
          scrolled
            ? "border-[#c8a45b]/40 bg-[#fffdf8]/90 shadow-lg shadow-[#7a0019]/5 backdrop-blur-xl"
            : "border-[#c8a45b]/20 bg-[#fffdf8]/55 backdrop-blur-md"
        }`}
      >
        <div className="flex h-14 items-center justify-between px-3 md:h-16 md:px-5">
          <button
            type="button"
            onClick={() => go("#hero")}
            className="group flex items-center gap-2.5"
            aria-label="Go to top"
          >
            <Monogram size={38} className="transition-transform duration-500 group-hover:scale-105" />
            <span className="hidden font-display text-base tracking-wide text-[#7a0019] sm:block">
              Divya <span className="text-[#c8a45b]">&amp;</span> Yaswanth
            </span>
          </button>

          {/* desktop tabs — separated so they read as distinct items */}
          <div className="hidden items-center md:flex">
            {navItems.map((item, i) => (
              <div key={item.href} className="flex items-center">
                {i > 0 && (
                  <span className="h-1 w-1 rounded-full bg-[#c8a45b]/45" />
                )}
                <button
                  type="button"
                  onClick={() => go(item.href)}
                  className="font-ui group relative mx-1 rounded-full px-4 py-2 text-[0.74rem] uppercase tracking-[0.14em] text-[#7a0019]/85 transition-colors duration-300 hover:bg-[#7a0019]/[0.06] hover:text-[#7a0019]"
                >
                  {item.label}
                  <span className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-[#c8a45b] transition-all duration-300 group-hover:w-1/2" />
                </button>
              </div>
            ))}
          </div>

          {/* mobile toggle */}
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c8a45b]/50 text-[#7a0019] transition-colors duration-300 hover:bg-[#c8a45b]/10 md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-[#7a0019]/15 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="fixed left-3 right-3 top-20 z-50 overflow-hidden rounded-3xl border border-[#c8a45b]/40 bg-[#fffdf8]/95 p-3 shadow-2xl backdrop-blur-xl md:hidden"
            >
              {navItems.map((item, i) => (
                <motion.button
                  key={item.href}
                  type="button"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => go(item.href)}
                  className="font-display flex w-full items-center justify-between border-b border-[#c8a45b]/15 px-4 py-4 text-left text-lg text-[#7a0019] transition-colors last:border-0 hover:bg-[#c8a45b]/[0.08]"
                >
                  <span>{item.label}</span>
                  <span className="text-[#c8a45b]">&rarr;</span>
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
