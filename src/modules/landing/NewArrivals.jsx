// @ts-check

import { useShop } from "../../hooks/useShop";
import BookSlider from "../../components/ui/BookSlider";
import Container from "../../components/ui/Container";
import Title from "../../components/ui/Title";

const NewArrivals = () => {
  const { newArrivals } = useShop();

  return (
    <Container className="py-16">
      <Title
        title={"New"}
        subtitle={"Arrivals"}
        description={"Check out our newest books arriving weekly with fresh ideas and exciting plots"}
        className={"pb-10"}
      />
      <BookSlider books={newArrivals} />
    </Container>
  );
};

export default NewArrivals;
