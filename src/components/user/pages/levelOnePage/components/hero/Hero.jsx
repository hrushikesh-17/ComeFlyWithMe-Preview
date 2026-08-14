import { useEffect, useState } from "react";
import "./hero.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollText from "./scrollText/ScrollText";

const Hero = ({ data }) => {
  // =====================================================
  // WINDOW SCROLL
  // =====================================================

  const { scrollYProgress } = useScroll();

  // =====================================================
  // GET IMAGE URL SAFELY
  // =====================================================

  const getImageUrl = (image) => {
    if (!image) {
      return "";
    }

    // Normal Vite image import
    if (typeof image === "string") {
      return image;
    }

    // Handle module-style image
    if (image.default) {
      return image.default;
    }

    // Handle object containing src
    if (image.src) {
      return image.src;
    }

    return "";
  };

  const heroImage = getImageUrl(data?.heroImg);

  // =====================================================
  // TRANSFORM VALUES
  // =====================================================

  const [transformValues, setTransformValues] = useState({
    yRange: ["0%", "40%"],
    xRange: ["0%", "-30%"],
  });

  // =====================================================
  // RESPONSIVE TRANSFORM VALUES
  // =====================================================

  useEffect(() => {
    const updateTransformValues = () => {
      const width = window.innerWidth;

      if (width > 1700) {
        setTransformValues({
          yRange: ["0%", "32%"],
          xRange: data?.xRange1 || ["0%", "-27%"],
        });
      } else if (width > 1500 && width < 1700) {
        setTransformValues({
          yRange: ["0%", "30%"],
          xRange: data?.xRange2 || ["0%", "-25%"],
        });
      } else if (width > 1400 && width < 1500) {
        setTransformValues({
          yRange: ["0%", "32%"],
          xRange: data?.xRange3 || ["0%", "-23%"],
        });
      } else if (width > 1200 && width < 1400) {
        setTransformValues({
          yRange: ["0%", "32%"],
          xRange: data?.xRange4 || ["0%", "-20%"],
        });
      } else if (width > 600 && width < 1200) {
        setTransformValues({
          yRange: ["0%", "30%"],
          xRange: data?.xRangeLast || ["0%", "0%"],
        });
      } else if (width > 300 && width < 600) {
        setTransformValues({
          yRange: ["0%", "35%"],
          xRange: data?.xRangeLast || ["0%", "0%"],
        });
      }
    };

    updateTransformValues();

    window.addEventListener("resize", updateTransformValues);

    return () => {
      window.removeEventListener("resize", updateTransformValues);
    };
  }, [data]);

  // =====================================================
  // SCROLL ANIMATIONS
  // =====================================================

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

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <section
      className="levelOneHero"
      style={{
        backgroundImage: heroImage
          ? `url("${heroImage}")`
          : "none",
      }}
    >
      <motion.div
        className="container"
        style={{
          y,
          x,
          scale,
        }}
      >
        <h2>{data?.title || ""}</h2>
      </motion.div>

      <div className="text">
        <ScrollText content={data?.content || []} />
      </div>
    </section>
  );
};

export default Hero;