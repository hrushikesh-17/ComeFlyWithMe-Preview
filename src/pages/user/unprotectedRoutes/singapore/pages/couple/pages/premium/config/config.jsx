// =====================================================
// SINGAPORE - COUPLE PREMIUM
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
  title: "Singapore Couple Premium",

  // Different hero image for Premium
  heroImg: singapore5,

  content: [
    "Experience Singapore with your partner through a premium journey filled with beautiful attractions, delicious food, relaxing moments, comfort, and unforgettable experiences.",

    "Explore Singapore's vibrant city atmosphere, discover its unique culture, enjoy beautiful landmarks, and create memorable moments together.",

    "This Premium package is designed for couples who want a comfortable and memorable Singapore holiday with a balanced combination of sightseeing, relaxation, culture, food, adventure, and quality time together.",
  ],

  xRange1: ["0%", "-27%"],
  xRange2: ["0%", "-25%"],
  xRange3: ["0%", "-23%"],
  xRange4: ["0%", "-20%"],
  xRangeLast: ["0%", "0%"],

  // Different images instead of repeating singapore.jpg
  sliderImg: [
    singapore1,
    singapore2,
    singapore3,
  ],

  price: "75,000",
};

// =====================================================
// ACTIVITIES
// =====================================================

export const activities = [
  {
    day: 0,
    title: "Arrival Day",
    image: singapore5,
    color: "DDA15E",

    plans: [
      {
        title: "Rest",
        data: [
          "Relax after your arrival in Singapore",
          "Check in to your premium hotel and settle down",
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
    image: singapore1,
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
    image: singapore2,
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
    title: "Premium Couple Adventure",
    image: singapore3,
    color: "FFE894",

    plans: [
      {
        title: "Activities",
        data: [
          "Enjoy Singapore's major attractions",
          "Choose premium activities according to your interests",
          "Take photographs together",
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
    image: singapore4,
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
    title: "Shopping and Fine Food",
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
        title: "Food",
        data: [
          "Enjoy Singaporean cuisine",
          "Try local specialties and desserts",
        ],
      },
    ],
  },

  {
    day: 6,
    title: "Departure Day",
    image: singapore5,
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