import Botao from "./Botao";
import TextArea from "./TextArea";
import TextInput from "./TextInput";

export default function Contato() {
  return (
    <section id="contato" className="grid grid-cols-2 mx-12 mb-24">
      <div className="p-8  border-r border-[var(--stormy-teal)]">
        <h1 className="text-2xl font-semibold">Entre em contato!</h1>
        <form className="flex flex-col rounded-xl border-2 border-[var(--stormy-teal)] p-6 gap-3">
          <TextInput
            label="E-mail"
            name="email"
            type="email"
            placeholder="Digite seu e-mail preferido..."
          />
          <TextInput
            label="Telefone"
            name="telefone"
            type="text"
            placeholder="Digite seu telefone de contato..."
          />
          <TextArea
            label="Conte um pouco sobre seu negócio"
            placeholder="Informações sobre sua empresa."
            name="informacoes"
          />

          <Botao
            conteudo="Enviar"
            backgroundColor="var(--stormy-teal)"
            color="white"
          />
        </form>
      </div>

      <div className="flex flex-col gap-4 p-8 border-l border-[var(--stormy-teal)]">
        <h1 className="text-2xl font-semibold">
          Ajude a construir o OdontoMS.
        </h1>
        <p>
          Seu contato nos ajuda a entender melhor as dores do fluxo de trabalho
          de clínicas em operação e implementar soluções inteligentes de maneira
          digital para essas.
        </p>
        <p>
          Localizados na Zona Norte de Natal, os desenvolvedores do OdontoMS
          estão sempre buscando parceiros locais para testar e evoluir nosso
          software.
        </p>
      </div>
    </section>
  );
}
