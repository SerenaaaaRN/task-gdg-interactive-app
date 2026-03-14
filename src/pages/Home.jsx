// @ts-check

import Categories from "../modules/landing/Categories";
import FeaturedBooks from "../modules/landing/FeaturedBooks";
import Hero from "../modules/landing/Hero";
import NewArrivals from "../modules/landing/NewArrivals";
import NewsLetter from "../modules/landing/NewsLetter";
import PopularBooks from "../modules/landing/PopularBooks";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <NewArrivals />
      <FeaturedBooks />
      <PopularBooks />
      <NewsLetter />
    </>
  );
};

export default Home;
