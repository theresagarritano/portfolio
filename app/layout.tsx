import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import ClientCursor from "@/components/ClientCursor";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Theresa Garritano",
    template: "%s — Theresa Garritano",
  },
  description: "Lead Product Designer at Atlassian. A professional showcase of expertise in design systems, UX research, and human-centered product design.",
  openGraph: {
    title: "Theresa Garritano",
    description: "Lead Product Designer at Atlassian.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050505] text-[#f0ede8]">
        {/* Skip link — first focusable element for keyboard users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[999999] focus:bg-[#050505] focus:text-[#00f2fe] focus:border focus:border-[#00f2fe] focus:px-4 focus:py-2 focus:rounded focus:text-xs focus:uppercase focus:tracking-widest"
        >
          Skip to main content
        </a>
        <ClientCursor />
        <Navbar />
        <main id="main-content" className="flex-1 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
