import { twMerge } from "tailwind-merge";
import { Flag, SafeArea } from "..";

type SpanProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

export default function Projects() {
  return (
    <SafeArea className="py-24 l-stack-start-center text-center" id="projects">
      <Flag step={3} subtitle="Desistir nunca foi uma opção" title="Projetos" />

      <p className="text-center text-2xl md:text-4xl font-bold text-neutral-500 mt-24   ">
        Meus <span className="text-white">projetos</span> estarão disponíveis em{" "}
        <span className="text-white">breve!</span>
      </p>
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
