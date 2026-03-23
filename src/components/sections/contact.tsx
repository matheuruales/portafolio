"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "../ContactForm";
import Link from "next/link";
import { config } from "@/data/config";
const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen max-w-7xl mx-auto px-4 md:px-8 pb-16">
      <Link href={"#contact"}>
        <div className="pt-16">
          <h2 className="section-title">
            TRABAJEMOS <br />
            JUNTOS
          </h2>
          <div className="section-title-line" />
        </div>
      </Link>
      <div className="grid grid-cols-1 z-[9999] mt-10 md:mt-14">
        <Card className="w-full max-w-4xl mx-auto bg-white/80 dark:bg-black/75 backdrop-blur-sm rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl md:text-4xl">Formulario de contacto</CardTitle>
            <CardDescription>
              Puedes escribirme directamente a{" "}
              <a
                target="_blank"
                href={`mailto:${config.email}`}
                className="text-zinc-700 dark:text-zinc-300 cursor-can-hover rounded-lg underline underline-offset-2"
              >
                {config.email.replace(/@/g, "(arroba)")}
              </a>{" "}
              o dejar tus datos aqui.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
export default ContactSection;
