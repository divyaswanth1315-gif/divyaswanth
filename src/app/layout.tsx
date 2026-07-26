import type { Metadata } from "next";
import { Cormorant_Garamond, Lora, Cinzel } from "next/font/google";
import "./globals.css";

const heading = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

const body = Lora({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

const button = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-button",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Divya ❤️ Yaswanth · Wedding Invitation",
  description:
    "Together with our families, we invite you to celebrate the wedding of Divya & Yaswanth — 22 & 23 August 2026, The Nilgiris.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${heading.variable} ${body.variable} ${button.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
