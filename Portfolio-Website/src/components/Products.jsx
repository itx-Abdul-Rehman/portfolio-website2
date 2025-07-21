import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnimatedSection from "./AnimatedSection";

const products = [
    {
        title: "QuickPay – Digital Payment Solution",
        image: "/src/icons/headerImage.png",
        description:
            "A secure digital wallet and payment gateway designed for seamless online transactions, bill payments, and peer-to-peer transfers.",
    },
    {
        title: "FitGenie – AI Health Companion",
        image: "/src/icons/headerImage.png",
        description:
            "An AI-powered mobile app that tracks fitness goals, provides personalized workout plans, and integrates with smart health devices.",
    },
    {
        title: "ShopEase – E-Commerce Engine",
        image: "/src/icons/headerImage.png",
        description:
            "A customizable e-commerce product for online businesses with support for inventory management, payment integration, and customer analytics.",
    },
];

const Products = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        centerMode: true,
        centerPadding: "150px",
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    centerPadding: "100px",
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    centerPadding: "60px",
                },
            },
            {
                breakpoint: 768,
                settings: {
                    centerPadding: "30px",
                },
            },
            {
                breakpoint: 480,
                settings: {
                    centerPadding: "10px",
                },
            },
        ],
    };

    return (
        <div
            id="products"
            className="w-full py-20 px-4 sm:px-8 md:px-12 bg-gradient-to-b from-white via-slate-100 to-white text-gray-900"
        >
            <AnimatedSection delay={0.3}>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-14">
                    Products
                </h2>
            </AnimatedSection>

            <div className="max-w-5xl mx-auto">
                <Slider {...settings}>
                    {products.map((product, index) => (
                        <AnimatedSection key={index} delay={0.5}>
                            <div className="relative w-full h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] perspective-[1200px] group px-2">
                                <div className="relative w-full h-full duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                                    {/* Front Side */}
                                    <div className="absolute w-full h-full backface-hidden bg-white rounded-xl py-4 flex flex-col justify-center items-center shadow-md">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="h-[60%] w-[85%] object-contain mb-4"
                                        />
                                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center text-gray-800 px-2">
                                            {product.title}
                                        </h3>
                                    </div>

                                    {/* Back Side */}
                                    <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-xl border border-gray-200 p-6 flex justify-center items-center shadow-md">
                                        <p className="text-sm sm:text-base text-gray-600 text-center">
                                            {product.description}
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

const NextArrow = ({ onClick }) => (
    <AnimatedSection delay={0.5}>
        <button
            onClick={onClick}
            className="absolute top-1/2 right-[-15px] md:right-[-25px] transform -translate-y-1/2 
                bg-gray-800 text-white w-8 h-8 md:w-10 md:h-10 rounded-full 
                hover:bg-gray-600 flex items-center justify-center shadow-md z-10"
        >
            {`>`}
        </button>
    </AnimatedSection>
);

const PrevArrow = ({ onClick }) => (
    <AnimatedSection delay={0.5}>
        <button
            onClick={onClick}
            className="absolute top-1/2 left-[-15px] md:left-[-25px] transform -translate-y-1/2 
                bg-gray-800 text-white w-8 h-8 md:w-10 md:h-10 rounded-full 
                hover:bg-gray-600 flex items-center justify-center shadow-md z-10"
        >
            {`<`}
        </button>
    </AnimatedSection>
);

export default Products;
