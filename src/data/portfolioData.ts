export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "Full-Stack" | "Frontend & Creative" | "AI & Systems" | "Open Source";
  description: string;
  architecture: string[];
  metrics: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  specimenType: "interactive" | "dashboard" | "creative" | "systems";
  demoSnippet?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level: number; // 0 to 100
    category: string;
    highlight?: boolean;
  }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface LabExperiment {
  id: string;
  title: string;
  category: string;
  description: string;
  type: "spring" | "matrix" | "audio" | "shader";
}

export const PORTFOLIO_DATA = {
  developer: {
    name: "Santi Subidia",
    role: "Full-Stack & Creative Frontend Engineer",
    shortBio: "Building high-performance web applications, fluid interactive systems, and resilient digital architectures with meticulous craft.",
    location: "Buenos Aires, Argentina (UTC-3)",
    status: {
      text: "Available for high-impact roles & projects",
      available: true,
      updatedAt: "March 2025",
    },
    socials: {
      github: "https://github.com/santi-subidia",
      linkedin: "https://linkedin.com/in/santi-subidia",
      email: "santisubidia@gmail.com",
      x: "https://x.com/santisubidia",
    },
    stats: [
      { label: "Production Deployments", value: "40+" },
      { label: "Lighthouse Performance", value: "99/100" },
      { label: "Years of Engineering", value: "5+" },
      { label: "Open Source Contributions", value: "150+" },
    ],
  },

  projects: [
    {
      id: "hyper-pulse",
      title: "Pulse Analytics Engine",
      tagline: "Real-time distributed telemetry and streaming visualizer",
      category: "Full-Stack",
      description: "High-throughput telemetry ingestion platform processing real-time metrics with sub-50ms render latency. Features customizable real-time charts, WebSocket streaming, and distributed event aggregation.",
      architecture: [
        "Event-driven WebSockets with backpressure handling",
        "Canvas-based rendering for 60fps data stream visualization",
        "Next.js App Router server components for zero-layout-shift UI",
        "Optimistic UI state updates with rollback guarantees",
      ],
      metrics: ["<45ms p99 latency", "60 FPS rendering @ 10k data points", "99.9% uptime"],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Canvas API", "WebSockets", "Node.js"],
      githubUrl: "https://github.com/santi-subidia/pulse-analytics",
      liveUrl: "https://pulse.santisubidia.dev",
      featured: true,
      specimenType: "interactive",
      demoSnippet: `// Ingestion stream subscriber
const stream = createTelemetryStream({
  bufferSize: 1024,
  fps: 60,
  onFrame: (metrics) => canvasRenderer.draw(metrics)
});`,
    },
    {
      id: "synapse-ai-studio",
      title: "Synapse Canvas & Workflow Studio",
      tagline: "Node-based generative AI workflow orchestrator",
      category: "AI & Systems",
      description: "Interactive infinite-canvas interface for composing, executing, and monitoring multi-agent AI pipelines with real-time token streaming and execution graphs.",
      architecture: [
        "Custom SVG & WebGL hybrid pan/zoom graph engine",
        "Web Workers pipeline execution offloading the main UI thread",
        "Local-first state synchronization with IndexedDB persistence",
        "Streaming token differential rendering with zero lag",
      ],
      metrics: ["Zero UI thread blocking", "Infinite canvas zoom (0.1x to 5x)", "100% offline-first capability"],
      technologies: ["React 19", "TypeScript", "Tailwind CSS", "WebGL", "Web Workers", "IndexedDB"],
      githubUrl: "https://github.com/santi-subidia/synapse-studio",
      liveUrl: "https://synapse.santisubidia.dev",
      featured: true,
      specimenType: "creative",
      demoSnippet: `// Node graph execution engine
const pipeline = new GraphEngine()
  .addNode("PromptAgent", { model: "claude-3-7-sonnet" })
  .pipe("Evaluator", { metric: "coherence" });
await pipeline.executeStreaming();`,
    },
    {
      id: "tactile-ui",
      title: "Tactile Motion & Component System",
      tagline: "Headless, accessible micro-interaction library with spring physics",
      category: "Frontend & Creative",
      description: "A comprehensive UI component and micro-interaction design system emphasizing tactile spring dynamics, spatial audio cues, and strict WCAG AAA accessibility standards.",
      architecture: [
        "Custom RK4 numerical spring physics solver without external heavy dependencies",
        "Automated ARIA keyboard navigation tree management",
        "CSS variable design token engine with zero runtime overhead",
      ],
      metrics: ["<3.2kB gzipped bundle", "WCAG 2.2 AAA certified", "Zero external animation dependencies"],
      technologies: ["TypeScript", "React", "Tailwind CSS", "Web Audio API", "ARIA"],
      githubUrl: "https://github.com/santi-subidia/tactile-ui",
      liveUrl: "https://tactile.santisubidia.dev",
      featured: true,
      specimenType: "interactive",
      demoSnippet: `// RK4 Spring Solver
const spring = createSpring({
  stiffness: 280,
  damping: 24,
  mass: 1.0,
  onUpdate: (v) => target.style.transform = \`scale(\${v})\`
});`,
    },
    {
      id: "hyper-forge-cli",
      title: "Forge Dev Tools & Scaffolder",
      tagline: "Ultra-fast developer CLI and code generation toolkit",
      category: "Open Source",
      description: "A fast, modular CLI tool designed for instant micro-frontend generation, AST transformations, and developer environment benchmarking.",
      architecture: [
        "Rust-compiled binary core with Node.js bindings",
        "Parallel dependency resolution and pre-bundling",
        "Extensible plugin architecture with TypeScript hooks",
      ],
      metrics: ["3.4x faster than standard generators", "12k+ npm downloads", "100% test coverage"],
      technologies: ["TypeScript", "Node.js", "Rust", "ESBuild"],
      githubUrl: "https://github.com/santi-subidia/forge-cli",
      liveUrl: "https://forge.santisubidia.dev",
      featured: false,
      specimenType: "systems",
      demoSnippet: `// CLI AST Transformer
forge.transform({
  target: "./src/**/*.tsx",
  rules: [autoOptimizeImages, injectTelemetry]
});`,
    },
  ] as Project[],

  skills: [
    {
      title: "Core & Frontend Ecosystem",
      iconName: "Layout",
      skills: [
        { name: "TypeScript / JavaScript (ESNext)", level: 96, category: "Core", highlight: true },
        { name: "React 19 / Next.js (App Router)", level: 95, category: "Frontend", highlight: true },
        { name: "Tailwind CSS & Modern CSS", level: 94, category: "Styling", highlight: true },
        { name: "HTML5 Canvas & WebGL", level: 88, category: "Creative", highlight: true },
        { name: "State Architecture (Zustand / Redux / Context)", level: 92, category: "Architecture" },
        { name: "Web Audio API & Micro-Interactions", level: 85, category: "Creative" },
      ],
    },
    {
      title: "Backend & Distributed Systems",
      iconName: "Server",
      skills: [
        { name: "Node.js / Express / Fastify", level: 92, category: "Backend", highlight: true },
        { name: "PostgreSQL / Prisma / Drizzle ORM", level: 90, category: "Database", highlight: true },
        { name: "REST & GraphQL APIs", level: 92, category: "API" },
        { name: "Redis & Distributed Caching", level: 86, category: "Database" },
        { name: "WebSockets & Event-Driven Systems", level: 89, category: "Realtime", highlight: true },
      ],
    },
    {
      title: "Architecture, Tooling & DevOps",
      iconName: "Cpu",
      skills: [
        { name: "Git / GitHub Actions & CI/CD", level: 92, category: "DevOps", highlight: true },
        { name: "Docker & Containerization", level: 86, category: "DevOps" },
        { name: "Vercel / Cloudflare / AWS", level: 88, category: "Cloud" },
        { name: "Vite, Turbopack, ESBuild Tooling", level: 90, category: "Tooling" },
        { name: "Performance Profiling & A11y (WCAG)", level: 94, category: "Quality", highlight: true },
      ],
    },
  ] as SkillCategory[],

  experience: [
    {
      period: "2023 — Present",
      role: "Senior Full-Stack & Frontend Engineer",
      company: "Independent / Creative Tech Advisory",
      location: "Remote",
      description: "Leading the architectural design, frontend development, and interactive experiences for cutting-edge digital products, startups, and high-performance web platforms.",
      achievements: [
        "Architected scalable Next.js and TypeScript applications serving 100k+ monthly active users.",
        "Engineered custom real-time telemetry dashboards reducing time-to-insight by 40%.",
        "Mentored developer teams on modern web performance, design systems, and testing best practices.",
      ],
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Docker"],
    },
    {
      period: "2021 — 2023",
      role: "Full-Stack Engineer",
      company: "Digital Product Labs",
      location: "Buenos Aires, Argentina",
      description: "Engineered responsive, accessible web applications and micro-services across various SaaS verticals.",
      achievements: [
        "Built modular component libraries that accelerated feature delivery across 4 distinct products by 35%.",
        "Refactored legacy REST APIs into optimized WebSocket event streams, cutting server load by 25%.",
        "Achieved consistent 98+ Lighthouse scores across all client production deployments.",
      ],
      technologies: ["React", "TypeScript", "Node.js", "Tailwind CSS", "GraphQL", "Redis"],
    },
    {
      period: "2019 — 2021",
      role: "Frontend Developer",
      company: "Creative Studio",
      location: "Buenos Aires, Argentina",
      description: "Crafted interactive web animations, client landing pages, and custom e-commerce web applications.",
      achievements: [
        "Implemented high-fidelity micro-interactions and smooth page transitions with CSS & Canvas.",
        "Collaborated closely with UX/UI designers to establish component tokens and visual design standards.",
      ],
      technologies: ["JavaScript", "HTML5 Canvas", "CSS3", "React", "Git"],
    },
  ] as ExperienceItem[],

  labExperiments: [
    {
      id: "spring-physics",
      title: "Interactive Spring Solver",
      category: "Physics Engine",
      description: "Real-time RK4 numerical integration with adjustable stiffness, damping, and mass.",
      type: "spring",
    },
    {
      id: "matrix-telemetry",
      title: "Terminal Command Runner",
      category: "Interactive CLI",
      description: "In-browser terminal engine with built-in commands, history, and autocomplete.",
      type: "matrix",
    },
    {
      id: "palette-inspector",
      title: "Design Token Caliper",
      category: "Design Systems",
      description: "Live WCAG contrast calculator and palette contrast simulator.",
      type: "shader",
    },
  ] as LabExperiment[],
};
