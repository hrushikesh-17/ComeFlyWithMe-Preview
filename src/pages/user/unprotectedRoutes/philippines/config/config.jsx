// =====================================================
// ASSETS
// =====================================================

import heroImg from "@/assets/philippines.jpg";

// =====================================================
// PACKAGE LOGOS
// =====================================================

import levelOneFriendsLogo from "@/assets/levelOneFriendsLogo.webp";
import levelOneFamilyLogo from "@/assets/levelOneFamilyLogo.webp";
import levelOneCoupleLogo from "@/assets/levelOneCoupleLogo.webp";
import levelOneCustomLogo from "@/assets/levelOneCustomLogo.webp";

// =====================================================
// PACKAGE IMAGES
// =====================================================

import levelOneFriendsImage from "@/assets/levelOneFriendsImage.webp";
import levelOneFamilyImage from "@/assets/levelOneFamilyImage.jpg";
import levelOneCoupleImage from "@/assets/levelOneCoupleImage.jpg";
import levelOneCustomImage from "@/assets/levelOneCustomImage.webp";

// =====================================================
// PAGE DATA
// =====================================================

export const data = {
  title: "Beautiful Philippines",

  heroImg,

  content: [
    `The Philippines is a tropical paradise filled with crystal-clear waters, beautiful islands, vibrant culture, delicious food, and unforgettable experiences.`,

    `From breathtaking beaches and hidden islands to lively cities and peaceful coastal escapes, every journey reveals something new.`,

    `Whether you are travelling with friends, family, as a couple, or looking for a completely personalised experience, the Philippines offers something for everyone.`,
  ],

  xRange1: ["0%", "-25.5%"],
  xRange2: ["0%", "-23%"],
  xRange3: ["0%", "-21.5%"],
  xRange4: ["0%", "-18%"],
  xRangeLast: ["0%", "0%"],

  galleryImg: [
    heroImg,
    heroImg,
    heroImg,
    heroImg,
    heroImg,
  ],

  packageData: [
    {
      packageName: "Friends",

      description:
        "Experience the Philippines with your friends through an exciting journey filled with beautiful islands, beaches, adventure, local food, and unforgettable memories.",

      logo: levelOneFriendsLogo,

      url: "/philippines/friends",

      leftImg: levelOneFriendsImage,
    },

    {
      packageName: "Family",

      description:
        "Enjoy a memorable Philippines family holiday with beautiful beaches, comfortable experiences, exciting activities, delicious food, and plenty of time together.",

      logo: levelOneFamilyLogo,

      url: "/philippines/family",

      leftImg: levelOneFamilyImage,
    },

    {
      packageName: "Couples",

      description:
        "Discover the Philippines together through romantic island escapes, beautiful sunsets, peaceful beaches, incredible dining, and unforgettable moments.",

      logo: levelOneCoupleLogo,

      url: "/philippines/couple",

      leftImg: levelOneCoupleImage,
    },

    {
      packageName: "Custom",

      description:
        "Create your own Philippines journey around your interests, travel style, preferred experiences, and budget.",

      logo: levelOneCustomLogo,

      url: "/philippines/custom",

      leftImg: levelOneCustomImage,
    },
  ],
};