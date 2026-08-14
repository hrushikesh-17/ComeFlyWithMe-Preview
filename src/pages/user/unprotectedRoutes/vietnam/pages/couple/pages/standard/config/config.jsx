// Assets
import vietnam1 from "@/assets/vietnam1.webp";
import vietnam2 from "@/assets/vietnam2.webp";
import vietnam3 from "@/assets/vietnam3.webp";
import vietnam4 from "@/assets/vietnam4.webp";
import vietnam5 from "@/assets/vietnam5.webp";
import vietnam from "@/assets/vietnam.jpg";

// =====================================================
// PAGE DATA
// =====================================================

export const data = {
  title: "Vietnam Couple Standard",

  heroImg: vietnam2,

  content: [
    `Experience Vietnam with your partner through a beautiful journey filled with romantic moments, breathtaking landscapes, delicious food, rich culture, and unforgettable experiences.`,

    `Explore charming streets together, discover fascinating cultural destinations, enjoy beautiful natural scenery, and create special memories as a couple.`,

    `This Standard package is designed for couples who want a comfortable Vietnam holiday with a balanced combination of sightseeing, relaxation, culture, food, adventure, and romantic experiences.`,
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

  price: "55,000",

  // ===================================================
  // PLAN
  // ===================================================

  planTitle: "Vietnam Couple Standard",

  plans: [
    {
      title: "Vietnam Couple Standard Escape",

      data: [
        `Discover Vietnam together while exploring beautiful destinations, experiencing local culture, enjoying delicious Vietnamese cuisine, and creating unforgettable memories as a couple.`,

        `Enjoy a comfortable romantic journey with a balanced combination of sightseeing, adventure, relaxation, cultural experiences, and quality time together.`,

        `From vibrant streets and historic destinations to beautiful natural landscapes, this Standard package is designed to make your Vietnam couple's trip comfortable, romantic, enjoyable, and memorable.`,
      ],

      url: "/vietnam/couple/standard",

      image: vietnam2,
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
        title: "Romantic Evening",

        data: [
          "Explore nearby streets together",
          "Enjoy your first Vietnamese meal as a couple",
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
          "Discover beautiful places together",
        ],
      },

      {
        title: "Food",

        data: [
          "Try traditional Vietnamese dishes",
          "Enjoy a romantic meal together",
        ],
      },
    ],
  },

  {
    day: 2,

    title: "Culture and Heritage",

    image: vietnam3,

    color: "EB7E67",

    plans: [
      {
        title: "Visit",

        data: [
          "Discover historic and cultural locations",
          "Explore traditional Vietnamese architecture",
          "Experience local traditions and culture together",
        ],
      },

      {
        title: "Evening",

        data: [
          "Enjoy dinner together",
          "Take an evening walk",
          "Spend quality time together",
        ],
      },
    ],
  },

  {
    day: 3,

    title: "Ha Long Bay Romantic Escape",

    image: vietnam4,

    color: "FFE894",

    plans: [
      {
        title: "Activities",

        data: [
          "Experience the breathtaking scenery of Ha Long Bay",
          "Enjoy a scenic cruise together",
          "Take beautiful photographs as a couple",
        ],
      },

      {
        title: "Relax",

        data: [
          "Enjoy the beautiful natural surroundings",
          "Spend peaceful time together",
        ],
      },
    ],
  },

  {
    day: 4,

    title: "Adventure and Local Experiences",

    image: vietnam5,

    color: "83D3FC",

    plans: [
      {
        title: "Activities",

        data: [
          "Explore another beautiful destination in Vietnam",
          "Discover local markets and shops",
          "Enjoy activities together",
        ],
      },

      {
        title: "Relax",

        data: [
          "Relax after a full day of exploration",
          "Enjoy some private time together",
        ],
      },
    ],
  },

  {
    day: 5,

    title: "Relaxation and Vietnamese Cuisine",

    image: vietnam,

    color: "C7E788",

    plans: [
      {
        title: "Relax",

        data: [
          "Enjoy a relaxed day together",
          "Explore places at your own pace",
          "Enjoy some peaceful couple time",
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