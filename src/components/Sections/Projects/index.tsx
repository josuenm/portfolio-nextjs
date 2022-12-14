import { Checkpoint } from "src/components/Checkpoint";
import { ListOfProjects } from "src/components/ListOfProjects";
import { SafeArea } from "src/components/SafeArea";
import { SectionTitle } from "src/components/SectionTitle";
import { Container, Description } from "./styles";

export function Projects() {
  return (
    <SafeArea>
      <Container id="projects">
        <Checkpoint
          phrase="Desistir nunca foi uma opção"
          chapter={4}
          title="Projetos"
        />

        <SectionTitle title="Alguns dos meus projetos" />
        <Description>
          Aqui tem alguns dos meus projetos, veja o <span>repositório</span> e{" "}
          <span>página</span> ou aplicativo dos projetos.
        </Description>

        <ListOfProjects />
      </Container>
    </SafeArea>
  );
}
