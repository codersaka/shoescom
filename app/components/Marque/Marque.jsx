import Marquee from "react-fast-marquee";
import { FaCircle } from "react-icons/fa6";

const Marque = () => {
  const tickerItems = [
    "New and exclusive collection",
    "Handcrafted leather shoes",
    "Feel amazing everyday with hongo",
    "Sale up to 70% off end of season",
    "New and exclusive collection",
    "Handcrafted leather shoes",
    "Feel amazing everyday with hongo",
    "Sale up to 70% off end of season",
  ];

  return (
    <section className="mt-4 mb-14 border-b-[1px] border-[lightgray]">
      <Marquee className="my-3">
        {tickerItems.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center text-[18px] font-semibold"
          >
            <p className={`my-3 mx-10`}>{item}</p>
            <FaCircle size={10} color="#aee906" />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Marque;
