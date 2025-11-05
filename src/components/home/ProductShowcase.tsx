

"use client";

import "./productShowcase.css";

import React, { ReactNode, useState } from "react";


export interface Product {
  name: string;
  image: string;
  isMain?: boolean; 
  benefits: (string | ReactNode)[]; 
}

const PRODUCTS: Product[] = [
  { 
    name: "РОГАТИНЬСКА", 
    image: "/images/main/products/rogatynska.svg", 
    isMain: true,
    benefits: [
      "Мінеральна лікувально-столова вода (~8 PH);",
      "Видобувається з джерела 80 м глибини;",
      "Позитивно впливає на шлунково-кишковий тракт;",
      "Підтримує водно-сольовий баланс;",
      "Активує антиоксидантну систему;",
      <>
        Рекомендована при гастритах, колітах, панкреатиті, <br />
        функціональних розладах травлення.
      </>,
    ]
  },
  { 
    name: "ROKSOLANA", 
    image: "/images/main/products/roksolana.svg", 
    isMain: false,
    benefits: [
      "Добувається з природнього джерела;",
      "Здійснює позитивний вплив на людський організм;",
      "Вода для активних та енергійних людей;",
      "Різновиди: сильногазована та негазована.",
    ]
  },
  { 
    name: 'ТМ "МИ"', 
    image: "/images/main/products/tm_my.svg", 
    isMain: false,
    benefits: [
      "Лінійка фруктових напоїв з соком та на цукрі;",
      "Виготовлені на натуральних фруктових концентратах;",
      <>
        Збагачені вітамінами, мікроелементами, <br />
        глюкозою та фруктозою;
      </>,
      <>
        Ідеальні для вживання охолодженими в <br />
        будь-яку пору року
      </>,
    ]
  },
  { 
    name: "Aqua Fruit", 
    image: "/images/main/products/aqua_fruit.svg", 
    isMain: false,
    benefits: [
      "Виготовлені за сучасними технологіями;",
      "З якісної сировини та ароматами тропічних фруктів;",
      "Екзотичний смак освіжає та дарує відчуття задоволення;",
      "Ідеально втамовують спрагу — пий охолодженим.",
    ]
  },
  // Додайте новий продукт тут:
  // {
  //   name: "НОВИЙ ПРОДУКТ",
  //   image: "/images/main/products/new_product.svg",
  //   isMain: false,
  //   benefits: [
  //     "Опис 1;",
  //     "Опис 2;",
  //     "Опис 3.",
  //   ]
  // },
];

export function ProductShowcase() {
  const brands = PRODUCTS;

  const [selectedBrand, setSelectedBrand] = useState(brands[0]);
  const [previousBrand, setPreviousBrand] = useState(brands[0]);
  const [imageOpacity, setImageOpacity] = useState(1);
  const [previousImageOpacity, setPreviousImageOpacity] = useState(0);
  const [benefitsOpacity, setBenefitsOpacity] = useState(1);

  const getNextBrand = () => {
    const currentIndex = brands.findIndex((brand) => brand.name === selectedBrand.name);
    const nextIndex = (currentIndex + 1) % brands.length;
    return brands[nextIndex];
  };

  const nextBrand = getNextBrand();

  return (
    <section className="product-showcase">
      <div className="product-showcase-content">
        <div className="product-showcase-left">
          <h2 className="product-showcase-trademarks-title">ТОРГОВІ МАРКИ</h2>
          <ul className="product-showcase-brands">
            {brands.map((brand, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    if (brand.name === selectedBrand.name) return;
                    
                    setPreviousBrand(selectedBrand);
                    setPreviousImageOpacity(1);
                    setBenefitsOpacity(0);
                    setImageOpacity(0);
                    
                    setTimeout(() => {
                      setSelectedBrand(brand);
                    }, 300);
                    
                    setTimeout(() => {
                      setImageOpacity(1);
                      setBenefitsOpacity(1);
                      setPreviousImageOpacity(0);
                    }, 350);
                  }}
                  className={
                    selectedBrand.name === brand.name
                      ? brand.isMain
                        ? "product-showcase-brand-btn product-showcase-brand-btn-main product-showcase-brand-btn-active"
                        : "product-showcase-brand-btn product-showcase-brand-btn-active"
                      : "product-showcase-brand-btn"
                  }
                >
                  {brand.name}
                </button>
              </li>
            ))}
          </ul>
          <button className="product-showcase-catalog-btn">
            ПЕРЕГЛЯНУТИ КАТАЛОГ
          </button>
        </div>

        <div className="product-showcase-right-section">
          <div className="product-showcase-bottle-wrapper">
            <img
              src={previousBrand.image}
              alt=""
              className="product-showcase-bottle product-showcase-bottle-previous"
              key={`previous-${previousBrand.image}`}
              style={{ 
                opacity: previousImageOpacity
              }}
            />
            <img
              src={selectedBrand.image}
              alt={selectedBrand.name}
              className="product-showcase-bottle product-showcase-bottle-current"
              key={selectedBrand.image}
              style={{ 
                opacity: imageOpacity
              }}
            />
          </div>

          <div 
            className="product-showcase-right" 
            style={{ 
              opacity: benefitsOpacity
            }}
          >
            <h2 className="product-showcase-benefits-title">
              ОЗДОРОВЧІ ВЛАСТИВОСТІ:
            </h2>
            <ul className="product-showcase-benefits">
              {selectedBrand.benefits.map((benefit, index) => (
                <li key={index} className="product-showcase-benefit">
                  {benefit}
                </li>
              ))}
            </ul>
            <img
              src={nextBrand.image}
              alt=""
              className="product-showcase-next-bottle"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

