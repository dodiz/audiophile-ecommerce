"use client";

import { ReactNode } from "react";
import { Manrope } from "next/font/google";
import { Header } from "@/components";
import "@/styles/globals.css";
import { QueryProvider } from "@/app/QueryProvider";

const font = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Audiophile</title>
      </head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={font.className}>
        <QueryProvider>
          <Header />
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
