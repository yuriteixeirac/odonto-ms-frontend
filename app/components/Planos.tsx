export default function Planos() {
  return (
    <section className="flex justify-center mx-auto w-295 text-white mt-12">
      <div className="grid grid-cols-2 gap-6">
        <article id="plano-card" className="rounded-xl p-6">
          <h2 className="font-semibold text-xl">Plano simples</h2>
          <p>
            O plano mais simples conta com o acesso anual do software e
            manutenção paga através de parcelas mensais, provendo contato direto
            com os desenvolvedores para relato de bugs e outros problemas, além
            de sugestões de incrementações na plataforma.
          </p>
        </article>

        <article id="plano-card" className="grid grid-cols-2 rounded-xl p-7">
          <div className="flex text-center flex-col justify-center items-center border-r">
            <h2 className="font-semibold text-xl">R$ 3.200,00 anual</h2>
            <p>Pelo acesso ao software.</p>
          </div>
          <div className="flex text-center flex-col justify-center items-center border-l px-4">
            <h2 className="font-semibold text-xl">R$ 300 mensal</h2>
            <p>
              Para acesso ao sistema de tickets e contato direto com os
              desenvolvedores.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
