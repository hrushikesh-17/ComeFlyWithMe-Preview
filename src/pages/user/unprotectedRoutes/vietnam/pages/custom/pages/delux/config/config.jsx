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
  title: "Vietnam Custom Delux",

  heroImg: vietnam3,

  content: [
    `Create your own deluxe Vietnam journey with an itinerary designed around your interests, travel style, and budget.`,

    `Explore beautiful landscapes, vibrant cities, cultural destinations, local markets, delicious Vietnamese cuisine, and unforgettable experiences while enjoying a more comfortable travel experience.`,

    `This Deluxe Custom package gives you the freedom to combine adventure, sightseeing, relaxation, culture, food, and unique experiences into a journey created especially for you.`,
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

  planTitle: "Vietnam Custom Delux",

  plans: [
    {
      title: "Vietnam Custom Deluxe Journey",

      data: [
        `Design your Vietnam experience around the places and activities you enjoy most. Discover beautiful destinations, local culture, delicious food, and memorable experiences in comfort.`,

        `Enjoy a flexible deluxe journey combining sightseeing, adventure, relaxation, cultural experiences, and local cuisine according to your personal travel preferences.`,

        `Whether you want vibrant cities, peaceful landscapes, cultural discoveries, exciting adventures, or relaxing experiences, this Custom Deluxe package gives you the freedom to create your ideal Vietnam journey.`,
      ],

      url: "/vietnam/custom/delux",

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
        title: "Explore",

        data: [
          "Explore nearby streets and local attractions",
          "Enjoy your first Vietnamese meal",
        ],
      },
    ],
  },

  {
    day: 1,

    title: "City and Culture",

    image: vietnam2,

    color: "F5CFDE",

    plans: [
      {
        title: "Explore",

        data: [
          "Explore vibrant streets and local attractions",
          "Discover Vietnamese culture and traditions",
          "Visit places that match your interests",
        ],
      },

      {
        title: "Food",

        data: [
          "Try traditional Vietnamese dishes",
          "Explore local markets and food spots",
          "Enjoy authentic Vietnamese flavors",
        ],
      },
    ],
  },

  {
    day: 2,

    title: "Heritage and Discovery",

    image: vietnam3,

    color: "EB7E67",

    plans: [
      {
        title: "Visit",

        data: [
          "Discover historic and cultural destinations",
          "Explore traditional Vietnamese architecture",
          "Experience local traditions",
        ],
      },

      {
        title: "Flexible Time",

        data: [
          "Choose activities based on your interests",
          "Enjoy free time to explore at your own pace",
        ],
      },
    ],
  },

  {
    day: 3,

    title: "Ha Long Bay Deluxe Adventure",

    image: vietnam4,

    color: "FFE894",

    plans: [
      {
        title: "Activities",

        data: [
          "Experience the breathtaking scenery of Ha Long Bay",
          "Enjoy a scenic cruise",
          "Take photographs of the beautiful surroundings",
        ],
      },

      {
        title: "Relax",

        data: [
          "Enjoy peaceful time surrounded by nature",
          "Relax while taking in the beautiful views",
        ],
      },
    ],
  },

  {
    day: 4,

    title: "Local Experiences",

    image: vietnam5,

    color: "83D3FC",

    plans: [
      {
        title: "Explore",

        data: [
          "Discover another destination in Vietnam",
          "Visit local markets and shops",
          "Experience activities based on your preferences",
        ],
      },

      {
        title: "Free Time",

        data: [
          "Relax after a day of exploration",
          "Enjoy comfortable free time at your own pace",
        ],
      },
    ],
  },

  {
    day: 5,

    title: "Relaxation and Food",

    image: vietnam,

    color: "C7E788",

    plans: [
      {
        title: "Relax",

        data: [
          "Enjoy a relaxed day in Vietnam",
          "Choose your preferred activities",
          "Explore places at your own pace",
        ],
      },

      {
        title: "Food",

        data: [
          "Enjoy authentic Vietnamese cuisine",
          "Try local specialties and desserts",
          "Discover new Vietnamese flavors",
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