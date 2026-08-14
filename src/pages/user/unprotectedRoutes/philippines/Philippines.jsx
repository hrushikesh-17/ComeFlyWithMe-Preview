import philippines from "@/assets/philippines.jpg";

const sliderImg = [
  philippines,
  philippines,
  philippines,
  philippines,
];

const activities = [
  {
    day: 0,
    title: "Arrival Day",
    image: philippines,
    color: "DDA15E",
    plans: [
      {
        title: "Rest",
        data: [
          "Relax after arriving in the Philippines",
          "Check in to the hotel and settle down",
        ],
      },
      {
        title: "Explore",
        data: [
          "Explore nearby attractions",
          "Enjoy your first Filipino meal",
        ],
      },
    ],
  },
  {
    day: 1,
    title: "Island Exploration",
    image: philippines,
    color: "F5CFDE",
    plans: [
      {
        title: "Visit",
        data: [
          "Explore beautiful island surroundings",
          "Visit local attractions",
        ],
      },
      {
        title: "Activities",
        data: [
          "Enjoy scenic views",
          "Take photographs",
        ],
      },
    ],
  },
  {
    day: 2,
    title: "Beach and Nature",
    image: philippines,
    color: "EB7E67",
    plans: [
      {
        title: "Beach",
        data: [
          "Enjoy the beautiful tropical beaches",
          "Relax beside the clear waters",
        ],
      },
      {
        title: "Explore",
        data: [
          "Discover the natural surroundings",
          "Enjoy the island atmosphere",
        ],
      },
    ],
  },
  {
    day: 3,
    title: "Adventure Day",
    image: philippines,
    color: "FFE894",
    plans: [
      {
        title: "Activities",
        data: [
          "Enjoy exciting island activities",
          "Explore beautiful natural locations",
        ],
      },
      {
        title: "Adventure",
        data: [
          "Take photographs",
          "Create unforgettable memories",
        ],
      },
    ],
  },
  {
    day: 4,
    title: "Culture and Food",
    image: philippines,
    color: "83D3FC",
    plans: [
      {
        title: "Culture",
        data: [
          "Discover Filipino culture",
          "Explore local traditions",
        ],
      },
      {
        title: "Food",
        data: [
          "Try authentic Filipino cuisine",
          "Enjoy local specialties",
        ],
      },
    ],
  },
  {
    day: 5,
    title: "Relaxation Day",
    image: philippines,
    color: "C7E788",
    plans: [
      {
        title: "Relax",
        data: [
          "Enjoy a relaxed day",
          "Spend quality time together",
        ],
      },
      {
        title: "Explore",
        data: [
          "Visit places at your own pace",
          "Enjoy the tropical surroundings",
        ],
      },
    ],
  },
  {
    day: 6,
    title: "Departure Day",
    image: philippines,
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

export const createPhilippinesConfig = ({
  category,
  packageType,
  price = "55,000",
}) => {
  const categoryName =
    category.charAt(0).toUpperCase() + category.slice(1);

  const packageName =
    packageType.charAt(0).toUpperCase() + packageType.slice(1);

  const title = `Philippines ${categoryName} ${packageName}`;

  return {
    data: {
      title,
      heroImg: philippines,

      content: [
        `Experience the beautiful Philippines with your ${category} through an unforgettable journey filled with tropical beaches, beautiful landscapes, local culture, delicious food, and amazing experiences.`,

        `Explore stunning islands, discover local attractions, enjoy breathtaking scenery, and create unforgettable memories together.`,

        `This ${packageName} package is designed for ${category} who want a comfortable Philippines holiday combining sightseeing, adventure, relaxation, culture, food, and fun.`,
      ],

      xRange1: ["0%", "-27%"],
      xRange2: ["0%", "-25%"],
      xRange3: ["0%", "-23%"],
      xRange4: ["0%", "-20%"],
      xRangeLast: ["0%", "0%"],

      sliderImg,

      price,
    },

    activities,
  };
};