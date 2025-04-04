import Hero from "./components/sections/Hero";
import Features from "./components/sections/Feature";
export default function Home() {
  return (
    <>
      <Hero
        imgSrc="/images/hero.jpg"
        h1Content="Predict the future by <br /> creating it"
        pContent="YOU DIDN'T COME THIS FAR TO STOP."
      />
      <Features />
    </>
  );
}
