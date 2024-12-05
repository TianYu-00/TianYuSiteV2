import React from "react";

export default function Education() {
  const timelineEvents = [
    {
      date: "April 2024 - July 2024",
      title: "Northcoders",
      description: "Full-Stack Software Development",
      courses:
        "Course Subjects: JavaScript fundamentals (Testing, Value vs Reference, Scope, Array Methods, Destructing, Testing Higher Order Functions, Closure, Recursion, OOP, Async, Promises, Internet and Data Fetching), backend (SQL, MVC, Seeding, Testing, Error Handling, Routers, Middleware, Development and Test Databases, Complex Queries, API Hosting, Express, CI/CD), frontend (DOM, React, Data Fetching, Error Handling, Custom Hooks, Sorting and Pagination, Class Components, Hosting, MUI), hands-on team project.",
    },
    {
      date: "September 2019 – May 2022",
      title: "Manchester Metropolitan University",
      description: "Computer Games Technology – Upper Second Class Honours (2.1)",
      courses:
        "Course Subjects: Computer games fundamentals, Computer systems fundamentals, Introduction to web design and development, Programming, Algorithms and data structures, Computer games design, Computer graphics, Professional development, Advanced computer games design, Advanced computer graphics, Advanced computer development.",
    },
    {
      date: "September 2017 – August 2019",
      title: "Loreto Sixth Form College",
      description: "IT (Business) - Distinction Star, Distinction Star, Distinction",
      courses:
        "Course Subjects: Communication and employability skills for IT, Computer systems, Information systems, Impact of the use of IT on business systems, Organisational systems security, E-Commerce, Software design and development, Communication technologies, System analysis and design, Event driven programming, Project planning with IT, Database design, Client-side customisation of web pages, Human computer interaction, Web server scripting, Website production, Installing and upgrading software, Digital graphics and Business resources.",
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
            <div className="p-4 rounded-lg shadow-md glow:text-green-500/100 text-copy-primary text-sm md:text-base bg-card">
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
