import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import styles from "./HoverCard.module.css";

function Card({ text, linkText, link }) {
  return (
    <div
      className={`w-[33%] flex justify-center items-center p-6 ${styles.bgColor}`}
    >
      <p className="text-lg">{text}</p> <MdKeyboardArrowRight size={14} />
      <Link href={link} className="font-semibold underline">
        {linkText}
      </Link>
    </div>
  );
}

const HoverCard = () => {
  const cardData = [
    {
      id: "c1",
      text: "Free shipping on orders over $100",
      linkText: "More info",
      link: "/",
    },
    {
      id: "c2",
      text: "20% Off on woman collection",
      linkText: "Explore now",
      link: "/",
    },
    {
      id: "c3",
      text: "Up to 50% off on selected styles",
      linkText: "Shop now",
      link: "/",
    },
  ];

  return (
    <section className="flex justify-between items-center my-6">
      {cardData.map((card) => (
        <Card
          key={card.id}
          text={card.text}
          linkText={card.linkText}
          link={card.link}
        />
      ))}
    </section>
  );
};

export default HoverCard;
