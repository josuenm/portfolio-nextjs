import { SafeArea } from "../safe-area";

export default function AboutMe2() {
  return (
    <SafeArea className="l-stack-center min-h-[500px] my-32" id="about">
      <p className="text-4xl md:text-5xl text-neutral-400 scroll-animate">
        Agora estou desenvolvendo usando <span className="text-white">PJ</span>{" "}
        da empresa <span className="text-white">Tech Flow Solutions</span> junto
        com o co-fundador da <span className="text-white">ValidaPix</span>. A{" "}
        <span className="text-white">Tech Flow Solutions</span> é um Software
        House que entrega sistemas de ótima qualidade
      </p>
    </SafeArea>
  );
}
