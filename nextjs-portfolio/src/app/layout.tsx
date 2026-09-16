import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "David Silva — Software Developer & Full Stack Engineer",
  description:
    "Portfólio de David Silva (Clovin DEV) — Engenheiro de Software Full Stack especializado em Java 21, Spring Boot 3, Next.js, TypeScript e arquitetura Multi-Tenant.",
  icons: {
    icon: "/profile.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="selection:bg-accent selection:text-white min-h-screen flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
