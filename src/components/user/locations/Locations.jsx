import "./locations.scss";

const Locations = ({ title, locations = [] }) => {
  return (
    <section className="locations">
      <div className="locations-container">
        <div className="locations-heading">
          <p className="locations-eyebrow">EXPLORE</p>

          <h2>{title}</h2>
        </div>

        <div className="locations-list">
          {locations.map((location, index) => (
            <div className="location-item" key={`${location}-${index}`}>
              <span className="location-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="location-name">{location}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;