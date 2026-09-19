import { useEffect, useRef, useState } from "react";
import "./gallery.scss";

// Routing
import { useLocation } from "react-router-dom";

// Animation
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";
import { footerFadeInAnimation } from "@/utils/animations/animations";

gsap.registerPlugin(ScrollTrigger);

const Gallery = ({ data }) => {
  const location = useLocation();

  const [content, setContent] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const containerRef = useRef(null);
  const textOverlayRef = useRef(null);
  const imagesRef = useRef([]);

  // =====================================================
  // DESTINATION DESCRIPTION
  // =====================================================

  useEffect(() => {
    if (location.pathname === "/phuket") {
      setContent({
        line1:
          "Phuket is a slice of paradise where turquoise waters kiss golden sands, and every sunset paints",
        line2:
          "the sky in dreamy hues. Lush greenery, vibrant markets, and hidden coves make this island a",
        line3:
          "treasure trove of natural beauty and cultural charm. Whether you're soaking up the sun or exploring its wonders",
      });
    }

    if (location.pathname === "/bali") {
      setContent({
        line1:
          "It’s a paradise of golden beaches, ancient temples, and endless adventures.",
        line2:
          "Whether you’re craving peace or thrill, Bali has it all.",
        line3:
          "Once you visit, you’ll never want to leave this magical island.",
      });
    }
  }, [location.pathname]);

  // =====================================================
  // GALLERY SCROLL ANIMATIONS
  // =====================================================

  useEffect(() => {
    if (!data?.galleryImg?.length || !containerRef.current) {
      return;
    }

    const images = imagesRef.current.filter(Boolean);

    if (!images.length) {
      return;
    }

    const centerIndex = Math.floor(images.length / 2);
    const centerImage = images[centerIndex];

    if (!centerImage) {
      return;
    }

    // -----------------------------------------------
    // CENTER IMAGE ANIMATION
    // -----------------------------------------------

    gsap.to(centerImage, {
      width: "100vw",
      height: "100vh",
      scale: 1.5,
      opacity: 0.7,
      objectFit: "cover",
      transformOrigin: "center center",
      ease: "none",

      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
      },
    });

    // -----------------------------------------------
    // OTHER IMAGES ANIMATION
    // -----------------------------------------------

    images.forEach((image, index) => {
      if (index === centerIndex) {
        return;
      }

      gsap.to(image, {
        opacity: 0,
        x: (index < centerIndex ? -1 : 1) * 500,
        ease: "none",

        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    // -----------------------------------------------
    // DESCRIPTION TEXT ANIMATION
    // -----------------------------------------------

    if (textOverlayRef.current) {
      gsap.set(textOverlayRef.current, {
        opacity: 0,
        y: 50,
      });

      gsap.to(textOverlayRef.current, {
        opacity: 1,
        y: -50,
        duration: 1,
        ease: "power2.out",

        scrollTrigger: {
          trigger: containerRef.current,
          start: "top+=52% center",
          end: "bottom top",
          scrub: true,

          onLeaveBack: () => {
            gsap.to(textOverlayRef.current, {
              opacity: 0,
              y: 50,
              duration: 1,
              ease: "power2.out",
            });
          },
        },
      });
    }

    // -----------------------------------------------
    // CLEANUP
    // -----------------------------------------------

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, [data?.galleryImg]);

  // =====================================================
  // OPEN IMAGE MODAL
  // =====================================================

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  // =====================================================
  // CLOSE IMAGE MODAL
  // =====================================================

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <>
      {/* =================================================
          GALLERY
          Destination title removed intentionally
          ================================================= */}

      <div
        className="level-one-gallery-container"
        ref={containerRef}
      >
        {data?.galleryImg?.map((image, index) => (
          <div className="image" key={index}>
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              ref={(element) => {
                imagesRef.current[index] = element;
              }}
              onClick={() => handleImageClick(image)}
            />
          </div>
        ))}

        {/* ===============================================
            DESTINATION DESCRIPTION
            =============================================== */}

        {(content.line1 ||
          content.line2 ||
          content.line3) && (
          <div
            className="text-overlay"
            ref={textOverlayRef}
          >
            <p>
              {content.line1}
              <br />
              {content.line2}
              <br />
              {content.line3}
            </p>
          </div>
        )}
      </div>

      {/* =================================================
          IMAGE MODAL
          ================================================= */}

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="modal"
            onClick={closeModal}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={footerFadeInAnimation}
          >
            <div className="modal-content">
              <img
                src={currentImage}
                alt="Gallery preview"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;