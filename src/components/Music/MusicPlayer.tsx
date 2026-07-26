"use client";

import { useEffect, useRef, useState } from "react";
import { Howl } from "howler";
import { Music, Pause } from "lucide-react";
import { motion } from "framer-motion";

// Roughly when the intro loader finishes; we try to start music right after.
const AUTOPLAY_DELAY = 2700;
// Only real user-activation gestures may unlock audio on mobile. `scroll` /
// `wheel` do NOT count as activation there, so starting playback on them lit
// the button while the OS kept the sound blocked — never trigger on scroll.
const GESTURES = ["pointerdown", "touchstart", "click", "keydown"] as const;

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

    // Start playback only if a voice isn't already going. Howler flips its
    // internal playing() state synchronously inside play(), so this single
    // guard blocks duplicate/overlapping voices — no separate flag that could
    // get stuck and force several taps to recover.
    const tryStart = () => {
      const s = soundRef.current;
      if (!s || s.playing()) return;
      s.play();
    };

    const onGesture = () => tryStart();
    const removeGestureFallback = () =>
      GESTURES.forEach((e) => window.removeEventListener(e, onGesture));

    // The button reflects Howler's REAL state via its events — never set
    // manually from several places, which is what desynced the icon from the
    // audio on mobile (button "on" but silent).
    sound.on("play", () => {
      setIsPlaying(true);
      // Truly playing now — retire the first-interaction fallback so it can
      // never fight a later pause.
      removeGestureFallback();
    });
    sound.on("pause", () => setIsPlaying(false));
    sound.on("stop", () => setIsPlaying(false));
    sound.on("playerror", () => setIsPlaying(false));

    // Arm the interaction fallback so the visitor's first tap / scroll / click
    // starts the music even if the browser blocks sound-on-load. NOT
    // { once: true }: a blocked first attempt leaves the listeners armed so the
    // next tap retries, instead of burning the fallback on a silent attempt.
    GESTURES.forEach((e) =>
      window.addEventListener(e, onGesture, { passive: true })
    );

    // Best-effort autoplay right after the loader clears.
    const timer = setTimeout(tryStart, AUTOPLAY_DELAY);

    return () => {
      clearTimeout(timer);
      removeGestureFallback();
      sound.off();
      sound.stop();
      sound.unload();
    };
  }, []);

  const toggle = () => {
    const sound = soundRef.current;
    if (!sound) return;
    // Only drive the audio here; the "play"/"pause" events update the icon, so
    // it always matches what the audio is actually doing.
    if (sound.playing()) sound.pause();
    else sound.play();
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
