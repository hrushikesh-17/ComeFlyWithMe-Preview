// =====================================================
// SINGAPORE - COUPLE DELUX
// =====================================================

import singapore from "@/assets/singapore.jpg";
import singapore1 from "@/assets/singapore1.jpg";
import singapore2 from "@/assets/singapore2.jpg";
import singapore3 from "@/assets/singapore3.jpg";
import singapore4 from "@/assets/singapore4.jpg";
import singapore5 from "@/assets/singapore5.jpg";

// =====================================================
// PAGE DATA
// =====================================================

export const data = {
  title: "Singapore Couple Delux",

  // Different hero image from Couple Standard
  heroImg: singapore1,

  content: [
    "Experience Singapore with your partner through a comfortable deluxe journey filled with beautiful attractions, delicious food, relaxing moments, and unforgettable experiences.",

    "Explore Singapore's vibrant city atmosphere, discover its unique culture, enjoy beautiful landmarks, and create memorable moments together.",

    "This Delux package is designed for couples who want a more comfortable Singapore holiday with a balanced combination of sightseeing, relaxation, culture, food, adventure, and quality time together.",
  ],

  xRange1: ["0%", "-27%"],
  xRange2: ["0%", "-25%"],
  xRange3: ["0%", "-23%"],
  xRange4: ["0%", "-20%"],
  xRangeLast: ["0%", "0%"],

  sliderImg: [
    singapore2,
    singapore3,
    singapore4,
  ],

  price: "65,000",
};

// =====================================================
// ACTIVITIES
// =====================================================

export const activities = [
  {
    day: 0,
    title: "Arrival Day",
    image: singapore1,
    color: "DDA15E",

    plans: [
      {
        title: "Rest",
        data: [
          "Relax after your arrival in Singapore",
          "Check in to your deluxe hotel and settle down",
        ],
      },
      {
        title: "Activities",
        data: [
          "Explore nearby attractions",
          "Enjoy your first meal together",
        ],
      },
    ],
  },

  {
    day: 1,
    title: "Romantic Singapore City",
    image: singapore2,
    color: "F5CFDE",

    plans: [
      {
        title: "Visit",
        data: [
          "Explore Marina Bay",
          "See the Merlion",
          "Enjoy Singapore's beautiful city views",
        ],
      },
      {
        title: "Evening",
        data: [
          "Enjoy a romantic evening together",
          "Explore the city at night",
        ],
      },
    ],
  },

  {
    day: 2,
    title: "Culture and Heritage",
    image: singapore3,
    color: "EB7E67",

    plans: [
      {
        title: "Visit",
        data: [
          "Explore Chinatown",
          "Visit Little India",
          "Discover local heritage and architecture",
        ],
      },
      {
        title: "Food",
        data: [
          "Try authentic Singaporean cuisine",
          "Enjoy a special meal together",
        ],
      },
    ],
  },

  {
    day: 3,
    title: "Couple Adventure",
    image: singapore4,
    color: "FFE894",

    plans: [
      {
        title: "Activities",
        data: [
          "Enjoy Singapore's major attractions",
          "Take photographs together",
          "Spend quality time exploring the city",
        ],
      },
      {
        title: "Relax",
        data: [
          "Enjoy a relaxed evening together",
        ],
      },
    ],
  },

  {
    day: 4,
    title: "Sentosa Escape",
    image: singapore5,
    color: "83D3FC",

    plans: [
      {
        title: "Visit",
        data: [
          "Explore Sentosa Island",
          "Enjoy the beach and island atmosphere",
        ],
      },
      {
        title: "Activities",
        data: [
          "Choose activities you both enjoy",
          "Spend a relaxing day together",
        ],
      },
    ],
  },

  {
    day: 5,
    title: "Shopping and Relaxation",
    image: singapore2,
    color: "C7E788",

    plans: [
      {
        title: "Shopping",
        data: [
          "Explore popular shopping areas",
          "Shop for souvenirs and gifts",
        ],
      },
      {
        title: "Relax",
        data: [
          "Enjoy a relaxed evening together",
          "Explore Singapore at your own pace",
        ],
      },
    ],
  },

  {
    day: 6,
    title: "Departure Day",
    image: singapore1,
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