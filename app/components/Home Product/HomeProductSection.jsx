import ProductCard from "../ProductCard/ProductCard";

import styles from "./HomeProductSection.module.css";
import { LinkHoverButton } from "../UIButtons/UIButtons";

const HomeProductSection = async ({
  sectionTitle,
  sectionDesc,
  hasLoadMoreButton,
  productData,
}) => {
  return (
    <section>
      <div className="flex justify-between items-center">
        <div
          className={`flex items-center justify-between w-[35%] ${styles.afterEffect}`}
        >
          <h3 className="text-4xl font-bold ">{sectionTitle}</h3>
          <p className="font text-[#aeb9cb]">{sectionDesc}</p>
        </div>
        <LinkHoverButton
          fontSize="text-[12px]"
          buttonText="Shop Collection"
          hasArrow={true}
        />
      </div>
      <div className="my-8 flex flex-wrap content-between">
        {productData.map((product) => (
          <ProductCard
            key={product.productId}
            width="w-[24%]"
            availableImages={product.availableImages}
            productTitle={product.productTitle}
            productBrand={product.produtBrand}
            availableColor={product.availableColor}
          />
        ))}
      </div>
      {hasLoadMoreButton && (
        <div className=" w-[150px] m-auto">
          <LinkHoverButton buttonText="LOAD MORE" hasArrow={false} />
        </div>
      )}
    </section>
  );
};

export default HomeProductSection;
