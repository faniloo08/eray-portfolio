import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Salutation de Eray Digital madagascar</Heading>
      <Paragraph className="max-w-xl mt-4">
        Notre entreprise est spécialisée dans la <Highlight>conception de solutions numériques sur mesure</Highlight>. Notre offre globale
        comprend la <Highlight>création de sites internet, le développement dapplications mobiles et web, la conception de
        logiciels personnalisés, ainsi que la réalisation de designs web et graphiques sur mesure.</Highlight> Nous mettons notre
        expertise au service de nos clients pour répondre à leurs besoins spécifiques en matière de présence en ligne et de
        digitalisation de leurs processus.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Les projets que nous avons réalisé
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
