
import "./partners.css";

export function Partners() {
  const partners = [
    "/images/main/partners/krai.svg",
    "/images/main/partners/rukav.svg",
    "/images/main/partners/simi.svg",
    "/images/main/partners/silpo.svg",
    "/images/main/partners/velo.svg",
    "/images/main/partners/novus.svg",
    "/images/main/partners/23.svg",
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

