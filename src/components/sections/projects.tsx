import { Flag } from "..";
import { ProfessionalJourney } from "../profissional-journey";
import { SafeArea } from "../safe-area";


export default function Projects() {
  return (
    <SafeArea
      className="min-h-[1000px] my-48 l-stack-center-center gap-8"
      id="projects"
    >
      <Flag step={4} title="Projetos" subtitle="Mais do que um propósito" />

      <p className="text-4xl md:text-5xl text-center mt-4 mb-24">
        Alguns projetos
      </p>

      <ProfessionalJourney />
    </SafeArea>
  );
}
