import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Advantages } from "@/components/Advantages";
import { Partners } from "@/components/Partners";
import { ProductShowcase } from "@/components/ProductShowcase";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Advantages />
      <Partners />
      <ProductShowcase />
    </>
  );
}
