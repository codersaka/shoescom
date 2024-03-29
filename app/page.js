import FancyCard from "./components/Fancy card/FancyCard";
import HomeHero from "./components/Hero/HomeHero";
import HomeProductSection from "./components/Home Product/HomeProductSection";
import HoverCard from "./components/Hover card/HoverCard";

export default function Home() {
  return (
    <main className="px-5">
      <HomeHero />
      <HoverCard />
      <FancyCard />
      <HomeProductSection />
    </main>
  );
}
