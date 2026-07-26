"use client";

import { useEffect, useRef, useState } from "react";
import { Howl } from "howler";
import { Music, Pause } from "lucide-react";
import { motion } from "framer-motion";

// Roughly when the intro loader finishes; we try to start music right after.
const AUTOPLAY_DELAY = 2700;
const GESTURES = [
  "pointerdown",
  "click",
  "touchstart",
  "keydown",
  "scroll",
  "wheel",
] as const;

export default function MusicPlayer() {
  const soundRef = useRef<Howl | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const sound = new Howl({
      src: ["/music/wedding-music.mp3"],
      loop: true,
      volume: 0.35,
      html5: true,
    });
    soundRef.current = sound;

    let done = false; // music has successfully started once
    let attempting = false; // a play() call is in flight (guards against overlap)

    const markPlaying = () => {
      done = true;
      attempting = false;
      setIsPlaying(true);
      removeGestureFallback();
    };

    // Single entry point for starting playback. The synchronous `attempting`
    // flag prevents a second play() (from another gesture or the autoplay
    // timer) firing before the async "play" event lands — which would spawn a
    // second, overlapping voice.
    const startPlayback = () => {
      const s = soundRef.current;
      if (!s || done || attempting || s.playing()) return;
      attempting = true;
      s.play();
    };

    // If the browser blocks autoplay, start on the visitor's first interaction.
    const onGesture = () => startPlayback();
    const addGestureFallback = () =>
      GESTURES.forEach((e) =>
        window.addEventListener(e, onGesture, { once: true, passive: true })
      );
    const removeGestureFallback = () =>
      GESTURES.forEach((e) => window.removeEventListener(e, onGesture));

    sound.on("play", markPlaying);
    sound.on("playerror", () => {
      attempting = false;
      setIsPlaying(false);
    });

    // Arm the interaction fallback right away, so the visitor's very first
    // tap / scroll / click anywhere starts the music even if the browser
    // blocks sound-on-load.
    addGestureFallback();

    // Best-effort autoplay right after the loader clears.
    const timer = setTimeout(() => {
      startPlayback();
    }, AUTOPLAY_DELAY);

    return () => {
      clearTimeout(timer);
      removeGestureFallback();
      sound.stop();
      sound.unload();
    };
  }, []);

  const toggle = () => {
    const sound = soundRef.current;
    if (!sound) return;
    if (sound.playing()) {
      sound.pause();
      setIsPlaying(false);
    } else {
      sound.play();
      setIsPlaying(true);
    }
  };

  return (
    <motion.button
      type="button"
      onClick={toggle}
      aria-label={isPlaying ? "Pause music" : "Play music"}
      aria-pressed={isPlaying}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2.8, duration: 0.6 }}
      whileTap={{ scale: 0.9 }}
      className="group fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#c8a45b]/60 bg-[#faf8f2]/80 text-[#7a0019] shadow-lg backdrop-blur-md transition-colors duration-300 hover:bg-[#faf8f2]"
    >
      {isPlaying && (
        <>
          <span className="absolute inset-0 animate-ping rounded-full border border-[#c8a45b]/40" />
          <span className="absolute inset-0 rounded-full bg-[#c8a45b]/10" />
        </>
      )}
      <span className="relative z-10">
        {isPlaying ? (
          <Pause size={18} strokeWidth={1.6} fill="currentColor" />
        ) : (
          <Music size={18} strokeWidth={1.6} />
        )}
      </span>
    </motion.button>
  );
}
