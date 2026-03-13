import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import CategoryShop from "./pages/CategoryShop";
import ProductDetails from "./pages/ProductDetails";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main>
      <Header />
      <Toaster position="bottom-right" />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/shop/:category" element={<CategoryShop />}></Route>
        <Route path="/shop/:category/:id" element={<ProductDetails />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
