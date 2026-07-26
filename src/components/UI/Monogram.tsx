"use client";

interface Props {
  size?: number;
  className?: string;
}

export default function Monogram({ size = 96, className = "" }: Props) {
  return (
    <span
      style={{ width: size, height: size }}
      className={`relative inline-flex items-center justify-center rounded-full border border-[#c8a45b]/60 ${className}`}
    >
      <span
        className="pointer-events-none absolute rounded-full border border-[#c8a45b]/25"
        style={{ inset: 6 }}
      />
      <span
        className="font-display font-light italic text-[#7a0019]"
        style={{ fontSize: size * 0.36, lineHeight: 1 }}
      >
        D
      </span>
      <span
        className="font-display italic text-[#c8a45b]"
        style={{ fontSize: size * 0.2, lineHeight: 1, margin: `0 ${size * 0.02}px` }}
      >
        &amp;
      </span>
      <span
        className="font-display font-light italic text-[#7a0019]"
        style={{ fontSize: size * 0.36, lineHeight: 1 }}
      >
        Y
      </span>
    </span>
  );
}
