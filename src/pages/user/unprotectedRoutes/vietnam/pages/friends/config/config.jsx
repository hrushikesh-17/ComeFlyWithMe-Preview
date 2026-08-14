// Assets
import heroImg from "@/assets/vietnamHero.webp";
import friendsStandard from "@/assets/vietnam2.webp";
import friendsDelux from "@/assets/vietnam3.webp";
import friendsPremium from "@/assets/vietnam4.webp";

export const data = {
  title: "Friends Package",

  heroImg: heroImg,

  content: [
    `Vietnam with your friends is the perfect mix of adventure, fun, food, and unforgettable memories.`,
    `Explore the buzzing streets of Ho Chi Minh City, cruise through Ha Long Bay, discover hidden cafés,`,
    `and experience the incredible Vietnamese food scene together. From exciting adventures to relaxed`,
    `evenings, every day brings something new to experience with your gang.`,
  ],

  xRange1: ["0%", "-27%"],
  xRange2: ["0%", "-25%"],
  xRange3: ["0%", "-23%"],
  xRange4: ["0%", "-20%"],
  xRangeLast: ["0%", "0%"],

  planTitle: "Friends",

  plans: [
    {
      title: "Vietnam Adventure Squad",

      data: [
        "This isn't just another vacation—it's a chance to recharge, reconnect, and create unforgettable memories with your closest friends. Explore Vietnam's incredible landscapes, wander through vibrant streets, and experience the country's unique culture together.",

        "Cruise through the breathtaking waters of Ha Long Bay, explore hidden corners of Vietnam, and enjoy incredible local food along the way. Every day brings a new adventure for your squad.",

        "From exciting activities to relaxed evenings together, this Vietnam journey is designed for friends who want adventure, laughter, great food, and memories that last a lifetime.",
      ],

      url: "/vietnam/friends/standard",

      image: friendsStandard,
    },

    {
      title: "Vietnam BFF Escape",

      data: [
        "Friendship is about creating memories that you'll laugh about years later. Explore charming streets together, discover hidden cafés, enjoy beautiful views, and experience Vietnam side by side with your best friends.",

        "Whether you're celebrating a milestone or simply taking a break from everyday life, this journey gives your group the perfect opportunity to slow down, explore, and enjoy every moment together.",

        "We'll help make the journey comfortable and memorable, from discovering amazing destinations to finding experiences your whole group will enjoy. Your only job is to have fun with your best friends.",
      ],

      url: "/vietnam/friends/delux",

      image: friendsDelux,
    },

    {
      title: "Squad Goals: Vietnam Edition",

      data: [
        "From exploring breathtaking landscapes to discovering exciting adventures, Vietnam has something for every member of your squad. Try something new together, laugh at the unexpected moments, and create stories you'll remember forever.",

        "Vietnam's food scene is perfect for friends. Explore local markets, taste traditional dishes, discover hidden restaurants, and argue over who found the best food of the trip.",

        "Why wait? Pack your bags, bring your closest friends, and get ready for a Vietnam adventure filled with friendship, food, exploration, and unforgettable experiences.",
      ],

      url: "/vietnam/friends/premium",

      image: friendsPremium,
    },
  ],
};