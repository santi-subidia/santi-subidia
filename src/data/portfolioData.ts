export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "Full-Stack" | "Backend & APIs" | "Mobile Android" | "Sistemas & Desktop";
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

export interface TechItem {
  name: string;
  category: "Backend & APIs" | "Mobile Android" | "Frontend & Web" | "Bases de Datos & Herramientas";
  iconKey: "csharp" | "dotnet" | "java" | "android" | "nodejs" | "express" | "react" | "nextjs" | "typescript" | "javascript" | "html5" | "css" | "tailwind" | "postgresql" | "mysql" | "sqlite" | "docker" | "git" | "github" | "githubactions" | "code";
  role: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  linkUrl?: string;
  badge?: string;
}

export const PORTFOLIO_DATA = {
  developer: {
    name: "Santiago Subidia",
    role: "Desarrollador de Software | Full-Stack & Mobile",
    shortBio: "Desarrollador de software enfocado en la construcción de sistemas robustos en Backend (.NET, Node.js), aplicaciones móviles nativas (Android) y soluciones web modernas con React y Next.js. Estudiante del último año de la Tecnicatura Universitaria en Desarrollo de Software (ULP).",
    location: "Argentina (UTC-3)",
    status: {
      text: "Disponible para oportunidades laborales & proyectos",
      available: true,
      updatedAt: "Agosto 2026",
    },
    socials: {
      github: "https://github.com/santi-subidia",
      linkedin: "https://www.linkedin.com/in/santiago-subidia-9589b7408/",
      email: "santiagosubidiadev@gmail.com",
      ulp: "https://www.ulp.edu.ar/",
    },
    stats: [
      { label: "Proyectos & Repositorios", value: "10+" },
      { label: "Tecnicatura Universitaria (ULP)", value: "Último Año" },
      { label: "Estado Académico", value: "Último Cuatrimestre" },
      { label: "Especialidades Clave", value: "Backend & Mobile" },
    ],
  },

  projects: [
    {
      id: "app-agenda",
      title: "App Agenda — Barbería",
      tagline: "Sistema a medida de reservación y gestión de turnos con notificaciones en tiempo real",
      category: "Full-Stack",
      description: "Desarrollo Full-Stack a medida para dos hermanos barberos. Cuenta con una landing page personalizada para que los clientes reserven turnos (con restricciones horarias y lógicas de negocio específicas solicitadas por los dueños). Incluye una PWA administrativa completa para visualizar métricas, clientes, gestionar la agenda, y personalizar horarios, servicios y perfiles. Destaca por su integración con el calendario y un bot de Telegram que envía notificaciones inmediatas por cada nuevo turno entrante.",
      architecture: [
        "Landing page personalizada para reserva de turnos con reglas de negocio a medida",
        "PWA administrativa para gestión de agenda, métricas, clientes, horarios y servicios",
        "Integración de notificaciones en tiempo real vía Bot de Telegram para nuevos turnos",
        "Sincronización con calendario para visualización integral de la agenda diaria",
      ],
      metrics: ["Notificaciones por Telegram", "PWA Administrativa", "Desarrollo a medida"],
      technologies: ["TypeScript", "React", "C#", ".NET", "PostgreSQL", "Tailwind CSS", "PWA", "Telegram API"],
      liveUrl: "https://www.qrayabarber.com/",
      featured: true,
      specimenType: "interactive",
      demoSnippet: `// Validación y reserva de turno
public async Task<Turno> ReservarTurnoAsync(TurnoRequest request) {
    var ocupado = await _turnoRepository.VerificarSolapamientoAsync(request.BarberoId, request.FechaHora);
    if (ocupado) {
        throw new InvalidOperationException("El horario seleccionado ya no se encuentra disponible.");
    }
    return await _turnoRepository.CrearAsync(request);
}`,
    },
    {
      id: "sistema-facturacion",
      title: "Sistema de Facturación & Control Comercial",
      tagline: "Sistema Desktop 100% instalable y a medida para gestión comercial integral",
      category: "Sistemas & Desktop",
      description: "Sistema Desktop a medida desarrollado para un cliente, diseñado para correr íntegramente en su PC local y evitar costos de alojamiento. Permite el control exhaustivo de inventario y clientes, emisión de comprobantes y facturas electrónicas C. Empaquetado como aplicación de escritorio con actualizaciones automáticas a través de GitHub Releases. (Nota para probar: requiere certificado digital .pfx / .p12 de ARCA/AFIP en entorno de homologación o producción).",
      architecture: [
        "Backend desarrollado en .NET y Frontend en React, empaquetados como aplicación Desktop con Electron",
        "Base de datos local en SQLite para funcionamiento 100% offline y sin costos de alojamiento",
        "Módulo de facturación a medida para emisión de comprobantes, facturas y notas de crédito C",
        "Manejo de certificados de seguridad y sistema de actualizaciones automáticas integrado",
      ],
      metrics: ["100% Offline e Instalable", "Backend .NET + React + Electron", "Actualizaciones automáticas"],
      technologies: [".NET", "React", "Electron", "SQLite", "Certificados SSL", "Auto-Updater"],
      githubUrl: "https://github.com/santi-subidia/sistema-facturacion-releases",
      featured: true,
      specimenType: "systems",
      demoSnippet: `// Cálculo de totales y emisión de factura
public Factura GenerarFactura(Cliente cliente, List<DetalleVenta> items, decimal tasaIva) {
    decimal subtotal = items.Sum(i => i.Cantidad * i.PrecioUnitario);
    decimal montoIva = subtotal * (tasaIva / 100m);
    return new Factura {
        Cliente = cliente,
        Subtotal = subtotal,
        Iva = montoIva,
        Total = subtotal + montoIva
    };
}`,
    },
    {
      id: "app-gastronomia",
      title: "App Gastronómica (.NET + Android Nativo)",
      tagline: "App nativa en Android con backend .NET y comunicación bidireccional vía SignalR",
      category: "Mobile Android",
      description: "Sistema desarrollado con fines educativos para dominar el ecosistema de Android Nativo y la comunicación en tiempo real. Consiste en una aplicación móvil nativa para la gestión gastronómica conectada a un backend en .NET, destacando el uso de WebSockets con SignalR para actualizaciones instantáneas de pedidos y estados.",
      architecture: [
        "Aplicación móvil nativa en Android, profundizando en el aprendizaje del ecosistema completo móvil",
        "Backend en .NET encargado de la lógica de negocio y persistencia de datos",
        "Comunicación en tiempo real de doble vía implementada con WebSockets a través de SignalR",
        "Sincronización instantánea de estados de pedidos y mesas entre múltiples dispositivos",
      ],
      metrics: ["Android Nativo", "WebSockets con SignalR", "Proyecto Educativo"],
      technologies: ["C#", ".NET", "Android (Java)", "SignalR", "WebSockets", "Docker"],
      githubUrl: "https://github.com/santi-subidia/app-gastronomia",
      featured: true,
      specimenType: "systems",
      demoSnippet: `// Controller de Pedidos en C# ASP.NET Core (Clean Architecture)
[HttpPost]
public async Task<ActionResult<PedidoDto>> CrearPedido([FromBody] RegistrarPedidoDto request) {
    var pedido = await _pedidoService.RegistrarPedidoAsync(request);
    return CreatedAtAction(nameof(ObtenerPorId), new { id = pedido.Id }, pedido);
}`,
    },
    {
      id: "his-hospital-system",
      title: "HIS — Hospital Information System",
      tagline: "Sistema hospitalario full stack con gestión avanzada de pacientes e internaciones",
      category: "Full-Stack",
      description: "Sistema Full-Stack con fines educativos diseñado para manejar internaciones hospitalarias. Incluye gestión de camas con restricciones de habitación, control evolutivo durante la internación y alta médica detallada (registrando cada procedimiento realizado). Soporta el ingreso de pacientes NN (sin datos iniciales), permitiendo su posterior vinculación a un historial médico nuevo o existente una vez identificados.",
      architecture: [
        "Gestión compleja de internaciones con control de disponibilidad de camas y restricciones por tipo de habitación",
        "Soporte para pacientes NN en emergencias y flujo de conciliación de identidad con historiales médicos",
        "Registro clínico detallado que consolida todo procedimiento realizado durante la estadía para el alta",
        "Arquitectura MVC en Node.js con base de datos relacional y validación estricta",
      ],
      metrics: ["Flujo de pacientes NN", "Gestión de camas y restricciones", "Proyecto Educativo"],
      technologies: ["Node.js", "Express 5", "Sequelize ORM", "MySQL", "Pug", "Zod", "bcrypt"],
      githubUrl: "https://github.com/santi-subidia/HIS",
      featured: true,
      specimenType: "interactive",
      demoSnippet: `// Validación y registro de internación con Zod & Sequelize
const internacionSchema = z.object({
  pacienteId: z.number().int().positive(),
  habitacionId: z.number().int().positive(),
  motivoIngreso: z.string().min(5, "Motivo requerido con mínimo 5 caracteres"),
  medicoTratanteId: z.number().int().positive()
});`,
    },
    {
      id: "inmobiliaria-sistema",
      title: "Ecosistema Inmobiliario (API .NET & App Móvil)",
      tagline: "Desarrollo en dos etapas: API backend con reglas de negocio y App Android para consumo",
      category: "Full-Stack",
      description: "Proyecto educativo dividido en dos repositorios con consignas narrativas distintas. En la primera etapa se desarrolló una API robusta en .NET con condiciones complejas para inmuebles, propietarios y contratos. En la segunda etapa, bajo una narrativa similar, el enfoque fue construir una interfaz móvil nativa en Android diseñada exclusivamente para consumir dicha API.",
      architecture: [
        "API en .NET que implementa reglas de negocio complejas para entidades inmobiliarias y contratos",
        "Aplicación móvil Android enfocada en el diseño de interfaz y consumo asíncrono de la API REST",
        "Separación arquitectónica y conceptual en dos repositorios para fines educativos escalonados",
      ],
      metrics: ["API REST .NET", "Consumo en Android Nativo", "Proyecto Educativo (2 Fases)"],
      technologies: ["C#", ".NET Core API", "Android (Java)", "MySQL", "REST APIs"],
      githubUrl: "https://github.com/santi-subidia/inmobiliaria-tp-moviles",
      featured: false,
      specimenType: "interactive",
      demoSnippet: `// Repositorio de Contratos de Alquiler en C#
public async Task<IEnumerable<Contrato>> ObtenerContratosVigentesAsync() {
    using var connection = GetConnection();
    return await connection.QueryAsync<Contrato>(
        "SELECT * FROM Contratos WHERE FechaFin >= CURRENT_DATE AND Estado = 'Activo'");
}`,
    },
    {
      id: "dreamcaps-landing-page",
      title: "DreamCaps — Landing Page Personal",
      tagline: "Landing page interactiva desarrollada para poner en práctica y perfeccionar habilidades de Frontend",
      category: "Full-Stack",
      description: "Landing page personal creada específicamente para poner en práctica y elevar el nivel en desarrollo frontend. Implementa un catálogo interactivo de productos con microinteracciones avanzadas, renderizado de alto rendimiento y un diseño altamente enfocado en UI/UX y conversión directa.",
      architecture: [
        "Desarrollado con Next.js (App Router), TypeScript y Tailwind CSS para máxima performance",
        "Enfoque en mejora de habilidades frontend: animaciones, UI responsiva y experiencia de usuario",
        "Integración con API de WhatsApp para flujo de contacto y conversión directa",
        "Efectos visuales interactivos y optimización SEO con metadatos estructurados",
      ],
      metrics: ["Práctica Frontend Avanzada", "UI/UX & Microinteracciones", "100% Responsive"],
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "WhatsApp API"],
      githubUrl: "https://github.com/santi-subidia/dreamcaps-landing-page",
      liveUrl: "https://dreamcaps-landing-page.vercel.app",
      featured: true,
      specimenType: "creative",
      demoSnippet: `// Generación dinámica de enlace de conversión a WhatsApp
export function createWhatsAppInquiryLink(productName: string, phone = "542664172006") {
  const text = encodeURIComponent(\`¡Hola! Me interesa la \${productName}. ¿Está disponible?\`);
  return \`https://wa.me/\${phone}?text=\${text}\`;
}`,
    },
  ] as Project[],

  technologies: [
    // Backend & APIs
    { name: "C#", category: "Backend & APIs", iconKey: "csharp", role: "Lenguaje Backend / POO" },
    { name: ".NET / ASP.NET Core", category: "Backend & APIs", iconKey: "dotnet", role: "Framework Web & APIs" },
    { name: "Node.js", category: "Backend & APIs", iconKey: "nodejs", role: "Runtime Backend JavaScript" },
    { name: "Express.js", category: "Backend & APIs", iconKey: "express", role: "Framework HTTP & REST APIs" },
    { name: "Docker", category: "Backend & APIs", iconKey: "docker", role: "Contenedores & Despliegue" },

    // Mobile Android
    { name: "Android Nativo", category: "Mobile Android", iconKey: "android", role: "Desarrollo Móvil Android SDK" },
    { name: "Java", category: "Mobile Android", iconKey: "java", role: "Lenguaje Android & POO" },

    // Frontend & Web
    { name: "React", category: "Frontend & Web", iconKey: "react", role: "Librería UI Reactiva" },
    { name: "Next.js", category: "Frontend & Web", iconKey: "nextjs", role: "Framework React & SSR" },
    { name: "TypeScript", category: "Frontend & Web", iconKey: "typescript", role: "Tipado Estático para JS" },
    { name: "JavaScript", category: "Frontend & Web", iconKey: "javascript", role: "Lenguaje Web (ES6+)" },
    { name: "HTML5", category: "Frontend & Web", iconKey: "html5", role: "Estructura Semántica Web" },
    { name: "CSS3", category: "Frontend & Web", iconKey: "css", role: "Estilos & Diseño Responsive" },
    { name: "Tailwind CSS", category: "Frontend & Web", iconKey: "tailwind", role: "Diseño & Estilos Modernos" },

    // Bases de Datos & Herramientas
    { name: "PostgreSQL", category: "Bases de Datos & Herramientas", iconKey: "postgresql", role: "Base de Datos Relacional Avanzada" },
    { name: "MySQL", category: "Bases de Datos & Herramientas", iconKey: "mysql", role: "Base de Datos Relacional" },
    { name: "SQLite", category: "Bases de Datos & Herramientas", iconKey: "sqlite", role: "Base de Datos Embebida / Local" },
    { name: "Git", category: "Bases de Datos & Herramientas", iconKey: "git", role: "Control de Versiones" },
    { name: "GitHub", category: "Bases de Datos & Herramientas", iconKey: "github", role: "Repositorios & Colaboración" },
    { name: "GitHub Actions", category: "Bases de Datos & Herramientas", iconKey: "githubactions", role: "Automatización & CI/CD" },
  ] as TechItem[],

  experience: [
    {
      period: "2024 — Presente (Último Año)",
      role: "Tecnicatura Universitaria en Desarrollo de Software",
      company: "Universidad de La Punta (ULP)",
      location: "San Luis, Argentina",
      linkUrl: "https://www.ulp.edu.ar/",
      badge: "Formación Universitaria",
      description: "Estudiante del 3er y último año de la carrera. 100% de las asignaturas teóricas y técnicas del plan de estudios aprobadas con éxito; actualmente culminando la carrera con el cursado de la Práctica Profesional Laboral.",
      achievements: [
        "100% de asignaturas teóricas y técnicas del plan de estudios aprobadas con éxito.",
        "Formación sólida en programación orientada a objetos, bases de datos relacionales, metodologías ágiles y arquitectura de software.",
        "Desarrollo de proyectos integradores y software de gestión en C# (.NET), Java (Android) y Node.js.",
        "Cursando la Práctica Profesional Laboral (última materia curricular del plan).",
      ],
      technologies: ["C#", ".NET Core", "Java (Android)", "Node.js", "PostgreSQL", "MySQL", "POO", "Metodologías Ágiles"],
    },
  ] as ExperienceItem[],
};
