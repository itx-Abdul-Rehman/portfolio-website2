import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnimatedSection from "./AnimatedSection";
import meta from '../icons/meta.jpg'
import google from '../icons/google.jpg'
import amazon from '../icons/aws.png'

const certifications = [
  {
    title: "Meta Front-End Developer Certificate",
    image: meta,
    description:
      "Completed a professional certification by Meta covering HTML, CSS, JavaScript, React, and UI design principles through Coursera.",
  },
  {
    title: "Google IT Support Professional Certificate",
    image: google,
    description:
      "Earned foundational knowledge in computer networking, systems administration, security, and troubleshooting via Google & Coursera.",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    image: amazon,
    description:
      "Certified by Amazon Web Services in basic cloud concepts, pricing models, deployment strategies, and AWS global infrastructure.",
  },
];

const Certifications = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: "80px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div
      id="certifications"
      className="w-full py-20 px-4 md:px-16 bg-gradient-to-b from-white via-slate-100 to-white text-gray-900"
    >
      <AnimatedSection delay={0.3}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-14">
          Certifications
        </h2>
      </AnimatedSection>

      <div className="max-w-3xl mx-auto">
        <Slider {...settings}>
          {certifications.map((certification, index) => (
            <div key={index}>
              <AnimatedSection delay={0.5}>
                <div className="relative w-full h-[400px] sm:h-[350px] md:h-[400px] lg:h-[420px] perspective-[1200px] group px-2">
                  <div className="relative w-full h-full duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                    {/* Front */}
                    <div className="absolute w-full h-full backface-hidden bg-white rounded-xl py-4 flex flex-col justify-center items-center overflow-hidden">
                      <img
                        src={certification.image}
                        alt={certification.title}
                        className="h-[70%] w-full object-contain mb-4 px-4"
                      />
                      <h3 className="text-lg sm:text-xl font-semibold text-center text-gray-800 px-2">
                        {certification.title}
                      </h3>
                    </div>

                    {/* Back */}
                    <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-xl border border-gray-200 p-6 flex justify-center items-center">
                      <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                        {certification.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute cursor-pointer top-1/2 right-[-20px] sm:right-[-30px] z-10 transform -translate-y-1/2 
     bg-gray-800 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full 
     hover:bg-gray-600 flex items-center justify-center shadow-md"
  >
    {`>`}
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute cursor-pointer top-1/2 left-[-20px] sm:left-[-30px] z-10 transform -translate-y-1/2 
     bg-gray-800 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full 
     hover:bg-gray-600 flex items-center justify-center shadow-md"
  >
    {`<`}
  </button>
);

export default Certifications;
