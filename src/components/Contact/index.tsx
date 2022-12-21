import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ContactContext, ContactContextType } from "src/contexts/contact";
import api from "src/services/axios";
import * as yup from "yup";
import {
  Background,
  Cancel,
  Container,
  ErrorMessage,
  Form,
  FormGroup,
  FormSent,
  FormSentMessage,
  Input,
  Label,
  ModalContainer,
  Spinner,
  Submit,
} from "./styles";

interface IFormInputs {
  name: string;
  email: string;
  phoneNumber: string;
}

const schema = yup
  .object({
    name: yup.string().required("O campo é obrigatório"),
    email: yup
      .string()
      .email("E-mail inválido")
      .required("O campo é obrigatório"),
    phoneNumber: yup
      .string()
      .min(7, "Número inválido")
      .max(20, "Número inválido")
      .required("O campo é obrigatório"),
  })
  .required();

export function Contact() {
  const { toggle } = useContext(ContactContext) as ContactContextType;
  const handleClose = () => toggle(false);

  const [isSent, setIsSent] = useState(false);
  const [backEndError, setBackEndError] = useState<boolean | string>(false);
  const [sendingForm, setSendingForm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: IFormInputs) => {
    setSendingForm(true);
    setBackEndError(false);

    const response = await api
      .post("/contact", data)
      .then((res) => res)
      .catch((err) => err.response);

    switch (response.status) {
      case 200:
        localStorage.setItem("josuenm.form", "sent");
        setIsSent(true);
        break;

      default:
        setSendingForm(false);
        setBackEndError("Aconteceu um erro, tente novamente");
        break;
    }
  };

  useEffect(() => {
    localStorage.getItem("josuenm.form") && setIsSent(true);
  }, []);

  if (isSent) {
    return (
      <Container>
        <Background onClick={handleClose} />
        <FormSent>
          <FormSentMessage>Formulário enviado!</FormSentMessage>
          <FormSentMessage>Entrarei em contato em breve</FormSentMessage>
        </FormSent>
      </Container>
    );
  }

  return (
    <Container>
      <Background onClick={handleClose} />
      <ModalContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label htmlFor="name">Nome:</Label>
            <Input
              id="name"
              placeholder="Digite seu nome..."
              {...register("name")}
            />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email:</Label>
            <Input
              id="email"
              placeholder="Digite seu email..."
              {...register("email")}
            />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="phoneNumber">Telefone/Celular:</Label>
            <Input
              id="phoneNumber"
              placeholder="Digite seu telefone ou celular..."
              {...register("phoneNumber")}
            />
            {errors.phoneNumber && (
              <ErrorMessage>{errors.phoneNumber.message}</ErrorMessage>
            )}
          </FormGroup>

          {backEndError && <ErrorMessage>{backEndError}</ErrorMessage>}
          {sendingForm ? (
            <Spinner />
          ) : (
            <Submit value="Enviar" disabled={sendingForm} />
          )}
          <Cancel onClick={handleClose}>Cancelar</Cancel>
        </Form>
      </ModalContainer>
    </Container>
  );
}
