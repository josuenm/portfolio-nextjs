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
              Tenho 20 anos e moro em <Span>Jacareí - SP</Span>, e comecei na
              área da programação com 18 anos no ensino médio. Desde de lá tenho
              evoluido muito.
            </p>
            <p>
              No momento eu utilizo a stack que eu tenho mais habilidade que é{" "}
              <Span>Javascript</Span> e <Span>Typescript</Span> com{" "}
              <Span>React</Span> e <Span>Node</Span>. Mas estou aberto para
              outras tecnologias.
            </p>
            <p>
              Estou atuando como Desenvolvedor Full-stack na{" "}
              <Span>ValidaPix</Span>. E também faço alguns freelas no tempo
              livre. Acredito que eu posso muito mais e isso só depende de mim,
              e toda semana eu estou correndo atrás de algo novo, algo que vai
              ajudar no trabalho ou no meu futuro.
            </p>
            <p>
              Vale ressaltar que já trabalhei com <Span>PHP</Span> e{" "}
              <Span>Laravel</Span> como <Span>CLT</Span> presencial.
            </p>
            <p>
              Falando sobre minha vida pessoal, sou um cara bem simples e que
              gosta de levar a vida bem humorada. Adoro jogar online e arrancar
              aquela risada, sair com os amigos e gosto de ter meu momento
              sozinho também.
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <Image
            src="/images/profile1.jpg"
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
