import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialData = [
  {
    id: 1,
    name: "Riyaz",
    text: "This school has changed my life! The teachers are so supportive and the environment is perfect for learning.",
    img: "src/assets/myimage.jpg", // Ensure the correct image path
  },
  {
    id: 2,
    name: "Riyaz pokhrel",
    text: "The curriculum is well-rounded and the extra-curricular activities are amazing. I've grown so much here.",
    img: "src/assets/myimage.jpg",
  },
  {
    id: 3,
    name: "Riyaz pokhrel",
    text: "The facilities are top-notch and the staff is always there to help. I feel so prepared for my future!",
    img: "src/assets/myimage.jpg",
  },
  {
    id: 4,
    name: "Riyaz pokhrel",
    text: "I love the diversity and the sense of community at this school. It's a great place to grow and learn.",
    img: "src/assets/myimage.jpg",
  },
  {
    id: 5,
    name: "Riyaz pokhrel",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "src/assets/myimage.jpg",
  },
];

const Testamonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testamonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Some feedback of our students
          </p>
        </div>
        {/* Testimonials card */}
        <div>
          <Slider {...settings}>
            {TestimonialData.map((item) => (
              <div className="my-6" key={item.id}>
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl  bg-primary/10 relative">
                  <div className="mb-4">
                    <img
                      className="rounded-full w-20 h-20"
                      src={item.img}
                      alt={item.name}
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-400">{item.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {item.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testamonials;
