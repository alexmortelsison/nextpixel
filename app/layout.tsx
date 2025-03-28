import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Pixel Studio Labs",
  description: "Website Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <main className="min-h-screen">
          <Image
            src={"/bg2.png"}
            alt="bg"
            fill
            priority
            quality={100}
            layout="fill"
            className="-z-50 brightness-20 object-cover"
          />
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
