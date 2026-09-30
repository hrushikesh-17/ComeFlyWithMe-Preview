// Assets
import seoul1 from "@/assets/seoul(1).jpg";
import seoul2 from "@/assets/seoul(2).jpg";
import seoul3 from "@/assets/seoul(3).jpg";
import seoul4 from "@/assets/seoul(4).jpg";
import seoul5 from "@/assets/seoul(5).jpg";

export const data = {
  title: "Friends Package",

  heroImg: seoul1,

  content: [
    `South Korea is an exciting destination for friends, offering vibrant city life, rich Korean culture, delicious food, shopping, entertainment, and unforgettable experiences.`,

    `Explore Seoul together, discover historic landmarks and modern attractions, experience Korean culture, enjoy delicious cuisine, and create unforgettable memories with your friends.`,

    `Whether you enjoy adventure, sightseeing, shopping, food, entertainment, or cultural experiences, Seoul offers something exciting for every group of friends.`,
  ],

  xRange1: ["0%", "-27%"],
  xRange2: ["0%", "-25%"],
  xRange3: ["0%", "-23%"],
  xRange4: ["0%", "-20%"],
  xRangeLast: ["0%", "0%"],

  planTitle: "Friends",

  plans: [
    {
      title: "Seoul Friends Standard",

      data: [
        `Experience Seoul with your friends through a comfortable journey filled with Korean culture, exciting attractions, delicious food, and memorable experiences.`,

        `Explore historic landmarks, modern attractions, shopping areas, and vibrant neighbourhoods together.`,

        `Enjoy Seoul at your own pace while creating unforgettable memories with your friends.`,
      ],

      url: "/south-korea/friends/standard",
      image: seoul2,
    },

    {
      title: "Seoul Friends Delux",

      data: [
        `Enjoy a more comfortable Seoul holiday with your friends through carefully selected cultural experiences, attractions, food, entertainment, and shopping.`,

        `Discover Korean heritage, modern city experiences, exciting activities, and delicious local cuisine.`,

        `Create unforgettable group memories through a balanced and comfortable Seoul journey.`,
      ],

      url: "/south-korea/friends/delux",
      image: seoul4,
    },

    {
      title: "Seoul Friends Premium",

      data: [
        `Experience Seoul through a premium journey with your friends filled with exceptional attractions, Korean culture, delicious food, entertainment, and memorable experiences.`,

        `Enjoy a carefully planned combination of sightseeing, adventure, shopping, culture, relaxation, and exciting city experiences.`,

        `Create your own unforgettable Seoul adventure with your friends.`,
      ],

      url: "/south-korea/friends/premium",
      image: seoul5,
    },
  ],
};