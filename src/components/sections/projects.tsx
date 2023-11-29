import Image from "next/image";
import Link from "next/link";
import { Button, Flag, LucideIcon } from "..";
import { SafeArea } from "../safe-area";

const projects = [
  {
    title: "Tech Flow Solutions",
    description: "Landing Page da minha Software House",
    image: "techflow-solutions.png",
    repo: "",
    website: "https://techflowsolutions.com.br",
  },
  {
    title: "ValidaPix Dashboard",
    description:
      "Atualmente o melhor sistema de Validação de Pix. Todos os dias valida milhares de pix e foi um projeto grande e muito bem pensado. O backend é aonde se encontra todas as integrações com vários bancos",
    image: "validapix.png",
    repo: "",
    website: "https://app.validapix.tech",
  },
  {
    title: "ValidaPix Landing Page",
    description:
      "Essa é a porta de entrada para a ValidaPix, assim como o dashboard a página inicial não poderia perder a modernidade do melhor sistema de validação de pix",
    image: "validapix-lp.png",
    repo: "",
    website: "https://validapix.tech",
  },
  {
    title: "Savage Servidores",
    description:
      "Esse é o maior sistema de servidores de CSGO da america latina! Além do site ter um visual moderno e fácil de interagir, ele conta com uma parte interna para os admins! Nessa parte interna é tem um console/terminal para controlar o servidor, além disso tem informações como consumo de RAM, disco e internet",
    image: "savage-servidores.png",
    repo: "",
    website: "https://savageservidores.com",
  },
  {
    title: "Sindicante Digital - Dashboard",
    description:
      "O Sindicante Digital é um sistema voltado para empresas de seguros e imobiliarios. O frontend foi reformado para se adequar as novas features além de ficar mais simples e intuitivo",
    image: "sindicante-digital.png",
    repo: "",
    website: "",
  },
];

export default function Projects() {
  return (
    <SafeArea
      className="min-h-[1000px] my-48 l-stack-center-center gap-8"
      id="projects"
    >
      <Flag step={4} title="Projetos" subtitle="Mais do que um propósito" />

      <p className="text-4xl md:text-5xl text-center scroll-animate mt-4 mb-24">
        Alguns projetos
      </p>

      {projects.map((item, index) => (
        <div
          key={index}
          className="relative bg-black/20 backdrop-blur-3xl border border-white/20 w-full p-8 grid grid-cols-12 gap-4 rounded-xl scroll-animate"
        >
          <div
            className="absolute top-0 left-0 right-0 w-full min-h-[350px] -z-10"
            style={{
              background:
                "radial-gradient(circle at 10% 0%, rgba(0, 133, 255, .2), rgba(255, 255, 255, 0) 25%), radial-gradient(circle at 90% 25%, rgba(0, 133, 255, .2), rgba(255, 255, 255, 0) 25%)",
            }}
          />
          <div className="col-span-12 md:col-span-6 l-stack-start gap-8">
            <div>
              <strong className="text-4xl">{item.title}</strong>
              <p className="mt-4 text-xl text-neutral-400">
                {item.description}
              </p>
            </div>

            <div className="md:mt-auto l-stack-start md:l-inline-start-center my-8 gap-3">
              {!!item.website ? (
                <Link href={item.website} target="_blank">
                  <Button.Normal>
                    Website <LucideIcon name="ArrowRight" />
                  </Button.Normal>
                </Link>
              ) : (
                <span className="text-primary">Website privado!</span>
              )}
              {!!item.repo ? (
                <Link href={item.repo} target="_blank">
                  <Button.Outline>
                    Repositório <LucideIcon name="ArrowRight" />
                  </Button.Outline>
                </Link>
              ) : (
                <span className="text-primary">Repositório privado!</span>
              )}
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <Image
              src={`/images/${item.image}`}
              width={500}
              height={500}
              alt={item.title}
              className="w-full border border-neutral-900"
            />
          </div>
        </div>
      ))}

      <p className="text-4xl md:text-5xl text-neutral-400 text-center scroll-animate">
        Entre outros desenvolvimentos
      </p>
    </SafeArea>
  );
}
