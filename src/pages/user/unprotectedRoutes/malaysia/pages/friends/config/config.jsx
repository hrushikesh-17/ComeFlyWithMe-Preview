// =====================================================
// MALAYSIA - FRIENDS PACKAGE
// =====================================================

// Hero Image
import levelOneFriendsImage from "@/assets/levelOneFriendsImage.webp";

// Package Logos
import levelOneFriendsLogo from "@/assets/levelOneFriendsLogo.webp";
import levelOneFamilyLogo from "@/assets/levelOneFamilyLogo.webp";
import levelOneCoupleLogo from "@/assets/levelOneCoupleLogo.webp";
import levelOneCustomLogo from "@/assets/levelOneCustomLogo.webp";

// Package Images
import malaysiaFriendsStandard from "@/assets/malaysia1.jpg";
import malaysiaFriendsDelux from "@/assets/malaysia2.jpg";
import malaysiaFriendsPremium from "@/assets/malaysia3.jpg";

// Gallery Images
import malaysiaGallery1 from "@/assets/malaysia1.jpg";
import malaysiaGallery2 from "@/assets/malaysia2.jpg";
import malaysiaGallery3 from "@/assets/malaysia3.jpg";
import malaysiaGallery4 from "@/assets/malaysia4.jpg";
import malaysiaGallery5 from "@/assets/malaysia5.jpg";

// =====================================================
// PAGE DATA
// =====================================================

export const data = {
  title: "Friends Package",

  heroImg: levelOneFriendsImage,

  content: [
    `Malaysia with your friends is the perfect mix of adventure, food, culture, shopping, and unforgettable memories.`,

    `Explore the vibrant streets of Kuala Lumpur, discover beautiful islands, enjoy incredible Malaysian food, and experience the country's unique culture together.`,

    `From exciting adventures to relaxed evenings, this journey is designed for friends who want to explore, have fun, and create memories together.`,
  ],

  xRange1: ["0%", "-27%"],
  xRange2: ["0%", "-25%"],
  xRange3: ["0%", "-23%"],
  xRange4: ["0%", "-20%"],
  xRangeLast: ["0%", "0%"],

  // ===================================================
  // GALLERY
  // Gallery.jsx uses data.galleryImg.map(...)
  // ===================================================

  galleryImg: [
    malaysiaGallery1,
    malaysiaGallery2,
    malaysiaGallery3,
    malaysiaGallery4,
    malaysiaGallery5,
  ],

  // ===================================================
  // PACKAGES
  // Packages.jsx uses data.packageData.map(...)
  // ===================================================

  packageData: [
    {
      packageName: "Malaysia Friends Standard",

      description:
        "Explore Malaysia with your closest friends through a journey filled with adventure, incredible food, vibrant cities, beautiful landscapes, and unforgettable experiences.",

      logo: levelOneFriendsLogo,

      url: "/malaysia/friends/standard",

      leftImg: malaysiaFriendsStandard,
    },

    {
      packageName: "Malaysia Friends Deluxe",

      description:
        "Take a memorable escape with your best friends and discover the exciting combination of modern cities, tropical scenery, local culture, and incredible Malaysian cuisine.",

      logo: levelOneFriendsLogo,

      url: "/malaysia/friends/delux",

      leftImg: malaysiaFriendsDelux,
    },

    {
      packageName: "Malaysia Friends Premium",

      description:
        "Experience Malaysia at its best with your squad through a combination of adventure, culture, food, sightseeing, and unforgettable experiences.",

      logo: levelOneFriendsLogo,

      url: "/malaysia/friends/premium",

      leftImg: malaysiaFriendsPremium,
    },
  ],
};