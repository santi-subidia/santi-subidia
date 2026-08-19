import type { Metadata } from "next";
import { Inter, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Santi Subidia — Full-Stack & Creative Frontend Engineer",
  description: "Portfolio and interactive engineering showcase of Santi Subidia. Building high-performance web platforms, reactive distributed systems, and fluid UI experiences.",
  keywords: ["Santi Subidia", "Full-Stack Engineer", "Frontend Engineer", "Next.js", "React", "TypeScript", "Tailwind CSS", "Portfolio"],
  authors: [{ name: "Santi Subidia" }],
  openGraph: {
    title: "Santi Subidia — Full-Stack & Creative Frontend Engineer",
    description: "High-performance web platforms, reactive distributed systems, and fluid UI architectures.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${syne.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="bg-background text-foreground font-sans antialiased min-h-screen relative selection:bg-brand-indigo selection:text-white">
        {/*
THESIS: The portfolio as an interactive physics/generative canvas playground that proves frontend craft instantly instead of standard static card grids.
OWN-WORLD: Obsidian deep space (#0b0d13), slate containers, electric indigo (#6366f1) and cyan (#06b6d4), frosted glass elevation, tactile paper/screen micro-texture.
STORY: Evaluator immediately experiences interactive engineering execution, explores featured live project sandboxes, inspects tech telemetry, and initiates contact effortlessly.
FIRST VIEWPORT: Full-bleed canvas with interactive particle/spring physics, prominent identity statement, live status telemetry badge, quick action buttons, floating project specimen cards.
FORM: Interactive Creative Studio, position 5 of grounded list, seed key aa9bd1f0.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
        */}
        <div dangerouslySetInnerHTML={{ __html: `<!--
THESIS: The portfolio as an interactive physics/generative canvas playground that proves frontend craft instantly instead of standard static card grids.
OWN-WORLD: Obsidian deep space (#0b0d13), slate containers, electric indigo (#6366f1) and cyan (#06b6d4), frosted glass elevation, tactile paper/screen micro-texture.
STORY: Evaluator immediately experiences interactive engineering execution, explores featured live project sandboxes, inspects tech telemetry, and initiates contact effortlessly.
FIRST VIEWPORT: Full-bleed canvas with interactive particle/spring physics, prominent identity statement, live status telemetry badge, quick action buttons, floating project specimen cards.
FORM: Interactive Creative Studio, position 5 of grounded list, seed key aa9bd1f0.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
-->` }} />
        {children}
      </body>
    </html>
  );
}
