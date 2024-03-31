import FancyCard from "./components/Fancy card/FancyCard";
import HomeHero from "./components/Hero/HomeHero";
import HomeProductSection from "./components/Home Product/HomeProductSection";
import HoverCard from "./components/Hover card/HoverCard";
import Marque from "./components/Marque/Marque";
import HomeOffer from "./components/Offers/HomeOffer";

import product_1 from "@/app/assets/img/product/product_1.webp";
import product_1b from "@/app/assets/img/product/product_1b.webp";
import product_2a from "@/app/assets/img/product/product_2a.webp";
import product_2b from "@/app/assets/img/product/product_2b.webp";
import product_2c from "@/app/assets/img/product/product_2c.webp";
import product_3a from "@/app/assets/img/product/product_3a.webp";
import product_3b from "@/app/assets/img/product/product_3b.webp";
import product_3c from "@/app/assets/img/product/product_3c.webp";

export default function Home() {
  const productDataOne = [
    {
      productId: "p1",
      productTitle: "Nike air force retro",
      produtBrand: "Jorden Shoes",
      productActualPrice: "",
      productDiscountedPrice: "",
      availableColor: [
        {
          colorCode: "bg-[#000]",
          colorName: "black",
          enCircle: "after:border-[#000]",
        },
        {
          colorCode: "bg-[#dd556c]",
          colorName: "pink",
          enCircle: "after:border-[#dd556c]",
        },
      ],
      availableImages: product_1,
    },
    {
      productId: "p2",
      productTitle: "Jordan system",
      produtBrand: "Jorden Shoes",
      productActualPrice: "",
      productDiscountedPrice: "",
      availableColor: [
        {
          colorCode: "bg-[#000]",
          colorName: "black",
          enCircle: "after:border-[#000]",
        },
        {
          colorCode: "bg-[#fff]",
          colorName: "white",
          enCircle: "after:border-[#fff]",
        },
        {
          colorCode: "bg-[#dd556c]",
          colorName: "pink",
          enCircle: "after:border-[#dd556c]",
        },
      ],
      availableImages: product_1b,
    },
    {
      productId: "p3",
      productTitle: "Air Zoom Shield",
      produtBrand: "Jordan Shoes",
      productActualPrice: "",
      productDiscountedPrice: "",
      availableColor: [
        {
          colorCode: "bg-[#000]",
          colorName: "black",
          enCircle: "after:border-[#000]",
        },
        {
          colorCode: "bg-[#fff]",
          colorName: "white",
          enCircle: "after:border-[#fff]",
        },
        {
          colorCode: "bg-[#dd556c]",
          colorName: "pink",
          enCircle: "after:border-[#dd556c]",
        },
      ],
      availableImages: product_2a,
    },
    {
      productId: "p4",
      productTitle: "Air Jordan Elevate",
      produtBrand: "Jordan Shoes",
      productActualPrice: "",
      productDiscountedPrice: "",
      availableColor: [
        {
          colorCode: "bg-[#000]",
          colorName: "black",
          enCircle: "after:border-[#000]",
        },
        {
          colorCode: "bg-[#fff]",
          colorName: "white",
          enCircle: "after:border-[#fff]",
        },
        {
          colorCode: "bg-[#dd556c]",
          colorName: "pink",
          enCircle: "after:border-[#dd556c]",
        },
      ],

      availableImages: product_2b,
    },
    {
      productId: "p5",
      productTitle: "Air Bretman Rock",
      produtBrand: "Running Shoes",
      productActualPrice: "",
      productDiscountedPrice: "",
      availableColor: [
        {
          colorCode: "bg-[#000]",
          colorName: "black",
          enCircle: "after:border-[#000]",
        },
        {
          colorCode: "bg-[#fff]",
          colorName: "white",
          enCircle: "after:border-[#fff]",
        },
        {
          colorCode: "bg-[#dd556c]",
          colorName: "pink",
          enCircle: "after:border-[#dd556c]",
        },
      ],

      availableImages: product_2c,
    },
    {
      productId: "p6",
      productTitle: "Chucky Trainers",
      produtBrand: "Nike",
      productActualPrice: "",
      productDiscountedPrice: "",
      availableColor: [
        {
          colorCode: "bg-[#000]",
          colorName: "black",
          enCircle: "after:border-[#000]",
        },
        {
          colorCode: "bg-[#fff]",
          colorName: "white",
          enCircle: "after:border-[#fff]",
        },
        {
          colorCode: "bg-[#dd556c]",
          colorName: "pink",
          enCircle: "after:border-[#dd556c]",
        },
      ],

      availableImages: product_3a,
    },
    {
      productId: "p7",
      productTitle: "Nike Retro Styles",
      produtBrand: "Nike",
      productActualPrice: "",
      productDiscountedPrice: "",
      availableColor: [
        {
          colorCode: "bg-[#000]",
          colorName: "black",
          enCircle: "after:border-[#000]",
        },
        {
          colorCode: "bg-[#fff]",
          colorName: "white",
          enCircle: "after:border-[#fff]",
        },
        {
          colorCode: "bg-[#dd556c]",
          colorName: "pink",
          enCircle: "after:border-[#dd556c]",
        },
      ],

      availableImages: product_3b,
    },
    {
      productId: "p8",
      productTitle: "Nike Air Max Drwan",
      produtBrand: "Nike",
      productActualPrice: "",
      productDiscountedPrice: "",
      availableColor: [
        {
          colorCode: "bg-[#000]",
          colorName: "black",
          enCircle: "after:border-[#000]",
        },
        {
          colorCode: "bg-[#fff]",
          colorName: "white",
          enCircle: "after:border-[#fff]",
        },
        {
          colorCode: "bg-[#dd556c]",
          colorName: "pink",
          enCircle: "after:border-[#dd556c]",
        },
      ],

      availableImages: product_3c,
    },
  ];

  const productDataTwo = [
    {
      productId: "p5",
      productTitle: "Air Bretman Rock",
      produtBrand: "Running Shoes",
      productActualPrice: "",
      productDiscountedPrice: "",
      availableColor: [
        {
          colorCode: "bg-[#000]",
          colorName: "black",
          enCircle: "after:border-[#000]",
        },
        {
          colorCode: "bg-[#fff]",
          colorName: "white",
          enCircle: "after:border-[#fff]",
        },
        {
          colorCode: "bg-[#dd556c]",
          colorName: "pink",
          enCircle: "after:border-[#dd556c]",
        },
      ],

      availableImages: product_2c,
    },
    {
      productId: "p6",
      productTitle: "Chucky Trainers",
      produtBrand: "Nike",
      productActualPrice: "",
      productDiscountedPrice: "",
      availableColor: [
        {
          colorCode: "bg-[#000]",
          colorName: "black",
          enCircle: "after:border-[#000]",
        },
        {
          colorCode: "bg-[#fff]",
          colorName: "white",
          enCircle: "after:border-[#fff]",
        },
        {
          colorCode: "bg-[#dd556c]",
          colorName: "pink",
          enCircle: "after:border-[#dd556c]",
        },
      ],

      availableImages: product_3a,
    },
    {
      productId: "p7",
      productTitle: "Nike Retro Styles",
      produtBrand: "Nike",
      productActualPrice: "",
      productDiscountedPrice: "",
      availableColor: [
        {
          colorCode: "bg-[#000]",
          colorName: "black",
          enCircle: "after:border-[#000]",
        },
        {
          colorCode: "bg-[#fff]",
          colorName: "white",
          enCircle: "after:border-[#fff]",
        },
        {
          colorCode: "bg-[#dd556c]",
          colorName: "pink",
          enCircle: "after:border-[#dd556c]",
        },
      ],

      availableImages: product_3b,
    },
    {
      productId: "p8",
      productTitle: "Nike Air Max Drwan",
      produtBrand: "Nike",
      productActualPrice: "",
      productDiscountedPrice: "",
      availableColor: [
        {
          colorCode: "bg-[#000]",
          colorName: "black",
          enCircle: "after:border-[#000]",
        },
        {
          colorCode: "bg-[#fff]",
          colorName: "white",
          enCircle: "after:border-[#fff]",
        },
        {
          colorCode: "bg-[#dd556c]",
          colorName: "pink",
          enCircle: "after:border-[#dd556c]",
        },
      ],

      availableImages: product_3c,
    },
  ];

  return (
    <main className="px-5">
      <HomeHero />
      <HoverCard />
      <FancyCard />
      <HomeProductSection
        sectionTitle="New Arrivals"
        sectionDesc="Our newly launched shoes collection."
        hasLoadMoreButton={true}
        productData={productDataOne}
      />
      <HomeOffer />
      <Marque />
      <HomeProductSection
        sectionTitle="Best Sellers"
        sectionDesc="Follow the most popular shoes trends."
        hasLoadMoreButton={false}
        productData={productDataTwo}
      />
    </main>
  );
}
