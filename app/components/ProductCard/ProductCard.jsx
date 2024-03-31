import Image from "next/image";
import Link from "next/link";

import { CiHeart } from "react-icons/ci";

import styles from "./ProductCard.module.css";

function EachDot({ colorCode, enCircleCode }) {
  return (
    <li
      className={`${colorCode} rounded-full h-2 w-2 mx-[6px] relative after:absolute after:rounded-full after:h-4 after:w-4 ${enCircleCode} after:border-2 after:-left-[50%] after:-top-[50%]`}
    ></li>
  );
}

function EachButton({ buttonText }) {
  return <button className="w-[50%] text-center">{buttonText}</button>;
}

function HoverButtons() {
  return (
    <div
      className={`flex p-3 bg-white border-b-[1px] after:absolute after:h-[100%] after:w-[1px] after:bg-[lightgray] after:top-0 after:left-[50%] border-b-[lightgray] ${styles.hoverBottom}`}
    >
      <EachButton buttonText="Select Options" />
      <EachButton buttonText="Quick View" />
    </div>
  );
}

function ColorDots({ availableColor }) {
  return (
    <div className="flex flex-col justify-end h-[100%] w-[100%] overflow-hidden hover:overflow-visible">
      <ul
        className={`w-[100%] text-center flex justify-center items-center p-2 mb-1 ${styles.dotsHover}`}
      >
        {availableColor.map((color) => (
          <EachDot
            key={color.colorCode}
            colorCode={color.colorCode}
            enCircleCode={color.enCircle}
          />
        ))}
      </ul>

      <HoverButtons />
    </div>
  );
}

function PricePart({ productBrand, productTitle }) {
  return (
    <div className="flex p-3">
      <div className="w-[49%] font-semibold">
        <p className="text-[16px]">{productTitle}</p>
        <p className="text-[#7b7e83] text-[13px]">{productBrand}</p>
      </div>
      <div className="w-[49%] text-right font-semibold">
        <s className="text-[#7b7e83]">Rs 24,300.00</s>
        <p>Rs 23,900.00</p>
      </div>
    </div>
  );
}

function HoverDetailsPart({ availableColor, availableImages }) {
  return (
    <div className="relative">
      <div className="absolute h-[100%] w-[100%]">
        <div className={`absolute right-5 top-3 ${styles.heart}`}>
          <CiHeart size={22} />
        </div>
        <ColorDots availableColor={availableColor} />
      </div>

      <Image src={availableImages} alt="product-image" />
    </div>
  );
}

const ProductCard = (props) => {
  const { width, availableImages, productTitle, productBrand, availableColor } =
    props;

  return (
    <div className={`${width} m-auto my-5 relative ${styles.cardHover}`}>
      <Link href="/" className={styles.universalLink}>
        <HoverDetailsPart
          availableImages={availableImages}
          availableColor={availableColor}
        />
        <PricePart productTitle={productTitle} productBrand={productBrand} />
      </Link>
    </div>
  );
};

export default ProductCard;
