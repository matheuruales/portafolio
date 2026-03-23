import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Briefcase,
  FolderKanban,
  GraduationCap,
  Heart,
  Languages,
  Mail,
  Phone,
  Linkedin,
  Wrench,
  UserRound,
  Sparkles,
} from "lucide-react";

type WorkReference = {
  name: string;
  role: string;
  phone: string;
  email?: string;
};

type PersonalReference = {
  name: string;
  phone: string;
};

const TECH_SKILLS = {
  "Lenguajes de programación": ["Python", "Java", "JavaScript", "TypeScript", "C#"],
  "Frameworks y librerías": [
    "React",
    "React 18 + React DOM",
    "Next.js",
    "Vite",
    "FastAPI",
    "Django",
    "Spring Boot",
    "Unity",
    "Chart.js",
    "Firebase",
    "Tailwind CSS",
    "PostCSS + Autoprefixer",
  ],
  "Bases de datos": ["PostgreSQL", "MongoDB", "Supabase", "Firebase"],
  "Inteligencia artificial y automatización": ["LangGraph", "OpenAI API", "n8n"],
  "APIs e integraciones": ["REST APIs", "WhatsApp API", "TikTok API", "Wompi"],
  "Control de versiones": ["Git", "GitHub"],
  "Desarrollo web": [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Tailwind CSS",
  ],
  "Análisis de datos": [
    "Python con Pandas y NumPy",
    "Jupyter Notebook",
    "scikit-learn",
    "Matplotlib",
  ],
  "Herramientas de gestión de proyectos": ["GitHub Projects", "GitLab Issues"],
  "Plataformas y herramientas": [
    "Unity",
    "Meta Quest Dev Kit",
    "Firebase",
    "Azure",
    "Azure Blob Storage",
    "Railway",
    "Vercel",
    "Docker",
    "Java 21 + Maven",
    "Spring Boot 3.5.6",
  ],
  Modelado: ["Blender"],
  "Hardware y tecnologías complementarias": [
    "Leap Motion",
    "ML Kit",
    "Oculus Rift",
    "Meta Quest 3",
    "ESP32",
  ],
} as const;

const SOFT_SKILLS = [
  "Trabajo en equipo colaborativo en proyectos",
  "Adaptación rápida a nuevas tecnologías y entornos de trabajo",
  "Resolución de problemas técnicos de forma autónoma",
  "Responsabilidad y compromiso con los objetivos del proyecto",
  "Proactividad para proponer soluciones e implementar mejoras",
];

const EDUCATION = [
  {
    title: "Ingeniería de Software",
    institution: "Universidad Cooperativa de Colombia",
    note: "Terminado cuarto semestre.",
  },
  {
    title: "Bachillerato Académico",
    institution: "Institución Educativa Municipio de Mallama",
  },
  {
    title: "Técnico laboral por competencias en sistemas informáticos",
    institution: "Idetec de Nariño",
  },
  {
    title: "Auxiliar operador en sistemas informáticos",
    institution: "Idetec de Nariño",
  },
  {
    title: "Diplomado en herramientas web 2.0 y redes informáticas",
    institution: "Idetec de Nariño",
  },
];

const LANGUAGES = ["Español: lengua materna", "Inglés: medio (B2)"];

const INTERESTS = ["Desarrollo de software", "Videojuegos", "Entrenamiento en gimnasio"];

const WORK_REFERENCES: WorkReference[] = [
  {
    name: "Luis Carlos Revelo Tovar",
    role: "Director de Ingeniería de Software UCC",
    phone: "3155904324",
    email: "luis.revelot@campusucc.edu.co",
  },
  {
    name: "Daniel Fernando Arteaga Fajardo",
    role: "Encargado de proyecto de realidad mixta",
    phone: "3016889827",
    email: "daniel.arteagafajar@campusucc.edu.co",
  },
  {
    name: "Oscar Andrés Osorio",
    role: "Docente programa Ingeniería de Software",
    phone: "3147170398",
  },
];

const PERSONAL_REFERENCES: PersonalReference[] = [
  { name: "Juan Carlos Reyes Guerrero", phone: "3015267740" },
  { name: "Alejandro España Meza", phone: "3154613867" },
];

const SectionTitle = ({
  icon,
  title,
}: {
  icon: JSX.Element;
  title: string;
}) => (
  <div className="flex items-center gap-3">
    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 dark:border-white/20 bg-white/70 dark:bg-black/30">
      {icon}
    </span>
    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
      {title}
    </h2>
  </div>
);

