type CapacidadeCardProps = {
  titulo: string;
  corpo: string;
};

export default function CapacidadeCard(props: CapacidadeCardProps) {
  return (
    <article className="card flex border border-zinc-200 shadow-sm justify-left flex-col w-90 rounded-xl p-6 text-left leading-5 h-full">
      <h2 className="border border-zinc-200 rounded-xl pb-1 mb-2 font-bold pt-3 text-center">
        {props.titulo}
      </h2>
      <p>{props.corpo}</p>
    </article>
  );
}
