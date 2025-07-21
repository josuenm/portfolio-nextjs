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
              Tenho domínio em <Span>JavaScript</Span> e <Span>TypeScript</Span>, que são minhas principais linguagens para desenvolvimento web e mobile. Estou sempre aberto a aprender e trabalhar com outras linguagens conforme a necessidade dos projetos.
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
              Estou trabalhando na <Span>ValidaPix/ValidaPay</Span> como Desenvovledor
              full-stack trabalhando em novos projetos com meios de pagamento.
            </p>
          </div>

          <div className="l-stack-start gap-4 text-start">
            <strong className="text-2xl">Front-end</strong>
            <p className="text-slate-400">
            No front-end, tenho experiência principalmente com <Span>React</Span> e <Span>Next.js</Span>, utilizando <Span>TypeScript</Span> e <Span>JavaScript</Span> para criar interfaces modernas e performáticas. Utilizo <Span>Tailwind CSS</Span> para estilização, mas também já trabalhei com <Span>Bootstrap</Span> e <Span>jQuery</Span> em projetos anteriores. Além disso, tenho experiência com <Span>React Native</Span> para mobile e <Span>Electron</Span> para aplicações desktop, sempre buscando aplicar boas práticas e garantir uma ótima experiência do usuário.
            </p>
          </div>

          <div className="l-stack-start gap-4 text-start">
            <strong className="text-2xl">Back-End</strong>
            <p className="text-slate-400">
              No back-end, tenho experiência principalmente com <Span>Node.js</Span> (usando <Span>NestJS</Span> e <Span>Express</Span>) e também já trabalhei com <Span>PHP</Span> usando <Span>Laravel</Span>. Utilizo bancos de dados como <Span>PostgreSQL</Span>, <Span>MySQL</Span>, <Span>DynamoDB</Span> e <Span>MongoDB</Span>. Tenho experiência com arquiteturas de <Span>microserviços</Span>, <Span>serverless</Span> e serviços da <Span>AWS</Span>.
            </p>
          </div>

          <div className="l-stack-start gap-4 text-start">
            <strong className="text-2xl">Nuvem</strong>
            <p className="text-slate-400">
              Tenho experiência com diversos serviços da <Span>AWS</Span>, como <Span>EC2</Span>, <Span>Lambdas</Span>, <Span>API Gateway</Span>, <Span>RDS</Span>, <Span>DynamoDB</Span>, <Span>SES</Span>, <Span>SNS</Span>, <Span>Cognito</Span>, <Span>Route 53</Span> e <Span>Amplify</Span>, sempre buscando aplicar boas práticas de arquitetura, automação e segurança em nuvem.
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
