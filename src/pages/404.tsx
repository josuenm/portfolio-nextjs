import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StatusCode = styled.h2`
  font-size: 4rem;
  color: #fff;
`;

const Text = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: #fff;
`;

const ButtonContainer = styled.div`
  margin-top: 4rem;
`;

const Button = styled.button`
  background-color: #fff;
  color: #000;
  border: 0;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 1.1rem;

  transition: ease 0.4s opacity;
  &:hover {
    opacity: 0.5;
  }
`;

const _404: NextPage = () => {
  return (
    <>
      <Head>
        <title>404 | Portfolio</title>
      </Head>

      <Container>
        <StatusCode>404</StatusCode>
        <Text>Página não encontrada</Text>

        <ButtonContainer>
          <Link href="/">
            <Button>Retornar para o início</Button>
          </Link>
        </ButtonContainer>
      </Container>
    </>
  );
};

export default _404;
