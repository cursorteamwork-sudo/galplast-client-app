

"use client";

import "./videoShowcase.css";

import React, { useState } from "react";

export function VideoShowcase() {
  const videos = [
    {
      id: 1,
      thumbnail: "/images/hero/5c2b14b13f484e409144508a95c910bb0285aa1a.gif",
      icon: "🔍",
    },
    {
      id: 2,
      thumbnail: "/images/hero/5c2b14b13f484e409144508a95c910bb0285aa1a.gif",
      icon: "🎬",
    },
    {
      id: 3,
      thumbnail: "/images/hero/5c2b14b13f484e409144508a95c910bb0285aa1a.gif",
      icon: "🎬",
    },
    {
      id: 4,
      thumbnail: "/images/hero/5c2b14b13f484e409144508a95c910bb0285aa1a.gif",
      icon: "🎬",
    },
    {
      id: 5,
      thumbnail: "/images/hero/5c2b14b13f484e409144508a95c910bb0285aa1a.gif",
      icon: "🎬",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(2);

  const handleCardClick = (index: number) => {
    if (index !== currentIndex) {
      setCurrentIndex(index);
    }
  };

  return (
    <section className="video-showcase">
      <div className="video-showcase-container">
        <div className="video-showcase-socials">
          <a href="#" aria-label="Facebook">
            <img
              src="/images/hero/facebook.svg"
              alt="facebook"
              width={24}
              height={24}
            />
          </a>
          <a href="#" aria-label="Instagram">
            <img
              src="/images/hero/instagram.svg"
              alt="instagram"
              width={24}
              height={24}
            />
          </a>
          <a href="#" aria-label="TikTok">
            <img
              src="/images/hero/tiktok.svg"
              alt="tiktok"
              width={24}
              height={24}
            />
          </a>
        </div>

        <div className="video-showcase-carousel">
          {videos.map((video, index) => {
            const isCenter = index === currentIndex;
            const offset = index - currentIndex;
            const isVisible = Math.abs(offset) <= 2;

            return (
              <div
                key={video.id}
                className={`video-showcase-card ${
                  isCenter ? "video-showcase-card-center" : ""
                } ${!isVisible ? "video-showcase-card-hidden" : ""}`}
                style={{
                  zIndex: isCenter ? 5 : 4 - Math.abs(offset),
                  transform: `translateX(${offset * 240}px) scale(${
                    isCenter ? 1 : Math.abs(offset) === 1 ? 0.9 : 0.8
                  })`,
                  opacity: isCenter ? 1 : Math.abs(offset) === 1 ? 0.6 : 0.3,
                  filter: isCenter ? "blur(0px)" : `blur(${Math.abs(offset) === 1 ? 4 : 8}px)`,
                }}
                onClick={() => handleCardClick(index)}
              >
                <div className="video-showcase-card-content">
                  <div
                    className="video-showcase-card-thumbnail"
                    style={{
                      backgroundImage: `url(${video.thumbnail})`,
                    }}
                  >
                    <button className="video-showcase-play-btn" aria-label="Play video">
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="24" cy="24" r="24" fill="#000000" fillOpacity="0.6" />
                        <path
                          d="M20 16L32 24L20 32V16Z"
                          fill="#FFFFFF"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          <img
            src="/images/VideoShowcase/phone.svg"
            alt=""
            className="video-showcase-phone-frame"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}

