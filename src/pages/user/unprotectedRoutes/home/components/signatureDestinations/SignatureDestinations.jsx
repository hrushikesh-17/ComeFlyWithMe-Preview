import { useNavigate } from "react-router-dom";
import "./signatureDestinations.scss";

// Assets
import indonesiaImg from "@/assets/indonesia.jpg";
import thailandImg from "@/assets/thailand.jpg";
import vietnamImg from "@/assets/vietnam.jpg";
import malaysiaImg from "@/assets/malaysia.jpg";
import singaporeImg from "@/assets/singapore.jpg";
import philippinesImg from "@/assets/philippines.jpg";

const destinations = [
  {
    title: "Indonesia",
    subtitle: "Luxury Islands • Temples • Adventure",
    image: indonesiaImg,
    type: "destination",
    link: "/bali",
  },
  {
    title: "Thailand",
    subtitle: "Beaches • Wellness • Nightlife",
    image: thailandImg,
    type: "destination",
    link: "/phuket",
  },
  {
    title: "Vietnam",
    subtitle: "Culture • Nature • Cuisine",
    image: vietnamImg,
    type: "booking",
  },
  {
    title: "Malaysia",
    subtitle: "Rainforests • Islands • Skyline",
    image: malaysiaImg,
    type: "booking",
  },
  {
    title: "Singapore",
    subtitle: "Luxury • Shopping • Gardens",
    image: singaporeImg,
    type: "booking",
  },
  {
    title: "Philippines",
    subtitle: "Crystal Waters • Hidden Islands",
    image: philippinesImg,
    type: "booking",
  },
];

const SignatureDestinations = () => {
  const navigate = useNavigate();

  const handleDestinationClick = (destination) => {
    if (destination.type === "destination") {
      navigate(destination.link);
      return;
    }

    navigate("/booking", {
      state: {
        destination: destination.title,
      },
    });
  };

  return (
    <section className="signature-destinations">
      <div className="container">

        <p className="section-tag">
          SIGNATURE JOURNEYS
        </p>

        <h2>
          Explore Our Signature Destinations
        </h2>

        <p className="section-description">
          Curated holidays across Southeast Asia,
          designed with luxury, comfort and unforgettable
          experiences in mind.
        </p>

        <div className="destination-grid">

          {destinations.map((destination) => (
            <div
              className="destination-card"
              key={destination.title}
            >
              <div
                className="destination-image"
                onClick={() => handleDestinationClick(destination)}
              >
                <img
                  src={destination.image}
                  alt={destination.title}
                />

                <div className="image-title">
                  <h3>{destination.title}</h3>
                </div>
              </div>

              <div className="destination-content">

                <p>
                  {destination.subtitle}
                </p>

                <button
                  type="button"
                  onClick={() =>
                    handleDestinationClick(destination)
                  }
                >
                  {destination.type === "destination"
                    ? "Explore Journey →"
                    : "Plan This Journey →"}
                </button>

              </div>
            </div>
          ))}

          {/* BESPOKE JOURNEY */}

          <div className="destination-card custom-card">

            <div className="custom-icon">
              ✦
            </div>

            <h3>
              Bespoke Journeys
            </h3>

            <p>
              Tell us where you dream of travelling.
              <br />
              <br />
              Every itinerary is personally crafted around
              your destination, travel style and budget.
            </p>

            <button
              type="button"
              onClick={() => navigate("/booking")}
            >
              Design My Journey →
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default SignatureDestinations;