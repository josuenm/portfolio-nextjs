import { Checkpoint } from "src/components/Checkpoint";
import { ListOfProjects } from "src/components/ListOfProjects";
import { SafeArea } from "src/components/SafeArea";
import { SectionTitle } from "src/components/SectionTitle";
import { 
    Container, 
    Description, 
    
} from "./styles";






export function Projects() {
    return (
        <SafeArea>
            <Container id="projects">
                <Checkpoint 
                    phrase="Desistir nunca foi uma opção"
                    chapter={3} 
                    title="Projetos" />

                <SectionTitle title="Alguns dos meus projetos" />
                <Description>
                    Aqui tem alguns dos meus projetos, clique em qual você quer saber mais e veja o <span>repositório</span> e <span>página</span> ou aplicativo se estiver disponível.
                </Description>

                <ListOfProjects />
            </Container>
        </SafeArea>
    )
}