import { Footer, Header, Section } from "@src/components";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";

const Home: NextPage = () => {
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll(".scroll-animate").forEach((el: any) => {
        const rect = el.getBoundingClientRect();
        const opacity = rect.bottom / window.innerHeight;

        el.style.transition = "ease .2s opacity";
        el.style.opacity = opacity < 0.4 ? opacity * 0.5 : 1;
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Head>
        <meta name="author" content="direct.josue@gmail.com" />
        {/* Primary Meta Tags */}
        <meta name="title" content="Josué Mendonça | Full-Stack developer" />
        <meta
          name="description"
          content="Josué é um desenvolvedor que preza pela qualidade no que faz e esta sempre procurando o mais alto nível. Suas interfaces já impactaram muito gente e continua impactando."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>

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

        <title>Josué Mendonça | Desenvolvedor Full-stack</title>
      </Head>
      <Header />

      <Section.Presentation />
      <hr className="border-neutral-900" />
      <Section.Development />
      <Section.Services />
      <Section.AboutMe2 />
      <Section.AboutMe />
      <Section.Pitch />
      <Section.Networking />
      <Section.Projects />
      <Section.Contact />

      <Footer />
    </>
  );
};

export default Home;
