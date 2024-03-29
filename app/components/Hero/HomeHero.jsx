import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { GoDash } from "react-icons/go";
import styles from "./Hero.module.css";

function ImageBg({ position, gender, discount }) {
  return (
    <div
      className={`w-[49.5%] h-[500px] py-20 px-16 ${
        position === "first" ? styles.bg_1 : styles.bg_2
      }`}
    >
      <div className="h-[100%] flex flex-col justify-end">
        <div className="flex items-center">
          <div className="w-[70%] text-white">
            <h1 className="text-6xl font-bold">
              {position === "first" ? "Men's" : "Women's"}
            </h1>
            <div className="text-5xl flex items-center capitalize my-3">
              <GoDash /> <p>collection</p>
            </div>
          </div>
          <div className="rounded-full bg-white p-8">
            <FaArrowRight />
          </div>
        </div>

        <div className="flex items-center text-white capitalize mt-7">
          <div className="bg-[#aee906] py-[1px] px-3 rounded-full mr-3 text-black text-sm font-semibold">
            {discount}
          </div>
          <p>
            off on <span className="underline">{gender}</span> shoes today only!
          </p>
        </div>
      </div>
    </div>
  );
}

const HomeHero = () => {
  return (
    <section className="flex justify-between items-center">
      <ImageBg position="first" discount={"25%"} gender={"Men's"} />
      <ImageBg position="second" discount={"35%"} gender={"Women's"} />
    </section>
  );
};

export default HomeHero;
