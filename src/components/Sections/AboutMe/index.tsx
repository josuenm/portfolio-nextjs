import Logo from "src/assets/icons/Logo.svg";
import ProfilePicture from "src/assets/images/profile11.jpg";
import LogoBrand from "src/assets/rounded_brand.svg";
import { Checkpoint } from "src/components/Checkpoint";
import { SafeArea } from "src/components/SafeArea";
import {
  Container,
  Content,
  Description,
  Info,
  LogoBrandContainer,
  LogoBrandImage,
  LogoImage,
  ProfileContainer,
  ProfileImage,
  Title,
} from "./styles";

export const AboutMe = () => {
  return (
    <Container id="aboutMe">
      <SafeArea>
        <Checkpoint
          title="Sobre mim"
          phrase="A mente por trás de tudo"
          chapter={1}
        />
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
              jeito. Hoje em dia já sei muita coisa e consigo ajudar outros
              desenvolvedores que estão na área.
            </Description>
            <Description>
              Meu projeto mais relevante é a <span>ValidaPix</span> aonde criei
              um dashboard que esta sendo usado por várias franquias pelo Brasil
              como <span>Adidas</span>,<span>Reserva</span>,{" "}
              <span>Cacau Show</span> entre outras. Com essas franquias já
              acomodei milhões em pix de forma super performática no dashboard.
            </Description>
            <Description>
              Atualmente trabalho como programador <span>PHP</span> na VochTech.
            </Description>
          </Info>

          <ProfileContainer>
            <LogoBrandContainer>
              <LogoImage
                src={Logo}
                alt="Logo"
                layout="fixed"
                width={50}
                height={50}
              />
              <LogoBrandImage src={LogoBrand} alt="Logo Brand" layout="fill" />
            </LogoBrandContainer>
            <ProfileImage
              src={ProfilePicture}
              alt="Profile image"
              width={350}
              height={460}
            />
          </ProfileContainer>
        </Content>
      </SafeArea>
    </Container>
  );
};
