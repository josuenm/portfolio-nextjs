import Image from "next/image";
import { Checkpoint } from "src/components/Checkpoint";
import { SafeArea } from "src/components/SafeArea";
import { SectionTitle } from "src/components/SectionTitle";
import CommentsData from "src/utils/comments";
import NetworksData from "src/utils/networks";
import {
  Button,
  CircleStick,
  CommentContainer,
  Comments,
  Container,
  DashedStick,
  Description,
  FinalStick,
  HeaderStick,
  MainContainer,
  Message,
  MessageContainer,
  Name,
  Network,
  NetworkContainer,
  NetworkDescription,
  NetworkTitle,
  PictureContainer,
  StickerMobileContainer,
  StickersContainer,
} from "./styles";

export function MyNetwork() {
  return (
    <SafeArea>
      <Container id="my-network">
        <Checkpoint
          title="Alguns dados"
          chapter={3}
          phrase="Networking is your net worth"
        />

        <SectionTitle title="Minha rede profissional" />

        <Description>
          Aqui esta minhas redes profissionais, sempre dou prefêrencia ao{" "}
          <span>LinkedIn</span>.
        </Description>

        <MainContainer>
          <Comments>
            {CommentsData.map((item) => (
              <CommentContainer key={item.id}>
                <MessageContainer>
                  <Message>{item.message}</Message>
                  <Name>
                    {item.name} ({item.profession})
                  </Name>
                </MessageContainer>
                <PictureContainer>
                  <Image
                    src={require(`src/assets/images/${item.image}`)}
                    layout="fixed"
                    alt=""
                    width={50}
                    height={50}
                    className="image"
                  />
                </PictureContainer>
              </CommentContainer>
            ))}
          </Comments>

          <StickersContainer>
            <HeaderStick />
            <CircleStick />
            <DashedStick height={170} />
            <CircleStick />
            <DashedStick height={150} />
            <CircleStick />
            <DashedStick height={140} />
            <CircleStick />
            <FinalStick />
          </StickersContainer>

          <NetworkContainer>
            {NetworksData.map((item) => (
              <div key={item.id}>
                <StickerMobileContainer>
                  <HeaderStick height={100} />
                  <CircleStick />
                </StickerMobileContainer>
                <Network>
                  <NetworkTitle>{item.name}</NetworkTitle>
                  <NetworkDescription>{item.message}</NetworkDescription>
                  {item.isDownloadable ? (
                    <Button
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download
                    </Button>
                  ) : (
                    <Button
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Acessar
                    </Button>
                  )}
                </Network>
              </div>
            ))}
          </NetworkContainer>
        </MainContainer>
      </Container>
    </SafeArea>
  );
}
