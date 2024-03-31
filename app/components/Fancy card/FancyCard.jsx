import Link from "next/link";
import Image from "next/image";
import Bg_1 from "@/app/assets/img/fancy-card/card-1.webp";
import Bg_2 from "@/app/assets/img/fancy-card/card-2.webp";
import Bg_3 from "@/app/assets/img/fancy-card/card-3.webp";
import styles from "./FancyCard.module.css";

import { FaArrowRight } from "react-icons/fa";

function Card({ text, link, bgImage }) {
  return (
    <div className={`relative w-[32%] ${styles.transitionClass}`}>
      <Image src={bgImage} alt="shoe-image" />
      <div className="absolute w-[40%] left-3 top-[50%] -translate-y-[50%] text-white">
        <p className="font-bold text-3xl capitalize">{text}</p>
        <div className="flex items-center justify-between w-[50%] mt-3 text-sm uppercase">
          <Link href={link}>Shop Now</Link>
          <FaArrowRight size={11} />
        </div>
      </div>
    </div>
  );
}

const FancyCard = () => {
  const cardData = [
    {
      id: "c1",
      text: "Air zoom pegasus",
      bgImage: Bg_1,
      link: "/",
    },
    {
      id: "c2",
      text: "Running shoes",
      bgImage: Bg_2,
      link: "/",
    },
    {
      id: "c3",
      text: "Pegasus running",
      bgImage: Bg_3,
      link: "/",
    },
  ];

  return (
    <section className="flex justify-between items-center my-8">
      {cardData.map((card) => (
        <Card
          key={card.id}
          text={card.text}
          bgImage={card.bgImage}
          link={card.link}
        />
      ))}
    </section>
  );
};

export default FancyCard;
