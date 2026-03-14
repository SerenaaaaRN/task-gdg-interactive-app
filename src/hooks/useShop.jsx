import { use } from "react";
import { ShopContext } from "../context/ShopContext";

export const useShop = () => {
  const context = use(ShopContext);
  if (!context) {
    throw new Error("useShop must be used within a ShopContextProvider");
  }
  return context;
};
