// @ts-check

import { useShop } from "../../hooks/useShop";
import Container from "../../components/ui/Container";
import BannerHero from "./BannerHero";
import BannerSpin from "./BannerSpin";

const Hero = () => {
  const { popularBooks } = useShop();

  return (
    <Container className="flex flex-col lg:flex-row gap-6 h-auto lg:h-168 mt-24">
      <BannerHero />
      <BannerSpin popularBooks={popularBooks} />
    </Container>
  );
};

export default Hero;
