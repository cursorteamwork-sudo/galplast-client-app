"use client";

import "./aboutProduction.css";

import Image from "next/image";
import React from "react";

export function AboutProduction() {
  return (
    <section className="about-production">
      <div className="about-production-mask-wrapper">
        <Image
          src="/images/about/AboutProduction/aboutProduction.svg"
          alt="Production mask"
          width={1232}
          height={635}
          className="about-production-mask"
        />
        
        <h2 className="about-production-title">ВИРОБНИЦТВО</h2>
        
        <div className="about-production-panels">
          <div className="about-production-panel">
            <Image
              src="/images/about/AboutProduction/bottles.svg"
              alt="Лінія розливу води"
              width={389}
              height={502}
              className="about-production-panel-image"
            />
          </div>

          <div className="about-production-panel">
            <Image
              src="/images/about/AboutProduction/factory.svg"
              alt="Виробничий комплекс"
              width={389}
              height={502}
              className="about-production-panel-image"
            />
          </div>

          <div className="about-production-panel">
            <Image
              src="/images/about/AboutProduction/tm_my.svg"
              alt="Лінія розливу напоїв"
              width={389}
              height={502}
              className="about-production-panel-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

