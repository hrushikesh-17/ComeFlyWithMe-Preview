
import { useEffect, useState } from "react";
import "./hero.scss";

import { motion } from "framer-motion";
import { fadeInAnimation } from "@/utils/animations/animations";

// Assets
import heroVideo from "@/assets/heroVideo-optimized.mp4";
import heroPoster from "@/assets/hero-poster.webp";
import heroArrow from "@/assets/heroArrow.webp";

const Hero = () => {
  const [isDesktop, setIsDesktop] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(min-width: 801px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 801px)");

    const handleMediaChange = (event) => {
      setIsDesktop(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  return (
    <section className="hero">
      <div className="overlay" aria-hidden="true"></div>

      {isDesktop ? (
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={heroPoster}
          aria-hidden="true"
        />
      ) : (
        <img
          className="hero-poster"
          src={heroPoster}
          alt=""
          width={1280}
          height={720}
          loading="eager"
          fetchPriority="high"
        />
      )}

      <motion.div
        className="content"
        variants={fadeInAnimation}
        initial="initial"
        whileInView="animate"
      >
        <div className="left">
          <h2>Welcome to</h2>
          <h1>Come fly with me</h1>
        </div>

        <div className="right">
          <p>Scroll to explore</p>
          <img src={heroArrow} alt="" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
