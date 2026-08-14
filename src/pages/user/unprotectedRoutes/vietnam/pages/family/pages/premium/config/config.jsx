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
  title: "Vietnam Family Premium",

  heroImg: vietnam5,

  content: [
    `Experience Vietnam with your family through a premium journey filled with beautiful landscapes, delicious food, rich culture, exciting adventures, and unforgettable experiences.`,

    `Explore the vibrant streets of Vietnam, discover fascinating cultural destinations, enjoy breathtaking natural scenery, and create wonderful memories together as a family.`,

    `This Premium package is designed for families who want a complete and comfortable Vietnam holiday with the perfect combination of sightseeing, adventure, relaxation, culture, food, and family-friendly experiences.`,
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

  price: "95,000",

  // ===================================================
  // PLAN
  // ===================================================

  planTitle: "Vietnam Family Premium",

  plans: [
    {
      title: "Vietnam Family Premium Adventure",

      data: [
        `Discover the best of Vietnam together as a family while exploring beautiful destinations, experiencing local culture, enjoying delicious Vietnamese cuisine, and creating unforgettable memories.`,

        `Enjoy a premium family journey combining sightseeing, adventure, relaxation, cultural experiences, delicious food, and quality time together.`,

        `From vibrant cities and historic destinations to breathtaking natural landscapes, this Premium package is designed to make your family trip comfortable, exciting, memorable, and enjoyable for everyone.`,
      ],

      url: "/vietnam/family/premium",

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
          "Enjoy your first Vietnamese meal together",
          "Spend the evening relaxing with your family",
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
          "Discover authentic Vietnamese flavors",
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
          "Enjoy a premium family dinner",
          "Spend quality time together",
          "Explore the city during the evening",
        ],
      },
    ],
  },

  {
    day: 3,

    title: "Ha Long Bay Premium Adventure",

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
          "Relax while taking in the spectacular views",
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
          "Enjoy some peaceful family time",
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