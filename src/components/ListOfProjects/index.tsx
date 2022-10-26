import { SafeArea } from "../SafeArea";
import {
  BadgeContainer,
  BadgeTitle,
  Container,
  EmptyOption,
  Info,
  InfoContent,
  InfoSubtitle,
  InfoTitle,
  IsFreelanceContainer,
  IsFreelanceTitle,
  Link,
  Project,
  ProjectDescription,
  ProjectImage,
  ProjectImageContainer,
  ProjectInfo,
  ProjectInfoOption,
  ProjectInfoOptionTitle,
  ProjectList,
  ProjectTitle,
} from "./styles";

export const Badge = ({ children }: { children: string }) => {
  return (
    <BadgeContainer>
      <BadgeTitle>{children}</BadgeTitle>
    </BadgeContainer>
  );
};

export const ListOfProjects = () => {
  const projects = [
    {
      id: "1",
      imageUrl: "validapix-thumb.jpg",
      title: "Valida Pix - Dashboard",
      description:
        "Dashboard usado por franquias da Adidas e Reserva entre outras. O dashboard é apenas um MVP, mas é um belo MVP. Tudo esta fluído e animado sem perder performance. Na tabela de compradores é possível personalizar as colunas da tabela na ordem que quiser, isso foi feito com drag and drop. Os Gráficos foram feitos em React Charts.",
      stack: "ReactJS, Javascript, Tailwind",
      platform: "Web",
      website: "",
      github: "",
      noRepo: "Repositório privado. Entre em contato para mais detalhes",
      noWebsite: "Website privado. Entre em contato para mais detalhes",
      isFreelance: true,
    },
    {
      id: "2",
      imageUrl: "purplenotes-thumb.jpg",
      title: "Purple Notes",
      description:
        "É uma aplicação full-stack para anotações. Você pode acessar de qualquer lugar porque fica tudo salvo na nuvem!",
      stack:
        "Typescript, Javascript, Next.js, React Native, Chakra-UI, Native-base, Node.js, Express, MongoDB",
      platform: "Web, Mobile",
      website: "https://purplenotes.vercel.app",
      github: "https://github.com/josuenm/purplenotes-front-end",
      isFreelance: false,
      noRepo: "",
      noWebsite: "",
    },
    {
      id: "3",
      title: "Dashvelar",
      imageUrl: "dashvelar.png",
      stack:
        "React.js, Vite, Typescript, Tailwind, Syncfusion, React Router, React Icons",
      website: "https://josuenm-dashvelar.web.app",
      github: "https://github.com/josuenm/dashvelar",
      isFreelance: false,
      noRepo: "",
      noWebsite: "",
      platform: "Web",
      description:
        "Lindo dashboard feito de forma totalmente produtiva, os componentes estão funcionais e responsivos!",
    },
    {
      id: "4",
      title: "Pretty Form",
      imageUrl: "pretty-form-thumb.jpg",
      stack: "React.js, Typescript, Styled-Components",
      website: "https://pretty-form.web.app",
      github: "https://github.com/josuenm/pretty-form",
      isFreelance: false,
      noRepo: "",
      noWebsite: "",
      platform: "Web",
      description:
        "Esse lindo formulário foi para concluir oque eu sei sobre react-hook-form e yup",
    },
    {
      id: "5",
      title: "Netflix Clone",
      stack: "React.js, SASS",
      imageUrl: "netflixclone-thumb.jpg",
      website: "https://josuenm.github.io/netflix/",
      github: "https://github.com/josuenm/netflix",
      isFreelance: false,
      noRepo: "",
      noWebsite: "",
      platform: "Web",
      description:
        "Essa aplicação é um clone do Linkedin, foi usado React e firebase",
    },
    {
      id: "6",
      title: "Linkedin Clone",
      imageUrl: "linkedinclone-thumb.jpg",
      stack: "React.js, Javascript, SASS, Firebase",
      website: "https://linkedin-clone-6deba.web.app",
      github: "https://github.com/josuenm/linkedin-clone",
      isFreelance: false,
      noRepo: "",
      noWebsite: "",
      platform: "Web",
      description:
        "Essa aplicação é um clone do Linkedin, foi usado React e firebase",
    },
    {
      id: "7",
      title: "Moldes mágicos",
      imageUrl: "magic-molds-thumb.jpg",
      stack: "HTML, SASS, Javascript",
      website: "https://moldesmagicos.com",
      github: "https://github.com/josuenm/lp-fabiano",
      isFreelance: true,
      noRepo: "",
      noWebsite: "",
      platform: "Web",
      description:
        "Essa foi uma landing page focada em vendas para o público com mais idade, então o foco foi fazer algo simples. Atualmente o info-produtor deste produto esta tendo um ótimo lucro",
    },
    {
      id: "8",
      title: "Simplesmente Amigurumi",
      imageUrl: "simply-amigurumi-thumb.jpg",
      stack: "HTML, SASS, Javascript",
      website: "https://amigurumiultrasecreto.com.br/pt/",
      github: "https://github.com/josuenm/lp-croche",
      isFreelance: true,
      noRepo: "",
      noWebsite: "",
      platform: "Web",
      description:
        'Essa Landing Page é focada em vendas dentro e fora do Brasil, foi modernizada como o cliente pediu mas sem deixar de ser simples porquê o público alvo tem mais idade. A Landing Page existe tanto na versão Português como na versão em Espanhol, para alterar apenas clique no link da página retire a rota "/pt" e coloque "/es"',
    },
    {
      id: "9",
      title: "Pacote de moldes",
      imageUrl: "molds-pack-thumb.jpg",
      stack: "HTML, SASS, Javascript",
      website: "https://pacotedemoldes.com",
      github: "https://github.com/josuenm/lp-fabiano-02",
      platform: "Web",
      isFreelance: true,
      noRepo: "",
      noWebsite: "",
      description:
        "Essa Landing Page foi focada em vendas de baixo preço, e o público alvo foi os mais velhos, então o foco foi na simplicidade mas sem abrir mão de um toque de modernidade como o cliente pediu",
    },
  ];

  return (
    <Container>
      <SafeArea>
        <Info>
          <InfoContent>
            <InfoSubtitle>Trabalhos</InfoSubtitle>
            <InfoTitle>Projetos</InfoTitle>
            <InfoTitle>Selecionados</InfoTitle>
          </InfoContent>
        </Info>

        <ProjectList>
          {projects.map((project) => (
            <Project key={project.id}>
              {project.isFreelance && (
                <IsFreelanceContainer>
                  <IsFreelanceTitle>Freelance</IsFreelanceTitle>
                </IsFreelanceContainer>
              )}

              <ProjectImageContainer>
                <ProjectImage
                  src={`/images/${project.imageUrl}`}
                  alt={project.title}
                  layout="fill"
                />
              </ProjectImageContainer>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>

              <ProjectInfo>
                <ProjectInfoOption>
                  <Badge>Stack</Badge>
                  <ProjectInfoOptionTitle>
                    {project.stack}
                  </ProjectInfoOptionTitle>
                </ProjectInfoOption>
                <ProjectInfoOption>
                  {project.website ? (
                    <>
                      <Badge>Website</Badge>
                      <Link href={project.website} target="_blank">
                        {project.website}
                      </Link>
                    </>
                  ) : (
                    <EmptyOption>{project.noWebsite}</EmptyOption>
                  )}
                </ProjectInfoOption>
                <ProjectInfoOption>
                  {project.github ? (
                    <>
                      <Badge>Github</Badge>
                      <Link href={project.github} target="_blank">
                        {project.github}
                      </Link>
                    </>
                  ) : (
                    <EmptyOption>{project.noRepo}</EmptyOption>
                  )}
                </ProjectInfoOption>
              </ProjectInfo>
            </Project>
          ))}
        </ProjectList>
      </SafeArea>
    </Container>
  );
};
