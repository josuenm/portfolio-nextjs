import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { AutoScroller, Button, Flag, SafeArea } from "..";

type SpanProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

export default function Networking() {
  return (
    <SafeArea
      className="py-24 l-stack-start-center text-center"
      id="networking"
    >
      <Flag
        step={3}
        subtitle="Currículo e redes sociais"
        title="Minha rede"
      />

      <p className="text-4xl md:text-5xl text-center scroll-animate mt-12">
        Algumas das minhas redes
      </p>

      <div className="grid grid-cols-12 gap-4 md:gap-12 my-24 text-start">
        <div className="col-span-12 md:col-span-6 l-stack-center-center mb-12 md:mb-0">

        </div>
        <div className="col-span-12 md:col-span-6 md:border-l border-dashed border-slate-400 md:pl-12">
          <div className="relative l-stack-center-center md:l-stack-start-start gap-3 pb-2 md:pb-8 md:after:content-[''] md:after:absolute after:top-2 after:-left-[54px] md:after:rounded-full after:z-0 md:after:w-3 md:after:h-3 md:after:bg-black md:after:border md:after:border-slate-400">
            <strong className="text-xl">LinkedIn</strong>
            <Link href="https://linkedin.com/in/josuenm" target="_blank">
              <Button.Outline className="w-fit px-20">Visitar</Button.Outline>
            </Link>

            <div className="md:hidden l-stack-center-center">
              <div className=" w-1 h-20 bg-gradient-to-t from-neutral-400 to-transparent rounded-full" />
              <div className="w-3 h-3 bg-neutral-400 rounded-full -mt-[2px]" />
            </div>
          </div>
          <div className="relative l-stack-center-center md:l-stack-start-start gap-3 pb-2 md:pb-8 md:after:content-[''] md:after:absolute after:top-2 after:-left-[54px] md:after:rounded-full after:z-0 md:after:w-3 md:after:h-3 md:after:bg-black md:after:border md:after:border-slate-400">
            <strong className="text-xl">Github</strong>
            <Link href="https://github.com/josuenm" target="_blank">
              <Button.Outline className="w-fit px-20">Visitar</Button.Outline>
            </Link>

            <div className="md:hidden l-stack-center-center">
              <div className=" w-1 h-20 bg-gradient-to-t from-neutral-400 to-transparent rounded-full" />
              <div className="w-3 h-3 bg-neutral-400 rounded-full -mt-[2px]" />
            </div>
          </div>
          <div className="relative l-stack-center-center md:l-stack-start-start gap-3 pb-2 md:pb-8 md:after:content-[''] md:after:absolute after:top-2 after:-left-[54px] md:after:rounded-full after:z-0 md:after:w-3 md:after:h-3 md:after:bg-black md:after:border md:after:border-slate-400">
            <strong className="text-xl">Currículo</strong>
            <p>Em breve</p>
          </div>
        </div>
      </div>

      <div className="w-full">
        <AutoScroller
          data={[
            "Essent Agro",
            "ValidaPix",
            "Sindicante Digital",
            "SavageServidores",
            "SimplismenteAmigurumis",
            "MoldesMágicos",
          ]}
          title="Algumas empresas que confiaram em mim"
        />
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
