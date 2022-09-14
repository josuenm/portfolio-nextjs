import { Container } from "./styles";


interface ButtonProps {
    title: string;
    type?: "button" | "submit";
    outline?: boolean;
    onClick?: () => void;
}




export function Button({ 
    title, 
    type = "button", 
    outline = false, 
    ...rest
}: ButtonProps) {



    return (
        <Container type={type} className={outline?'outline':'painted'} {...rest}>
            {title}
        </Container>
    )
}