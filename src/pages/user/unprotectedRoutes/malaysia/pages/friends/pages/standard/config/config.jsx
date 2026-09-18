// =====================================================
// MALAYSIA - FRIENDS STANDARD
// =====================================================

import malaysiaFriendsStandard from "@/assets/malaysia1.jpg";
import malaysiaFriendsImage2 from "@/assets/malaysia2.jpg";
import malaysiaFriendsImage3 from "@/assets/malaysia3.jpg";
import malaysiaFriendsImage4 from "@/assets/malaysia4.jpg";
import malaysiaFriendsImage5 from "@/assets/malaysia5.jpg";

// =====================================================
// PAGE DATA
// =====================================================

export const data = {
  title: "Malaysia Friends Standard",

  // Main hero image
  heroImg: malaysiaFriendsStandard,

  content: [
    `Experience Malaysia with your closest friends through a comfortable journey filled with beautiful places, delicious food, exciting activities, and unforgettable experiences.`,

    `Explore the vibrant atmosphere of Malaysia, discover local culture, enjoy beautiful scenery, and spend memorable moments together with your friends.`,

    `This Standard package is designed for friends who want a comfortable Malaysia holiday with a balanced combination of sightseeing, adventure, relaxation, culture, food, and fun.`,
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
    malaysiaFriendsImage2,
    malaysiaFriendsImage3,
    malaysiaFriendsImage4,
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

    image: malaysiaFriendsStandard,

    color: "DDA15E",

    plans: [
      {
        title: "Rest",

        data: [
          "Relax after your arrival in Malaysia",
          "Check in to your hotel and settle down",
        ],
      },

      {
        title: "Activities",

        data: [
          "Explore nearby streets and local attractions",
          "Enjoy your first Malaysian meal with your friends",
        ],
      },
    ],
  },

  {
    day: 1,

    title: "Malaysia City Exploration",

    image: malaysiaFriendsImage2,

    color: "F5CFDE",

    plans: [
      {
        title: "Explore",

        data: [
          "Explore the vibrant city atmosphere",
          "Visit important local attractions",
          "Experience Malaysian culture and lifestyle",
        ],
      },

      {
        title: "Food",

        data: [
          "Try traditional Malaysian dishes",
          "Enjoy local food with your friends",
        ],
      },
    ],
  },

  {
    day: 2,

    title: "Culture and Heritage",

    image: malaysiaFriendsImage3,

    color: "EB7E67",

    plans: [
      {
        title: "Visit",

        data: [
          "Discover cultural and historic locations",
          "Explore local architecture",
          "Experience Malaysian traditions",
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

    title: "Adventure Day",

    image: malaysiaFriendsImage4,

    color: "FFE894",

    plans: [
      {
        title: "Activities",

        data: [
          "Enjoy an exciting day of exploration",
          "Discover beautiful Malaysian surroundings",
          "Take photographs with your friends",
        ],
      },

      {
        title: "Relax",

        data: [
          "Enjoy the scenery",
          "Spend quality time together",
        ],
      },
    ],
  },

  {
    day: 4,

    title: "Local Experiences",

    image: malaysiaFriendsImage5,

    color: "83D3FC",

    plans: [
      {
        title: "Activities",

        data: [
          "Explore local markets and shops",
          "Discover Malaysian food and culture",
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

    // Reuse image 2 rather than showing the same hero everywhere
    image: malaysiaFriendsImage2,

    color: "C7E788",

    plans: [
      {
        title: "Relax",

        data: [
          "Enjoy a relaxed day with your friends",
          "Explore places at your own pace",
        ],
      },

      {
        title: "Food",

        data: [
          "Enjoy authentic Malaysian cuisine",
          "Try local specialties and desserts",
        ],
      },
    ],
  },

  {
    day: 6,

    title: "Departure Day",

    // Use a different image from the main hero
    image: malaysiaFriendsImage5,

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