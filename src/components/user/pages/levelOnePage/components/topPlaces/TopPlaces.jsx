import "./topPlaces.scss";

const TopPlaces = ({ data }) => {
  if (!data?.topPlaces?.length) {
    return null;
  }

  return (
    <section className="top-places">
      <div className="top-places-container">

        <div className="top-places-header">
          <p className="section-tag">EXPLORE MORE</p>

          <h2>Top Places to Explore</h2>

          <p className="section-description">
            Discover the places, attractions and experiences that make this
            destination unforgettable.
          </p>
        </div>

        <div className="top-places-grid">
          {data.topPlaces.map((place, index) => (
            <article className="top-place-card" key={index}>
              {place.image && (
                <div className="top-place-image">
                  <img
                    src={place.image}
                    alt={place.title}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              )}

              <div className="top-place-content">
                <span className="top-place-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{place.title}</h3>

                <p>{place.description}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TopPlaces;