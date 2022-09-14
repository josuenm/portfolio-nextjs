import { Container, ScrollerRow, ScrollerText, ScrollerWrapper } from "./styles";



interface ScrollerContainerProps {
    children: React.ReactNode[] | React.ReactNode;
}



interface ScrollerProps {
    words: string[];
    speed: string;
}





export function ScrollerContainer({children} : ScrollerContainerProps) {
    return (
        <Container>
            {children}
        </Container>
    )
}





export function Scroller({ words, speed }: ScrollerProps) {
    return (
        <ScrollerWrapper>
            <ScrollerRow speed={speed} numbersOfWords={words.length}>

                {words.map((word, index) => (
                    <ScrollerText key={index}>{word}</ScrollerText>
                ))}

                {words.map((word, index) => (
                    <ScrollerText key={index}>{word}</ScrollerText>
                ))}
            
            </ScrollerRow>
        </ScrollerWrapper>
    )
}