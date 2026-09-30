import seoul1 from "@/assets/seoul(1).jpg";
import seoul2 from "@/assets/seoul(2).jpg";
import seoul3 from "@/assets/seoul(3).jpg";
import seoul4 from "@/assets/seoul(4).jpg";
import seoul5 from "@/assets/seoul(5).jpg";

export const data = {
  title: "Family Package",
  heroImg: seoul1,

  content: [
    `South Korea is a wonderful destination for families, offering a combination of rich Korean culture, exciting attractions, delicious food, modern city experiences, and memorable moments for everyone.`,

    `Explore Seoul together, discover historic landmarks, experience Korean traditions, enjoy family-friendly attractions, try delicious Korean cuisine, and create unforgettable memories together.`,

    `Whether your family enjoys culture, sightseeing, food, shopping, entertainment, or relaxing experiences, Seoul offers something for every member of the family.`,
  ],

  xRange1: ["0%", "-27%"],
  xRange2: ["0%", "-25%"],
  xRange3: ["0%", "-23%"],
  xRange4: ["0%", "-20%"],
  xRangeLast: ["0%", "0%"],

  planTitle: "Family",

  plans: [
    {
      title: "Seoul Family Standard",

      data: [
        `Enjoy a comfortable Seoul family holiday filled with culture, sightseeing, delicious Korean food, and exciting experiences.`,

        `Explore Seoul's historic landmarks, modern attractions, traditional neighbourhoods, and family-friendly activities together.`,

        `Create memorable family moments while discovering Seoul at a comfortable pace.`,
      ],

      url: "/south-korea/family/standard",
      image: seoul2,
    },

    {
      title: "Seoul Family Delux",

      data: [
        `Enjoy a more comfortable family journey through Seoul with carefully selected attractions, cultural experiences, food, shopping, and relaxation.`,

        `Discover Korean heritage, modern city attractions, family-friendly experiences, and delicious local cuisine.`,

        `Create unforgettable family memories through a balanced and comfortable Seoul holiday.`,
      ],

      url: "/south-korea/family/delux",
      image: seoul4,
    },

    {
      title: "Seoul Family Premium",

      data: [
        `Experience Seoul through a premium family journey filled with carefully planned attractions, cultural experiences, exceptional food, and memorable activities.`,

        `Enjoy a comfortable combination of sightseeing, Korean culture, family-friendly entertainment, shopping, relaxation, and special experiences.`,

        `Make your family holiday special with a premium Seoul experience designed for everyone.`,
      ],

      url: "/south-korea/family/premium",
      image: seoul5,
    },
  ],
};