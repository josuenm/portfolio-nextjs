import { useContext } from "react";
import { Button } from "src/components/Button";
import { ContactContext, ContactContextType } from "src/contexts/contact";
import { Container, Warning } from "./styles";






export function Footer() {

    const { toggle } = useContext(ContactContext) as ContactContextType;

    return (
        <Container>
            <Button title="Entre em contato" onClick={() => toggle(true)} />

            <Warning>
                Esse portfolio foi desenvolvido usando NextJS, Styled-Components, Context-API, TypeScript, NodeJS, Express e MongoDB
            </Warning>
        </Container>
    )
}