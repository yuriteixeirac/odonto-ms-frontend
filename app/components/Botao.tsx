import type { CSSProperties, MouseEventHandler } from "react";

type BotaoProps = {
  conteudo: string;
  link?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  backgroundColor: string;
  color: string | "";
};

export default function Botao(props: BotaoProps) {
  return (
    <a
      href={props.link || "#"}
      onClick={props.onClick}
      style={
        {
          backgroundColor: props.backgroundColor,
          color: props.color,
          borderRadius: 18,
        } as CSSProperties
      }
      className="rounded-xl px-6 py-2 text-center font-semibold hover:shadow-md shadow-lg"
    >
      {props.conteudo}
    </a>
  );
}
