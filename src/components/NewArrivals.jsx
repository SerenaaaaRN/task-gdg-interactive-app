import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Title from "./Title";
import Item from "./Item";
import Container from "./ui/Container";
import { useShop } from "../context/ShopContext";

const NewArrivals = () => {
  const { newArrivals } = useShop();

  return (
    <Container className="py-16">
      <Title
        title1={"New"}
        title2={"Arrivals"}
        titleStyles={"pb-10"}
        para={"Check out our newest books arriving weekly with fresh ideas and exciting plots"}
      />

      {
        <Swiper
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            355: { slidesPerView: 2, spaceBetween: 20 },
            600: { slidesPerView: 3, spaceBetween: 30 },
            900: { slidesPerView: 4, spaceBetween: 30 },
            1200: { slidesPerView: 5, spaceBetween: 30 },
          }}
          modules={[Autoplay]}
          className="min-h-80"
        >
          {newArrivals.map((book) => (
            <SwiperSlide key={book._id}>
              <Item book={book} />
            </SwiperSlide>
          ))}
        </Swiper>
      }
    </Container>
  );
};

export default NewArrivals;
