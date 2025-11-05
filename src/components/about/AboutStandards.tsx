"use client";

import "./aboutStandards.css";

import Image from "next/image";
import React from "react";

export function AboutStandards() {
  return (
    <section className="about-standards">
      <div className="about-standards-container">
        <div className="about-standards-background"></div>
        
        <div className="about-standards-mask-wrapper">
          <Image
            src="/images/about/AboutStandards/aboutStandards.svg"
            alt="Standards mask"
            width={600}
            height={400}
            className="about-standards-mask"
          />
          
          <div className="about-standards-text">
            <div className="about-standards-text-step step-1">
              <span>НАШІ</span>
            </div>
            <div className="about-standards-text-step step-2">
              <span>СТАНДАРТИ</span>
            </div>
            <div className="about-standards-text-step step-3">
              <span>ЯКОСТІ</span>
            </div>
          </div>
        </div>
      </div>

      <div className="about-standards-content">
        <div className="about-standards-cards">
          <div className="about-standards-card">
            <div className="about-standards-card-icon">
              <Image
                src="/images/about/AboutStandards/icons/guard.svg"
                alt="Міжнародні сертифікати"
                width={36}
                height={36}
              />
            </div>
            <h3 className="about-standards-card-title">Міжнародні сертифікати</h3>
          </div>

          <div className="about-standards-card">
            <div className="about-standards-card-icon">
              <Image
                src="/images/about/AboutStandards/icons/eco.svg"
                alt="Екологічне пакування"
                width={36}
                height={36}
              />
            </div>
            <h3 className="about-standards-card-title">Екологічне пакування</h3>
          </div>

          <div className="about-standards-card">
            <div className="about-standards-card-icon">
              <Image
                src="/images/about/AboutStandards/icons/water.svg"
                alt="Природна чистота без штучних домішок"
                width={36}
                height={36}
              />
            </div>
            <h3 className="about-standards-card-title">Природна чистота без штучних домішок</h3>
          </div>

          <div className="about-standards-card">
            <div className="about-standards-card-icon">
              <Image
                src="/images/about/AboutStandards/icons/search.svg"
                alt="Контроль якості на кожному етапі"
                width={36}
                height={36}
              />
            </div>
            <h3 className="about-standards-card-title">Контроль якості на кожному етапі</h3>
          </div>
        </div>

        <div className="about-standards-text-blocks">
          <p className="about-standards-text-block">
            Для нас якість — це не просто вимога, а частина філософії ГалПласт. Кожна крапля води проходить ретельний контроль на всіх етапах — від джерела до пляшки. Ми дотримуємося міжнародних стандартів ISO 9001 та системи НАССР, що гарантує безпеку і стабільність продукції.
          </p>
          <p className="about-standards-text-block">
            Наші лабораторії щодня перевіряють хімічний, мікробіологічний та органолептичний склад води, щоб зберегти її природну чистоту й баланс мінералів. Ми використовуємо лише сертифіковані матеріали для пакування, які не впливають на смак і властивості води.
          </p>
        </div>
      </div>
    </section>
  );
}

