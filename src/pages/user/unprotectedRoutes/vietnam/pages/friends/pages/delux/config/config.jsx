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
  title: "Vietnam Friends Delux",

  heroImg: vietnam3,

  content: [
    `Experience Vietnam with your closest friends through a deluxe journey filled with beautiful landscapes, amazing food, exciting activities, and unforgettable experiences.`,

    `Explore the vibrant streets of Vietnam, discover its rich culture, enjoy breathtaking natural scenery, and experience some of the country's most memorable destinations together.`,

    `This Deluxe package is designed for friends who want a more comfortable Vietnam holiday with a great combination of adventure, sightseeing, relaxation, culture, and fun.`,
  ],

  xRange1: ["0%", "-27%"],
  xRange2: ["0%", "-25%"],
  xRange3: ["0%", "-23%"],
  xRange4: ["0%", "-20%"],
  xRangeLast: ["0%", "0%"],

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

  price: "75,000",

  planTitle: "Vietnam Friends Delux",

  plans: [
    {
      title: "Vietnam Friends Deluxe Adventure",

      data: [
        `Discover Vietnam with your friends while visiting beautiful destinations, experiencing local culture, enjoying delicious Vietnamese cuisine, and creating unforgettable memories together.`,

        `Enjoy a comfortable journey through Vietnam with a balanced combination of sightseeing, adventure, relaxation, nightlife, and cultural experiences.`,

        `From the energetic streets of Vietnam to breathtaking natural landscapes, this Deluxe package is designed to make your trip comfortable, exciting, and memorable.`,
      ],

      url: "/vietnam/friends/delux",

      image: vietnam3,
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
          "Check in to your hotel and settle down",
        ],
      },

      {
        title: "Activities",

        data: [
          "Explore nearby streets and local attractions",
          "Enjoy your first Vietnamese meal with your friends",
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
          "Enjoy dinner together",
          "Explore the city during the evening",
        ],
      },
    ],
  },

  {
    day: 3,

    title: "Ha Long Bay Adventure",

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
          "Enjoy activities with your friends",
        ],
      },

      {
        title: "Rest",

        data: [
          "Relax after a full day of exploration",
        ],
      },
    ],
  },

  {
    day: 5,

    title: "Relaxation and Food",

    image: vietnam2,

    color: "C7E788",

    plans: [
      {
        title: "Relax",

        data: [
          "Enjoy a relaxed day with your friends",
          "Take time to explore places at your own pace",
        ],
      },

      {
        title: "Food",

        data: [
          "Enjoy authentic Vietnamese cuisine",
          "Try local specialties and desserts",
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
        ],
      },
    ],
  },
];