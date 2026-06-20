import CapacidadeCard from "./CapacidadeCard";

const capacidades = [
  {
    titulo: "Gestão simplificada",
    corpo:
      "A plataforma foi desenvolvida baseada em relatos do fluxo de trabalho de clínicas reais. Foram feitos estudos de caso para desenvolver soluções cabíveis a diversas situações repetitivas ou demoradas quando dependentes da atividade humana.",
  },
  {
    titulo: "Agenda inteligente",
    corpo:
      "Suporte a uma agenda inteligente para melhor gerenciamento e visualização de consultas e pacientes. Facilita o trabalho do atendente e clínico e da suporte aos lembretes automatizados para o paciente.",
  },
  {
    titulo: "Integração com WhatsApp ",
    corpo:
      "O sistema periodicamente lembra pacientes da clínica sobre seus agendamentos através do WhatsApp, reduzindo drasticamente o índice de ausências e melhorando a relação do paciente com a clínica.",
  },
];

export default function Capacidades() {
  return (
    <section id="capacidades" className="flex justify-center gap-12 mt-24">
      <div className="flex justify-between gap-12 border-b pb-8">
        {capacidades.map((c) => {
          return <CapacidadeCard titulo={c.titulo} corpo={c.corpo} />;
        })}
      </div>
    </section>
  );
}
