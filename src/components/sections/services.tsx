import Image from "next/image";

export default function Services() {
  return (
    <div className="bg-gradient-to-t from-[#070707] to-[#0c0c0c] w-full min-h-[250px] md:min-h-[500px] my-32 l-stack-start pt-14 scroll-animate">
      <p className="text-4xl md:text-5xl text-center">
        Alguns dos meus serviços
      </p>

      <p className="text-lg md:text-xl text-neutral-400 text-center my-8 mb-14 max-w-[800px] mx-auto">
        Ofereço serviços de desenvolvimento web, mobile, desktop, backend e
        nuvem! Aqui você pode ter um pacote com tudo oque você precisa!
      </p>

      <Image
        src="/images/iphones.png"
        width={10000}
        height={10000}
        alt="iphones"
        className="w-[1000px] mt-auto mx-auto"
      />
    </div>
  );
}
