import Image from "next/image";
import Link from "next/link";
import SaleImgOne from "@/app/assets/img/bg/sale_left.webp";
import SaleImgTwo from "@/app/assets/img/bg/sale_mid.webp";
import SaleImgThree from "@/app/assets/img/bg/sale_right.webp";

const HomeOffer = () => {
  const Images = [
    {
      id: "img1",
      img: SaleImgOne,
      altImg: "sales-img-one",
    },
    {
      id: "img2",
      img: SaleImgTwo,
      altImg: "sales-img-two",
    },
    {
      id: "img3",
      img: SaleImgThree,
      altImg: "sales-img-three",
    },
  ];

  return (
    <section className="flex items-center mt-10">
      {Images.map((image) => (
        <Link href="/" key={image.id} className="w-[33.33%]">
          <Image src={image.img} alt={image.altImg} />
        </Link>
      ))}
    </section>
  );
};

export default HomeOffer;
