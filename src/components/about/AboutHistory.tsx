"use client";

import "./aboutHistory.css";
import Image from "next/image";
import React from "react";

export function AboutHistory() {
  return (
    <section className="about-history">
      <div className="about-history-container">
        <div className="about-history-header">
          <h2 className="about-history-title">ІСТОРІЯ</h2>
          <h2 className="about-history-title">ВИРОБНИЦТВА</h2>
        </div>

        <div className="about-history-timeline">
          <Image
            src="/images/about/history/historyLine.svg"
            alt="History timeline"
            width={783}
            height={422}
            className="about-history-line"
          />

        </div>

        <div className="about-history-info">
          <div className="history-column">
            <h3>1995 РІК</h3>
            <p>Заснування ЗАТ СП “Галлпласт” у м. Рогатин</p>
            <p>Виробництво та реалізація ПЕТ - пляшок</p>
          </div>

          <div className="history-column">
            <h3>1998 РІК</h3>
            <p>Перереєстрація в ТзОВ «Галлпласт»</p>
            <p>Перенесення виробництва до с. Лучинці</p>
            <p>Відкриття свердловини глибиною 80 м.</p>
            <p>Запуск серійного розливу</p>
          </div>

          <div className="history-column">
            <h3>2020 РІК - Сьогодення</h3>
            <p>Виробництво у ПЕТ та склі (0,5–18,9 л)</p>
            <p>Власна лабораторія контролю якості</p>
            <p>Постійне вдосконалення згідно з ISO 9001</p>
          </div>
        </div>
      </div>
    </section>
  );
}
