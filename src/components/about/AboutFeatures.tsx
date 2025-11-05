"use client";

import "./aboutFeatures.css";

import Image from "next/image";
import React from "react";

export function AboutFeatures() {
  return (
    <section className="about-features-section">
      <div className="about-features">
        <div className="about-feature-card">
          <div className="about-feature-icon">
            <Image
              src="/images/main/about/guard.svg"
              alt="Сертифіковане виробництво"
              width={56}
              height={56}
            />
          </div>
          <h3 className="about-feature-title">Сертифіковане виробництво</h3>
          <p className="about-feature-subtitle">(ISO 9001:2009, УкрСЕПРО)</p>
        </div>

        <div className="about-feature-card">
          <div className="about-feature-icon">
            <Image
              src="/images/main/about/cycle.svg"
              alt="Повний цикл виробництва"
              width={56}
              height={56}
            />
          </div>
          <h3 className="about-feature-title">Повний цикл</h3>
          <p className="about-feature-subtitle">Від джерела до пляшки</p>
        </div>

        <div className="about-feature-card">
          <div className="about-feature-icon">
            <Image
              src="/images/main/about/water.svg"
              alt="Власна свердловина"
              width={56}
              height={56}
            />
          </div>
          <h3 className="about-feature-title">Власна свердловина</h3>
          <p className="about-feature-subtitle">Від джерела до пляшки</p>
        </div>
      </div>
    </section>
  );
}

