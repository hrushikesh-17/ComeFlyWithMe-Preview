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
  title: "Vietnam Family Delux",

  heroImg: vietnam3,

  content: [
    `Experience Vietnam with your family through a deluxe journey filled with beautiful landscapes, delicious food, rich culture, exciting activities, and unforgettable experiences.`,

    `Explore the vibrant streets of Vietnam, discover fascinating cultural destinations, enjoy breathtaking natural scenery, and spend quality time together as a family.`,

    `This Deluxe package is designed for families who want a more comfortable Vietnam holiday with a great combination of sightseeing, adventure, relaxation, culture, food, and family-friendly experiences.`,
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

  price: "75,000",

  // ===================================================
  // PLAN
  // ===================================================

  planTitle: "Vietnam Family Delux",

  plans: [
    {
      title: "Vietnam Family Deluxe Adventure",

      data: [
        `Discover Vietnam together as a family while exploring beautiful destinations, experiencing local culture, enjoying delicious Vietnamese cuisine, and creating unforgettable memories.`,

        `Enjoy a comfortable deluxe family journey with a balanced combination of sightseeing, adventure, relaxation, cultural experiences, and quality family time.`,

        `From vibrant cities and historic destinations to breathtaking natural landscapes, this Deluxe package is designed to make your family trip comfortable, exciting, and memorable.`,
      ],

      url: "/vietnam/family/delux",

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
          "Check in to your hotel and settle down comfortably",
        ],
      },

      {
        title: "Activities",

        data: [
          "Explore nearby streets and local attractions",
          "Enjoy your first Vietnamese meal together",
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
          "Enjoy local food together as a family",
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
          "Experience local traditions and culture",
        ],
      },

      {
        title: "Family Time",

        data: [
          "Enjoy a family dinner",
          "Spend quality time together",
          "Explore the city during the evening",
        ],
      },
    ],
  },

  {
    day: 3,

    title: "Ha Long Bay Adventure",

    image: vietnam4,

    color: "FFE894",

    plans: [
      {
        title: "Activities",

        data: [
          "Experience the breathtaking scenery of Ha Long Bay",
          "Enjoy a scenic cruise",
          "Take photographs together",
        ],
      },

      {
        title: "Relax",

        data: [
          "Enjoy the beautiful natural surroundings",
          "Spend quality family time together",
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
          "Enjoy family-friendly activities",
        ],
      },

      {
        title: "Rest",

        data: [
          "Relax after a full day of exploration",
          "Enjoy some free family time",
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
          "Enjoy a relaxed day with your family",
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