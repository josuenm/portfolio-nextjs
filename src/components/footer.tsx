import Image from "next/image";
import { SafeArea } from "./safe-area";

export function Footer() {
  return (
    <footer className="mt-52 w-full border-t border-neutral-800 py-12">
      <SafeArea>
        <Image
          src="/icons/logo.svg"
          width={500}
          height={500}
          alt="Logo"
          className="mx-auto w-12 mb-8"
        />

        <p className="text-center">2023 - Todos direitos reservados</p>
      </SafeArea>
    </footer>
  );
}
