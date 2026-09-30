import { useState } from "react";
import "./gallery.scss";

// Routing
import { useLocation } from "react-router-dom";

// Animation
import { AnimatePresence, motion } from "framer-motion";
import { footerFadeInAnimation } from "@/utils/animations/animations";

const Gallery = ({ data }) => {
  const location = useLocation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  // =====================================================
  // DESTINATION DESCRIPTION
  // =====================================================

  const destinationContent = {
    "/phuket": {
      line1:
        "Phuket is a slice of paradise where turquoise waters kiss golden sands, and every sunset paints",
      line2:
        "the sky in dreamy hues. Lush greenery, vibrant markets, and hidden coves make this island a",
      line3:
        "treasure trove of natural beauty and cultural charm. Whether you're soaking up the sun or exploring its wonders",
    },

    "/bali": {
      line1:
        "It’s a paradise of golden beaches, ancient temples, and endless adventures.",
      line2: "Whether you’re craving peace or thrill, Bali has it all.",
      line3:
        "Once you visit, you’ll never want to leave this magical island.",
    },
  };

  const content = destinationContent[location.pathname] || {};

  // =====================================================
  // IMAGE MODAL
  // =====================================================

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };

  // =====================================================
  // GALLERY DATA
  // =====================================================

  const galleryImages = data?.galleryImg || [];

  return (
    <>
      <section className="level-one-gallery-container">
        <div className="level-one-gallery-images">
          {galleryImages.map((image, index) => (
            <div
              className="image"
              key={`${image}-${index}`}
              onClick={() => handleImageClick(image)}
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                loading={index === 2 ? "eager" : "lazy"}
                fetchPriority={index === 2 ? "high" : "auto"}
                decoding="async"
              />
            </div>
          ))}
        </div>

        {(content.line1 || content.line2 || content.line3) && (
          <div className="text-overlay">
            <p>
              {content.line1}
              <br />
              {content.line2}
              <br />
              {content.line3}
            </p>
          </div>
        )}
      </section>

      {/* =================================================
          IMAGE MODAL
      ================================================= */}

      <AnimatePresence>
        {isModalOpen && currentImage && (
          <motion.div
            className="modal"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={footerFadeInAnimation}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                closeModal();
              }
            }}
          >
            {/* CLOSE BUTTON */}

            <button
              type="button"
              className="modal-close"
              aria-label="Close image preview"
              onMouseDown={(event) => {
                event.preventDefault();
                event.stopPropagation();
                closeModal();
              }}
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                closeModal();
              }}
            >
              ×
            </button>

            {/* IMAGE */}

            <div
              className="modal-content"
              onMouseDown={(event) => event.stopPropagation()}
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={currentImage}
                alt="Gallery preview"
                decoding="async"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;