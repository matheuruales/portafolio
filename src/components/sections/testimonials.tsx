"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Quote, BadgeCheck } from "lucide-react";

type Testimonial = {
  name: string;
  quote: string;
  context: string;
  image?: string;
  profileUrl?: string;
  glow: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ivonne Barcos",
    quote:
      "Gracias, Matt. Para mi fue un verdadero gusto aprender de ti y tener la oportunidad de acompanarte en este proceso de desarrollo de BilbaoVerse.",
    context: "Desarrollo BilbaoVerse",
    image: "/assets/testimonials/ivonne-barcos.jpg",
    glow: "from-cyan-400/22 via-blue-400/12 to-transparent",
  },
  {
    name: "Juan Carlos Reyes Guerrero",
    quote:
      "Matheu, al equipo le gusto mucho tu charla; recibiste muchas felicitaciones por la claridad y el valor de lo que compartiste. Incluso surgio el interes de invitarte nuevamente dentro de un tiempo para otra charla, esta vez mostrando en vivo como desarrollas o programas un modelo, porque generaste mucho interes en tu forma de explicar y en tu conocimiento tecnico.",
    context: "Conferencia KATARY Software Factory",
    profileUrl:
      "https://www.linkedin.com/in/juan-carlos-reyes-guerrero-0494ab63/?originalSubdomain=co",
    glow: "from-sky-400/22 via-cyan-400/12 to-transparent",
  },
  {
    name: "Jefferson Arcos",
    quote:
      "Mat esta haciendo un trabajo excelente. Se nota mucho su nivel, su capacidad tecnica y la velocidad con la que esta avanzando. Realmente esta volando.",
    context: "Creacion de agente de IA",
    image: "/assets/testimonials/jefferson-arcos.jpg",
    glow: "from-emerald-400/22 via-teal-400/12 to-transparent",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="relative z-[2] min-h-screen w-full py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white/62 via-slate-50/82 to-white/62 dark:from-black/45 dark:via-black/62 dark:to-black/45" />
        <div className="absolute -top-16 right-6 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl dark:hidden" />
        <div className="absolute -bottom-20 left-6 h-56 w-56 rounded-full bg-emerald-200/22 blur-3xl dark:hidden" />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Link href="#testimonials">
          <div>
            <h2 className="section-title">TESTIMONIOS</h2>
            <div className="section-title-line" />
          </div>
        </Link>

        <p className="mx-auto mt-6 max-w-3xl text-center text-sm md:text-base text-zinc-700 dark:text-zinc-300 leading-7">
          Comentarios reales sobre resultados, acompanamiento tecnico y valor
          entregado en proyectos y conferencias.
        </p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.06 },
            },
          }}
          className="mt-12 grid grid-cols-1 xl:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map((item, index) => (
            <motion.article
              key={item.name}
              variants={{
                hidden: { opacity: 0, y: 26, scale: 0.98 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -10, rotate: index === 1 ? 0 : index === 0 ? -0.6 : 0.6 }}
              className="group relative overflow-hidden rounded-3xl border border-cyan-200/45 dark:border-white/15 bg-white/90 dark:bg-zinc-950/70 backdrop-blur-xl p-6 md:p-7 shadow-[0_20px_44px_rgba(15,23,42,0.14)] dark:shadow-black/45"
            >
              <div
                className={cn(
                  "pointer-events-none absolute inset-0 opacity-85 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br",
                  item.glow
                )}
              />
              <motion.div
                aria-hidden
                animate={{ x: [0, 10, 0], y: [0, -8, 0] }}
                transition={{ duration: 5.2 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute -right-10 -top-12 h-28 w-28 rounded-full bg-white/15 blur-3xl"
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    {item.image ? (
                      <motion.div whileHover={{ scale: 1.07 }} transition={{ duration: 0.25 }}>
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={52}
                          height={52}
                          className="h-12 w-12 rounded-full object-cover border border-black/10 dark:border-white/20"
                        />
                      </motion.div>
                    ) : (
                      <a
                        href={item.profileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-12 w-12 rounded-full border border-black/10 dark:border-white/20 bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-xs font-semibold"
                      >
                        JCR
                      </a>
                    )}
                    <h3 className="text-sm md:text-base font-semibold text-zinc-900 dark:text-zinc-100 truncate">
                      {item.name}
                    </h3>
                  </div>

                  <motion.div
                    whileHover={{ rotate: -12, scale: 1.1 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Quote className="h-5 w-5 text-zinc-500 dark:text-zinc-300" />
                  </motion.div>
                </div>

                <p className="mt-5 text-sm md:text-base leading-7 text-zinc-800 dark:text-zinc-200">
                  {item.quote}
                </p>

                <div className="mt-6 inline-flex items-center gap-1 rounded-full border border-black/10 dark:border-white/20 bg-white/70 dark:bg-black/35 px-3 py-1 text-[11px] md:text-xs text-zinc-700 dark:text-zinc-200">
                  <BadgeCheck className="h-3.5 w-3.5" />
                  Contexto: {item.context}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
