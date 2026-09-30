import seoul1 from "@/assets/seoul(1).jpg";
import seoul2 from "@/assets/seoul(2).jpg";
import seoul3 from "@/assets/seoul(3).jpg";
import seoul4 from "@/assets/seoul(4).jpg";
import seoul5 from "@/assets/seoul(5).jpg";

export const data = {
  title: "Custom Package",
  heroImg: seoul1,

  content: [
    `Create your own South Korea journey around your interests, travel style, preferred experiences, and budget.`,

    `Explore Seoul your way, from historic landmarks and traditional Korean culture to modern attractions, shopping areas, delicious food, and exciting experiences.`,

    `Whether you want a relaxed holiday, cultural adventure, food-focused trip, shopping experience, or a combination of everything, your Seoul journey can be personalised around you.`,
  ],

  xRange1: ["0%", "-27%"],
  xRange2: ["0%", "-25%"],
  xRange3: ["0%", "-23%"],
  xRange4: ["0%", "-20%"],
  xRangeLast: ["0%", "0%"],

  planTitle: "Custom",

  plans: [
    {
      title: "Seoul Custom Standard",
      data: [
        `Create a comfortable Seoul holiday based on your interests and preferred travel style.`,
        `Choose from cultural experiences, sightseeing, Korean food, shopping, entertainment, and relaxing activities.`,
        `Enjoy Seoul at your own pace with a journey designed around your preferences.`,
      ],
      url: "/south-korea/custom/standard",
      image: seoul2,
    },

    {
      title: "Seoul Custom Delux",
      data: [
        `Enjoy a more comfortable personalised Seoul journey with carefully selected experiences.`,
        `Combine Korean culture, sightseeing, food, shopping, entertainment, and relaxation according to your preferences.`,
        `Create a memorable deluxe Seoul holiday with a flexible itinerary designed around you.`,
      ],
      url: "/south-korea/custom/delux",
      image: seoul4,
    },

    {
      title: "Seoul Custom Premium",
      data: [
        `Experience Seoul through a premium personalised journey created around your interests and travel style.`,
        `Enjoy a carefully planned combination of culture, attractions, Korean cuisine, shopping, relaxation, and special experiences.`,
        `Create your own premium Seoul story with an itinerary designed specifically for you.`,
      ],
      url: "/south-korea/custom/premium",
      image: seoul5,
    },
  ],
};