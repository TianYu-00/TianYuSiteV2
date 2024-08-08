import React from "react";

export default function Education() {
  const timelineEvents = [
    {
      date: "April 2024 - July 2024",
      title: "Northcoders",
      description: "Full-Stack Software Development",
      courses:
        "Course Subjects: JavaScript fundamentals (Testing, Value vs Reference, Scope, Array Methods, Destructuring, Testing Higher Order Functions, Closure, Recursion, OOP, Async, Promises, Internet and Data Fetching). \n\nBackend (SQL, MVC, Seeding, Testing, Error Handling, Routers, Middleware, Development and Test Databases, Complex Queries, API Hosting, Express, CI/CD). \n\nFrontend (DOM, React, Data Fetching, Error Handling, Custom Hooks, Sorting and Pagination, Class Components, Hosting, MUI).",
    },
    {
      date: "September 2019 – May 2022",
      title: "Manchester Metropolitan University",
      description: "Computer Games Technology – Upper Second Class Honours (2.1)",
      courses:
        "Course Subjects: Coding, JavaScript, Networks, Networks and Security, Product Design, Project, User Experience Design, Video Games Development, Web Applications, Web Development.",
    },
    {
      date: "September 2017 – August 2019",
      title: "Loreto Sixth Form College",
      description: "IT (Business) - Distinction Star, Distinction Star, Distinction",
      courses: "Course Subjects: Spreadsheets, social media and business, Databases, IT systems.",
    },
  ];

  return (
    <div className="relative flex flex-col items-center px-4 md:px-8">
      {/* Line */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px bg-gray-500/50 glow:bg-green-500/50 h-full" />

      {timelineEvents.map((event, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center w-full mb-8 ${
            index % 2 === 0 ? "md:justify-start" : "md:justify-end"
          }`}
        >
          {/* Content */}
          <div
            className={`relative w-full md:w-1/2 ${index % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"}`}
          >
            <div className="p-4 rounded-lg shadow-md glow:text-green-500/100 text-copy-primary text-sm md:text-base">
              <strong className="block text-base md:text-lg">
                {event.title} | {event.date}
              </strong>
              <p className="mt-2 text-xs md:text-sm">{event.description}</p>
              <p className="text-copy-secondary mt-2 whitespace-pre-line text-xs md:text-sm">{event.courses}</p>
            </div>

            {/* Marker */}
            <div
              className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-6 md:h-6 bg-green-300 glow:bg-green-500/100 rounded-full border-2 md:border-4 border-white ${
                index % 2 === 0 ? "-right-2 md:-right-3" : "-left-2 md:-left-3"
              }`}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
