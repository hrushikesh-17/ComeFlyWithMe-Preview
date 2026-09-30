import { useEffect, useState } from "react";
import "./hero.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = ({ data }) => {
  const { scrollYProgress } = useScroll();

  const getImageUrl = (image) => {
    if (!image) return "";

    if (typeof image === "string") {
      return image;
    }

    if (image.default) {
      return image.default;
    }

    if (image.src) {
      return image.src;
    }

    return "";
  };

  const heroImage = getImageUrl(data?.heroImg);
  const locations = data?.locations || [];

  const getTransformValues = () => {
    const width = window.innerWidth;

    if (width > 1700) {
      return {
        yRange: ["0%", "32%"],
        xRange: data?.xRange1 || ["0%", "-27%"],
      };
    }

    if (width > 1500) {
      return {
        yRange: ["0%", "30%"],
        xRange: data?.xRange2 || ["0%", "-25%"],
      };
    }

    if (width > 1400) {
      return {
        yRange: ["0%", "32%"],
        xRange: data?.xRange3 || ["0%", "-23%"],
      };
    }

    if (width > 1200) {
      return {
        yRange: ["0%", "32%"],
        xRange: data?.xRange4 || ["0%", "-20%"],
      };
    }

    if (width > 600) {
      return {
        yRange: ["0%", "30%"],
        xRange: data?.xRangeLast || ["0%", "0%"],
      };
    }

    return {
      yRange: ["0%", "35%"],
      xRange: data?.xRangeLast || ["0%", "0%"],
    };
  };

  const [transformValues, setTransformValues] = useState(() =>
    getTransformValues()
  );

  useEffect(() => {
    const updateTransformValues = () => {
      setTransformValues(getTransformValues());
    };

    updateTransformValues();

    window.addEventListener("resize", updateTransformValues);

    return () => {
      window.removeEventListener("resize", updateTransformValues);
    };
  }, [data]);

  const y = useTransform(
    scrollYProgress,
    [0, 0.4],
    transformValues.yRange
  );

  const x = useTransform(
    scrollYProgress,
    [0, 0.4],
    transformValues.xRange
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.4],
    ["100%", "80%"]
  );

  return (
    <section className="levelOneHero">
      {heroImage && (
        <img
          className="levelOneHeroImage"
          src={heroImage}
          alt={data?.title || "Travel destination"}
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
      )}

      <div className="levelOneHeroOverlay" />

      <motion.div
        className="container"
        style={{ y, x, scale }}
      >
        <div className="heroDestinationContent">
          {data?.title && (
            <h1 className="heroDestinationTitle">
              {data.title}
            </h1>
          )}

          {locations.length > 0 && (
            <div className="heroLocations">
              <h2>Places We Offer</h2>

              <div className="heroLocationsList">
                {locations.map((location, index) => (
                  <div
                    className="heroLocationItem"
                    key={`${location}-${index}`}
                  >
                    <span>{location}</span>

                    {index < locations.length - 1 && (
                      <span className="heroLocationDot">•</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;