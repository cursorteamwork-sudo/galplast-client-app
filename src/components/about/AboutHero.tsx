"use client";

import "./aboutHero.css";

import Image from "next/image";
import React from "react";

export function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero-image-wrapper">
        <Image
          src="/images/about/hero/about.svg"
          alt="Про нас"
          width={1232}
          height={528}
          className="about-hero-image"
        />
      </div>

      <div className="about-hero-content">
        <span className="about-hero-label">ПРО НАС</span>
        <div className="about-hero-row">
          <div className="about-hero-left">
            <h1 className="about-hero-title">
              ТЗОВ СП &quot;Галпласт&quot;
              <br />
              ВИРОБНИЦТВО ВОДИ
            </h1>
          </div>

          <div className="about-hero-right">
            <p className="about-hero-text">
              Ми сучасне українське підприємство з багаторічною історією, що
              спеціалізується на розливі мінеральної води та виробництві
              ПЕТ-пляшок. Ми поєднуємо якість, інновації та турботу про
              здоров&apos;я споживачів.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

