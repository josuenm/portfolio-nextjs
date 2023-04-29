import Mockup from "src/assets/macbook_mockup.svg";
import { Checkpoint } from "src/components/Checkpoint";
import { SafeArea } from "src/components/SafeArea";
import { Scroller, ScrollerContainer } from "src/components/Scroller";
import { SectionTitle } from "src/components/SectionTitle";
import {
  Container,
  DescriptionContainer,
  DescriptionText,
  InfoContainer,
  InfoDescription,
  InfoSet,
  InfoTitle,
  MainDescriptionContainer,
  Modal,
  ModalContainer,
} from "./styles";

export function MyDevelopment() {
  const firstWords = [
    "ReactJS",
    "NextJS",
    "ChakraUI",
    "Bootstrap",
    "HTML",
    "CSS",
    "SASS",
    "NodeJS",
    "Express",
    "Tailwind",
    "MySQL",
    "Git",
  ];

  const secondWords = [
    "Javascript",
    "Typescript",
    "GSAP",
    "React-Hook-Form",
    "Styled-components",
    "Axios",
    "Mongoose",
    "MongoDB",
    "React Native",
    "TypeORM",
    "Docker",
    "PostgreSQL",
  ];

  return (
    <Container id="development">
      <SafeArea>
        <Checkpoint
          title="Desenvolvimento"
          phrase="Perfeito é melhor que feito"
          chapter={2}
        />

        <SectionTitle title="A minha forma de desenvolver" />

        <DescriptionContainer>
          <DescriptionText>
            Atualmente estou usando o <span>Neovim</span> e o{" "}
            <span>VS Code</span> como editor de código, meu <span>Neovim</span>{" "}
            é totalmente modificado e eu gosto disso mas ainda faço praticamente
            tudo com o <span>VS Code</span> por ser mais produtivo para mim no
            momento.
          </DescriptionText>

          <DescriptionText>
            Como eu estou trabalhando com <span>PHP</span> e{" "}
            <span>Laravel</span> eu preciso aprender mais sobre a linguagem e o
            framework para dominar completamente. No tempo livre além de estudar
            eu atendo alguns freelas assim que possível.
          </DescriptionText>
        </DescriptionContainer>

        <MainDescriptionContainer>
          <ModalContainer>
            <Modal src={Mockup} layout="fill" alt="Macbook" />
          </ModalContainer>

          <InfoContainer>
            <InfoSet>
              <InfoTitle>Front-end</InfoTitle>

              <InfoDescription>
                A minha stack básica do front-end web é{" "}
                <span>HTML, CSS, SASS, Javascript</span> ou{" "}
                <span>Typescript</span> e <span>Bootstrap</span>. Além disso eu
                uso <span>React</span> e <span>Next.js</span> para criações de
                grandes interfaces, também gosto de usar o{" "}
                <span>Chakra-UI</span> e <span>Tailwind</span> porque me traz
                muita produtividade. Fazer um bom trabalho no front-end para mim
                é se preocupar com a performance, feedback visual para o
                usuário, autenticação segura e usar técnicas para criação de
                interfaces modernas. Também utilizo o Figma, nele consigo criar
                SVGs incríveis e planejar layouts antes de codar.
              </InfoDescription>
            </InfoSet>

            <InfoSet>
              <InfoTitle>Mobile com React Native</InfoTitle>

              <InfoDescription>
                No desenvolvimento mobile eu uso <span>React Native</span> com{" "}
                <span>Expo</span> e já usei o <span>Native Base</span> que é
                praticamente uma cópia do <span>Chakra-UI</span> que como eu
                disse me traz muita produtividade, e com o{" "}
                <span>Native Base</span> não foi diferente, mas mesmo assim eu
                reconheço que o <span>Native Base</span> não é a melhor opção
                para performance do app. Ainda não sou um expert em
                desenvolvimento mobile mas consigo contruir interfaces de ótima
                qualidade e até fazer uma autenticação de usuário usando o Async
                Storage.
              </InfoDescription>
            </InfoSet>

            <InfoSet>
              <InfoTitle>Back-End em Node</InfoTitle>

              <InfoDescription>
                O back-end nunca foi o meu foco, mas ultimamente tenho gostado
                bastante e estou progredindo mais. Tenho tentado aplicar o{" "}
                <span>S.O.L.I.D.</span>, isso me fez pensar de uma outra forma
                colocando cada responsabilidade no seu lugar, isso me trouxe
                organização e fácil manutenção no código. Para fazer tudo isso
                eu utilizo o <span>Express</span> com o <span>Node</span>.
              </InfoDescription>
            </InfoSet>
          </InfoContainer>
        </MainDescriptionContainer>

        <ScrollerContainer>
          <Scroller words={firstWords} speed="35s" />
          <Scroller words={secondWords} speed="40s" />
        </ScrollerContainer>
      </SafeArea>
    </Container>
  );
}
