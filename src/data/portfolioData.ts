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
  type?: "university" | "certification";
  hours?: string;
  instructor?: string;
  credentialId?: string;
  certificateImage?: string;
}

export const PORTFOLIO_DATA = {
  developer: {
    name: "Santiago Subidia",
    role: "Desarrollador de Software",
    subRole: "Full-Stack & Mobile Developer",
    shortBio: "Especializado en la construcción de arquitecturas backend robustas (.NET, Node.js), aplicaciones móviles nativas de alto rendimiento (Android) e interfaces web reactivas con GSAP, TypeScript y Next.js. Estudiante del último año de la Tecnicatura Universitaria en Desarrollo de Software (ULP).",
    location: "San Luis, Argentina (UTC-3)",
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
      { label: "Proyectos Destacados", value: "6+" },
      { label: "Universidad de La Punta", value: "Último Año" },
      { label: "Certificaciones", value: ".NET & IA (Udemy)" },
      { label: "Core Stacks", value: ".NET • Android • TS" },
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
      metrics: ["Notificaciones Telegram en vivo", "PWA Administrativa", "Desarrollo a medida"],
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
      metrics: ["Android Nativo (Java)", "WebSockets con SignalR", "Ecosistema Móvil"],
      technologies: ["C#", ".NET", "Android (Java)", "SignalR", "WebSockets", "Docker"],
      githubUrl: "https://github.com/santi-subidia/app-gastronomia",
      featured: true,
      specimenType: "systems",
      demoSnippet: `// Controller de Pedidos en C# ASP.NET Core
[HttpPost]
public async Task<ActionResult<PedidoDto>> CrearPedido([FromBody] RegistrarPedidoDto request) {
    var pedido = await _pedidoService.RegistrarPedidoAsync(request);
    await _hubContext.Clients.All.SendAsync("NuevoPedidoRecibido", pedido);
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
      metrics: ["Flujo de pacientes NN", "Gestión de camas y restricciones", "Express 5 + Sequelize"],
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
      title: "Ecosistema Inmobiliario (.NET API & Android)",
      tagline: "Arquitectura en dos etapas: API backend RESTful y cliente móvil nativo en Android",
      category: "Full-Stack",
      description: "Proyecto educativo dividido en dos repositorios con consignas de negocio escalonadas. En la primera etapa se desarrolló una API robusta en .NET con condiciones complejas para inmuebles, propietarios y contratos de locación. En la segunda etapa, el enfoque fue construir una interfaz móvil nativa en Android diseñada para consumir dicha API asíncronamente.",
      architecture: [
        "API en .NET que implementa reglas de negocio complejas para entidades inmobiliarias y contratos",
        "Aplicación móvil Android enfocada en el diseño de interfaz y consumo asíncrono de la API REST",
        "Separación arquitectónica y conceptual en dos repositorios para fines educativos escalonados",
      ],
      metrics: ["API REST .NET", "Consumo en Android Nativo", "Proyecto Integral 2 Fases"],
      technologies: ["C#", ".NET Core API", "Android (Java)", "MySQL", "REST APIs"],
      githubUrl: "https://github.com/santi-subidia/inmobiliaria-tp-moviles",
      featured: true,
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
      title: "DreamCaps — Showcase Frontend",
      tagline: "Landing page interactiva desarrollada para perfeccionar microinteracciones y UI moderna",
      category: "Full-Stack",
      description: "Landing page personal creada para elevar el nivel en desarrollo frontend. Implementa un catálogo interactivo de productos con microinteracciones, renderizado ultra rápido y flujo directo de conversión a WhatsApp.",
      architecture: [
        "Desarrollado con Next.js (App Router), TypeScript y Tailwind CSS para máxima performance",
        "Enfoque en mejora de habilidades frontend: animaciones, UI responsiva y experiencia de usuario",
        "Integración con API de WhatsApp para flujo de contacto y conversión directa",
        "Efectos visuales interactivos y optimización SEO con metadatos estructurados",
      ],
      metrics: ["Práctica Frontend Avanzada", "UI/UX Microinteracciones", "100% Responsive"],
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
    { name: "C#", category: "Backend & APIs", role: "Lenguaje Backend / POO" },
    { name: ".NET / ASP.NET Core", category: "Backend & APIs", role: "Framework Web & APIs" },
    { name: "Node.js", category: "Backend & APIs", role: "Runtime Backend JS" },
    { name: "Express.js", category: "Backend & APIs", role: "Framework HTTP & REST" },
    { name: "Docker", category: "Backend & APIs", role: "Contenedores & Despliegue" },

    { name: "Android Nativo", category: "Mobile Android", role: "Desarrollo Móvil Android SDK" },
    { name: "Java", category: "Mobile Android", role: "Lenguaje Android & POO" },

    { name: "TypeScript", category: "Frontend & Web", role: "Tipado Estático para JS" },
    { name: "GSAP & ScrollTrigger", category: "Frontend & Web", role: "Animaciones & Motion" },
    { name: "Lenis", category: "Frontend & Web", role: "Smooth Scroll Engine" },
    { name: "React", category: "Frontend & Web", role: "Librería UI Reactiva" },
    { name: "Next.js", category: "Frontend & Web", role: "Framework React & SSR" },
    { name: "Tailwind CSS", category: "Frontend & Web", role: "Diseño & Estilos Modernos" },

    { name: "PostgreSQL", category: "Bases de Datos & Herramientas", role: "Base de Datos Relacional" },
    { name: "MySQL", category: "Bases de Datos & Herramientas", role: "Base de Datos Relacional" },
    { name: "SQLite", category: "Bases de Datos & Herramientas", role: "Base de Datos Embebida / Local" },
    { name: "n8n", category: "Bases de Datos & Herramientas", role: "Automatización & Agentes IA" },
    { name: "Git & GitHub", category: "Bases de Datos & Herramientas", role: "Control de Versiones & CI/CD" },
    { name: "GitHub Actions", category: "Bases de Datos & Herramientas", role: "Automatización & CI/CD" },
  ] as TechItem[],

  experience: [
    {
      type: "university",
      period: "2024 — Presente (Último Año)",
      role: "Tecnicatura Universitaria en Desarrollo de Software",
      company: "Universidad de La Punta (ULP)",
      location: "San Luis, Argentina",
      linkUrl: "https://www.ulp.edu.ar/",
      badge: "Formación Universitaria Oficial",
      description: "Estudiante del 3er y último año de la carrera. 100% de las asignaturas teóricas y técnicas del plan de estudios aprobadas con éxito; actualmente culminando la carrera con el cursado de la Práctica Profesional Laboral.",
      achievements: [
        "100% de asignaturas teóricas y técnicas del plan de estudios aprobadas con éxito.",
        "Formación sólida en programación orientada a objetos, bases de datos relacionales, metodologías ágiles y arquitectura de software.",
        "Desarrollo de proyectos integradores y software de gestión en C# (.NET), Java (Android) y Node.js.",
        "Cursando la Práctica Profesional Laboral (última materia curricular del plan).",
      ],
      technologies: ["C#", ".NET Core", "Java (Android)", "Node.js", "PostgreSQL", "MySQL", "POO", "Metodologías Ágiles"],
    },
    {
      type: "certification",
      period: "26 de Agosto de 2026",
      role: "Construyendo Web APIs RESTful con ASP.NET Core 9",
      company: "Udemy",
      instructor: "Felipe Gavilán",
      location: "Certificación Verificada Online",
      linkUrl: "https://www.udemy.com/certificate/UC-6c4f1f00-174e-44c5-aba8-66badbdf6ed7/",
      badge: "Certificación Oficial • 27 Horas",
      hours: "27 horas en total",
      credentialId: "UC-6c4f1f00-174e-44c5-aba8-66badbdf6ed7",
      certificateImage: "/certificates/cert-aspnet-core.jpg",
      description: "Especialización avanzada en el diseño, desarrollo, securización y despliegue de Web APIs RESTful empresariales de alto rendimiento con C# y ASP.NET Core 9, aplicando Clean Architecture, Entity Framework Core y estándares de la industria.",
      achievements: [
        "Construcción y diseño de Web APIs RESTful modernas, mantenibles y desacopladas en ASP.NET Core 9.",
        "Persistencia relacional avanzada con Entity Framework Core, migraciones complejas, DbContext y consultas LINQ optimizadas.",
        "Seguridad robusta y control de acceso basado en roles y claims mediante JSON Web Tokens (JWT) y ASP.NET Core Identity.",
        "Manejo centralizado de excepciones, validaciones estrictas, DTOs, paginación, filtros de acción y documentación interactiva con Swagger / OpenAPI.",
      ],
      technologies: ["C#", ".NET 9", "ASP.NET Core", "Entity Framework Core", "JWT", "RESTful APIs", "Swagger", "PostgreSQL / SQL Server"],
    },
    {
      type: "certification",
      period: "9 de Abril de 2026",
      role: "n8n + MCP: Automatización y agentes de IA inteligentes",
      company: "Udemy",
      instructor: "Fernando Herrera, {d/t} - DevTalles",
      location: "Certificación Verificada Online",
      linkUrl: "https://www.udemy.com/certificate/UC-7146e018-d67e-4c37-9c60-eb26ef6f615c/",
      badge: "Certificación Oficial • 18 Horas",
      hours: "18 horas en total",
      credentialId: "UC-7146e018-d67e-4c37-9c60-eb26ef6f615c",
      certificateImage: "/certificates/cert-n8n-mcp.jpg",
      description: "Formación especializada en la orquestación de flujos de trabajo automatizados con n8n y la integración del protocolo MCP (Model Context Protocol) para construir agentes inteligentes con Modelos de Lenguaje (LLMs) y capacidades de ejecución autónoma de acciones.",
      achievements: [
        "Orquestación de pipelines de automatización complejos, webhooks bidireccionales y automatización de procesos con n8n.",
        "Implementación y configuración del protocolo MCP (Model Context Protocol) para interconectar LLMs con herramientas del sistema y APIs externas.",
        "Desarrollo de agentes de IA autónomos con memoria conversacional persistente, toma de decisiones y ejecución de funciones (Tool / Function Calling).",
        "Integración de agentes inteligentes con servicios en la nube, APIs REST, bases de datos vectoriales y plataformas de mensajería.",
      ],
      technologies: ["n8n", "MCP Protocol", "Agentes de IA", "LLMs", "Automatización", "Webhooks", "Function Calling", "APIs REST"],
    },
  ] as ExperienceItem[],
};
