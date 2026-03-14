// @ts-check

import Categories from "../components/landing/Categories";
import FeaturedBooks from "../components/landing/FeaturedBooks";
import Hero from "../components/landing/Hero";
import NewArrivals from "../components/landing/NewArrivals";
import NewsLetter from "../components/landing/NewsLetter";
import PopularBooks from "../components/landing/PopularBooks";

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
