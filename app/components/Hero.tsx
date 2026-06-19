import type { CSSProperties } from "react";
import dentistaBackground from "../../public/dentista.png";
import Botao from "./Botao";

export default function Hero() {
  return (
    <section
      id="hero"
      style={
        {
          backgroundImage: `url(${dentistaBackground})`,
          backgroundSize: "70%",
          backgroundRepeat: "no-repeat",
        } as CSSProperties
      }
      className="flex grow justify-center items-center flex-col w-full max-w-8xl mx-auto p-4"
    >
      <div className="flex justify-center items-end flex-col m-32 text-right max-w-2xl text-black-700 ml-auto">
        <h2 className="text-5xl leading-tight font-bold">
          OdontoMS, o seu sistema de gerenciamento clínico.
        </h2>
        <p className="py-4 text-xl font-semibold">
          O sistema que centraliza agendamentos, pacientes, comunicação e
          finanças, tudo em um só lugar. Toque sua clínica com poucos cliques e
          agilize seu fluxo de trabalho!
        </p>
        <div className="flex justify-center gap-5">
          <Botao
            conteudo="Começar agora"
            backgroundColor="black"
            color="white"
          />
          <Botao conteudo="Entrar" backgroundColor="teal" color="white" />
        </div>
      </div>
    </section>
  );
}
