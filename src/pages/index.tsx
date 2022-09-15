import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "src/components/Header";
import { AboutMe } from "src/components/Sections/AboutMe";
import { Footer } from "src/components/Sections/Footer";
import { MyDevelopment } from "src/components/Sections/MyDevelopment";
import { MyNetwork } from "src/components/Sections/MyNetwork";
import { Presentation } from "src/components/Sections/Presentation";
import { Projects } from "src/components/Sections/Projects";
import { Container } from "src/styles/pages/Home";

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <meta name="author" content="direct.josue@gmail.com" />
        <meta name="creator" content="Josué Mendonça" />
        <meta
          name="description"
          content="Josué é um desenvolvedor com brilho nos olhos, que está sempre em busca do próximo nível. Alguns dos seus objetivos é ter um crescimento continuo, impactar a vida das pessoas e construir aplicações de boa qualidade."
        />
        <meta name="robots" content="nofollow" />
        <meta name="googlebot" content="noindex" />
        <meta httpEquiv="content-language" content="en-us" />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="Josué Mendonça" />
        <meta property="og:title" content="Josué | Front-end Developer" />
        <meta
          property="og:description"
          content="Josué é um desenvolvedor com brilho nos olhos, que está sempre em busca do próximo nível. Alguns dos seus objetivos é ter um crescimento continuo, impactar a vida das pessoas e construir aplicações de boa qualidade."
        />
        <meta property="og:site_name" content="Josué Mendonça" />
        <meta property="og:image" content="/page_thumb.png" />

        <title>Josué Mendonça | Front-end developer</title>
      </Head>

      <Header />
      <Presentation />
      <AboutMe />
      <MyDevelopment />
      <MyNetwork />
      <Projects />
      <Footer />
    </Container>
  );
};

export default Home;
