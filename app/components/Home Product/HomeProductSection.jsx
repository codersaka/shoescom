import { FaArrowRight } from "react-icons/fa";

import styles from "./HomeProductSection.module.css";
import ProductCard from "../ProductCard/ProductCard";

const HomeProductSection = () => {
  return (
    <section>
      <div className="flex justify-between items-center">
        <div
          className={`flex items-center justify-between w-[35%] ${styles.afterEffect}`}
        >
          <h3 className="text-4xl font-bold ">New arrivals</h3>
          <p className="font text-[#7b7e83]">
            Our newly launched shoes collection.
          </p>
        </div>
        <div className=" flex items-center justify-between py-3 px-4 border-2 border-[#7b7e83] text-[13px]">
          <p className="mr-3 text-[#7b7e83]">Shop Collection</p>
          <FaArrowRight size={12} color="#7b7e83" />
        </div>
      </div>
      <div className="my-8 flex flex-wrap content-between">
        <ProductCard width="w-[24%]" />
        <ProductCard width="w-[24%]" />
        <ProductCard width="w-[24%]" />
        <ProductCard width="w-[24%]" />
        <ProductCard width="w-[24%]" />
        <ProductCard width="w-[24%]" />
        <ProductCard width="w-[24%]" />
        <ProductCard width="w-[24%]" />
      </div>
    </section>
  );
};

export default HomeProductSection;
