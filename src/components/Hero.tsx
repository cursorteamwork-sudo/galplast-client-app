"use client";
import "./hero.css";

export function Hero() {
  return (
    <div className="hero-wrapper">
      <section className="hero">
        <svg
          className="hero-defs"
          viewBox="0 0 1232 579"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <mask id="heroMask">
              <path
                d="
                  M0 124
                  C0 107 13 94 30 94
                  H305
                  C322 94 335 80 335 64
                  V30
                  C335 13 348 0 365 0
                  H1202
                  C1218 0 1232 13 1232 30
                  V380
                  C1232 397 1218 410 1202 410
                  H880
                  C864 410 850 424 850 440
                  V550
                  C850 566 836 579 820 579
                  H180
                  C160 579 145 563 144 545
                  C143 528 130 516 115 516
                  H30
                  C13 516 0 503 0 486
                  V124
                  Z
                "
                fill="white"
              />
            </mask>

            <pattern
              id="dots"
              width="12"
              height="12"
              patternUnits="userSpaceOnUse"
            >
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
            <img
              src="/images/hero/facebook.svg"
              alt="facebook"
              width={24}
              height={24}
            />
            <img
              src="/images/hero/instagram.svg"
              alt="instagram"
              width={24}
              height={24}
            />
            <img
              src="/images/hero/tiktok.svg"
              alt="tiktok"
              width={24}
              height={24}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
