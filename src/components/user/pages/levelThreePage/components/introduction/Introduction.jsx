import { useEffect, useRef } from "react";
import "./introduction.scss";

// Animation
import { useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis";

// Components
import Card from "./card/Card";

const Introduction = ({ activities }) => {
  const container = useRef(null);

  // Use page scroll instead of target-based scroll.
  // This removes the Framer Motion warning about
  // the container needing a non-static position.
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const lenis = new Lenis();

    let animationFrameId;

    const raf = (time) => {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    };

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  if (!activities || activities.length === 0) {
    return null;
  }

  return (
    <main ref={container} className="activities-introduction">
      {activities.map((activity, i) => {
        const targetScale =
          1 - (activities.length - i) * 0.05;

        return (
          <Card
            activity={activity}
            key={`p_${i}`}
            i={i}
            progress={scrollYProgress}
            range={[
              i / Math.max(activities.length - 1, 1),
              1,
            ]}
            targetScale={targetScale}
            image={activity.image}
          />
        );
      })}
    </main>
  );
};

export default Introduction;