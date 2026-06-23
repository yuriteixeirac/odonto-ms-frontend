import Header from "~/components/Header";
import type { Route } from "./+types/home";
import Hero from "~/components/Hero";
import Capacidades from "~/components/Capacidades";
import Planos from "~/components/Planos";
import Contato from "~/components/Contato";
import Footer from "~/components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "OdontoMS" },
    {
      name: "description",
      content: "Sistema de gerenciamento de clínica odontológica.",
    },
  ];
}

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Capacidades />
      <Planos />
      <Contato />
      <Footer />
    </div>
  );
}
