import React, { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";
import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import RecentPortfolios from "../components/RecentPortfolios";

export default function Home() {
  return (
    <div>
      {/* Name/Info */}
      <div className="border">
        <p>
          Hello World, I'm <ReactTyped strings={["Tian", "ZiLiang Wu"]} typeSpeed={100} backSpeed={50} loop />
        </p>
        <div className="flex flex-row justify-center items-center">
          <IconBrandGithub stroke={1.5} />
          <IconBrandLinkedin stroke={1.5} />
          <IconMail stroke={1.5} />
        </div>
      </div>

      {/* Personal Statement */}
      <div className="border">
        <h2 className="font-bold text-4xl m-10">ABOUT</h2>
        <p>
          From a young age, game development and software development have always been my dream career paths and I knew
          it was something that I wanted to do in the future. Through my academic background in game development, I have
          developed strong skills in problem-solving, teamwork, and quick adaptation to new technologies, tools, and
          various programming languages. I'm looking forward to transitioning to software development as a junior
          software developer, applying all my previous knowledge in programming to this industry to create impactful
          solutions with innovation.
        </p>
      </div>

      {/* Skills */}
      <div className="border">
        <h2 className="font-bold text-4xl m-10">SKILLS</h2>
        <ul>
          <li>
            <strong>Programming Languages:</strong> C#, JavaScript, Python.
          </li>
          <li>
            <strong>Testing:</strong> TDD (Test Driven Development), Jest, Supertest, Browser Developer Tools,
            Lighthouse (Accessibility Testing Tool).
          </li>
          <li>
            <strong>Back End:</strong> SQL, PostgreSQL, MVC (Model-View-Controller), Express, MongoDB, Firebase.
          </li>
          <li>
            <strong>Front End:</strong> HTML, CSS, Vite.js, React, MUI (Material-UI), Tailwind.
          </li>
          <li>
            <strong>Version Control:</strong> GitHub, Git.
          </li>
        </ul>
      </div>

      {/* Projects */}
      <div className="border">
        <h2 className="font-bold text-4xl m-10">RECENT PROJECTS</h2>
        <RecentPortfolios></RecentPortfolios>
        <Link to="/portfolios" className="border">
          Browse More
        </Link>
      </div>

      {/* Education */}
      <div className="border">
        <h2 className="font-bold text-4xl m-10">EDUCATION</h2>
        <div>
          <strong>Northcoders | April 2024 - July 2024</strong>
          <p>JavaScript Software Development</p>
          <p>
            Course Subjects: JavaScript fundamentals (Testing, Value vs Reference, Scope, Array Methods, Destructing,
            Testing Higher Order Functions, Closure, Recursion, OOP, Async, Promises, Internet and Data Fetching),
            backend (SQL, MVC, Seeding, Testing, Error Handling, Routers, Middleware, Development and Test Databases,
            Complex Queries, API Hosting, Express, CI/CD), frontend (DOM, React, Data Fetching, Error Handling, Custom
            Hooks, Sorting and Pagination, Class Components, Hosting, MUI), hands-on team project.
          </p>
        </div>
        <div>
          <strong>Manchester Metropolitan University | September 2019 – May 2022</strong>
          <p>Computer Games Technology – Upper Second Class Honours (2.1) </p>
          <p>
            Course Subjects: Coding, JavaScript, Networks, Networks and Security, Product Design, Project, User
            Experience Design, Video Games Development, Web Applications, Web Development.
          </p>
        </div>
        <div>
          <strong>Loreto Sixth Form College | September 2017 – August 2019</strong>
          <p>IT (Business) - Distinction Star, Distinction Star, Distinction</p>
          <p>Course Subjects: Spreadsheets, social media and business, Databases, IT systems.</p>
        </div>
      </div>

      {/* Interest and Hobbies */}
      <div className="border">
        <h2 className="font-bold text-4xl m-10">INTEREST/HOBBIES</h2>
        <ul>
          <li>
            <strong>Programming</strong>: I love turning ideas into reality by developing applications, websites, and
            games in my spare time. It’s both a creative outlet and a constant learning journey.
          </li>
          <li>
            <strong>Gaming</strong>: I’m an avid gamer, particularly fond of puzzle games and roguelikes. They challenge
            my problem-solving skills and provide endless fun.
          </li>
          <li>
            <strong>Sports</strong>: Whether it’s badminton, swimming, basketball, rock climbing, or ping pong, I enjoy
            staying active and spending quality time with friends and family through sports.
          </li>
          <li>
            <strong>Travelling</strong>: Exploring new destinations and immersing myself in different cultures is a
            passion of mine. I especially enjoy tasting local cuisines and learning about their culinary traditions.
          </li>
        </ul>
      </div>
    </div>
  );
}
