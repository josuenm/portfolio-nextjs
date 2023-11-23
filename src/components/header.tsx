import Image from "next/image";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Button, Modal } from ".";
import { SafeArea } from "./safe-area";

export function Header() {
  const [active, setActive] = useState(false);
  const [contactModal, setContactModal] = useState(false);
  const [mobileModal, setMobileModal] = useState(false);

  useEffect(() => {
    const handleHeader = () => {
      if (window.scrollY > 10) return setActive(true);
      setActive(false);
    };

    window.addEventListener("scroll", handleHeader);

    return () => {
      window.removeEventListener("scroll", handleHeader);
    };
  }, []);

  return (
    <>
      <header
        className={twMerge(
          "fixed top-0 z-50 left-0 w-full bg-black/30 duration-300 border-b border-transparent",
          active && "backdrop-blur border-neutral-800"
        )}
      >
        <SafeArea className="l-inline-between-center py-3">
          <Image
            src="/icons/logo.svg"
            width={500}
            height={500}
            alt="Logo"
            className="w-8"
          />

          <button
            className={twMerge(
              "relative md:hidden after:duration-300 before:duration-300 w-8 h-5 after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-[2px] after:bg-neutral-600 after:rounded-full before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-neutral-600 before:rounded-full",
              mobileModal &&
                "after:rotate-45 after:top-2/4 after:-translate-y-2/4 before:-rotate-45 before:top-2/4 before:-translate-y-2/4"
            )}
            onClick={() => setMobileModal((prev) => !prev)}
          />

          <ul className="hidden md:l-inline-start-center gap-10">
            <li className="font-medium text-base text-neutral-300 duration-300 hover:opacity-50">
              <a href="#presentation">Inicio</a>
            </li>
            <li className="font-medium text-base text-neutral-300 duration-300 hover:opacity-50">
              <a href="#development">Desenvolvimento</a>
            </li>
            <li className="font-medium text-base text-neutral-300 duration-300 hover:opacity-50">
              <a href="#aboutMe">Sobre mim</a>
            </li>
            <li className="font-medium text-base text-neutral-300 duration-300 hover:opacity-50">
              <a href="#networking">Minhas redes</a>
            </li>
            <li className="font-medium text-base text-neutral-300 duration-300 hover:opacity-50">
              <a href="#projects">Projetos</a>
            </li>
            <li>
              <Button.Outline onClick={() => setContactModal(true)}>
                Entrar em contato
              </Button.Outline>
            </li>
          </ul>
        </SafeArea>
      </header>

      <ul
        className={twMerge(
          "fixed -top-[100vh] duration-300 -mt-px pt-8 left-0 pl-4 border-b border-neutral-800 z-50 bg-black/30 backdrop-blur w-full min-h-screen l-stack-start md:hidden",
          mobileModal && "top-14"
        )}
      >
        <li className="font-medium text-base text-neutral-300 duration-300 hover:opacity-50">
          <a href="#presentation" className="block w-full py-6">
            Inicio
          </a>
        </li>
        <li className="font-medium text-base text-neutral-300 duration-300 hover:opacity-50">
          <a href="#development" className="block w-full py-6">
            Desenvolvimento
          </a>
        </li>
        <li className="font-medium text-base text-neutral-300 duration-300 hover:opacity">
          <a href="#aboutMe" className="block w-full py-6">
            Sobre mim
          </a>
        </li>
        <li className="font-medium text-base text-neutral-300 duration-300 hover:opacity-50">
          <a href="#networking" className="block w-full py-6">
            Minhas redes
          </a>
        </li>
        <li className="font-medium text-base text-neutral-300 duration-300 hover:opacity">
          <a href="#projects" className="block w-full py-6">
            Projetos
          </a>
        </li>
        <li className="mt-8">
          <Button.Outline onClick={() => setContactModal(true)}>
            Entrar em contato
          </Button.Outline>
        </li>
      </ul>

      <Modal
        isOpen={contactModal}
        onClose={() => setContactModal(false)}
        className="text-center text-lg"
      >
        <p className="mb-4">Fomulário estará disponível em breve!</p>
        <p>Mas pode me enviar um e-mail: direct.josue@gmail.com</p>
      </Modal>
    </>
  );
}
