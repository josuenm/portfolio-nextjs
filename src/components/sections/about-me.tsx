import Image from "next/image";
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
            Tenho 22 anos e iniciei minha trajetória na programação em 2021. Desde então, participei de diferentes projetos, adquirindo experiência em diversas áreas do desenvolvimento.
          </p>
          <p>
            Atualmente, atuo como <Span>PJ</Span> em uma empresa focada em integrações bancárias e soluções de pagamento, onde trabalho como desenvolvedor full-stack.
          </p>
          <p>
            Estou em fase de lançamento de um <Span>SaaS</Span> inovador: um navegador multilogin, pensado para evitar bloqueios e facilitar a gestão de múltiplas contas e identidades online.
          </p>
        </div>
      </div>
    </SafeArea>
  );
}

function Span({ children, className, ...props }: SpanProps) {
  return (
    <span className={twMerge("text-primary", className)} {...props}>
      {children}
    </span>
  );
}
