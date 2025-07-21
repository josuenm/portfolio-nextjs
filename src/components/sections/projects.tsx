import { Button, Flag, LucideIcon } from "..";
import { SafeArea } from "../safe-area";
const projects = [
  {
    title: "ValidaPay",
    description:
      "Em desenvolvimento, a ValidaPay é um gateway de pagamento robusto, focado em SaaS e micro SaaS, com uma das taxas mais competitivas do mercado. O projeto é grandioso, pensado para escalar e atender empresas de todos os portes, trazendo inovação e facilidade para integrações de pagamentos recorrentes e únicos.",
    website: "https://validapix.com.br",
  },
  {
    title: "ValidaPix",
    description:
      "Desenvolvi tanto a primeira versão quanto a nova versão estável do ValidaPix, um sistema de pagamentos instantâneos com integrações bancárias avançadas. Trabalhei diretamente com APIs dos principais bancos do Brasil, garantindo segurança, estabilidade e performance para grandes volumes de transações.",
    website: "https://validapix.com.br",
  },
  {
    title: "Essent Agro",
    description:
      "Participei do desenvolvimento do sistema Essent Agro, uma plataforma voltada para o agronegócio. Atuei por alguns meses implementando funcionalidades essenciais para a gestão e automação de processos agrícolas, contribuindo para a modernização do setor.",
    website: "https://essentagro.com.br",
  },
  {
    title: "Sindicante Digital",
    description:
      "Trabalhei por alguns meses no desenvolvimento do Sindicante Digital, um sistema inovador para seguradoras. A plataforma reúne e analisa dados de sinistros, auxiliando na tomada de decisão sobre pagamentos de seguros em casos de acidentes, tornando o processo mais ágil e confiável.",
    website: "https://sindicantedigital.com",
  },
  {
    title: "Savage Servidores",
    description:
      "Savage Servidores é um sistema integrado com CSGO, focado no gerenciamento de servidores de jogos. Desenvolvi funcionalidades para administração via console, automação de tarefas e integração com a comunidade gamer, proporcionando uma experiência completa e eficiente para administradores e jogadores.",
    website: "https://savageservidores.com",
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

      <div className="grid grid-cols-12 gap-4 w-full">
        {projects.map((item, index) => (
          <div className="col-span-12 md:col-span-4 border border-zinc-700 rounded-xl p-4 flex flex-col" key={index}>
            <p className="text-2xl font-bold">
              {item.title}
            </p>

            <p className="my-8 text-zinc-400">
              {item.description}
            </p>

            <Button.Normal className="w-full mt-auto">
              Visitar <LucideIcon name="ArrowRight" />
            </Button.Normal>
          </div>
        ))}
      </div>

      {/* {projects.map((item, index) => (
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
      ))} */}

      <p className="text-4xl md:text-5xl text-neutral-400 text-center scroll-animate">
        Entre outros desenvolvimentos
      </p>
    </SafeArea>
  );
}
