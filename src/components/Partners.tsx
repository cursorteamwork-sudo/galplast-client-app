import "./partners.css";

export function Partners() {
  const partners = [
    "/images/partners/krai.svg",
    "/images/partners/rukav.svg",
    "/images/partners/simi.svg",
    "/images/partners/silpo.svg",
    "/images/partners/velo.svg",
    "/images/partners/novus.svg",
    "/images/partners/23.svg",
  ];

  return (
    <section className="partners">
      <div className="partners-container">
        {partners.map((partner, index) => (
          <img
            key={index}
            src={partner}
            alt={`Partner ${index + 1}`}
            className="partners-logo"
          />
        ))}
      </div>
    </section>
  );
}

