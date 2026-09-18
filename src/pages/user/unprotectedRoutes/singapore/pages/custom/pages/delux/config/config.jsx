// =====================================================
// SINGAPORE - CUSTOM DELUX
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
  title: "Singapore Custom Delux",

  // Different hero image from Custom Standard
  heroImg: singapore1,

  content: [
    "Experience Singapore through a comfortable deluxe custom journey designed around your interests, filled with modern attractions, delicious food, exciting activities, and unforgettable experiences.",

    "Explore Singapore at your own pace, discover its unique culture, enjoy beautiful landmarks, and create memorable moments with a trip designed around your preferences.",

    "This Delux package offers a more comfortable Singapore holiday with a balanced combination of sightseeing, adventure, relaxation, culture, food, and flexibility.",
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
          "Enjoy your first Singaporean meal",
        ],
      },
    ],
  },

  {
    day: 1,
    title: "Singapore City Exploration",
    image: singapore2,
    color: "F5CFDE",

    plans: [
      {
        title: "Visit",
        data: [
          "Explore Marina Bay",
          "See the Merlion",
          "Discover Singapore's city centre",
        ],
      },
      {
        title: "Explore",
        data: [
          "Choose attractions based on your interests",
          "Enjoy the city atmosphere",
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
          "Explore local food markets",
        ],
      },
    ],
  },

  {
    day: 3,
    title: "Deluxe Custom Adventure",
    image: singapore4,
    color: "FFE894",

    plans: [
      {
        title: "Activities",
        data: [
          "Choose activities according to your interests",
          "Explore Singapore's major attractions",
          "Take photographs and enjoy the experience",
        ],
      },
      {
        title: "Relax",
        data: [
          "Enjoy the evening at your own pace",
        ],
      },
    ],
  },

  {
    day: 4,
    title: "Sentosa Experience",
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
          "Choose activities based on your preferences",
          "Spend the day at your own pace",
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