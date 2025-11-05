import "./about.css";

import { Footer } from "@/components/layout/Footer";

import { AboutCharity } from "./AboutCharity";
import { AboutFeatures } from "./AboutFeatures";
import { AboutHero } from "./AboutHero";
import { AboutHistory } from "./AboutHistory";
import { AboutProduction } from "./AboutProduction";
import { AboutQuality } from "./AboutQuality";
import { AboutStandards } from "./AboutStandards";

export default function AboutPage() {
  return (
    <div className="about-page">
      <AboutHero />
      <AboutQuality />
      <AboutFeatures />
      <AboutHistory />
      <AboutStandards />
      <AboutProduction />
      <AboutCharity />
      <Footer />
    </div>
  );
}

