import Botao from "./Botao";

export default function Header() {
  const navRotas = [
    { rota: "#capacidades", conteudo: "Capacidades" },
    { rota: "#planos", conteudo: "Planos" },
    { rota: "#contato", conteudo: "Entre em contato" },
  ];

  return (
    <header className="flex justify-between items-center py-2 px-8 shadow mb-6">
      <h2 className="text-xl font-bold">OdontoMS</h2>
      <nav>
        <ul className="flex gap-16">
          {navRotas.map((item) => {
            return (
              <li key={item.rota}>
                <a href={item.rota}>{item.conteudo}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      <Botao conteudo="Log in" backgroundColor="teal" color="white" />
    </header>
  );
}
