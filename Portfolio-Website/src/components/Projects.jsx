import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnimatedSection from "./AnimatedSection";

const projects = [
    {
        title: "TaskMate – AI-Powered Productivity App",
        image: "/src/icons/4871715.jpg",
        description:
            "A React Native app that uses AI to suggest daily task priorities, integrates calendar syncing, and includes gamified productivity tracking.",
    },
    {
        title: "EcoTrack – Smart Waste Management System",
        image: "/src/icons/6289.jpg",
        description:
            "An IoT-based platform for cities to monitor garbage bins in real-time using sensors and display optimal pickup routes for collection trucks.",
    },
    {
        title: "EduQuest – Gamified Learning Portal",
        image: "/src/icons/20945449.jpg",
        description:
            "A web portal using gamification and quizzes to make learning engaging for students. Built using MERN stack with real-time leaderboard updates.",
    },
];


const Projects = () => {
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
        <div id="projects" className="w-full py-20 px-4 md:px-16 bg-gradient-to-b from-white via-slate-100 to-white text-gray-900">
            <AnimatedSection delay={0.3}>
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
                    Projects
                </h2>
            </AnimatedSection>

            <div className="max-w-2xl mx-auto">
                <Slider {...settings}>
                    {projects.map((project, index) => (
                        <AnimatedSection delay={0.5}>
                            <div
                                key={index}
                                className="relative w-full h-80 perspective-[1200px] group px-2"
                            >
                                <div className="relative w-full h-full duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                                    {/* Front */}
                                    <div className="absolute w-full h-full backface-hidden bg-white rounded-xl py-4 flex flex-col justify-center items-center">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="h-[90%] w-full object-cover mb-4 shadow-md"
                                        />
                                        <h3 className="text-xl font-semibold text-center  text-gray-800">
                                            {project.title}
                                        </h3>
                                    </div>

                                    {/* Back */}
                                    <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-xl border border-gray-200 p-6 flex justify-center items-center">
                                        <p className="text-sm text-gray-600 text-center">
                                            {project.description}
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


export default Projects;

