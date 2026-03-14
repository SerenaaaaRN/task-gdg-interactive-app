import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Item from "./Item";

const BookSlider = ({ books, fromHero = false, className = "min-h-80" }) => {
  return (
    <Swiper
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      breakpoints={{
        355: { slidesPerView: fromHero ? 1 : 2, spaceBetween: fromHero ? 10 : 20 },
        600: { slidesPerView: fromHero ? 1 : 3, spaceBetween: 30 },
        900: { slidesPerView: fromHero ? 1 : 4, spaceBetween: 30 },
        1200: { slidesPerView: fromHero ? 1 : 5, spaceBetween: 30 },
      }}
      modules={[Autoplay]}
      className={className}
    >
      {books.map((book) => (
        <SwiperSlide key={book._id}>
          <Item book={book} fromHero={fromHero} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BookSlider;
