"use client";

import "./about.css";

import Image from "next/image";

export function About() {
  return (
    <section className="about">
      <div className="about-content">
          <div className="about-header">
            <span className="about-label">ПРО НАС</span>
            <h2 className="about-title">
              ТЗОВ СП &quot;Галпласт&quot;<br />
              ВИРОБНИЦТВО ВОДИ
            </h2>
            <button className="about-cta">ДІЗНАТИСЬ БІЛЬШЕ</button>
            <p className="about-text">
              Ми сучасне українське підприємство з багаторічною історією, що
              спеціалізується на розливі мінеральної води та виробництві
              ПЕТ-пляшок. Ми поєднуємо якість, інновації та турботу про
              здоров&apos;я споживачів.
            </p>
          </div>

          <div className="about-image-wrapper">
            <Image
              src="/images/about/pic_about.svg"
              alt="Про нас"
              width={500}
              height={400}
              className="about-image"
            />
          </div>
        </div>

        <div className="about-features">
          <div className="about-feature-card">
            <div className="about-feature-icon">
              <img
                src="/images/about/guard.svg"
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
            <img
                src="/images/about/cycle.svg"
                alt="Сертифіковане виробництво"
                width={56}
                height={56}
              />
            </div>
            <h3 className="about-feature-title">Повний цикл</h3>
            <p className="about-feature-subtitle">Від джерела до пляшки</p>
          </div>

          <div className="about-feature-card">
            <div className="about-feature-icon">
            <img
                src="/images/about/water.svg"
                alt="Сертифіковане виробництво"
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

