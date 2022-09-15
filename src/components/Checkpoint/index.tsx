import { theme } from "src/styles/theme";
import { Circle, Container, Phrase, Title, Trail } from "./styles";

interface CheckpointProps {
  phrase: string;
  chapter: number;
  title: string;
}

export function Checkpoint({ phrase, chapter, title }: CheckpointProps) {
  let gradientNormal = "" as string;
  let gradientTrail = "" as string;

  switch (chapter) {
    case 1:
      gradientNormal = theme.colors.gradientRoseNormal;
      gradientTrail = theme.colors.gradientRoseTransparent;
      break;

    case 2:
      gradientNormal = theme.colors.gradientBlueNormal;
      gradientTrail = theme.colors.gradientBlueTransparent;
      break;

    case 3:
      gradientNormal = theme.colors.gradientRedNormal;
      gradientTrail = theme.colors.gradientRedTransparent;
      break;

    case 4:
      gradientNormal = theme.colors.gradientGreenNormal;
      gradientTrail = theme.colors.gradientGreenTransparent;
      break;

    default:
      console.log({
        error: "Ocorreu um erro na seleção das cores do componente Checkpoint",
      });
      break;
  }

  return (
    <Container>
      <Phrase>{phrase}</Phrase>
      <Trail gradient={gradientTrail} />
      <Circle gradient={gradientNormal}>{chapter}</Circle>
      <Title gradient={gradientNormal}>{title}</Title>
    </Container>
  );
}
