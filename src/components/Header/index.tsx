import { BackButton, Button, Container, LinksContainer, MobileButton, Navigation, ProjectHeaderContainer } from "./styles";
import Logo from "src/assets/icons/Logo.svg";
import Image from "next/image";
import { SafeArea } from "../SafeArea";
import { useContext, useEffect, useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'
import Link from "next/link";
import { ContactContext, ContactContextType } from "src/contexts/contact";


export function Header() {

  const { toggle } = useContext(ContactContext) as ContactContextType;

    const [headerIsActive, setHeaderIsActive] = useState(false);
    const [mobileButton, setMobileButton] = useState(false);

    useEffect(() => {
        const scrollListener = () => {
          if (window.scrollY > 10) {
            setHeaderIsActive(true);
          } else {
            setHeaderIsActive(false);
          }
        };
    
        window.addEventListener("scroll", scrollListener);
        return () => {
          window.removeEventListener("scroll", scrollListener);
        };
      }, []);

    function handleMobileButton() {
      if(!mobileButton) {
        setHeaderIsActive(true)
        setMobileButton(true)
      } else {
        setMobileButton(false)
      }
    }

    function handleTopScroll() {
      setMobileButton(false)
      scroll.scrollToTop();
    }

    return (
        <Container 
          className={headerIsActive?'active':''}
          data-mobile={mobileButton?true:false}>
            <SafeArea>
              <Navigation>
                <Image 
                  src={Logo} 
                  layout="fixed" 
                  alt="" 
                  className="logo" 
                  width={100} 
                  height={50} 
                  onClick={handleTopScroll} />

                <LinksContainer className={mobileButton?'active':''}>
                  <ScrollLink 
                    to="presentation"
                    onClick={handleTopScroll}
                    className="link">
                      Inicio
                  </ScrollLink>

                  <ScrollLink 
                    to="development" 
                    className="link" 
                    smooth={true} 
                    offset={-100}
                    onClick={() => setMobileButton(false)}>
                      Desenvolvimento
                  </ScrollLink>

                  <ScrollLink 
                    to="my-network" 
                    className="link" 
                    smooth={true} 
                    offset={-100}
                    onClick={() => setMobileButton(false)}>
                      Minha rede
                  </ScrollLink>

                  <ScrollLink 
                    to="projects" 
                    className="link" 
                    smooth={true} 
                    offset={-100}
                    onClick={() => setMobileButton(false)}>
                      Projetos
                  </ScrollLink>
                  
                  <Button onClick={() => toggle(true)}>Entrar em contato</Button>
                </LinksContainer>

                <MobileButton 
                  className={mobileButton?'active':''} 
                  onClick={handleMobileButton} />

              </Navigation>
          </SafeArea>
      </Container>
    )
}




export function ProjectHeader({ href }: { href: string }) {
  return (
    <ProjectHeaderContainer>
      <Link href={href}>
        <BackButton>Voltar</BackButton>
      </Link>

      <Image 
        src={Logo} 
        layout="fixed" 
        alt="" 
        className="logo" 
        width={100} 
        height={50} />
    </ProjectHeaderContainer>
  )
}