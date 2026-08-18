// =====================================================
// ASSETS
// =====================================================

import heroImg from "@/assets/singapore.jpg";

import img1 from "@/assets/singapore1.jpg";
import img2 from "@/assets/singapore2.jpg";
import img3 from "@/assets/singapore3.jpg";
import img4 from "@/assets/singapore4.jpg";
import img5 from "@/assets/singapore5.jpg";

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
  title: "Enchanting Singapore",

  heroImg,

  content: [
    `Singapore is a vibrant blend of modern architecture, beautiful gardens, rich culture, incredible food, and unforgettable experiences.`,

    `From the iconic Marina Bay skyline to peaceful gardens, exciting neighbourhoods, and world-class attractions, every journey reveals something new.`,

    `Whether you are travelling with friends, family, as a couple, or looking for a completely personalised experience, Singapore offers something for everyone.`,
  ],

  xRange1: ["0%", "-25.5%"],
  xRange2: ["0%", "-23%"],
  xRange3: ["0%", "-21.5%"],
  xRange4: ["0%", "-18%"],
  xRangeLast: ["0%", "0%"],

  galleryImg: [
    img1,
    img2,
    img3,
    img4,
    img5,
  ],

  packageData: [
    {
      packageName: "Friends",

      description:
        "Experience Singapore with your friends through an exciting journey filled with incredible food, modern attractions, shopping, entertainment, and unforgettable memories.",

      logo: levelOneFriendsLogo,

      url: "/singapore/friends",

      leftImg: levelOneFriendsImage,
    },

    {
      packageName: "Family",

      description:
        "Enjoy a memorable Singapore family holiday with comfortable experiences, beautiful attractions, delicious food, exciting activities, and plenty of time together.",

      logo: levelOneFamilyLogo,

      url: "/singapore/family",

      leftImg: levelOneFamilyImage,
    },

    {
      packageName: "Couples",

      description:
        "Discover Singapore together through romantic experiences, beautiful gardens, incredible dining, stunning city views, and unforgettable moments.",

      logo: levelOneCoupleLogo,

      url: "/singapore/couple",

      leftImg: levelOneCoupleImage,
    },

    {
      packageName: "Custom",

      description:
        "Create your own Singapore journey around your interests, travel style, preferred experiences, and budget.",

      logo: levelOneCustomLogo,

      url: "/singapore/custom",

      leftImg: levelOneCustomImage,
    },
  ],
};