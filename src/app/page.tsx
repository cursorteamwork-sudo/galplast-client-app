

import { About } from "@/components/home/About";
import { Advantages } from "@/components/home/Advantages";
import { Contact } from "@/components/home/Contact";
import { Hero } from "@/components/home/Hero";
import { Partners } from "@/components/home/Partners";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { VideoShowcase } from "@/components/home/VideoShowcase";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Advantages />
      <Partners />
      <ProductShowcase />
      <VideoShowcase />
      <Contact />
      <Footer />
    </>
  );
}
