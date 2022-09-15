import ProfilePicture from "src/assets/images/profile.jpg";
import { Checkpoint } from "src/components/Checkpoint";
import { SafeArea } from "src/components/SafeArea";
import {
  Container,
  Content,
  Description,
  Info,
  ProfileContainer,
  ProfileImage,
  Title,
} from "./styles";

export const AboutMe = () => {
  return (
    <Container>
      <SafeArea>
        <Checkpoint title="Sobre mim" phrase="A maquina humana" chapter={1} />
        <Content>
          <Info>
            <Title>Sobre mim</Title>
            <Description>
              Sou um jovem de 19 anos que mora no interior de{" "}
              <span>São Paulo</span>, mais especificamente em{" "}
              <span>Jacareí</span>. Sempre gostei de tecnologia mas me
              interessei por programar quando eu vi um cara desenvolvendo um
              app, e então eu tentei desenvolver o meu próprio mas era
              extremamente difícil.
            </Description>
            <Description>
              Então eu decidi que queria começar essa jornada, e optei por
              começar pela lógica de programação com o <span>Portugol</span>, e
              depois fui avançando no desenvolvimento web.
            </Description>
            <Description>
              Aprendi tudo sozinho, foi díficil mas a cada problema solucionado,
              a cada interface concluída eu reconhecia que eu estava pegando o
              jeito. Hoje em dia já sei muita coisa e consigo ajudar outras
              desenvolvedores que estão na área.
            </Description>
          </Info>

          <ProfileContainer>
            <ProfileImage
              src={ProfilePicture}
              alt="Profile image"
              layout="fill"
            />
          </ProfileContainer>
        </Content>
      </SafeArea>
    </Container>
  );
};
