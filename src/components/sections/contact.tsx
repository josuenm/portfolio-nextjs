import Link from "next/link";
import { useState } from "react";
import VMasker from "vanilla-masker";
import { Button, Form, SafeArea } from "../";

export default function Contact() {
  const [data, setData] = useState({
    name: "",
    phone: "",
    reason: "",
  });

  const changeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <SafeArea className="l-stack-start-center min-h-[500px] my-32" id="contact">
      <div className="grid grid-cols-12 w-full">
        <div className="col-span-12 md:col-span-6 l-stack-start gap-3 w-full mb-8 md:mb-0">
          <p className="text-4xl md:text-5xl text-center w-full md:w-fit">
            Contato
          </p>
          <p className="text-2xl md:text-3xl max-w-sm text-neutral-400 mt-4">
            Estou disponível <span className="text-white">todos os dias</span>{" "}
            das <span className="text-white">8h até 00:00</span>
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 md:l-inline-end">
          <form className="relative overflow-hidden w-full l-stack-start gap-8 border border-neutral-900 rounded-md py-8 px-4 md:px-24">
            <div
              className="absolute top-0 left-0 right-0 w-full min-h-[600px] -z-10"
              style={{
                background:
                  "radial-gradient(circle at -10% 0%, rgba(0, 133, 255, .2), rgba(255, 255, 255, 0) 25%), radial-gradient(circle at 90% 100%, rgba(0, 133, 255, .2), rgba(255, 255, 255, 0) 25%)",
              }}
            />

            <div className="l-stack-start gap-2">
              <label htmlFor="name">Seu nome</label>
              <Form.Input
                placeholder="Digite seu nome"
                name="name"
                id="name"
                value={data.name}
                onChange={changeInput}
              />
            </div>

            <div className="l-stack-start gap-2">
              <label htmlFor="phone">Telefone/Celular</label>
              <Form.Input
                placeholder="Digite seu número"
                name="phone"
                id="phone"
                value={VMasker.toPattern(data.phone, "(99) 99999-9999")}
                onChange={changeInput}
              />
              <p className="text-xs md:text-sm text-neutral-400">
                OBS: Vou entrar em contato primeiramente via Whatsapp
              </p>
            </div>

            <div className="l-stack-start gap-2">
              <label htmlFor="reason">
                Detalhes iniciais sobre oque você precisa
              </label>
              <Form.TextArea
                name="reason"
                id="reason"
                placeholder="Digite oque você precisa..."
                value={data.reason}
                onChange={changeInput}
              />
            </div>

            {false ? (
              <Button.Normal className="mt-8 !py-3">
                Enviar contato
              </Button.Normal>
            ) : (
              <>
                <p className="text-lg text-center">
                  Contato indisponível no momento! {":("}
                </p>
                <p className="text-center">
                  Clique no email a seguir, ou copie e cole no seu serviço de
                  email e envie-nos um email:{" "}
                  <Link
                    href="mailto:direct.josue@gmail.com"
                    target="_blank"
                    className="text-primary underline"
                  >
                    direct.josue@gmail.com
                  </Link>
                </p>
              </>
            )}
          </form>
        </div>
      </div>
    </SafeArea>
  );
}
