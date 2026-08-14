// Assets
import vietnam3 from "@/assets/vietnam3.webp";
import vietnam1 from "@/assets/vietnam1.webp";
import vietnam2 from "@/assets/vietnam2.webp";
import vietnam4 from "@/assets/vietnam4.webp";
import vietnam5 from "@/assets/vietnam5.webp";
import vietnam from "@/assets/vietnam.jpg";

// =====================================================
// PAGE DATA
// =====================================================

export const data = {
  title: "Vietnam Friends Premium",

  heroImg: vietnam5,

  content: [
    `Experience Vietnam with your closest friends through a premium journey filled with beautiful landscapes, amazing food, exciting adventures, rich culture, and unforgettable experiences.`,

    `Explore the vibrant streets of Vietnam, discover fascinating cultural destinations, enjoy breathtaking natural scenery, and create unforgettable memories with your friends.`,

    `This Premium package is designed for friends who want a more complete and comfortable Vietnam holiday with the perfect combination of adventure, sightseeing, relaxation, culture, food, and fun.`,
  ],

  xRange1: ["0%", "-27%"],
  xRange2: ["0%", "-25%"],
  xRange3: ["0%", "-23%"],
  xRange4: ["0%", "-20%"],
  xRangeLast: ["0%", "0%"],

  // ===================================================
  // SLIDER IMAGES
  // ===================================================

  sliderImg: [
    vietnam1,
    vietnam2,
    vietnam3,
    vietnam4,
    vietnam5,
  ],

  // ===================================================
  // PRICE
  // ===================================================
  // IMPORTANT:
  // Replace this with your actual Vietnam Friends
  // Premium package price.

  price: "95,000",

  // ===================================================
  // PLAN
  // ===================================================

  planTitle: "Vietnam Friends Premium",

  plans: [
    {
      title: "Vietnam Friends Premium Adventure",

      data: [
        `Discover the best of Vietnam with your friends while exploring beautiful destinations, experiencing local culture, tasting delicious Vietnamese cuisine, and enjoying unforgettable adventures.`,

        `Enjoy a premium travel experience combining sightseeing, adventure, relaxation, nightlife, cultural experiences, and quality time with your friends.`,

        `From vibrant cities and historic destinations to breathtaking natural landscapes, this Premium package is designed to make your Vietnam trip comfortable, exciting, memorable, and full of amazing experiences.`,
      ],

      url: "/vietnam/friends/premium",

      image: vietnam5,
    },
  ],
};

// =====================================================
// ACTIVITIES
// =====================================================

export const activities = [
  {
    day: 0,

    title: "Arrival Day",

    image: vietnam1,

    color: "DDA15E",

    plans: [
      {
        title: "Rest",

        data: [
          "Relax after your arrival in Vietnam",
          "Check in to your hotel and settle down comfortably",
        ],
      },

      {
        title: "Activities",

        data: [
          "Explore nearby streets and local attractions",
          "Enjoy your first Vietnamese meal with your friends",
          "Spend the evening relaxing together",
        ],
      },
    ],
  },

  {
    day: 1,

    title: "Vietnam City Exploration",

    image: vietnam2,

    color: "F5CFDE",

    plans: [
      {
        title: "Explore",

        data: [
          "Explore the vibrant streets of Vietnam",
          "Visit important local attractions",
          "Experience the local culture and atmosphere",
        ],
      },

      {
        title: "Food",

        data: [
          "Try traditional Vietnamese dishes",
          "Enjoy local street food with your friends",
          "Discover authentic Vietnamese flavors",
        ],
      },
    ],
  },

  {
    day: 2,

    title: "Culture and Heritage",

    image: vietnam4,

    color: "EB7E67",

    plans: [
      {
        title: "Visit",

        data: [
          "Discover historic and cultural locations",
          "Explore traditional Vietnamese architecture",
          "Experience local traditions and culture",
        ],
      },

      {
        title: "Evening",

        data: [
          "Enjoy a premium dinner together",
          "Explore the city during the evening",
          "Spend quality time with your friends",
        ],
      },
    ],
  },

  {
    day: 3,

    title: "Ha Long Bay Premium Adventure",

    image: vietnam5,

    color: "FFE894",

    plans: [
      {
        title: "Activities",

        data: [
          "Experience the breathtaking scenery of Ha Long Bay",
          "Enjoy a scenic cruise",
          "Take photographs with your friends",
        ],
      },

      {
        title: "Relax",

        data: [
          "Enjoy the beautiful natural surroundings",
          "Relax while taking in the spectacular views",
          "Spend quality time together",
        ],
      },
    ],
  },

  {
    day: 4,

    title: "Adventure and Local Experiences",

    image: vietnam,

    color: "83D3FC",

    plans: [
      {
        title: "Activities",

        data: [
          "Explore another beautiful destination in Vietnam",
          "Discover local markets and shops",
          "Enjoy exciting activities with your friends",
        ],
      },

      {
        title: "Rest",

        data: [
          "Relax after a full day of exploration",
          "Enjoy some free time with your friends",
        ],
      },
    ],
  },

  {
    day: 5,

    title: "Relaxation and Vietnamese Cuisine",

    image: vietnam2,

    color: "C7E788",

    plans: [
      {
        title: "Relax",

        data: [
          "Enjoy a relaxed day with your friends",
          "Take time to explore places at your own pace",
          "Enjoy some peaceful time together",
        ],
      },

      {
        title: "Food",

        data: [
          "Enjoy authentic Vietnamese cuisine",
          "Try local specialties and desserts",
          "Discover new Vietnamese flavors together",
        ],
      },
    ],
  },

  {
    day: 6,

    title: "Departure Day",

    image: vietnam1,

    color: "F2A7B3",

    plans: [
      {
        title: "Departure",

        data: [
          "Pack your belongings",
          "Check out from the hotel",
          "Prepare for your flight home",
          "Say goodbye to Vietnam and take your memories with you",
        ],
      },
    ],
  },
];