import Hero from "./components/sections/Hero";
import Features from "./components/sections/Feature";
import img from "./assets/images/hero.png"
export default function Home() {
  return (
    <>
      <Hero
        imgSrc={img}
        h1Content="Predict the future by <br /> creating it"
        pContent="YOU DIDN'T COME THIS FAR TO STOP."
      />
      <Features />
    </>
  );
}
