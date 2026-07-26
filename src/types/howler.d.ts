// Minimal ambient declaration for `howler` (no @types package installed).
declare module "howler" {
  interface HowlOptions {
    src: string[];
    loop?: boolean;
    volume?: number;
    html5?: boolean;
    autoplay?: boolean;
  }

  type HowlEvent = "play" | "playerror" | "load" | "loaderror" | "end" | "pause";

  export class Howl {
    constructor(options: HowlOptions);
    play(): number;
    pause(): this;
    stop(): this;
    playing(): boolean;
    unload(): void;
    volume(value?: number): number | this;
    on(event: HowlEvent, fn: (...args: unknown[]) => void): this;
    once(event: HowlEvent, fn: (...args: unknown[]) => void): this;
    off(event?: HowlEvent, fn?: (...args: unknown[]) => void): this;
  }
}
