import seoul1 from "@/assets/seoul(1).jpg";
import seoul2 from "@/assets/seoul(2).jpg";
import seoul3 from "@/assets/seoul(3).jpg";
import seoul4 from "@/assets/seoul(4).jpg";
import seoul5 from "@/assets/seoul(5).jpg";

export const data = {
  title: "Couples Package",
  heroImg: seoul1,

  content: [
    `South Korea is a beautiful destination for couples, offering vibrant city life, rich Korean culture, beautiful scenery, incredible food, and unforgettable experiences.`,

    `Explore Seoul together, discover historic landmarks and modern attractions, enjoy delicious Korean cuisine, and experience special moments at your own pace.`,

    `From relaxing evenings to exciting adventures, this journey is designed for couples looking to create special memories together in Seoul.`,
  ],

  xRange1: ["0%", "-27%"],
  xRange2: ["0%", "-25%"],
  xRange3: ["0%", "-23%"],
  xRange4: ["0%", "-20%"],
  xRangeLast: ["0%", "0%"],

  planTitle: "Couples",

  plans: [
    {
      title: "Seoul Romantic Escape",

      data: [
        `Discover Seoul together through beautiful surroundings, vibrant city life, delicious Korean food, and memorable experiences.`,

        `Explore historic landmarks, modern attractions, and beautiful neighbourhoods while enjoying quality time together.`,

        `Create beautiful memories through a relaxed and romantic Seoul journey.`,
      ],

      url: "/south-korea/couple/standard",
      image: seoul2,
    },

    {
      title: "Seoul Couple Retreat",

      data: [
        `Enjoy a memorable Seoul escape designed for couples who want comfort, discovery, great food, and unforgettable experiences.`,

        `Explore exciting attractions together, discover Korean culture, and enjoy moments of relaxation along the way.`,

        `Make every day special with experiences created for two.`,
      ],

      url: "/south-korea/couple/delux",
      image: seoul4,
    },

    {
      title: "Seoul Premium Romance",

      data: [
        `Experience Seoul through a premium romantic journey filled with beautiful attractions, exceptional experiences, incredible Korean food, and unforgettable moments.`,

        `Explore the city together while enjoying carefully planned experiences that balance adventure, relaxation, culture, and romance.`,

        `Create your own beautiful Korean story together.`,
      ],

      url: "/south-korea/couple/premium",
      image: seoul5,
    },
  ],
};