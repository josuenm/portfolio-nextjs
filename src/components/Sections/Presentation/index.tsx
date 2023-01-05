import { useContext } from "react";
import { Link } from "react-scroll";
import { Button } from "src/components/Button";
import { Contact } from "src/components/Contact";
import { SafeArea } from "src/components/SafeArea";
import { ContactContext, ContactContextType } from "src/contexts/contact";
import {
  ButtonsContainer,
  Container,
  Description,
  Title,
  TitleContainer,
} from "./styles";

export function Presentation() {
  const { isOpen, toggle } = useContext(ContactContext) as ContactContextType;

  function handleContact() {
    toggle(true);
  }

  return (
    <>
      {isOpen && <Contact />}
      <SafeArea>
        <Container id="presentation">
          <TitleContainer>
            <Title className="first-gradient">Full-Stack</Title>
            <Title className="second-gradient">Developer</Title>
          </TitleContainer>

          <ButtonsContainer>
            <Button title="Entrar em contato" onClick={handleContact} />
            <Link to="projects" smooth={true} offset={-100}>
              <Button title="Ver projetos" outline />
            </Link>
          </ButtonsContainer>

          <Description>
            Neste portfolio vou tentar mostrar um pouco mais sobre minha
            experiência com programação.
          </Description>
        </Container>
      </SafeArea>
    </>
  );
}
