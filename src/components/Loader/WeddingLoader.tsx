"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Monogram from "../UI/Monogram";

/**
 * A one-time elegant intro. Self-dismisses after the reveal and
 * locks scroll while it is on screen.
 */
export default function WeddingLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const lenis = (
      window as unknown as { __lenis?: { stop: () => void; start: () => void } }
    ).__lenis;
    lenis?.stop();

    const timer = setTimeout(() => setVisible(false), 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, []);

  useEffect(() => {
    if (!visible) {
      document.body.style.overflow = "";
      (
        window as unknown as { __lenis?: { start: () => void } }
      ).__lenis?.start();
    }
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, #fffdf8 0%, #faf8f2 55%, #f3ecdd 100%)",
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          {/* soft gold glow */}
          <motion.div
            className="pointer-events-none absolute h-[300px] w-[300px] rounded-full bg-[#c8a45b]/15 blur-[110px] md:h-[440px] md:w-[440px]"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
          />

          <div className="relative z-10 flex flex-col items-center px-6 text-center">
            {/* monogram with shimmer sweep */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.85, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Monogram size={112} />
            </motion.div>

            <motion.p
              className="eyebrow mt-8 text-[#9a1b34]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
            >
              Together with our families
            </motion.p>

            <motion.div
              className="mt-5 h-px bg-[#c8a45b]"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 96, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.7, ease: "easeOut" }}
            />

            <motion.div
              className="mt-6 flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-[#c8a45b]"
                  animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.4, 1] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