export default function HojaDeVidaPage() {
  return (
    <main className="relative isolate min-h-screen px-4 md:px-10 pt-28 pb-16">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#020617]">
        <Image
          src="/assets/nyan-cat.gif"
          alt=""
          fill
          unoptimized
          priority
          sizes="100vw"
          className="object-contain object-top md:object-cover md:object-center opacity-[0.24] md:opacity-[0.38]"
        />
      </div>
      <div className="pointer-events-none fixed inset-0 z-[1]">
        <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/45 to-white/35 dark:from-black/35 dark:via-black/45 dark:to-black/35" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl space-y-8">
        <section className="relative overflow-hidden rounded-3xl border border-black/10 dark:border-white/15 bg-white/85 dark:bg-zinc-950/70 backdrop-blur-xl p-6 md:p-10 shadow-2xl shadow-black/10 dark:shadow-black/40">
          <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-violet-500/15 blur-3xl" />

          <div className="relative">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="inline-flex items-center rounded-full border border-black/10 dark:border-white/20 bg-white/75 dark:bg-black/30 px-3 py-1 text-xs md:text-sm uppercase tracking-[0.2em] text-zinc-700 dark:text-zinc-300">
                  Hoja de vida
                </p>
                <h1 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight text-zinc-900 dark:text-zinc-100">
                  JOHNATAN MATHEU RUALES GALVIS
                </h1>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-xs md:text-sm text-emerald-900 dark:text-emerald-100">
                  <Sparkles className="h-4 w-4" /> En búsqueda de nuevos retos
                </span>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="rounded-xl border border-black/10 dark:border-white/15 bg-white/70 dark:bg-black/25 p-4">
                <p className="text-xs uppercase tracking-wide text-zinc-600 dark:text-zinc-400">Correo</p>
                <p className="mt-1 text-sm md:text-base font-medium break-all text-zinc-900 dark:text-zinc-100">
                  matheuruales2b2t@gmail.com
                </p>
              </div>
              <div className="rounded-xl border border-black/10 dark:border-white/15 bg-white/70 dark:bg-black/25 p-4">
                <p className="text-xs uppercase tracking-wide text-zinc-600 dark:text-zinc-400">Teléfono</p>
                <p className="mt-1 text-sm md:text-base font-medium text-zinc-900 dark:text-zinc-100">
                  +57 314 624 9791
                </p>
              </div>
              <div className="rounded-xl border border-black/10 dark:border-white/15 bg-white/70 dark:bg-black/25 p-4">
                <p className="text-xs uppercase tracking-wide text-zinc-600 dark:text-zinc-400">LinkedIn</p>
                <p className="mt-1 text-sm md:text-base font-medium break-all text-zinc-900 dark:text-zinc-100">
                  linkedin.com/in/matheu-ruales-32221a331
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <Button
                asChild
                size="sm"
                className="rounded-full bg-cyan-600 hover:bg-cyan-700 text-white px-5"
              >
                <a href="mailto:matheuruales2b2t@gmail.com">
                  <Mail className="h-4 w-4 mr-2" />
                  Enviar correo
                </a>
              </Button>
              <Button asChild size="sm" variant="outline" className="rounded-full px-5">
                <a href="tel:+573146249791">
                  <Phone className="h-4 w-4 mr-2" />
                  Llamar
                </a>
              </Button>
              <Button asChild size="sm" variant="secondary" className="rounded-full px-5">
                <a
                  href="https://www.linkedin.com/in/matheu-ruales-32221a331/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  Ver LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-black/10 dark:border-white/15 bg-white/85 dark:bg-zinc-950/70 backdrop-blur-xl p-6 md:p-10 shadow-xl shadow-black/10 dark:shadow-black/35">
          <SectionTitle icon={<UserRound className="h-5 w-5" />} title="Perfil profesional" />
          <p className="mt-5 text-sm md:text-base leading-8 text-zinc-800 dark:text-zinc-200">
            Estudiante de Ingeniería de Software con experiencia en desarrollo de aplicaciones web, automatización de procesos, inteligencia artificial y tecnologías inmersivas. Me caracterizo por aprender rápido, adaptarme con facilidad a nuevas herramientas y aportar soluciones prácticas a problemas reales. He participado en proyectos académicos, hackatones y desarrollos tecnológicos enfocados en software, agentes de IA, gestión de datos, simuladores XR y automatización de flujos de trabajo. Tengo habilidades para el trabajo en equipo, la comunicación asertiva, la resolución de problemas y el desarrollo de soluciones con enfoque técnico, funcional y escalable.
          </p>
        </section>

        <section className="rounded-3xl border border-black/10 dark:border-white/15 bg-white/85 dark:bg-zinc-950/70 backdrop-blur-xl p-6 md:p-10 shadow-xl shadow-black/10 dark:shadow-black/35">
          <SectionTitle icon={<Briefcase className="h-5 w-5" />} title="Experiencia laboral" />
          <article className="mt-6 rounded-2xl border border-black/10 dark:border-white/15 bg-white/65 dark:bg-black/25 p-5 md:p-6">
            <p className="text-lg md:text-xl font-semibold">AI Engineer / Full Stack Developer</p>
            <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Depxus IA y 30X</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">2025 - Actualidad</p>
            <p className="mt-4 text-sm md:text-base leading-8 text-zinc-800 dark:text-zinc-200">
              Actualmente me desempeño como AI Engineer y Full Stack Developer en Depxus IA y 30X, participando en el diseño, desarrollo e implementación de soluciones basadas en inteligencia artificial, automatización y desarrollo de software tanto en frontend como en backend. Mi trabajo se enfoca en la construcción de agentes de IA, integración de herramientas, automatización de flujos y desarrollo de plataformas tecnológicas escalables orientadas a resolver necesidades reales de negocio.
            </p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400"></p>
          </article>
          <article className="mt-6 rounded-2xl border border-black/10 dark:border-white/15 bg-white/65 dark:bg-black/25 p-5 md:p-6">
            <p className="text-lg md:text-xl font-semibold">Monitor académico y desarrollador</p>
            <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Universidad Cooperativa de Colombia</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Febrero 2025 – Agosto 2025</p>
            <p className="mt-4 text-sm md:text-base leading-8 text-zinc-800 dark:text-zinc-200">
              Me desempeñé como monitor académico en la Universidad Cooperativa de Colombia, apoyando actividades institucionales y tecnológicas relacionadas con la organización de eventos, la gestión operativa y el desarrollo de soluciones digitales para la universidad. Dentro de mis funciones, participé en el apoyo logístico y técnico de eventos académicos, así como en el desarrollo de una plataforma de asistencias que permitió optimizar el registro y control de participación de los asistentes.
            </p>
          </article>
        </section>

        <section className="rounded-3xl border border-black/10 dark:border-white/15 bg-white/85 dark:bg-zinc-950/70 backdrop-blur-xl p-6 md:p-10 shadow-xl shadow-black/10 dark:shadow-black/35">
          <SectionTitle icon={<FolderKanban className="h-5 w-5" />} title="Experiencia en proyectos" />
          <div className="mt-6 grid grid-cols-1 gap-4">
            <article className="rounded-2xl border border-black/10 dark:border-white/15 bg-white/65 dark:bg-black/25 p-5 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold">AnyPost – Plataforma de automatización de publicaciones en redes sociales</h3>
              <p className="mt-3 text-sm md:text-base leading-8 text-zinc-800 dark:text-zinc-200">
                Desarrollé una plataforma que permite a emprendedores y empresas gestionar y automatizar
                publicaciones en varias redes sociales desde un solo lugar, programar contenido y
                organizar campañas, usando inteligencia artificial para apoyar la creación de textos e
                imágenes. Trabajé con React y TypeScript en el frontend, Java con Spring Boot y
                PostgreSQL en el backend, e integré n8n y servicios externos para automatizar flujos y
                conectar la aplicación con distintas plataformas sociales.
              </p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                URL: https://any-post-frontend-rnnq4zzhh-matheus-projects-d0a163a3.vercel.app/login
              </p>
            </article>

            <article className="rounded-2xl border border-black/10 dark:border-white/15 bg-white/65 dark:bg-black/25 p-5 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold">BilbaoVerse</h3>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Plataforma de ecosistema empresarial</p>
              <p className="mt-3 text-sm md:text-base leading-8 text-zinc-800 dark:text-zinc-200">
                BilbaoVerse es una plataforma digital orientada a conectar negocios, comunidad y
                oportunidades de crecimiento en Latinoamérica, funcionando como un ecosistema para
                impulsar relaciones estratégicas, colaboración y expansión empresarial.
              </p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Stack: Next.js, TypeScript, Tailwind CSS, Python, FastAPI, PostgreSQL, Azure.
              </p>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">URL: https://bilbaoverse.net/</p>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Repositorios no disponibles por seguridad del cliente.
              </p>
            </article>

            <article className="rounded-2xl border border-black/10 dark:border-white/15 bg-white/65 dark:bg-black/25 p-5 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold">CRM con agente de IA</h3>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Plataforma comercial con automatización inteligente</p>
              <p className="mt-3 text-sm md:text-base leading-8 text-zinc-800 dark:text-zinc-200">
                Plataforma comercial que integra un CRM con inteligencia artificial para gestionar leads,
                automatizar seguimiento y optimizar procesos de venta en entornos de operación real.
              </p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Stack: Next.js, TypeScript, Tailwind CSS, Python, FastAPI, LangGraph, OpenAI API,
                WhatsApp API y TikTok API.
              </p>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">URL: https://30x.vercel.app/login</p>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Repositorios no públicos por seguridad del cliente.
              </p>
            </article>

            <article className="rounded-2xl border border-black/10 dark:border-white/15 bg-white/65 dark:bg-black/25 p-5 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold">Homa</h3>
              <p className="mt-1 text-sm text-amber-600 dark:text-amber-300 font-medium">En desarrollo</p>
              <p className="mt-3 text-sm md:text-base leading-8 text-zinc-800 dark:text-zinc-200">
                Plataforma web inmobiliaria diseñada para la publicación, búsqueda y gestión de
                propiedades en venta y arriendo.
              </p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Stack: Next.js, TypeScript, Python, FastAPI y PostgreSQL.
              </p>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">URL: https://homa-frontend.vercel.app</p>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Repositorios no abiertos al público.
              </p>
            </article>

            <article className="rounded-2xl border border-black/10 dark:border-white/15 bg-white/65 dark:bg-black/25 p-5 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold">E-commerce de ferretería</h3>
              <p className="mt-1 text-sm text-amber-600 dark:text-amber-300 font-medium">En desarrollo</p>
              <p className="mt-3 text-sm md:text-base leading-8 text-zinc-800 dark:text-zinc-200">
                Tienda online diseñada para la visualización, organización y exploración de productos de
                ferretería dentro de una experiencia moderna y comercial.
              </p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Stack: Next.js, TypeScript, Tailwind CSS, Python, FastAPI, PostgreSQL y pagos con Wompi.
              </p>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                URL: https://frontend-ferreteria-two.vercel.app/login
              </p>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Repositorios no abiertos al público.
              </p>
            </article>

            <article className="rounded-2xl border border-black/10 dark:border-white/15 bg-white/65 dark:bg-black/25 p-5 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold">PulmoMed</h3>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Simulador inmersivo para enseñanza de oncología pulmonar</p>
              <p className="mt-3 text-sm md:text-base leading-8 text-zinc-800 dark:text-zinc-200">
                Proyecto desarrollado en Unity para gafas Meta Quest 2, 3 y Pro, orientado a la enseñanza
                de oncología pulmonar. Permite explorar entornos 3D del sistema respiratorio, visualizar
                la evolución de tumores y comprender procesos clínicos relacionados con el cáncer de
                pulmón, integrando lógica e interacción en C# y trabajo conjunto con profesionales de la
                salud para adaptar contenidos a necesidades formativas.
              </p>
            </article>

            <article className="rounded-2xl border border-black/10 dark:border-white/15 bg-white/65 dark:bg-black/25 p-5 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold">Full House</h3>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Proyecto ganador de hackatón – Sistema inteligente para gestión de leads inmobiliarios</p>
              <p className="mt-3 text-sm md:text-base leading-8 text-zinc-800 dark:text-zinc-200">
                Sistema web que utiliza inteligencia artificial para analizar y priorizar leads inmobiliarios,
                automatiza la publicación de propiedades en redes sociales mediante n8n e integra un chat
                funcional con WhatsApp para centralizar la atención. La solución permite reducir tareas
                repetitivas, mejorar el seguimiento de clientes potenciales y aumentar la efectividad
                comercial de agencias inmobiliarias.
              </p>
            </article>

            <article className="rounded-2xl border border-black/10 dark:border-white/15 bg-white/65 dark:bg-black/25 p-5 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold">Sistema de registro de asistencia con códigos QR</h3>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Universidad Cooperativa de Colombia</p>
              <p className="mt-3 text-sm md:text-base leading-8 text-zinc-800 dark:text-zinc-200">
                Desarrollé un software de registro de asistencia que reemplaza planillas de Excel o papel
                por códigos QR únicos para cada participante, automatizando el ingreso y salida a eventos
                académicos. La solución permite escanear los códigos en tiempo real, registrar asistencia
                de forma segura y organizar mejor la información para el área administrativa.
              </p>
            </article>
          </div>
        </section>

        <section className="rounded-3xl border border-black/10 dark:border-white/15 bg-white/85 dark:bg-zinc-950/70 backdrop-blur-xl p-6 md:p-10 shadow-xl shadow-black/10 dark:shadow-black/35">
          <SectionTitle icon={<Wrench className="h-5 w-5" />} title="Habilidades técnicas" />
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(TECH_SKILLS).map(([group, items]) => (
              <article
                key={group}
                className="rounded-2xl border border-black/10 dark:border-white/15 bg-white/65 dark:bg-black/25 p-5"
              >
                <h3 className="text-base md:text-lg font-semibold">{group}</h3>
                <ul className="mt-3 space-y-2 list-disc pl-5 text-sm md:text-base text-zinc-800 dark:text-zinc-200">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-black/10 dark:border-white/15 bg-white/85 dark:bg-zinc-950/70 backdrop-blur-xl p-6 md:p-10 shadow-xl shadow-black/10 dark:shadow-black/35">
          <SectionTitle icon={<Sparkles className="h-5 w-5" />} title="Habilidades blandas" />
          <ul className="mt-6 space-y-3 list-disc pl-5 text-sm md:text-base text-zinc-800 dark:text-zinc-200">
            {SOFT_SKILLS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl border border-black/10 dark:border-white/15 bg-white/85 dark:bg-zinc-950/70 backdrop-blur-xl p-6 md:p-10 shadow-xl shadow-black/10 dark:shadow-black/35">
          <SectionTitle icon={<GraduationCap className="h-5 w-5" />} title="Formación académica" />
          <div className="mt-6 grid grid-cols-1 gap-4">
            {EDUCATION.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-black/10 dark:border-white/15 bg-white/65 dark:bg-black/25 p-5"
              >
                <h3 className="text-base md:text-lg font-semibold">{item.title}</h3>
                <p className="text-sm md:text-base text-zinc-700 dark:text-zinc-300 mt-1">{item.institution}</p>
                {item.note && (
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{item.note}</p>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article className="rounded-3xl border border-black/10 dark:border-white/15 bg-white/85 dark:bg-zinc-950/70 backdrop-blur-xl p-6 md:p-10 shadow-xl shadow-black/10 dark:shadow-black/35">
            <SectionTitle icon={<Languages className="h-5 w-5" />} title="Idiomas" />
            <ul className="mt-6 space-y-3 list-disc pl-5 text-sm md:text-base text-zinc-800 dark:text-zinc-200">
              {LANGUAGES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-black/10 dark:border-white/15 bg-white/85 dark:bg-zinc-950/70 backdrop-blur-xl p-6 md:p-10 shadow-xl shadow-black/10 dark:shadow-black/35">
            <SectionTitle icon={<Heart className="h-5 w-5" />} title="Intereses" />
            <ul className="mt-6 space-y-3 list-disc pl-5 text-sm md:text-base text-zinc-800 dark:text-zinc-200">
              {INTERESTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="rounded-3xl border border-black/10 dark:border-white/15 bg-white/85 dark:bg-zinc-950/70 backdrop-blur-xl p-6 md:p-10 shadow-xl shadow-black/10 dark:shadow-black/35">
          <SectionTitle icon={<Briefcase className="h-5 w-5" />} title="Referencias de desempeño laboral" />
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {WORK_REFERENCES.map((item) => (
              <article
                key={item.name}
                className="rounded-2xl border border-black/10 dark:border-white/15 bg-white/65 dark:bg-black/25 p-5"
              >
                <h3 className="text-base md:text-lg font-semibold">{item.name}</h3>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Cargo: {item.role}</p>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Teléfono: {item.phone}</p>
                {item.email && (
                  <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300 break-all">
                    Correo: {item.email}
                  </p>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-black/10 dark:border-white/15 bg-white/85 dark:bg-zinc-950/70 backdrop-blur-xl p-6 md:p-10 shadow-xl shadow-black/10 dark:shadow-black/35">
          <SectionTitle icon={<UserRound className="h-5 w-5" />} title="Referencias personales" />
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {PERSONAL_REFERENCES.map((item) => (
              <article
                key={item.name}
                className="rounded-2xl border border-black/10 dark:border-white/15 bg-white/65 dark:bg-black/25 p-5"
              >
                <h3 className="text-base md:text-lg font-semibold">{item.name}</h3>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Teléfono: {item.phone}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="flex justify-center">
          <Link
            href="/#contact"
            className="inline-flex items-center rounded-full border border-black/10 dark:border-white/20 bg-white/75 dark:bg-zinc-900/70 px-6 py-3 text-sm md:text-base"
          >
            ¿Quieres una versión en PDF? Escríbeme
          </Link>
        </div>
      </div>
    </main>
  );
}
