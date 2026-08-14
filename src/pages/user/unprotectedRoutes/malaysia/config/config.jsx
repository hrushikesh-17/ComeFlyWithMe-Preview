// Assets
import heroImg from "@/assets/malaysia.jpg";

// Package Logos
import levelOneFriendsLogo from "@/assets/levelOneFriendsLogo.webp";
import levelOneFamilyLogo from "@/assets/levelOneFamilyLogo.webp";
import levelOneCoupleLogo from "@/assets/levelOneCoupleLogo.webp";
import levelOneCustomLogo from "@/assets/levelOneCustomLogo.webp";

// Package Images
import levelOneFriendsImage from "@/assets/levelOneFriendsImage.webp";
import levelOneFamilyImage from "@/assets/levelOneFamilyImage.jpg";
import levelOneCoupleImage from "@/assets/levelOneCoupleImage.jpg";
import levelOneCustomImage from "@/assets/levelOneCustomImage.webp";

export const data = {
  title: "Beautiful Malaysia",

  heroImg,

  content: [
    `Malaysia is a beautiful blend of modern cities, tropical islands, rich culture, incredible food, and unforgettable experiences.`,
    `From the skyline of Kuala Lumpur to peaceful islands, lush rainforests, and vibrant local markets, every journey offers something new.`,
    `Whether you are travelling with friends, family, as a couple, or looking for a completely personalised experience, Malaysia has something for everyone.`,
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
        "Explore Malaysia with your friends through a journey filled with adventure, great food, vibrant cities, beautiful islands, and unforgettable memories.",
      logo: levelOneFriendsLogo,
      url: "/malaysia/friends",
      leftImg: levelOneFriendsImage,
    },

    {
      packageName: "Family",
      description:
        "Enjoy a comfortable Malaysian family holiday with beautiful destinations, exciting experiences, delicious food, and plenty of memorable moments together.",
      logo: levelOneFamilyLogo,
      url: "/malaysia/family",
      leftImg: levelOneFamilyImage,
    },

    {
      packageName: "Couples",
      description:
        "Discover Malaysia together through beautiful scenery, romantic experiences, incredible food, peaceful escapes, and unforgettable moments.",
      logo: levelOneCoupleLogo,
      url: "/malaysia/couple",
      leftImg: levelOneCoupleImage,
    },

    {
      packageName: "Custom",
      description:
        "Create your own Malaysia journey around your interests, travel style, preferred experiences, and budget.",
      logo: levelOneCustomLogo,
      url: "/malaysia/custom",
      leftImg: levelOneCustomImage,
    },
  ],
};