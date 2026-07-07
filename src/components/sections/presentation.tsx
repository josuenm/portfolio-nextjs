import { Button, SafeArea } from "@src/components";
import { useState } from "react";

export default function Presentation() {
  const [contactModal, setContactModal] = useState(false);

  return (
    <SafeArea
      className="py-36 l-stack-start-center text-center"
      id="presentation"
    >
      <div className="text-[4rem] md:text-[12rem] font-bold md:leading-tight">
        <p className="first-gradient">Josué</p>
        <p className="second-gradient -mt-5 md:-mt-12">Mendonça</p>
      </div>
      <p className="text-slate-400 mt-8 max-w-2xl w-full text-xs md:text-base">
        Neste portfolio vou resumir minha vida profissional
        como desenvolvedor de software
      </p>
      <div className="mt-8 l-stack-start md:l-inline-center-center gap-4 md:gap-12">
        <a href="#contact">
          <Button.Normal
            className="min-w-[200px]"
            onClick={() => setContactModal(true)}
          >
            Entrar em contato
          </Button.Normal>
        </a>

        <a href="#projects">
          <Button.Outline className="min-w-[200px]">
            Ver projetos
          </Button.Outline>
        </a>
      </div>
    </SafeArea>
  );
}
