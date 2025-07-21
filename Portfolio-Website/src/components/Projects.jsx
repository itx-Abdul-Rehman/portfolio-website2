import React from "react";
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
  return (
    <div
      id="projects"
      className="w-full py-20 px-4 sm:px-6 md:px-10 lg:px-16 bg-gradient-to-b from-white via-slate-100 to-white text-gray-900"
    >
      <AnimatedSection delay={0.3}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-14">
          Projects
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <AnimatedSection key={index} delay={0.4 + index * 0.1}>
            <div className="bg-white bg-opacity-60 backdrop-blur-md border border-gray-200 rounded-2xl shadow-xl p-5 hover:scale-105 transform transition duration-500">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-contain mb-4 rounded-xl"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {project.description}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

export default Projects;
