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
    "React Native (EXPO)",
  ];

  const technologies = [
    {
      id: 1,
      name: "Javascript",
      experience: "1 a 2 anos",
    },
    {
      id: 2,
      name: "Typescript",
      experience: "1 a 2 anos",
    },
    {
      id: 3,
      name: "ReactJS",
      experience: "1 a 2 anos",
    },
    {
      id: 4,
      name: "React Native",
      experience: "menos de 1 ano",
    },
    {
      id: 5,
      name: "NextJS",
      experience: "menos de 1 ano",
    },
    {
      id: 6,
      name: "Redux Toolkit",
      experience: "menos de 1 ano",
    },
    {
      id: 7,
      name: "SASS",
      experience: "1 a 2 anos",
    },
    {
      id: 8,
      name: "NodeJS",
      experience: "menos de 1 ano",
    },
    {
      id: 9,
      name: "Express",
      experience: "menos de 1 ano",
    },
    {
      id: 10,
      name: "MongoDB",
      experience: "menos de 1 ano",
    },
  ];

  return (
    <Container id="development">
      <SafeArea>
        <Checkpoint
          title="Desenvolvimento"
          phrase="Perfeito é melhor que feito"
          chapter={1}
        />

        <SectionTitle title="A minha forma desenvolvimento" />

        <DescriptionContainer>
          <DescriptionText>
            Adoro usar o <span>Figma</span> para criar <span>SVGs</span> e
            planejar o layout da aplicação, tenho avançado bastante com ele.
            Também estou fazendo o uso do <span>Typescript</span> em todas as
            aplicações que crio, já não consigo ficar sem ele.
          </DescriptionText>

          <DescriptionText>
            No back-end estou aprendendo mais sobre o <span>Docker</span>,
            grandes aplicações tem vários banco de dados e até vários back-ends,
            com o <span>Docker</span> eu consigo deixar tudo isso rodando em
            segundo plano sem precisar abrir vários terminais.
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
                <span>Typescript</span> e <span>Bootstrap</span> mas estou de
                olho no
                <span>Tailwind</span>. Indo mais além eu uso <span>React</span>{" "}
                e <span>Next.js</span> para criações de grandes interfaces,
                também gosto de usar o <span>Chakra-UI</span>, porque me traz
                muita produtividade. Fazer um bom trabalho no front-end para mim
                é se preocupar com a performance, feedback visual para o
                usuário, autenticação segura e abusar de técnicas para criação
                de interfaces modernas.
              </InfoDescription>
            </InfoSet>

            <InfoSet>
              <InfoTitle>Mobile com React Native</InfoTitle>

              <InfoDescription>
                Com <span>React Native</span> eu uso na o <span>Expo</span> e já
                usei o <span>Native Base</span> que é uma cópia do{" "}
                <span>Chakra-UI</span> que como eu disse me traz muita
                produtividade, e com o <span>Native Base</span> foi igual. Ainda
                não sou um expert em desenvolvimento mobile mas consigo contruir
                interfaces legais e autenticação de usuário.
              </InfoDescription>
            </InfoSet>

            <InfoSet>
              <InfoTitle>Back-End em Node</InfoTitle>

              <InfoDescription>
                O back-end nunca foi o meu foco, mas ultimamente tenho gostado
                bastante e estou progredindo mais. Tenho tentado aplicar o
                <span>S.O.L.I.D.</span> em todas minhas aplicações que começo,
                isso me fez pensar de uma outra forma deixando a aplicação com
                uma cara organizada. Para fazer tudo isso eu utilizo o{" "}
                <span>Express</span> com o <span>Node</span>
                porque é simples, mas estou de olho no <span>
                  Adonis
                </span> e <span>Nest</span> que são bem mais robustos.
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
