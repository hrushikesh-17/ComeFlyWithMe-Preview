import { useEffect, useState } from "react";
import "./gallery.scss";

// Animations
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";
import imagesLoaded from "imagesloaded";
import { footerFadeInAnimation } from "@/utils/animations/animations";

// Existing Gallery Images
import img1 from "@/assets/galleryImg1.jpeg";
import img2 from "@/assets/galleryImg2.jpeg";
import img3 from "@/assets/galleryImg3.webp";
import img4 from "@/assets/galleryImg4.jpeg";
import img5 from "@/assets/galleryImg5.webp";
import img6 from "@/assets/galleryImg6.webp";
import img7 from "@/assets/galleryImg7.jpeg";
import img8 from "@/assets/galleryImg8.jpeg";
import img9 from "@/assets/galleryImg9.webp";
import img10 from "@/assets/galleryImg10.jpeg";
import img11 from "@/assets/galleryImg11.webp";
import img12 from "@/assets/galleryImg12.jpeg";

// Selected Traveler / Couple Photos
import couple1 from "@/assets/travelers/WhatsApp Image 2026-09-16 at 17.37.02.jpeg";
import couple2 from "@/assets/travelers/WhatsApp Image 2026-09-16 at 14.27.41.jpeg";
import couple3 from "@/assets/travelers/WhatsApp Image 2026-09-16 at 14.27.48.jpeg";
import couple4 from "@/assets/travelers/WhatsApp Image 2026-09-16 at 17.36.58 (1).jpeg";
import couple5 from "@/assets/travelers/WhatsApp Image 2026-09-16 at 17.36.59 (1).jpeg";
import couple6 from "@/assets/travelers/WhatsApp Image 2026-09-16 at 17.37.00 (2).jpeg";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    let lenis;

    const preloadImages = () => {
      return new Promise((resolve) => {
        imagesLoaded(
          document.querySelectorAll(".column__item-img"),
          {
            background: true,
          },
          resolve
        );
      });
    };

    const initSmoothScrolling = () => {
      lenis = new Lenis({
        lerp: 0.15,
        smoothWheel: true,
      });

      lenis.on("scroll", () => {
        ScrollTrigger.update();
      });

      const scrollFn = (time) => {
        lenis.raf(time);
        requestAnimationFrame(scrollFn);
      };

      requestAnimationFrame(scrollFn);
    };

    const initGalleryAnimation = () => {
      const grid = document.querySelector(".columns");

      if (!grid) return;

      const columns = [
        ...grid.querySelectorAll(".column"),
      ];

      // Animate only the two outside columns.
      // The middle column remains stable so all 18 images
      // stay visually balanced.
      columns.forEach((column, columnIndex) => {
        if (columnIndex === 1) return;

        const items = [
          ...column.querySelectorAll(".column__item"),
        ];

        items.forEach((item) => {
          const wrapper = item.querySelector(
            ".column__item-imgwrap"
          );

          if (!wrapper) return;

          gsap.fromTo(
            wrapper,
            {
              rotation: 0,
              xPercent: 0,
            },
            {
              rotation: columnIndex === 0 ? -6 : 6,
              xPercent: columnIndex === 0 ? -10 : 10,
              ease: "none",
              scrollTrigger: {
                trigger: item,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        });
      });

      ScrollTrigger.refresh();
    };

    preloadImages().then(() => {
      initSmoothScrolling();
      initGalleryAnimation();
      setLoading(false);
    });

    return () => {
      if (lenis) {
        lenis.destroy();
      }

      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });

      gsap.killTweensOf(".column__item-imgwrap");
    };
  }, []);

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };

  // 18 images arranged into exactly 3 columns.
  const columnOne = [
    img1,
    img2,
    img3,
    img4,
    couple1,
    couple2,
  ];

  const columnTwo = [
    img9,
    img10,
    img11,
    img12,
    couple3,
    couple4,
  ];

  const columnThree = [
    img5,
    img6,
    img7,
    img8,
    couple5,
    couple6,
  ];

  const renderColumn = (images, columnNumber) => {
    return (
      <div className="column" key={`column-${columnNumber}`}>
        {images.map((image, index) => (
          <figure
            className="column__item"
            key={`image-${columnNumber}-${index}`}
            onClick={() => handleImageClick(image)}
          >
            <div className="column__item-imgwrap">
              <div
                className="column__item-img"
                style={{
                  backgroundImage: `url("${image}")`,
                }}
              />
            </div>
          </figure>
        ))}
      </div>
    );
  };

  return (
    <>
      {/* Gallery Heading */}
      <div className="home-gallery">
        <h2>Gallery</h2>
        <p>An Experience filled with love</p>
      </div>

      {/* Gallery */}
      <div className={`demo-2 ${loading ? "loading" : ""}`}>
        <main className="gallery-slide">
          <div className="columns">
            {renderColumn(columnOne, 1)}
            {renderColumn(columnTwo, 2)}
            {renderColumn(columnThree, 3)}
          </div>
        </main>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {isModalOpen && currentImage && (
          <motion.div
            className="modal"
            onClick={closeModal}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={footerFadeInAnimation}
          >
            <div
              className="modal-content"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={currentImage}
                alt="Gallery"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;