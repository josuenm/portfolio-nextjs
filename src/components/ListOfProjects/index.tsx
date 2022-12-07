import { projects } from "src/utils/projects";
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
                  <Badge>Platform</Badge>
                  <ProjectInfoOptionTitle>
                    {project.platform}
                  </ProjectInfoOptionTitle>
                </ProjectInfoOption>
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
