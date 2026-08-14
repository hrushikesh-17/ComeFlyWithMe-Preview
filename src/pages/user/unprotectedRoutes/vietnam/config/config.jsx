// Assets
import heroImg from "@/assets/vietnamHero.webp";
import img1 from "@/assets/vietnam1.webp";
import img2 from "@/assets/vietnam2.webp";
import img3 from "@/assets/vietnam3.webp";
import img4 from "@/assets/vietnam4.webp";
import img5 from "@/assets/vietnam5.webp";

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
  title: "Enchanting Vietnam",

  heroImg: heroImg,

  content: [
    `Vietnam is a beautiful blend of dramatic landscapes, ancient culture, vibrant cities, and unforgettable cuisine.`,
    `From the limestone islands of Ha Long Bay to peaceful rice terraces and charming coastal towns, every journey`,
    `reveals something new. Whether you're looking for adventure, relaxation, culture, or incredible food, Vietnam`,
    `offers an experience that stays with you long after you return home.`,
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

      description: `Vietnam with your friends is the perfect mix of adventure, fun, food, and unforgettable memories. Explore the buzzing streets of Ho Chi Minh City, cruise through Ha Long Bay, discover hidden cafés, and experience the incredible Vietnamese food scene together. From exciting adventures to relaxed evenings, every day brings something new to experience with your gang.`,

      logo: levelOneFriendsLogo,

      url: "/vietnam/friends",

      leftImg: levelOneFriendsImage,
    },

    {
      packageName: "Family",

      description: `Make your family holiday truly memorable with a journey through Vietnam. Discover beautiful landscapes, fascinating history, peaceful towns, and delicious local cuisine at a comfortable pace. From scenic cruises and cultural experiences to relaxing stays and family-friendly adventures, we'll make sure everyone has something to enjoy.`,

      logo: levelOneFamilyLogo,

      url: "/vietnam/family",

      leftImg: levelOneFamilyImage,
    },

    {
      packageName: "Couples",

      description: `Vietnam offers the perfect setting for a romantic escape. Enjoy peaceful moments beside the coast, explore charming streets together, experience beautiful sunsets, and share unforgettable dinners surrounded by Vietnamese culture. From relaxing stays to private experiences, create your own beautiful story together in Vietnam.`,

      logo: levelOneCoupleLogo,

      url: "/vietnam/couple",

      leftImg: levelOneCoupleImage,
    },

    {
      packageName: "Custom",

      description: `Your Vietnam journey, your way. Whether you dream of cruising through Ha Long Bay, exploring ancient towns, discovering hidden beaches, tasting incredible local cuisine, or combining adventure with luxury, we'll create an itinerary around your interests, travel style, and budget.`,

      logo: levelOneCustomLogo,

      url: "/vietnam/custom",

      leftImg: levelOneCustomImage,
    },
  ],
};