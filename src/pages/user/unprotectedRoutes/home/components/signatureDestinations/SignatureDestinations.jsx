import { useNavigate } from "react-router-dom";
import "./signatureDestinations.scss";

// Assets
import indonesiaImg from "@/assets/optimized/indonesia.webp";
import thailandImg from "@/assets/optimized/thailand.webp";
import vietnamImg from "@/assets/optimized/vietnam.webp";
import malaysiaImg from "@/assets/optimized/malaysia.webp";
import singaporeImg from "@/assets/optimized/singapore.webp";
import philippinesImg from "@/assets/optimized/philippines.webp";
import japanImg from "@/assets/optimized/japan(1).webp";
import southKoreaImg from "@/assets/optimized/seoul(1).webp";

const destinations = [
  {
    title: "Indonesia",
    subtitle: "Luxury Islands • Temples • Adventure",
    image: indonesiaImg,
    link: "/bali",
  },
  {
    title: "Thailand",
    subtitle: "Beaches • Wellness • Nightlife",
    image: thailandImg,
    link: "/phuket",
  },
  {
    title: "Vietnam",
    subtitle: "Culture • Nature • Cuisine",
    image: vietnamImg,
    link: "/vietnam",
  },
  {
    title: "Malaysia",
    subtitle: "Rainforests • Islands • Skyline",
    image: malaysiaImg,
    link: "/malaysia",
  },
  {
    title: "Singapore",
    subtitle: "Luxury • Shopping • Gardens",
    image: singaporeImg,
    link: "/singapore",
  },
  {
    title: "Philippines",
    subtitle: "Crystal Waters • Hidden Islands",
    image: philippinesImg,
    link: "/philippines",
  },
  {
    title: "Japan",
    subtitle: "Tradition • Cities • Scenic Beauty",
    image: japanImg,
    link: "/japan",
  },
  {
    title: "South Korea",
    subtitle: "K-Culture • History • Modern Seoul",
    image: southKoreaImg,
    link: "/south-korea",
  },
];

const SignatureDestinations = () => {
  const navigate = useNavigate();

  const handleDestinationClick = (destination) => {
    navigate(destination.link);
  };

  return (
    <section className="signature-destinations">
      <div className="container">
        <p className="section-tag">SIGNATURE JOURNEYS</p>

        <h2>Explore Our Signature Destinations</h2>

        <p className="section-description">
          Curated holidays across Asia, designed with luxury, comfort and
          unforgettable experiences in mind.
        </p>

        <div className="destination-grid">
          {destinations.map((destination) => (
            <div className="destination-card" key={destination.title}>
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
                <p>{destination.subtitle}</p>

                <button
                  type="button"
                  onClick={() => handleDestinationClick(destination)}
                >
                  Explore Journey →
                </button>
              </div>
            </div>
          ))}

          <div className="destination-card custom-card">
            <div className="custom-icon">✦</div>

            <h3>Bespoke Journeys</h3>

            <p>
              Tell us where you dream of travelling.
              <br />
              <br />
              Every itinerary is personally crafted around your destination,
              travel style and budget.
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