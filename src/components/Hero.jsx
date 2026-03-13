import bg from "../assets/bg.png";
import bgHero from "../assets/bg-hero.png";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useContext, useEffect, useState } from "react";
import Item from "./Item";

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
    <section className="max-padd-container flex gap-6 h-175 mt-16">
      <aside className="flex-5 bg-cover bg-center bg-no-repeat rounded-2xl" style={{ backgroundImage: `url(${bg})` }}>
        <div className="max-padd-container flex flex-col h-full justify-center pt-8">
          <h3 className="bold-24 text-secondary font-thin">Explore Bolls You'll Love</h3>
          <h1 className="h1 max-w-175 font-extrabold! leading-none">Find Your Next Book</h1>
          <h2 className="capitalize h2 tracking-wider">Up to 40% off This week</h2>
          <p className="max-w-xl pt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ipsa doloremque itaque, eligendi error
            laudantium libero quidem esse. Voluptates adipisci ex quis cumque aperiam distinctio. Consequuntur
            exercitationem harum dicta praesentium illo aliquam reprehenderit iure, earum quasi? Voluptatem cumque
            veritatis corporis.
          </p>
          <div className="flex mt-4">
            <Link to={"/shop"} className="bg-white text-xs font-medium pl-6 rounded-full flexCenter gap-x-6 group">
              Check our latest collection
              <FaArrowRight className="bg-secondary text-white rounded-full h-11 w-11 p-3 m-1 border border-white group-hover:bg-primary group-hover:text-black transition-all duration-500" />
            </Link>
          </div>
        </div>
      </aside>

      <aside
        className="hidden lg:block flex-2 bg-primary rounded-2xl bg-center bg-cover bg-no-repeat"
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
    </section>
  );
};

export default Hero;
