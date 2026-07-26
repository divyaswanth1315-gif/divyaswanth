"use client";

import Image from "next/image";
import { Fragment } from "react";
import { motion } from "framer-motion";
import { MapPin, ChevronDown } from "lucide-react";
import { scrollToSection } from "../Experience/SmoothScroll";

interface Detail {
  label: string;
  value: string;
  sub?: string;
}

interface Family {
  name: string;
  parents: string;
}

interface Props {
  id: string;
  eyebrow: string;
  title: string;
  photo: string;
  photoAlt: string;
  photoSide: "left" | "right";
  headline: string;
  invite: string;
  details: Detail[];
  mapUrl: string;
  nextId: string;
  nextLabel: string;
  families?: Family[];
}

const ease = [0.22, 1, 0.36, 1] as const;

export default function EventSection({
  id, eyebrow, title, photo, photoAlt, photoSide,
  headline, invite, details, mapUrl, nextId, nextLabel, families,
}: Props) {
  const photoFirst = photoSide === "left";

  return (
    <section id={id} className="bg-invite relative overflow-hidden px-6 py-24 md:py-32">
      <div className="grain pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Photo */}
        <motion.div
          className={`relative flex items-center justify-center ${photoFirst ? "lg:order-1" : "lg:order-2"}`}
          initial={{ opacity: 0, x: photoFirst ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
        >
          <div className="photo-halo pointer-events-none absolute inset-0" />
          <Image
            src={photo}
            alt={photoAlt}
            width={520}
            height={640}
            className="photo-feather relative z-10 h-auto w-full max-w-md object-cover"
            priority
          />
        </motion.div>

        {/* Content */}
        <div className={`flex flex-col items-start ${photoFirst ? "lg:order-2" : "lg:order-1"}`}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="eyebrow text-[#9a1b34]"
          >
            {eyebrow}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            className="mt-3 font-display text-5xl font-light text-[#7a0019] md:text-7xl"
          >
            {title}
          </motion.h2>

          <div className="rule-gold mt-5 w-40" />

          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 font-display text-2xl font-medium text-[#4a3830] md:text-3xl"
          >
            {headline}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-4 font-display text-lg italic leading-relaxed text-[#6b584e] md:text-xl"
          >
            {invite}
          </motion.p>

          {families && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="mt-6 flex w-full items-center justify-center gap-6 rounded-xl border border-[#c8a45b]/30 bg-[#7a0019]/[0.03] px-4 py-5"
            >
              {families.map((f, i) => (
                <Fragment key={f.name}>
                  {i > 0 && (
                    <span className="font-display text-3xl italic text-[#c8a45b]">&amp;</span>
                  )}
                  <div className="text-center">
                    <p className="font-display text-2xl text-[#7a0019]">{f.name}</p>
                    <p className="font-ui mt-0.5 text-xs tracking-wide text-[#9a1b34]/70">
                      {f.parents}
                    </p>
                  </div>
                </Fragment>
              ))}
            </motion.div>
          )}

          <motion.dl
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-8 w-full space-y-4"
          >
            {details.map((d) => (
              <div
                key={d.label}
                className="flex gap-4 border-b border-[#c8a45b]/20 pb-4 last:border-0 last:pb-0"
              >
                <dt
                  className="eyebrow w-32 shrink-0 break-words pt-0.5 leading-snug text-[#9a1b34]"
                  style={{ letterSpacing: "0.12em" }}
                >
                  {d.label}
                </dt>
                <dd className="font-display text-lg text-[#4a3830]">
                  {d.value}
                  {d.sub && (
                    <span
                      className="mt-0.5 block text-base text-[#6b584e]"
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {d.sub}
                    </span>
                  )}
                </dd>
              </div>
            ))}
          </motion.dl>

          <motion.a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="font-ui group relative mt-8 flex items-center gap-2 overflow-hidden rounded-full border border-[#7a0019] px-8 py-4 text-sm uppercase tracking-[0.2em] text-[#7a0019] transition-colors duration-500 hover:text-[#faf8f2]"
          >
            <span className="relative z-10 flex items-center gap-2">
              <MapPin size={14} strokeWidth={1.8} />
              View on Map
            </span>
            <span className="absolute inset-0 origin-bottom scale-y-0 bg-[#7a0019] transition-transform duration-500 group-hover:scale-y-100" />
          </motion.a>
        </div>
      </div>

      {/* Scroll cue to next section */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.7 }}
        className="relative z-10 mt-20 flex flex-col items-center"
      >
        <p className="eyebrow text-[#9a1b34]/60">{nextLabel}</p>
        <motion.button
          type="button"
          onClick={() => scrollToSection(nextId)}
          className="mt-3 text-[#c8a45b]"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          aria-label={`Scroll to next section`}
        >
          <ChevronDown size={26} strokeWidth={1.3} />
        </motion.button>
      </motion.div>
    </section>
  );
}
