/**
 * Footer Component (Підвал сайту)
 * 
 * Компонент підвалу з навігацією, контактною інформацією та копірайтом.
 * Містить:
 * - Навігаційні посилання
 * - Контактну інформацію (Instagram, телефон, email, адреса, години роботи)
 * - Копірайт
 * 
 * Використовується в: src/app/page.tsx
 */

"use client";

import "./footer.css";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <nav className="footer-nav">
            <Link href="/" className="footer-nav-link">
              ГОЛОВНА
            </Link>
            <Link href="/about" className="footer-nav-link">
              ПРО НАС
            </Link>
            <Link href="/brands" className="footer-nav-link">
              ТОРГОВІ МАРКИ
            </Link>
            <Link href="/partners" className="footer-nav-link">
              ПАРТНЕРАМ
            </Link>
          </nav>

          <div className="footer-contacts">
            <h3 className="footer-contacts-title">КОНТАКТИ</h3>
            <div className="footer-contacts-list">
              <div className="footer-contact-item">
                <img
                  src="/images/footer/inst.svg"
                  alt=""
                  className="footer-contact-icon"
                  width={16}
                  height={16}
                />
                <span>vodarohatynska.2025</span>
              </div>
              <div className="footer-contact-item">
                <img
                  src="/images/footer/phone.svg"
                  alt=""
                  className="footer-contact-icon"
                  width={16}
                  height={16}
                />
                <span>+380976598679</span>
              </div>
              <div className="footer-contact-item">
                <img
                  src="/images/footer/mail.svg"
                  alt=""
                  className="footer-contact-icon"
                  width={16}
                  height={16}
                />
                <span>voda_rohatynska@gmail.com</span>
              </div>
              <div className="footer-contact-item">
                <img
                  src="/images/footer/geo.svg"
                  alt=""
                  className="footer-contact-icon"
                  width={16}
                  height={16}
                />
                <span>вул. Шевченка, Львів, 79000</span>
              </div>
              <div className="footer-contact-item">
                <img
                  src="/images/footer/clock.svg"
                  alt=""
                  className="footer-contact-icon"
                  width={16}
                  height={16}
                />
                <span>Пн-Пт, 09:00-18:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © vodarohatynska.2025
          </p>
        </div>
      </div>
    </footer>
  );
}

