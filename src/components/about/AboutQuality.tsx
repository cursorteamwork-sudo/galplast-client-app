"use client";

import "./aboutQuality.css";

import Image from "next/image";
import React from "react";

export function AboutQuality() {
  return (
    <section className="about-quality">
      <div className="about-quality-mask-wrapper">
        <Image
          src="/images/about/aboutQuality/aboutMask.svg"
          alt="Main Mask"
          width={1332}
          height={621}
          className="about-quality-mask"
        />

        <div className="about-quality-left">
          <h2 className="about-quality-quality-title">ЯКІСТЬ</h2>
          <div className="about-quality-water-wrapper">
            <Image
              src="/images/about/aboutQuality/waterMask.svg"
              alt="Water Mask"
              width={469}
              height={595}
              className="about-quality-water"
            />
          </div>
          <div className="about-quality-quality-text">
            <p>
              Гарантуємо стабільно високий рівень продукції завдяки
              внутрішньому контролю, сертифікованій лабораторії та
              відповідності стандартам ISO 9001 і УкрСЕПРО.
            </p>
          </div>
        </div>

        <div className="about-quality-right">
          <h2 className="about-quality-priorities-title">НАШІ ПРІОРІТЕТИ</h2>

          <div className="about-quality-trust-section">
            <h3 className="about-quality-trust-title">ДОВІРА</h3>
            <div className="about-quality-top-wrapper">
              <Image
                src="/images/about/aboutQuality/topMask.svg"
                alt="Top Mask"
                width={710}
                height={225}
                className="about-quality-top"
              />
              <div className="about-quality-trust-text">
                <p>
                  Будуємо стабільні партнерські стосунки з клієнтами, постійно
                  вивчаючи їхні потреби для довготривалого співробітництва.
                </p>
              </div>
            </div>
          </div>

          <div className="about-quality-development-section">
            <h3 className="about-quality-development-title">РОЗВИТОК</h3>
            <div className="about-quality-bottom-wrapper">
              <Image
                src="/images/about/aboutQuality/bottomMask.svg"
                alt="Bottom Mask"
                width={710}
                height={225}
                className="about-quality-bottom"
              />
              <div className="about-quality-development-text">
                <p>
                  Інвестуємо у нові технології, вдосконалюємо процеси та
                  розширюємо асортимент конкурентоспроможної продукції.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
