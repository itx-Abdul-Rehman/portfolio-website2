import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnimatedSection from "./AnimatedSection";

const certifications = [
    {
        title: "Meta Front-End Developer Certificate",
        image: "/src/icons/meta.jpg",
        description:
            "Completed a professional certification by Meta covering HTML, CSS, JavaScript, React, and UI design principles through Coursera.",
    },
    {
        title: "Google IT Support Professional Certificate",
        image: "/src/icons/google.jpg",
        description:
            "Earned foundational knowledge in computer networking, systems administration, security, and troubleshooting via Google & Coursera.",
    },
    {
        title: "AWS Certified Cloud Practitioner",
        image: "/src/icons/aws.png",
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
        centerPadding: "60px",
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: "30px",
                },
            },
        ],
    };

    return (
        <div id="certifications" className="w-full py-20 px-4 md:px-16 bg-gradient-to-b from-white via-slate-100 to-white text-gray-900">
            <AnimatedSection delay={0.3}>
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
                    Certifications
                </h2>
            </AnimatedSection>

            <div className="max-w-2xl mx-auto">
                <Slider {...settings}>
                    {certifications.map((certification, index) => (
                        <AnimatedSection delay={0.5}>
                            <div
                                key={index}
                                className="relative w-full h-80 perspective-[1200px] group px-2"
                            >
                                <div className="relative w-full h-full duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                                    {/* Front */}
                                    <div className="absolute w-full h-full backface-hidden bg-white rounded-xl py-4 flex flex-col justify-center items-center">
                                        <img
                                            src={certification.image}
                                            alt={certification.title}
                                            className="h-[90%] w-full object-cover mb-4 shadow-md"
                                        />
                                        <h3 className="text-xl font-semibold text-center text-gray-800">
                                            {certification.title}
                                        </h3>
                                    </div>

                                    {/* Back */}
                                    <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-xl border border-gray-200 p-6 flex justify-center items-center">
                                        <p className="text-sm text-gray-600 text-center">
                                            {certification.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </Slider>
            </div>
        </div>
    );
};



const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <AnimatedSection delay={0.5} >
            <button
                onClick={onClick}
                className="absolute cursor-pointer top-1/2 right-[-30px] z-10 transform -translate-y-1/2 
                 bg-gray-800 text-white w-10 h-10 rounded-full 
                 hover:bg-gray-600 flex items-center justify-center shadow-md"
            >
                {`>`}
            </button>
        </AnimatedSection>
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <AnimatedSection delay={0.5} >
            <button
                onClick={onClick}
                className="absolute cursor-pointer top-1/2 left-[-30px] z-10 transform -translate-y-1/2 
                 bg-gray-800 text-white w-10 h-10 rounded-full 
                 hover:bg-gray-600 flex items-center justify-center shadow-md"
            >
                {`<`}
            </button>
        </AnimatedSection>
    );
};


export default Certifications;

