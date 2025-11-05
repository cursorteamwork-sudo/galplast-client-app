

"use client";

import "./contact.css";

import React, { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const mapMarkers = [
    { id: 1, top: "12%", left: "20%" }, // Lviv
    { id: 2, top: "45%", left: "11%" }, // Lutsk
    { id: 3, top: "55%", left: "46.5%" }, // Rivne
    { id: 4, top: "32%", left: "91%" }, // Kyiv
    { id: 5, top: "88%", left: "2%" }, // Khmelnytskyi
    { id: 6, top: "80%", left: "20%" }, // Vinnytsia
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Тут буде логіка відправки форми
    console.log("Form submitted:", formData);
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-map-section">
          <h2 className="contact-map-title">ГЕОГРАФІЯ ПОКРИТТЯ</h2>
          <div className="contact-map-wrapper">
            <img
              src="/images/main/contact/contact.svg"
              alt="Географія покриття"
              className="contact-map"
            />
            {mapMarkers.map((marker) => (
              <img
                key={marker.id}
                src="/images/main/contact/geo.svg"
                alt=""
                className="contact-map-icon"
                style={{
                  top: marker.top,
                  left: marker.left,
                }}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>

        <div className="contact-form-section">
          <h2 className="contact-form-title">ЗВ&apos;ЯЖІТЬСЯ З НАМИ</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-field">
              <label htmlFor="name" className="contact-form-label">
                Ім&apos;я
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="contact-form-input"
                placeholder="Введіть ім'я..."
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-form-field">
              <label htmlFor="surname" className="contact-form-label">
                Прізвище
              </label>
              <input
                type="text"
                id="surname"
                name="surname"
                className="contact-form-input"
                placeholder="Введіть прізвище..."
                value={formData.surname}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-form-field">
              <label htmlFor="email" className="contact-form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="contact-form-input"
                placeholder="Введіть Email..."
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-form-field">
              <label htmlFor="message" className="contact-form-label">
                Чим ми можемо допомогти?
              </label>
              <textarea
                id="message"
                name="message"
                className="contact-form-textarea"
                placeholder="Напишіть своє повідомлення..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="contact-form-submit">
              Надіслати повідомлення
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

