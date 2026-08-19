import "./testimonial.scss";

// Slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Assets
import quotes from "@/assets/quotes.webp";
import tarun from "@/assets/tarun.jpg";
import eshwar from "@/assets/eshwar.jpg";
import kaushik from "@/assets/kaushik.jpg";
import jayanth from "@/assets/jayanth.jpg";

const Testimonial = () => {
  const data = [
    // --------------------------------------------------
    // EXISTING REVIEWS
    // --------------------------------------------------

    {
      name: "Jayanth",
      profilePic: jayanth,
      para1:
        "I recently spent a week in Phuket, and thanks to Vishnu and his team, it was an unforgettable experience. Our stay at the luxurious 10-bedroom villa was incredible. Vishnu's meticulous planning ensured we enjoyed a mix of both iconic and hidden gems in Phuket.",
      para2:
        "One of the highlights was a day trip to the Phi Phi Islands, where we snorkeled in crystal-clear waters and relaxed on pristine beaches. The trip to James Bond Island and Phang Nga Bay was another standout, offering breathtaking views and an exhilarating experience exploring sea caves by kayak.",
    },

    {
      name: "Tarun",
      profilePic: tarun,
      para1:
        "Phuket has always been on my travel bucket list, and Vishnu and his team made this trip beyond exceptional. Staying in a sprawling 10-bedroom villa with a private pool was the perfect start to our adventure.",
      para2:
        "The itinerary included a visit to the Big Buddha, offering panoramic views of the island, and a serene afternoon at Wat Chalong, Phuket’s largest and most revered temple. We also had a blast at the Andamanda Phuket Water Park, which was great fun for both kids and adults alike.",
    },

    {
      name: "Eshwar",
      profilePic: eshwar,
      para1:
        "Our recent trip to Phuket was absolutely perfect, thanks to Vishnu and his amazing team. We stayed in a magnificent 10-bedroom villa, complete with a pool and a games room that kept everyone entertained.",
      para2:
        "The itinerary was diverse and thrilling. We enjoyed a day trip to Phi Phi Islands, where the turquoise waters and sandy beaches were nothing short of paradise. Another memorable outing was the zipline adventure at Hanuman World, offering an adrenaline rush with stunning views from the treetops.",
    },

    {
      name: "Sai Kaushik Nampalli",
      profilePic: kaushik,
      para1:
        "Our honeymoon in Bali was a dream come true, filled with breathtaking landscapes and memorable experiences. From a warm welcome in Ubud to witnessing a hilltop sunrise, and kayaking through stunning waters, each day was a new adventure. The scenic drive to Uluwatu Temple, and Kechak dance, made for unforgettable moments.",
      para2:
        "We ended our trip with some shopping, poolside relaxation, and a couple’s massage. A huge thank you to Badri from the travel agency for making every detail perfect. We can't wait to return and explore even more of Bali’s beauty!",
    },

    // --------------------------------------------------
    // NEW GOOGLE REVIEWS
    // NO PROFILE PICTURES
    // --------------------------------------------------

    {
      name: "Murali Sure",
      para1:
        "We recently traveled to Malaysia and Langkawi with Come Fly With Me, and it was a wonderful experience from start to finish. The entire trip was very well organized, and the team guided us throughout the journey with great professionalism and care.",
      para2:
        "They made sure we were comfortable at every step and helped us enjoy all the major attractions without any hassle. Their support, planning, and hospitality made our trip smooth, stress-free, and truly memorable.",
      para3:
        "We sincerely thank the Come Fly With Me team for their excellent service and highly recommend them to anyone planning a vacation. We look forward to traveling with them again in the future!",
    },

    {
      name: "Sura Venkat",
      para1:
        "Recently we traveled to Malaysia with Comefly Travels, it was awesome experience, everything looks good accommodation and site seeing went good, hospitality was excellent.",
      para2:
        "I recommend to fly with Comefly.",
    },

    {
      name: "Soniya Donthula",
      para1:
        "Hi everyone! I just wanted to share my experience with Come Fly With Me. We recently travelled to Singapore and Malaysia, and honestly, the entire trip was such a wonderful and memorable experience.",
      para2:
        "From the planning and guidance to the actual trip, the team was with us throughout and made everything so smooth and comfortable. What I really appreciated was their constant support. Whenever we had a doubt or needed any help, they were always available and guided us properly. We got to explore some amazing places without having to worry about the arrangements.",
      para3:
        "A big thank you to the entire Come Fly With Me team for making our Singapore and Malaysia vacation so enjoyable and stress-free. ❤️ I would definitely recommend them to anyone planning a vacation. For me, it’s a 5 out of 5! ⭐⭐⭐⭐⭐ Thank you, Come Fly With Me, for giving us such beautiful memories! ✨",
    },

    {
      name: "Akshay Kumar",
      para1:
        "We had a wonderful experience with Come Fly With Me during our Singapore and Malaysia trip as a couple. From the initial planning to the final day of our journey, everything was well organized and smoothly managed.",
      para2:
        "The itinerary covered all the major attractions, including beautiful places in Singapore and Malaysia, and the arrangements for hotels, transportation, sightseeing, and transfers were handled very professionally. The team was responsive, helpful, and always available whenever we needed assistance.",
      para3:
        "What we appreciated most was the hassle-free experience. We could simply enjoy our vacation without worrying about the arrangements. The trip was comfortable, memorable, and perfectly suited for a couple. A big thank you to the entire team for making our holiday so special! Highly recommended for anyone planning a well-organized and enjoyable international trip.",
    },

    {
      name: "Somnath Kalakuntla",
      para1:
        "Good experience with travelling under comeflywithme. Very hassle free and quicker response we face any kind of issues over travel.",
      para2:
        "Good guidance and very easy ways to explore our itinerary within time and good service and hospitality with them.",
      para3:
        "Had a great experience. Again and again I will be going to any international trip with comeflywithme .... 😀",
    },

    {
      name: "Naveen Kumar",
      para1:
        "We recently completed our 8-day, 7-night Bali trip with Come Fly With Me, and we had a wonderful experience overall. The trip was well planned and organized, and the itinerary covered the major places we wanted to visit while still giving us enough time to enjoy Bali.",
      para2:
        "The coordination throughout the trip was smooth, and the arrangements for our stay, transportation, sightseeing, and activities were handled properly. We especially appreciated the support and communication from the Come Fly With Me team. Whenever we needed any information or assistance, they were responsive and helpful.",
      para3:
        "This made our vacation much more comfortable and stress-free. My wife and I really enjoyed our time in Bali and came back with some beautiful memories. Thank you to the entire Come Fly With Me team for helping make our Bali vacation a memorable one. We would definitely recommend Come Fly With Me to couples and families looking for a well-organized and enjoyable vacation.",
    },
  ];

  return (
    <section className="testimonial">
      <div className="content">
        <h2>Happy Customers</h2>
        <img src={quotes} alt="" />
      </div>

      <Swiper
        spaceBetween={20}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="top-card">
              {item.profilePic && (
                <img src={item.profilePic} alt={item.name} />
              )}

              <h4>{item.name}</h4>
              <p>Happy Customer</p>
            </div>

            <div className="bottom-card">
              <div className="message">
                {item.para1 && <p>{item.para1}</p>}
                {item.para2 && <p>{item.para2}</p>}
                {item.para3 && <p>{item.para3}</p>}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;