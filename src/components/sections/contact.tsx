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
            Entre em contato e tire todas suas dúvidas
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 md:l-inline-end">
          <div className="relative overflow-hidden w-full l-stack-start gap-8 text-slate-400 bg-zinc-900 border border-zinc-800 rounded-md py-8 px-4 md:px-24">
            <p className="text-center">
              Me chame no Linkedin pelo link a seguir ou me mande um e-mail{" "}
              <Link
                href="https://linkedin.com/in/josuemendonca"
                target="_blank"
                className="text-slate-200 underline"
              >
                Ir para o perfil do Linkedin
              </Link>
            </p>
            <p className="text-center">
              Ou clique no email a seguir, ou copie e cole no seu serviço de
              email e envie-me um email:{" "}
              <Link
                href="mailto:direct.josue@gmail.com"
                target="_blank"
                className="text-slate-200 underline"
              >
                direct.josue@gmail.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </SafeArea>
  );
}
