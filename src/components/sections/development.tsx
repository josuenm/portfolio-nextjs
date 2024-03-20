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

      <p className="text-4xl md:text-5xl text-center scroll-animate mt-12">
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
              No momento utilizo 2 monitores.
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
              construir uma landing page simples eu uso tecnologias simples como
              apenas <Span>HTML</Span>, <Span>CSS</Span>, <Span>Tailwind</Span>{" "}
              e <Span>Javascript</Span>. Em projetos mais elaborados e grande
              eu prefiro usar <Span>Typescript</Span>,{" "}
              <Span>React</Span> com <Span>Vite</Span>, e se precisar do{" "}
              <Span>SEO</Span> eu utilizo o <Span>Next.js</Span>. Para deploy
              utilizo o <Span>EC2</Span> da <Span>AWS</Span>, <Span>Vercel</Span> ou outro da prefêrencia do cliente.
            </p>
          </div>

          <div className="l-stack-start gap-4 text-start">
            <strong className="text-2xl">Back-End</strong>
            <p className="text-slate-400">
              No backend utilizo <Span>Node</Span> com <Span>Express</Span> ou <Span>Nest</Span>. Faço
              sempre o uso do <Span>Typescript</Span> e utilizo várias outras
              boas práticas e sempre adoto a arquitetura limpa com <Span>SOLID</Span>. Em questão de ORM eu já utilizei vários, mas o <Span>Prisma</Span> é meu favorito até então. Também não posso esquecer de documentar a aplicação, porisso utilizo o <Span>Swagger</Span>. Também ja codei em <Span>PHP</Span> e{" "}
              <Span>Laravel</Span>.
            </p>
          </div>

          <div className="l-stack-start gap-4 text-start">
            <strong className="text-2xl">Mobile e desktop</strong>
            <p className="text-slate-400">
              No mobile eu utilizo <Span>React Native</Span> com o{" "}
              <Span>Expo</Span>, e como eu acho muito produtivo o{" "}
              <Span>Tailwind</Span> eu acho legal utilizar o{" "}
              <Span>Native base</Span>, mas também consigo utilizar com <Span>Styled
              Components</Span> ou outro modelo de estilização. No Desktop eu
              utilizo <Span>Electron</Span> junto com <Span>React</Span> e ótimas práticas.
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
