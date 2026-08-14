// Assets
import vietnam1 from "@/assets/vietnam1.webp";
import vietnam2 from "@/assets/vietnam2.webp";
import vietnam3 from "@/assets/vietnam3.webp";
import vietnam4 from "@/assets/vietnam4.webp";
import vietnam5 from "@/assets/vietnam5.webp";

// =====================================================
// DATA
// =====================================================

export const data = {
  title: "Vietnam Friends Standard",

  heroImg: vietnam2,

  content: [
    `Experience Vietnam with your closest friends through an exciting journey filled with beautiful landscapes, incredible food, and unforgettable experiences.`,

    `Explore the vibrant streets of Vietnam, discover local culture, cruise through breathtaking Ha Long Bay, and enjoy memorable moments together.`,

    `This Standard package is designed for friends who want a comfortable Vietnam holiday with the perfect balance of adventure, sightseeing, relaxation, and fun.`,
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

  price: "55,000",
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
        ],
      },
      {
        title: "Activities",
        data: [
          "Explore nearby streets and local attractions",
          "Enjoy your first Vietnamese meal with friends",
        ],
      },
    ],
  },

  {
    day: 1,
    title: "Explore Vietnam",
    image: vietnam2,
    color: "F5CFDE",

    plans: [
      {
        title: "Visit",
        data: [
          "Explore local markets and vibrant streets",
          "Discover Vietnamese culture and architecture",
        ],
      },
    ],
  },

  {
    day: 2,
    title: "Ha Long Bay Adventure",
    image: vietnam3,
    color: "EB7E67",

    plans: [
      {
        title: "Activities",
        data: [
          "Cruise through the breathtaking waters of Ha Long Bay",
          "Enjoy scenic views with your friends",
        ],
      },
      {
        title: "Relax",
        data: [
          "Enjoy the evening after your day of adventure",
        ],
      },
    ],
  },

  {
    day: 3,
    title: "Nature and Sightseeing",
    image: vietnam4,
    color: "FFE894",

    plans: [
      {
        title: "Visit",
        data: [
          "Explore Vietnam's beautiful natural landscapes",
          "Discover local cultural attractions",
        ],
      },
      {
        title: "Activities",
        data: [
          "Enjoy sightseeing and photography with your squad",
        ],
      },
    ],
  },

  {
    day: 4,
    title: "Food and Culture",
    image: vietnam5,
    color: "83D3FC",

    plans: [
      {
        title: "Food",
        data: [
          "Enjoy authentic Vietnamese cuisine",
          "Explore local food markets",
        ],
      },
      {
        title: "Culture",
        data: [
          "Experience the local lifestyle and traditions",
        ],
      },
    ],
  },

  {
    day: 5,
    title: "Free Day",
    image: vietnam3,
    color: "C7E788",

    plans: [
      {
        title: "Rest",
        data: [
          "Relax and spend time together",
        ],
      },
      {
        title: "Activities",
        data: [
          "Explore places of your choice",
          "Enjoy a relaxed evening with your friends",
        ],
      },
    ],
  },

  {
    day: 6,
    title: "Departure Day",
    image: vietnam4,
    color: "F2A7B3",

    plans: [
      {
        title: "Departure",
        data: [
          "Prepare for your flight home",
          "Take your memories and photos from Vietnam with you",
        ],
      },
    ],
  },
];