import React, { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconUser } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import RecentPortfolios from "../components/RecentPortfolios";
import ScrollAnimation from "react-animate-on-scroll"; // https://dbramwell.github.io/react-animate-on-scroll/#home
import { GlowCapture, Glow } from "@codaworks/react-glow";
import { UserIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <GlowCapture>
      {/* Name/Info */}
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <ScrollAnimation animateIn="bounceInRight" initiallyVisible={true}>
          <div className=" overflow-hidden whitespace-nowrap text-ellipsis">
            <h1 className="text-copy-primary text-center mb-10 text-5xl md:text-6xl lg:text-9xl font-bold">
              <ReactTyped strings={["Tian", "ZiLiang Wu"]} typeSpeed={100} backSpeed={50} loop />
            </h1>
          </div>
        </ScrollAnimation>

        <div className="flex flex-row gap-4">
          <IconBrandGithub
            stroke={1.5}
            size={62}
            color="black"
            className="bg-cta/75 rounded-full p-1 hover:bg-cta-active"
          />
          <IconBrandLinkedin stroke={1.5} size={62} className="bg-cta/75 rounded-full p-1 hover:bg-cta-active" />
          <IconMail stroke={1.5} size={62} color="black" className="bg-cta/75 rounded-full p-1 hover:bg-cta-active" />
        </div>
      </div>

      <Glow>
        <div className="mt-24 mb-24 glow:bg-red-500/25 h-10 rounded-2xl" />
      </Glow>

      {/* Personal Statement */}
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-copy-primary font-bold text-4xl my-10">ABOUT</h2>

        <Glow>
          <div className="flex flex-col md:flex-row border-4 border-background glow:bg-red-500/25 glow:border-red-500/75 rounded-2xl ">
            <div className="flex justify-center items-center p-4 md:w-1/2 border-yellow-500 my-32">
              <UserIcon className="size-60 text-blue-500" />
            </div>
            <div className="flex justify-center items-center p-4 md:w-1/2 border-pink-500">
              <ScrollAnimation animateIn="fadeIn">
                <p className="text-copy-primary text-center md:text-left">
                  From a young age, game development and software development have always been my dream career paths and
                  I knew it was something that I wanted to do in the future. Through my academic background in game
                  development, I have developed strong skills in problem-solving, teamwork, and quick adaptation to new
                  technologies, tools, and various programming languages. I'm looking forward to transitioning to
                  software development as a junior software developer, applying all my previous knowledge in programming
                  to this industry to create impactful solutions with innovation.
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </Glow>
      </div>

      <Glow>
        <div className="mt-24 mb-24 glow:bg-orange-500/25 h-10 rounded-2xl" />
      </Glow>

      {/* Skills */}
      <div className="max-w-screen-xl m-auto">
        <h2 className="text-copy-primary font-bold text-4xl m-10">SKILLS</h2>
        <ul>
          <ScrollAnimation animateIn="fadeIn">
            <li className="text-copy-primary">
              <strong>Programming Languages:</strong> C#, JavaScript, Python.
            </li>
            <li className="text-copy-primary">
              <strong>Testing:</strong> TDD (Test Driven Development), Jest, Supertest, Browser Developer Tools,
              Lighthouse (Accessibility Testing Tool).
            </li>
            <li className="text-copy-primary">
              <strong>Back End:</strong> SQL, PostgreSQL, MVC (Model-View-Controller), Express, MongoDB, Firebase.
            </li>
            <li className="text-copy-primary">
              <strong>Front End:</strong> HTML, CSS, Vite.js, React, MUI (Material-UI), Tailwind.
            </li>
            <li className="text-copy-primary">
              <strong>Version Control:</strong> GitHub, Git.
            </li>
          </ScrollAnimation>
        </ul>
      </div>

      <Glow>
        <div className="mt-24 mb-24 glow:bg-yellow-500/25 h-10 rounded-2xl" />
      </Glow>

      {/* Projects */}
      <div className="">
        <h2 className="text-copy-primary font-bold text-4xl m-10">RECENT PROJECTS</h2>
        <RecentPortfolios></RecentPortfolios>
        <div className="m-20"></div>
        <Link to="/portfolios" className="text-copy-primary border p-2 rounded-2xl hover:bg-cta/80">
          Browse More
        </Link>
      </div>

      <Glow>
        <div className="mt-24 mb-24 glow:bg-green-500/25 h-10 rounded-2xl" />
      </Glow>

      {/* Education */}
      <div className="max-w-screen-xl m-auto">
        <h2 className="text-copy-primary font-bold text-4xl m-10">EDUCATION</h2>
        <ScrollAnimation animateIn="fadeIn">
          <div className="text-copy-primary">
            <strong>Northcoders | April 2024 - July 2024</strong>
            <p>JavaScript Software Development</p>
            <p className="text-copy-secondary">
              Course Subjects: JavaScript fundamentals (Testing, Value vs Reference, Scope, Array Methods, Destructing,
              Testing Higher Order Functions, Closure, Recursion, OOP, Async, Promises, Internet and Data Fetching),
              backend (SQL, MVC, Seeding, Testing, Error Handling, Routers, Middleware, Development and Test Databases,
              Complex Queries, API Hosting, Express, CI/CD), frontend (DOM, React, Data Fetching, Error Handling, Custom
              Hooks, Sorting and Pagination, Class Components, Hosting, MUI), hands-on team project.
            </p>
          </div>
          <div className="text-copy-primary">
            <strong>Manchester Metropolitan University | September 2019 – May 2022</strong>
            <p>Computer Games Technology – Upper Second Class Honours (2.1) </p>
            <p className="text-copy-secondary">
              Course Subjects: Coding, JavaScript, Networks, Networks and Security, Product Design, Project, User
              Experience Design, Video Games Development, Web Applications, Web Development.
            </p>
          </div>
          <div className="text-copy-primary">
            <strong>Loreto Sixth Form College | September 2017 – August 2019</strong>
            <p>IT (Business) - Distinction Star, Distinction Star, Distinction</p>
            <p className="text-copy-secondary">
              Course Subjects: Spreadsheets, social media and business, Databases, IT systems.
            </p>
          </div>
        </ScrollAnimation>
      </div>

      <Glow>
        <div className="mt-24 mb-24 glow:bg-blue-500/25 h-10 rounded-2xl" />
      </Glow>

      {/* Interest and Hobbies */}
      <div className="max-w-screen-xl m-auto">
        <h2 className="text-copy-primary font-bold text-4xl m-10">HOBBIES</h2>
        <ul>
          <ScrollAnimation animateIn="fadeIn">
            <li className="text-copy-primary/75">
              <strong className="text-copy-primary">Programming</strong>: I love turning ideas into reality by
              developing applications, websites, and games in my spare time. It’s both a creative outlet and a constant
              learning journey.
            </li>
            <li className="text-copy-primary/75">
              <strong className="text-copy-primary">Gaming</strong>: I’m an avid gamer, particularly fond of puzzle
              games and roguelikes. They challenge my problem-solving skills and provide endless fun.
            </li>
            <li className="text-copy-primary/75">
              <strong className="text-copy-primary">Sports</strong>: Whether it’s badminton, swimming, basketball, rock
              climbing, or ping pong, I enjoy staying active and spending quality time with friends and family through
              sports.
            </li>
            <li className="text-copy-primary/75">
              <strong className="text-copy-primary">Travelling</strong>: Exploring new destinations and immersing myself
              in different cultures is a passion of mine. I especially enjoy tasting local cuisines and learning about
              their culinary traditions.
            </li>
          </ScrollAnimation>
        </ul>
      </div>
    </GlowCapture>
  );
}
