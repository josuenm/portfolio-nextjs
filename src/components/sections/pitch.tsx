import { Button, Modal, SafeArea } from "@src/components";
import Image from "next/image";
import { useState } from "react";

export default function Pitch() {
  const [contactModal, setContactModal] = useState(false);

  return (
    <SafeArea className="py-24 l-stack-start-center text-center" id="pitch">
      <div className="bg-primary/10 w-full rounded-xl py-24 px-8 l-stack-start md:l-inline-start gap-12">
        <Image
          src="/icons/bubble-pitch.svg"
          width={500}
          height={500}
          alt="Bubble"
          className="w-full md:w-[25%]"
        />
        <div className="text-start">
          <strong className="text-primary text-xl max-w-xs">
            Faço sua empresa decolar com sistemas incríveis.
          </strong>
          <p className="text-slate-400 mt-3 w-full max-w-lg">
            Se você procura um desenvolvedor para fazer um sistema que seja
            bonito, funcional e com muita acessibilidade para seu público não
            ter dificuldades, você esta no lugar certo! Entre em contato comigo
            e podemos marcar um dia na agenda para conversar e dizer sobre o
            orçamento
          </p>
        </div>

        <Button.Normal
          className="my-auto md:ml-auto"
          onClick={() => setContactModal(true)}
        >
          Entre em contato
        </Button.Normal>
      </div>

      <Modal
        isOpen={contactModal}
        onClose={() => setContactModal(false)}
        className="text-center text-lg"
      >
        <p className="mb-4">Fomulário estará disponível em breve!</p>
        <p>Mas pode me enviar um e-mail: direct.josue@gmail.com</p>
      </Modal>
    </SafeArea>
  );
}
