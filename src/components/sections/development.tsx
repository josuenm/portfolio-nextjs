import { AutoScroller, Flag, SafeArea } from "@src/components";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

type SpanProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

export default function Development() {
  const techs = [
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "PHP",
    "Node.js",
    "Express",
    "Laravel",
    "Next.js",
    "React.js",
    "Nest",
    "Tailwind",
    "React Native",
    "MySQL",
    "MongoDB",
    "Electron",
    "VITE",
    "JQuery",
    "SASS",
    "Bootstrap",
    "AWS",
  ];

  return (
    <SafeArea
      className="py-24 l-stack-start-center text-center"
      id="development"
    >
      <Flag
        step={1}
        subtitle="Minha forma de desenvovler"
        title="Desenvolvimento"
      />

      <p className="text-center text-4xl font-bold mt-24   ">
        A minha forma de desenvolver
      </p>

      <div className="mt-24 grid grid grid-cols-12 gap-4 md:gap-12 text-base">
        <div className="col-span-12 md:col-span-6 l-stack-start gap-4 md:gap-12">
          <div className="l-stack-start gap-4 text-start order-2 md:order-1">
            <p className="text-slate-400">
              Atualmente estou usando o{" "}
              <Span className="text-primary">Ubuntu 20.04</Span> que é a mesma
              máquina de produção de todos sistemas que eu crio. Utilizo também
              um notebook gamer que me auxilia demais com um processador forte.
              No momento utilizo apenas 1 monitor.
            </p>
          </div>

          <Image
            src="/icons/bubble-development.svg"
            width={500}
            height={500}
            alt="Bubble development"
            className="col-span-12 md:col-span-6 w-full order-1 md:order-2"
          />
        </div>

        <div className="col-span-12 md:col-span-6 l-stack-start gap-4 md:gap-12">
          <div className="l-stack-start gap-4 text-start">
            <p className="text-slate-400">
              Estou trabalhando na <Span>ValidaPix</Span> como Desenvovledor
              Full-stack. Mas estou disponível para projetos de freela!
            </p>
          </div>

          <div className="l-stack-start gap-4 text-start">
            <strong className="text-2xl">Front-end</strong>
            <p className="text-slate-400">
              No frontend web eu foco primeiro na proposta, se eu preciso
              contruir uma landing page simples eu uso tecnologias simples como
              apenas <Span>HTML</Span>, <Span>CSS</Span>, <Span>Tailwing</Span>{" "}
              e <Span>Javascript</Span>. Mas se o projeto for um sistema grande
              eu ja começo a utilizar <Span>Typescript</Span>,{" "}
              <Span>React</Span> com <Span>Vite</Span>, e se precisar do{" "}
              <Span>SEO</Span> eu utilizo o <Span>Next.js</Span>. Para deploy
              utilizo o <Span>EC2</Span> da <Span>AWS</Span>.
            </p>
          </div>

          <div className="l-stack-start gap-4 text-start">
            <strong className="text-2xl">Back-End</strong>
            <p className="text-slate-400">
              No backend utilizo <Span>Node</Span>, <Span>Express</Span>,{" "}
              <Span>MySQL</Span> e sei utilizar bem o <Span>Nest</Span>. Faço
              sempre o uso do <Span>Typescript</Span> e utilizo várias outras
              boas práticas. Também utilizo o <Span>TypeORM</Span>, validador de
              requisição, <Span>Swagger</Span>, para contruir APIs confiáveis,
              robustas e escalaveis. Também ja codei em <Span>PHP</Span> e{" "}
              <Span>Laravel</Span> apesar de não gostar dessa tecnologia é um
              ponto que vale ressaltar. O deploy também utilizo o{" "}
              <Span>EC2</Span> da <Span>AWS</Span>.
            </p>
          </div>

          <div className="l-stack-start gap-4 text-start">
            <strong className="text-2xl">Mobile e desktop</strong>
            <p className="text-slate-400">
              No mobile eu utilizo <Span>React Native</Span> com o{" "}
              <Span>Expo</Span>, e como eu acho muito produtivo o{" "}
              <Span>Tailwind</Span> eu acho legal utilizar o{" "}
              <Span>Native base</Span>, mas também consigo utilizar com Styled
              Components ou outro framework <Span>CSS</Span>. No Desktop eu
              utilizo <Span>Electron</Span> e estou desenvolvendo um{" "}
              <Span>SAAS</Span> com ele, e já estou a muito tempo utilizando
              boas práticas para fazer dar certo.
            </p>
          </div>
        </div>

        <div className="col-span-12 mt-12 w-full">
          <AutoScroller data={techs} title="Tecnologias que eu utilizo" />
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
