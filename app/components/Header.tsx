import Botao from "./Botao";

const navRotas = [
  {
    rota: "#",
    conteudo: "Capacidades",
  },
  {
    rota: "#",
    conteudo: "Preços",
  },
  {
    rota: "#",
    conteudo: "Peça uma demonstração",
  },
];

export default function Header() {
  return (
    <header className="flex justify-between items-center py-2 px-8 shadow mb-6">
      <h2 className="text-xl font-bold">OdontoMS</h2>
      <nav>
        <ul className="flex gap-16">
          {navRotas.map((item) => {
            return (
              <li>
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
