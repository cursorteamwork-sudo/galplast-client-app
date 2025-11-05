"use client";

import "./aboutCharity.css";

import Image from "next/image";
import React from "react";

export function AboutCharity() {
  return (
    <section className="about-charity">
      <div className="about-charity-content">
        <h2 className="about-charity-title">
          БЛАГОДІЙНІСТЬ – ЧАСТИНА
          <br />
          НАШОЇ ФІЛОСОФІЇ
        </h2>
        

        <div className="about-charity-main">
        <h3 className="about-charity-subtitle">
          Гуманітарна допомога ЗСУ та громадам
        </h3>
          <div className="about-charity-mask">
            <Image
              src="/images/about/AboutCharity/charityMask.svg"
              alt="Charity mask"
              width={678}
              height={365}
              className="about-charity-mask-image"
            />
          </div>


          <div className="about-charity-hands">
            <Image
              src="/images/about/AboutCharity/hands.svg"
              alt="Handshake"
              width={506}
              height={181}
              className="about-charity-hands-image"
            />
          </div>

          <div className="about-charity-text">
            <p>
              Ми віримо, що сила бізнесу — у здатності допомагати.
              Компанія Гал Пласт активно підтримує ініціативи на користь
              захисників України, медичних закладів і місцевих громад.
              Ми передаємо питну воду, засоби гігієни та іншу допомогу
              туди, де вона найбільше потрібна.
            </p>
            <p>
              Разом із партнерами ми доводимо: навіть маленькі добрі
              справи змінюють життя.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

