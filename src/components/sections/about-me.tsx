import { twMerge } from "tailwind-merge";
import { Flag, SafeArea } from "../";

type SpanProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

export default function AboutMe() {
  return (
    <SafeArea className="py-24 l-stack-start-center text-center" id="aboutMe">
      <Flag step={2} subtitle="A mente por trás de tudo" title="Sobre mim" />

      <div className="w-full max-w-2xl mx-auto mt-8">
        <strong className="text-3xl text-center">Josué Nascimento Mendonça</strong>

        <div className="text-slate-400 mt-4 text-lg md:text-xl l-stack-start gap-5 text-start">
          <p>
            Tenho 23 anos e iniciei minha trajetória profissional em 2021, atuando no desenvolvimento de projetos para diversos segmentos de mercado.
          </p>
          <p>
            Meu principal destaque como desenvolvedor foi na <Span>ValidaPix</Span> e <Span>ValidaPay</Span>, produtos nos quais participei desde a concepção do zero. Na <Span>ValidaPix</Span>, liderei o desenvolvimento de diversas integrações bancárias e de outros produtos que compõem o ecossistema da empresa. Já na <Span>ValidaPay</Span>, colaborei ativamente no planejamento e na evolução contínua do gateway de pagamentos, realizando integrações complexas com adquirentes e garantindo a escalabilidade do sistema.
          </p>
        </div>
      </div>
    </SafeArea>
  );
}

function Span({ children, className, ...props }: SpanProps) {
  return (
    <span className={twMerge("text-blue-400", className)} {...props}>
      {children}
    </span>
  );
}
