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
        {/* Primary Meta Tags */}
        <title>Josué Mendonça | Full-Stack developer</title>
        <meta name="title" content="Josué Mendonça | Full-Stack developer" />
        <meta
          name="description"
          content="Josué é um desenvolvedor que preza pela qualidade no que faz e esta sempre procurando o mais alto nível. Suas interfaces já impactaram muito gente e continua impactando."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://josuenm-portfolio.vercel.app/"
        />
        <meta
          property="og:title"
          content="Josué Mendonça | Full-Stack developer"
        />
        <meta
          property="og:description"
          content="Josué é um desenvolvedor que preza pela qualidade no que faz e esta sempre procurando o mais alto nível. Suas interfaces já impactaram muito gente e continua impactando."
        />
        <meta property="og:image" content="/images/social-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://josuenm-portfolio.vercel.app/"
        />
        <meta
          property="twitter:title"
          content="Josué Mendonça | Full-Stack developer"
        />
        <meta
          property="twitter:description"
          content="Josué é um desenvolvedor que preza pela qualidade no que faz e esta sempre procurando o mais alto nível. Suas interfaces já impactaram muito gente e continua impactando."
        />
        <meta property="twitter:image" content="/images/social-image.jpg" />
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
