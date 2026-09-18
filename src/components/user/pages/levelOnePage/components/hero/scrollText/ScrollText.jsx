import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

import "./scrollText.scss";

const ScrollText = ({ content = [] }) => {
  return (
    <div className="introduction-outer">
      <div className="introduction-inner">
        <p>
          {content.map((item, index) => (
            <ContentLine key={index} content={item} />
          ))}
        </p>
      </div>
    </div>
  );
};

const ContentLine = ({ content }) => {
  const { scrollYProgress } = useScroll();

  const scrollValue = useTransform(
    scrollYProgress,
    [0, 0.08],
    ["100%", "0%"]
  );

  const clipPathVal = useMotionTemplate`
    inset(0% ${scrollValue} 0% 0%)
  `;

  return (
    <span className="introduction-text-container">
      {/* Base text */}
      <span className="introduction-static-text">
        {content}
      </span>

      {/* Highlighted text */}
      <motion.span
        className="introduction-highlighted-text"
        style={{
          clipPath: clipPathVal,
        }}
      >
        {content}
      </motion.span>
    </span>
  );
};

export default ScrollText;