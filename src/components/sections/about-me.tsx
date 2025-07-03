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

      <div className="grid grid-cols-12 gap-4 md:gap-12 mt-24 text-start">
        <div className="col-span-12 md:col-span-6">
          <strong className="text-3xl">Josué Nascimento Mendonça</strong>

          <div className="text-slate-400 mt-4 text-lg md:text-xl l-stack-start gap-5">
            <p>
              Tenho 21 anos e moro em <Span>Jacareí, SP - Brasil</Span>, e comecei na
              área da programação com 18 anos no ensino médio. E já estou 3 anos nesse mundo da tecnologia e com uma bagagem gigante.
            </p>
            <p>
              No momento eu utilizo a stack que eu tenho mais habilidade que é{" "}
              <Span>Javascript</Span> e <Span>Typescript</Span> com{" "}
              <Span>React</Span> e <Span>Node</Span>. Mas estou aberto para
              outras tecnologias.
            </p>
            <p>
              Estou atuando como Desenvolvedor Full-stack como{" "}
              <Span>PJ (Micro Empresa Individual)</Span> para a <Span>ValidaPix</Span>.
            </p>
            <p>
              Vale ressaltar que já trabalhei com <Span>PHP</Span> e{" "}
              <Span>Laravel</Span> como <Span>CLT</Span> presencial.
            </p>
            <p>
              Em projeto pessoal, momento estou fazendo um <Span>SaaS</Span> que até então só existe 1 no Brasil e poucos no mundo, e estou animado para poder divulgar ele no mercado em breve.
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <Image
            src="/images/profile2.jpeg"
            width={1000}
            height={1000}
            alt="Foto de perfil"
            className="w-full md:w-[400px] object-cover mx-auto md:ml-auto"
          />
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
