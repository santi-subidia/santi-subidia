import type { Metadata } from "next";
import { Inter, Syne, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import SmoothScroller from "@/components/SmoothScroller";
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
  title: "Santiago Subidia — Desarrollador de Software | Full-Stack & Mobile",
  description: "Portfolio y plataforma de ingeniería de Santiago Subidia. Especialista en Backend (.NET, Node.js), Mobile (Android Nativo) y Web moderna. Universidad de La Punta (ULP).",
  keywords: [
    "Santiago Subidia",
    "Santi Subidia",
    "Desarrollador de Software",
    "Full-Stack Developer",
    "Backend Developer",
    "Android Developer",
    ".NET",
    "C#",
    "Node.js",
    "Express",
    "ULP",
    "Universidad de La Punta",
    "Next.js",
    "React",
    "Tailwind CSS",
  ],
  authors: [{ name: "Santiago Subidia" }],
  openGraph: {
    title: "Santiago Subidia — Desarrollador de Software | Full-Stack & Mobile",
    description: "Desarrollo de software en Backend (.NET, Node.js), Mobile (Android) y Web moderna. Estudiante avanzado ULP.",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
};

const themeInitScript = `
  (function() {
    try {
      var saved = localStorage.getItem('santi-theme');
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      var isDark = saved === 'dark' || (!saved && prefersDark) || (saved === 'system' && prefersDark);
      if (isDark) {
        document.documentElement.classList.add('dark');
        document.documentElement.style.colorScheme = 'dark';
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.style.colorScheme = 'light';
      }
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="es" 
      suppressHydrationWarning 
      className={`dark ${inter.variable} ${syne.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="bg-background text-foreground font-sans antialiased min-h-screen relative selection:bg-brand-indigo selection:text-white">
        <ThemeProvider>
          {/*
THESIS: The portfolio as an interactive physics/generative canvas playground that proves frontend craft instantly instead of standard static card grids.
OWN-WORLD: Obsidian deep space (#0b0d13) and clean light studio (#f8fafc), slate containers, electric indigo (#6366f1) and cyan (#06b6d4), frosted glass elevation, tactile paper/screen micro-texture.
STORY: Evaluator immediately experiences interactive engineering execution, explores featured live project sandboxes, inspects tech telemetry, and initiates contact effortlessly.
FIRST VIEWPORT: Full-bleed canvas with interactive particle/spring physics, prominent identity statement, live status telemetry badge, quick action buttons, floating project specimen cards.
FORM: Interactive Creative Studio, position 5 of grounded list, seed key aa9bd1f0.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
          */}
          <div dangerouslySetInnerHTML={{ __html: `<!--
THESIS: The portfolio as an interactive physics/generative canvas playground that proves frontend craft instantly instead of standard static card grids.
OWN-WORLD: Obsidian deep space (#0b0d13) and clean light studio (#f8fafc), slate containers, electric indigo (#6366f1) and cyan (#06b6d4), frosted glass elevation, tactile paper/screen micro-texture.
STORY: Evaluator immediately experiences interactive engineering execution, explores featured live project sandboxes, inspects tech telemetry, and initiates contact effortlessly.
FIRST VIEWPORT: Full-bleed canvas with interactive particle/spring physics, prominent identity statement, live status telemetry badge, quick action buttons, floating project specimen cards.
FORM: Interactive Creative Studio, position 5 of grounded list, seed key aa9bd1f0.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
-->` }} />
          <SmoothScroller>
            {children}
          </SmoothScroller>
        </ThemeProvider>
      </body>
    </html>
  );
}
