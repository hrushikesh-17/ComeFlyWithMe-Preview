import React from "react";
import "./travelers.scss";

const travelerImages = import.meta.glob(
  "@/assets/travelers/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const images = Object.values(travelerImages);

const Travelers = () => {
  return (
    <section className="travelers-section">
      <div className="travelers-container">

        <div className="travelers-heading">
          <h2>Our Travelers</h2>

          <p>
            Memories from travelers who explored the world with us.
          </p>
        </div>

        <div className="travelers-grid">
          {images.map((image, index) => (
            <div className="traveler-card" key={index}>
              <img
                src={image}
                alt={`Traveler memory ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Travelers;