import { SafeArea } from "../safe-area";

export default function AboutMe2() {
  return (
    <SafeArea className="l-stack-center min-h-[500px] my-32" id="about">
      <p className="text-4xl md:text-5xl text-neutral-400 scroll-animate">
        Agora os contratos de projetos vão ser feitos pela{" "}
        <span className="text-white">Workana</span> para realizar projetos de
        freelancer
      </p>
    </SafeArea>
  );
}
