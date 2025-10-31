"use client";

import "./hero.css";

export function Hero() {
  return (
    <section className="hero">
      <svg className="hero-defs" viewBox="0 0 1232 579" preserveAspectRatio="none" aria-hidden>
        <defs>
          <mask id="heroMask">
            <path d="M0 124.111C0 107.543 13.4315 94.1114 30 94.1114H167.75H305.5C322.069 94.1114 335.5 80.6799 335.5 64.1114V30C335.5 13.4315 348.931 0 365.5 0H1202C1218.57 0 1232 13.4315 1232 30V374.5C1232 391.069 1218.57 404.5 1202 404.5H908C891.431 404.5 878 417.931 878 434.5V549C878 565.569 864.569 579 848 579H163.277C152.749 579 144.061 570.763 143.5 560.25C142.939 549.737 134.251 541.5 123.723 541.5H30C13.4315 541.5 0 528.069 0 511.5V124.111Z" fill="white"/>
          </mask>

          <pattern id="dots" width="12" height="12" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#ffffff" />
          </pattern>
        </defs>
      </svg>

      <div className="hero-media">
        <img
          className="hero-gif"
          src="/images/hero/5c2b14b13f484e409144508a95c910bb0285aa1a.gif"
          alt="hero background"
        />
        <div className="hero-media-pattern" />
      </div>

      <div className="hero-content">
        <h1 className="hero-title">Галпласт</h1>
        <div className="hero-card">
          <p className="hero-text">
            Ми дбаємо про якість,<br />
            щоб ви насолоджувались<br />
            свіжістю щодня
          </p>
          <button className="hero-cta">ПЕРЕГЛЯНУТИ КАТАЛОГ</button>
        </div>

        <div className="hero-socials">
          <img src="/images/hero/facebook.svg" alt="facebook" width={24} height={24} />
          <img src="/images/hero/instagram.svg" alt="instagram" width={24} height={24} />
          <img src="/images/hero/tiktok.svg" alt="tiktok" width={24} height={24} />
        </div>
      </div>
    </section>
  );
}
