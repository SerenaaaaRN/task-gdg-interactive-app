import bg from "../assets/bg.png";
import bgHero from "../assets/bg-hero.png";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useContext, useEffect, useState } from "react";
import Item from "./Item";
import Container from "./ui/Container";

import "swiper/css";
import { ShopContext } from "../context/ShopContext";

const Hero = () => {
  const [popularBooks, setPopularBooks] = useState([]);
  const { books } = useContext(ShopContext);

  //effect untuk ambil popularBooks
  useEffect(() => {
    if (books && books.length > 0) {
      const data = books.filter((item) => item.popular);
      setPopularBooks(data.slice(0, 6));
    }
  }, [books]);

  return (
    <Container className="flex flex-col lg:flex-row gap-6 h-auto lg:h-168 mt-24">
      <aside
        className="flex-5 bg-cover bg-center bg-no-repeat rounded-2xl relative overflow-hidden"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 p-8 lg:p-16 flex flex-col h-full justify-center">
          <h3 className="text-xl lg:text-2xl text-accent font-medium tracking-wide">
            Explore Books You'll Love
          </h3>
          <h1 className="text-5xl lg:text-7xl max-w-200 font-bold leading-tight mt-2 text-gray-900">
            Find Your Next Book
          </h1>
          <h2 className="capitalize text-2xl lg:text-3xl tracking-wider mt-4">Up to 40% off This week</h2>
          <p className="max-w-xl pt-5 text-gray-700 text-sm md:text-base leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ipsa doloremque itaque, eligendi error
            laudantium libero quidem esse. Voluptates adipisci ex quis cumque aperiam distinctio. Consequuntur
            exercitationem harum dicta praesentium illo aliquam reprehenderit iure, earum quasi? Voluptatem cumque
            veritatis corporis.
          </p>
          <div className="flex mt-8">
            <Link
              to={"/shop"}
              className="bg-dark-surface text-dark-text text-sm font-medium pl-6 pr-2 py-2 rounded-full flex items-center justify-center gap-x-4 group hover:opacity-90 transition-all"
            >
              Check our latest collection
              <FaArrowRight className="bg-white text-dark-surface rounded-full h-8 w-8 p-2 group-hover:scale-110 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </aside>

      <aside
        className="hidden lg:block flex-2 bg-secondary rounded-2xl bg-center bg-cover bg-no-repeat relative overflow-hidden"
        style={{ backgroundImage: `url(${bgHero})` }}
      >
        <div className="max-w-sm pt-28">
          <div>
            {
              <Swiper
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                breakpoints={{
                  355: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                }}
                modules={[Autoplay]}
                className="min-h-100 max-w-64"
              >
                {popularBooks.map((book) => (
                  <SwiperSlide key={book._id}>
                    <Item book={book} fromHero={true} />
                  </SwiperSlide>
                ))}
              </Swiper>
            }
          </div>
        </div>
      </aside>
    </Container>
  );
};

export default Hero;
