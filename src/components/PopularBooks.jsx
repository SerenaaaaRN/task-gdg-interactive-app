import "swiper/css";
import Title from "./Title";
import Container from "./ui/Container";
import { useShop } from "../hooks/useShop";
import BookSlider from "./ui/BookSlider";

const PopularBooks = () => {
  const { popularBooks } = useShop();

  return (
    <Container className="py-16">
      <Title
        title={"Popular"}
        subtitle={"Books"}
        description={"Check out our most popular books with exciting plots and vibrant voice"}
        className={"pb-10"}
      />
      <BookSlider books={popularBooks} />
    </Container>
  );
};

export default PopularBooks;
