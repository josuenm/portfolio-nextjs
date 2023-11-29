import { Button } from "..";
import { SafeArea } from "../safe-area";

export default function Pitch() {
  return (
    <div
      className="l-stack-start bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 py-12 scroll-animate"
      id="pitch"
    >
      <SafeArea className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-6">
          <p className="text-4xl">Entre em contato agora.</p>

          <p className="text-xl mt-4">
            Entrarei em contato com você o mais breve possível para falarmos
            sobre o seu projeto e orçamento
          </p>
        </div>

        <div className="col-span-12 md:col-span-6 l-inline-center-center">
          <a href="#contact">
            <Button.Normal className="mt-12 md:mt-0">
              Entrar em contato
            </Button.Normal>
          </a>
        </div>
      </SafeArea>
    </div>
  );
}
