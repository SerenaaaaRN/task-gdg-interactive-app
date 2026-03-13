import { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { ShopContext } from "../context/ShopContext";
import Item from "./Item";

const NewArrivals = () => {
  const [newArrivals, setNewArrivals] = useState([]);
  const { books } = useContext(ShopContext);

  useEffect(() => {
    setNewArrivals(books.slice(0, 6));
  }, [books]);

  return (
    <section className="max-padd-container py-16">
      <Title
        title1={"NewArrivals"}
        title2={"Arrivals"}
        titleStyles={"pb-10"}
        para={"Check out our newest books arriving weekly with ideas, exciting plots, and vibrant voice"}
      />

      {
        <Swiper
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            355: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            900: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
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
    </section>
  );
};

export default NewArrivals;
