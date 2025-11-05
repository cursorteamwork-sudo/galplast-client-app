

"use client";

import "./advantages.css";

import React, { useEffect, useRef, useState } from "react";

export function Advantages() {
  const [currentImage, setCurrentImage] = useState("/images/main/advantages/kalush_1.jpg");
  const [galleryImages, setGalleryImages] = useState([
    "/images/main/advantages/gallery1.jpg",
    "/images/main/advantages/gallery2.png",
    "/images/main/advantages/gallery3.png",
    "/images/main/advantages/gallery4.jpg",
  ]);
  const [imageOpacity, setImageOpacity] = useState(1);
  const [firstGalleryItemOpacity, setFirstGalleryItemOpacity] = useState(1);
  const [newGalleryItemOpacity, setNewGalleryItemOpacity] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentImageRef = useRef(currentImage);
  const galleryImagesRef = useRef(galleryImages);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    currentImageRef.current = currentImage;
    galleryImagesRef.current = galleryImages;
  }, [currentImage, galleryImages]);

  const animateGalleryItems = (oldImages: string[], newImages: string[]) => {
    if (!galleryRef.current) return;

    const gallery = galleryRef.current;
    const items = Array.from(gallery.children) as HTMLElement[];
    
    const firstPositions = new Map<string, DOMRect>();
    oldImages.forEach((image, index) => {
      if (items[index]) {
        firstPositions.set(image, items[index].getBoundingClientRect());
      }
    });

    setGalleryImages(newImages);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!galleryRef.current) return;
        const updatedItems = Array.from(galleryRef.current.children) as HTMLElement[];
        
        oldImages.forEach((image) => {
          const firstPos = firstPositions.get(image);
          if (!firstPos) return;
          
          const itemIndex = newImages.indexOf(image);
          if (itemIndex === -1 || !updatedItems[itemIndex]) return;
          
          const lastPos = updatedItems[itemIndex].getBoundingClientRect();
          const deltaX = firstPos.left - lastPos.left;
          const deltaY = firstPos.top - lastPos.top;

          if (Math.abs(deltaX) < 1 && Math.abs(deltaY) < 1) return;
          
          updatedItems[itemIndex].style.transform = `translate(${deltaX}px, ${deltaY}px)`;
          updatedItems[itemIndex].style.transition = "none";
        });

        requestAnimationFrame(() => {
          if (!galleryRef.current) return;
          const finalItems = Array.from(galleryRef.current.children) as HTMLElement[];
          finalItems.forEach((item) => {
            item.style.transform = "";
            item.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
          });
        });
      });
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isAnimating) return;
      
      setIsAnimating(true);
      const current = currentImageRef.current;
      const gallery = galleryImagesRef.current;
      
      const nextImage = gallery[0];
      
      const newGallery = [...gallery.slice(1), current];
      
      setImageOpacity(0);
      setFirstGalleryItemOpacity(0); 
      setNewGalleryItemOpacity(0); 
      
      animateGalleryItems(gallery, newGallery);
      
      setTimeout(() => {
        setCurrentImage(nextImage);
        
        setImageOpacity(1);
        
        setFirstGalleryItemOpacity(1);
        setNewGalleryItemOpacity(1);
        
        setTimeout(() => {
          setIsAnimating(false);
        }, 500);
        }, 500); 
    }, 8000); 

    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <section className="advantages">
      <div className="advantages-container">
        <div className="advantages-content">
          <div className="advantages-header">
            <span className="advantages-label">НАШІ ПЕРЕВАГИ</span>
            <h2 className="advantages-title">
              ЧОМУ <br />
              ОБИРАЮТЬ НАС?
            </h2>
            <div className="advantages-socials-header">
              <img
                src="/images/main/hero/facebook.svg"
                alt="facebook"
                width={24}
                height={24}
              />
              <img
                src="/images/main/hero/instagram.svg"
                alt="instagram"
                width={24}
                height={24}
              />
              <img
                src="/images/main/hero/tiktok.svg"
                alt="tiktok"
                width={24}
                height={24}
              />
            </div>
            <ul className="advantages-list">
              <li className="advantages-item">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6667 5L7.50004 14.1667L3.33337 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>
                  <strong>Стабільність | Досвід <br />
                    З 1995 Року</strong>
                </span>
              </li>
              <li className="advantages-item">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6667 5L7.50004 14.1667L3.33337 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Продукція сертифікована і <br />
                   безпечна для здоров&apos;я</span>
              </li>
              <li className="advantages-item">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6667 5L7.50004 14.1667L3.33337 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>
                  Індивідуальний підхід до клієнта<br /> 
                  та гнучкі умови співпраці
                </span>
              </li>
              <li className="advantages-item">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6667 5L7.50004 14.1667L3.33337 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Сучасне Обладнання Та<br /> 
                  Лабораторний Контроль</span>
              </li>
            </ul>
          </div>

          <div className="advantages-image-wrapper">
            <div className="advantages-main-image">
              <img
                key={currentImage}
                src={currentImage}
                alt="Наша команда"
                className="advantages-main-img"
                style={{ opacity: imageOpacity }}
              />
              <div className="advantages-socials">
                <img
                  src="/images/main/hero/facebook.svg"
                  alt="facebook"
                  width={24}
                  height={24}
                />
                <img
                  src="/images/main/hero/instagram.svg"
                  alt="instagram"
                  width={24}
                  height={24}
                />
                <img
                  src="/images/main/hero/tiktok.svg"
                  alt="tiktok"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="advantages-gallery" ref={galleryRef}>
          {galleryImages.map((image, index) => {
            const isFirstItem = index === 0; 
            const isNewItem = index === galleryImages.length - 1; 
            return (
              <div
                key={image} 
                className="advantages-gallery-item"
                style={{ 
                  opacity: isFirstItem 
                    ? firstGalleryItemOpacity 
                    : isNewItem 
                    ? newGalleryItemOpacity 
                    : 1 
                }}
              >
                <img
                  src={image}
                  alt={`Галерея ${index + 1}`}
                  className="advantages-gallery-img"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

