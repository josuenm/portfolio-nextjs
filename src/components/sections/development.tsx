import { AutoScroller, Flag, SafeArea } from "@src/components";
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

      <p className="text-4xl md:text-5xl text-center mt-12">
        A minha forma de desenvolver
      </p>

      <div className="mt-24 grid grid-cols-12 gap-4 md:gap-12 text-base">
        <div className="col-span-12 md:col-span-6 l-stack-start gap-4 md:gap-12">
          <div className="l-stack-start gap-4 text-start order-2 md:order-1">
            <p className="text-slate-400">
              Tenho domínio em <Span>JavaScript</Span> e <Span>TypeScript</Span>, que são minhas principais linguagens para desenvolvimento. Mas também já usei <Span>PHP</Span> em um grande ERP, <Span>Python</Span> para tratamento de bilhões de dados e minha linguagem de estudo é <Span>C#</Span>.
            </p>
          </div>

          <div
            className="hidden relative md:l-inline-center-center gap-8 col-span-12 md:col-span-6 w-full md:h-[450px] order-1 md:order-2 bg-zinc-900 p-8"
          >
            <div className="w-32 h-32 bg-zinc-800 rounded-full border border-zinc-700" />
            <div className="w-32 h-32 bg-zinc-800 border border-zinc-700" />
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 l-stack-start gap-4 md:gap-12">
        <div className="l-stack-start gap-4 text-start">
            <strong className="text-2xl">Front-end</strong>
            <p className="text-slate-400">
              Sólida experiência no ecossistema front-end, com foco principal em <Span>React</Span> e <Span>Next.js</Span>. Desenvolvo arquiteturas modernas, escaláveis e otimizadas para performance e SEO, além de possuir vivência com micro-frontends. Para soluções mobile, utilizo <Span>React Native</Span> com <Span>Expo</Span>, e <Span>Electron</Span> para aplicações desktop. Minha escolha atual para estilização é o <Span>Tailwind CSS</Span> (e <Span>Nativewind</Span> no mobile), com amplo histórico de uso em diversas outras bibliotecas de mercado.
            </p>
          </div>

          <div className="l-stack-start gap-4 text-start">
            <strong className="text-2xl">Back-end</strong>
            <p className="text-slate-400">
              Forte atuação em back-end utilizando <Span>Node.js</Span> com <Span>JavaScript</Span> e <Span>TypeScript</Span>. Construo desde APIs robustas em <Span>Express</Span> até microsserviços com <Span>NestJS</Span>. Tenho experiência prática na otimização de aplicações para cenários de alta demanda, implementando estratégias de cache, indexação de bancos de dados e refinamento de consultas para garantir máxima performance.
            </p>
          </div>

          <div className="l-stack-start gap-4 text-start">
            <strong className="text-2xl">Nuvem & Infraestrutura</strong>
            <p className="text-slate-400">
              Domínio da infraestrutura <Span>AWS</Span> no dia a dia, cobrindo desde o deploy de SPAs e SSR até arquiteturas serverless e microsserviços. Possuo experiência prática com os principais serviços do ecossistema, incluindo <Span>Lambda</Span>, <Span>API Gateway</Span>, <Span>DynamoDB</Span>, <Span>RDS</Span>, <Span>S3</Span>, <Span>Glue</Span>, <Span>Redshift</Span>, <Span>SNS</Span>, <Span>CloudFront</Span>, entre outros.
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
    <span className={twMerge("text-blue-400", className)} {...props}>
      {children}
    </span>
  );
}
