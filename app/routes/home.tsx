import Header from "~/components/Header";
import type { Route } from "./+types/home";
import Hero from "~/components/Hero";
import Capacidades from "~/components/Capacidades";
import Planos from "~/components/Planos";
import Contato from "~/components/Contato";
import Footer from "~/components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
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
