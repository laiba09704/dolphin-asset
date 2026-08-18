import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Serif_4, Montserrat } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
}); 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dolphin Asset",
  description: "Asset integrity solutions for industrial safety and reliability.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
  lang="en"
  className={`${geistSans.variable} ${geistMono.variable} ${sourceSerif.variable} ${montserrat.variable} h-full antialiased`}
>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}