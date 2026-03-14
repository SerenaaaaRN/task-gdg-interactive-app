import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import bgHero from "../../assets/bg-hero.png";
import Item from "../../components/ui/Item";

const BannerSpin = ({ popularBooks }) => (
  <aside
    className="hidden lg:block flex-2 bg-secondary rounded-2xl bg-center bg-cover bg-no-repeat relative overflow-hidden"
    style={{ backgroundImage: `url(${bgHero})` }}
  >
    <div className="max-w-sm pt-28">
      <div>
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
              <Item book={book} variant="hero" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  </aside>
);

export default BannerSpin;
