"use client";

import { ReactNode, useEffect } from "react";
import { Manrope } from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css";
import { Footer } from "@/components";
import "@/styles/globals.css";

const font = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <html lang="en">
      <head>
        <title>Audiophile</title>
      </head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={font.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
